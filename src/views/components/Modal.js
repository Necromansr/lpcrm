import './modal.scss';
import { Fragment, useState, useEffect, useRef, memo } from 'react';
import { Dropdown, DropdownDelivery, DropdownPay, DropdownStatus } from './Dropdown';
import { DropdownCountry } from './Dropdown';
import * as hints from '../../until/hints'
import { wifi } from '../../until/images'
import { parserText } from '../../until/index'
import { CommentBlock, EmailInput, PhoneInput, PrroInput, PurchaserInput, AdditionalInput } from './Input';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { json } from './regions';
let timer = null;
let arr = [
    { key: 0, text: 'Розничный магазин', select: true },
    { key: 1, text: 'Розничный магазин Розничный магазин', select: false },
    { key: 2, text: 'Розничный магазин', select: false },
    { key: 3, text: 'Отдел ОАЭ', select: false },
    { key: 4, text: 'Black slave', select: false },
    { key: 5, text: 'Отдел ОАЭ', select: false },
    { key: 6, text: 'Оптовый отдел', select: false },
]

let countries = [
    { key: '1', text: '🇺🇦', className: 'flags', title: hints.ukraine, select: true },
    { key: '2', text: '🇷🇺', className: 'flags', title: hints.russia, select: false },
    { key: '3', text: '🇦🇱', className: 'flags', title: hints.alb, select: false },
    { key: '4', text: '🇦🇱', className: 'flags', title: hints.alb, select: false },
    { key: '5', text: '🇦🇱', className: 'flags', title: 'ffffffffffffffffffffffffffffffffffffffffffffffffffff', select: false },
    { key: '6', text: '🇦🇱', className: 'flags', title: hints.alb, select: false }
]

const pay = [
    { key: '1', icon: 'icon-Vector-17 icons', title: hints.nalozhplatezh, select: true },
    { key: '2', icon: 'icon-Vector-15 icons', title: hints.predoplata, select: false },
    { key: '3', icon: 'icon-Vector-19 icons', title: hints.acceptPay, select: false },
    { key: '4', icon: 'icon-Vector-16 icons', title: hints.decline, select: false },
    { key: '5', icon: 'icon-Vector-18 icons', title: hints.trade, select: false },
]


let regions = json.areas.map(x => x?.areas.map(y => y.name)).flat();
let idxs = json.areas.map(x => x?.areas.map(y => y.key)).flat();
let vex = json.areas.map(x => x.name).flat();
let contry = ['Украина', 'Россия', 'Египет'];


let arrayRow = [{
    title: 'Видеорегистратор DVR-mini *1244*',
    name: 'Голубой',
    price: '1234.00',
    id: '2324',
    number: 2,
}, {
    title: 'Видеорегистратор DVR-mini *1244*',
    name: 'Голубой',
    price: '1234.00',
    id: '2324',
    number: 2,
}, {
    title: 'Видеорегистратор DVR-mini *1244*',
    name: 'Голубой',
    price: '1234.00',
    id: '2324',
    number: 2,
}, {
    title: 'Видеорегистратор DVR-mini *1244*',
    name: 'Голубой',
    price: '1234.00',
    id: '2324',
    number: 2,
}, {
    title: 'Видеорегистратор DVR-mini *1244*',
    name: 'Голубой',
    price: '1234.00',
    id: '2324',
    number: 2,
}, {
    title: 'Видеорегистратор DVR-mini *1244* 55555555555555555555',
    name: 'Голубой gtgtr grtg rg gt',
    price: '1234.00',
    id: '2324',
    number: 2,
}, {
    title: 'Видеорегистратор DVR-mini *1244*',
    name: 'Голубой',
    price: '1234.00',
    id: '2324',
    number: 2,
}, {
    title: 'Видеорегистратор DVR-mini *1244*',
    name: 'Голубой',
    price: '1234.00',
    id: '2324',
    number: 2,
}, {
    title: 'Видеорегистратор DVR-mini *1244*',
    name: 'Голубой',
    price: '1234.00',
    id: '2324',
    number: 2,
}, {
    title: 'Видеорегистратор DVR-mini *1244*',
    name: 'Голубой',
    price: '1234.00',
    id: '2324',
    number: 2,
}];


const PrePaymentInput = ({ prePaymentValue, prePaymentAccept, setPrePaymentAccept, setPrePaymentValue, wrapper, setWrapper, recalc }) => {
    const [value, setValue] = useState(prePaymentValue);
    const [change, setChange] = useState(false);
    const [focus, setFocus] = useState(false);

    const refInput = useRef();


    useEffect(() => {
        if (!wrapper && focus) {
            refInput.current.select();
        } else if (!wrapper && !focus) {
            refInput.current.blur();
        }

        if (wrapper && change) {
            setFocus(false);
            refInput.current.focus();
        } else if (!wrapper) {
            setValue(value === 0 ? '0.00' : (+value).toFixed(2))

            setChange(false)
        }
        if (!wrapper && change) {
            setPrePaymentValue(parseFloat(value));
            setPrePaymentAccept(true);
            setChange(false)
            recalc(undefined, undefined, parseFloat(value))
        }
    }, [wrapper, prePaymentValue, focus])

    return (
        <div onMouseEnter={e => setFocus(true)}
            onMouseLeave={e => setFocus(false)}>
            <input ref={refInput} className="prepayment" type="text" style={{ width: (value.toString().length + 2) * 8 }} value={!wrapper && !change ? (value > 0 ? value * -1 : '0.00').toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.') : value} onClick={e => { setWrapper(true); setChange(true); }} onChange={e => {
                let temp = e.target.value.replace(/[^0-9.,]/g, (x) => (x = ''))
                    .replace(/,/g, (x) => '.')
                    .replace(/(\.)(?=\1)/g, (x) => '')
                    .replace(/\.(?=.*\..*)/g, (x) => '');
                setValue(temp); setChange(true); setWrapper(true);
            }} maxLength="9" onKeyUp={e => {
                if (e.keyCode === 13) {
                    console.log(value);
                    setValue(value === 0 ? '0.00' : (+value).toFixed(2))
                    setWrapper(false);
                    e.target.blur();
                }
            }} />
            <div className="prepayment-btn" style={prePaymentAccept ? { width: 25 } : {}}>
                <button className="accept-prepayment" onMouseEnter={e => {
                    timer = setTimeout(() => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerText = 'Предоплата получена';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth + posElement.width + 14 + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 25 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                    }, 300)
                }}
                    onMouseLeave={e => {
                        document.getElementById("tooltipBtn").style.animation = '';
                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        clearTimeout(timer);
                    }} onClick={e => setPrePaymentAccept(false)}>
                    <svg width="12" height="14" viewBox="-4 -4 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.86983 0.135182C8.04339 0.315423 8.04339 0.607654 7.86983 0.787896L2.98094 5.86482C2.80737 6.04506 2.52596 6.04506 2.3524 5.86482L0.130175 3.55713C-0.0433916 3.37688 -0.0433916 3.08465 0.130175 2.90441C0.303741 2.72417 0.585148 2.72417 0.758714 2.90441L2.66667 4.88575L7.24129 0.135182C7.41485 -0.0450605 7.69626 -0.0450605 7.86983 0.135182Z" fill="black" />
                    </svg>
                </button>
                <button className="decline-prepayment" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById('tooltipBtn').innerText = 'Отменить предоплату';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth + posElement.width + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 25 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                    }, 300)
                }}
                    onMouseLeave={e => {
                        document.getElementById("tooltipBtn").style.animation = '';
                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        clearTimeout(timer);
                    }} onClick={e => { setPrePaymentValue('0.00'); setValue('0.00'); setPrePaymentAccept(false); recalc(undefined, undefined, 0); }}>
                    <svg width="12" height="14" viewBox="2 3 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}


const NewRow = ({ addRow, className }) => {

    const [animation, setAnimation] = useState(false);


    useEffect(() => {
        if (addRow === true) {
            setTimeout(() => {
                let el = document.querySelector('.product-order-dropdown');
                let widthFirstBlock = className === 'product-table-scroll' ? document.querySelectorAll('.addit-product td:nth-child(2)')[0].offsetWidth + document.querySelectorAll('.addit-product td:nth-child(1)')[0].offsetWidth - 5 : document.querySelectorAll('.addit-product td:nth-child(2)')[1].offsetWidth + document.querySelectorAll('.addit-product td:nth-child(1)')[1].offsetWidth - 5;
                let widthblock = className === 'product-table-scroll' ? document.querySelector('.product-description:nth-child(3)')?.offsetWidth || 91 : (document.querySelector('.dop-product-table-tbody .product-description:nth-child(3)')?.offsetWidth ?? 95);
                el.style.top = className === 'product-table-scroll' ? document.querySelector('.product-table-scroll').offsetHeight - 52 + 'px' : document.querySelector('.product-table-scroll').offsetHeight + document.querySelector('.dop-product-table-scroll').offsetHeight - 47 + 'px';
                el.style.left = widthFirstBlock + 'px';
                el.style.width = (widthblock - 5) + 'px';
                el.style.display = 'block';
                el.style.zIndex = 3;
                document.querySelector('.product-order-search').focus();
                // document.querySelector('.product-attribute-menu').style.left = el.offsetWidth + 'px';
            }, 100);

            setTimeout(() => {
                setAnimation(true)
            }, 0);
        } else {
            let el = document.querySelector('.product-order-dropdown');
            el.style.display = 'none';
        }

    }, [addRow])

    return (
        <tr className='addit-product create-product-item' style={!addRow ? { display: 'none' } : {}}>
            <td className={animation ? 'product-description prro-check-off animationArrow' : 'product-description'}>
                <button className='check-off'>
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.86983 0.135182C8.04339 0.315423 8.04339 0.607654 7.86983 0.787896L2.98094 5.86482C2.80737 6.04506 2.52596 6.04506 2.3524 5.86482L0.130175 3.55713C-0.0433916 3.37688 -0.0433916 3.08465 0.130175 2.90441C0.303741 2.72417 0.585148 2.72417 0.758714 2.90441L2.66667 4.88575L7.24129 0.135182C7.41485 -0.0450605 7.69626 -0.0450605 7.86983 0.135182Z" fill="black" />
                    </svg>
                </button>
            </td>
            <td className={animation ? 'product-description animationArrow' : 'product-description'}></td>
            <td style={{ width: '47.8%' }} className={animation ? 'product-description animationArrow' : 'product-description'}></td>
            <td className={animation ? 'product-description animationArrow' : 'product-description'}></td>
            <td className={animation ? 'product-description animationArrow' : 'product-description'}></td>
            <td className={animation ? 'product-description animationArrow' : 'product-description'}></td>
            <td className={animation ? 'product-description animationArrow' : 'product-description'}></td>
            <td className={animation ? 'product-description animationArrow' : 'product-description'}>
                <button className="product-delete">
                    <svg width="15" height="15" viewBox="3 2 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </td>
        </tr>
    )
}

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

let InputPrice = ({ btnClickPlus, price, style, styleClick, setPrice, btnPlus, wrapper, setWrapper, addPrice, setAddPrice }) => {

    const refInput = useRef()
    const refInputAdd = useRef()

    const [focus, setFocus] = useState(false);
    const [active, setActive] = useState(false);
    const [focusAdd, setFocusAdd] = useState(false);
    const [activeAdd, setActiveAdd] = useState(false);
    const prev = usePrevious(price);
    useEffect(() => {



        if (!wrapper && focus) {
            refInput.current.select();
            refInput.current.style.zIndex = 3;
        } else if (!wrapper && !focus) {
            refInput.current.blur();
            refInput.current.style.zIndex = 0;
        }

        if (wrapper && active) {
            setFocus(false);

            refInput.current.focus();
        } else if (!wrapper) {
            setPrice((+price).toFixed(2));
            refInput.current.style.width = price.length * 7 + 'px';
            if (addPrice.length > price.length)
                refInput.current.style.width = addPrice.length * 8 + 'px';
            setActive(false)
        }

        if (btnClickPlus) {
            refInput.current.style.width = price.length * 7 + 'px';
            if (addPrice.length > price.length)
                refInput.current.style.width = addPrice.length * 8 + 'px';
        }

        if (!wrapper && focusAdd) {
            refInputAdd.current.select();
            refInputAdd.current.style.zIndex = 3;
        } else if (!wrapper && !focusAdd) {
            refInputAdd.current.blur();
            refInputAdd.current.style.zIndex = 0;
        }

        if (wrapper && activeAdd) {
            setFocusAdd(false);
            refInputAdd.current.focus();
        } else if (!wrapper) {
            setFocusAdd(false);
            setActiveAdd(false)
        }


    }, [wrapper, active, focus, price, focusAdd, activeAdd, addPrice, btnClickPlus])

    return (
        <>
            <input type="text" ref={refInput} onKeyUp={e => {
                if (e.keyCode === 13) {
                    setWrapper(false);
                    e.target.blur();
                    setPrice((+price).toFixed(2));
                    // if (price !== prev)
                    // e.target.style.width = price.length * 8 + 'px';
                }
            }} onClick={e => { setWrapper(true); setActive(true); setActiveAdd(false); }} onMouseEnter={e => setFocus(true)} onMouseLeave={e => setFocus(false)} className="product-number-format first-input" onChange={e => {
                let temp = e.target.value.replace(/[^0-9.,]/g, (x) => (x = ''))
                    .replace(/,/g, (x) => '.')
                    .replace(/(\.)(?=\1)/g, (x) => '')
                    .replace(/\.(?=.*\..*)/g, (x) => '');
                setActiveAdd(false);
                setPrice(temp); setWrapper(true); setActive(true); e.target.style.width = (price.length + 2) * 8 + 'px';
                if (addPrice.length < price.length)
                    refInput.current.style.width = price.length * 7 + 'px';
                else if (addPrice.length > price.length)
                    refInput.current.style.width = addPrice.length * 8 + 'px';
            }}
                value={wrapper && active ? price : (+price).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.')} maxLength="9"
                style={btnPlus || btnClickPlus ? btnClickPlus ? { ...style, ...styleClick } : { ...style } : {}} />
            <input ref={refInputAdd} type="text" onClick={e => { setWrapper(true); setActiveAdd(true) }}
                onKeyUp={e => {
                    if (e.keyCode === 13) {
                        setWrapper(false);
                        e.target.blur();
                    }
                }}
                onMouseEnter={e => setFocusAdd(true)}
                onMouseLeave={e => setFocusAdd(false)} className="second-input"
                value={wrapper && activeAdd ? addPrice : (+addPrice).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.')}
                onChange={e => {
                    let temp = e.target.value.replace(/[^0-9.,]/g, (x) => (x = ''))
                        .replace(/,/g, (x) => '.')
                        .replace(/(\.)(?=\1)/g, (x) => '')
                        .replace(/\.(?=.*\..*)/g, (x) => '');
                    setAddPrice(temp);
                    e.target.style.width = (addPrice.length + 2) * 8 + 'px'
                    if (addPrice.length < price.length)
                        refInput.current.style.width = price.length * 7 + 'px';
                    else if (addPrice.length > price.length)
                        refInput.current.style.width = addPrice.length * 8 + 'px';
                    setWrapper(true);
                    setActiveAdd(true);
                }} maxLength="9" style={btnClickPlus ? { background: 'transparent', height: 9 } : {}} />
        </>
    )
}


const Row = ({ setArray, index, array, row, wrapper, setWrapper, setAdditionally, recalc }) => {

    const [hover, setHover] = useState(false)
    const [checkOff, setCheckOff] = useState(true)
    const [btnPlus, setBtnPlus] = useState(false)
    const [btnClickPlus, setBtnClickPlus] = useState(false)
    const [price, setPrice] = useState(row.price || 0.00)
    const [count, setCount] = useState(row.number || 1)
    const [hoverCount, setHoverCount] = useState(false);
    const [addPrice, setAddPrice] = useState(0.00)
    let [prevPrice, setPrevPrice] = useState(row.price || 0.00);
    let [prevCount, setPrevCount] = useState(row.number || 1);
    let [prevAddPrice, setPrevAddPrice] = useState(0.00);

    let styleClick = {
        left: 0,
        height: 9,
        fontSize: 9,
        top: -5,
        width: 34.2642,
        color: 'rgba(0, 0, 0, 0.75)',
    }

    let style = {
        left: 10,
        background: 'transparent',
    }


    useEffect(() => {
        let temp = [...array];

        temp[index] = { ...temp[index], number: count };

        setArray([...temp]);

        if (!wrapper) {
            setPrevPrice(price);
            setPrevCount(count);
            setPrevAddPrice(addPrice);
        }

    }, [count, wrapper])

    return (

        <tr style={hover ? { opacity: 0.5 } : {}}>
            <td className="product-description prro-check-off" onClick={e => {
                if (checkOff && !e.target.classList.contains('active')) {
                    e.target.style.opacity = 0;
                } else {
                    e.target.style.opacity = 0.7;
                }

                // if (e.target.classList.contains('active'))


                setCheckOff(!checkOff);
                document.getElementById("tooltipBtn").style.fontSize = '12px';
                document.getElementById('tooltipBtn').innerText = checkOff ? 'Убран' : 'Добавлен';
                let posElement = e.target.getBoundingClientRect();
                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                document.getElementById("tooltipBtn").style.top = posElement.y + 24 + "px";
                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
                timer = setTimeout(() => {
                    document.getElementById("tooltipBtn").style.animation = '';
                }, 1000)
            }}>
                <button className={checkOff ? "check-off" : 'check-off active'} onMouseEnter={e => {
                    if (e.target.classList.contains('active'))
                        e.target.style.opacity = 0.4;
                    else {
                        e.target.style.opacity = 0.4;
                    }
                    timer = setTimeout(() => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerText = checkOff ? 'Убрать товар из чека' : 'Добавить товар в чек';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 25 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                    }, 300)
                }}
                    onMouseLeave={e => {
                        if (e.target.classList.contains('active'))
                            e.target.style.opacity = 0;
                        else {
                            e.target.style.opacity = 0.7;
                        }

                        document.getElementById("tooltipBtn").style.animation = '';
                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        clearTimeout(timer);
                    }}>
                    <svg style={{ pointerEvents: 'none' }} width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.86983 0.135182C8.04339 0.315423 8.04339 0.607654 7.86983 0.787896L2.98094 5.86482C2.80737 6.04506 2.52596 6.04506 2.3524 5.86482L0.130175 3.55713C-0.0433916 3.37688 -0.0433916 3.08465 0.130175 2.90441C0.303741 2.72417 0.585148 2.72417 0.758714 2.90441L2.66667 4.88575L7.24129 0.135182C7.41485 -0.0450605 7.69626 -0.0450605 7.86983 0.135182Z" fill="black" />
                    </svg>
                </button>
            </td>
            <td className="product-description id-style"><span>{row.id}</span></td>
            <td className="product-description product-style" onMouseEnter={e => {
                timer = setTimeout(() => {
                    if (e.target.firstChild.scrollWidth > e.target.firstChild.offsetWidth) {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerText = row.title;
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 26 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                    }
                }, 300)
            }}
                onMouseLeave={e => {
                    document.getElementById("tooltipBtn").style.animation = '';
                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                    clearTimeout(timer);
                }}><span style={{ pointerEvents: 'none' }}>{row.title}</span></td>
            <td className="product-description attr-style" onMouseEnter={e => {
                timer = setTimeout(() => {

                    let kartochka = document.querySelector('.order').getBoundingClientRect();
                    let visotaKartochki = kartochka.y + 586;
                    let posElement = e.target.getBoundingClientRect();


                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                    document.getElementById('tooltipBtn').innerHTML = `${row.name} <br> <div class="img-product-x200"><img src="http://vanl0073259.online-vm.com:3001/img/roz-nosok1.jpg" alt=""></div>`;
                    let visotablokov = posElement.y + document.querySelector('#tooltipBtn').offsetHeight;
                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                    document.getElementById("tooltipBtn").style.top = posElement.y + 26 + "px";
                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                    if (visotaKartochki < visotablokov + 20) {
                        document.getElementById("tooltipBtn").style.top = posElement.y - 5 - document.querySelector('#tooltipBtn').offsetHeight + "px";
                    }

                }, 300)
            }}
                onMouseLeave={e => {
                    document.getElementById("tooltipBtn").style.animation = '';
                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                    clearTimeout(timer);
                }}><span style={{ pointerEvents: 'none' }}>{row.name}</span></td>
            <td className="product-description price-product price-for-one" onMouseEnter={e => setBtnPlus(true)} onMouseLeave={e => setBtnPlus(false)}>
                <button className={btnClickPlus ? "btn-add-markup btn-add-markup-active" : "btn-add-markup"} style={btnPlus || btnClickPlus ? { opacity: 1, visibility: 'visible' } : {}} onClick={e => {
                    setBtnClickPlus(!btnClickPlus);
                    if (btnClickPlus) {
                        setAddPrice(0.00)
                    }
                }} onMouseEnter={e => {
                    timer = setTimeout(() => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerText = btnClickPlus ? 'Удалить наценку' : 'Добавить наценку';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 25 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                    }, 300)
                }}
                    onMouseLeave={e => {
                        document.getElementById("tooltipBtn").style.animation = '';
                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        clearTimeout(timer);
                    }}>
                    <svg width="15" height="15" viewBox="3 2 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={btnClickPlus ? { transform: 'rotate(90deg)' } : {}}>
                        <path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <InputPrice addPrice={addPrice} setAddPrice={setAddPrice} price={price} setPrice={setPrice} btnClickPlus={btnClickPlus} btnPlus={btnPlus} style={style} styleClick={styleClick} wrapper={wrapper} setWrapper={setWrapper} />
            </td>
            <td className="product-description price-product currency-block" >
                <CountInput wrapper={wrapper} setWrapper={setWrapper} count={count} setCount={setCount} hoverCount={hoverCount} setHoverCount={setHoverCount} />
            </td>
            <td className="product-description price-product product-number-format all-price">{!wrapper ? ((parseFloat(price) + parseFloat(addPrice)) * count).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.') : ((parseFloat(prevPrice) + parseFloat(prevAddPrice)) * prevCount).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.')}</td>
            <td className="product-description price-del" onMouseEnter={e => setHover(true)} onMouseLeave={e => setHover(false)}>
                <button className="product-delete" onClick={e => {
                    setArray([...array.filter((row, idx) => idx !== index)])
                    setAdditionally(false)
                    recalc(undefined, false)
                    document.querySelector('.add-dop-product input').checked = false;
                    document.getElementById("tooltipBtn").style.animation = '';
                }} onMouseEnter={e => {
                    timer = setTimeout(() => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerText = 'Удалить товар';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById('tooltipBtn').clientWidth + posElement.width + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 21 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                    }, 300)
                }}
                    onMouseLeave={e => {
                        document.getElementById("tooltipBtn").style.animation = '';
                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        clearTimeout(timer);
                    }}>
                    <svg width="15" height="15" viewBox="3 2 15 15" style={{ pointerEvents: 'none' }} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" stroke-opacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </td>
        </tr>
    )

}


let CountInput = ({ count, setCount, setWrapper, wrapper, hoverCount, setHoverCount }) => {

    const [value, setValue] = useState(count);
    const [hoverInput, setHoverInput] = useState(false);
    const refInput = useRef();
    useEffect(() => {

        if (!wrapper) {
            setCount(value === '' ? 1 : value);
            setValue(value === '' ? 1 : value);
        }

        if (!wrapper && hoverInput) {
            refInput.current.select();
            refInput.current.style.zIndex = 3;
        } else if (!wrapper && !hoverInput) {
            refInput.current.blur();
            refInput.current.style.zIndex = 0;
        }
    }, [wrapper, hoverInput])


    function is_numeric(str) {
        return /^\d+$/.test(str);
    }


    return (
        <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', width: 48 + (value.toString().length === 1 ? 0 : value.toString().length * 3) }} onMouseEnter={e => setHoverCount(true)} onMouseLeave={e => setHoverCount(false)} >
            <button className="minus-btn" onClick={e => { if (value - 1 > 0) { setCount(value - 1); setValue(value - 1); } }} style={hoverCount ? { visibility: 'visible' } : {}}></button><input ref={refInput} type="text" className="number-product" onKeyUp={e => {
                if (e.keyCode === 13) {
                    setWrapper(false);
                    e.target.blur();
                }
            }} onMouseEnter={e => {
                setHoverInput(true);
                e.target.style.background = 'rgb(175, 175, 179)';
            }} onMouseLeave={e => {
                setHoverInput(false);
                e.target.style.background = 'transparent';
            }} style={{ width: (value.toString().length) * (value.toString().length === 1 ? 10 : 7) + 'px' }} value={value} onChange={e => {
                if (e.target.value[0] !== '0')
                    setValue(is_numeric(parseInt(e.target.value)) ? parseInt(e.target.value) : '');
                setWrapper(true);
            }} maxLength="4" /><button className="plus-btn" onClick={e => { setCount(value + 1); setValue(value + 1); }} style={hoverCount ? { visibility: 'visible' } : {}}></button>
        </div>
    )
}



let TtnInput = ({ flag, text, setText, wrapper, setWrapper, type }) => {

    // console.log(type);
    const refInput = useRef();


    const [value, setValue] = useState(text);
    const [input, setInput] = useState(flag);

    const [hover, setHover] = useState(false);
    const [change, setChange] = useState(false);
    const [hoverLocation, setHoverLocation] = useState(false);


    useEffect(() => {



        if (!wrapper && hover) {
            refInput?.current?.select();
        } else if (!wrapper && !hover) {
            refInput?.current?.blur();
        }

        if (wrapper && change) {
            setHover(false);
            refInput?.current?.focus();
        } else if (!wrapper && value !== '') {
            setText(value);
            setChange(false)
        } else if (!wrapper) {
            setChange(false)

        }

    }, [wrapper, text, hover])

    return (
        <>
            {((input === false && value !== '') || (input === true)) && <div onMouseLeave={e => setHoverLocation(false)} style={{ display: 'flex' }}>
                {(input !== false && text === '') && <button class="create-ttn">
                    <svg width="12" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={e => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerHTML = 'Создать ТТН';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + posElement.height + 11 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                    }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}
                    >
                        <path d="M0.712422 0H2.5V1H1V2.5H0V0.74526C0 0.210264 0.224492 0 0.712422 0ZM2 2H3V8H2V2ZM5.5 2H6.5V8H5.5V2ZM9 2H10V8H9V2ZM7.5 2H8V8H7.5V2ZM4 2H4.5V8H4V2ZM1 7.5V9H2.5V10H0.712422C0.224492 10 0 9.79077 0 9.25474V7.5H1ZM9.5 0H11.2876C11.7755 0 12 0.210264 12 0.74526V2.5H11V1H9.5V0ZM12 7.5V9.35474C12 9.78974 11.7755 10 11.2876 10H9.5V9H11V7.5H12Z" fill="#9C9B9E" />
                    </svg>
                </button>}
                {(text !== '') && <button className="gpsmetka-ttn" id="gpsmetka-ttn-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={e => {
                        setHoverLocation(true);
                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerHTML = 'Отследить посылку';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + posElement.height + 11 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
                    }} onMouseLeave={e => { document.getElementById("tooltipBtn").style.animation = ''; }}>
                        <path d="M5.79389 0.0032196C5.45068 0.0388937 5.21695 0.0930204 4.93894 0.201274C3.85272 0.628139 3.07157 1.62579 2.94733 2.74524C2.94118 2.80551 2.93133 2.98635 2.92764 3.14504C2.9178 3.46857 2.93379 3.65186 2.99038 3.9065C3.05681 4.20297 3.22288 4.69995 3.35943 5.00749C3.42339 5.15142 3.68172 5.64717 3.95236 6.14662C4.5908 7.32634 5.98456 9.8051 5.99932 9.79034C6.01654 9.77189 6.88503 8.23296 7.37463 7.35217C7.94419 6.32622 8.34029 5.59182 8.54081 5.19325C8.761 4.75285 8.98243 4.08119 9.04148 3.67277C9.06362 3.51654 9.06731 2.99865 9.0464 2.79321C8.99227 2.23964 8.78684 1.71929 8.43994 1.25675C8.29232 1.05992 8.002 0.769607 7.80887 0.626908C7.37709 0.305838 6.89979 0.102861 6.40281 0.0265923C6.27734 0.00813961 5.89353 -0.00662231 5.79389 0.0032196ZM6.31916 1.82139C6.78047 1.93948 7.14213 2.29746 7.2713 2.76492C7.31066 2.90762 7.32419 3.16103 7.30205 3.31849C7.23685 3.77242 6.9084 4.18944 6.48523 4.35551C6.30317 4.42809 6.22813 4.44039 6.00301 4.44162C5.81357 4.44162 5.78159 4.43793 5.6721 4.40841C5.29814 4.30753 4.98076 4.04305 4.81592 3.69492C4.47025 2.9679 4.8356 2.0994 5.5946 1.84599C5.74714 1.79556 5.86155 1.77956 6.03992 1.78572C6.15678 1.78941 6.23182 1.79802 6.31916 1.82139Z" fill="#9C9B9E" />
                        <path d="M4.96108 8.61547C4.96847 8.61792 4.98323 8.61792 4.99185 8.61547C4.99923 8.61179 4.99308 8.60933 4.97585 8.60933C4.95862 8.60933 4.95247 8.61179 4.96108 8.61547Z" fill="#9C9B9E" />
                        <path d="M7.05233 8.61547C7.05971 8.61792 7.07448 8.61792 7.0831 8.61547C7.09048 8.61179 7.08433 8.60933 7.0671 8.60933C7.04987 8.60933 7.04371 8.61179 7.05233 8.61547Z" fill="#9C9B9E" />
                        <path d="M4.76419 8.62779C4.78633 8.63025 4.81953 8.63025 4.83798 8.62779C4.85643 8.62533 4.83798 8.62286 4.7974 8.62286C4.75681 8.62286 4.74205 8.62533 4.76419 8.62779Z" fill="#9C9B9E" />
                        <path d="M7.21219 8.62779C7.23433 8.63025 7.26753 8.63025 7.28598 8.62779C7.30443 8.62533 7.28598 8.62286 7.24539 8.62286C7.20481 8.62286 7.19005 8.62533 7.21219 8.62779Z" fill="#9C9B9E" />
                        <path d="M4.29308 8.65727C1.93119 8.86516 0.259411 9.43965 0.0219913 10.1236C-0.00753233 10.211 -0.00753233 10.3746 0.0232215 10.4619C0.149927 10.8285 0.73917 11.1963 1.62488 11.4608C3.5513 12.0377 6.59962 12.1669 9.01933 11.7745C10.5115 11.5321 11.594 11.1077 11.9274 10.6329C12.3973 9.96369 11.4526 9.29203 9.49048 8.89715C8.89385 8.77782 7.96386 8.6585 7.46688 8.63882C7.31065 8.63267 7.32787 8.63513 7.66985 8.66957C8.88893 8.79013 9.94071 9.07183 10.4611 9.41504C11.2545 9.94032 10.8178 10.5443 9.35516 10.9454C8.13854 11.2787 6.34129 11.403 4.68673 11.2701C3.30158 11.1569 2.15631 10.8715 1.58059 10.4951C1.44528 10.4065 1.2829 10.2405 1.23738 10.1445C1.09468 9.84437 1.28782 9.55282 1.80202 9.2908C2.40234 8.98449 3.37539 8.75937 4.60062 8.64497C4.70518 8.63513 4.70641 8.63513 4.63137 8.6339C4.58709 8.6339 4.43578 8.64497 4.29308 8.65727Z" fill="#9C9B9E" />
                    </svg>
                </button>}
                <div className="input-backttn-block" style={hoverLocation ? {
                    visibility: 'hidden', opacity: 0, transition: 'all 0.15s ease 0s'
                } : {}}>

                    {input === false ? <div className="ttn2-number">{value}</div> :
                        <div class="underline-animation" onMouseEnter={e => setHover(true)} onMouseLeave={e => setHover(false)}>
                            <span class="underline" style={hover || (wrapper && change) ? { width: type === 'Justin' ? 61 : '100%' } : { width: 0 }}></span>
                            <input ref={refInput} autocomplete="new-password"
                                style={(wrapper && change) ? { color: 'rgba(0,0,0,0.5)' } : {}} onClick={e => {
                                    setWrapper(true);
                                    setChange(true);
                                }}
                                onKeyUp={e => {
                                    setWrapper(true)
                                    setChange(true);
                                    let caretStart = e.target.selectionStart;
                                    let caretEnd = e.target.selectionEnd;
                                    let temp = parserText(e.target.value, 'id', type === 'Justin' ? 9 : 14);
                                    e.target.value = temp[0];
                                    e.target.setSelectionRange(caretStart - temp[1], caretEnd - temp[1]);
                                    setValue(e.target.value);
                                    if (e.keyCode === 13) {
                                        e.target.blur();
                                        // setShow(false);
                                        setChange(false);
                                        setWrapper(false);
                                    }
                                }}
                                // onChange={e => { setValue(e.target.value); setWrapper(true); setChange(true); }}
                                type="text" style={type === 'Justin' ? { width: 61 } : {}} class="input-ttn input-order numberValidation" maxLength={type === 'Justin' ? 9 : 14} placeholder="" />
                        </div>}

                    {(text !== '') && <div className="back-ttn-block2">
                        <div className="backttntooltip" onMouseEnter={e => {
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            document.getElementById('tooltipBtn').innerHTML = 'Остался 22 день/я до платного хранения';
                            let posElement = e.target.getBoundingClientRect();
                            document.getElementById("tooltipBtn").style.left = posElement.x - 3 + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + posElement.height + 10 + "px";
                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
                        }} onMouseLeave={e => { document.getElementById("tooltipBtn").style.animation = ''; }}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.38331 1.07301C5.38347 1.07293 5.38316 1.07308 5.38331 1.07301L1.30415 3.11259L1.30302 3.11315C1.21806 3.15537 1.14655 3.22046 1.09655 3.30109C1.04657 3.3817 1.02005 3.47464 1.01998 3.56949C1.01998 3.56945 1.01998 3.56952 1.01998 3.56949V8.42786C1.01932 8.52291 1.04522 8.61624 1.09478 8.69734C1.14426 8.77831 1.21535 8.84386 1.30004 8.88663C1.2999 8.88656 1.30018 8.8867 1.30004 8.88663L5.37888 10.9261C5.44974 10.9615 5.52802 10.98 5.60725 10.98C5.68647 10.98 5.76461 10.9616 5.83546 10.9261L9.91544 8.88614L9.91657 8.88558C10.0015 8.84335 10.073 8.77827 10.123 8.69764C10.173 8.61701 10.1996 8.52402 10.1996 8.42914V3.56958C10.1996 3.47471 10.173 3.38172 10.123 3.30109C10.073 3.22046 10.0015 3.15537 9.91657 3.11315L9.91544 3.11259L5.83674 1.07324C5.83689 1.07331 5.83658 1.07316 5.83674 1.07324C5.76634 1.03834 5.68837 1.01996 5.6098 1.01996C5.53122 1.01996 5.45371 1.03811 5.38331 1.07301ZM6.06368 0.616534L6.29062 0.159832C6.07906 0.0547063 5.84603 0 5.6098 0C5.37356 0 5.14053 0.0547063 4.92897 0.159832L4.92785 0.160394L0.84914 2.19975C0.84935 2.19964 0.84893 2.19985 0.84914 2.19975C0.594519 2.32642 0.379609 2.52187 0.229729 2.76356C0.0797254 3.00546 0.000175823 3.28441 2.478e-05 3.56904L2.47192e-05 8.42272C-0.00159201 8.70717 0.0761261 8.98645 0.22447 9.2292C0.373152 9.4725 0.586867 9.66941 0.841503 9.79771L0.842911 9.79842L4.9226 11.8383C5.13515 11.9446 5.36956 12 5.60725 12C5.84487 12 6.07923 11.9446 6.29175 11.8383C6.2918 11.8383 6.2917 11.8384 6.29175 11.8383L10.3705 9.79898C10.3703 9.79906 10.3706 9.79889 10.3705 9.79898C10.6251 9.67231 10.84 9.4769 10.9899 9.23516C11.1399 8.99327 11.2194 8.71432 11.2196 8.42968V3.56931C11.2194 3.28468 11.1399 3.00546 10.9899 2.76356C10.84 2.52187 10.6257 2.32674 10.3711 2.20007C10.3713 2.20018 10.3709 2.19996 10.3711 2.20007L6.29175 0.160394L6.06368 0.616534Z" fill="#9C9B9E" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.217058 2.79047C0.343017 2.53855 0.649348 2.43644 0.901267 2.5624L5.6098 4.91666L10.3183 2.5624C10.5702 2.43644 10.8766 2.53855 11.0025 2.79047C11.1285 3.04238 11.0264 3.34872 10.7745 3.47467L5.83787 5.94297C5.69429 6.01476 5.5253 6.01476 5.38173 5.94297L0.445128 3.47467C0.193209 3.34872 0.0910985 3.04238 0.217058 2.79047Z" fill="#9C9B9E" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.6098 4.97686C5.89145 4.97686 6.11978 5.20518 6.11978 5.48684V11.4842C6.11978 11.7658 5.89145 11.9942 5.6098 11.9942C5.32814 11.9942 5.09982 11.7658 5.09982 11.4842V5.48684C5.09982 5.20518 5.32814 4.97686 5.6098 4.97686Z" fill="#9C9B9E" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.60376 1.43392C2.72972 1.182 3.03605 1.07989 3.28797 1.20585L8.38776 3.75575C8.63968 3.88171 8.74179 4.18804 8.61583 4.43996C8.48987 4.69187 8.18354 4.79399 7.93162 4.66803L2.83183 2.11813C2.57991 1.99217 2.4778 1.68584 2.60376 1.43392Z" fill="#9C9B9E" />
                            </svg>
                            <span className="count" style={true ? { borderRadius: 5, paddingRight: 2 } : {}} >22</span>
                        </div>
                        <button className="btnbackttn" onMouseEnter={e => {
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            document.getElementById('tooltipBtn').innerHTML = 'Вернуть посылку отправителю';
                            let posElement = e.target.getBoundingClientRect();
                            document.getElementById("tooltipBtn").style.left = posElement.x - 3 + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + posElement.height + 10 + "px";
                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
                        }} onMouseLeave={e => { document.getElementById("tooltipBtn").style.animation = ''; }}>
                            <svg width="16" height="12" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6142 3.06906H5.67126L7.09175 1.61526C7.29171 1.41061 7.29171 1.07886 7.09175 0.874212C6.89173 0.669504 6.56764 0.669562 6.36763 0.874212L4.07317 3.22259C3.87321 3.42724 3.87321 3.75899 4.07317 3.96364L6.36763 6.31191C6.46764 6.41426 6.59865 6.46538 6.72966 6.46538C6.86067 6.46538 6.99169 6.4142 7.09169 6.31191C7.29166 6.10726 7.29166 5.77551 7.09169 5.57086L5.67121 4.11706H12.6141C13.7225 4.11706 14.6242 5.03993 14.6242 6.17427C14.6242 7.30861 13.7225 8.23148 12.6141 8.23148H10.8334C10.5506 8.23148 10.3214 8.46606 10.3214 8.75548C10.3214 9.0449 10.5506 9.27948 10.8334 9.27948H12.6141C14.2871 9.27948 15.6482 7.88646 15.6482 6.17427C15.6482 4.46208 14.2872 3.06906 12.6142 3.06906Z" fill="#9C9B9E" />
                                <path d="M6.04564 8.23145C5.76285 8.23145 5.53365 8.46602 5.53365 8.75544C5.53365 9.04486 5.76285 9.27944 6.04564 9.27944H9.05116C9.33395 9.27944 9.56315 9.04486 9.56315 8.75544C9.56315 8.46602 9.33395 8.23145 9.05116 8.23145H6.04564Z" fill="#9C9B9E" />
                                <path d="M1.16018 8.23145C0.877394 8.23145 0.648193 8.46602 0.648193 8.75544C0.648193 9.04486 0.877394 9.27944 1.16018 9.27944H4.16571C4.44849 9.27944 4.67769 9.04486 4.67769 8.75544C4.67769 8.46602 4.44849 8.23145 4.16571 8.23145H1.16018Z" fill="#9C9B9E" />
                            </svg>
                        </button>
                    </div>}
                </div>
                <div className="status-ttn-info" onMouseEnter={e => {
                    setHoverLocation(true);
                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                    document.getElementById('tooltipBtn').innerHTML = 'Відправлення прямує до міста Богородчани.';
                    let posElement = e.target.getBoundingClientRect();
                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                    document.getElementById("tooltipBtn").style.top = posElement.y + posElement.height + 13 + "px";
                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
                }} onMouseLeave={e => { document.getElementById("tooltipBtn").style.animation = ''; setHoverLocation(false) }} style={hoverLocation ? {
                    width: 155, visibility: 'visible', transition: 'all 0.15s ease 0s'
                } : {}}>Відправлення прямує до міста Богородчани.</div>
            </div>}
        </>
    )
}


let product = {
    rgb: {
        title: 'RGB Стрічка для декору 12 кольорів*3329',
        attributes: [
            {
                name: 'Голубой',
                price: '234.00',
                id: '2324',
                number: 2,
            },
            {
                name: 'Красный',
                price: '250.00',
                id: '2325',
                number: 1,
            },
            {
                name: 'Желтый',
                price: '222.00',
                id: '2326',
                number: 5,
                reserve: 23
            },
        ],
    },
    vent: {
        title: 'Вентилятор-обогреватель 2 в 1 от прикуривателя в авто - 12V (Auto Heater Fan 703, 140W) *3241*',
        attributes: [
            {
                name: 'Розовый толстый',
                price: '1254.44',
                id: '5663-4445',
                number: 344,
            },
            {
                name: 'Худой тонкий',
                price: '1300.22',
                id: '5663-4446',
                number: 1,
            },
            {
                name: 'Универсальный',
                price: '1400.00',
                id: '5673-444',
                number: 3,
            },
            {
                name: 'Универсальный разборной',
                price: '1888.88',
                id: '5683-4445',
                number: 77,
            },
            {
                name: 'Худой',
                price: '900.50',
                id: '5693-4445',
                number: 14,
            },
        ],
    },
    avto: {
        title: 'Автомобильный компрессор Air Pomp (маркетологи)',
        attributes: [
            {
                name: 'Полный комплект',
                price: '18900.50',
                id: '5693',
                number: 2,
            },
        ],
    },
    belie: {
        title: 'Невидимый силиконовый бюсгалтер Uh Bra *1159*',
        attributes: [
            {
                name: 'Белый',
                price: '399.99',
                id: '9322-667',
                number: 29,
            },
        ],
    },
    uroven: {
        title: 'Лазерный уровень *3196* Лазерный уровень *3196*',
        attributes: [
            {
                name: 'Ширина 20см',
                price: '200.99',
                id: '9322',
                number: 2,
            },
            {
                name: 'Ширина 40см',
                price: '400.99',
                id: '9323',
                number: 4,
            },
            {
                name: 'Ширина 60см',
                price: '600.99',
                id: '9324',
                number: 22,
            },
            {
                name: 'Ширина 80см',
                price: '800.99',
                id: '9325',
                number: 7,
            },
            {
                name: 'Ширина 100см',
                price: '1000.99',
                id: '9326',
                number: 121,
            },
        ],
    },
    girlyanda: {
        title: 'Гирлянда электрическая (100 лампочек) *1514*',
        attributes: [
            {
                name: 'Синяя',
                price: '500.99',
                id: '0-0',
                number: 21,
            },
        ],
    },
};

const deliveries = [
    {
        key: '1', icon: 'icon-Union-3', title: hints.nv, select: true, department: {
            select: true,
            city: '',
            department: ''
        }, address: {
            select: false,
            city: '',
            street: '',
            house: '',
            apartment: ''
        }
    },
    { key: '2', icon: 'icon-Vector-2', title: hints.justin, select: false },
    {
        key: '3', icon: 'icon-ukrposhta', title: hints.ukrPochta, select: false, department: {
            select: true,
            city: '',
            street: '',
            house: '',
            index: ''
        }, address: {
            select: false,
            country: '',
            city: '',
            street: '',
            house: '',
            index: '',
            apartment: ''
        }
    },
    { key: '4', icon: 'icon-Union-4', title: hints.samovivoz, select: false },
]

const AddressInput = ({ title, value, index, setList, id, list, setTop, setActive, classname, setValue, ChagneList, array, active, setArray, wrapper }) => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState(value)
    const refInput = useRef();
    const onClick = (e) => {
        ChagneList(index)
        setValue(text)
    }

    useEffect(() => {
        setText(value);
        if (active === classname) {
            refInput.current.focus();
        }
    }, [value, active])

    return (
        <div className={"addres-delivery-list " + classname} onMouseEnter={e => setShow(true)} onMouseLeave={e => setShow(false)}><div>{title}:</div> <div className="underline-animation">{id !== 'index' && <span className="underline" style={show || (wrapper && active === classname && list.length !== 0) ? { width: '100%' } : { width: 0 }}></span>}<input style={id === 'index' ? { cursor: 'default' } : {}} readOnly={id === 'index' ? 'readonly' : ''} onClick={onClick} autoComplete="new-password" className="strana addres-delivery-input" type="text" value={text} ref={refInput} onChange={e => {
            let str = '';
            if (e.target.value !== '') {
                str = e.target.value[0].toUpperCase() + e.target.value.slice(1);
            }
            e.target.value = str;
            setText(str);
            setValue(str);



            let temp = [...array];
            temp.forEach(element => {
                if (element.select === true) {
                    if (element.address.select === true) {
                        element.address[active] = e.target.value;
                    }
                    if (element.department.select === true) {
                        element.department[active] = e.target.value;
                    }
                }
            });

            setArray(temp)

        }} /><b className="count-addres" onMouseEnter={e => {

            document.getElementById("tooltipBtn").style.fontSize = '12px';
            document.getElementById('tooltipBtn').innerHTML = `Элементов в фильтре:<br>- найдено ${list.filter(x => x.toLowerCase().includes(text.toLowerCase())).length}`;
            let posElement = e.target.getBoundingClientRect();
            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
            document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
            document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

        }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''} style={(list.filter(x => x.toLowerCase().includes(text.toLowerCase())).length > 0 && active === classname) ? { visibility: 'visible' } : {}}>({list.filter(x => x.toLowerCase().includes(text.toLowerCase())).length})</b></div></div>
    )
}
let next = 1;
const DeliveryButton = ({ array, setArray, wrapper, setWrapper }) => {

    const [onHover, setHover] = useState(false)
    const [onHoverInput, setHoverInput] = useState(false)
    const [top, setTop] = useState(0);
    const [active, setActive] = useState('');
    const [change, setChange] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        if (!wrapper) {
            document.querySelector('.pickup-block input').style.color = 'rgba(0,0,0,1)';
            let temp = (array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address) || {};
            let keys = Object.keys(temp);
            setChange(false);
            if (array.filter(x => x.select === true)[0].department?.select || array.filter(x => x.select === true)[0].address?.select) {
                if ((keys.length === 3 ? keys.length : keys.length - 1) > keys.filter(x => temp[x] !== '')?.length) {
                    keys.forEach(x => {
                        if (x !== 'select') {
                            temp[x] = ''
                        }
                    })
                    let arr = [...array];
                    arr.forEach(x => {
                        if (x.select === true) {
                            if (x.department.select === true) {
                                x.department = temp;
                            } else {
                                x.address = temp;
                            }
                        }
                    })
                    setArray(arr)
                }
            }
        }
    }, [wrapper])

    const [list, setList] = useState(regions);
    const searchUndreline = (value) => {
        if (text !== "" && value !== null && value !== undefined) {
            let re = new RegExp(value, "gui");
            let text_pr = value.replace(re, x => '<span class="findUnderliner" style="opacity: 1;">' + x + '</span>');
            return text_pr;
        } else {
            return value;
        }
    }

    const ChagneList = (id) => {
        setTimeout(() => {
            let keys = Object.keys((array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address));
            let idx = Object.keys((array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address) || {})[id ? id : next];
            let block = document.querySelector('.addres-delivery-block').getBoundingClientRect();
            let blockPos = document.querySelector('.' + idx).getBoundingClientRect();
            let resultBlocks = blockPos.y - block.y;
            setTop(resultBlocks);
            if (idx === 'city') {
                setList(regions);
                setActive(idx)
            } else if (idx === 'department') {
                setActive(idx)
                setList(idxs);
            } else if (idx === 'country') {
                setActive(idx)
                setList(contry);
            } else if (idx === 'street') {
                setActive(idx)
                setList(idxs);
            } else if (idx === 'house') {
                setActive(idx)
                if (keys.includes('index')) {
                    setList(idxs);

                } else {
                    setList([]);
                }
            } else if (idx === 'apartment') {
                setActive(id)
                setList([]);
            } else if (id === 'index') {

            }


            next = id ? id + 1 : next + 1;
        }, 100);
    }


    return (
        <>
            <div className="delivery-chose-btn" onMouseLeave={e => setHover(false)}>
                <button className="btn-delivery-department"

                    onMouseLeave={e => { document.getElementById("tooltipBtn").style.animation = ''; }} onClick={e => {
                        setText('');
                        let temp = [...array];
                        next = 1;
                        temp.forEach(element => {
                            if (element.select === true) {
                                element.department.select = true;
                                element.address.select = false;
                            }
                        });
                        setWrapper(true);
                        setChange(true);
                        setArray(temp)
                        setActive(Object.keys((array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address) || {})[2])
                        ChagneList()
                    }} style={onHover || array.filter(x => x.select === true)[0].department?.select ? { display: 'block' } : { display: 'none' }} onMouseEnter={e => {
                        setHover(true);
                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerHTML = 'Указать отделение';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + posElement.height + 11 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
                    }} >
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.72199 5.46189C3.72199 5.21843 3.96848 4.9493 4.18693 4.9493H5.96965C6.18809 4.9493 6.43459 5.21843 6.43459 5.46189L6.43598 7.45975C6.43598 7.70321 6.18948 7.97234 5.97103 7.97234H4.18693C3.96848 7.97234 3.72199 7.70321 3.72199 7.45975V5.46189Z" fill="#9C9B9E" />
                        <path d="M7.33864 5.46189C7.33864 5.21843 7.58514 4.9493 7.80359 4.9493H9.5863C9.80475 4.9493 10.0512 5.21843 10.0512 5.46189L10.0526 7.45975C10.0526 7.70321 9.80614 7.97234 9.58769 7.97234H7.80359C7.58514 7.97234 7.33864 7.70321 7.33864 7.45975V5.46189Z" fill="#9C9B9E" />
                        <path d="M9.14697 9.48955C9.14697 9.24609 9.39347 8.97696 9.61191 8.97696H11.3946C11.6131 8.97696 11.8596 9.24609 11.8596 9.48955L11.861 11.4874C11.861 11.7309 11.6145 12 11.396 12H9.61191C9.39347 12 9.14697 11.7309 9.14697 11.4874V9.48955Z" fill="#9C9B9E" />
                        <path d="M5.53032 9.48955C5.53032 9.24609 5.77681 8.97696 5.99526 8.97696H7.77798C7.99642 8.97696 8.24292 9.24609 8.24292 9.48955L8.2443 11.4874C8.2443 11.7309 7.99781 12 7.77936 12H5.99526C5.77681 12 5.53032 11.7309 5.53032 11.4874V9.48955Z" fill="#9C9B9E" />
                        <path d="M1.91355 9.48955C1.91355 9.24609 2.16004 8.97696 2.37849 8.97696H4.16121C4.37965 8.97696 4.62615 9.24609 4.62615 9.48955L4.62754 11.4874C4.62754 11.7309 4.38104 12 4.1626 12H2.37849C2.16004 12 1.91355 11.7309 1.91355 11.4874V9.48955Z" fill="#9C9B9E" />
                        <path d="M12.0983 4.00288L6.88656 1.28549L1.6748 4.00288C1.6748 4.00288 1.13662 4.15068 0.946564 3.78C0.728116 3.35395 1.03047 3.05637 1.26266 2.93394C1.26266 2.93394 5.96553 0.311839 6.28656 0.134795C6.6076 -0.0422485 7.16329 -0.047597 7.48656 0.134801C7.80983 0.317199 12.3041 2.80687 12.5105 2.93394C12.7427 3.05637 12.925 3.35395 12.7066 3.78C12.5165 4.15068 12.0983 4.00288 12.0983 4.00288Z" fill="#9C9B9E" />
                    </svg>
                </button>
                <button className="btn-delivery-addres" onMouseLeave={e => { document.getElementById("tooltipBtn").style.animation = ''; }} onClick={e => {
                    setText('');
                    let temp = [...array];

                    temp.forEach(element => {
                        if (element.select === true) {
                            element.department.select = false;
                            element.address.select = true;
                        }
                    });
                    next = 1;
                    setWrapper(true);
                    setChange(true);
                    setArray(temp)
                    setActive(Object.keys((array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address) || {})[2])

                    ChagneList()
                }} onMouseEnter={e => {
                    setHover(true);
                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                    document.getElementById('tooltipBtn').innerHTML = 'Указать адрес';
                    let posElement = e.target.getBoundingClientRect();
                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                    document.getElementById("tooltipBtn").style.top = posElement.y + posElement.height + 11 + "px";
                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
                }} style={onHover || array.filter(x => x.select === true)[0].address?.select ? { display: 'block', marginRight: 7 } : { display: 'none' }}>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.7317 6.61659L10.5501 3.51801V0.642857C10.5501 0.287829 10.3214 0 9.97276 0C9.62417 0 9.42658 0.287829 9.42658 0.642857V2.23239L7.41933 0.329657C7.17286 0.0786429 6.77318 0.0786429 6.52671 0.3297L0.214818 6.75806C-0.0316908 7.00907 -0.108929 7.41416 0.214818 7.66719C0.214818 7.66719 0.654835 7.97987 1.10743 7.52576C1.56003 7.07164 2.13399 6.4803 2.13399 6.4803V11.3571C2.13399 11.7122 2.41661 12 2.7652 12H5.71085H8.23569H11.1813C11.5299 12 11.8126 11.7122 11.8126 11.3571V6.48039L12.8391 7.5258C13.0855 7.77681 13.6241 7.9182 13.8706 7.66719C14.1171 7.41609 13.9782 6.86764 13.7317 6.61659ZM6.2032 8.14286V10.8557H6.97327H7.74335V8.14286H6.2032ZM8.8669 10.8557H10.689V5.33623L6.97306 1.55199L3.25755 5.33601V10.8557H5.07964V7.5C5.07964 7.14497 5.36225 6.85714 5.71085 6.85714H8.23569C8.58429 6.85714 8.8669 7.14497 8.8669 7.5V10.8557Z" fill="#9C9B9E" />
                    </svg>
                </button>
            </div>
            <div className="pickup-block" style={array.filter(x => x.select === true)[0].title === hints.samovivoz ? { display: 'block' } : { display: 'none' }} onMouseEnter={e => setHoverInput(true)} onMouseLeave={e => setHoverInput(false)}>
                <div className="underline-animation"><span className="underline" style={onHoverInput || wrapper ? { width: '100%' } : { width: 0 }}></span><input onMouseEnter={e => {
                    e.target.select();
                    e.target.style.color = 'rgba(0,0,0, 0.5)';
                }}
                    onKeyUp={e => {
                        if (e.keyCode === 13) {
                            setWrapper(false);

                        }
                    }}
                    onMouseLeave={e => {
                        if (!wrapper) {
                            e.target.blur();
                        }
                    }} autoComplete="new-password" type="text" className="input-order" placeholder="" onChange={e => {
                        setWrapper(true);
                        if (e.target.value !== '') {
                            e.target.value = e.target.value[0].toLocaleUpperCase() + e.target.value.slice(1)
                        }
                    }} /></div>
            </div>
            <div className="addres-delivery-block" style={wrapper && change ? { visibility: 'visible', opacity: 1, top: 25 } : {}} onClick={e => setList([])}>
                <div className="addres-delivery-wrapper" >
                    {
                        Object.keys((array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address) || {}).map((x, index) => {
                            if (x === 'city') {
                                return (
                                    <AddressInput classname={x} list={list} index={index} wrapper={wrapper} setArray={setArray} active={active} array={array} title={'Город'} ChagneList={ChagneList} id={x} setValue={setText} setTop={setTop} setActive={setActive} setList={setList} value={(array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address)[x]} />
                                )
                            } else if (x === 'department') {
                                return (
                                    <AddressInput classname={x} list={list} index={index} wrapper={wrapper} setArray={setArray} active={active} array={array} title={'Отд-ние'} ChagneList={ChagneList} id={x} setValue={setText} setTop={setTop} setActive={setActive} setList={setList} value={(array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address)[x]} />
                                )
                            } else if (x === 'country') {
                                return (
                                    <AddressInput classname={x} list={list} index={index} wrapper={wrapper} setArray={setArray} active={active} array={array} title={'Страна'} ChagneList={ChagneList} id={x} setValue={setText} setTop={setTop} setActive={setActive} setList={setList} value={(array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address)[x]} />
                                )
                            } else if (x === 'street') {
                                return (
                                    <AddressInput classname={x} list={list} index={index} wrapper={wrapper} setArray={setArray} active={active} array={array} title={'Улица'} ChagneList={ChagneList} id={x} setValue={setText} setTop={setTop} setActive={setActive} setList={setList} value={(array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address)[x]} />
                                )
                            } else if (x === 'house') {
                                return (
                                    <AddressInput classname={x} list={list} index={index} wrapper={wrapper} setArray={setArray} active={active} array={array} title={'Дом'} ChagneList={ChagneList} id={x} setValue={setText} setTop={setTop} setActive={setActive} setList={setList} value={(array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address)[x]} />
                                )
                            } else if (x === 'apartment') {
                                return (
                                    <AddressInput classname={x} list={list} index={index} wrapper={wrapper} setArray={setArray} active={active} array={array} title={'Кв-ра'} ChagneList={ChagneList} id={x} setValue={setText} setTop={setTop} setActive={setActive} setList={setList} value={(array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address)[x]} />
                                )
                            } else if (x === 'index') {
                                return (
                                    <AddressInput classname={x} list={list} index={index} wrapper={wrapper} setArray={setArray} active={active} array={array} title={'Индекс'} ChagneList={ChagneList} id={x} setValue={setText} setTop={setTop} setActive={setActive} setList={setList} value={(array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address)[x]} />
                                )
                            }
                        })}
                </div>
                <div className="addres-menu-find" style={wrapper && change && list.length !== 0 ? { visibility: 'visible', opacity: 1, top: top } : {}}>
                    <SimpleBar style={{ maxHeight: 142 }} autoHide={false}>
                        <div className='goroda'>
                            {list.filter(x => x.toLowerCase().includes(text.toLowerCase())).map(x => <div onClick={e => {
                                let temp = [...array];
                                setList([]);

                                temp.forEach(element => {
                                    if (element.select === true) {
                                        if (element.address.select === true) {
                                            element.address[active] = e.target.innerText;
                                        }
                                        if (element.department.select === true) {
                                            element.department[active] = e.target.innerText;
                                        }
                                    }
                                });
                                setArray(temp);
                                let keys = Object.keys((array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address));

                                if (next <= (keys.includes('country') ? 4 : 3)) {
                                    ChagneList();
                                }

                                if (keys.includes('index') && next > (keys.includes('country') ? 4 : 3)) {
                                    let temp = [...array];
                                    temp.forEach(element => {
                                        if (element.select === true) {
                                            if (element.address.select === true) {
                                                element.address['index'] = parseInt(Math.random() * 100000);
                                            }
                                            if (element.department.select === true) {
                                                element.department['index'] = parseInt(Math.random() * 100000);
                                            }
                                        }
                                    });

                                    setArray(temp)
                                }

                                setText('');
                                setActive(Object.keys((array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address) || {})[2])
                            }} dangerouslySetInnerHTML={{ __html: searchUndreline(x) }}></div>)}
                        </div>
                    </SimpleBar>
                </div>
            </div>
            <div className="addres-result">
                <div>
                    {!wrapper &&
                        Object.keys((array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address) || {}).map(x => {
                            let element = (array.filter(x => x.select === true)[0].department?.select ? array.filter(x => x.select === true)[0].department : array.filter(x => x.select === true)[0].address)[x];
                            if (x === 'city' && element !== '') {
                                return (
                                    <span className="strana-text addres-result-text"><b> г.  {element}
                                    </b><span></span></span>
                                )
                            } else if (x === 'department' && element !== '') {
                                return (
                                    <span className="strana-text addres-result-text"><b> отд.  {element}
                                    </b><span></span></span>
                                )
                            } else if (x === 'country' && element !== '') {
                                return (
                                    <span className="strana-text addres-result-text"><b> {element}
                                    </b><span></span></span>
                                )
                            } else if (x === 'street' && element !== '') {
                                return (
                                    <span className="strana-text addres-result-text"><b> ул. {element}
                                    </b><span></span></span>
                                )
                            } else if (x === 'house' && element !== '') {
                                return (
                                    <span className="strana-text addres-result-text"><b> д. {element}
                                    </b><span></span></span>
                                )
                            } else if (x === 'apartment' && element !== '') {
                                return (
                                    <span className="strana-text addres-result-text"><b> кв. {element}
                                    </b><span></span></span>
                                )
                            } else if (x === 'index' && element !== '') {
                                return (
                                    <span className="strana-text addres-result-text"><b> ин. {element}
                                    </b><span></span></span>
                                )
                            }
                        })
                    }
                </div>
            </div >
        </>
    )
}



const status = [
    { key: '1', text: 'Новый', select: true, color: 'color-515151-before' },
    { key: '2', text: 'Принят Принят Принят Принят Принят', select: false, color: 'color-91d100-before' },
    {
        key: '3', text: 'Отказ', items: [
            { key: '1', text: 'Дублирующий заказ', select: false },
            { key: '2', text: 'Не подходит', select: false },
            { key: '3', text: 'Не заказывал', select: false },
            { key: '4', text: 'Неверный номер', select: false },
            { key: '5', text: 'Отказался', select: false },
            { key: '6', text: 'Передумал', select: false },
            { key: '7', text: 'Уже заказал', select: false },
            { key: '8', text: 'Дорого Дорого Дорого Дорого Дорого', select: false },
            { key: '9', text: 'Дорого', select: false },

        ], select: false, color: 'color-fd7777-before'
    },
    {
        key: '4', text: 'Отправлен Отправлен Отправлен', items: [
            { key: '1', text: 'Отправил кудато', select: false },
            { key: '2', text: 'Отправил Почемуто', select: false },
            { key: '3', text: 'Азазаз', select: false },
            { key: '4', text: 'Не отправил', select: false },

        ], select: false, color: 'color-e2d317-before'
    },
    {
        key: '5', text: '(Drop) Возврат (учтён)', items: [
            { key: '1', text: 'Drop возврат возврат', select: false },
            { key: '2', text: 'Drop возврат возврат', select: false },
            { key: '3', text: 'Drop возврат возврат', select: false },
            { key: '4', text: 'Drop возврат возврат', select: false },
            { key: '5', text: 'Drop возврат возврат', select: false },
            { key: '6', text: 'Drop возврат возврат', select: false },
            { key: '7', text: 'Drop возврат возврат', select: false },
            { key: '8', text: 'Drop возврат возврат', select: false },
        ], select: false, color: 'color-de25ae-before'
    },
    { key: '6', text: 'Передан', select: false, color: 'color-c6b922-before' },
    { key: '7', text: 'Упакован', select: false, color: 'color-928c42-before' },
    { key: '8', text: 'Выкуплен', select: false, color: 'color-64a727-before' },
    { key: '9', text: 'Завершён', select: false, color: 'color-00CC00-before' },
]

const Blur = memo(() => (
    <div className="bg-blur">
        <div className="bg-horizontal"></div>
        <div className="bg-vert"></div>
        <div className="bg-vert-2"></div>
        <div className="bg-horizontal-2"></div>
    </div>
))

const Info = ({ wrapper, setWrapper, view, textCalen, textCalen1, textCalen2, close }) => {
    const [hover, setHover] = useState(false);

    const onMouseEnter = () => {
        setHover(true)
    }
    const onMouseLeave = () => {
        setHover(false)
    }
    return (
        <div style={{ width: 163, height: 12 }} onMouseLeave={onMouseLeave}>
            <svg className="data-user-btn" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={onMouseEnter} >
                <path d="M11.4 14H3.6C2.17 14 1 12.83 1 11.4V4.90005C1 3.47005 2.17 2.30005 3.6 2.30005H11.4C12.83 2.30005 14 3.47005 14 4.90005V11.4C14 12.83 12.83 14 11.4 14Z" stroke="black" strokeWidth="0.666667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.75 1V3.6" stroke="black" strokeWidth="0.666667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.25 1V3.6" stroke="black" strokeWidth="0.666667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.25004 7.50007C4.60902 7.50007 4.90004 7.20906 4.90004 6.85007C4.90004 6.49109 4.60902 6.20007 4.25004 6.20007C3.89105 6.20007 3.60004 6.49109 3.60004 6.85007C3.60004 7.20906 3.89105 7.50007 4.25004 7.50007Z" fill="#4D4D4D" />
                <path d="M10.75 7.49971C11.109 7.49971 11.4 7.20869 11.4 6.84971C11.4 6.49072 11.109 6.19971 10.75 6.19971C10.3911 6.19971 10.1 6.49072 10.1 6.84971C10.1 7.20869 10.3911 7.49971 10.75 7.49971Z" fill="#4D4D4D" />
                <path d="M7.49998 7.49971C7.85896 7.49971 8.14998 7.20869 8.14998 6.84971C8.14998 6.49072 7.85896 6.19971 7.49998 6.19971C7.14099 6.19971 6.84998 6.49072 6.84998 6.84971C6.84998 7.20869 7.14099 7.49971 7.49998 7.49971Z" fill="#4D4D4D" />
                <path d="M4.25004 10.7497C4.60902 10.7497 4.90004 10.4587 4.90004 10.0997C4.90004 9.74072 4.60902 9.44971 4.25004 9.44971C3.89105 9.44971 3.60004 9.74072 3.60004 10.0997C3.60004 10.4587 3.89105 10.7497 4.25004 10.7497Z" fill="#4D4D4D" />
                <path d="M10.75 10.7497C11.109 10.7497 11.4 10.4587 11.4 10.0997C11.4 9.74072 11.109 9.44971 10.75 9.44971C10.3911 9.44971 10.1 9.74072 10.1 10.0997C10.1 10.4587 10.3911 10.7497 10.75 10.7497Z" fill="#4D4D4D" />
                <path d="M7.49998 10.7497C7.85896 10.7497 8.14998 10.4587 8.14998 10.0997C8.14998 9.74072 7.85896 9.44971 7.49998 9.44971C7.14099 9.44971 6.84998 9.74072 6.84998 10.0997C6.84998 10.4587 7.14099 10.7497 7.49998 10.7497Z" fill="#4D4D4D" />
            </svg>
            <div className="info-data-block" style={hover ? { width: 155 } : { width: 0 }}>
                <span className="info-calen-data calen-data-accept" onMouseEnter={e => {

                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                    document.getElementById('tooltipBtn').innerHTML = textCalen;
                    let posElement = e.target.getBoundingClientRect();
                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                    document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>14.01.2021</span><span className="info-calen-data-2 calen-data-accept-2" onMouseEnter={e => {

                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                    document.getElementById('tooltipBtn').innerHTML = textCalen1;
                    let posElement = e.target.getBoundingClientRect();
                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                    document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>13:45:21</span>{view && <><span className="info-calen-data-3 calen-data-accept-3" onMouseEnter={e => {

                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                    document.getElementById('tooltipBtn').innerHTML = textCalen2;
                    let posElement = e.target.getBoundingClientRect();
                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                    document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}><b className="block-hours">00</b>:<b className="block-min">12</b>:<b className="block-sec">22</b><span className="color-time zelen"></span></span></>}
            </div>
            <div className="info-user-block" style={hover ? { opacity: 0, visibility: 'hidden' } : { opacity: 1, visibility: 'visible' }}>
                <Dropdown array={arr} wrapper={wrapper} setWrapper={setWrapper} width={143} close={close} />
            </div>
        </div>
    )
}
const Modal = ({
    visible = false,
    content = '',
    footer = '',
    onClose,
}) => {

    const [header, setHeader] = useState(false);
    const [wrapper, setWrapper] = useState(false);
    const [delivery, setDelivery] = useState([...deliveries]);
    const [array, setArray] = useState([...arrayRow]);
    const [arrayAdd, setArrayAdd] = useState([]);
    const [prePaymentAccept, setPrePaymentAccept] = useState(false);
    const [prePaymentValue, setPrePaymentValue] = useState('0.00');

    const [addRow, setAddRow] = useState(false);
    const [additionally, setAdditionally] = useState(false);
    const [addAdditionallyRow, setAddAdditionallyRow] = useState(false);

    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [lockAddress, setLockAddress] = useState(false);
    const [lockWireless, setLockWireless] = useState(false);
    const [hoverWireless, setHoverWireless] = useState(false);
    const [ttn, setTtn] = useState('');
    const [hoverAddition, setHoverAddition] = useState('');
    const [close, setClose] = useState(false);

    let headerMouseEnter = (e) => {
        setHeader(true);
    }
    let headerMouseLeave = (e) => {
        setHeader(false);
    }

    useEffect(() => {
        if (!wrapper) {
            setAddAdditionallyRow(false)
            setAddRow(false)
            if (arrayAdd.length === 0) {
                setAdditionally(false)
                recalc(undefined, false)
                document.querySelector('.add-dop-product input').checked = false;
            }
        }



    }, [wrapper, prePaymentValue, ttn])


    const searchUndreline = (text) => {
        if (value !== "") {
            let re = new RegExp(value, "gui");
            let text_pr = text.replace(re, x => '<span class="findUnderliner" style="opacity: 1;">' + x + '</span>');
            return text_pr;
        } else {
            return text;
        }
    }

    function adaptiveScrolltable(count, firstTab, secondTab) {
        var countAdaptivetable = count;
        let lenA = document.querySelectorAll('.product-table-tbody tr').length;
        let lenB = document.querySelectorAll('.dop-product-table-tbody tr').length;

        let tableA = document.querySelector('.product-table-scroll');
        let tableA1 = document.querySelector('.product-table');
        let tableB = document.querySelector('.dop-product-table-scroll');
        let tableB1 = document.querySelector('.dop-sale-table');
        if (countAdaptivetable - lenB >= lenA || lenA <= 2) {
            tableA.style.maxHeight = '';
            tableA.style.overflow = 'hidden';
            tableA1.style.overflow = '';
        } else {
            let heightAdaptiveTable = 26 * Math.max(firstTab, countAdaptivetable - lenB) + 103.57;
            tableA.style.maxHeight = heightAdaptiveTable + 'px';
            tableA.style.overflow = '';
            tableA1.style.overflow = 'auto';
        }
        if (countAdaptivetable - lenA >= lenB || lenB <= 2) {
            tableB.style.maxHeight = '';
            tableB.style.overflow = 'hidden';
            tableB1.style.overflow = '';
        } else {
            let heightAdaptiveTable = 26 * Math.max(secondTab, countAdaptivetable - lenA) + 103.57;
            tableB.style.maxHeight = heightAdaptiveTable + 'px';
            tableB.style.overflow = '';
            tableB1.style.overflow = 'auto';
        }
    }


    let recalc = (table, flag, value, newRow) => {
        let prePaymentVals = value === undefined ? prePaymentValue : value;

        console.log(prePaymentVals);

        if (prePaymentVals !== '0.00') {
            adaptiveScrolltable(6, 3, 3);
        } else {
            adaptiveScrolltable(7, 4, 3);
        }

        let product = flag === undefined ? !additionally : !flag;
        if (product) {
            adaptiveScrolltable(11, 5, 5);
        }

        if (product && prePaymentVals !== '0.00') {
            adaptiveScrolltable(10, 5, 4);
        }
        if (table === 'product') {
            setTimeout(() => {
                document.querySelector('.product-table-scroll').querySelector('.simplebar-content-wrapper').scrollTo({
                    top: document.querySelector('.product-table-scroll .simplebar-content').offsetHeight,
                    behavior: 'smooth'  // 👈 
                });
            }, 100);
        } else {
            setTimeout(() => {
                document.querySelector('.dop-product-table-scroll').querySelector('.simplebar-content-wrapper').scrollTo({
                    top: document.querySelector('.dop-product-table-scroll .simplebar-content').offsetHeight,
                    behavior: 'smooth'  // 👈 
                });
            }, 100);
        }

    }


    // // создаем обработчик нажатия клавиши Esc
    // const onKeydown = ({ key }) => {
    //     switch (key) {
    //         case 'Escape':
    //             onClose()
    //             break
    //     }
    // }

    // // c помощью useEffect цепляем обработчик к нажатию клавиш
    // // https://ru.reactjs.org/docs/hooks-effect.html
    // React.useEffect(() => {
    //     document.addEventListener('keydown', onKeydown)
    //     return () => document.removeEventListener('keydown', onKeydown)
    // })


    // если компонент невидим, то не отображаем его
    // if (!visible) return null;

    // или возвращаем верстку модального окна
    return (<div className="modal" >
        {/* <Blur /> */}
        <div className="order orderModeOn" id="order">
            {wrapper && <div className="podlozhka-order" onClick={e => setWrapper(false)}></div>}
            <div className="order-header">
                <div className="order-header-wrapper" onMouseEnter={headerMouseEnter} onMouseLeave={headerMouseLeave}>
                    <div className={header ? "order-info-number order-hide-arrow" : "order-info-number"}>Заказ № 265457</div>
                    <div className="order-info-time" style={header ? { maxWidth: 200, marginLeft: 6 } : {}}><span>от 26.07.20</span><span>09:09:36</span><span className="info-time-open" onMouseEnter={e => {
                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerText = 'Открыт через 23 мин';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
                    }}
                        onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                        }}>00:23:00<span></span></span>
                    </div>
                </div>
                <div className="switch-btn sdat-zakaz">
                    <label className="switch" onMouseEnter={e => {
                        timer = setTimeout(() => {

                            document.getElementById("tooltipBtn").style.fontSize = '14px';
                            document.getElementById('tooltipBtn').innerHTML = !close ? 'Завершить заказ<br><span class="text-tooltip">Дальнейшее редактирование заказа сотрудниками без снятия блокировки невозможно</span>' : 'Разблокировать заказ<br><span class="text-tooltip">Редактирование заказа без снятия блокировки невозможно</span>';
                            let posElement = e.target.getBoundingClientRect();
                            document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth + 15 + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 15 + "px";
                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                        }, 300)
                    }}
                        onMouseLeave={e => {
                            setHoverAddition(false);
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                        }}>
                        <input type="checkbox" onClick={e => {
                            document.getElementById("tooltipBtn").style.fontSize = '14px';
                            document.getElementById('tooltipBtn').innerHTML = !close ? 'Заказ завершён' : 'Заказ разблокирован';
                            let posElement = document.querySelector('.switch-btn .switch').getBoundingClientRect();
                            document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth + 15 + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 15 + "px";
                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
                            timer = setTimeout(() => {
                                document.getElementById("tooltipBtn").style.animation = '';
                            }, 500)
                            setClose(!close);


                        }
                        } />
                        <span className="slider round"></span>
                    </label>
                </div>
                <button className="btn-close"></button>
            </div>
            <div className={close ? "container container-block-card" : "container"}>
                <div className="wrap-contact-fields">
                    <table className="contact-table">
                        <tr>
                            <td colSpan="2" className="contact-header"><span onMouseEnter={e => {

                                document.getElementById("tooltipBtn").style.fontSize = '14px';
                                document.getElementById('tooltipBtn').innerText = 'Информация о покупателе';
                                let posElement = e.target.getBoundingClientRect();
                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Контакт</span></td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Страна за которой закреплён заказ<br><span className="text-tooltip">Используется для разделения заказов из разных стран</span>';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Страна:</div>
                            </td>
                            <td className="contact-description country-style">
                                <DropdownCountry wrapper={wrapper} setWrapper={setWrapper} closes={close} array={countries} />
                            </td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Используемый отдел в заказе<br><span className="text-tooltip">Заказ с "отделом" виден только тем пользователям у которых есть доступ к сооответствующему отделу</span>';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Отдел:</div>
                            </td>
                            <td className="contact-description department-block">
                                <Dropdown array={arr} wrapper={wrapper} setWrapper={setWrapper} width={175} close={close} />
                            </td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Используется для:<br>-Автоматического заполнения товарно-транспортной накладной почтовой службы<br>-Автоматической отправки SMS</span>';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Телефон:</div>
                            </td>
                            <td className="contact-description user-tel-block">
                                <PhoneInput wrapper={wrapper} setWrapper={setWrapper} />
                            </td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Фамилия имя отчество покупателя<br><span className="text-tooltip">Используется для автоматического заполнения товарно-транспортной накладной почтовой службы</span>';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Покупатель:</div>
                            </td>
                            <td className="contact-description">
                                <PurchaserInput wrapper={wrapper} setWrapper={setWrapper} />
                            </td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'E-mail покупателя<br><span className="text-tooltip">Используется для автоматической отправки электронного чека ПРРО</span>';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>E-mail:</div>
                            </td>
                            <td className="contact-description">
                                <EmailInput wrapper={wrapper} setWrapper={setWrapper} />
                            </td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Используется для фиксации прихода денежных средств от продажи товаров за наличный или безналичный расчет.<br> Данные о чеках передаются сразу в ГНС Украины.</span>';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>ПРРО:</div>
                            </td>
                            <td className="contact-description">

                                <PrroInput />
                            </td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Используемый вид оплаты';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Оплата:</div>
                            </td>
                            <td className="contact-description pay-method">
                                <DropdownPay array={pay} closes={close} wrapper={wrapper} setWrapper={setWrapper} />
                            </td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Текущий статус заказа<br><span className="text-tooltip">Используется для контроля, анализа и отслеживания заказа в CRM</span>';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Статус:</div>
                            </td>
                            <td className="contact-description status">
                                <DropdownStatus array={status} wrapper={wrapper} closes={close} setWrapper={setWrapper} />
                            </td>
                        </tr>

                    </table>
                    <CommentBlock wrapper={wrapper} setWrapper={setWrapper} />
                    <div className="field-wrapper">
                        <table className="field-table">
                            <tr>
                                <td className="contact-header" onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Дополнительное поле заказа<br><span className="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span>';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Дополнительные поля</td>
                            </tr>
                        </table>
                        <div className="field-block" >
                            <SimpleBar style={{ maxHeight: 115 }}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="field-number">1</td>
                                            <td className="field-description">
                                                <AdditionalInput wrapper={wrapper} setWrapper={setWrapper} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="field-number">2</td>
                                            <td className="field-description">
                                                <AdditionalInput wrapper={wrapper} setWrapper={setWrapper} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="field-number">3</td>
                                            <td className="field-description">
                                                <AdditionalInput wrapper={wrapper} setWrapper={setWrapper} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="field-number">4</td>
                                            <td className="field-description">
                                                <AdditionalInput wrapper={wrapper} setWrapper={setWrapper} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="field-number">5</td>
                                            <td className="field-description">
                                                <AdditionalInput wrapper={wrapper} setWrapper={setWrapper} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="field-number">6</td>
                                            <td className="field-description">
                                                <AdditionalInput wrapper={wrapper} setWrapper={setWrapper} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="field-number">7</td>
                                            <td className="field-description">
                                                <AdditionalInput wrapper={wrapper} setWrapper={setWrapper} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="field-number">8</td>
                                            <td className="field-description">
                                                <AdditionalInput wrapper={wrapper} setWrapper={setWrapper} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="field-number">9</td>
                                            <td className="field-description">
                                                <AdditionalInput wrapper={wrapper} setWrapper={setWrapper} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="field-number">10</td>
                                            <td className="field-description">
                                                <AdditionalInput wrapper={wrapper} setWrapper={setWrapper} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </SimpleBar>
                        </div>
                    </div>
                </div>
                <div className="wrap-delivery-info-utm">
                    <table className="delivery-table">
                        <tr>
                            <td colSpan="2" className="contact-header" ><span onMouseEnter={e => {

                                document.getElementById("tooltipBtn").style.fontSize = '14px';
                                document.getElementById('tooltipBtn').innerHTML = 'Доставка и её параметры, используемые в заказе';
                                let posElement = e.target.getBoundingClientRect();
                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Доставка</span></td>
                        </tr>
                        <tr>
                            <td className="delivery-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Используемый вид доставки';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Вид:</div>
                            </td>
                            <td className="delivery-description delivery-mail">
                                <DropdownDelivery wrapper={wrapper} closes={close} setWrapper={setWrapper} array={delivery} setArray={setDelivery} />

                            </td>
                        </tr>
                        <tr>
                            <td className="delivery-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Адрес доставки';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Адрес:</div>
                            </td>
                            <td className="delivery-description">
                                <DeliveryButton array={delivery} setArray={setDelivery} wrapper={wrapper} setWrapper={setWrapper} />
                            </td>
                        </tr>
                        <tr>
                            <td className="delivery-list">
                                {delivery.filter(x => x.select === true)[0].title !== hints.samovivoz && <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Номер товарно-транспортной накладной';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>TTH:</div>}
                            </td>
                            <td className="delivery-description ttn-block-description">
                                {delivery.filter(x => x.select === true)[0].title !== hints.samovivoz &&
                                    <TtnInput flag={true} wrapper={wrapper} text={ttn} setText={setTtn} setWrapper={setWrapper} type={delivery.filter(x => x.select === true)[0].title} />
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="delivery-list">
                            </td>
                            <td className="delivery-description ttn-block-description">
                                {delivery.filter(x => x.select === true)[0].title !== hints.samovivoz &&
                                    <TtnInput flag={false} wrapper={wrapper} text={ttn} setText={setTtn} setWrapper={setWrapper} />
                                }
                            </td>
                        </tr>
                    </table>
                    <table className="info-table">
                        <tr>
                            <td colSpan="2" className="contact-header" ><span onMouseEnter={e => {

                                document.getElementById("tooltipBtn").style.fontSize = '14px';
                                document.getElementById('tooltipBtn').innerHTML = 'Дополнительная информация о заказе';
                                let posElement = e.target.getBoundingClientRect();
                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Информация</span>
                                <button className="btn-notification" onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Создать напоминание';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>
                                    <svg style={{ pointerEvents: 'none' }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.1073 9.46145C4.06725 9.58523 4.04541 9.71538 4.04541 9.84917C4.04541 10.7056 4.9128 11.4001 5.98406 11.4001C7.05442 11.4001 7.92271 10.7056 7.92271 9.84917C7.92271 9.71538 7.90087 9.58523 7.86082 9.46145H4.1073ZM5.98406 0.600098C3.84245 0.600098 2.10676 2.33578 2.10676 4.4774V6.95212C2.10676 7.28797 1.87922 7.58013 1.55338 7.66204C1.22754 7.74305 1 8.03521 1 8.37107V8.52853C1 9.04368 1.41686 9.46145 1.93292 9.46145H4.1073H7.85809H10.0352C10.5513 9.46145 10.9681 9.04368 10.9681 8.52853V8.37107C10.9681 8.03521 10.7397 7.74305 10.4147 7.66204C10.0889 7.58013 9.86137 7.28797 9.86137 6.95212V4.4774C9.86137 2.33578 8.12568 0.600098 5.98406 0.600098V0.600098Z" stroke="#9C9B9E" strokeWidth="1.1" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button className="btninfo" onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'История заказа';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>
                                    <svg style={{ pointerEvents: 'none' }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 0C2.6916 0 0 2.69164 0 6.00004C0 9.30844 2.6916 12 6 12C9.3084 12 12 9.30844 12 6.00004C12 2.69164 9.3084 0 6 0ZM6 10.9091C3.29309 10.9091 1.09091 8.70691 1.09091 6.00004C1.09091 3.29316 3.29309 1.09091 6 1.09091C8.70691 1.09091 10.9091 3.29316 10.9091 6.00004C10.9091 8.70691 8.70687 10.9091 6 10.9091Z" fill="#919191" />
                                        <path d="M5.99989 2.54541C5.59895 2.54541 5.27277 2.87181 5.27277 3.27301C5.27277 3.67385 5.59895 3.99996 5.99989 3.99996C6.40084 3.99996 6.72702 3.67385 6.72702 3.27301C6.72702 2.87181 6.40084 2.54541 5.99989 2.54541Z" fill="#919191" />
                                        <path d="M6.00004 5.09082C5.69881 5.09082 5.45459 5.33504 5.45459 5.63628V8.909C5.45459 9.21024 5.69881 9.45446 6.00004 9.45446C6.30128 9.45446 6.5455 9.21024 6.5455 8.909V5.63628C6.5455 5.33504 6.30128 5.09082 6.00004 5.09082Z" fill="#919191" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="info-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Источник заказа';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Сайт:</div>
                            </td>
                            <td className="info-description" >
                                <a className="site-link" href="https://offer.lp-crm.biz/crm-dlya-internet-magazina/" target="_blank" onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Перейти на сайт Offer.lp-crm.biz/crm-dlya-internet-magazina/';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 21 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>offer.lp-crm.biz/crm-dlya-internet-magazina/</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="info-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'IP адрес, страна, тип устройства, ОС и браузер с которого поступил заказ';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>IP:</div>
                            </td>
                            <td className="info-description ip-block" style={hoverWireless ? { height: 43 } : {}}>
                                <div className="ip-wrapper" onMouseLeave={e => setHoverWireless(false)}>
                                    <div className="ip-block-wrapper" >
                                        <button className="ip-lock-btn tooltip-logo" onMouseEnter={e => {
                                            setHoverWireless(true);
                                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                                            document.getElementById('tooltipBtn').innerHTML = lockAddress ? 'Разблокировать пользователя с IP 178.213.0.225' : 'Блокировать пользователя с IP 178.213.0.225';
                                            let posElement = e.target.getBoundingClientRect();
                                            document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
                                            document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                        }}
                                            onMouseLeave={e => { document.getElementById("tooltipBtn").style.animation = ''; clearTimeout(timer) }}
                                            onClick={e => {
                                                setLockAddress(!lockAddress);
                                                if (lockAddress && lockWireless) { setLockWireless(false) }
                                                document.getElementById("tooltipBtn").style.animation = ''
                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                document.getElementById('tooltipBtn').innerHTML = lockAddress ? 'Разблокирован' : 'Заблокирован';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
                                                timer = setTimeout(() => {
                                                    document.getElementById("tooltipBtn").style.animation = ''
                                                }, 1000);

                                            }}
                                        >
                                            <svg className="unlock" width="12" height="11" style={lockAddress ? { display: 'none', pointerEvents: 'none' } : {}} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85714 4.85718H1.85714C1.38376 4.85718 1 5.24093 1 5.71432V8.71432C1 9.18771 1.38376 9.57146 1.85714 9.57146H7.85714C8.33053 9.57146 8.71429 9.18771 8.71429 8.71432V5.71432C8.71429 5.24093 8.33053 4.85718 7.85714 4.85718Z" stroke="#9C9B9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7 4.85714V3.14286C7 2.57454 7.22576 2.02949 7.62763 1.62763C8.02949 1.22576 8.57454 1 9.14286 1C9.71118 1 10.2562 1.22576 10.6581 1.62763C11.0599 2.02949 11.2857 2.57454 11.2857 3.14286V4.85714" stroke="#9C9B9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <svg className="lock" style={lockAddress ? { display: 'flex', left: -1, pointerEvents: 'none' } : {}} width="12" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85714 4.85718H1.85714C1.38376 4.85718 1 5.24093 1 5.71432V8.71432C1 9.18771 1.38376 9.57146 1.85714 9.57146H7.85714C8.33053 9.57146 8.71429 9.18771 8.71429 8.71432V5.71432C8.71429 5.24093 8.33053 4.85718 7.85714 4.85718Z" stroke="#9C9B9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2.70001 4.86V3.14444C2.70001 2.5757 2.92578 2.03025 3.32764 1.62809C3.7295 1.22593 4.27455 1 4.84287 1C5.41119 1 5.95623 1.22593 6.3581 1.62809C6.75996 2.03025 6.98573 2.5757 6.98573 3.14444V4.86" stroke="#9C9B9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <div className="info-ip" onClick={e => {
                                            var copyText = document.getElementById('primary-ip');
                                            var textArea = document.createElement('textarea');
                                            textArea.value = copyText.textContent;
                                            document.body.appendChild(textArea);
                                            textArea.select();
                                            document.execCommand('Copy');
                                            textArea.remove();
                                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                                            let posElement = e.target.getBoundingClientRect();
                                            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                            document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
                                            document.getElementById('tooltipBtn').innerHTML = 'Скопирован';
                                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            setTimeout(() => {
                                                document.getElementById("tooltipBtn").style.animation = ''
                                            }, 1500);
                                        }}
                                            onMouseEnter={e => {

                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                document.getElementById('tooltipBtn').innerHTML = 'Скопировать IP 178.213.0.225';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}
                                        ><span id="primary-ip">178.213.0.225</span>
                                        </div>
                                        <div className="ip-icons-position">
                                            <span className="flags ua" onMouseEnter={e => {

                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                document.getElementById('tooltipBtn').innerHTML = 'Украина';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>🇺🇦</span>
                                            <span className="icon-Vector-10 icons colorWhite" onMouseEnter={e => {

                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                document.getElementById('tooltipBtn').innerHTML = 'Компьютер';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}></span>
                                            <span className="icon-Windows-1 icons colorWhite" onMouseEnter={e => {

                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                document.getElementById('tooltipBtn').innerHTML = 'Windows';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}></span>
                                            <span className="icon-Vector-13 icons colorWhite" onMouseEnter={e => {

                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                document.getElementById('tooltipBtn').innerHTML = 'Mail Браузер';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}></span>
                                        </div>
                                    </div>
                                    <div className="ip-block-all-wrapper" style={hoverWireless ? { height: 17, paddingTop: 10 } : {}}>
                                        <button className="ip-lock-btn tooltip-logo-network"
                                            onMouseEnter={e => {
                                                setHoverWireless(true);
                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                document.getElementById('tooltipBtn').innerHTML = lockWireless ? 'Разблокировать пользователя и всю подсеть 178.213.0.<b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b><b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b><b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b>' : 'Блокировать пользователя и всю подсеть 178.213.0.<b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b><b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b><b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b>';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x - 2 + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }}
                                            onMouseLeave={e => { document.getElementById("tooltipBtn").style.animation = ''; clearTimeout(timer) }}

                                            onClick={e => {
                                                setLockWireless(!lockWireless);
                                                if (!lockAddress && !lockWireless) { setLockAddress(true) }
                                                else if (lockAddress && !lockWireless) { setLockAddress(true) }
                                                else { setLockAddress(false) }
                                                document.getElementById("tooltipBtn").style.animation = ''
                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                document.getElementById('tooltipBtn').innerHTML = lockWireless ? 'Разблокирован' : 'Заблокирован';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x - 2 + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
                                                timer = setTimeout(() => {
                                                    document.getElementById("tooltipBtn").style.animation = ''
                                                }, 1000);
                                            }}

                                        >
                                            <svg className="unlock" width="12" style={lockWireless ? { display: 'none', pointerEvents: 'none' } : {}} height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85714 4.85718H1.85714C1.38376 4.85718 1 5.24093 1 5.71432V8.71432C1 9.18771 1.38376 9.57146 1.85714 9.57146H7.85714C8.33053 9.57146 8.71429 9.18771 8.71429 8.71432V5.71432C8.71429 5.24093 8.33053 4.85718 7.85714 4.85718Z" stroke="#9C9B9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7 4.85714V3.14286C7 2.57454 7.22576 2.02949 7.62763 1.62763C8.02949 1.22576 8.57454 1 9.14286 1C9.71118 1 10.2562 1.22576 10.6581 1.62763C11.0599 2.02949 11.2857 2.57454 11.2857 3.14286V4.85714" stroke="#9C9B9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <svg className="lock" width="12" height="11" style={lockWireless ? { display: 'flex', left: -1, pointerEvents: 'none' } : {}} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85714 4.85718H1.85714C1.38376 4.85718 1 5.24093 1 5.71432V8.71432C1 9.18771 1.38376 9.57146 1.85714 9.57146H7.85714C8.33053 9.57146 8.71429 9.18771 8.71429 8.71432V5.71432C8.71429 5.24093 8.33053 4.85718 7.85714 4.85718Z" stroke="#9C9B9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2.70001 4.86V3.14444C2.70001 2.5757 2.92578 2.03025 3.32764 1.62809C3.7295 1.22593 4.27455 1 4.84287 1C5.41119 1 5.95623 1.22593 6.3581 1.62809C6.75996 2.03025 6.98573 2.5757 6.98573 3.14444V4.86" stroke="#9C9B9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <div class="info-ip order-tooltip" onMouseEnter={e => {

                                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                                            document.getElementById('tooltipBtn').innerHTML = `Подсеть 178.213.0.<b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b><b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b><b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b>`;
                                            let posElement = e.target.getBoundingClientRect();
                                            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                            document.getElementById("tooltipBtn").style.top = posElement.y + 25 + "px";
                                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                        }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}><span id="another-ip" style={{ pointerEvents: 'none' }}>178.213.0.<b style={{ fontSize: 11, fontWeight: 300, textDecoration: 'underline' }}>X</b><b style={{ fontSize: 11, fontWeight: 300, textDecoration: 'underline' }}>X</b><b style={{ fontSize: 11, fontWeight: 300, textDecoration: 'underline' }}>X</b></span>
                                        </div>
                                        <div className="ip-icons-position">
                                            <span className="flags ua button-tooltip" onMouseEnter={e => {

                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                document.getElementById('tooltipBtn').innerHTML = 'Компьютер';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>🇺🇦</span>
                                            <img className="wifi-icon button-tooltip" src={wifi} alt="" onMouseEnter={e => {

                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                document.getElementById('tooltipBtn').innerHTML = 'Wi-Fi сеть';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''} />
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="info-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Пользователь подтвердивший заказ<br><span class="text-tooltip">Закрепление происходит автоматически при изменении статуса заказа на «Принят». Используется для расчета зарплаты/премии сотрудника</span>';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Принял:</div>
                            </td>
                            <td className="info-description data-user-block">
                                <Info wrapper={wrapper} setWrapper={setWrapper} view={true} textCalen={'Дата подтверждения заказа'} close={close} textCalen1={'Время подтверждения заказа'} textCalen2={'Принят за 12 мин 22 сек'} />
                            </td>
                        </tr>
                        <tr>
                            <td className="info-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Пользователь отправивший заказ<br><span class="text-tooltip">Автоматически закрепляется последний сотрудник редактировавший заказ, перед подтверждением получения посылки почтовой службой.<br> Используется для расчёта заплаты/премии сотрудника</span>';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Отправил:</div>
                            </td>
                            <td className="info-description data-user-block">
                                <Info wrapper={wrapper} setWrapper={setWrapper} view={true} textCalen={'Дата получения посылки почтовой службой'} close={close} textCalen1={'Время получения посылки почтовой службой'} textCalen2={'Отрпавлен через 12 мин 22 сек'} />

                            </td>
                        </tr>
                        <tr>
                            <td className="info-list">
                                <div onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Последний пользователь изменивший заказ';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>Изменил:</div>
                            </td>
                            <td className="info-description data-user-block">
                                <Info wrapper={wrapper} setWrapper={setWrapper} textCalen={'Дата изменения заказа'} close={close} textCalen1={'Время изменения заказа'} />

                            </td>
                        </tr>
                    </table>
                    <div className="utm-wrapper">
                        <table className="utm-table">
                            <tr>
                                <td className="contact-header utm-header" onMouseEnter={e => {

                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                    document.getElementById('tooltipBtn').innerHTML = 'UTM-метка<br><span class="text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span>';
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>UTM - метки</td>
                            </tr>
                        </table>
                        <div className="utm-block" >
                            <SimpleBar style={{ maxHeight: 115 }}>

                                <table className="">
                                    <tbody>
                                        <tr>
                                            <td className="utm-list"><span onMouseEnter={e => {
                                                timer = setTimeout(() => {

                                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                    document.getElementById('tooltipBtn').innerText = 'Значение utm_source';
                                                    let posElement = e.target.getBoundingClientRect();
                                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                                }, 300)
                                            }}
                                                onMouseLeave={e => {
                                                    document.getElementById("tooltipBtn").style.animation = '';
                                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                    clearTimeout(timer);
                                                }}>Source:</span></td>
                                            <td className="utm-description" onMouseEnter={e => {
                                                timer = setTimeout(() => {
                                                    if (e.target.scrollWidth > e.target.offsetWidth) {

                                                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                        document.getElementById('tooltipBtn').innerText = 'facebook';
                                                        let posElement = e.target.getBoundingClientRect();
                                                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                        document.getElementById("tooltipBtn").style.top = posElement.y + 32 + "px";
                                                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                                    }
                                                }, 300)
                                            }}
                                                onMouseLeave={e => {
                                                    document.getElementById("tooltipBtn").style.animation = '';
                                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                    clearTimeout(timer);
                                                }}>facebook</td>
                                        </tr>
                                        <tr>
                                            <td className="utm-list"><span onMouseEnter={e => {
                                                timer = setTimeout(() => {

                                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                    document.getElementById('tooltipBtn').innerText = 'Значение utm_medium';
                                                    let posElement = e.target.getBoundingClientRect();
                                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                                }, 300)
                                            }}
                                                onMouseLeave={e => {
                                                    document.getElementById("tooltipBtn").style.animation = '';
                                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                    clearTimeout(timer);
                                                }}>Medium:</span></td>
                                            <td className="utm-description" onMouseEnter={e => {
                                                timer = setTimeout(() => {
                                                    if (e.target.scrollWidth > e.target.offsetWidth) {

                                                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                        document.getElementById('tooltipBtn').innerText = 'instalenta_ru';
                                                        let posElement = e.target.getBoundingClientRect();
                                                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                        document.getElementById("tooltipBtn").style.top = posElement.y + 32 + "px";
                                                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                                    }
                                                }, 300)
                                            }}
                                                onMouseLeave={e => {
                                                    document.getElementById("tooltipBtn").style.animation = '';
                                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                    clearTimeout(timer);
                                                }}>instalenta_ru</td>
                                        </tr>
                                        <tr>
                                            <td className="utm-list"><span onMouseEnter={e => {
                                                timer = setTimeout(() => {

                                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                    document.getElementById('tooltipBtn').innerText = 'Значение utm_term';
                                                    let posElement = e.target.getBoundingClientRect();
                                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                                }, 300)
                                            }}
                                                onMouseLeave={e => {
                                                    document.getElementById("tooltipBtn").style.animation = '';
                                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                    clearTimeout(timer);
                                                }}>Term:</span></td>
                                            <td className="utm-description" onMouseEnter={e => {
                                                timer = setTimeout(() => {
                                                    if (e.target.scrollWidth > e.target.offsetWidth) {

                                                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                        document.getElementById('tooltipBtn').innerText = 'fit3';
                                                        let posElement = e.target.getBoundingClientRect();
                                                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                        document.getElementById("tooltipBtn").style.top = posElement.y + 32 + "px";
                                                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                                    }
                                                }, 300)
                                            }}
                                                onMouseLeave={e => {
                                                    document.getElementById("tooltipBtn").style.animation = '';
                                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                    clearTimeout(timer);
                                                }}>fit3</td>
                                        </tr>
                                        <tr>
                                            <td className="utm-list"><span onMouseEnter={e => {
                                                timer = setTimeout(() => {

                                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                    document.getElementById('tooltipBtn').innerText = 'Значение utm_content';
                                                    let posElement = e.target.getBoundingClientRect();
                                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                                }, 300)
                                            }}
                                                onMouseLeave={e => {
                                                    document.getElementById("tooltipBtn").style.animation = '';
                                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                    clearTimeout(timer);
                                                }}>Content:</span></td>
                                            <td className="utm-description" onMouseEnter={e => {
                                                timer = setTimeout(() => {
                                                    if (e.target.scrollWidth > e.target.offsetWidth) {

                                                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                        document.getElementById('tooltipBtn').innerText = 'tex1';
                                                        let posElement = e.target.getBoundingClientRect();
                                                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                        document.getElementById("tooltipBtn").style.top = posElement.y + 32 + "px";
                                                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                                    }
                                                }, 300)
                                            }}
                                                onMouseLeave={e => {
                                                    document.getElementById("tooltipBtn").style.animation = '';
                                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                    clearTimeout(timer);
                                                }}>tex1</td>
                                        </tr>
                                        <tr>
                                            <td className="utm-list"><span onMouseEnter={e => {
                                                timer = setTimeout(() => {

                                                    document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                    document.getElementById('tooltipBtn').innerText = 'Значение utm_campaign';
                                                    let posElement = e.target.getBoundingClientRect();
                                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                                    document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                                }, 300)
                                            }}
                                                onMouseLeave={e => {
                                                    document.getElementById("tooltipBtn").style.animation = '';
                                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                    clearTimeout(timer);
                                                }}>Campaign:</span></td>
                                            <td className="utm-description" onMouseEnter={e => {
                                                timer = setTimeout(() => {
                                                    if (e.target.scrollWidth > e.target.offsetWidth) {

                                                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                        document.getElementById('tooltipBtn').innerText = 'мамы_25_60_18_30 34df sdfd fsdfs df';
                                                        let posElement = e.target.getBoundingClientRect();
                                                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                        document.getElementById("tooltipBtn").style.top = posElement.y + 32 + "px";
                                                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                                    }
                                                }, 300)
                                            }}
                                                onMouseLeave={e => {
                                                    document.getElementById("tooltipBtn").style.animation = '';
                                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                    clearTimeout(timer);
                                                }}>мамы_25_60_18_30 34df sdfd fsdfs df</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </SimpleBar>
                        </div>
                    </div>
                </div>
                <div className="wrap-products-sale">
                    <button className="btnplus" id="btnAddProduct" onMouseEnter={e => {
                        timer = setTimeout(() => {

                            document.getElementById("tooltipBtn").style.fontSize = '14px';
                            document.getElementById('tooltipBtn').innerText = 'Добавить товар';
                            let posElement = e.target.getBoundingClientRect();
                            document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth + posElement.width + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 25 + "px";
                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                        }, 300)
                    }}
                        onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                        }} onClick={e => {
                            setAddRow(true);
                            recalc('product');
                            setTitle('');
                            setWrapper(true);
                        }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 14.6666H4.00004C2.53337 14.6666 1.33337 13.4666 1.33337 11.9999V3.99992C1.33337 2.53325 2.53337 1.33325 4.00004 1.33325H12C13.4667 1.33325 14.6667 2.53325 14.6667 3.99992V11.9999C14.6667 13.4666 13.4667 14.6666 12 14.6666Z" stroke="black" stroke-opacity="" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.99988 10.6668V5.3335" stroke="black" stroke-opacity="" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.6666 8.00024H5.33325" stroke="black" stroke-opacity="" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <SimpleBar className="product-table-scroll" style={{ overflow: 'hidden' }} autoHide={false}>
                        <table className="product-table">
                            <thead className="product-table-thead">
                                <tr>
                                    <td colSpan="8" className="contact-header"><span onMouseEnter={e => {
                                        timer = setTimeout(() => {

                                            document.getElementById("tooltipBtn").style.fontSize = '14px';
                                            document.getElementById('tooltipBtn').innerText = 'Товар учавствующий в заказе';
                                            let posElement = e.target.getBoundingClientRect();
                                            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                            document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                            document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                        }, 300)
                                    }}
                                        onMouseLeave={e => {
                                            document.getElementById("tooltipBtn").style.animation = '';
                                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                                            clearTimeout(timer);
                                        }}>Товар</span></td>
                                </tr>
                                <tr>
                                    <td className="product-id"></td>
                                    <td className="product-id" ><span className="id" onMouseEnter={e => {
                                        timer = setTimeout(() => {

                                            document.getElementById("tooltipBtn").style.fontSize = '14px';
                                            document.getElementById('tooltipBtn').innerText = 'Идентификатор/код товара';
                                            let posElement = e.target.getBoundingClientRect();
                                            document.getElementById("tooltipBtn").style.left = posElement.x - 8 + "px";
                                            document.getElementById("tooltipBtn").style.top = posElement.y + 33 + "px";
                                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                        }, 300)
                                    }}
                                        onMouseLeave={e => {
                                            document.getElementById("tooltipBtn").style.animation = '';
                                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                                            clearTimeout(timer);
                                        }}>ID</span></td>
                                    <td className="product-id" ><span className="tovar" onMouseEnter={e => {
                                        timer = setTimeout(() => {

                                            document.getElementById("tooltipBtn").style.fontSize = '14px';
                                            document.getElementById('tooltipBtn').innerText = 'Название группы товара';
                                            let posElement = e.target.getBoundingClientRect();
                                            document.getElementById("tooltipBtn").style.left = posElement.x - (document.querySelector('.product-table .tovar').parentElement.offsetWidth / 2 - 22) + "px";
                                            document.getElementById("tooltipBtn").style.top = posElement.y + 33 + "px";
                                            document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';

                                        }, 300)
                                    }}
                                        onMouseLeave={e => {
                                            document.getElementById("tooltipBtn").style.animation = '';
                                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                                            clearTimeout(timer);
                                        }}>Товар</span></td>
                                    <td className="product-id" ><span className="attr" onMouseEnter={e => {
                                        timer = setTimeout(() => {

                                            document.getElementById("tooltipBtn").style.fontSize = '14px';
                                            document.getElementById('tooltipBtn').innerText = 'Уникальный признак товара';
                                            let posElement = e.target.getBoundingClientRect();
                                            document.getElementById("tooltipBtn").style.left = posElement.x - 28 + "px";
                                            document.getElementById("tooltipBtn").style.top = posElement.y + 33 + "px";
                                            document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';

                                        }, 300)
                                    }}
                                        onMouseLeave={e => {
                                            document.getElementById("tooltipBtn").style.animation = '';
                                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                                            clearTimeout(timer);
                                        }}>Атрибут</span></td>
                                    <td className="product-id" ><span className="cena" onMouseEnter={e => {
                                        timer = setTimeout(() => {

                                            document.getElementById("tooltipBtn").style.fontSize = '14px';
                                            document.getElementById('tooltipBtn').innerText = 'Стоимость продажи единицы товара';
                                            let posElement = e.target.getBoundingClientRect();

                                            let posElement2 = e.target.parentElement.getBoundingClientRect();
                                            let widthElem = e.target.parentElement.offsetWidth;
                                            let tooltipELem = document.querySelector('#tooltipBtn').offsetWidth;
                                            let result = (tooltipELem - widthElem) / 2;

                                            document.getElementById("tooltipBtn").style.left = posElement2.x - result - 1 + "px";
                                            document.getElementById("tooltipBtn").style.top = posElement.y + 33 + "px";
                                            document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';

                                        }, 300)
                                    }}
                                        onMouseLeave={e => {
                                            document.getElementById("tooltipBtn").style.animation = '';
                                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                                            clearTimeout(timer);
                                        }}>Цена</span></td>
                                    <td className="product-id" ><span className="kolvo" onMouseEnter={e => {
                                        timer = setTimeout(() => {

                                            document.getElementById("tooltipBtn").style.fontSize = '14px';
                                            document.getElementById('tooltipBtn').innerText = 'Количество товаров в заказе';
                                            let posElement = e.target.getBoundingClientRect();
                                            let posElement2 = e.target.parentElement.getBoundingClientRect();
                                            let widthElem = e.target.parentElement.offsetWidth;
                                            let tooltipELem = document.querySelector('#tooltipBtn').offsetWidth;
                                            let result = (tooltipELem - widthElem) / 2;

                                            document.getElementById("tooltipBtn").style.left = posElement2.x - result - 1 + "px";
                                            document.getElementById("tooltipBtn").style.top = posElement.y + 33 + "px";
                                            document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';

                                        }, 300)
                                    }}
                                        onMouseLeave={e => {
                                            document.getElementById("tooltipBtn").style.animation = '';
                                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                                            clearTimeout(timer);
                                        }}>Кол-во</span></td>
                                    <td className="product-id" ><span className="itogo" onMouseEnter={e => {
                                        timer = setTimeout(() => {

                                            document.getElementById("tooltipBtn").style.fontSize = '14px';
                                            document.getElementById('tooltipBtn').innerText = 'Суммарная стоимость товара';
                                            let posElement = e.target.getBoundingClientRect();
                                            let posElement2 = e.target.parentElement.getBoundingClientRect();
                                            let widthElem = e.target.parentElement.offsetWidth;
                                            let tooltipELem = document.querySelector('#tooltipBtn').offsetWidth;
                                            let result = (tooltipELem - widthElem);

                                            document.getElementById("tooltipBtn").style.left = posElement2.x - result - 1 + "px";
                                            document.getElementById("tooltipBtn").style.top = posElement.y + 33 + "px";
                                            document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';

                                        }, 300)
                                    }}
                                        onMouseLeave={e => {
                                            document.getElementById("tooltipBtn").style.animation = '';
                                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                                            clearTimeout(timer);
                                        }}>Итого</span></td>
                                    <td className="product-id" ></td>
                                </tr>
                                <tr>
                                    <td colSpan="8">
                                        <div className="bg-white-for-shadow"></div>
                                        <div className="shadow-gradient"></div>
                                    </td>
                                </tr>
                            </thead>
                            <tbody className="product-table-tbody">
                                {array.map((row, index) => <Row setArray={setArray} index={index} index={index} array={array} row={row} wrapper={wrapper} setWrapper={setWrapper} setAdditionally={setAdditionally} recalc={recalc} />)}
                                {<NewRow addRow={addRow} className={'product-table-scroll'} />}
                            </tbody>
                            <tfoot className="product-table-tfoot">
                                <tr>
                                    <td colSpan="8">
                                        <div className="bg-white-for-shadow"></div>
                                        <div className="shadow-gradient"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="5"></td>
                                    <td><span className="sum-number">{array.reduce((x, y) => x + y.number, 0)}</span></td>
                                    <td>
                                        <span className="sum-all product-number-format">{[...document.querySelectorAll('.product-table .all-price')].reduce((x, y) => x += parseFloat(y.innerText.replaceAll(' ', '')), 0).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.')}</span>
                                    </td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>
                    </SimpleBar>
                    <div className="product-order-dropdown">
                        <div id="tooltipBtnImages">
                            {/* <div class="img-product-order"><img src="http://vanl0073259.online-vm.com:3001/img/roz-nosok1.jpg" alt="" /></div> */}
                        </div>
                        <div className="product-order-input">
                            <input className="product-order-search" onChange={e => {
                                if (e.target.value !== '') {
                                    let temp = e.target.value[0].toUpperCase() + e.target.value.slice(1);
                                    e.target.value = temp;
                                    setValue(temp);
                                } else {
                                    setValue(e.target.value);
                                }
                            }} type="text" />
                            <div className="product-order-count" onMouseEnter={e => {
                                timer = setTimeout(() => {

                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                    document.getElementById('tooltipBtn').innerHTML = 'Групп товаров в фильтре:<br>- найдено ' + Object.keys(product).length;
                                    let posElement = e.target.getBoundingClientRect();

                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                }, 300)
                            }}
                                onMouseLeave={e => {
                                    document.getElementById("tooltipBtn").style.animation = '';
                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                    clearTimeout(timer);
                                }}>({Object.keys(product).length})</div>
                        </div>
                        <div className="product-btn-menu" >
                            <SimpleBar style={{ maxHeight: 90 }} autoHide={false}>
                                {Object.keys(product).filter(x => product[x].title.toLowerCase().includes(value.toLowerCase())).map(x => <div className="product-menu-list" onMouseEnter={e => {
                                    setTitle(x);
                                    let blockpos = document.querySelector('.product-order-dropdown').getBoundingClientRect();
                                    document.querySelector('.product-attribute-menu').style.left = blockpos.width + 'px';
                                    document.querySelector('.product-attribute-menu').style.visibility = 'visible';

                                    setTimeout(() => {
                                        let orderPos = document.querySelector('.order').getBoundingClientRect();
                                        let pos = e.target.getBoundingClientRect();
                                        let orderPostPlus = orderPos.y + 586;
                                        let resultOrderPos = pos.y + document.querySelector('.product-attribute-menu').offsetHeight;
                                        let resultPos2 = pos.y - blockpos.y;
                                        if (orderPostPlus < resultOrderPos) {
                                            let newAdaptiveHeight = resultOrderPos - orderPostPlus;

                                            document.querySelector('.product-attribute-menu')
                                                .style.top = resultPos2 - newAdaptiveHeight + 'px';
                                            document.querySelector('.product-attribute-menu')
                                                .style.visibility = 'visible';
                                            document.querySelector('.product-attribute-menu')
                                                .style.opacity = 1;
                                        } else {
                                            let posElement = e.target.getBoundingClientRect();
                                            let resultPos = posElement.y - blockpos.y;
                                            document.querySelector('.product-attribute-menu')
                                                .style.top = resultPos - 4 + 'px';
                                            document.querySelector('.product-attribute-menu')
                                                .style.visibility = 'visible';
                                            document.querySelector('.product-attribute-menu')
                                                .style.opacity = 1;
                                        }
                                    }, 0);

                                }} dangerouslySetInnerHTML={{ __html: searchUndreline(product[x].title) }}></div>)}
                            </SimpleBar>
                        </div>
                        <div className="product-attribute-menu" style={title === '' ? { visibility: 'hidden' } : { visibility: 'visible' }}>
                            <div className="product-attribute-wrapper" >
                                <SimpleBar style={{ maxHeight: 142 }} autoHide={false}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th colSpan="4" className="product-attribute-tooltip"><span className='flags'>🇺🇦</span><b dangerouslySetInnerHTML={{ __html: searchUndreline(product[title]?.title) }}></b></th>
                                            </tr>
                                            <tr className="product-attribute-header">
                                                <th>
                                                    <span className="id-attr-menu" onMouseEnter={e => {
                                                        timer = setTimeout(() => {

                                                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                            document.getElementById('tooltipBtn').innerText = 'Идентификатор/код товара';
                                                            let posElement = e.target.getBoundingClientRect();
                                                            document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
                                                            document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                                                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                                        }, 300)
                                                    }}
                                                        onMouseLeave={e => {
                                                            document.getElementById("tooltipBtn").style.animation = '';
                                                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                            clearTimeout(timer);
                                                        }}>ID</span>
                                                    <div className="count-product" onMouseEnter={e => {
                                                        timer = setTimeout(() => {

                                                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                            document.getElementById('tooltipBtn').innerHTML = 'Групп товаров в фильтре:<br>- найдено ' + product[title].attributes.length;
                                                            let posElement = e.target.getBoundingClientRect();

                                                            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                            document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                                        }, 300)
                                                    }}
                                                        onMouseLeave={e => {
                                                            document.getElementById("tooltipBtn").style.animation = '';
                                                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                            clearTimeout(timer);
                                                        }}> ({product[title]?.attributes.length})</div>
                                                </th>
                                                <th><span className="attr-attr-menu" onMouseEnter={e => {
                                                    timer = setTimeout(() => {

                                                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                        document.getElementById('tooltipBtn').innerText = 'Уникальный признак товара';
                                                        let posElement = e.target.getBoundingClientRect();
                                                        document.getElementById("tooltipBtn").style.left = posElement.x - 27 + "px";
                                                        document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                                                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                                    }, 300)
                                                }}
                                                    onMouseLeave={e => {
                                                        document.getElementById("tooltipBtn").style.animation = '';
                                                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                        clearTimeout(timer);
                                                    }}>Атрибут</span></th>
                                                <th><span className="nal-attr-menu" onMouseEnter={e => {
                                                    timer = setTimeout(() => {

                                                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                        document.getElementById('tooltipBtn').innerHTML = 'Количество забронированных товаров и в наличии<br><br>Бронирование/добавление товара в заказ с «соответствующим» статусом, списывает его из наличия';
                                                        let posElement = e.target.getBoundingClientRect();
                                                        let posElement2 = e.target.parentElement.getBoundingClientRect();
                                                        let widthElem = e.target.parentElement.offsetWidth;
                                                        let tooltipELem = document.querySelector('#tooltipBtn').offsetWidth;
                                                        let result = (tooltipELem - widthElem);

                                                        document.getElementById("tooltipBtn").style.left = posElement2.x - result - 1 + "px";
                                                        document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                                                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                                    }, 300)
                                                }}
                                                    onMouseLeave={e => {
                                                        document.getElementById("tooltipBtn").style.animation = '';
                                                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                        clearTimeout(timer);
                                                    }}>Нал-ие</span></th>
                                                <th><span className="cena-attr-menu" onMouseEnter={e => {
                                                    timer = setTimeout(() => {

                                                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                        document.getElementById('tooltipBtn').innerText = 'Цена продажи по умолчанию';
                                                        let posElement = e.target.getBoundingClientRect();
                                                        let posElement2 = e.target.parentElement.getBoundingClientRect();
                                                        let widthElem = e.target.parentElement.offsetWidth;
                                                        let tooltipELem = document.querySelector('#tooltipBtn').offsetWidth;
                                                        let result = (tooltipELem - widthElem);

                                                        document.getElementById("tooltipBtn").style.left = posElement2.x - result - 1 + "px";
                                                        document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                                                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                                    }, 300)
                                                }}
                                                    onMouseLeave={e => {
                                                        document.getElementById("tooltipBtn").style.animation = '';
                                                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                        clearTimeout(timer);
                                                    }}>Цена</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product[title]?.attributes && product[title]?.attributes.map(x => <tr onClick={e => {
                                                if (addRow === true) {
                                                    setAddRow(false); setArray([...array, { ...x, title: product[title].title }]); setWrapper(false);
                                                } else {
                                                    setAddAdditionallyRow(false); setArrayAdd([...arrayAdd, { ...x, title: product[title].title }]); setWrapper(false);
                                                }
                                            }}><td className='id-product-list targetSelectBtn'><span>{x.id}</span></td><td className='attr-product-list' ><span onMouseEnter={e => {


                                                let image = document.querySelector('#tooltipBtnImages');
                                                image.innerHTML = `<div class="img-product-order"><img src="http://vanl0073259.online-vm.com:3001/img/roz-nosok1.jpg" alt=""></div></div>`;
                                                let posElement = document.querySelector('.product-btn-menu').getBoundingClientRect();
                                                let kartochka = document.querySelector('.order').getBoundingClientRect();
                                                let visotaKartochki = kartochka.y + 586;
                                                let visotablokov = posElement.y + document.querySelector('.product-btn-menu').offsetHeight + document.querySelector('.product-btn-menu').offsetWidth;
                                                image.style.left = '0px';
                                                image.style.position = 'absolute';

                                                image.style.width = document.querySelector('.product-btn-menu').offsetWidth + 'px';
                                                image.style.height = document.querySelector('.product-btn-menu').offsetWidth + 'px';
                                                image.style.top = (document.querySelector('.product-btn-menu').offsetHeight + 23) + 'px';
                                                image.style.borderTop = '1px solid #d9d9d9';
                                                image.style.borderBottom = '';


                                                if (visotaKartochki < visotablokov) {
                                                    image.style.left = '0px';
                                                    image.style.position = 'absolute';
                                                    image.style.width = document.querySelector('.product-btn-menu').offsetWidth + 'px';
                                                    image.style.height = document.querySelector('.product-btn-menu').offsetWidth + 'px';
                                                    image.style.top = -(document.querySelector('.product-btn-menu').offsetWidth) + 'px';
                                                    image.style.borderTop = '';
                                                    image.style.borderBottom = '1px solid #d9d9d9';
                                                }
                                                document.getElementById("tooltipBtnImages").style.animation = 'delay-btn 0.3s forwards';


                                                if (e.target.scrollWidth > e.target.offsetWidth) {

                                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                    document.getElementById('tooltipBtn').innerText = x.name;
                                                    let posElement = e.target.getBoundingClientRect();
                                                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                    document.getElementById("tooltipBtn").style.top = posElement.y + 13 + "px";
                                                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                                }
                                            }} onMouseLeave={e => {
                                                document.getElementById("tooltipBtn").style.animation = '';
                                                document.getElementById("tooltipBtnImages").style.animation = '';
                                                document.querySelector('#tooltipBtnImages').innerHTML = '';
                                                document.querySelector('#tooltipBtnImages').style.borderTop = '';
                                                document.querySelector('#tooltipBtnImages').style.borderBottom = '';
                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                clearTimeout(timer);
                                            }}>{x.name}</span></td><td className='number-product-list'><span onMouseEnter={e => {
                                                    if (x?.reserve) {
                                                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                        document.getElementById('tooltipBtn').innerHTML = 'Товар:<br>- В наличии 5<br>- Забронирован 23';
                                                        let posElement = e.target.getBoundingClientRect();
                                                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                        document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
                                                    }
                                            }}
                                                onMouseLeave={e => {
                                                    document.getElementById("tooltipBtn").style.animation = '';
                                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                    clearTimeout(timer);
                                                }}>{x.number}{x?.reserve && <b style={{ color: 'rgba(0,0,0,0.5)' }} dangerouslySetInnerHTML={{ __html: `/${x?.reserve}` }}></b>}</span></td><td className='price-product-list'><span>{x.price}</span></td></tr>)}
                                        </tbody>
                                    </table>
                                </SimpleBar>
                            </div>
                        </div>
                    </div>
                    <SimpleBar className="dop-product-table-scroll" style={{ overflow: 'hidden' }} autoHide={false}>

                        <table className="dop-sale-table">
                            <thead className="dop-product-table-thead">
                                <tr>
                                    <td colSpan="8" className="contact-header">
                                        <span onMouseEnter={e => {
                                            timer = setTimeout(() => {

                                                document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                document.getElementById('tooltipBtn').innerHTML = `Дополнительно проданный товар <br/> <span class="text-tooltip">Используется для расчета зарплаты/премии сотрудника</span>`;
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-header-order 1s forwards';

                                            }, 300)
                                        }}
                                            onMouseLeave={e => {
                                                document.getElementById("tooltipBtn").style.animation = '';
                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                clearTimeout(timer);
                                            }}>Доппродажа</span>
                                        <label className="switch add-dop-product" onMouseEnter={e => {
                                            setHoverAddition(true);
                                            timer = setTimeout(() => {

                                                document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                document.getElementById('tooltipBtn').innerText = !additionally ? 'Добавить допродажу' : 'Удалить все допродажи';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 25 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }, 300)
                                        }}
                                            onMouseLeave={e => {
                                                setHoverAddition(false);
                                                document.getElementById("tooltipBtn").style.animation = '';
                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                clearTimeout(timer);
                                            }}>
                                            <input type="checkbox"
                                                onClick={e => {
                                                    setAdditionally(!additionally);
                                                    if (!additionally) {
                                                        setAddAdditionallyRow(true)
                                                        setWrapper(true);
                                                        setTitle('');
                                                        setTimeout(() => {
                                                            recalc('additionally', true, prePaymentValue);

                                                        }, 100);
                                                    } else {
                                                        setAddAdditionallyRow(false)
                                                        setArrayAdd([])
                                                        setTimeout(() => {

                                                            recalc('additionally', false, prePaymentValue);
                                                        }, 100)
                                                    }
                                                }
                                                } />
                                            <span className="slider round"></span>
                                        </label>

                                        <button className="dop-btn" id="btnAddDopProduct" onMouseEnter={e => {
                                            timer = setTimeout(() => {

                                                document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                document.getElementById('tooltipBtn').innerText = 'Добавить товар';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth + posElement.width + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }, 300)
                                        }}
                                            onMouseLeave={e => {
                                                document.getElementById("tooltipBtn").style.animation = '';
                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                clearTimeout(timer);
                                            }} style={additionally ? { display: 'block' } : {}} onClick={e => {
                                                setAddAdditionallyRow(true);
                                                setTitle('');
                                                recalc('additionally'); setWrapper(true);
                                            }}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 14.6666H4.00004C2.53337 14.6666 1.33337 13.4666 1.33337 11.9999V3.99992C1.33337 2.53325 2.53337 1.33325 4.00004 1.33325H12C13.4667 1.33325 14.6667 2.53325 14.6667 3.99992V11.9999C14.6667 13.4666 13.4667 14.6666 12 14.6666Z" stroke="black" stroke-opacity="" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M7.99988 10.6668V5.3335" stroke="black" stroke-opacity="" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M10.6666 8.00024H5.33325" stroke="black" stroke-opacity="" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                {additionally && <>
                                    <tr style={additionally && hoverAddition ? { opacity: 0.5 } : { color: 'rgb(0, 0, 0)' }}>
                                        <td className="sale-id"></td>
                                        <td className="sale-id"><span className="order-tooltip id" onMouseEnter={e => {
                                            timer = setTimeout(() => {

                                                document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                document.getElementById('tooltipBtn').innerText = 'Идентификатор/код товара';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x - 8 + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 33 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }, 300)
                                        }}
                                            onMouseLeave={e => {
                                                document.getElementById("tooltipBtn").style.animation = '';
                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                clearTimeout(timer);
                                            }}>ID</span></td>
                                        <td className="sale-id"><span className="order-tooltip tovar" onMouseEnter={e => {
                                            timer = setTimeout(() => {

                                                document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                document.getElementById('tooltipBtn').innerText = 'Название группы товара';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x - (document.querySelector('.dop-sale-table .tovar').parentElement.offsetWidth / 2 - 22) + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 33 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }, 300)
                                        }}
                                            onMouseLeave={e => {
                                                document.getElementById("tooltipBtn").style.animation = '';
                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                clearTimeout(timer);
                                            }}>Товар</span></td>
                                        <td className="sale-id"><span className="order-tooltip attr" onMouseEnter={e => {
                                            timer = setTimeout(() => {

                                                document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                document.getElementById('tooltipBtn').innerText = 'Уникальный признак товара';
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x - 28 + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 33 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }, 300)
                                        }}
                                            onMouseLeave={e => {
                                                document.getElementById("tooltipBtn").style.animation = '';
                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                clearTimeout(timer);
                                            }}>Атрибут</span></td>
                                        <td className="sale-id"><span className="order-tooltip cena" onMouseEnter={e => {
                                            timer = setTimeout(() => {

                                                document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                document.getElementById('tooltipBtn').innerText = 'Стоимость продажи единицы товара';
                                                let posElement = e.target.getBoundingClientRect();

                                                let posElement2 = e.target.parentElement.getBoundingClientRect();
                                                let widthElem = e.target.parentElement.offsetWidth;
                                                let tooltipELem = document.querySelector('#tooltipBtn').offsetWidth;
                                                let result = (tooltipELem - widthElem) / 2;

                                                document.getElementById("tooltipBtn").style.left = posElement2.x - result - 1 + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 33 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }, 300)
                                        }}
                                            onMouseLeave={e => {
                                                document.getElementById("tooltipBtn").style.animation = '';
                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                clearTimeout(timer);
                                            }}>Цена</span></td>
                                        <td className="sale-id"><span className="order-tooltip kolvo" onMouseEnter={e => {
                                            timer = setTimeout(() => {

                                                document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                document.getElementById('tooltipBtn').innerText = 'Количество товаров в заказе';
                                                let posElement = e.target.getBoundingClientRect();
                                                let posElement2 = e.target.parentElement.getBoundingClientRect();
                                                let widthElem = e.target.parentElement.offsetWidth;
                                                let tooltipELem = document.querySelector('#tooltipBtn').offsetWidth;
                                                let result = (tooltipELem - widthElem) / 2;

                                                document.getElementById("tooltipBtn").style.left = posElement2.x - result - 1 + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 33 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }, 300)
                                        }}
                                            onMouseLeave={e => {
                                                document.getElementById("tooltipBtn").style.animation = '';
                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                clearTimeout(timer);
                                            }}>Кол-во</span></td>
                                        <td className="sale-id"><span className="order-tooltip itogo" onMouseEnter={e => {
                                            timer = setTimeout(() => {

                                                document.getElementById("tooltipBtn").style.fontSize = '14px';
                                                document.getElementById('tooltipBtn').innerText = 'Суммарная стоимость товара';
                                                let posElement = e.target.getBoundingClientRect();
                                                let posElement2 = e.target.parentElement.getBoundingClientRect();
                                                let widthElem = e.target.parentElement.offsetWidth;
                                                let tooltipELem = document.querySelector('#tooltipBtn').offsetWidth;
                                                let result = (tooltipELem - widthElem);

                                                document.getElementById("tooltipBtn").style.left = posElement2.x - result - 1 + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y + 33 + "px";
                                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                                            }, 300)
                                        }}
                                            onMouseLeave={e => {
                                                document.getElementById("tooltipBtn").style.animation = '';
                                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                                clearTimeout(timer);
                                            }}>Итого</span></td>
                                        <td className="sale-id"></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="8">
                                            <div className="bg-white-for-shadow"></div>
                                            <div className="shadow-gradient"></div>
                                        </td>
                                    </tr>
                                </>}
                            </thead>
                            <tbody className="dop-product-table-tbody" style={additionally && hoverAddition ? { opacity: 0.5 } : {}}>
                                {arrayAdd.map((row, index) => <Row row={row} setArray={setArrayAdd} array={arrayAdd} index={index} wrapper={wrapper} setWrapper={setWrapper} setAdditionally={setAdditionally} recalc={recalc} />)}
                                {<NewRow addRow={addAdditionallyRow} className={'dop-product-table-scroll'} />}
                            </tbody>
                            <tfoot className="dop-product-table-tfoot">
                                {additionally && <><tr style={additionally && hoverAddition ? { opacity: 0.5 } : {}}>
                                    <td colSpan="8">
                                        <div className="bg-white-for-shadow"></div>
                                        <div className="shadow-gradient"></div>
                                    </td>
                                </tr>
                                    <tr style={additionally && hoverAddition ? { opacity: 0.5 } : {}}>

                                        <td colSpan="5"></td>
                                        <td><span className="sum-number">{arrayAdd.reduce((x, y) => x + y.number, 0)}</span></td>
                                        <td>
                                            <span className="sum-all product-number-format">{[...document.querySelectorAll('.dop-sale-table .all-price')].reduce((x, y) => x += parseFloat(y.innerText.replaceAll(' ', '')), 0).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.')}</span>
                                        </td>
                                        <td></td>
                                    </tr> </>}
                            </tfoot>
                        </table>
                    </SimpleBar>

                    <div className="product-money-block">
                        <div className="money-block-sum"><span>Сумма заказа</span><span className="">{([...document.querySelectorAll('.product-table .all-price')].reduce((x, y) => x += parseFloat(y.innerText.replaceAll(' ', '')), 0) + [...document.querySelectorAll('.dop-sale-table .all-price')].reduce((x, y) => x += parseFloat(y.innerText.replaceAll(' ', '')), 0)).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.')}</span></div>
                        <div className="money-block-prepayment">
                            <span>Предоплата</span>

                            <PrePaymentInput wrapper={wrapper} setWrapper={setWrapper} recalc={recalc} prePaymentAccept={prePaymentAccept} prePaymentValue={prePaymentValue} setPrePaymentAccept={setPrePaymentAccept} setPrePaymentValue={setPrePaymentValue} />

                        </div>
                        <div className="money-block-surplus" style={prePaymentValue !== '0.00' ? { height: 14 } : {}}><span>Остаток</span><span>{(array.reduce((x, y) => x + (y.price * y.number), 0) + arrayAdd.reduce((x, y) => x + (y.price * y.number), 0) - prePaymentValue).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.')}</span></div>
                    </div>
                    <div className="btn-save-close"><button className="save-btn">Сохранить и закрыть</button></div>
                </div>
            </div>
        </div>
    </div >)
}



export default Modal;