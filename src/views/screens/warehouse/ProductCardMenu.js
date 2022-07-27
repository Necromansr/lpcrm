import React, { useState, useEffect, useRef } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './ProductMenu.scss';
let plusminus;
const ProductCardMenu = ({
	openCardMenu,
	typeData,
	setOpenCardMenu,
	// inputRef,
	dataCurrent,
	searchLine,
	inputOn,
	data,
	setData,
	setPodlozhka,
	translator,
	multiselect,
	podlozhka,
	createAttr,
	attributeData,
	setAttributeData,
	arr,
	setArr,
	// setSortedArr,
	// sortedArr,
	indexTr,
	carouselDrop,
	setCarouselDrop,
	onClick
}) => {
	const [value, setValue] = useState('');
	const inputRef = useRef();
	const productMenu = useRef();
	// if (type === 'country') {

	// }
	function searchLine(text, value) {
		if (value !== '') {
			let re = new RegExp(value, 'gui');
			let text_pr = text?.replace(re, (x) => '<span class="findUnderline">' + x + '</span>');

			return text_pr;
		} else {
			return text;
		}
	}
	function tooltipOn(e, html) {
		let posElement = e.currentTarget.getBoundingClientRect();
		const tooltipBlock = document.getElementById('tooltipBtn');
		tooltipBlock.style.fontSize = '12px';
		if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
			tooltipBlock.innerHTML = searchLine(e.target.innerText, value);
			tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 10 + 'px';
			tooltipBlock.style.top = posElement.y + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		}
		if (e.currentTarget.className === 'count') {
			tooltipBlock.innerHTML = `${translator.getTranslation(
				'tooltipCount',
				'element',
				e.currentTarget.innerText.toLocaleString('ru-RU', {
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
				}).replace('(', '').replace(')', '')
			)}`;
			tooltipBlock.style.left = posElement.x + 'px';
			tooltipBlock.style.top = posElement.y + 25 + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		}
		if (e.currentTarget.className === 'countBlock') {
			tooltipBlock.innerHTML = `${translator.getTranslation(
				'tooltipCount',
				'multiElement',
				e.currentTarget.children[0].innerText.toLocaleString('ru-RU', {
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
				}),
				e.currentTarget.children[1].innerText.toLocaleString('ru-RU', {
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
				})
			)}`;
			tooltipBlock.style.left = posElement.x + 'px';
			tooltipBlock.style.top = posElement.y + 25 + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		}
	}

	function tooltipOff() {
		clearTimeout(plusminus);
		document.getElementById('tooltipBtn').style.animation = '';
	}
	useEffect(() => {
		if (openCardMenu && inputRef.current) {
			setValue('');
			productMenu.current.querySelector('.simplebar-content-wrapper')?.scrollTo({
				top: 0,
			});
			setTimeout(() => {
				inputRef.current.focus();
			}, 300);
		}
	}, [openCardMenu])

	// useEffect(()=> {
	// 	if(carouselDrop.carousel){
	// 		setOpenCardMenu(true);
	// 	}
	// },[carouselDrop.carousel])
	function selectFunc(id) {
		if(typeData !== 'attribute') {
			let newarr = data.map((x) => {
				if (!multiselect) {
					if (x.id === id) {
						setOpenCardMenu(false);
						setPodlozhka(false);
						return { ...x, select: true };
					} else return { ...x, select: false };
				} else {
					if (x.id === id){
						// if(typeData ==='attribute'){
						// 	if(!x.select){
						// 		setSortedArr([...sortedArr, { ...x, select: true }])
						// 	} else {
						// 		setSortedArr(prev => prev.filter(x => x.id !== id))
						// 	}
						// }
						return { ...x, select: !x.select };
					} else {
						 return { ...x };
					}
				}
	
			});
			setData({ ...dataCurrent, [typeData]: [...newarr] });
		} else {
			let newarr = data.map((x) => {
					if (x.id === id){
						// if(typeData ==='attribute'){
							if(!x.select){
								console.log(attributeData.sort)
								attributeData.sort[indexTr] = [...attributeData.sort[indexTr] , { ...x, select: true }]
								// setSortedArr([...sortedArr, { ...x, select: true }])
								setAttributeData({...attributeData})
							} else {
								console.log(attributeData.sort)
								attributeData.sort[indexTr] = attributeData.sort[indexTr].filter(x => x.id !== id)
								setAttributeData({...attributeData})
								// setSortedArr(prev => prev.filter(x => x.id !== id))
							}
						// }
						return { ...x, select: !x.select };
					} else {
						 return { ...x };
					}
			});
			attributeData.array[indexTr] = [...newarr];
			setAttributeData({...attributeData});
		}
		
	}
	const [attributeInput,setAttributeInput]= useState('');
	// console.log(data)
	// console.log('sortedArr')
	function addItem(e) {
		if(typeData !== 'attribute'){
			let obj = {id:0, name: attributeInput, select: true,idNumber:232};
			// sortedArr = sortedArr.map(x => ({...x, id: x.id + 1}));
			// let obj2 = {id: 0, name: attributeInput, select: true,idNumber:232};
			let newdata = data.map(x => ({...x, id: x.id + 1}));
			let arr1 = [obj, ...newdata];
			// setSuppliersInput('');
			// setData([...arr]);
			// setSortedArr([...sortedArr, obj2])
			setData({ ...dataCurrent, [typeData]: [...arr1] });
			// setFlag(false);
			// setOpenMenu(false);
			setValue('');
			setAttributeInput('');
			setOpenCardMenu(false);
			setPodlozhka(false);
			setFlag(false);
		}
        
        // setListenChangeSuppliers(data.filter(x => x.select)[0]?.company);
    
        // setCena('');
        // ref.current.closest('.cena').querySelector('.cenaInput').focus();
        // ref.current.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
        // ref.current.closest('.cena').querySelector('.cenaInput').zIndex = 10001;
        // ref.current.closest('.cena').querySelector('.memoryCena').classList.remove('hide');
        // ref.current.closest('.cena').querySelector('.save-btn').classList.remove('hide');
        // ref.current.closest('.cena').querySelector('.cenaInput').nextSibling.style.width = '100%';
        // if(cena !== '' || cena !=='0.00') {
         
        //     e.target.closest('.cena').querySelector('.cenaInput').focus();
        // } else {

        //     e.target.closest('.cena').querySelector('.cenaInput').focus();
        //     setCena('');
        // }
        // setVirtualClick(false);
        // setFlagForZakupka(true);
        // setVirtualPodlozhka(false);

    }
	const [flag , setFlag] = useState(false);
	useEffect(() => {
        if (flag) {
            productMenu.current.querySelector('.simplebar-content-wrapper').style.overflow = 'hidden';
            productMenu.current.querySelector('.simplebar-track.simplebar-vertical').style.cssText = `
                opacity: 0; transition: opacity 0.2s;
            `;
        } else {
            productMenu.current.querySelector('.simplebar-content-wrapper').style.overflow = 'hidden scroll';
            productMenu.current.querySelector('.simplebar-track.simplebar-vertical').style.cssText = `
                opacity: 1; transition: opacity 0.2s;
            `;
        }
    }, [flag])
	// useEffect(()=> {
	// 	if(!podlozhka){
	// 		// setFlag(false);
	// 		// if(carouselDrop.carousel && carouselDrop.menu === 1 ){
	// 		// 	setTimeout(() => {
	// 		// 		const targetBlock = document.querySelectorAll('.product-card .first-tab-body .weight')[document.querySelectorAll('.product-card .first-tab-body .weight').length -1]
	// 		// 		targetBlock.focus();
	// 		// 		// onClick('attribute', targetBlock);
	// 		// 	}, 70);
	// 		// }
	
	// 		// setPodlozhka(true)
	// 		// setOpenCardMenu(false);
	// 		// setPodlozhka(false);
			
	// 	}
	// },[podlozhka])

	const refInput = useRef();
	
	function handle(e) {
        if (refInput.current && !refInput.current.contains(e.target)) {
            addItem(e);
        }   
    }
	function handle2(e) {
        if (productMenu.current && !productMenu.current.contains(e.target)) {
            // addItem(e);
			// console.log('pidar');
			setFlag(false);
			setOpenCardMenu(false);
			setPodlozhka(false);
			let selectOrNot = attributeData.array[indexTr]?.some(x => x.select);
			// if(carouselDrop.carousel){
			// 	if(selectOrNot) {

			// 	}
			// }
			// if(carouselDrop.carousel && selectOrNot){
			// 	setTimeout(() => {	
			// 		const targetBlock = document.querySelectorAll('.product-card .first-tab-body .weight input')[indexTr]
			// 		targetBlock.focus();
			// 		setPodlozhka(true);
			// 	}, 100);
			// }
			// if(!selectOrNot)
			// carouselDrop.carousel = false;
			// setCarouselDrop({...carouselDrop})
			// console.log(selectOrNot)
			if (selectOrNot && carouselDrop === true) {
				// setPodlozhka(false);
				setTimeout(() => {	
					// setCarouselDrop({...carouselDrop, trigger: true})
					const targetBlock = document.querySelectorAll('.product-card .first-tab-body .weight input')[indexTr]
					// const weight = document.querySelectorAll('.product-card .first-tab-body .weight')[indexTr]
					const poloska = document.querySelectorAll('.product-card .first-tab-body .weight .poloska')[indexTr]
					targetBlock.click();
					targetBlock.focus();
					// weight.style.zIndex = 4;
					poloska.style.width = 'calc(100% - 22px)';
					// setPodlozhka(true);
				}, 100);
			console.log('vibrani','carousel true')


			} else if (carouselDrop === false){
				// if(!carouselDrop.carousel){

				// }
				// carouselDrop.carousel = false;
				// setCarouselDrop({...carouselDrop})
				// let obj = JSON.parse(JSON.stringify(attributeData));
                // obj.sort.splice(indexTr, 1);
                // obj.array.splice(indexTr, 1);
                // setAttributeData(obj)
                // arr = arr.filter((x, i) => i !== indexTr)
                // setArr([...arr])
				// setCarouselDrop({...carouselDrop, carousel: false})
				// setPodlozhka(false);
				console.log('carousel false')

			} else if (carouselDrop === true && !selectOrNot ){
				let obj = JSON.parse(JSON.stringify(attributeData));
				setCarouselDrop(false)
                obj.sort.splice(indexTr, 1);
                obj.array.splice(indexTr, 1);
                setAttributeData(obj)
                arr = arr.filter((x, i) => i !== indexTr)
                setArr([...arr])
				// setPodlozhka(false);
				console.log('carousel true','nevibrani')
			}
        }   
    }
    useEffect(() => {
        if(flag){
            document.addEventListener("click", handle, true);
        }
		if(openCardMenu){
			document.addEventListener("click", handle2, true);
		}
        return () => {
            document.removeEventListener("click", handle, true);
            document.removeEventListener("click", handle2, true);
        };
    }, [flag,attributeInput,openCardMenu]);
	return (
		<div
			className="productMenu"
			style={openCardMenu ? { visibility: 'visible' } : { visibility: 'hidden' }}
			ref={productMenu}
		>
			<div style={flag ? {pointerEvents: 'none'}: {}} className={inputOn && openCardMenu ? 'btn-menu-input toggle' : 'btn-menu-input'}>
				<input
					onMouseEnter={e => e.target.focus()}
					onMouseLeave={e => e.target.blur()}
					value={value}
					onChange={(e) => {
						if (e.target.value.length >= 1) {
							e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
						}
						setValue(e.target.value)
					}}
					ref={inputRef}
					type="text"
				/>
				{multiselect ? (
					<div onMouseEnter={tooltipOn} onMouseLeave={tooltipOff} className="countBlock">
						(<span>{data?.filter((x) => x.name.toLowerCase().includes(value.toLowerCase()))?.length.toLocaleString('ru-RU', {
							minimumFractionDigits: 0,
							maximumFractionDigits: 0,
						})}</span>/
						<span>{data?.filter((x) => x.select).length}</span>)
					</div>
				) :
					(<div
						className="count"
						onMouseEnter={tooltipOn}
						onMouseLeave={tooltipOff}
					>
						(
						{data?.length > 0 &&
							data?.filter((x) =>
								x.name.toLowerCase().includes(value.toLowerCase())
							)?.length}
						)
					</div>)
				}

			</div>

			<SimpleBar
				className={openCardMenu ? 'block-menu block-menu-toggle' : 'block-menu'}
				autoHide={false}
			>	
				{createAttr ? <input 
					ref={refInput}
					onMouseEnter={e => e.target.focus()}
					onMouseLeave={e => {
						if (!flag) e.target.blur()
					}}
					placeholder='Создать аттрибут'
					// style={{  height: 18, lineHeight: '18px' }}
					value={attributeInput}
					onChange={e => {
						if (e.target.value.length === 1) {
							e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
						}
						if (e.target.value.length >= 1) {
							setFlag(true);
							// setVirtualClick(true);
							// ref.current.closest('.cena').querySelector('.memoryCena').classList.add('hide');
							// ref.current.closest('.cena').querySelector('.save-btn').classList.add('hide');
							// ref.current.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = 'none';

						} else {
							setFlag(false);
							// setVirtualClick(false);
							// ref.current.closest('.cena').querySelector('.memoryCena').classList.remove('hide');
							// ref.current.closest('.cena').querySelector('.save-btn').classList.remove('hide');
							// ref.current.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';

						}
						// setVirtualClick(true);
						// setInput('');
						setAttributeInput(e.target.value)
				
					}} onKeyDown={e=> {
						if(e.key === 'Enter'){
							addItem(e);
				

						}
					}}
						// {...props}
				/> : ''}
				{data
					?.filter((x) => x.name.toLowerCase().includes(value.toLowerCase()))
					.map((x, index) => (
						<li
							key={x.id}
							// onMouseEnter={(e) => props.toolTipOn(e, e.target.innerText)}
							// onMouseLeave={props.toolTipOff}
							onClick={(e) => selectFunc(x.id)}
							className={x.select ? 'menu-list menu-select-filter' : 'menu-list'}
							style={flag ?{opacity:0.4,pointerEvents:'none' }: {}}

						>
							{typeData === 'flags' ? <><span className={'flags'}>{x.name}</span><div style={{ marginLeft: '5px' }}>{translator?.getTranslation(`tooltipCountries`, x.secondName)}</div></> : ''}
							{typeData === 'currency' ? <><span className=''>{x.name}</span><div style={{ marginLeft: '5px' }}>{translator?.getTranslation(`tooltipCurrency`, x.secondName)}</div></> : ''}
							{typeData === 'vidPlatformi' ? <><img src={x.name} alt={x.secondName} /><div style={{ marginLeft: '5px' }}>{translator?.getTranslation(`tooltipPlatform`, x.secondName)}</div></> : ''}
							{typeData === 'delivery' ? 	<><span className={x.name}></span><div style={{ marginLeft: '5px' }}>{translator?.getTranslation(`tooltipDelivery`, x.secondName)}</div></> : ''}
							{typeData === 'otdel' || typeData === 'tip' || typeData === 'category' || typeData === 'attribute' || typeData === 'description' ? 	<><span 
								dangerouslySetInnerHTML={{
									__html: searchLine(x.name, value),
								}}
								onMouseEnter={tooltipOn}
								onMouseLeave={tooltipOff}
							></span></> : ''}
						</li>
					))}
			</SimpleBar>
		</div>
	);
};

export default ProductCardMenu;
