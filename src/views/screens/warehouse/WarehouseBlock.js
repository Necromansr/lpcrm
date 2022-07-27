import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './Warehouse.scss';
import { rozetkaLogo, promLogo, crmLogo, SvGBtnPlus, Preloaded } from '../../../until/svg-pack';
import WarehouseProductList from './WarehouseProductList';
import WarehouseDropMenu from './WarehouseDropMenu';
import WarehouseInput from './WarehouseInput';
import _ from 'lodash';
import WarehouseDropRange from './WarehouseDropRange';
import WarehouseDropInput from './WarehouseDropInput';
import { useFetch } from '../../../until/data/useFetch';
import MaxaScroll from './MaxaScroll';
import ScrollBar from './ScrollBar';

let hover;
let plusminus;
const WarehouseBlock = ({ objProduct, setObjProduct, setToggleCard, setGetIndex, translator }) => {
	const [lastIndex, setLastIndex] = useState(0);
	const [podlozhka, setPodlozhka] = useState(false);
	const [switchMenu, setSwitchMenu] = useState(false);
	const [hideMenu, setHideMenu] = useState(false);
	const [flagSwitchMenu, setFlagSwitchMenu] = useState(false);
	// http://192.168.0.197:3005/folders
	const { data, error, isLoading } = useFetch(''
		// , {
		// 		method: 'POST',
		// 		headers: {
		// 			'Accept': 'application/json',
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 			"query": {},
		// 			"start": 10,
		// 			// "start": props.folder.at(-1)?.id,
		// 			"end": 20
		// 		})
		// 	}
	);

	// useEffect(()=> {
	// 	let i = 0;
	// 	document.addEventListener('contextmenu', function(e){
	// 		e.preventDefault();
	// 		console.log(e.pageX, e.pageY)
	// 		let div = document.createElement('div');
	// 		i++;
	// 		div.innerHTML = `eblo tupoe`
	// 		div.style.cssText = `
	// 			position: absolute;
	// 			top:${e.pageY}px;
	// 			left:${e.pageX}px;
	// 		`
	// 		document.querySelector('#root').append(div);

	// 	})
	// })

	
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
		if (objProduct?.length > 0) {
			document.addEventListener('click', clickDocument, true);
			document.addEventListener('keydown', ctrlAclickShift, true);
			return () => {
				document.removeEventListener('click', clickDocument, true);
				document.removeEventListener('keydown', ctrlAclickShift, true);
			};
		}
	}, [objProduct?.length])
	function clickDocument(e) {
		if (refScroll.current && !refScroll.current.contains(e.target)) {
			let newobj = [...objProduct];
			newobj = newobj.map((x) => {
				return { ...x, select: false }
			});
			setObjProduct(newobj);
		}
	}
	function ctrlAclickShift(e) {
		if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
			e.preventDefault();
			let newobj =  [...objProduct];
			newobj = newobj.map((x) => {
				if (x.lock) {
					return { ...x, select: false };
				} else {
					return { ...x, select: true };
				}
			});
			setObjProduct(newobj);

		}
	}

	function formatNumber2(number) {
		let newnum = number?.toLocaleString('ru-RU', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
		return newnum;
	}
	function formatNumber(number) {
		let newnum = number
			?.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
			.replace(',', '.');
		return newnum;
	}
	function tooltipOn(e, html) {
		let posElement = e.currentTarget.getBoundingClientRect();
		const tooltipBlock = document.getElementById('tooltipBtn');
		tooltipBlock.style.fontSize = '14px';
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'status')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'status');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === 'ID') {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'id');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'country')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'country');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'currency')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'currency');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'name')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'name');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'attribute')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'attribute');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'available')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'available');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'purchase')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'purchase');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'sales')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'sales');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'margin')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'margin');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'total')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'total');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-ostatok') {
			tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-available') + e.target.innerText.replace('/', '');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-rezerv') {
			tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-reserv') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-otpr') {
			tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-send') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-vozvrat') {
			tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-crib') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-marzha') {
			tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-margin') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-zakupka') {
			tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-purchase') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-prodazha') {
			tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-sale') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma1') {
			tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-available') + e.target.innerText.replace('/', '');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma2') {
			tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-reserv') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma3') {
			tooltipBlock.style.fontSize = '12px';
			const widthPlus = posElement.x + tooltipBlock.offsetWidth;
			const viewportWidth = document.body.clientWidth;
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-send') + e.target.innerText;
				if (widthPlus > viewportWidth) {
					tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 23 + 'px';
				} else {
					tooltipBlock.style.left = posElement.x + 'px';
					tooltipBlock.style.top = posElement.y + 23 + 'px';
				}
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma4') {
			tooltipBlock.style.fontSize = '12px';
			const widthPlus = posElement.x + tooltipBlock.offsetWidth;
			const viewportWidth = document.body.clientWidth;
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-crib') + e.target.innerText;
				if (widthPlus > viewportWidth) {
					tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 23 + 'px';
				} else {
					tooltipBlock.style.left = posElement.x + 'px';
					tooltipBlock.style.top = posElement.y + 23 + 'px';
				}
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
	}

	function tooltipOff() {
		clearTimeout(plusminus);
		document.getElementById('tooltipBtn').style.animation = '';
	}
	const [pereschetiHeaders, setPereschetiHeaders] = useState(null);
	useLayoutEffect(() => {
		let ostatok = formatNumber2(objProduct?.reduce((prev, curr) => {
			return prev + (+curr.ostatok.replace(/\s/gmu, ''))
		}, 0))
		let rezerv = formatNumber2(objProduct?.reduce((prev, curr) => {
			return prev + (+curr.rezerv.replace(/\s/gmu, ''))
		}, 0))
		let otpr = formatNumber2(objProduct?.reduce((prev, curr) => {
			return prev + (+curr.otpr.replace(/\s/gmu, ''))
		}, 0))
		let vozvrat = formatNumber2(objProduct?.reduce((prev, curr) => {
			return prev + (+curr.vozvrat.replace(/\s/gmu, ''))
		}, 0))
		let zakupka = formatNumber(objProduct?.reduce((prev, curr, _, array) => {
			return prev + (+curr.zakupka.replace(/\s/gmu, '')) / array.length;
		}, 0))
		let prodazha = formatNumber(objProduct?.reduce((prev, curr, _, array) => {
			return prev + (+curr.prodazha.replace(/\s/gmu, '')) / array.length;
		}, 0))
		let marzha = formatNumber(objProduct?.reduce((prev, curr, _, array) => {
			return prev + (+curr.marzha.replace(/\s/gmu, '')) / array.length;
		}, 0))
		let suma1 = formatNumber(objProduct?.reduce((prev, curr) => {
			return prev + (+curr.suma1.replace(/\s/gmu, ''))
		}, 0))
		let suma2 = formatNumber(objProduct?.reduce((prev, curr) => {
			return prev + (+curr.suma2.replace(/\s/gmu, ''))
		}, 0))
		let suma3 = formatNumber(objProduct?.reduce((prev, curr) => {
			return prev + (+curr.suma3.replace(/\s/gmu, ''))
		}, 0))
		let suma4 = formatNumber(objProduct?.reduce((prev, curr) => {
			return prev + (+curr.suma4.replace(/\s/gmu, ''))
		}, 0))

		setPereschetiHeaders({
			ostatok: ostatok,
			rezerv: rezerv,
			otpr: otpr,
			vozvrat: vozvrat,
			zakupka: zakupka,
			prodazha: prodazha,
			marzha: marzha,
			suma1: suma1,
			suma2: suma2,
			suma3: suma3,
			suma4: suma4,
		});
	}, [objProduct])
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
		let temp =
			start - Math.floor(document.body.clientHeight * 0.15) < 0
				? 0
				: start - Math.floor(document.body.clientHeight * 0.15);
		return Math.min(objProduct.length - visibleRows - 1, Math.floor(temp / rowHeight));
	}

	function getTopHeight() {
		let temp =
			start - Math.floor(document.body.clientHeight * 0.15) < 0
				? 0
				: start - Math.floor(document.body.clientHeight * 0.15);
		return rowHeight * Math.min(objProduct.length - visibleRows - 1, Math.floor(temp / rowHeight));
	}
	function getBottomHeight() {
		let temp =
			start - Math.floor(document.body.clientHeight * 0.15) < 0
				? 0
				: start - Math.floor(document.body.clientHeight * 0.15);
		return (
			rowHeight *
			(objProduct.length -
				(Math.min(objProduct.length - visibleRows - 1, Math.floor(temp / rowHeight)) +
					visibleRows +
					1))
		);
	}

	let isDown = false;
	let startX;
	let scrollLeft;
	function onMouseDown(e) {
		// if (!e.target.classList.contains('resize') && !e.target.classList.contains('drag')) {
		isDown = true;
		startX = e.pageX - refScroll.current?.querySelector('.wrapper-scroll .scroll').offsetLeft;
		scrollLeft = refScroll.current?.querySelector('.wrapper-scroll .scroll').scrollLeft;
		// } else {
		// 	isDown = false;
		// }
	}

	function onMouseLeave(e) {
		isDown = false;
	}

	function onMouseMove(e) {
		if (!isDown) return;
		updateHover();
		// e.preventDefault();
		_.throttle(() => {
			const x = e.pageX - refScroll.current?.querySelector('.wrapper-scroll .scroll').offsetLeft;
			const walk = (x - startX) * 1.2; //scroll-fast
			refScroll.current.querySelector('.wrapper-scroll .scroll').scrollLeft = scrollLeft - walk;
		}, 100)();
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
		document.querySelector('.scroll').scrollTop = 0;
	}
	async function onScroll(e) {
		e.stopPropagation();
		setStart(e.target.scrollTop);
		updateHover();
		setSwitchMenu(false);
	}
	useEffect(() => {
		setTimeout(() => {
			if (refScroll.current) {
				refScroll.current.querySelector('.scroll').addEventListener('mousedown', onMouseDown);
				refScroll.current.querySelector('.scroll').addEventListener('mouseleave', onMouseLeave);
				refScroll.current.querySelector('.scroll').addEventListener('mouseup', onMouseLeave);
				refScroll.current.querySelector('.scroll').addEventListener('mousemove', onMouseMove);
			}
		}, 500);
		// return () => {
		// 	refScroll.current.querySelector('.scroll').removeEventListener('mousedown', onMouseDown);
		// 	refScroll.current.querySelector('.scroll').removeEventListener('mouseleave', onMouseLeave);
		// 	refScroll.current.querySelector('.scroll').removeEventListener('mouseup', onMouseLeave);
		// 	refScroll.current.querySelector('.scroll').removeEventListener('mousemove', onMouseMove);
		// }
	}, []);



	const [loadedLabelBlock, setLoadedLabelBlock] = useState(true);
	useEffect(() => {
		if (switchMenu) {
			clearTimeout(hover);
			setLoadedLabelBlock(true);
			document.querySelectorAll('.animationFrame').forEach((x) => {
				x.classList.add('show');
				x.style.overflow = '';
			});
			document.querySelectorAll('.block-3-btn').forEach((x) => {
				x.classList.add('show');
			});
		} else {
			document.querySelectorAll('.animationFrame').forEach((x) => {
				x.classList.remove('show');
				x.style.overflow = 'hidden';
			});
			document.querySelectorAll('.block-3-btn').forEach((x) => {
				x.classList.remove('show');
			});
			hover = setTimeout(() => {
				setLoadedLabelBlock(false);
			}, 400);

		}
	}, [switchMenu, loadedLabelBlock]);
	const [sortActive, setSortActive] = useState(false);
	const [width21px, setWidth21px] = useState(false);
	const [labelForWidth, setLabelForWidth] = useState(false);
	const queryWidthTr = useRef();
	const [dimensions, setDimensions] = useState(null);
	useLayoutEffect(() => {
		if (queryWidthTr.current) {
			setDimensions({
				width1: queryWidthTr.current.querySelector('.nal-ostatok').offsetWidth,
				width3: queryWidthTr.current.querySelector('.nal-otpr').offsetWidth,
				width2: queryWidthTr.current.querySelector('.nal-rezerv').offsetWidth,
				width4: queryWidthTr.current.querySelector('.nal-vozvrat').offsetWidth,
				widthsuma1: queryWidthTr.current.querySelector('.summa-suma1').offsetWidth,
				widthsuma2: queryWidthTr.current.querySelector('.summa-suma2').offsetWidth,
				widthsuma3: queryWidthTr.current.querySelector('.summa-suma3').offsetWidth,
				widthsuma4: queryWidthTr.current.querySelector('.summa-suma4').offsetWidth,

			});
		}
	}, [pereschetiHeaders]);
	useEffect(() => {
		setTimeout(() => {
			setDimensions({
				width1: queryWidthTr.current.querySelector('.nal-ostatok').offsetWidth,
				width3: queryWidthTr.current.querySelector('.nal-otpr').offsetWidth,
				width2: queryWidthTr.current.querySelector('.nal-rezerv').offsetWidth,
				width4: queryWidthTr.current.querySelector('.nal-vozvrat').offsetWidth,
				widthsuma1: queryWidthTr.current.querySelector('.summa-suma1').offsetWidth,
				widthsuma2: queryWidthTr.current.querySelector('.summa-suma2').offsetWidth,
				widthsuma3: queryWidthTr.current.querySelector('.summa-suma3').offsetWidth,
				widthsuma4: queryWidthTr.current.querySelector('.summa-suma4').offsetWidth,

			});
		}, 600);
	}, []);
	const [hideArrow, setHideArrow] = useState(false);
	return (
		<>
			{isLoading ? <div className='loading'><Preloaded /></div> : <div className="warehouse-products">
				<div className="warehouse-products-title">
					<hr />
					<span>{translator.getTranslation('warehouse', 'goods')}</span>
					<button>
						<SvGBtnPlus />
					</button>
				</div>
				<div className="shadow-right"></div>

				<div
					style={{
						position: 'relative',
						width: '100%',
						height: 'calc(100vh - 210px)',
					}}
					ref={refScroll}
				>

					<ScrollBar
						vertical={true}
						horizontal={true}
						onScroll={_.throttle(onScroll, 500)}
						className={'scroll-warehouse'}
						setHideArrow={setHideArrow}
						podlozhka={podlozhka}
						hideBar={((objProduct.length ) * 18 < (refScroll.current?.offsetHeight - 75)) ? true : false}
						parentClass={'warehouse-scroll'}
						
					>

						<table
							tabIndex={-1}
							className='warehouse-table'
						>
							<thead
								className="first-tab-header">
								<tr>
									{podlozhka && (
										<td style={{ padding: '0px' }}>
											<div
												className="warehouse-podlozhka"
												style={{
													width: '100%',
													height: document.body.clientHeight + 'px',
													position: 'absolute',
													left: 0,
													top: 0,
													zIndex: 3,
												}}
											></div>
										</td>
									)}
								</tr>

								<tr>

									<th className="sticky-head">
										<div className="sticky-block" style={{ height: 20 }}>
											<div className="stickyBeforeHead"></div>
											<div
												onMouseEnter={() => setSwitchMenu(true)}
												onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
												className="sticky-block-children"
												style={{ height: 20 }}
											>
												<div
													style={{
														textAlign: 'left',
														paddingLeft: 0,
														minWidth: 51,
														paddingRight: '10px',
														cursor: 'help'
													}}
													onMouseEnter={tooltipOn}
													onMouseLeave={tooltipOff}
												>
													{translator.getTranslation('warehouse', 'status')}
												</div>
												<div
													className="animationFrame"
													style={{
														display: 'flex',
														height: 20,
													}}
												>
													<div className="box"></div>
													<img className="logo-mail" src={crmLogo} alt="" />
													<img className="logo-mail" src={rozetkaLogo} alt="" />
													<img className="logo-mail" src={promLogo} alt="" />
												</div>
											</div>

											<div className="id-width" style={{ paddingRight: '10px', cursor: 'help' }}
												onMouseEnter={tooltipOn}
												onMouseLeave={tooltipOff}
											>
												ID
											</div>
											<div onMouseEnter={tooltipOn}
												onMouseLeave={tooltipOff} style={{ cursor: 'help', paddingRight: '10px', minWidth: 51 }}>
												{translator.getTranslation('warehouse', 'country')}
											</div>
											<div onMouseEnter={tooltipOn}
												onMouseLeave={tooltipOff} style={{ cursor: 'help', paddingRight: '10px', minWidth: 51 }}>
												{translator.getTranslation('warehouse', 'currency')}
											</div>
											<div
												className="name-width"
												style={{
													paddingRight: '15px',
													justifyContent: 'center',
													width: 200,
													cursor: 'help'
												}}
												onMouseEnter={tooltipOn}
												onMouseLeave={tooltipOff}
											>
												{translator.getTranslation('warehouse', 'name')}
											</div>
											<div
												className="attribute-width"
												style={{
													width: 150,
													cursor: 'help'
												}}
												onMouseEnter={tooltipOn}
												onMouseLeave={tooltipOff}
											>
												{translator.getTranslation('warehouse', 'attribute')}
											</div>
											<div className="shadow-left"></div>
										</div>
									</th>

									<th
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
										style={{ paddingLeft: '12px', paddingRight: '10px', cursor: 'help' }} colSpan={4}>
										{translator.getTranslation('warehouse', 'available')}
									</th>
									<th
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
										style={{ paddingRight: '10px', cursor: 'help' }}>
										{translator.getTranslation('warehouse', 'purchase')}
									</th>
									<th
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
										style={{ paddingRight: '10px', cursor: 'help' }}>
										{translator.getTranslation('warehouse', 'sales')}
									</th>
									<th
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
										style={{ paddingRight: '10px', cursor: 'help' }}>
										{translator.getTranslation('warehouse', 'margin')}
									</th>
									<th
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
										style={{ cursor: 'help' }}
										colSpan={4}>{translator.getTranslation('warehouse', 'total')}</th>
								</tr>
								<tr>
									<th className="sticky-head" style={{ zIndex: 3 }}>
										<div className="sticky-block" style={{ height: 20 }}>
											<div
												className="sticky-block-children"
												style={{
													width: 'calc(100% - 13px)',
													position: 'absolute',
													left: 13,
													height: 20,
													background: 'white',
												}}
											>
												<div
													className="width21px"
													onMouseEnter={() => setSwitchMenu(true)}
													onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
													style={{
														transition: '0.3s',
														maxWidth: '51px',
														paddingRight: '9px',
														width: '100%',
													}}
												>
													<WarehouseDropMenu
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														width21px={width21px}
														setWidth21px={setWidth21px}
														labelForWidth={labelForWidth}
														setLabelForWidth={setLabelForWidth}
														type={'status'}
														translator={translator}
														objProduct={objProduct}
														sortActive={sortActive}
														setSortActive={setSortActive}
														setSwitchMenu={setSwitchMenu}
														switchMenu={switchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
													/>
												</div>
												<div
													onMouseEnter={() => setSwitchMenu(true)}
													onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
													className="block-3-btn"
												>
													<WarehouseDropMenu
														adaptive={true}
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														type={'status'}
														objProduct={objProduct}
														translator={translator}
														setSwitchMenu={setSwitchMenu}
														switchMenu={switchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														sortActive={sortActive}
														setSortActive={setSortActive}
														setLabelForWidth={setLabelForWidth}
														setWidth21px={setWidth21px}
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
													/>
													<WarehouseDropMenu
														adaptive={true}
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														type={'status'}
														translator={translator}
														objProduct={objProduct}
														setSwitchMenu={setSwitchMenu}
														switchMenu={switchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														sortActive={sortActive}
														setSortActive={setSortActive}
														setLabelForWidth={setLabelForWidth}
														setWidth21px={setWidth21px}
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
													/>
													<WarehouseDropMenu
														adaptive={true}
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														type={'status'}
														translator={translator}
														objProduct={objProduct}
														setSwitchMenu={setSwitchMenu}
														switchMenu={switchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														sortActive={sortActive}
														setSortActive={setSortActive}
														setLabelForWidth={setLabelForWidth}
														setWidth21px={setWidth21px}
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
													/>
												</div>
											</div>
											<div
												style={{
													position: 'relative',
													left: 74,
													display: `flex`,
													visibility: `${switchMenu ? 'hidden' : ''}`,
													zIndex: 4,
												}}
											>
												<div
													className="id-width"
													style={{ paddingRight: '10px' }}
												>
													<WarehouseInput
														podlozhka={podlozhka}
														setPodlozhka={setPodlozhka}
														sortActive={sortActive}
														setSortActive={setSortActive}
														translator={translator}
														setHideMenu={setHideMenu}
														hideMenu={hideMenu}
														setSwitchMenu={setSwitchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														data={objProduct}

													/>
												</div>
												<div style={{ paddingRight: '10px', minWidth: 51, zIndex: 5 }}>
													<WarehouseDropMenu
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														type={'country'}
														objProduct={objProduct}
														setSwitchMenu={setSwitchMenu}
														switchMenu={switchMenu}
														translator={translator}
														sortActive={sortActive}
														setSortActive={setSortActive}
														setWidth21px={setWidth21px}
														setLabelForWidth={setLabelForWidth}
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
													/>
												</div>
												<div style={{ paddingRight: '10px', minWidth: 51 }}>
													<WarehouseDropMenu
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														type={'currency'}
														translator={translator}
														objProduct={objProduct}
														setSwitchMenu={setSwitchMenu}
														switchMenu={switchMenu}
														sortActive={sortActive}
														setSortActive={setSortActive}
														setWidth21px={setWidth21px}
														setLabelForWidth={setLabelForWidth}
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
													/>
												</div>
												<div
													className="name-width"
													style={{
														paddingRight: '15px',
														width: 200,
													}}
												>
													<WarehouseDropMenu
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														type={'name'}
														translator={translator}
														inputOn={true}
														searchLine={searchLine}
														objProduct={objProduct}
														setSwitchMenu={setSwitchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														switchMenu={switchMenu}
														sortActive={sortActive}
														setSortActive={setSortActive}
														setWidth21px={setWidth21px}
														setLabelForWidth={setLabelForWidth}
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
													/>
												</div>
												<div
													className="attribute-width btn"
													style={{
														width: 150,
													}}
												>
													<WarehouseDropMenu
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														type={'attribute'}
														translator={translator}
														searchLine={searchLine}
														inputOn={true}
														objProduct={objProduct}
														setSwitchMenu={setSwitchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														switchMenu={switchMenu}
														sortActive={sortActive}
														setSortActive={setSortActive}
														setWidth21px={setWidth21px}
														setLabelForWidth={setLabelForWidth}
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
													/>
												</div>
											</div>
											<div className="shadow-left" style={{ height: 40 }}></div>
										</div>
									</th>
									<th colSpan={4} style={{ paddingLeft: '12px', paddingRight: '10px', position: 'relative' }}>
										<div className='block-4-btn' style={{ display: 'flex', position: 'absolute', top: 0, right: 10, visibility: `${switchMenu ? 'hidden' : ''}` }}>
											{dimensions && <><div className='ostatokBtn' style={{ height: 20, paddingRight: 3, display: 'flex', position: 'relative' }}>
												<WarehouseDropRange
													setPodlozhka={setPodlozhka}
													podlozhka={podlozhka}
													translator={translator}
													zIndex={true}
													sortActive={sortActive}
													adaptive={true}
													width={dimensions.width1 - 15}
													setSortActive={setSortActive}
													hideArrow={hideArrow}
													hideMenu={hideMenu}
													setHideMenu={setHideMenu}
													setSwitchMenu={setSwitchMenu}
													setFlagSwitchMenu={setFlagSwitchMenu}
													objProduct={objProduct}
												/>
											</div>
												<div className='rezervBtn' style={{ height: 20, paddingRight: 4, display: 'flex', position: 'relative' }}>
													<WarehouseDropInput
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														translator={translator}
														zIndex={true}
														adaptive={true}
														width={dimensions.width2 - 4}
														sortActive={sortActive}
														setSortActive={setSortActive}
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
														setSwitchMenu={setSwitchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														objProduct={objProduct}
													/>
												</div>
												<div className='otprBtn' style={{ height: 20, paddingRight: 4, display: 'flex', position: 'relative' }}>
													<WarehouseDropInput
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														translator={translator}
														zIndex={true}
														width={dimensions.width3 - 4}
														adaptive={true}
														sortActive={sortActive}
														setSortActive={setSortActive}
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
														setSwitchMenu={setSwitchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														objProduct={objProduct}
													/>
												</div>
												<div className='vozvratBtn' style={{ height: 20, display: 'flex', position: 'relative' }}>
													<WarehouseDropInput
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														translator={translator}
														zIndex={true}
														adaptive={true}
														width={dimensions.width4 - 10}
														sortActive={sortActive}
														setSortActive={setSortActive}
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
														setSwitchMenu={setSwitchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														objProduct={objProduct}
													/>
												</div></>}
										</div>
									</th>
									<th style={{ textAlign: 'right', paddingRight: '10px', position: 'relative' }}>
										<div style={{ height: 20, visibility: `${switchMenu ? 'hidden' : ''}` }}>
											<WarehouseDropInput
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												translator={translator}
												zIndex={true}
												adaptive={false}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												hideMenu={hideMenu}
												setHideMenu={setHideMenu}
												setSwitchMenu={setSwitchMenu}
												setFlagSwitchMenu={setFlagSwitchMenu}
												objProduct={objProduct}
											/>
										</div>
									</th>
									<th style={{ textAlign: 'right', paddingRight: '10px', position: 'relative' }}>
										<div style={{ height: 20, visibility: `${switchMenu ? 'hidden' : ''}` }}>
											<WarehouseDropInput
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												translator={translator}
												zIndex={true}
												adaptive={false}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												hideMenu={hideMenu}
												setHideMenu={setHideMenu}
												setSwitchMenu={setSwitchMenu}
												setFlagSwitchMenu={setFlagSwitchMenu}
												objProduct={objProduct}
											/>
										</div>

									</th>
									<th style={{ textAlign: 'right', paddingRight: '10px', position: 'relative' }}>
										<div style={{ height: 20, visibility: `${switchMenu ? 'hidden' : ''}` }}>
											<WarehouseDropInput
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												translator={translator}
												zIndex={true}
												adaptive={false}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												hideMenu={hideMenu}
												setHideMenu={setHideMenu}
												setSwitchMenu={setSwitchMenu}
												setFlagSwitchMenu={setFlagSwitchMenu}
												objProduct={objProduct}
											/>
										</div>

									</th>
									<th colSpan={4} style={{ position: 'relative' }}>
										<div className='block-4-btn' style={{ display: 'flex', position: 'absolute', top: 0, right: 0, visibility: `${switchMenu ? 'hidden' : ''}` }}>
											{dimensions && <><div className='suma1Btn' style={{ height: 20, paddingRight: 3, display: 'flex', position: 'relative' }}>
												<WarehouseDropInput
													setPodlozhka={setPodlozhka}
													podlozhka={podlozhka}
													translator={translator}
													zIndex={true}
													adaptive={true}
													width={dimensions.widthsuma1 - 3}
													sortActive={sortActive}
													setSortActive={setSortActive}
													hideArrow={hideArrow}
													hideMenu={hideMenu}
													setHideMenu={setHideMenu}
													setSwitchMenu={setSwitchMenu}
													setFlagSwitchMenu={setFlagSwitchMenu}
													objProduct={objProduct}
												/>
											</div>
												<div className='suma2Btn' style={{ height: 20, paddingRight: 4, display: 'flex', position: 'relative' }}>
													<WarehouseDropInput
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														translator={translator}
														zIndex={true}
														adaptive={true}
														width={dimensions.widthsuma2 - 4}
														sortActive={sortActive}
														setSortActive={setSortActive}
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
														setSwitchMenu={setSwitchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
																objProduct={objProduct}
													/>
												</div>
												<div className='suma3Btn' style={{ height: 20, paddingRight: 4, display: 'flex', position: 'relative' }}>
													<WarehouseDropInput
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														translator={translator}
														zIndex={true}
														width={dimensions.widthsuma3 - 4}
														adaptive={true}
														sortActive={sortActive}
														setSortActive={setSortActive}
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
														setSwitchMenu={setSwitchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														objProduct={objProduct}
													/>
												</div>
												<div className='suma4Btn' style={{ height: 20, display: 'flex', position: 'relative' }}>
													<WarehouseDropInput
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														translator={translator}
														zIndex={true}
														adaptive={true}
														width={dimensions.widthsuma4}
														sortActive={sortActive}
														setSortActive={setSortActive}
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
														setSwitchMenu={setSwitchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														objProduct={objProduct}
													/>
												</div></>}
										</div>
									</th>
								</tr>
								<tr ref={queryWidthTr}>
									<th style={{ position: 'sticky', left: 0, background: 'white', zIndex: 2 }}></th>
									<th style={{ paddingLeft: '12px', paddingRight: '3px' }} className="nal-ostatok"
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
									>
										<div
											style={{
												textAlign: 'right',
												display: 'flex',
												justifyContent: 'end',
												color: 'rgba(0,0,0,0.9)',
											}}
										>
											{pereschetiHeaders && pereschetiHeaders.ostatok}
											<span style={{ paddingLeft: 3, zIndex: 0, pointerEvents: 'none' }}>/</span>
										</div>
									</th>
									<th className="nal-rezerv" style={{ paddingRight: '4px' }}
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}>
										<div style={{ color: 'rgba(0,0,0,0.7)' }}>
											{pereschetiHeaders && pereschetiHeaders.rezerv}
										</div>
										<span style={{ pointerEvents: 'none' }}></span>
									</th>
									<th className="nal-otpr" style={{ paddingRight: '4px' }}
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
									>
										<div style={{ color: 'rgba(0,0,0,0.7)' }}>{pereschetiHeaders && pereschetiHeaders.otpr}</div>
										<span style={{ pointerEvents: 'none' }}></span>
									</th>
									<th className="nal-vozvrat" style={{ paddingRight: '10px' }}
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
									>
										<div style={{ color: 'rgba(0,0,0,0.7)' }}>{pereschetiHeaders && pereschetiHeaders.vozvrat}</div>
										<span style={{ pointerEvents: 'none' }}></span>
									</th>
									<th className='nal-zakupka' style={{ textAlign: 'right', paddingRight: '10px', color: 'rgba(0,0,0,0.9)' }}
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
									>
										<div>{pereschetiHeaders && pereschetiHeaders.zakupka}</div>
									</th>
									<th style={{ textAlign: 'right', paddingRight: '10px', color: 'rgba(0,0,0,0.9)' }}
										className='nal-prodazha'
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}>
										<div>{pereschetiHeaders && pereschetiHeaders.prodazha}</div>
									</th>
									<th style={{ textAlign: 'right', paddingRight: '10px', color: 'rgba(0,0,0,0.9)' }}
										className='nal-marzha'
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}>
										<div>{pereschetiHeaders && pereschetiHeaders.marzha}</div>
									</th>
									<th className="summa-suma1"
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
									>
										<div
											style={{
												textAlign: 'right',
												display: 'flex',
												justifyContent: 'end',
												paddingRight: '3px',
												color: 'rgba(0,0,0,0.9)',
											}}
										>
											{pereschetiHeaders && pereschetiHeaders.suma1}
											<span style={{ paddingLeft: 3, pointerEvents: 'none' }}>/</span>
										</div>
									</th>
									<th className="summa-suma2"
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}>
										<div style={{ paddingRight: '4px', color: 'rgba(0,0,0,0.7)' }}>
											{pereschetiHeaders && pereschetiHeaders.suma2}
										</div>
										<span style={{ pointerEvents: 'none' }}></span>
									</th>
									<th className="summa-suma3"
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}>
										<div style={{ paddingRight: '4px', color: 'rgba(0,0,0,0.7)' }}>
											{pereschetiHeaders && pereschetiHeaders.suma3}
										</div>
										<span style={{ pointerEvents: 'none' }}></span>
									</th>
									<th className="summa-suma4"
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
									>
										<div style={{ color: 'rgba(0,0,0,0.7)' }}>
											{pereschetiHeaders && pereschetiHeaders.suma4}
										</div>
										<span style={{ pointerEvents: 'none' }}></span>
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

								{objProduct.length > 0 &&
									objProduct.slice((getStart() < 0 ? 0 : getStart()), (getStart() < 0 ? 0 : getStart()) + visibleRows + 1).map((x, index, arr) => (
										<WarehouseProductList
											index={index + (getStart() < 0 ? 0 : getStart())}
											key={index + (getStart() < 0 ? 0 : getStart())}
											setHideMenu={setHideMenu}
											hideMenu={hideMenu}
											setLoadedLabelBlock={setLoadedLabelBlock}
											loadedLabelBlock={loadedLabelBlock}
											setGetIndex={setGetIndex}
											objProduct={objProduct}
											setObjProduct={setObjProduct}
											// switchMenu={switchMenu}
											setSwitchMenu={setSwitchMenu}
											podlozhka={podlozhka}
											setPodlozhka={setPodlozhka}
											setLastIndex={setLastIndex}
											lastIndex={lastIndex}
											setToggleCard={setToggleCard}
											translator={translator}
											flagSwitchMenu={flagSwitchMenu}
										/>
									))}

								<tr colSpan={18} style={{ height: getBottomHeight() }}>
								</tr>
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
					{/* <MaxaScroll
						setHideArrow={setHideArrow}
						updateHover={updateHover}
						podlozhka={podlozhka}
						infiniteScroll={_.throttle(onScroll, 500)}
					>

						

					</MaxaScroll> */}
				</div>
				<div ref={btnUp} onClick={clickScrollUp} className="btnUp">
					<svg
						width="20"
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
			</div>}
		</>
	);
};

export default WarehouseBlock;
