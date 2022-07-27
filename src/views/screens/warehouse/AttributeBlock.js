import React,{useEffect,useLayoutEffect,useRef,useState,useMemo} from 'react'
import {SvGBtnPlus,Preloaded} from '../../../until/svg-pack';
import _, { set } from 'lodash';
import ScrollBox from './reactScroll';
// import {dataAttribute} from '../data/dataAttribute';
import WarehouseDropMenu from './WarehouseDropMenu';
import WarehouseInput from './WarehouseInput';
import { useFetch } from '../../../until/data/useFetch';
// import SimpleBar from 'simplebar-react';
import SwitchBtn from './SwitchBtn';
import MaxaScroll from './MaxaScroll';
import WarehouseInputField from './WarehouseInputField';
import AttributeList from './AttributeList';
import ScrollBar from './ScrollBar';

let hover;
let plusminus;
const AttributeBlock = ({ translator, setObjAttribute, objAttribute }) => {
	const { data, error, isLoading } = useFetch(
		// 	'http://192.168.0.197:3005/goodAttributes', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 		"query": {},
		// 		// "start": 10,
		// 		// "start": props.folder.at(-1)?.id,
		// 		"end": 20
		// 	})
		// }
	);
	const [lastIndex, setLastIndex] = useState(0);
	const [hideMenu, setHideMenu] = useState(false);
	const [podlozhka, setPodlozhka] = useState(false);
	const [addOneItem, setAddOneItem] = useState(false);
	const [sortActive, setSortActive] = useState(false);
	const [hideArrow, setHideArrow] = useState(false);
	const refScroll = useRef();
	const [start, setStart] = useState(0);
	let rowHeight = 18;
	const [visibleRows, setVisible] = useState(
		Math.floor((document.body.clientHeight * 1.2 - 170) / rowHeight)
	);
	useEffect(() => {
		setVisible(Math.floor((document.body.clientHeight * 1.2 - 170) / rowHeight));
	}, [visibleRows]);
	function getStart() {
		let temp = start - Math.floor(document.body.clientHeight * 0.15) < 0
			? 0
			: start - Math.floor(document.body.clientHeight * 0.15);
		return Math.min(objAttribute.length - visibleRows - 1, Math.floor(temp / rowHeight));
	}

	function getTopHeight() {
		let temp =
			start - Math.floor(document.body.clientHeight * 0.15) < 0
				? 0
				: start - Math.floor(document.body.clientHeight * 0.15);
		return rowHeight * Math.min(objAttribute.length - visibleRows - 1, Math.floor(temp / rowHeight));
	}
	function getBottomHeight() {
		let temp =
			start - Math.floor(document.body.clientHeight * 0.15) < 0
				? 0
				: start - Math.floor(document.body.clientHeight * 0.15);
		return (
			rowHeight *
			(objAttribute.length -
				(Math.min(objAttribute.length - visibleRows - 1, Math.floor(temp / rowHeight)) +
					visibleRows +
					1))
		);
	}
	async function updateHover(e) {
		clearTimeout(hover);
		if (!document.querySelector('.first-tab-body').classList.contains('hoverOff')) {
			document.querySelector('.first-tab-body').classList.add('hoverOff');
		}
		hover = setTimeout(() => {
			document.querySelector('.first-tab-body').classList.remove('hoverOff');
		}, 400);
		document.getElementById('tooltipBtn').style.animation = '';
	}
	function clickPodlozhka() {
		setPodlozhka(false);
		setHideMenu(false);
		setAddOneItem(false);
		document.querySelector('.first-tab-body tr:nth-child(2) td:last-child').querySelector('span').style.width = '0%';
		document.querySelector('.first-tab-body tr:nth-child(2) td:nth-child(4)').style.color = '';
	}
	const btnUp = useRef();
	useEffect(() => {
		if (btnUp.current) {
			if (start > 600) {
				btnUp.current.style.visibility = 'visible';
			} else {
				btnUp.current.style.visibility = 'hidden';
			}
		}

	}, [start]);
	function clickScrollUp() {
		refScroll.current.querySelector('.scroll').scrollTop = 0;
	}
	async function onScroll(e) {
		e.stopPropagation();
		setStart(e.target.scrollTop);
		updateHover();
	}
	function clickTr(e, index) {
		if (e.currentTarget && !objAttribute[index].lock) {
			let newobj = [...objAttribute];
			if (e.ctrlKey || e.metaKey) {
				e.preventDefault();
				e.stopPropagation();
				newobj[index].select = !newobj[index].select;
			} else if (e.shiftKey) {
				e.preventDefault();
				e.stopPropagation();
				newobj = newobj.map((x) => {
					return { ...x, select: false };
				});
				if (lastIndex < index) {
					newobj.slice(lastIndex, index + 1).map((x, i) => {
						if (x.lock) {
							x.select = false;
						} else {
							x.select = true;
						}
					});
				} else {
					newobj.slice(index, lastIndex + 1).map((x, i) => {
						if (x.lock) {
							x.select = false;
						} else {
							x.select = true;
						}
					});
				}
			} else {
				setLastIndex(index);
				e.stopPropagation();
				newobj.map((x, i) => {
					if (i !== index) {
						x.select = false;
					}
				});	
				newobj[index].select = !newobj[index].select;
			}
			setObjAttribute([...newobj]);
		}
	}
	function tooltipOn(e, html) {
		let posElement = e.currentTarget.getBoundingClientRect();
		const tooltipBlock = document.getElementById('tooltipBtn');
		tooltipBlock.style.fontSize = '14px';
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'status')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = `Статус атрибута<br><span class='text-tooltip'>Активирует/деактивирует атрибут в CRM</span>`;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === 'ID') {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = `Идентификатор/код атрибута<br><span class='text-tooltip'>Используется для поиска, передачи и добавления атрибута</span>`;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}

		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'name')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = `Название атрибута<br><span class='text-tooltip'>Используется для присвоения товарам уникальных признаков</span>`;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === 'Товар') {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = 'Предполагаемый ID товара';
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
	

	
	}

	function tooltipOff() {
		clearTimeout(plusminus);
		document.getElementById('tooltipBtn').style.animation = '';
	}
	function searchLine(text, value) {
		if (value !== '') {
			let re = new RegExp(value, 'gui');
			let text_pr = text?.replace(re, (x) => '<span class="findUnderline">' + x + '</span>');
			return text_pr;
		} else {
			return text;
		}
	}
	useEffect(() => {
		if (objAttribute?.length > 0) {
			document.addEventListener('click', clickDocument, true);
			document.addEventListener('keydown', ctrlAclickShift, true);
			return () => {
				document.removeEventListener('click', clickDocument, true);
				document.removeEventListener('keydown', ctrlAclickShift, true);
			};
		}
	}, [objAttribute?.length])
	function clickDocument(e) {
		if (refScroll.current && !refScroll.current.contains(e.target)) {
			let newobj = [...objAttribute];
			newobj = newobj.map((x) => {
				return { ...x, select: false }
			});
			setObjAttribute(newobj);
		}
	}
	function ctrlAclickShift(e) {
		if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
			e.preventDefault();
			let newobj =  [...objAttribute];
			newobj = newobj.map((x) => {
				if (x.lock) {
					return { ...x, select: false };
				} else {
					return { ...x, select: true };
				}
			});
			setObjAttribute(newobj);

		}
	}
	let newAttribute = {
		status: false,
		product: 'XXXX-',
		id: 'XXXX',
		select: false,
		lock: false,
		attribute: ''
	}
	function addAttribute() {
		refScroll.current.querySelector('.scroll').scrollTop = 0;
		setPodlozhka(true);
		setAddOneItem(true);
		setHideMenu(true);
		let arr = [newAttribute, ...objAttribute];
		setObjAttribute(arr);
		setTimeout(() => {
			document.querySelector('.first-tab-body tr:nth-child(2) td:last-child input').focus()
			document.querySelector('.first-tab-body tr:nth-child(2) td:last-child').style.zIndex = 99;
			document.querySelector('.first-tab-body tr:nth-child(2) td:nth-child(4)').style.color = 'rgba(0,0,0,0.4)';
			document.querySelector('.first-tab-body tr:nth-child(2) td:last-child').classList.add('hover-disabled');
			document.querySelector('.first-tab-body tr:nth-child(2) td:last-child').querySelector('span').style.width = '100%';
		}, 100);
	}
	return (
		<>
			{isLoading ? (<div className='loading'><Preloaded /></div>) : (
				<div className="warehouse-products">
					<div className="warehouse-products-title">
						<hr />
						<span>{translator.getTranslation('warehouse', 'attributes')}</span>
						<button onClick={(e) => { addAttribute(); e.stopPropagation() }} disabled={addOneItem} className='btnAddItem'>
							<SvGBtnPlus />
						</button>
					</div>
					<div className="shadow-right"></div>
					<div
						style={{
							position: 'relative',
							height: 'calc(100vh - 210px)',
						}}
						className='warehouseAttributeBlock'
						ref={refScroll}
					>
						<ScrollBar
							vertical={true}
							horizontal={true}
							onScroll={_.throttle(onScroll, 500)}
							className={'scroll-warehouse'}
							setHideArrow={setHideArrow}
							podlozhka={podlozhka}
							hideBar={((objAttribute.length) * 18 < (refScroll.current?.offsetHeight - 75)) ? true : false}
							parentClass={'warehouse-scroll-attribute'}
						>
							<table
								tabIndex={-1}
								className='warehouse-table'
							>
								<thead className="first-tab-header">
									<tr>
										{podlozhka && (
											<td style={{ padding: '0px' }}>
												<div
													className="warehouse-podlozhka"
													style={{
														width: refScroll.current?.querySelector('.scroll').offsetWidth + 'px',
														height: document.body.clientHeight + 'px',
														position: 'absolute',
														left: 0,
														top: 0,
														zIndex: 3,
													}}
													onClick={clickPodlozhka}
												></div>
											</td>
										)}
									</tr>

									<tr>
										<th></th>
										<th style={{ paddingRight: '15px',cursor: 'help' }}
											onMouseEnter={tooltipOn}
											onMouseLeave={tooltipOff}
										>
											{translator.getTranslation('warehouse', 'status')}
										</th>
										<th style={{ paddingRight: '5px',cursor: 'help' }}
											onMouseEnter={tooltipOn}
											onMouseLeave={tooltipOff}
										>
											
											Товар
										</th>
										<th style={{ paddingRight: '15px',cursor: 'help' }}
											onMouseEnter={tooltipOn}
											onMouseLeave={tooltipOff}
										>
											ID
										</th>
										<th
											onMouseEnter={tooltipOn}
											onMouseLeave={tooltipOff}
											style={{cursor: 'help'}}
										>
											{translator.getTranslation('warehouse', 'name')}
										</th>
									</tr>
									<tr>
										<th></th>
										<th style={{ paddingRight: '15px', minWidth: 51 }}>
											<WarehouseDropMenu
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												type={'status'}
												translator={translator}
												objProduct={objAttribute}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												setHideMenu={setHideMenu}
												hideMenu={hideMenu}
											/>
										</th>
										<th style={{ paddingRight: '5px', position: 'relative' }}>
											<div
												style={{
													width: 'calc(100% - 5px)',
													background: '#9c9b9e',
													height: 1,
													bottom: 2,
													left: 0,
													position: 'absolute',
													opacity: `${!hideMenu ? '1' : '0'}`,
													transition: 'opacity 0.2s'
												}}
											></div>
										</th>
										<th style={{ paddingRight: '15px' }}>
											<WarehouseInput
												podlozhka={podlozhka}
												setPodlozhka={setPodlozhka}
												sortActive={sortActive}
												setSortActive={setSortActive}
												translator={translator}
												setHideMenu={setHideMenu}
												hideMenu={hideMenu}
												data={objAttribute}
											/>
										</th>
										<th>
											<WarehouseDropMenu
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												type={'attribute'}
												translator={translator}
												searchLine={searchLine}
												inputOn={true}
												objProduct={objAttribute}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												setHideMenu={setHideMenu}
												hideMenu={hideMenu}
											/>
										</th>

									</tr>
									<tr>
										<th className="shadow-vertical" colSpan={19}>
											<div />
											<div />
										</th>
									</tr>
								</thead>

								<tbody className="first-tab-body">
									<tr style={{ height: getTopHeight() }}></tr>
									{objAttribute.length > 0 &&
										objAttribute.slice((getStart() < 0 ? 0 : getStart()), (getStart() < 0 ? 0 : getStart()) + visibleRows + 1).map((x, index) => (
											<tr onClick={(e) => clickTr(e, (index + (getStart() < 0 ? 0 : getStart())))}
												className={
													objAttribute[index + (getStart() < 0 ? 0 : getStart())].select
														? 'select speed hoverAttributeBlock'
														: objAttribute[index + (getStart() < 0 ? 0 : getStart())].lock
															? 'lockOrder speed hoverAttributeBlock'
															: 'speed hoverAttributeBlock'
												}
												onMouseEnter={objAttribute[index + (getStart() < 0 ? 0 : getStart())].lock ? (e) => {
													let posElement = e.target.getBoundingClientRect();
													const tooltipBlock = document.getElementById('tooltipBtn');
													tooltipBlock.style.fontSize = '12px';
													const widthPlus = e.pageX + tooltipBlock.offsetWidth;
													const viewportWidth = document.body.clientWidth;
													plusminus = setTimeout(() => {
														const name = 'Олександр';
														tooltipBlock.innerText = translator.getTranslation('lockOrder', 'lock') + ' ' + name;
														if (widthPlus > viewportWidth) {
															tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
															tooltipBlock.style.top = posElement.y + 23 + 'px';
														} else {
															tooltipBlock.style.left = posElement.x + 'px';
															tooltipBlock.style.top = posElement.y + 23 + 'px';
														}
														tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
													}, 250);

												} : () => { }}
												onMouseLeave={objAttribute[index + (getStart() < 0 ? 0 : getStart())].lock ? (e) => {
													clearTimeout(plusminus);
													document.getElementById('tooltipBtn').style.animation = '';
												} : () => { }}
												key={index + getStart()}
											>
												<td><div className='stickyBeforeBody'></div></td>
												<td style={{ paddingRight: 15 }}><SwitchBtn status={x.status} data={objAttribute} setData={setObjAttribute} index={index + (getStart() < 0 ? 0 : getStart())} /></td>
												<td style={{ paddingRight: 5, color: `rgba(0,0,0,0.4)`, textAlign: 'right' }}>{x.product}</td>
												<td style={{ paddingRight: 15, color: `${!x.status ? 'rgba(0,0,0,0.4)' : ''}`, minWidth: 40 }}>{x.id}</td>
												<td style={{ position: "relative", minWidth: 300 }}>
													<WarehouseInputField
														type={'attribute'}
														addOneItem={addOneItem}
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														data={objAttribute}
														value={x.attribute}
														setData={setObjAttribute}
														index={index + (getStart() < 0 ? 0 : getStart())}
														setHideMenu={setHideMenu}
														setHideArrow={setHideArrow}
														setAddOneItem={setAddOneItem} 
													/>
												</td>
											</tr>
										))}

									<tr style={{ height: getBottomHeight() }}></tr>
								</tbody>
								<tfoot>
									<tr>
										<td colSpan={18} style={{ height: 18 }}>
											<div className="shadow-vertical-footer"></div>
											<div style={{ position: 'absolute', bottom: 0, left: 0, height: 8, width: '100%', background: 'white' }}></div>
										</td>
									</tr>
								</tfoot>
							</table>
						</ScrollBar>
					</div>
					<div ref={btnUp} onClick={clickScrollUp} className="btnUp">
						<svg
							height="20"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.06508L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z"
								fill="black"
							></path>
						</svg>
					</div>
				</div>)
			}
		</>
	)
}

export default AttributeBlock;
