import React, { useEffect, useLayoutEffect, useRef, useState, useMemo } from 'react'
import { SvGBtnPlus, Preloaded } from '../../../until/svg-pack';
import _, { set } from 'lodash';
import ScrollBox from './reactScroll';
// import {dataAttribute} from '../data/dataAttribute';
import WarehouseDropMenu from './WarehouseDropMenu';
import WarehouseInput from './WarehouseInput';
import { useFetch } from '../../../until/data/useFetch';
import SwitchBtn from './SwitchBtn';
import MaxaScroll from './MaxaScroll';
import WarehouseInputField from './WarehouseInputField';
import WarehouseCountryField from './WarehouseCountryField';
let hover;
let plusminus;
let tooltip;
const Suppliers = ({ translator, setObjSuppliers, objSuppliers }) => {
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

	console.log(data)
	const [lastIndex, setLastIndex] = useState(0);
	const [hideMenu, setHideMenu] = useState(false);


	const [podlozhka, setPodlozhka] = useState(false);
	const rootRef = useRef();
	const [start, setStart] = useState(0);
	let rowHeight = 18;
	// if (start >= data.length + getStart()){

	// }
	const [visibleRows, setVisible] = useState(
		Math.floor((document.body.clientHeight * 1.2 - 170) / rowHeight)
	);
	useEffect(() => {
		setVisible(Math.floor((document.body.clientHeight * 1.2 - 170) / rowHeight));
	}, [visibleRows]);
	function getStart() {
		let temp = start - Math.floor(document.body.clientHeight * 0.15) < 0 ? 0 : start - Math.floor(document.body.clientHeight * 0.15);
		return Math.min(objSuppliers.length - visibleRows - 1, Math.floor(temp / rowHeight));
	}

	function getTopHeight() {
		let temp =
			start - Math.floor(document.body.clientHeight * 0.15) < 0
				? 0
				: start - Math.floor(document.body.clientHeight * 0.15);
		return rowHeight * Math.min(objSuppliers.length - visibleRows - 1, Math.floor(temp / rowHeight));
	}
	function getBottomHeight() {
		let temp =
			start - Math.floor(document.body.clientHeight * 0.15) < 0
				? 0
				: start - Math.floor(document.body.clientHeight * 0.15);
		return (
			rowHeight *
			(objSuppliers.length -
				(Math.min(objSuppliers.length - visibleRows - 1, Math.floor(temp / rowHeight)) +
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
		// setFlagSwitchMenu(false);
		// setSwitchMenu(false);
		document.querySelector('.track-vertical').style.opacity = 1;
		document.querySelector('.track-horizontal').style.opacity = 1;
		document.querySelector('.contentScroll').style.overflow = 'auto';
		document.querySelectorAll('.telOperator .warehouse-dropmenu').forEach((x) => {
			x.style.minWidth = '22px';
		});
		// document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
		// 	x.classList.remove('hide-menu');
		// });
		// document.querySelectorAll('.warehouse-dropmenu.ranges').forEach((x) => {
		// 	x.style.zIndex = 1;
		// });
		// document.querySelectorAll('.block-3-btn .warehouse-dropmenu').forEach((x) => {
		// 	x.style.width = '21px';
		// });
		// document.querySelectorAll('.nal-ostatok').forEach((x) => {
		// 	x.classList.remove('showBtn');
		// });
		// document.querySelector('.width21px').style.maxWidth = '51px';
		// let input = document.querySelectorAll('.nal-ostatok input')[indexInput];
		// if (input.value.length >= 4) {
		// 	// input.style.width = input.value.length * 8 + (4 * parseInt(numRound((input.value.length / 4), 1.1))) + 'px';
		// 	input.style.width = input.value.length * 7 + 3 + 'px';
		// }
		// if (input.value.length >= 7) {
		// 	input.style.width = input.value.length * 7 + 7 + 'px';
		// }
		// if (input.value.length < 4) {
		// 	input.style.width = input.value.length * 7 + 'px';
		// }
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
		// rootRef.current.el.querySelector('.simplebar-content-wrapper').scrollTop = 0;
		// rootRef.current.scrollTop = 0;
		document.querySelector('.contentScroll').scrollTop = 0;
	}
	async function onScroll(e) {
		e.stopPropagation();
		setStart(e.target.scrollTop);
		updateHover();
		// setSwitchMenu(false);
	}

	function clickTr(e, index) {
		// e.preventDefault();
		// e.stopPropagation();
		// console.log(e.currentTarget)
		if (e.currentTarget && !objSuppliers[index].lock) {
			let newobj = [...objSuppliers];
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
				// e.preventDefault();
				setLastIndex(index);
				e.stopPropagation();
				newobj.map((x, i) => {
					if (i !== index) {
						x.select = false;
					}
				});
				// if (newobj[index].select !== true) {
				// 	newobj.map((x) => (x.select = !newobj[index].select));
				// }
				// if(newobj[index].select !== undefined)	
				newobj[index].select = !newobj[index].select;
				// else {}

			}
			setObjSuppliers([...newobj]);
		}
	}
	// const [percentScroll, setPercentScroll] = useState(0.87);

	// useEffect(() => {

	// 		if(rootRef.current?.content.offsetHeight < 614) {
	// 			setPercentScroll(0.81);
	// 		}
	// }, [objAttribute]);
	function searchLine(text, value) {
		if (value !== '') {
			let re = new RegExp(value, 'gui');
			let text_pr = text?.replace(re, (x) => '<span class="findUnderline">' + x + '</span>');

			return text_pr;
		} else {
			return text;
		}
	}
	// function showScrollbar () {
	// 	document.querySelector('.scrollbar').style.opacity = 1;
	// 	document.querySelector('.scrollbarHorizont').style.opacity = 1;
	// }
	// function hideScrollbar () {
	// 	document.querySelector('.scrollbar').style.opacity = 0;
	// 	document.querySelector('.scrollbarHorizont').style.opacity = 0;
	// }
	function tooltipOn(e, html) {
		// e.stopPropagation();
		// clearTimeout(plusminus);
		// const tooltipBlock = document.getElementById('tooltipBtn');
		// let posElement = e.currentTarget.getBoundingClientRect();
		// // tooltipBlock.innerHTML = html;
		// tooltipBlock.style.fontSize = '14px';
		// console.log(e);
		let posElement = e.currentTarget.getBoundingClientRect();
		const tooltipBlock = document.getElementById('tooltipBtn');
		tooltipBlock.style.fontSize = '12px';
		if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
			// tooltipBlock.style.fontSize = '12px';
			tooltip = setTimeout(() => {
				// tooltipBlock.innerHTML = html;

				tooltipBlock.innerText = e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		} else {
			// if (e.currentTarget.className === 'attribute-width') {
			// 	// console.log(e.currentTarget.children[0].getAttribute('src'))
			// 	const src = e.currentTarget.children[0].getAttribute('src');
			// 	const memory = e.currentTarget.children[1].innerText;
			// 	const img = `<img style='width:100%;height:100%;object-fit:cover;padding-bottom:3px' src="${src}"/>`;
			// 	const heightPlus = posElement.y + tooltipBlock.offsetHeight;
			// 	const viewportHeight = document.body.clientHeight;
			// 	tooltip = setTimeout(() => {
			// 		// tooltipBlock.innerHTML = html;
			// 		if (heightPlus > viewportHeight) {
			// 			tooltipBlock.innerHTML = `<div class="img-tooltip" style='display: flex; flex-direction: column-reverse;width:300px;height:300px'>${memory}${img}</div>`;
			// 			tooltipBlock.style.left = posElement.x + 'px';
			// 			tooltipBlock.style.top = posElement.y - tooltipBlock.offsetHeight - 5 + 'px';
			// 		} else {
			// 			tooltipBlock.innerHTML = `<div class="img-tooltip" style='display: flex; flex-direction: column;width:300px;height:300px'>${memory}${img}</div>`;
			// 			tooltipBlock.style.left = posElement.x + 'px';
			// 			tooltipBlock.style.top = posElement.y + 23 + 'px';
			// 		}

			// 		tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			// 	}, 250);
			// }
		}
		if (e.currentTarget.innerText === '🇺🇦') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'ukraine');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === '🇷🇺') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'russia');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === '🇹🇷') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'turkey');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.children[0]?.className === 'icon-Vector-1') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipOperator', 'vodafone');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.children[0]?.className === 'icon-Union') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipOperator', 'unknownNumber');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.children[0]?.className === 'icon-Vector-3') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipOperator', 'lifecell');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.children[0]?.className === 'icon-Union-1') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipOperator', 'kyivstar');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.children[0]?.className === 'icon-Union-18') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipOperator', 'errorNumber');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
	}

	function tooltipOff() {
		clearTimeout(tooltip);
		document.getElementById('tooltipBtn').style.animation = '';
	}
	const [sortActive, setSortActive] = useState(false);
	const [hideArrow, setHideArrow] = useState(false);
	// export default React.memo(SwitchBtn);
	const [selectAll, setSelectAll] = useState(false);

	useEffect(() => {
		function clickDocument(e) {
			if (!e.target.closest('.warehouse-table')) {
				setSelectAll(false);
				let newobj = [...objSuppliers];
				newobj.map((x) => (x.select = false));
				setObjSuppliers(newobj);
			}
		}
		if (!selectAll) {
			document.addEventListener('keydown', function (e) {
				if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
					e.preventDefault();
					setSelectAll(true);
					let newobj = [...objSuppliers];
					newobj.map((x) => {
						if (x.lock) {
							return (x.select = false);
						} else {
							return (x.select = true);
						}
					});
					setObjSuppliers(newobj);
					// console.log('asdasdasd');
				}
			});
		}
		document.addEventListener('click', clickDocument);

		return () => {
			document.removeEventListener('click', clickDocument);
		};
	}, [selectAll]);
	const [addOneItem, setAddOneItem] = useState(false);
	const [count, setCount] = useState(0);
	function addSuppliers() {
		let newSuppliers = {
			status: false,
			product: 'XXXX-',
			id: '****',
			select: false,
			lock: false,
			attribute: ''
		}
		document.querySelector('.contentScroll').scrollTop = 0;
		setPodlozhka(true);
		setAddOneItem(true);
		setHideMenu(true);
		let arr = [newSuppliers, ...objSuppliers];
		setObjSuppliers([...arr]);
		// setTimeout(() => {
		// 	document.querySelector('.first-tab-body tr:nth-child(2) td:last-child input').focus()
		// 	document.querySelector('.first-tab-body tr:nth-child(2) td:last-child').style.zIndex = 99;
		// 	document.querySelector('.first-tab-body tr:nth-child(2)').classList.add('hover-disabled');
		// }, 100);
	}
	return (
		<>
			{isLoading ? (<div className='loading'><Preloaded /></div>) : (
				<div className="warehouse-products">
					<div className="warehouse-products-title">
						<hr />
						<span>Поставщики</span>
						<button>
							<SvGBtnPlus />
						</button>
					</div>
					<div className="shadow-right"></div>
					<div
						style={{
							position: 'relative',
							// maxHeight: 'calc(100vh - 170px)',
							// width: '100%',
							// height:  'calc(100vh - 216px)',
							height: 'calc(100vh - 210px)',
						}}
						className='warehouseAttributeBlock'
					>
						{/* <ScrollBox
							ref={rootRef}
							// scrollVertMinus={0.07}
							percent={percentScroll}
							scroll={_.throttle(onScroll, 500)}
							color="rgba(0, 0, 0, 0.3)"
							setHideArrow={setHideArrow}
						> */}
						<MaxaScroll
							setHideArrow={setHideArrow}
							updateHover={updateHover}
							podlozhka={podlozhka}
							infiniteScroll={_.throttle(onScroll, 500)}

						>

							<table
								tabIndex={-1}
								className='warehouse-table'
							// onMouseEnter={showScrollbar}
							// onMouseLeave={hideScrollbar}
							// style={{ width: '100%' }}
							// style={{ width: '100%', height: '100%', paddingLeft: 13, paddingRight: 10 }}
							>
								<thead className="first-tab-header">
									<tr>
										{podlozhka && (
											<td style={{ padding: '0px' }}>
												<div
													className="warehouse-podlozhka"
													style={{
														width: document.querySelector('.contentScroll').offsetWidth + 'px',
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
										<th style={{ paddingRight: '15px' }}>
											Статус
										</th>
										<th style={{ paddingRight: '15px' }}>
											Страна
										</th>
										<th style={{ paddingRight: '15px' }}>
											Компания
										</th>
										<th style={{ paddingRight: '15px' }}>
											Контакт
										</th>
										<th style={{ paddingRight: '15px' }}>
											Телефон
										</th>
										<th>
											Комментарий
										</th>
									</tr>
									<tr>
										<th></th>
										<th style={{ paddingRight: '15px', minWidth: 51 }}>
											<WarehouseDropMenu
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												// width21px={width21px}
												// setWidth21px={setWidth21px}
												// labelForWidth={labelForWidth}
												// setLabelForWidth={setLabelForWidth}
												type={'status'}
												translator={translator}
												objProduct={objSuppliers}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												setHideMenu={setHideMenu}
												hideMenu={hideMenu}
											// setSwitchMenu={setSwitchMenu}
											// switchMenu={switchMenu}
											// setFlagSwitchMenu={setFlagSwitchMenu}
											/>
										</th>
										<th style={{ paddingRight: '15px', position: 'relative',minWidth: 51 }}>
											<WarehouseDropMenu
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												type={'country'}
												translator={translator}
												searchLine={searchLine}

												objProduct={objSuppliers}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												setHideMenu={setHideMenu}
												hideMenu={hideMenu}
											/>
										</th>
										<th style={{ paddingRight: '15px' }}>
											{/* <WarehouseInput 
												podlozhka={podlozhka} 
												setPodlozhka={setPodlozhka} 
												sortActive={sortActive}
												setSortActive={setSortActive}
												translator={translator}
												setHideMenu={setHideMenu}
												hideMenu={hideMenu}
											/> */}
											<WarehouseDropMenu
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												type={'company'}
												translator={translator}
												searchLine={searchLine}
												inputOn={true}
												objProduct={objSuppliers}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												setHideMenu={setHideMenu}
												hideMenu={hideMenu}
											/>
										</th>
										<th style={{ paddingRight: '15px' }}>
											<WarehouseDropMenu
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												type={'contact'}
												translator={translator}
												searchLine={searchLine}
												inputOn={true}
												objProduct={objSuppliers}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												setHideMenu={setHideMenu}
												hideMenu={hideMenu}
											/>
										</th>
										<th style={{ paddingRight: '15px' }}>
											<div style={{ display: 'flex' }} className='telOperator'>
												<WarehouseDropMenu
													// adaptive={true}
													// adaptive={}
													// {...suka}
													adaptiveTelNum={true}
													setPodlozhka={setPodlozhka}
													podlozhka={podlozhka}
													type={'telOperator'}
													objProduct={objSuppliers}
													translator={translator}
													// setSwitchMenu={setSwitchMenu}
													// switchMenu={switchMenu}
													// setFlagSwitchMenu={setFlagSwitchMenu}
													sortActive={sortActive}
													setSortActive={setSortActive}
													// setLabelForWidth={setLabelForWidth}
													// setWidth21px={setWidth21px}
													hideArrow={hideArrow}
													hideMenu={hideMenu}
													setHideMenu={setHideMenu}

												/>
												<WarehouseInput
													podlozhka={podlozhka}
													setPodlozhka={setPodlozhka}
													sortActive={sortActive}
													setSortActive={setSortActive}
													translator={translator}
													setHideMenu={setHideMenu}
													hideMenu={hideMenu}
												/>
											</div>

										</th>
										<th>
											<WarehouseInput
												podlozhka={podlozhka}
												setPodlozhka={setPodlozhka}
												sortActive={sortActive}
												setSortActive={setSortActive}
												translator={translator}
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
									{objSuppliers.length > 0 &&
										objSuppliers.slice((getStart() < 0 ? 0 : getStart()), (getStart() < 0 ? 0 : getStart()) + visibleRows + 1).map((x, index) => (
											<tr onClick={(e) => clickTr(e, (index + (getStart() < 0 ? 0 : getStart())))}
												className={
													objSuppliers[index + (getStart() < 0 ? 0 : getStart())].select
														? 'select speed hoverAttributeBlock'
														: objSuppliers[index + (getStart() < 0 ? 0 : getStart())].lock
															? 'lockOrder speed hoverAttributeBlock'
															: 'speed hoverAttributeBlock'
												}
												onMouseEnter={objSuppliers[index+(getStart() < 0 ? 0 : getStart())].lock ? (e) => {
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
												onMouseLeave={objSuppliers[index+(getStart() < 0 ? 0 : getStart())].lock ? (e) => {
													clearTimeout(plusminus);
													document.getElementById('tooltipBtn').style.animation = '';
												} : () => { }}
												key={index + getStart()}>
												<td><div className='stickyBeforeBody'></div></td>
												<td style={{ paddingRight: 15 }}>
													<SwitchBtn 
													status={x.status}
													data={objSuppliers} 
													setData={setObjSuppliers} 
													getStart={getStart} 
													index={index} />
												</td>
												<td style={{ paddingRight: 15, fontSize: '14px' }}>
													<WarehouseCountryField 
														country={x.country} 
														podlozhka={podlozhka} 
														setPodlozhka={setPodlozhka} 
														data={objSuppliers} 
														setData={setObjSuppliers}
														setHideMenu={setHideMenu}
														index={index + (getStart() < 0 ? 0 : getStart() - count)}
														/>
												</td>
												<td style={{ paddingRight: 15, color: `${x.status ? 'rgba(0,0,0,0.4)' : ''}`, minWidth: 40, lineHeight: '18px',minWidth:150,position: 'relative' }}>
													<WarehouseInputField
														type={'company'}
														addOneItem={addOneItem}
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														data={objSuppliers}
														value={x.company}
														setData={setObjSuppliers}
														index={index + (getStart() < 0 ? 0 : getStart() - count)}
														setHideMenu={setHideMenu}
														setHideArrow={setHideArrow} />
												</td>
												<td style={{ color: `${x.status ? 'rgba(0,0,0,0.4)' : ''}`, paddingRight: 15, lineHeight: '18px', minWidth:150,position: 'relative' }}>
													<WarehouseInputField
														type={'contact'}
														addOneItem={addOneItem}
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														data={objSuppliers}
														value={x.contact}
														setData={setObjSuppliers}
														index={index + (getStart() < 0 ? 0 : getStart() - count)}
														setHideMenu={setHideMenu} 
														setHideArrow={setHideArrow}/>
												</td>
												<td style={{ color: `${x.status ? 'rgba(0,0,0,0.4)' : ''}`, paddingRight: 15, position: 'relative', minWidth:120 }}
													onMouseLeave={objSuppliers[index+(getStart() < 0 ? 0 : getStart() - count)].lock ? null : tooltipOff}
													onMouseEnter={objSuppliers[index+(getStart() < 0 ? 0 : getStart() - count)].lock ? null : tooltipOn}
													>
													<WarehouseInputField
														type={'number'}
														iconOperator={true}
														icon={x.iconNumber}
														addOneItem={addOneItem}
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														data={objSuppliers}
														value={x.number}
														setData={setObjSuppliers}
														index={index + (getStart() < 0 ? 0 : getStart() - count)}
														setHideMenu={setHideMenu} 
														setHideArrow={setHideArrow}/>
												</td>
												<td className='attributeCommentary' style={{ color: `${x.status ? 'rgba(0,0,0,0.4)' : ''}`,minWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: '18px',position:'relative' }}
													// onMouseLeave={objSuppliers[index].lock ? null : tooltipOff}
													// onMouseEnter={objSuppliers[index].lock ? null : tooltipOn}
												>
													<WarehouseInputField
														type={'commentary'}
														addOneItem={addOneItem}
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														data={objSuppliers}
														value={x.commentary}
														setData={setObjSuppliers}
														index={index + (getStart() < 0 ? 0 : getStart() - count)}
														setHideMenu={setHideMenu} 
														setHideArrow={setHideArrow}/>
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
						</MaxaScroll>
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

export default Suppliers;
