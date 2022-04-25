import React, { useEffect, useState, useRef } from 'react';
import './input.css';
import * as hints from '../../until/hints'

import { formatPhone, recognizeOperator} from '@jaood/phone-numbers'
 
const options = [
    { key: '2', icon: 'icon-Vector-1', title: hints.vodofone },
    { key: '3', icon: 'icon-Union-1', title: hints.kyivstar },
    { key: '4', icon: 'icon-Vector-3', title: hints.lifecell },
    { key: '5', icon: 'icon-Union-18', title: hints.incorrectNumber },
    { key: '6', icon: 'icon-Union', title: hints.unknownNumber },
    { key: '7', icon: 'icon-uniE941', title: 'Номер не указан' }

]
export const LoginInput = ({ title, type, value, onChange, refs }) => (
    <div className={'input'}>
        <label>{title}</label>
        <input type={type} ref={refs} defaultValue={value} onChange={onChange} />
    </div>
)
function parserText(text, type, count) {
    let start = text.length;
    if (type === 'purchaser') {
        let parse = text.toLowerCase();
        let temp = parse.replace(/[^а-яёa-zA-ZЁА-Я "'-]/g, x => '').replace(/([ -]|^)[а-яёa-z]/g, x => x.toUpperCase())
            .replace(/( |-|')(?=\1)/g, x => "").replace(/"/g, x => "'");
        return [temp.slice(0, 80), start - temp.length]
    } else if (type === 'phone') {
        let temp = text.replace(/[^0-9]/g, x => x = "")
        let len = temp.length;

        temp = temp.slice(0, count);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'ppo') {
        let temp = text.replace(/[^0-9a-z-]/g, x => x = "")
        let len = temp.length;
        temp = temp.slice(0, count);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'add') {
        let temp;
        if (text.match(/(^)[а-яёa-z]/g))
            temp = text[0].toUpperCase() + text.slice(1);
        else
            temp = text;
        let len = temp?.length;
        temp = temp.slice(0, count);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'id') {
        let temp = text.replace(/[^0-9]/g, x => x = "")
        let len = temp.length;
        temp = temp.slice(0, 7);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'ip') {
        let temp = text.replace(/[^0-9.,]/g, x => x = "").replace(/,/g, x => ".").replace(/(\.)(?=\1)/g, x => "")
        let len = temp.length;
        temp = temp.slice(0, 15);
        return [temp, start - temp.length - (len - temp.length)]
    }
    else if (type === 'price') {
        let temp = text.replace(/[^0-9.,]/g, x => x = "").replace(/,/g, x => ".").replace(/(\.)(?=\1)/g, x => "").replace(/\.(?=.*\..*)/g, x => "")
        let len = temp.length;
        temp = temp.slice(0, 10);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'comment') {
        let temp;
        if (text.match(/(^)[а-яёa-z]/g))
            temp = text[0].toUpperCase() + text.slice(1);
        else
            temp = text;
        if (count === '200') {
            temp = temp.replace(/( )(?=\1)/g, x => "")
        }
        let len = temp.length;
        temp = temp.slice(0, count);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'site') {
        let temp = text.replace(/(^https?:\/\/|www.)/g, x => '');
        temp = temp.replace(/[^а-яёa-zA-ZЁА-Я0-9.\/%?=&+_-]/g, x => '')
        if (temp.match(/(^)[а-яёa-z]/g))
            temp = temp[0].toUpperCase() + temp.slice(1);
        else
            temp = temp;
        return [temp.slice(0, 500), start - temp.length]
    } else if (type === 'find') {
        let temp;
        if (text.match(/(^)[а-яёa-z]/g))
            temp = text[0].toUpperCase() + text.slice(1);
        else
            temp = text;
        let len = temp.length;
        return [temp, start - temp.length - (len - temp.length)]
    }

}


let timer = null;
export const SearchInput = ({ type, len, name, onWrapper, wrapper, id, refresh, search, keys, setArr }) => {
    let refInput = useRef();
    let [sort, setSort] = useState('');
    let [show, setShow] = useState(false);
    let [select, setSelect] = useState(false);
    let [refreshBtn, setRefreshBtn] = useState(refresh);

    useEffect(() => {
        if (!wrapper && select) {
            setSelect(false)
        }

        if (refreshBtn !== refresh) {
            setSort('')
            setShow(false)
            setSelect(false)
            setRefreshBtn(refresh)
            refInput.current.value = ''
        }
    }, [wrapper, refresh]);

    let onPress = e => {
        let caretStart = e.target.selectionStart;
        let caretEnd = e.target.selectionEnd;
        let temp = parserText(e.target.value, type, len);
        e.target.value = temp[0];
        search[keys] = temp[0].length === 0 ? '' : temp[0];

        e.target.setSelectionRange(caretStart - temp[1], caretEnd - temp[1]);
        if (!wrapper) {
            setShow(true);
            setSelect(true)
            onWrapper(true)
        }
    }

    let onInput = e => {
        if (e.inputType === 'insertFromPaste') {
            let temp = parserText(e.target.value, type, len);
            e.target.value = temp[0];

            if ((temp[0].length > 0) && !wrapper) {
                onWrapper(true)
            }
        }

    }

    let onOpen = e => {
        if (!wrapper)
            setShow(true);
    }

    let onClose = e => {
        clearTimeout(timer)
        setShow(false);
    }



    let onClick = e => {
        if (sort === '' || sort === 'down') {
            setSort('up')
            search['orders'] = [[keys, "ASC"]]

            fetch('http://vanl0073259.online-vm.com:3005/search', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "query": Object.filter(search, ([name, text]) => text !== ''),
                    "end": Math.ceil((document.body.clientHeight / (18))) * 3
                })
            }).then(x => x.json()).then(x => {
                let arrays = x.map(x => { return { ...x, select: false } })
                console.log(arrays.length);
                setArr(arrays, 'wrapper');
            });

        } else if (sort === 'up') {
            setSort('down')
            search['orders'] = [[keys, "DESC"]]

            fetch('http://vanl0073259.online-vm.com:3005/search', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "query": Object.filter(search, ([name, text]) => text !== ''),
                    "end": Math.ceil((document.body.clientHeight / (18))) * 3
                })
            }).then(x => x.json()).then(x => {
                let arrays = x.map(x => { return { ...x, select: false } })
                console.log(arrays.length);
                setArr(arrays, 'wrapper');
            });

        }
        onWrapper(false);
        onClose()
        setSelect(false)

    }

    let keyDown = (e) => {
        if (e.keyCode === 13) {
            onWrapper(false);
            onClose()
            setSelect(false)
            refInput.current.blur()
        }
    }

    let onMouseEnter = e => {
        if (!wrapper) {
            setShow(true);

            timer = setTimeout(() => {
                e.target.setSelectionRange(e.target.value.length, e.target.value.length);
                e.target.focus()
                e.target.select();
            }, 150);

        }
    }
    return (

        <div className={`sort-menu ${name} addaptiveInputArrow`} onMouseEnter={onOpen} onMouseLeave={onClose} style={(select && wrapper) ? { zIndex: 999, visibility: 'visible' } : {}}>
            <input ref={refInput} autoComplete={"new-password"} id={id} onMouseEnter={onMouseEnter} onMouseLeave={e => {
                if (!select)
                    e.target.blur()
            }} onKeyUp={onPress} onKeyDown={keyDown} onInput={onInput} data-count={len ? len : ""} className="input-style idTovara" style={(select && !wrapper) ? { visibility: 'hidden' } : { paddingRight: 0, visibility: 'visible', background: 'rgb(212, 212, 212)', paddingRight: 3 }} />
            <div className={sort !== '' || show || (select && wrapper) ? "sort-btn sort-toggle" : "sort-btn"} onClick={onClick} >
                <svg style={sort === 'up' ? { transform: 'scaleY(-1)' } : {}} width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.06508L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z" fill="black"></path>
                </svg>
                <div className='wraps' style={{ transform: 'rotate(-180deg)', top: -35, right: 0 }}><div className='tooltips'>{'Сортировать данные ↑↓'}</div></div>

            </div>
            <div className={sort === "" ? "border-sort" : "border-sort border-sort-visible"} style={sort === 'down' ? { visibility: 'visible', opacity: 1, top: 'inherit', bottom: -1 } : sort === 'up' ? { visibility: 'visible', opacity: 1, top: -1, bottom: 'inherit' } : {}}></div>
        </div>
    )
}


export const PurchaserInput = ({ wrapper, setWrapper, close, value }) => {
    let [show, setShow] = useState(false);
    let [change, setChange] = useState(false);
    let refInput = useRef();

    useEffect(() => {
        if (!wrapper) {
            setChange(false);
            refInput.current.value = value;
        }

    }, [wrapper])

    const onChange = (e) => {
        setWrapper(true)
        setChange(true);
        let caretStart = e.target.selectionStart;
        let caretEnd = e.target.selectionEnd;
        let temp = parserText(e.target.value, 'purchaser', 80);
        e.target.value = temp[0];
        e.target.setSelectionRange(caretStart - temp[1], caretEnd - temp[1]);

        if (e.keyCode === 13) {
            e.target.blur();
            setShow(false);
            setChange(false);
            setWrapper(false);
        }
    }

    return (
        <div className="user-input-block" style={{ cursor: 'text' }}
        >
            <div className="underline-animation" >
                <span className="underline" style={show || (wrapper && change) ? { width: '100%', pointerEvents: 'none' } : { width: 0, pointerEvents: 'none' }}></span>
                <input autocomplete="new-password" ref={refInput} onMouseEnter={e => {

                    setTimeout(() => {
                        e.target.setSelectionRange(e.target.value.length, e.target.value.length);
                        e.target.focus();
                        e.target.select();

                    }, 150);
                    setShow(true)
                }} onMouseLeave={e => {
                    setShow(false);
                    if (!wrapper)
                        e.target.blur();
                }}
                    onClick={e => {
                        // let el = e.target.querySelector('input');
                        // el.setSelectionRange(el.value.length, el.value.length);
                        // el.focus()
                        setWrapper(true);
                        setChange(true);
                    }} type="text" onKeyUp={onChange} style={(wrapper && change) ? { color: 'rgba(0,0,0,0.5)' } : {}} className="input-user input-order pokupatel-validation" placeholder="" />
            </div>
        </div>
    )
}

export const AdditionalInput = ({ wrapper, setWrapper, value }) => {
    let [show, setShow] = useState(false);
    let [change, setChange] = useState(false);
    let refInput = useRef();

    useEffect(() => {
        if (!wrapper) {
            setChange(false);
            refInput.current.value = value;
        }

    }, [wrapper])

    const onChange = (e) => {
        setWrapper(true)
        setChange(true);
        let caretStart = e.target.selectionStart;
        let caretEnd = e.target.selectionEnd;
        let temp = parserText(e.target.value, 'add', 80);
        e.target.value = temp[0];
        e.target.setSelectionRange(caretStart - temp[1], caretEnd - temp[1]);

        if (e.keyCode === 13) {
            e.target.blur();
            setShow(false);
            setChange(false);
            setWrapper(false);
        }
    }

    return (
        <div className="user-input-block" style={{ cursor: 'text' }}>
            <div className="underline-animation"  >
                <span className="underline" style={show || (wrapper && change) ? { width: '100%', pointerEvents: 'none' } : { width: 0, pointerEvents: 'none' }}></span>
                <input ref={refInput} autocomplete="new-password" onMouseEnter={e => {

                    setTimeout(() => {
                        e.target.setSelectionRange(e.target.value.length, e.target.value.length);
                        e.target.focus();
                        e.target.select();

                    }, 150);
                    setShow(true)
                }} onMouseLeave={e => {
                    setShow(false);
                    if (!wrapper)
                        e.target.blur();
                }}
                    onClick={e => {
                        // let el = e.target.querySelector('input');
                        // el.setSelectionRange(el.value.length, el.value.length);
                        // el.focus()
                        setWrapper(true);
                        setChange(true);
                    }} type="text" style={(wrapper && change) ? { color: 'rgba(0,0,0,0.5)' } : {}} onKeyUp={onChange} className="input-user input-order pokupatel-validation" placeholder="" />
            </div>
        </div>
    )
}


function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

export const PhoneInput = ({ wrapper, setWrapper, close, value, icons, country }) => {

    let [show, setShow] = useState(false);
    let [change, setChange] = useState(false);
    let [icon, setIcon] = useState('icon-uniE941');
    let refInput = useRef();
    let prevCountry = usePrevious(country);


   

    useEffect(() => {
        refInput.current.value = formatPhone(refInput.current.value, country, prevCountry);
    }, [country])

    useEffect(() => {

        if (!wrapper) {
            // onChanges();
            setWrapper(false);
            setChange(false);
            // refInput.current.value = value;
            if (refInput.current.value.length === 1 && refInput.current.value === '+' || refInput.current.value === '') {
                refInput.current.value = '';
                setIcon('icon-uniE941');
            } else {
                setIcon(recognizeOperator(refInput.current.value, country));
            }
        }


    }, [wrapper])



    const parserTextPhone = (text) => {
        let flag = false;
        if (text.replace(/[^+0-9 ]/g, (x) => (x = ''))[0] === '+') {
            text = text.replaceAll('+', '');
            flag = true;
        }
        let start = text.length;
        let temp = text.replace(/[^+0-9 ]/g, (x) => (x = ''));
        let len = temp.length;
        if (flag === true) {
            temp = '+' + temp;
        }
        temp = temp.slice(0, 16);
        return [temp, start - temp.length - (len - temp.length)];
    };

    let onChange = (e) => {
        let temp = parserTextPhone(e.target.value);

        if (temp[0] === '') e.target.value = '+';
        else if (temp[0][0] !== '+') {
            let caretStart = e.target.selectionStart;
            let caretEnd = e.target.selectionEnd;
            e.target.value = '+' + e.target.value;
            e.target.setSelectionRange(caretStart + 1, caretEnd + 1);
        } else {
            let caretStart = e.target.selectionStart;
            let caretEnd = e.target.selectionEnd;
            let temp2 = formatPhone(temp[0], country);
            e.target.value = temp2;
            e.target.setSelectionRange(caretStart - temp[1] + (temp2.length - temp[0].length), caretEnd - temp[1] + (temp2.length - temp[0].length));
        }
        setWrapper(true);
        setChange(true);
        if (e.keyCode === 13) {
            if (e.target.value.length == 1) {
                e.target.value = '';
            }
            e.target.blur();
            setShow(false);
            setChange(false);
            setWrapper(false);
        }
    }



    return (
        <>
            <div className="icon-operator">
                <span className={icon + ' 12px icons'} onMouseEnter={e => {
                    console.log(icon)
                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                    document.getElementById('tooltipBtn').innerHTML = options.filter(x => x.icon === icon)[0].title;
                    let posElement = e.target.getBoundingClientRect();
                    document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
                    document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}></span>
            </div>
            <div className="tel-input-block" >
                <div className="underline-animation" onMouseEnter={e => {
                    setShow(true);
                    let el = document.querySelector('.input-user-phone');
                    if (el.value.length == 0) {
                        el.value = '+';
                        el.focus()

                    } else {
                        el.select();
                    }
                }} onMouseLeave={e => {

                    if (!wrapper) {
                        let el = document.querySelector('.input-user-phone');
                        if (el.value.length == 1) {
                            el.value = '';
                        }
                        el.blur();

                    }

                    setShow(false);
                }}>
                    <span className="underline" style={show || (wrapper && change) ? { width: '100%' } : { width: 0 }}></span>
                    <input ref={refInput} autocomplete="new-password" type="text" style={(wrapper && change) ? { color: 'rgba(0,0,0,0.5)' } : {}} onKeyUp={onChange} onClick={e => {
                        setWrapper(true);
                        setChange(true);
                    }} onInput={e => {
                        if (e.nativeEvent.inputType === 'insertFromPaste')
                            onChange(e)
                    }} className="input-user-phone input-order" placeholder="" />
                </div>
                <div className="tel-sms-block">
                    <div className="send-sms 12px" onMouseEnter={e => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerHTML = 'Отправить SMS';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 21 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                    }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66995 9.55H2.96995C1.92495 9.55 1.06995 8.695 1.06995 7.65V2.9C1.06995 1.855 1.92495 1 2.96995 1H8.66995C9.71495 1 10.5699 1.855 10.5699 2.9V7.65C10.5699 8.695 9.71495 9.55 8.66995 9.55Z" stroke="#9C9B9E" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.97009 3.37524L5.15509 5.56024C5.53509 5.94024 6.10509 5.94024 6.48509 5.56024L8.67009 3.37524" stroke="#9C9B9E" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="count">1</span>
                    </div>
                    <div className="other-orders 12px" onMouseEnter={e => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerHTML = 'Другие заказы покупателя';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 21 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                    }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.22685 10.5H3.04293C1.75978 10.5 0.784579 9.32656 1.04121 8.05105L1.70845 4.98983C1.91375 4.07146 2.73497 3.35718 3.71017 3.35718H7.55961C8.53481 3.35718 9.35603 4.02044 9.56133 4.98983L10.2286 8.05105C10.5365 9.27554 9.56133 10.5 8.22685 10.5Z" stroke="#9C9B9E" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.85706 4.78571V2.64286C3.85706 1.46429 4.66063 0.5 5.64277 0.5C6.62491 0.5 7.42848 1.46429 7.42848 2.64286V4.78571" stroke="#9C9B9E" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="count">1</span>
                    </div>
                    <div className="btn-call-block">
                        <svg className="btn-call 12px" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={e => {

                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            document.getElementById('tooltipBtn').innerHTML = 'Позвонить через Sip-телефонию';
                            let posElement = e.target.getBoundingClientRect();
                            document.getElementById("tooltipBtn").style.left = posElement.x - 1 + posElement.width + 5 + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y - 5 + "px";
                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                        }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>
                            <path d="M9.39122 5.3844C9.01142 6.06847 8.57523 6.72488 8.00606 7.3249C7.43795 7.92812 6.72942 8.47601 5.81236 8.94411C5.74427 8.97709 5.67938 8.97709 5.62299 8.95475C5.53575 8.92177 5.44639 8.84943 5.35915 8.76219C5.29106 8.6941 5.20702 8.58559 5.11872 8.4675C4.76658 8.00365 4.32933 7.4281 3.71334 7.71534C3.69951 7.72172 3.68888 7.72917 3.67611 7.73556L1.61965 8.91751C1.61327 8.92071 1.60582 8.92815 1.59944 8.93134C1.32815 9.11752 1.21644 9.40583 1.21325 9.73138C1.21325 10.0633 1.3356 10.4367 1.51433 10.7506C1.75051 11.1665 2.10052 11.4421 2.50266 11.624C2.88565 11.8006 3.31227 11.8953 3.72186 11.9559C4.3655 12.0506 4.96765 11.99 5.58363 11.8006C6.18684 11.6144 6.79325 11.3059 7.45604 10.8963L7.50498 10.8655C7.80924 10.6761 8.13798 10.4718 8.46033 10.2325C9.64123 9.34094 10.8434 8.05472 11.6264 6.63871C12.2839 5.4493 12.6424 4.16627 12.4467 2.94282C12.3381 2.27259 12.0509 1.66299 11.5487 1.25978C11.1115 0.90764 10.5232 0.714016 9.76038 0.782104C9.67314 0.788487 9.59442 0.839553 9.55399 0.914024L8.23585 3.14177C8.04329 3.39178 8.01883 3.63966 8.12415 3.88754C8.21139 4.09074 8.38799 4.27798 8.62842 4.45245C8.6997 4.51309 8.78375 4.5748 8.87205 4.63863C9.16674 4.85247 9.50186 5.09929 9.38696 5.39079L9.39122 5.3844ZM5.70678 0.80402C5.76104 0.799764 5.8121 0.78487 5.85785 0.761465C5.90573 0.736996 5.94722 0.704016 5.98126 0.664653C6.0153 0.624225 6.0419 0.578479 6.05892 0.527413C6.07382 0.478475 6.0802 0.426346 6.07594 0.372088L6.07488 0.364641C6.07062 0.312512 6.05573 0.263574 6.03339 0.219955L6.02913 0.212508C6.00573 0.167825 5.97381 0.128462 5.93658 0.09761C5.89721 0.0635662 5.8504 0.0369695 5.79934 0.0199476C5.75146 0.00398951 5.7004 -0.00239371 5.64827 0.000797902L5.63763 0.00186178C5.27272 0.0305863 4.92058 0.0859075 4.58227 0.166762C4.24077 0.24868 3.91523 0.358258 3.60777 0.491242C3.29818 0.626353 3.00668 0.786997 2.73539 0.972111C2.46517 1.15722 2.21303 1.36681 1.9843 1.59979C1.7577 1.83065 1.55237 2.08492 1.37045 2.36046C1.19066 2.63387 1.03427 2.92857 0.902347 3.24134C0.774683 3.54774 0.670424 3.87328 0.591697 4.21798C0.515098 4.55522 0.462969 4.90949 0.437436 5.27972L0.436372 5.2978V5.31695C0.436372 5.36589 0.444883 5.41377 0.460841 5.45845C0.477863 5.50632 0.503396 5.54888 0.536376 5.58611C0.569356 5.62335 0.608719 5.6542 0.653401 5.67761C0.694893 5.69995 0.742766 5.71378 0.792768 5.72016L0.814046 5.72229H0.834259C0.884261 5.72335 0.932136 5.71484 0.976818 5.69782C1.02363 5.6808 1.06725 5.65526 1.10448 5.62228C1.14385 5.58824 1.17683 5.54569 1.20023 5.49781C1.22257 5.45207 1.23746 5.39994 1.24066 5.34674C1.263 5.01801 1.30768 4.70523 1.37471 4.41054C1.44173 4.10946 1.53216 3.82541 1.6428 3.55838C1.75344 3.29028 1.88643 3.03921 2.03856 2.80729C2.19282 2.57217 2.36623 2.35727 2.55773 2.16152C2.75135 1.9647 2.96306 1.7881 3.19286 1.63171C3.42372 1.47426 3.67266 1.33808 3.93863 1.22318L3.94289 1.22106C4.20673 1.10722 4.48652 1.0136 4.78122 0.943386C5.07484 0.876363 5.38337 0.828488 5.70678 0.80402ZM6.59192 4.59778C6.64618 4.59246 6.69724 4.57544 6.74193 4.55203C6.78874 4.5265 6.83023 4.49246 6.86214 4.45203C6.893 4.41373 6.91747 4.36905 6.93342 4.32117C6.94832 4.27649 6.9547 4.22862 6.95257 4.17968C6.95151 4.16585 6.95151 4.15521 6.94938 4.14244C6.94193 4.09138 6.92491 4.0435 6.90151 4.00201C6.87704 3.95839 6.84406 3.92009 6.80576 3.88924C6.76746 3.85839 6.72278 3.83392 6.6749 3.81796C6.63022 3.80413 6.58235 3.79668 6.53234 3.79881L6.49511 3.802C6.33659 3.81903 6.18446 3.84669 6.03764 3.88392C5.8887 3.92222 5.74721 3.97116 5.61422 4.02861L5.60997 4.03074C5.47486 4.09031 5.34826 4.15946 5.23017 4.23925C5.11101 4.32011 5.00037 4.41054 4.89824 4.51267C4.79717 4.61374 4.70568 4.72331 4.62483 4.84247C4.54397 4.96056 4.47376 5.08716 4.41312 5.22333C4.3546 5.35632 4.30567 5.49781 4.26737 5.64675C4.23013 5.7925 4.20353 5.94783 4.18651 6.11166C4.18119 6.16592 4.18651 6.21912 4.20034 6.26805L4.20141 6.27231C4.2163 6.32125 4.24183 6.36699 4.27269 6.40636L4.27375 6.40848C4.30673 6.44891 4.34716 6.48189 4.39397 6.50742C4.43865 6.53189 4.48971 6.54785 4.54397 6.55317H4.54929C4.60142 6.55743 4.65249 6.55211 4.70036 6.53828C4.75143 6.52338 4.79824 6.49785 4.83866 6.46487C4.87909 6.43189 4.9142 6.39146 4.93973 6.34359C4.9642 6.29891 4.98016 6.24784 4.98548 6.19465V6.19039C4.99718 6.07443 5.01633 5.96379 5.04293 5.85846C5.06952 5.75101 5.10357 5.65101 5.14399 5.55845C5.18442 5.4659 5.23123 5.37972 5.28443 5.301C5.33868 5.22121 5.39826 5.14886 5.46422 5.0829C5.53018 5.01694 5.60359 4.95737 5.68338 4.90417C5.76317 4.85098 5.8504 4.80417 5.94509 4.76268L5.95041 4.76055C6.04296 4.72012 6.14297 4.68714 6.24829 4.66055C6.35893 4.62969 6.47277 4.61054 6.59192 4.59778ZM6.16637 2.76579H6.17701L6.19084 2.76367C6.24084 2.75835 6.28765 2.74345 6.32915 2.72218C6.37383 2.69877 6.41319 2.66792 6.44617 2.63175C6.48021 2.59345 6.50681 2.54983 6.52383 2.50089C6.53979 2.45514 6.5483 2.40621 6.54724 2.35408V2.33599L6.54511 2.31897C6.53979 2.27003 6.5249 2.22322 6.50362 2.18173C6.48022 2.13705 6.44936 2.09662 6.41319 2.0647C6.37383 2.0296 6.32808 2.003 6.27702 1.98491C6.22808 1.96789 6.17595 1.96045 6.12169 1.96364C5.8387 1.98066 5.56954 2.01683 5.31528 2.07109C5.05995 2.12535 4.81845 2.19875 4.59397 2.29025C4.36737 2.3828 4.15566 2.49451 3.95991 2.6243C3.76628 2.75303 3.58755 2.90091 3.42691 3.06793C3.26733 3.23283 3.12477 3.41582 3.00136 3.61583C2.87902 3.81371 2.77369 4.02861 2.68858 4.25947C2.6056 4.48501 2.53964 4.72757 2.49283 4.98715C2.44709 5.24248 2.41943 5.51164 2.41091 5.79782L2.40985 5.81272C2.40985 5.86378 2.41943 5.91378 2.43857 5.95953C2.45772 6.00741 2.48538 6.04996 2.51943 6.0872C2.55454 6.1255 2.59815 6.15635 2.64709 6.17762C2.69284 6.1989 2.74497 6.21061 2.79923 6.21273H2.81731C2.86838 6.21167 2.91625 6.20209 2.96093 6.18401C3.00881 6.16486 3.05136 6.1372 3.08753 6.10315C3.12583 6.06698 3.15669 6.02443 3.17903 5.97549C3.2003 5.92868 3.21201 5.87761 3.21414 5.82229C3.22052 5.58399 3.24392 5.35951 3.28116 5.1478C3.31839 4.93396 3.37159 4.73502 3.43755 4.55203C3.50351 4.36905 3.58436 4.20095 3.67798 4.04669C3.77267 3.89137 3.88118 3.752 4.00246 3.6254C4.12587 3.4988 4.26205 3.38497 4.41205 3.28603C4.56312 3.18602 4.73015 3.09985 4.90888 3.02751L4.91314 3.02538C5.09399 2.9541 5.28762 2.89559 5.49507 2.85197C5.70359 2.80835 5.92594 2.77856 6.15999 2.76473L6.16637 2.76579Z" fill="#9C9B9E" />
                        </svg>
                        <div className="select-call">
                            <svg className="btn-nextel 12px" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={e => {

                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                document.getElementById('tooltipBtn').innerHTML = 'Позвонить через Nextel';
                                let posElement = e.target.getBoundingClientRect();
                                document.getElementById("tooltipBtn").style.left = posElement.x - 1 + posElement.width + 5 + "px";
                                document.getElementById("tooltipBtn").style.top = posElement.y - 5 + "px";
                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>
                                <path d="M7.25749 0C5.9496 0 4.85969 0.432433 3.90601 1.18919V0L0.5 2.51351V12H3.90601H5.07765C4.91418 11.5405 4.83242 11.027 4.83242 10.4865V7.24323H3.90601V5.02703H4.83242V3.9189L7.47548 1.97297V5.02703H10.4455L7.47548 7.24323V10.4595C7.47548 11.4865 8.1022 11.9459 9.08313 11.9459C9.21935 11.9459 9.3556 11.973 9.49183 11.973H12.4074V5.62163C12.4074 2.21621 10.3638 0 7.25749 0Z" fill="#E7384E" />
                            </svg>
                            <svg className="btn-binotel 12px" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={e => {

                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                document.getElementById('tooltipBtn').innerHTML = 'Позвонить через Binotel';
                                let posElement = e.target.getBoundingClientRect();
                                document.getElementById("tooltipBtn").style.left = posElement.x - 1 + posElement.width + 5 + "px";
                                document.getElementById("tooltipBtn").style.top = posElement.y - 5 + "px";
                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.5 6C0.5 2.68629 3.18629 0 6.5 0C9.81371 0 12.5 2.68629 12.5 6C12.5 9.31371 9.81371 12 6.5 12C3.18629 12 0.5 9.31371 0.5 6ZM7.07078 6.44174C7.42477 6.06881 7.69706 5.65918 7.93384 5.23298L7.92911 5.23889C8.00133 5.05657 7.79178 4.90267 7.60827 4.77007C7.55263 4.72982 7.49935 4.69193 7.45555 4.65405C7.30519 4.54395 7.19509 4.42792 7.14063 4.30125C7.07552 4.14734 7.09091 3.99343 7.21048 3.83716L8.03211 2.44963C8.05815 2.40227 8.10669 2.37031 8.16115 2.36676C8.6359 2.32414 9.0029 2.44489 9.2752 2.66392C9.58657 2.91372 9.76652 3.29375 9.834 3.71166C9.95476 4.47291 9.73219 5.27204 9.32256 6.01316C8.83597 6.89517 8.08657 7.69667 7.35137 8.25073C7.1501 8.39991 6.94529 8.52658 6.75586 8.64497L6.72627 8.66391C6.31427 8.91964 5.93542 9.11143 5.56013 9.22745C5.17536 9.34584 4.80006 9.38373 4.39991 9.32453C4.14537 9.28783 3.87899 9.22745 3.64103 9.11853C3.39004 9.00369 3.17339 8.83321 3.0254 8.57394C2.91411 8.37741 2.83834 8.14537 2.83834 7.93818C2.83953 7.73574 2.90938 7.55697 3.07868 7.44095C3.08341 7.43858 3.08815 7.43503 3.0917 7.43266L4.37149 6.69627C4.37978 6.69154 4.38688 6.6868 4.39517 6.68325C4.77875 6.50448 5.05105 6.8632 5.27007 7.15208C5.32571 7.22548 5.37899 7.29414 5.42043 7.33558C5.47607 7.39004 5.53053 7.43384 5.58499 7.45515C5.62051 7.47054 5.66194 7.47054 5.70338 7.44923C6.2752 7.15918 6.71679 6.81703 7.07078 6.44174Z" fill="#AD1167" />
                            </svg>
                        </div>
                    </div>
                    <div className="listen-record 12px" onMouseEnter={e => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerHTML = 'Прослушать запись разговора';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 21 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                    }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.665999 7.91637C1.1322 7.91637 1.332 8.38261 1.332 8.69341V11.223C1.332 11.5338 1.1322 12 0.665999 12C0.1998 12 0 11.5338 0 11.223V8.69341C0 8.38261 0.1998 7.91637 0.665999 7.91637Z" fill="#9C9B9E" />
                            <path d="M3.46319 2.15695C3.92939 2.15695 4.12919 2.62318 4.12919 2.93398V11.223C4.12919 11.5338 3.92939 12 3.46319 12C2.99699 12 2.79719 11.5338 2.79719 11.223V2.93398C2.79719 2.62318 2.99699 2.15695 3.46319 2.15695Z" fill="#9C9B9E" />
                            <path d="M6.26039 6.03778C6.72659 6.03778 6.92639 6.50401 6.92639 6.81481V11.223C6.92639 11.5338 6.72659 12 6.26039 12C5.79419 12 5.59439 11.5338 5.59439 11.223V6.81481C5.59439 6.50401 5.79419 6.03778 6.26039 6.03778Z" fill="#9C9B9E" />
                            <path d="M9.05758 8.87637C9.52378 8.87637 9.72358 9.34261 9.72358 9.65341V11.223C9.72358 11.5338 9.52378 12 9.05758 12C8.59138 12 8.39158 11.5338 8.39158 11.223V9.65341C8.39158 9.34261 8.59138 8.87637 9.05758 8.87637Z" fill="#9C9B9E" />
                            <path d="M11.8548 5.16058C12.321 5.16058 12.5208 5.62682 12.5208 5.93762V11.223C12.5208 11.5338 12.321 12 11.8548 12C11.3886 12 11.1888 11.5338 11.1888 11.223V5.93762C11.1888 5.62682 11.3886 5.16058 11.8548 5.16058Z" fill="#9C9B9E" />
                            <path d="M14.652 0C15.1182 0 15.318 0.466237 15.318 0.777036V11.223C15.318 11.5338 15.1182 12 14.652 12C14.1858 12 13.986 11.5338 13.986 11.223V0.777036C13.986 0.466237 14.1858 0 14.652 0Z" fill="#9C9B9E" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}



export const EmailInput = ({ wrapper, setWrapper, close }) => {
    let [rotateEmail, setRotateEmail] = useState(0);
    let [show, setShow] = useState(false);
    let [change, setChange] = useState(false);


    var endings = ['mail.ru', 'list.ru', 'rambler.ru', 'yandex.ru', 'gmail.com'],
        symbols = 'qwertyuiopasdfghjklzxcvbnm1234567890';

    function rand(min, max) {
        return (min + Math.random() * (max - min + 1)) | 0;
    }

    function getRandomStr(len) {
        var ret = '';
        for (var i = 0; i < len; i++) ret += symbols[rand(0, symbols.length - 1)];
        return ret;
    }

    function getEmail() {
        var a = getRandomStr(rand(3, 5)),
            b = getRandomStr(rand(3, 5));
        return a + '.' + b + '@' + endings[rand(0, endings.length - 1)];
    }

    function generate_url(str) {
        var url = str.replaceAll(' ', '.');
        url = translit(url);
        url = url;
        return url + '@' + endings[rand(0, endings.length - 1)];
    }
    function translit(str) {
        var ru = 'А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я'.split('-');
        var en = "A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya".split('-');
        var res = '';
        for (var i = 0, l = str.length; i < l; i++) {
            var s = str.charAt(i),
                n = ru.indexOf(s);
            if (n >= 0) {
                res += en[n];
            } else {
                res += s;
            }
        }
        return res;
    }

    useEffect(() => {
        if (!wrapper) {
            setShow(false);
            setChange(false);
        }
    }, [wrapper])

    let onChange = (e) => {
        let upper = e.target.value;
        if (e.target.value !== '') {
            setWrapper(true);
            setChange(true);
            upper = upper[0].toUpperCase() + upper.slice(1);
            e.target.value = upper;
        }

        if (e.keyCode === 13) {
            e.target.blur()
            setShow(false);
            setChange(false);
            setWrapper(false);
        }
    }
    return (
        <>
            <button className="generate-email  12px" style={{ transform: 'rotate(' + rotateEmail + 'deg)', transition: '0.4s' }} onClick={e => {
                setRotateEmail(rotateEmail - 360);
                let el = document.querySelector('.input-user');
                if (el.value !== '') {
                    document.querySelector('.input-user-email').value = generate_url(el.value);
                } else {
                    document.querySelector('.input-user-email').value = getEmail();
                }
            }} onMouseEnter={e => {

                document.getElementById("tooltipBtn").style.fontSize = '12px';
                document.getElementById('tooltipBtn').innerHTML = 'Сгенерировать E-mail';
                let posElement = e.target.getBoundingClientRect();
                document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
                document.getElementById("tooltipBtn").style.top = posElement.y + 21 + "px";
                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}
            >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4761 12C11.1898 12 10.9523 11.745 10.9523 11.4375V9.1725L9.95343 10.245C7.77416 12.585 4.22584 12.585 2.04657 10.245C1.45285 9.6075 1.00582 8.85 0.726426 8.0025C0.628638 7.71 0.77532 7.3875 1.04773 7.2825C1.32014 7.1775 1.62049 7.335 1.71828 7.6275C1.94179 8.3175 2.30501 8.9325 2.78696 9.45C4.56112 11.355 7.43888 11.355 9.21304 9.45L10.2119 8.3775H8.10245C7.81607 8.3775 7.57858 8.1225 7.57858 7.815C7.57858 7.5075 7.81607 7.2525 8.10245 7.2525H11.4761C11.546 7.2525 11.6158 7.2675 11.6787 7.2975C11.7416 7.3275 11.7974 7.365 11.8463 7.4175C11.8952 7.47 11.9371 7.53 11.9581 7.5975C11.986 7.665 12 7.74 12 7.815V11.4375C12 11.7525 11.7625 12 11.4761 12ZM10.7776 4.7475C10.5611 4.7475 10.3586 4.605 10.2817 4.3725C10.0582 3.6825 9.69499 3.075 9.21304 2.55C7.43888 0.645 4.56112 0.6525 2.78696 2.55L1.78813 3.6225H3.89756C4.18393 3.6225 4.42142 3.8775 4.42142 4.185C4.42142 4.4925 4.18393 4.7475 3.89756 4.7475H0.523865C0.454016 4.7475 0.384168 4.7325 0.328289 4.7025C0.27241 4.68 0.216531 4.6425 0.167637 4.59C0.160652 4.5825 0.153667 4.575 0.146682 4.5675C0.097788 4.5225 0.0628638 4.4625 0.0419092 4.4025C0.0139697 4.335 0 4.2675 0 4.185V0.5625C0 0.2475 0.237485 0 0.523865 0C0.810244 0 1.04773 0.255 1.04773 0.5625V2.8275L2.04657 1.755C4.22584 -0.585 7.77416 -0.585 9.95343 1.755C10.5471 2.3925 10.9942 3.15 11.2736 3.9975C11.3714 4.29 11.2247 4.6125 10.9523 4.7175C10.8964 4.74 10.8335 4.7475 10.7776 4.7475Z" fill="#9C9B9E" />
                </svg>
            </button>
            <div className="email-input-block"
            //     onMouseEnter={e => {
            //     let el = document.querySelector('.input-user-email');
            //     setShow(true);
            //     setTimeout(() => {
            //         el.setSelectionRange(el.value.length, el.value.length);
            //         el.focus();
            //         el.select();

            //     }, 150);

            // }} onMouseLeave={e => {
            //     let el = document.querySelector('.input-user-email');
            //     setShow(false);
            //     if (!wrapper)
            //         el.blur();
            //     }}
            >
                <div className="underline-animation">
                    <span className="underline" style={show || (wrapper && change) ? { width: '100%', pointerEvents: 'none' } : { width: 0, pointerEvents: 'none' }}></span>
                    <input autocomplete="new-password" style={(wrapper && change) ? { color: 'rgba(0,0,0,0.5)' } : {}} onMouseEnter={e => {

                        setTimeout(() => {
                            e.target.setSelectionRange(e.target.value.length, e.target.value.length);
                            e.target.focus();
                            e.target.select();

                        }, 150);
                        setShow(true)
                    }} onMouseLeave={e => {
                        setShow(false);
                        if (!wrapper)
                            e.target.blur();
                    }}
                        onClick={e => {
                            // let el = e.target.querySelector('input');
                            // el.setSelectionRange(el.value.length, el.value.length);
                            // el.focus()
                            setWrapper(true);
                            setChange(true);
                        }} onKeyUp={onChange} type="text" className="input-user-email input-order" placeholder="" />
                </div>
            </div>
        </>
    )
}


export const PrroInput = ({ value }) => {


    const [text, setText] = useState('');
    const [back, setBack] = useState(true);


    useEffect(() => {
        if (value !== '') {
            setText(value)
        }
    }, value)


    const onClick = (e) => {
        setText('dfc0e302-2b89-286b-af46-14df56612a22')
        document.getElementById("tooltipBtn").style.fontSize = '12px';
        document.getElementById('tooltipBtn').innerHTML = 'Создан';
        let posElement = e.target.getBoundingClientRect();
        document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
        document.getElementById("tooltipBtn").style.top = posElement.y + 21 + "px";
        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
        setTimeout(() => {
            document.getElementById("tooltipBtn").style.animation = ''
        }, 1250);
    }

    const onClickReturn = () => {
        setText('7babe434-3916-9bc1-777d-aadcd448e0ea');
        setBack(false);
    }

    return (
        <>
            <button className={"btnprro 12px " + (text === '' ? 'btnprro-hover-off' : '')} style={text !== '' ? { cursor: 'default' } : {}} onClick={text !== '' ? e => { } : e => onClick(e)} onMouseEnter={e => {
                if (text === '') {
                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                    document.getElementById('tooltipBtn').innerHTML = 'Создать электронный чек';
                    let posElement = e.target.getBoundingClientRect();
                    document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
                    document.getElementById("tooltipBtn").style.top = posElement.y + 21 + "px";
                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
                } else {
                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                    document.getElementById('tooltipBtn').innerHTML = 'Электронный чек создан';
                    let posElement = e.target.getBoundingClientRect();
                    document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
                    document.getElementById("tooltipBtn").style.top = posElement.y + 21 + "px";
                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';
                }
            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>
                <svg style={{ pointerEvents: 'none' }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.712422 0H2.5V1H1V2.5H0V0.894312C0 0.252317 0.224492 0 0.712422 0ZM1 9.5V11H2.5V12H0.712422C0.224492 12 0 11.7489 0 11.1057V9.5H1ZM9.5 0H11.2876C11.7755 0 12 0.252317 12 0.894312V2.5H11V1H9.5V0ZM12 9.5V11.2257C12 11.7477 11.7755 12 11.2876 12H9.5V11H11V9.5H12Z" fill="#9C9B9E" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.13152 2.12012H5.51904V5.49496H2.13152V2.12012ZM2.12 6.48338H5.50636V9.85823H2.12V6.48338ZM3.06642 7.42865H4.56455V8.91641H3.06642V7.42865ZM6.48556 2.12127H9.87078V5.49496H6.48441V2.12012L6.48556 2.12127ZM7.43199 3.06424H8.93011V4.55199H7.43199V3.06424ZM3.0814 3.06424H4.57953V4.55199H3.0814V3.06424Z" fill="#9C9B9E" />
                    <path d="M8.41042 8.89401V9.85426L9.88551 9.86233V7.45811H8.90105V8.89401H8.41042Z" fill="#9C9B9E" />
                    <path d="M7.45798 9.83633V8.89426L6.47699 8.89401V9.83633H7.45798Z" fill="#9C9B9E" />
                    <path d="M6.47699 6.49811H7.92V7.44011H7.45798V7.92011H6.47699V6.49811Z" fill="#9C9B9E" />
                </svg>
            </button>
            {text !== '' && <div className="prro-block">
                <a href={`https://api.checkbox.in.ua/api/v1/receipts/${text}/html`} target="_blank" className="prro-generation 12px" onMouseEnter={e => {

                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                    document.getElementById('tooltipBtn').innerHTML = 'Открыть чек: ' + text;
                    let posElement = e.target.getBoundingClientRect();
                    document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
                    document.getElementById("tooltipBtn").style.top = posElement.y + 21 + "px";
                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>{text}</a>
                <div className="prro-email-sms">
                    <svg onMouseEnter={e => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerHTML = 'Электронный чек отправлен по SMS';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 21 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                    }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''} className="prro-sms 12px" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 12.5H3.66667C2.2 12.5 1 11.4 1 10.0556V3.94444C1 2.6 2.2 1.5 3.66667 1.5H11.6667C13.1333 1.5 14.3333 2.6 14.3333 3.94444V10.0556C14.3333 11.4 13.1333 12.5 11.6667 12.5Z" stroke="#9C9B9E" stroke-width="1.1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.66678 4.55605L6.73344 7.36716C7.26678 7.85605 8.06678 7.85605 8.60011 7.36716L11.6668 4.55605" stroke="#9C9B9E" stroke-width="1.1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg onMouseEnter={e => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerHTML = 'Электронный чек отправлен на почту';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 21 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                    }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''} className="prro-email 12px" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.84212 0.00726604C4.87112 0.0558977 4.0606 0.255285 3.25981 0.641092C2.12509 1.189 1.31295 2.01087 0.708309 3.22503C0.314398 4.01772 0.0874539 4.84445 0.0161285 5.75223C-0.0227763 6.23854 0.0112654 6.97611 0.090696 7.44135C0.230105 8.24376 0.544585 9.0559 0.953085 9.67514C1.66148 10.7434 2.82862 11.4745 4.35401 11.8068C5.05268 11.9592 5.64597 12.0111 6.51809 11.9981C7.0968 11.99 7.38534 11.9657 7.83275 11.8895C8.89938 11.7063 9.82986 11.3043 10.5464 10.7142C10.736 10.557 11.057 10.2328 11.1996 10.0528C11.3423 9.87291 11.5255 9.59085 11.6308 9.39146C11.6811 9.29744 11.7216 9.21477 11.7216 9.2099C11.7216 9.20342 11.4314 9.19856 11.0781 9.20018H10.4329L10.3194 9.33796C9.69855 10.095 8.70648 10.5926 7.45505 10.7774C6.77907 10.878 5.76269 10.878 5.08672 10.7791C4.09302 10.6316 3.23226 10.2895 2.61951 9.79672C1.97271 9.27637 1.47992 8.48043 1.24973 7.58562C0.988748 6.56923 1.08277 5.31779 1.50261 4.20576C1.88194 3.2072 2.46064 2.46152 3.26792 1.93306C3.92119 1.50511 4.64418 1.26681 5.58599 1.17279C5.83726 1.14686 6.55213 1.14686 6.80177 1.17279C7.86679 1.27978 8.66596 1.62344 9.28519 2.24106C9.88173 2.83436 10.2157 3.53951 10.2967 4.37597C10.3227 4.6483 10.3081 5.10057 10.2627 5.3648C10.0844 6.42009 9.45702 7.38786 8.63516 7.88227C8.44874 7.99412 8.23476 8.06059 8.13102 8.03789C7.96567 8.00223 7.91056 7.8612 7.9527 7.57265C7.98026 7.37164 7.97215 7.41541 8.28501 5.89164C8.34823 5.58364 8.40659 5.29996 8.4147 5.25943C8.4228 5.21891 8.48116 4.93522 8.54438 4.62723C8.6076 4.31923 8.66596 4.03555 8.67406 3.99502C8.68217 3.9545 8.74052 3.67081 8.80374 3.36282C8.86696 3.05482 8.9237 2.77924 8.92856 2.75006L8.93829 2.69819H8.13588H7.33347L7.26376 3.01754C7.22648 3.19423 7.19082 3.34823 7.18433 3.35795C7.17785 3.37092 7.14056 3.33364 7.08545 3.25583C6.8504 2.92676 6.49701 2.69657 6.07717 2.59607C5.94424 2.56527 5.88102 2.5604 5.56168 2.56202C5.24396 2.56202 5.17425 2.56689 5.02674 2.59769C4.50315 2.71116 4.06222 2.94621 3.66831 3.32229C3.01828 3.94153 2.53359 4.86552 2.36176 5.81058C2.29206 6.18829 2.26612 6.76538 2.3034 7.09931C2.37473 7.73151 2.59519 8.23404 2.97613 8.62957C3.30034 8.96675 3.68615 9.18072 4.13679 9.27312C4.30538 9.30716 4.76089 9.32175 4.9311 9.29744C5.40444 9.22936 5.81618 9.03159 6.18416 8.69441C6.23441 8.64902 6.27818 8.61336 6.2798 8.6166C6.28142 8.61984 6.29763 8.66361 6.31384 8.71224C6.3803 8.91001 6.54078 9.10291 6.71099 9.19045C6.86985 9.26988 7.01899 9.29906 7.32374 9.30716C8.65461 9.34769 9.78285 8.71711 10.6096 7.46891C11.258 6.4898 11.5125 5.38911 11.3715 4.18955C11.2758 3.37578 10.9694 2.57337 10.5091 1.92982C9.72935 0.842101 8.40335 0.154781 6.83419 0.0250978C6.53268 0.000782013 6.13066 -0.00732327 5.84212 0.00726604ZM5.94262 3.69513C6.34464 3.77942 6.66884 4.11984 6.78394 4.58022C6.84392 4.82175 6.86013 5.19135 6.82446 5.51556C6.78232 5.90785 6.64453 6.44279 6.47594 6.86102C6.31546 7.26141 6.17119 7.48998 5.91993 7.74124C5.66867 7.9925 5.42875 8.11894 5.11427 8.16271C4.76575 8.21134 4.4691 8.1076 4.22433 7.84985C3.97955 7.59373 3.8596 7.19657 3.8596 6.63894C3.8596 5.91919 4.12058 4.95143 4.44803 4.45702C4.83059 3.87831 5.40768 3.58328 5.94262 3.69513Z" fill="#9C9B9E" />
                    </svg>
                    {back && <button className="btnprro-back 12px" onClick={onClickReturn} onMouseEnter={e => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById('tooltipBtn').innerHTML = 'Вернуть созданый чек';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x - 1 + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 21 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.3s forwards';

                    }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>
                        <svg width="15" height="12" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9093 2.39222H1.78071L3.22773 0.911265C3.43142 0.702793 3.43142 0.364848 3.22773 0.156376C3.02398 -0.0521551 2.69383 -0.0520958 2.49008 0.156376L0.152771 2.54862C-0.0509238 2.75709 -0.0509238 3.09503 0.152771 3.3035L2.49008 5.69562C2.59196 5.79989 2.72542 5.85196 2.85888 5.85196C2.99234 5.85196 3.12579 5.79983 3.22767 5.69562C3.43137 5.48715 3.43137 5.14921 3.22767 4.94074L1.78065 3.45978H11.9093C13.0383 3.45978 13.9569 4.3999 13.9569 5.55542C13.9569 6.71094 13.0383 7.65105 11.9093 7.65105H9.59971C9.31164 7.65105 9.07816 7.89001 9.07816 8.18483C9.07816 8.47966 9.31164 8.71862 9.59971 8.71862H11.9093C13.6135 8.71862 15 7.29959 15 5.55542C15 3.81125 13.6135 2.39222 11.9093 2.39222Z" fill="#9C9B9E" />
                            <path d="M5.47967 7.65101C5.1916 7.65101 4.95812 7.88997 4.95812 8.1848C4.95812 8.47962 5.1916 8.71858 5.47967 8.71858H7.7842C8.07227 8.71858 8.30575 8.47962 8.30575 8.1848C8.30575 7.88997 8.07227 7.65101 7.7842 7.65101H5.47967Z" fill="#9C9B9E" />
                            <path d="M1.26009 7.65101C0.972016 7.65101 0.738535 7.88997 0.738535 8.1848C0.738535 8.47962 0.972016 8.71858 1.26009 8.71858H3.56462C3.85269 8.71858 4.08617 8.47962 4.08617 8.1848C4.08617 7.88997 3.85269 7.65101 3.56462 7.65101H1.26009Z" fill="#9C9B9E" />
                        </svg>
                    </button>}
                </div>
            </div>}
        </>
    )
}



export const CommentBlock = ({ wrapper, setWrapper, value }) => {

    const [show, setShow] = useState(false);
    const [change, setChange] = useState(false);

    useEffect(() => {
        if (!wrapper) {
            setWrapper(false);
            setChange(false);
            document.querySelector('.comment-input-order').scrollTop = 0;
            document.querySelector('.comment-input-order').scrollLeft = 0;

        }

    }, [wrapper])


    const onChange = (e) => {
        if (e.target.value !== '') {
            e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1,)
        }
        setWrapper(true);
        setChange(true);

        if (e.keyCode === 13 && !e.shiftKey) {
            e.target.blur()
            setShow(false);
            setChange(false);
            setWrapper(false);
        }

        let lengthComment = document.querySelector('.comment-input-order').value.length;
        let caretEnd = document.querySelector('.comment-input-order').selectionEnd;
        if (caretEnd === lengthComment) {
            document.querySelector('.comment-input-order').scrollTop = e.target.scrollHeight;
        }

    }


    return (
        <div className="comment-block" onClick={e => {
            setWrapper(true);
            setChange(true);
        }} onMouseEnter={e => { setShow(true); }} onMouseLeave={e => {
            setShow(false);
            document.querySelector('.comment-input-order').scrollTop = 0;
            document.querySelector('.comment-input-order').scrollLeft = 0;
        }} style={show || (wrapper && change) ? { zIndex: 4 } : {}} >
            <div className="comment" style={show || (wrapper && change) ? {
                width: 100, transition: '0.2s ', backgroundColor: 'transparent', left: -4
            } : {}}>Комментарий</div>
            <div className={show || (wrapper && change) ? "comment-wrapper comment-wrapper-shadow" : "comment-wrapper"} style={show || (wrapper && change) ?
                { backgroundColor: 'rgb(241, 241, 241)', border: '1px solid transparent' } : {}
            }>
                <textarea className={show || (wrapper && change) ? "comment-input-order input-order comment-scroll" : "comment-input-order input-order"} style={show || (wrapper && change) ? {
                    color: 'rgba(0, 0, 0, 0.5)', backgroundColor: 'rgb(241, 241, 241)', zIndex: 9999
                } : {}} placeholder={show || (wrapper && change) ? "Ввод" : ""} onKeyUp={onChange} onMouseEnter={e => e.target.focus()} onMouseLeave={e => { if (!wrapper) e.target.blur() }}>{value}</textarea>
            </div>
        </div>
    )
}