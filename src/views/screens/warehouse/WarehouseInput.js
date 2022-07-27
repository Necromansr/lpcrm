import React, { useState, useEffect, useRef } from 'react'

const WarehouseInput = ({ data,setFlagSwitchMenu, setSwitchMenu, setPodlozhka, podlozhka, setSortActive, sortActive, translator, hideMenu, setHideMenu }) => {
	const [inputID, setInputID] = useState('');
	const [activity, setActivity] = useState(false);
	const [arrowToggle, setArrowToggle] = useState(false);
	const [arrowActive, setArrowActive] = useState('down');
	const [vitrualClick, setVirtualClick] = useState(false);
	function warehouseInputOn(e) {
		e.currentTarget.querySelector('input').focus();
		e.currentTarget.querySelector('input').select();
		setArrowToggle(true);
	}
	function warehouseInputOff(e) {
		if (!podlozhka) {
			e.currentTarget.querySelector('input').blur();
			setArrowToggle(false);
		} 
	}
	function changeInput(e) {
		setPodlozhka(true);
		setVirtualClick(true);
		setHideMenu(true);
		warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';

		warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 0;
		warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 0;
		if (e.target.value.length === 1) {
			e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
			// setInputID(e.target.value);
		}
		e.target.value = e.target.value.replace(/[^0-9-.]/g, '');
		setInputID(e.target.value);
	}
	function enter(e) {
		if (e.key === "Enter") {
			setVirtualClick(false);
			setHideMenu(false);
			if((data.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
				warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
			}else {
				warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
			}

			warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
			warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
			setPodlozhka(false);
			e.currentTarget.blur();
		}
	}
	useEffect(() => {
		if (!podlozhka && !activity) {
			setArrowActive('down');
			setArrowToggle(false);
			setActivity(false);
		}
	}, [podlozhka]);
	useEffect(() => {
		setArrowActive('down');
		setArrowToggle(false);
		setActivity(false);
	}, [sortActive]);

	function sortClickBtn(e) {
		if (arrowActive === 'down') {
			setArrowActive('up');
		} else if (arrowActive === 'up') {
			setArrowActive('down');
		}
		setSortActive(!sortActive);

		if((data.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
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
		setHideMenu(false);
		document.querySelectorAll('.warehouse-dropmenu').forEach((x) => {
			x.classList.remove('smallsort');
		});
		setPodlozhka(false);

	}


	function tooltipOn(e) {
		const tooltipBlock = document.getElementById('tooltipBtn');
		let posElement = e.currentTarget.getBoundingClientRect();
		tooltipBlock.style.fontSize = '12px';
		// if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
		// 	// tooltipBlock.innerText = e.target.innerText;

		// }
		if (e.currentTarget.closest('.sortBtn')) {
			tooltipBlock.style.fontSize = '12px';
			tooltipBlock.innerHTML = `${translator.getTranslation('sortData', 'sortTooltip')} ↑↓`;
			tooltipBlock.style.left = posElement.x + 'px';
			tooltipBlock.style.top = posElement.y + 25 + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		}

	}
	function tooltipOff() {
		document.getElementById('tooltipBtn').style.animation = '';
	}
	const warehouse = useRef();
	function clickVirtualWrapper() {
		setPodlozhka(false);
		setHideMenu(false);
		if(setFlagSwitchMenu)setFlagSwitchMenu(false);
		if(setSwitchMenu)setSwitchMenu(false);
		setVirtualClick(false);
		if((data.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
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
		if(setSwitchMenu)document.querySelector('.width21px').style.maxWidth = '51px';
	}
	function handle(e) {
		if (warehouse.current && !warehouse.current.contains(e.target)) {
			clickVirtualWrapper()
		}
	}
	useEffect(() => {
		if (vitrualClick) {
			document.addEventListener("click", handle, true);
		}
		return () => {
			document.removeEventListener("click", handle, true);
		};
	}, [vitrualClick]);
	return (
		<div
			onMouseLeave={warehouseInputOff}
			onMouseEnter={warehouseInputOn}
			className={`warehouse-input ${hideMenu && !arrowToggle ? "hide-menu" : ""}`}
			ref={warehouse}
		>
			<input
				onChange={changeInput}
				onKeyUp={enter}
				value={inputID}
				type="text"
				style={{ color: 'rgba(0, 0, 0, 0.65)' }}
			/>
			<div
				onMouseEnter={tooltipOn}
				onMouseLeave={tooltipOff}
				className={`sortBtn ${arrowToggle || activity || (arrowToggle && activity)
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
		</div>
	)
}

export default WarehouseInput;
