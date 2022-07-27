import React, {useState,useEffect,useRef} from 'react';
import './range.scss';
const WarehouseDropRange = ({objProduct,setFlagSwitchMenu,setSwitchMenu, hideMenu,setHideMenu,hideArrow,setSortActive,sortActive, setPodlozhka, podlozhka, zIndex, translator,width }) => {
	let arr = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
		'20',
		'21',
		'22',
		'23',
		'24',
		'25',
		'26',
		'27',
		'28',
		'29',
		'30',
		'31',
		'32',
		'33',
		'34',
		'35',
		'36',
		'37',
		'38',
		'39',
		'40',
		'41',
		'42',
		'43',
		'44',
		'45',
		'46',
		'47',
		'48',
		'49',
		'50',
		'51',
		'∞',
	];
	const min = 0;
	const max = arr.length - 1;
	const [minRange, setMinRange] = useState(min);
	const [maxRange, setMaxRange] = useState(max);
	const [activity, setActivity] = useState(false);
	const [arrowToggle, setArrowToggle] = useState(false);
	const [arrowActive, setArrowActive] = useState('down');
	const [vitrualClick,setVirtualClick] = useState(false);
	const [rangesData, setRangesData] = useState([
		{ name: 'all', select: true},
		{ name: '< 0', select: false },
	]);
    const [openMenu, setOpenMenu] = useState(false);

	function incMouseEnter(e) {
		tooltipOn(e);
		e.currentTarget.querySelector('input').select();
		e.currentTarget.querySelector('.arrowsInc').style.opacity = 1;
		e.target.closest('.rangeslider')?.querySelector('.min').classList.add('inputThumbColor');
	}

	function incMouseLeave(e) {
		tooltipOff(e);
		e.currentTarget.querySelector('input').blur();
		e.currentTarget.querySelector('.arrowsInc').style.opacity = 0;
		e.target.closest('.rangeslider')?.querySelector('.min').classList.remove('inputThumbColor');
	}

	function decMouseEnter(e) {
		tooltipOn(e);
		e.currentTarget.querySelector('input').select();
		e.currentTarget.querySelector('.arrowsDec').style.opacity = 1;
		e.target.closest('.rangeslider')?.querySelector('.max').classList.add('inputThumbColor');
	}

	function decMouseLeave(e) {
		tooltipOff(e);
		e.currentTarget.querySelector('input').blur();
		e.currentTarget.querySelector('.arrowsDec').style.opacity = 0;
		e.target.closest('.rangeslider')?.querySelector('.max').classList.remove('inputThumbColor');
	}
	const [divInput, setDivInput] = useState(false);
	const [divInput2, setDivInput2] = useState(false);
	const [minInput, setMinInput] = useState('');
	const [maxInput, setMaxInput] = useState('');
	function rangeInput(e) {
		setDivInput(true);
		setHideMenu(true);
		document.querySelector('.track-vertical').style.opacity = 0;
		document.querySelector('.track-horizontal ').style.opacity = 0;
			let temp = e.target.value.replace(/[^0-9]/g, '');
			e.target.value = temp.length === 0 ? ' ' : temp;
			e.target.style.width = e.target.value.length * 7 + 'px';
			setMinInput(e.target.value);
		setMinRange(min);
		setMaxRange(max);
		
		if(!divInput2){
			setMaxInput(maxRange);
		}
		rangesData.map((x) => (x.select = false));
		setRangesData(rangesData);
		warehouse.current.querySelector('.minBG').style.width = '0px';
		warehouse.current.querySelector('.maxBG').style.width = '0px';
	}
	function rangeInput2(e) {
		setDivInput2(true);
		setHideMenu(true);
		document.querySelector('.track-vertical').style.opacity = 0;
		document.querySelector('.track-horizontal ').style.opacity = 0;
		let temp = e.target.value.replace(/[^0-9]/g, '');
		e.target.value = temp.length === 0 ? ' ' : temp;
		e.target.style.width = e.target.value.length * 7 + 'px';
		setMaxInput(e.target.value);
		rangesData.map((x) => (x.select = false));
		setRangesData(rangesData);
		if(!divInput){
			setMinInput(minRange);
		}
		setMinRange(min);
		setMaxRange(max);
		warehouse.current.querySelector('.minBG').style.width = '0px';
		warehouse.current.querySelector('.maxBG').style.width = '0px';
	}
	function click (e) {
		e.currentTarget.querySelector('input').focus();
	}
	function onWheel(e) {
		setDivInput(false);
		setDivInput2(false);
		setPodlozhka(true);
		setHideMenu(true);
		setVirtualClick(true);
		document.querySelector('.track-vertical').style.opacity = 0;
		document.querySelector('.track-horizontal ').style.opacity = 0;
		e.currentTarget.querySelector('input').style.width = e.currentTarget.querySelector('input').value.length * 7 + 'px';
		e.currentTarget.querySelector('input').focus();
		let wDelta = e.deltaY > 0 ? 'down' : 'up';
		if (e.target.classList.contains('range_min') && wDelta === 'down' && minRange < maxRange && minRange !== max - 1 ) {
			e.target.offsetParent.querySelector('.minBG').style.width =
				Math.round(minRange / (max / 100), 2) + '%';
			setMinRange((prev) => {
				return prev + 1;
			});
		} else if (e.target.classList.contains('range_min') && wDelta === 'up' && minRange - 1 >= 0) {
			e.target.offsetParent.querySelector('.minBG').style.width =
				Math.round(minRange / (max / 100), 2) + '%';
			setMinRange((prev) => {
				return prev - 1;
			});
		} else if (e.target.classList.contains('range_max') && wDelta === 'down' && maxRange + 1 <= max) {
			e.target.offsetParent.querySelector('.maxBG').style.width =
				100 - Math.round(maxRange / (max / 100), 2) + '%';
			setMaxRange((prev) => prev + 1);
		} else if (e.target.classList.contains('range_max') && wDelta === 'up' && minRange < maxRange && minRange !== max - 1) {
			e.target.offsetParent.querySelector('.maxBG').style.width =
				100 - Math.round(maxRange / (max / 100), 2) + '%';
			setMaxRange((prev) => prev - 1);
		}
		rangesData.map((x) => (x.select = false));
		setRangesData(rangesData);
	}
	useEffect(() => {
		if (openMenu) {
			document.querySelector('.arrowsInc .arrowUp').style.top = '1px';
			document.querySelector('.arrowsInc .arrowUp').style.opacity = 0.8;
			document.querySelector('.arrowsInc .arrowDown').style.opacity = 0.8;
			document.querySelector('.arrowsInc .arrowDown').style.top = '6px';
			if (minRange === min) {
				document.querySelector('.arrowsInc .arrowUp').style.opacity = 0;
				document.querySelector('.arrowsInc .arrowUp').style.top = '1px';
			} else if (minRange === max-1) {
				// document.querySelector('.arrowsInc .arrowUp').style.top = '6px';
				// document.querySelector('.arrowsInc .arrowDown').style.opacity = 0;
			}
			document.querySelector('.arrowsDec .arrowUp').style.top = '1px';
			document.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
			document.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
			document.querySelector('.arrowsDec .arrowDown').style.top = '6px';
			if (maxRange === max) {
				document.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
				document.querySelector('.arrowsDec .arrowUp').style.top = '1px';
				document.querySelector('.arrowsDec .arrowDown').style.opacity = 0;
				// document.querySelector('.arrowsDec .arrowUp').style.top = '5px';
			} else if (maxRange !== max) {
				document.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
				document.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
				document.querySelector('.arrowsDec .arrowDown').style.top = '6px';
			}
			if(maxRange === max && minRange === min && !rangesData[1].select){
				rangesData[0].select = true;
				setRangesData([...rangesData]);
			}
			warehouse.current.querySelector('.inputDataMin').style.width = warehouse.current.querySelector('.inputDataMin').value.length * 7 + 'px'
			warehouse.current.querySelector('.inputDataMax').style.width = warehouse.current.querySelector('.inputDataMax').value.length * 7 + 'px'
		}
	}, [maxRange, minRange]);
	function inputKeyUp(e) {
		setPodlozhka(true);
		setVirtualClick(true);
		setHideMenu(true);
		rangesData.map((x) => (x.select = false));
		setRangesData(rangesData);
		document.querySelector('.track-vertical').style.opacity = 0;
		document.querySelector('.track-horizontal ').style.opacity = 0;

		if (38 === e.keyCode) {
			e.preventDefault();
			setDivInput(false);
			if (e.currentTarget.classList.contains('range_min') && minRange - 1 >= 0) {
				setMinRange((prev) => prev - 1);
			}
		}
		if (40 === e.keyCode) {
			e.preventDefault();
			setDivInput(false);
			if (e.currentTarget.classList.contains('range_min') && minRange < maxRange) {
				setMinRange((prev) => prev + 1);
			} 
		}
		e.currentTarget.closest('.rangeslider').querySelector('.minBG').style.width =
			Math.round(minRange / (max / 100), 2) + '%';
	}
	function inputKeyDown(e) {
		setPodlozhka(true);
		setVirtualClick(true);
		setHideMenu(true);
		rangesData.map((x) => (x.select = false));
		setRangesData(rangesData);
		document.querySelector('.track-vertical').style.opacity = 0;
		document.querySelector('.track-horizontal ').style.opacity = 0;
		if (38 === e.keyCode) {
			e.preventDefault();
			setDivInput2(false);
			if (e.currentTarget.classList.contains('range_max') && maxRange > minRange) {
				setMaxRange((prev) => prev - 1);
			} 
		}
		if (40 === e.keyCode) {
			e.preventDefault();
			setDivInput2(false);
			if (e.currentTarget.classList.contains('range_max') && maxRange + 1 <= max) {
				setMaxRange((prev) => prev + 1);
			} 
		}
		e.currentTarget.closest('.rangeslider').querySelector('.maxBG').style.width =
			100 - Math.round(maxRange / (max / 100), 2) + '%';
	}
	const resultRef = useRef();
	const warehouse = useRef();
	function rangesListClick(index, e) {
		setPodlozhka(true);
		setVirtualClick(true);
		setDivInput(false);
		setDivInput2(false);
		setMinRange(min);
		setMaxRange(max);
		if (index === 0) {
			console.log('vse');
			rangesData[0].select = true;
			rangesData[1].select = false;
			resultRef.current.innerHTML = '';
			setArrowToggle(false);
			if((objProduct.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
				warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
			}else {
				warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
			}
			warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
			warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
			setOpenMenu(false);
			setPodlozhka(false);
			setHideMenu(false);
			setVirtualClick(false);
		}
		if (index === 1) {
			setHideMenu(true);
			console.log('0');
			resultRef.current.innerHTML = '< 0';
			document.querySelector('.track-vertical').style.opacity = 0;
			document.querySelector('.track-horizontal ').style.opacity = 0;
			rangesData[0].select = false;
			rangesData[1].select = true;
		}
		
		warehouse.current.querySelector('.inputDataMin').style.width = '7px'
		warehouse.current.querySelector('.inputDataMax').style.width = '7px'
		e.target.closest('.rangeslider').querySelector('.minBG').style.width = 0;
		e.target.closest('.rangeslider').querySelector('.maxBG').style.width = 0;
		setRangesData([...rangesData]);
	}

	//ZAPOMNIT PRI VHODE ZNACHENIYA
	useEffect(()=> {
		if (warehouse?.current !== null && warehouse.current.querySelector('.inputDataMin') !== null && warehouse.current.querySelector('.inputDataMax') !== null){
			warehouse.current.querySelector('.inputDataMin').style.width = warehouse.current.querySelector('.inputDataMin').value.length * 7 + 'px'
			warehouse.current.querySelector('.inputDataMax').style.width = warehouse.current.querySelector('.inputDataMax').value.length * 7 + 'px'
			warehouse.current.querySelector('.minBG').style.width = Math.round(minRange / (max / 100), 2) + '%';
			warehouse.current.querySelector('.maxBG').style.width = 100 - Math.round(maxRange / (max / 100), 2) + '%';
			warehouse.current.querySelector('.arrowsInc .arrowUp').style.top = '1px';
			warehouse.current.querySelector('.arrowsInc .arrowUp').style.opacity = 0.8;
			warehouse.current.querySelector('.arrowsInc .arrowDown').style.opacity = 0.8;
			warehouse.current.querySelector('.arrowsInc .arrowDown').style.top = '6px';
			if (minRange === min) {
				warehouse.current.querySelector('.arrowsInc .arrowUp').style.opacity = 0;
				warehouse.current.querySelector('.arrowsInc .arrowUp').style.top = '1px';
			} else if (minRange === max-1) {
				// warehouse.current.querySelector('.arrowsInc .arrowUp').style.top = '6px';
				// warehouse.current.querySelector('.arrowsInc .arrowDown').style.opacity = 0;
			}
			warehouse.current.querySelector('.arrowsDec .arrowUp').style.top = '1px';
			warehouse.current.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
			warehouse.current.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
			warehouse.current.querySelector('.arrowsDec .arrowDown').style.top = '6px';
			if (maxRange === max) {
				warehouse.current.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
				warehouse.current.querySelector('.arrowsDec .arrowUp').style.top = '1px';
				warehouse.current.querySelector('.arrowsDec .arrowDown').style.opacity = 0;
			} else if (maxRange !== max) {
				warehouse.current.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
				warehouse.current.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
				warehouse.current.querySelector('.arrowsDec .arrowDown').style.top = '6px';
			}
		}
		
	},[openMenu]);
	//ZAPOMNIT PRI VHODE ZNACHENIYA
	function menuOn(e) {
		if (!podlozhka) {
			setOpenMenu(true);
			setArrowToggle(true);
			e.currentTarget.style.zIndex = '9999';
			warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
	
		}
	}
	function menuOff(e) {
		if (podlozhka) {
			setOpenMenu(true);
		} else {
			setOpenMenu(false);
			e.currentTarget.style.zIndex = '1';
			if((objProduct.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
				warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
			}else {
				warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
			}

			if (activity) {
				setArrowToggle(true);
			} else {
				setArrowToggle(false);
			}
		}
	}
	useEffect(() => {
		if (podlozhka) {
		} else {
			setOpenMenu(false);
		}
		if (!podlozhka && !activity) {
			setArrowActive('down');
			setArrowToggle(false);
			setActivity(false);
		}

		if(minInput.length === 0 || minInput === ' '){
			setMinInput(0);
		}
		if(maxInput.length === 0 || maxInput === ' '){
			setMaxInput('∞');
		}
	}, [podlozhka]);
	useEffect(() => {
		setArrowActive('down');
		setArrowToggle(false);
		setActivity(false);
	}, [sortActive]);
	function sortClickBtn(e) {
		setHideMenu(false);
		if (arrowActive === 'down') {
			setArrowActive('up');
		} else if (arrowActive === 'up') {
			setArrowActive('down');
		}
		setSortActive(!sortActive);
		if((objProduct.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
			warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
		}else {
			warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
		}
		warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
		warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;

		setTimeout(() => {
			setActivity(true);
			setArrowToggle(true);
			if (arrowActive === 'down') {
				setArrowActive('up');
			} else {
				setArrowActive('down');
			}
		}, 0);
		document.querySelectorAll('.warehouse-dropmenu').forEach((x) => {
			x.classList.remove('smallsort');
		});
		setOpenMenu(false);
		setPodlozhka(false);
		setVirtualClick(false);
	}
	function tooltipOn(e) {
		const tooltipBlock = document.getElementById('tooltipBtn');
		let posElement = e.currentTarget.getBoundingClientRect();
		tooltipBlock.style.fontSize = '10px';
		if (e.currentTarget.closest('.sortBtn')) {
			tooltipBlock.innerHTML = `${translator.getTranslation('sortData', 'sortTooltip')} ↑↓`;
			tooltipBlock.style.left = posElement.x + 'px';
			tooltipBlock.style.top = posElement.y + 25 + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		}
		if (e.currentTarget.querySelector('.inputDataMin')){
			tooltipBlock.innerHTML = translator.getTranslation('tooltipRange', 'value' );
			tooltipBlock.style.left = posElement.x - tooltipBlock.offsetWidth + 'px';
			tooltipBlock.style.top = posElement.y + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		}
		if (e.currentTarget.querySelector('.inputDataMax')){
			tooltipBlock.innerHTML = translator.getTranslation('tooltipRange', 'value2' );
			tooltipBlock.style.left = posElement.x - tooltipBlock.offsetWidth + 'px';
			tooltipBlock.style.top = posElement.y + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		}
		if (e.currentTarget.innerText === '< 0'){
			tooltipBlock.innerHTML = translator.getTranslation('tooltipRange', '<0' );
			tooltipBlock.style.left = posElement.x - tooltipBlock.offsetWidth + 'px';
			tooltipBlock.style.top = posElement.y + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		}
	}
	function tooltipOff() {
		document.getElementById('tooltipBtn').style.animation = '';
	}
	useEffect(()=> {
		if(!podlozhka){
			if((divInput && divInput2 && +minInput > +maxInput)) {
				const newNumber = +minInput + 1;
				setMaxInput(newNumber)
			}
		}
	},[podlozhka])
	function clickVirtualWrapper () {
		setOpenMenu(false);
		setPodlozhka(false);
		setHideMenu(false);
		// console.log('srabotalo');
		setFlagSwitchMenu(false);
		setSwitchMenu(false);
		setVirtualClick(false);
		if((objProduct.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
			warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
		}else {
			warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
		}
		warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
		warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
		document.querySelectorAll('.warehouse-dropmenu.ranges').forEach((x) => {
			x.style.zIndex = 1;
		});
		document.querySelectorAll('.block-3-btn .warehouse-dropmenu').forEach((x) => {
			x.style.width = '22px';
		});
		document.querySelectorAll('.telOperator .warehouse-dropmenu').forEach((x) => {
			x.style.minWidth = '22px';
		});
		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			x.classList.remove('showBtn');
		});
		document.querySelector('.width21px').style.maxWidth = '51px';
	}
	function handle(e) {
        if (warehouse.current && !warehouse.current.contains(e.target)) {
			clickVirtualWrapper()
		}
    }
    useEffect(() => {
		if(vitrualClick){
			document.addEventListener("click", handle, true);
		}
        return () => {
            document.removeEventListener("click", handle, true);
        };
    }, [vitrualClick]);
	return (
		<>
			<div
				style={zIndex ? { zIndex: 1 ,width: width+'px'} : {width: width+'px'}}
				onMouseEnter={menuOn}
				onMouseLeave={menuOff}
				className={`warehouse-dropmenu ranges ${
					arrowToggle ||
					activity || !hideArrow && !podlozhka ? 'hide-arrow' : ''
				} ${hideMenu && !openMenu ? 'hide-menu': ""}`}
				ref={warehouse}
			>
				<div ref={resultRef} className="range-result">
					{divInput && !divInput2 ? `${minInput} - ${arr[maxRange] === '∞' ? '∞' : maxInput}` :
						( divInput2 && divInput) || (divInput2 && !divInput) ? `${minInput} - ${maxInput}` : minRange > min || maxRange < max
						? `${arr[minRange]} - ${arr[maxRange]}`
						: rangesData[1].select ? '< 0' : ''}
				</div>
				<div
					onMouseEnter={tooltipOn}
					onMouseLeave={tooltipOff}
					className={`sortBtn ${
						arrowToggle || activity || (arrowToggle && activity)
							? 'on'
							: ''
					}`}
					onClick={sortClickBtn}
				>
					<svg
					width="10"
					height="10"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style={
						arrowActive === 'down'
							? {}
							: arrowActive === 'up'
							? { transform: 'scaleY(-1) scale(1) translateX(0px) translateY(0px)' }
							: { transform: 'scaleY(-1) scale(1) translateX(0px) translateY(0px)' }
					}
				>
					<path
						d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.06508L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z"
						fill="black"
					></path>
				</svg>
				</div>
				<span className="underline"></span>
				<div
					className={openMenu ? `dropmenu toggle` : 'dropmenu'}
				>
					{openMenu && (
						<div className="rangeslider">
							<div className="rangesInput">
								<input
									className="min"
									name="range_1"
									type="range"
									min={min}
									readOnly
									max={max}
									value={minRange}
								/>
								<span className="minBG"></span>
								<input
									className="max"
									name="range_1"
									type="range"
									min={min}
									readOnly
									max={max}
									value={maxRange}
								/>
								<span className="maxBG"></span>
							</div>
							<div className="rangesBtnBlock">
								{rangesData.map((x, i) => (
									<div
										key={i}
										onClick={(e) => rangesListClick(i, e)}
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
										className={x.select ? `rangesList select-btn` : 'rangesList'}
									>
										{translator.getTranslation('btnAll', x.name ) ?? x.name }
									</div>
								))}
							</div>
							<div
								className="range_min inc"
								tabIndex="0"
								style={{ outline: 'none' }}
								onKeyDown={inputKeyUp}
								onWheel={onWheel}
								onClick={click}
								onMouseEnter={incMouseEnter}
								onMouseLeave={incMouseLeave}
							>
								<div className="arrowsInc" style={{ pointerEvents: 'none', zIndex: 2 }}>
									<span className="arrowUp"></span>
									<span className="arrowDown"></span>
								</div>
								<input
									onChange={rangeInput}
									maxLength="4"
									value={divInput ? minInput : arr[minRange]}
									className="inputDataMin"
								/>
							</div>
							<div
								className="range_max dec"
								tabIndex="0"
								style={{ outline: 'none' }}
								onKeyDown={inputKeyDown}
								onWheel={onWheel}
								onClick={click}
								onMouseEnter={decMouseEnter}
								onMouseLeave={decMouseLeave}
							>
								<div className="arrowsDec" style={{ pointerEvents: 'none', zIndex: 2 }}>
									<span className="arrowUp"></span>
									<span className="arrowDown"></span>
								</div>
								<input
									onChange={rangeInput2}
									maxLength="4"
									value={divInput2 ? maxInput : arr[maxRange]}
									className="inputDataMax"

								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
export default WarehouseDropRange;
