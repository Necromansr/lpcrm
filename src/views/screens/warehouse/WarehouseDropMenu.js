import React, { useState, useRef, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { FixedSizeList as List } from 'react-window';
// import './range.scss';

const WarehouseDropMenu = ({
	objProduct,
	inputOn,
	setPodlozhka,
	podlozhka,
	type,
	adaptive,
	switchMenu,
	setFlagSwitchMenu,
	searchLine,
	translator,
	sortActive,
	setSortActive,
	labelForWidth,
	setLabelForWidth,
	hideMenu,
	setHideMenu,
	setSwitchMenu,
	setWidth21px,
	width21px,
	hideArrow,
	adaptiveTelNum,
	zIndex,
}) => {
	const [openMenu, setOpenMenu] = useState(false);

	const LabelOn = () => {
		return (
			<label style={{ pointerEvents: 'none' }} className="switch-btn-small">
				<input
					style={{ pointerEvents: 'none' }}
					type="checkbox"
					className="status-rozetka"
					defaultChecked={true}
				/>
				<span style={{ pointerEvents: 'none' }} className="slider round"></span>
			</label>
		);
	};
	const LabelOff = () => {
		return (
			<label style={{ pointerEvents: 'none' }} className="switch-btn-small">
				<input
					style={{ pointerEvents: 'none' }}
					type="checkbox"
					className="status-rozetka"
					defaultChecked={false}
				/>
				<span style={{ pointerEvents: 'none' }} className="slider round"></span>
			</label>
		);
	};
	let newarr = [];
	if (inputOn) {
		objProduct.map((x) => {
			newarr.push(x[type]);
			if (x.podProduct?.length > 0) {
				newarr.push(x.podProduct?.map((x) => x[type]));
			}
		});
		newarr = newarr.flat().map((x, index) => {
			return { id: index + 1, attribute: x, select: false };
		});
		newarr = [{ id: 0, attribute: 'all', select: true }, ...newarr];
		// console.log(newarr)
	} else {
		if (type === 'country') {
			newarr = [
				{ id: 0, attribute: 'all', select: true },
				{ id: 1, attribute: '🇷🇺', select: false },
				{ id: 2, attribute: '🇺🇦', select: false },
				{ id: 3, attribute: '🇹🇷', select: false },
			];
		}
		if (type === 'currency') {
			newarr = [
				{ id: 0, attribute: 'all', select: true },
				{ id: 1, attribute: '$', select: false },
				{ id: 2, attribute: '€', select: false },
				{ id: 3, attribute: '₴', select: false },
				{ id: 4, attribute: '₽', select: false },
				{ id: 5, attribute: '₽', select: false },
				{ id: 6, attribute: '₽', select: false },
				{ id: 7, attribute: '₽', select: false },
			];
		}
		if (type === 'status') {
			newarr = [
				{ id: 0, attribute: 'all', select: true },
				{ id: 1, attribute: <LabelOn />, select: false },
				{ id: 2, attribute: <LabelOff />, select: false },
			];
		}
		if (type === 'telOperator') {
			newarr = [
				{ id: 0, attribute: 'all', select: true },
				{ id: 1, attribute: 'icon-Vector-1', select: false },
				{ id: 2, attribute: 'icon-Union', select: false },
				{ id: 3, attribute: 'icon-Vector-3', select: false },
				{ id: 4, attribute: 'icon-Union-1', select: false },
				{ id: 5, attribute: 'icon-Union-18', select: false },
			];
		}
	}

	const [obj, setObj] = useState(newarr);
	const [objCopy, setObjCopy] = useState(newarr);
	const [vitrualClick,setVirtualClick] = useState(false);
	const [value, setValue] = useState('');
	function infinityClick(index, e) {
		setPodlozhka(true);
		setVirtualClick(true);
		warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
		warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 0;
		warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 0;
		// document.querySelector('.first-tab-body').classList.add('hoverOff');
		if (obj[index].attribute === 'all') {
			obj.map((x) => (x.select = false));
			obj[index].select = true;
			setOpenMenu(false);
			setPodlozhka(false);
			setArrowToggle(false);
			setVirtualClick(false);
			if((objProduct.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
				warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
			}else {
				warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
			}

			warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
			warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
			setHideMenu(false);
		} else {
			obj[index].select = !obj[index].select;
			obj.map((x) => {
				if (x.attribute === 'all') {
					x.select = false;
				}
			});
			objCopy.map((x) => {
				if (x.attribute === 'all') {
					x.select = false;
				}
			});
			if (
				objCopy.filter((x) => x.select).length === 0 ||
				obj.filter((x) => x.select).length === 0
			) {
				obj.map((x) => {
					if (x.attribute === 'all') {
						x.select = true;
					}
				});
				objCopy.map((x) => {
					if (x.attribute === 'all') {
						x.select = true;
					}
				});
			}
			setHideMenu(true);
		}
		setObjCopy([...objCopy]);
		setObj([...obj]);
	}
	function clickList(index, e) {
		setPodlozhka(true);
		warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';

		warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 0;
		warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 0;
		setHideMenu(true);
		setVirtualClick(true);
		// document.querySelector('.first-tab-body').classList.add('hoverOff');
		if (type === 'status') {
			let newobj = obj.map((x, i) => {
				if (i === index && x.attribute !== 'all') {
					if (adaptive) {
						setFlagSwitchMenu(true);
						if (activity) {
							document.querySelectorAll('.warehouse-dropmenu').forEach((x) => {
								x.classList.remove('smallsort');
							});
							warehouse.current.classList.add('smallsort');
						}
						if (setLabelForWidth) {
							setLabelForWidth(true); //melkie menu
						}
					} else {
						if(setLabelForWidth){

							setLabelForWidth(false); //menu width21px
						}
					}
					return { ...x, select: !x.select };
				} else {
					return { ...x, select: false };
				}
			});
			if (newobj.filter((x) => x.select === true).length === 0) {
				setHideMenu(false);
				setOpenMenu(false);
				setPodlozhka(false);
				setVirtualClick(false);
				if((objProduct.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
					warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
				}else {
					warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
				}

				warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
				warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
				setArrowToggle(false);
				newobj[0].select = true;
				if (adaptive) {
					setTimeout(() => {
						let hui = [...document.querySelectorAll('.block-3-btn .status-result')].every(x => x.innerHTML === '');
						if(hui) {
							setLabelForWidth(false);
						}
					}, 0);
					setFlagSwitchMenu(false);
					warehouse.current.classList.remove('smallsort');
					e.currentTarget.closest('.warehouse-dropmenu').style.width = '22px';
					document.querySelector('.width21px').style.maxWidth = '51px';
				}
			}
			setObj(newobj);
		} else {
			console.log('ebat')
			let newobj = obj.map((x, i) => {
				if (i === index) {
					return { ...x, select: !x.select };
				} else if (index === 0 && i === 0) {
					setHideMenu(false);
					setArrowToggle(false);
					setVirtualClick(false);
					return { ...x, select: true };
				} else if (index === 0 && i !== 0) {
					setHideMenu(false);
					setArrowToggle(false);
					setOpenMenu(false);
					setPodlozhka(false);
					setVirtualClick(false);
					warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'auto';

					warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
					warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
					if (adaptiveTelNum) {

						warehouse.current.style.minWidth = '22px';
					}
					return { ...x, select: false };
				} else if (index !== 0 && i === 0) {
					return { ...x, select: false };
				} else {
					return { ...x };
				}
			});
			if (newobj.filter((x) => x.select === true).length === 0) {
				setHideMenu(false);
				setOpenMenu(false);
				setPodlozhka(false);
				setArrowToggle(false);
				setVirtualClick(false);

				if((objProduct.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
					warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
				}else {
					warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
				}

				warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
				warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
				newobj[0].select = true;
				if (adaptiveTelNum) {
					warehouse.current.style.minWidth = '22px';
				}
			}
			setObj(newobj);
		}
	}
	const ref = useRef();
	function changeInput(e) {
		setVirtualClick(true);
		if (e.target.value.length >= 1) {
			e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
		}
		if (type === 'name' || type === 'attribute' || type ==='company' || type ==='contact') {
			if (e.target.value !== '') {
				const results = objCopy.filter((x) => {
					return x.attribute.toLowerCase().includes(e.target.value.toLowerCase());
				});
				setObj(results);
			} else {
				setObj(objCopy);
			}
		}
		setValue(e.target.value);
		setPodlozhka(true);
		setHideMenu(true);
	}
	const warehouse = useRef();
	const [arrowToggle, setArrowToggle] = useState(false);
	const [arrowActive, setArrowActive] = useState('down');
	const [activity, setActivity] = useState(false);
	const refStatusText = useRef();
	const refTelOperator = useRef();
	function menuOn(e) {
		if (!podlozhka) {
			setValue('');
			setArrowToggle(true);
			setOpenMenu(true);
			// document.querySelector('.contentScroll').style.overflowY = 'hidden';
			// warehouse.current.closest('.scroll').style.overflowY = 'hidden';
			warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';

	
			if (type === 'name' || type === 'attribute' || type ==='company' || type ==='contact') {
				setObj(objCopy); //dlya infinity scroll
				warehouse.current.querySelector('.scrollOff')?.scrollTo({ top: 0 });
			}
			if (inputOn) {
				ref.current.focus();
			}
			if (adaptive) {
				if (refStatusText.current.innerHTML !== '') {
					warehouse.current.classList.add('hide-arrow');
				} else if (refStatusText.current.innerHTML !== '' && activity) {
					warehouse.current.classList.add('hide-arrow');
				} else {
					if (activity) {
						warehouse.current.classList.add('hide-arrow');
					} else {
						warehouse.current.classList.remove('hide-arrow');
					}
				}
				e.currentTarget.style.width = '51px';
				if(document.querySelector('.width21px')) document.querySelector('.width21px').style.maxWidth = '21px';

			}
			if (adaptiveTelNum) {
				if (refTelOperator.current.innerHTML !== '') {
					warehouse.current.classList.add('hide-arrow');
				} else if (refTelOperator.current.innerHTML !== '' && activity) {
					warehouse.current.classList.add('hide-arrow');
				} else {
					if (activity) {
						warehouse.current.classList.add('hide-arrow');
					} else {
						warehouse.current.classList.remove('hide-arrow');
					}
				}
				e.currentTarget.style.minWidth = '51px';
				// if(document.querySelector('.width21px')) document.querySelector('.width21px').style.maxWidth = '21px';

			}
			warehouse.current.querySelector('.simplebar-content-wrapper')?.scrollTo({
				top: 0,
			});
		}
	}
	function menuOff(e) {
		if (podlozhka) {
			setOpenMenu(true);
		} else {
			setOpenMenu(false);
			if (activity) {
				setArrowToggle(true);
			} else {
				setArrowToggle(false);
			}
			// warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';

			if((objProduct.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
				warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
			}else {
				warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
			}

			if (type !== 'status') {
				setValue(
					obj.filter((x) => x.select === true).length > 1
						? translator.getTranslation('btnFiltr', 'filtr')
						: obj.filter((x) => x.select === true)[0]?.attribute.includes('all')
						? ''
						: obj.filter((x) => x.select === true)[0]?.attribute
				);
				if (obj.filter((x) => x.select === true).length === 0) {
					setValue('');
				}
			} else {
				setValue(
					obj.filter((x) => x.select === true).length > 1
						? translator.getTranslation('btnFiltr', 'filtr')
						: obj.filter((x) => x.select === true)[0].attribute === 'all'
						? ''
						: obj.filter((x) => x.select === true)[0].attribute
				);
			}
			if (inputOn) {
				ref.current.blur();
			}
			if (adaptive) {
				if (refStatusText.current.innerHTML !== '') {
					warehouse.current.classList.add('hide-arrow');
				} else if (refStatusText.current.innerHTML !== '' && activity) {
					warehouse.current.classList.add('hide-arrow');
				} else {
					if (activity) {
						warehouse.current.classList.add('hide-arrow');
					} else {
						warehouse.current.classList.remove('hide-arrow');
					}
				}
				e.currentTarget.style.width = '22px';
				// document.querySelector('.width21px').style.maxWidth = '51px';
				if(document.querySelector('.width21px')) document.querySelector('.width21px').style.maxWidth = '51px';

			}
			if (adaptiveTelNum) {
				if (refTelOperator.current.innerHTML !== '') {
					warehouse.current.classList.add('hide-arrow');
				} else if (refTelOperator.current.innerHTML !== '' && activity) {
					warehouse.current.classList.add('hide-arrow');
				} else {
					if (activity) {
						warehouse.current.classList.add('hide-arrow');
					} else {
						warehouse.current.classList.remove('hide-arrow');
					}
				}
				e.currentTarget.style.minWidth = '22px';
			}
		}
	}
	
	useEffect(() => {
		if (podlozhka) {
		} else {
			if (type !== 'status') {
				setValue(
					obj.filter((x) => x.select === true).length > 1
						? translator.getTranslation('btnFiltr', 'filtr')
						: obj.filter((x) => x.select === true)[0]?.attribute.includes('all')
						? ''
						: obj.filter((x) => x.select === true)[0]?.attribute
				);
				if (obj.filter((x) => x.select === true).length === 0) {
					setValue('');
				}
			} else {
				setValue(
					obj.filter((x) => x.select === true).length > 1
						? translator.getTranslation('btnFiltr', 'filtr')
						: obj.filter((x) => x.select === true)[0].attribute === 'all'
						? ''
						: obj.filter((x) => x.select === true)[0].attribute
				);
			}
			setOpenMenu(false);
		}
	}, [podlozhka]);

	function tooltipOn(e) {
		const tooltipBlock = document.getElementById('tooltipBtn');
		let posElement = e.currentTarget.getBoundingClientRect();
		tooltipBlock.style.fontSize = '10px';
		if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
			// tooltipBlock.innerText = e.target.innerText;
			if (type === 'country' || type === 'status' || type === 'telOperator') {
				// tooltipBlock.innerText = e.target.innerText;
			} else {
				tooltipBlock.innerHTML = searchLine(e.target.innerText, value);
				tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
				tooltipBlock.style.top = posElement.y + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
			}
		} else {
			if (type === 'country') {
				if (e.currentTarget.innerText === '🇺🇦') {
					// tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'ukraine');
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
				if (e.currentTarget.innerText === '🇷🇺') {
					// tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'russia');
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
				if (e.currentTarget.innerText === '🇹🇷') {
					// tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'turkey');
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
			} else if (type === 'currency') {
				if (e.currentTarget.innerText === '$') {
					// tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'dollar');
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
				if (e.currentTarget.innerText === '€') {
					// tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'eur');
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
				if (e.currentTarget.innerText === '₴') {
					// tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'uah');
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
				if (e.currentTarget.innerText === '₽') {
					// tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'rub');
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
			} else if (type === 'status') {
		
					// tooltipBlock.style.fontSize = '12px';
					if(e.currentTarget.querySelector('input')?.defaultChecked){
						tooltipBlock.innerText = translator.getTranslation('tooltipSwitchBtn', 'switchOn');
					}else {
						tooltipBlock.innerText = translator.getTranslation('tooltipSwitchBtn', 'switchOff');
					}
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y -2+ 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		
				
			} else if (type === 'telOperator') {
				if (e.currentTarget.children[0]?.className === 'icon-Vector-1 icons') {

						tooltipBlock.innerText = translator.getTranslation('tooltipOperator', 'vodafone');
						tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
						tooltipBlock.style.top = posElement.y -2+ 'px';
						tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
			
				}
				if (e.currentTarget.children[0]?.className === 'icon-Union icons') {
			
						tooltipBlock.innerText = translator.getTranslation('tooltipOperator', 'unknownNumber');
						tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
						tooltipBlock.style.top = posElement.y -2+ 'px';
						tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				
				}
				if (e.currentTarget.children[0]?.className === 'icon-Vector-3 icons') {
			
						tooltipBlock.innerText = translator.getTranslation('tooltipOperator', 'lifecell');
						tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
						tooltipBlock.style.top = posElement.y -2+ 'px';
						tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
			
				}
				if (e.currentTarget.children[0]?.className === 'icon-Union-1 icons') {
			
						tooltipBlock.innerText = translator.getTranslation('tooltipOperator', 'kyivstar');
						tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
						tooltipBlock.style.top = posElement.y -2+ 'px';
						tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				
				}
				if (e.currentTarget.children[0]?.className === 'icon-Union-18 icons') {
	
						tooltipBlock.innerText = translator.getTranslation('tooltipOperator', 'errorNumber');
						tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
						tooltipBlock.style.top = posElement.y -2+ 'px';
						tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		
				}
			}

			if (e.currentTarget.className === 'countBlock') {
				tooltipBlock.innerHTML = `${translator.getTranslation(
					'tooltipCount',
					'attribute',
					e.currentTarget.children[0].innerText.toLocaleString('ru-RU', {
						minimumFractionDigits: 0,
						maximumFractionDigits: 0,}),
					e.currentTarget.children[1].innerText.toLocaleString('ru-RU', {
						minimumFractionDigits: 0,
						maximumFractionDigits: 0,})
				)}`;

				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 25 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
			}
			if (e.currentTarget.closest('.sortBtn')) {
				tooltipBlock.innerHTML = `${translator.getTranslation('sortData', 'sortTooltip')} ↑↓`;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 25 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
			}
		}
	}
	function tooltipOff() {
		document.getElementById('tooltipBtn').style.animation = '';
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
		setHideMenu(false);
		if (switchMenu && adaptive && setWidth21px) {
			setWidth21px(true);
		} else if (!width21px && !switchMenu && !adaptive && !activity && setWidth21px) {
			setWidth21px(false);
		}

		if (arrowActive === 'down') {
			setArrowActive('up');
		} else if (arrowActive === 'up') {
			setArrowActive('down');
		}
		setSortActive(!sortActive);
		// document.querySelector('.contentScroll').style.overflowY = 'scroll';
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
		if (adaptive) {
			setFlagSwitchMenu(false);
		}
		setOpenMenu(false);
		setPodlozhka(false);
		setVirtualClick(false);
	}

	useEffect(() => {
		if (activity && adaptive && refStatusText.current.innerHTML !== '') {
			document.querySelectorAll('.warehouse-dropmenu').forEach((x) => {
				x.classList.remove('smallsort');
			});
			warehouse.current.classList.add('smallsort');
		} else if (activity && adaptive && refStatusText.current.innerHTML === '') {
			document.querySelectorAll('.warehouse-dropmenu').forEach((x) => {
				x.classList.remove('smallsort');
			});
		} else if (activity && !adaptive) {
			document.querySelectorAll('.warehouse-dropmenu').forEach((x) => {
				x.classList.remove('smallsort');
			});
		}
	}, [activity, sortActive]);
	function clickVirtualWrapper () {
		setOpenMenu(false);
		setPodlozhka(false);
		setHideMenu(false);
		if(setFlagSwitchMenu)setFlagSwitchMenu(false);
		if(setSwitchMenu)setSwitchMenu(false);
		setVirtualClick(false);

		// warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'auto';
		if((objProduct.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
			warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
		}else {
			warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
		}
		warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
		warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
		// document.querySelector('.first-tab-body').classList.remove('hoverOff');
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
		if(setFlagSwitchMenu) document.querySelector('.width21px').style.maxWidth = '51px';
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
		<div
			style={adaptive ? { width: 22, transition: 'width 0.3s', padding: '0 3px' } : zIndex ? { zIndex: 1 } : adaptiveTelNum ? {minWidth: 22, width:22, transition: 'min-width 0.3s', paddingRight: '3px'} : {}}
			onMouseEnter={menuOn}
			onMouseLeave={menuOff}
			className={`warehouse-dropmenu ${
				arrowToggle ||
				activity ||
				(refStatusText.current?.innerHTML !== '' && adaptive) || (refTelOperator.current?.innerHTML !== '' && adaptiveTelNum) ||
				(width21px === true && !switchMenu) || !hideArrow && !podlozhka
					? 'hide-arrow'
					: ''
			} ${adaptive || adaptiveTelNum ? 'adaptive' : ''} ${hideMenu && !openMenu ? 'hide-menu': ""}`}
			ref={warehouse}
		>
			{inputOn && (
				<>
					<input
						ref={ref}
						type="text"
						style={{ color: 'rgba(0, 0, 0, 0.65)' }}
						value={value}
						onChange={changeInput}
					/>
					{openMenu ? (
						<div onMouseEnter={tooltipOn} onMouseLeave={tooltipOff} className="countBlock">
							(<span>{obj.filter((x) => x.attribute !== 'all').length.toLocaleString('ru-RU', {
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,})}</span>/
							<span>{obj.filter((x) => x.attribute !== 'all' && x.select).length}</span>)
						</div>
					) : (
						''
					)}
				</>
			)}{type === 'status' && (
				<>
					<div ref={refStatusText} className="status-result">
						{(obj.filter((x) => x.select === true).length > 1)
							? translator.getTranslation('btnFiltr', 'filtr')
							: obj.filter((x) => x.select === true)[0].attribute === 'all' || (labelForWidth && !switchMenu)
							? ''
							: obj.filter((x) => x.select === true)[0].attribute}

						{labelForWidth && !switchMenu ? <LabelOn /> : ''}
					</div>
				</>
			)}
			 {(type === 'country' || type === 'currency') && (
				<>
					<div className="text-result">
						{obj.filter((x) => x.select === true).length > 1 ? (
							translator.getTranslation('btnFiltr', 'filtr')
						) : obj.filter((x) => x.select === true)[0].attribute.includes('all') ? (
							''
						) : (
							<span className={type === 'country' ? 'flags' : ''} style={{ paddingLeft: 10 }}>
								{obj.filter((x) => x.select === true)[0].attribute}
							</span>
						)}
					</div>
				</>
			)}
			 {(type === 'telOperator') && (
				<>
					<div ref={refTelOperator} className="text-operator-result">
						{obj.filter((x) => x.select === true).length > 1 ? (
							translator.getTranslation('btnFiltr', 'filtr')
						) : obj.filter((x) => x.select === true)[0].attribute.includes('all') ? (
							''
						) : (
							<span className={type === 'telOperator' ? obj.filter((x) => x.select === true)[0].attribute + ' icons' : ''} style={{ paddingLeft: 10 }}>
							</span>
						)}
					</div>
				</>
			)}
			<div
				onMouseEnter={tooltipOn}
				onMouseLeave={tooltipOff}
				className={`sortBtn ${
					arrowToggle || activity || (arrowToggle && activity) || (width21px && !switchMenu)
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
			<span className="underline" style={adaptive && {left:'3px', width: 'calc(100% - 6px)' } || adaptiveTelNum && { width: 'calc(100% - 3px)' }}></span>
			{(type === 'name' || type === 'attribute' ||  type ==='company' || type ==='contact') && (
				<div
					className={openMenu ? `dropmenu ${adaptive ? 'toggleAdaptive' : 'toggle'}` : 'dropmenu'}
				>
					<SimpleBar
						style={{ height: 90, overflowX: 'hidden' }}
						autoHide={false}
						scrollbarMinSize={20}
					>
						{({ scrollableNodeRef, contentNodeRef }) => {
							return (
								<List
									height={90}
									itemCount={obj.length}
									itemSize={18}
									className="scrollOff"
									innerRef={contentNodeRef}
									outerRef={scrollableNodeRef}
								>
									{({ index, style }) =>
										openMenu && (
											<div
												onMouseEnter={tooltipOn}
												onMouseLeave={tooltipOff}
												className={obj[index].select ? 'select-btn infinity-list' : 'infinity-list'}
												onClick={(e) => infinityClick(index, e)}
												key={index}
												style={style}
												dangerouslySetInnerHTML={{
													__html: searchLine(
														translator.getTranslation('btnAll', obj[index]?.attribute) ??
															obj[index]?.attribute,
														value
													),
												}}
											></div>
										)
									}
								</List>
							);
						}}
					</SimpleBar>
				</div>)
 			} 
			{(type === 'country'  || type === 'status' || type === 'currency') && (
				<div
					className={openMenu ? `dropmenu ${adaptive || adaptiveTelNum ? 'toggleAdaptive' : 'toggle'}` : 'dropmenu'}
					style={adaptive && {width: 'calc(100% - 6px)'} || adaptiveTelNum && { width: 'calc(100% - 3px)' }}
				>
					<SimpleBar
						style={{ height: 90 }}
						autoHide={false}
						forceVisible="x"
						scrollbarMinSize={20}
					>
							{openMenu &&
							obj.map((x, index) => (
								<div
									key={index}
									onMouseEnter={index === 0 ? null: tooltipOn}
									onMouseLeave={index === 0 ? null: tooltipOff}
									className={x.select ? 'select-btn list' : 'list'}
									onClick={(e) => clickList(x.id, e)}
									style={type === 'status' ? { overflow: 'visible' } : {}}
								>
									<span
										className={
											index !== 0
												? `${type === 'country' ? 'flags' : type === 'status' ? 'status' : ''}`
												: ''
										}
									>
										{translator.getTranslation('btnAll', x.attribute) ?? x.attribute}
									</span>
								</div>
							))}
					</SimpleBar>
					{/* <ScrollBar 		
						vertical={true}
						height={90} 
						parentClass='warehouse-dropdown' 
						dropdown={true}
						hideBar={false}
					>
						{openMenu &&
							obj.map((x, index) => (
								<div
									key={index}
									onMouseEnter={index === 0 ? null: tooltipOn}
									onMouseLeave={index === 0 ? null: tooltipOff}
									className={x.select ? 'select-btn list' : 'list'}
									onClick={(e) => clickList(x.id, e)}
									style={type === 'status' ? { overflow: 'visible' } : {}}
								>
									<span
										className={
											index !== 0
												? `${type === 'country' ? 'flags' : type === 'status' ? 'status' : ''}`
												: ''
										}
									>
										{translator.getTranslation('btnAll', x.attribute) ?? x.attribute}
									</span>
								</div>
							))}
					</ScrollBar> */}
				</div>
			)}
			{(type === 'telOperator') && (
				<div
					className={openMenu ? `dropmenu ${adaptive || adaptiveTelNum ? 'toggleAdaptive' : 'toggle'}` : 'dropmenu'}
					style={adaptive && {width: 'calc(100% - 6px)'} || adaptiveTelNum && { width: 'calc(100% - 3px)' }}
				>
					<SimpleBar
						style={{ height: 90 }}
						autoHide={false}
						forceVisible="x"
					>
						{openMenu &&
							obj.map((x, index) => (
								<div
									key={index}
									onMouseEnter={index === 0 ? null: tooltipOn}
									onMouseLeave={index === 0 ? null: tooltipOff}
									className={x.select ? 'select-btn list' : 'list'}
									onClick={(e) => clickList(x.id, e)}
								>
									<span
										className={
											index !== 0
												? `${type === 'telOperator' && x.attribute + ' icons'}`
												: ''
										}
									>
										{index === 0 && (translator.getTranslation('btnAll', x.attribute) ?? x.attribute)}
									</span>
								</div>
							))}
					</SimpleBar>
				</div>
			)}
		</div>
	);
};

export default WarehouseDropMenu;
