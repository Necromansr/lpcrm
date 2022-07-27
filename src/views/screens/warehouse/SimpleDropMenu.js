import React, { useState, useEffect, useRef } from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import InputDropBtn from './InputDropBtn';
const SimpleDropMenu = ({cena, setCena,setListenChangeSuppliers, listenChangeSuppliers, addPrice, data, setData, translator,setFlagForZakupka,flagForZakupka }) => {

    const [openMenu, setOpenMenu] = useState(false);
    // const [result, setResult] = useState('');
    // const [flag, setFlag] = useState(false);
    const [firstOpenClick, setFirstOpenClick] = useState(false);
    useEffect(() => {
        if (addPrice) {
            setOpenMenu(true);
            // setTimeout(() => {

            //     refInput.current.focus();
            // }, 200);
        }
    }, [])
    const refDropmenu = useRef();
    function onClick(e) {
        setInput('');
        setFirstOpenClick(true);
        setOpenMenu(true);
        refDropmenu.current.closest('.cena').querySelector('.save-btn').classList.add('hide');
        refDropmenu.current.querySelector('.simplebar-content-wrapper')?.scrollTo({
            top: 0,
        });
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
    function tooltipOn(e) {
        const tooltipBlock = document.getElementById('tooltipBtn');
        let posElement = e.currentTarget.getBoundingClientRect();
        tooltipBlock.style.fontSize = '10px';
        if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
            tooltipBlock.innerHTML = searchLine(e.target.innerText, input);
            tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
            tooltipBlock.style.top = posElement.y + 'px';
            tooltipBlock.style.animation = 'delay-btn 0.3s forwards';

        } else {
            if (e.currentTarget.className === 'count') {
                tooltipBlock.innerHTML = `${translator.getTranslation(
                    'tooltipCount',
                    'element',
                    e.currentTarget.innerText.toLocaleString('ru-RU', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    }).replace('(','').replace(')','')
                )}`;

                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 25 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
            }

        }
    }
    function tooltipOff() {
        document.getElementById('tooltipBtn').style.animation = '';
    }
    function clicklist(i, e) {
        e.stopPropagation();
        let obj = data.map((x, ind) => {
            if (ind === i) {
                // setResult(x.country)
                // data[index].country = x.country;
                // setData([...data]);
                return { ...x, select: true };
            } else {
                return { ...x, select: false }
            };
        });
     
        setOpenMenu(false);
        setData(obj);
        // if(cena !== ''){
          
        // }else {
            
        // }
        warehouseMenu.current.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
        e.target.closest('.cena').querySelector('.memoryCena').classList.remove('hide');

        e.target.closest('.cena').querySelector('.save-btn').classList.remove('hide');
        e.target.closest('.cena').querySelector('.cenaInput').style.zIndex = 10001;
        e.target.closest('.cena').querySelector('.cenaInput').nextSibling.style.width = '100%';
        if(cena !== '' || cena !=='0.00') {
         
            e.target.closest('.cena').querySelector('.cenaInput').focus();
        } else {

            e.target.closest('.cena').querySelector('.cenaInput').focus();
            setCena('');
        }
   

        setListenChangeSuppliers(data.filter(x => x.select)[0]?.company);
        setFlagForZakupka(true);
    }
    // const [hidearrow, sethidearrow] = useState(false);
    const [input, setInput] = useState('');
    const refInput = useRef();
    // const [suppliersInput, setSuppliersInput] = useState('');
    // function addItem(e) {
    //     let obj = {id:0, company: suppliersInput, select: true};
    //     let newdata = data.map(x => ({...x, select:false , id: x.id + 1}));
    //     let arr = [obj, ...newdata];
    //     setSuppliersInput('');
    //     setData([...arr]);
    //     setFlag(false);
    //     setOpenMenu(false);
    //     setListenChangeSuppliers(data.filter(x => x.select)[0]?.company);
    //     // e.target.closest('.cena').querySelector('.cenaInput').focus();
    //     refDropmenu.current.closest('.cena').querySelector('.memoryCena').classList.remove('hide');
    //     // e.target.closest('.cena').querySelector('.cenaInput').nextSibling.style.width = '100%';
    //     setFlagForZakupka(true);
    //     // setVirtualPodlozhka(false);

    // }
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        if (flag) {
            refDropmenu.current.querySelector('.simplebar-content-wrapper').style.overflow = 'hidden';
            refDropmenu.current.querySelector('.simplebar-track.simplebar-vertical').style.cssText = `
                opacity: 0; transition: opacity 0.2s;
            `;
        } else {
            refDropmenu.current.querySelector('.simplebar-content-wrapper').style.overflow = 'hidden scroll';
            refDropmenu.current.querySelector('.simplebar-track.simplebar-vertical').style.cssText = `
                opacity: 1; transition: opacity 0.2s;
            `;
        }
    }, [flag])
    // const [vitrualPodlozhka,setVirtualPodlozhka] = useState(false);
    const [vitrualClick,setVirtualClick] = useState(false);
    // useEffect(()=> {
    //     if(!vitrualPodlozhka) {
    //         // addItem();
    //     }
    // },[vitrualPodlozhka])
    const warehouseMenu = useRef();
    function handle(e) {
        if (warehouseMenu.current && !warehouseMenu.current.contains(e.target)) {
          setOpenMenu(false);
          warehouseMenu.current.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
          warehouseMenu.current.closest('.cena').querySelector('.save-btn').classList.remove('hide');
          warehouseMenu.current.closest('.cena').querySelector('.memoryCena').classList.remove('hide');
        //   addItem();
        }
      }
      useEffect(() => {
        if(firstOpenClick){
            document.addEventListener("click", handle, true);
        }
        // console.log('pidar')
        return () => {
          document.removeEventListener("click", handle, true);
        };
      }, [firstOpenClick]);
    // console.log(data)
    return (
        <div className={`warehouse-dropmenu hide-arrow`}
            // style={{ height: 18, lineHeight: '18px', zIndex: `${openMenu ? '3' : '0'}` }}
            ref={warehouseMenu}
            // onMouseEnter={() => sethidearrow(true)}
            // onMouseLeave={() => sethidearrow(false)}
            style={{cursor: 'default'}}
            >

            <div onClick={(e) => { onClick(); e.stopPropagation() }} className={'text-company'} style={{ height: 25, lineHeight: '25px', textAlign: 'left' }}>
                {data?.filter(x => x.select)[0]?.company}
            </div>
            {/* <div className='underline' style={{zIndex: 0}}></div> */}
            <div className={`${openMenu ? 'input-wrap toggle' : 'input-wrap'}`}>
                <input onMouseEnter={e => e.target.focus()} onMouseLeave={e => e.target.blur()} ref={refInput} className='input-search' value={input} onChange={e => {
                    if (e.target.value.length === 1) {
                        e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
                    }
                    e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = 'none';
                    warehouseMenu.current.closest('.cena').querySelector('.memoryCena').classList.add('hide');
                    refDropmenu.current.closest('.cena').querySelector('.save-btn').classList.add('hide');
                    setInput(e.target.value);
                }} disabled={flag ? true : false} />
                <div className='count'
                    onMouseEnter={tooltipOn}
                    onMouseLeave={tooltipOff}>({data?.filter((user) => user.company.toLowerCase().includes(input.toLowerCase())).length})
                </div>
            </div>
            {/* <div></div> */}
            <div ref={refDropmenu} className={`${openMenu ? 'dropmenu toggle2' : 'dropmenu'}`}>
                <SimpleBar
                    style={{ height: 90 }}
                    autoHide={false}

                    scrollbarMinSize={20}

                >   
             
                    
                    <><div className='list' style={{ zIndex: 10 }}>
                        {/* <input
                            onMouseEnter={e => e.target.focus()}
                            onMouseLeave={e => {
                                if (!flag) e.target.blur()
                            }}
                            placeholder='Создать поставщика'
                            style={{  height: 18, lineHeight: '18px' }}
                            value={suppliersInput}
                            onChange={e => {
                                if (e.target.value.length === 1) {
                                    e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
                                }
                                if (e.target.value.length >= 1) {
                                    setFlag(true);
                                    refDropmenu.current.closest('.cena').querySelector('.memoryCena').classList.add('hide');
                                } else {
                                    setFlag(false);
                                    refDropmenu.current.closest('.cena').querySelector('.memoryCena').classList.remove('hide');
                                }
                                setVirtualPodlozhka(true);
                                setInput('');
                                setSuppliersInput(e.target.value)
                            }} onKeyDown={e=> {
                                if(e.key === 'Enter'){
                                    addItem(e);
                                }
                            }}
                            /> */}
                           <InputDropBtn 
                            // addItem={addItem}
                            setOpenMenu={setOpenMenu}
                            setInput={setInput}
                            setFlagForZakupka={setFlagForZakupka}
                            flag={flag}
                            setListenChangeSuppliers={setListenChangeSuppliers}
                            setFlag={setFlag}
                            data={data}
                            setData={setData}
                            setVirtualClick={setVirtualClick}
                            vitrualClick={vitrualClick}
                            setCena={setCena}
                            cena={cena}
                            />
                           
                        {/* <button>+</button> */}
                    </div>
                    {/* <div onClick={e => {e.stopPropagation();addItem(e)}} className='podlozhka-drop' style={{ display: `${flag ? 'block' : 'none'}`, zIndex: 9, position: 'absolute', top: 0, left: 0, height: '100%', width: '100%',cursor:'default' }}></div> */}
                    {data?.filter((user) => user.company.toLowerCase().includes(input.toLowerCase())).map((x, i) =>
                        <div
                            className={`list ${x.select && 'select-btn'}`}
                            onClick={(e) => clicklist(x.id, e)}
                            key={i}
                            onMouseEnter={tooltipOn}
                            onMouseLeave={tooltipOff}
                            style={{opacity:`${flag ? 0.4 : ''}`, pointerEvents: `${flag ? 'none': ''}`}}
                            // style={{color: 'rgba(0, 0, 0, 0.7)'}}
                            dangerouslySetInnerHTML={{
                                __html: searchLine(
                                    x.company,
                                    input
                                ),
                            }}
                        >
                            {/* {x.company} */}
                        </div>)
                    }</>
                    
                    
                    
                </SimpleBar>
            </div>
        </div>
    )
}

export default SimpleDropMenu;
