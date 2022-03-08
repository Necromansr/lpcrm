import './dropdown.css';
import * as hints from '../../until/hints'

import React, { Component, useEffect, useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { arrowDown, arrowUp } from '../../until/images'

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

let timer;
const Dropdown = ({ array, width, wrapper, setWrapper, close }) => {

    const refInput = useRef();
    const [isOpen, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [list, setList] = useState(array);
    const prevList = usePrevious(list);
    const refText = useRef();
    useEffect(() => {
        if (!wrapper)
            setOpen(false)
    
        if (JSON.stringify(list) !== JSON.stringify(prevList)) {
            setWrapper(false);
        }
    }, [list, wrapper])

    const open = e => {
        if (!close) {
            setText('');
            setWrapper(true);
            setTimeout(() => {
                refInput.current.focus()
            }, 300);
            setOpen(true)
        }
    }

    const onChange = index => {
        let temp = list.map(x => { return x.key !== index ? { ...x, select: false } : { ...x, select: true } });
        setWrapper(false);
        setList([...temp])
    }


    const search = (value) => {
        if (text !== "") {
            let re = new RegExp(text, "gui");
            let text_pr = value.replace(re, x => '<span class="findUnderlines" style="opacity: 1">' + x + '</span>');
            return text_pr;
        } else {
            return value;
        }
    }

    const searchUndreline = (value) => {
        if (text !== "") {
            let re = new RegExp(text, "gui");
            let text_pr = value.replace(re, x => '<span class="findUnderline" style="opacity: 1">' + x + '</span>');
            return text_pr;
        } else {
            return value;
        }
    }

    const changeText = (e) => {
        let temp = e.target.value;
        if (temp !== '') {
            temp = temp[0].toUpperCase() + temp.slice(1)
        }
        setText(temp);
    }

    return (
        <div className="order-dropdown" onClick={open}>
            {list.map(x => (
                x.select && <div className="btn-order"><span className="order-tooltip findFunction text-otdel" style={{
                    maxWidth: (width + 12),
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }} onMouseEnter={e => {
                    timer = setTimeout(() => {
                        if (e.target.scrollWidth > e.target.offsetWidth) {

                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            document.getElementById('tooltipBtn').innerText = x.text;
                            let posElement = e.target.getBoundingClientRect();
                            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                            document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';
                            let blockWidth = posElement.width;
                            let screenWidth = document.body.clientWidth;
                            let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip - 15 + 'px';
                            }
                        }
                    }, 300)
                }}
                    onMouseLeave={e => {
                        document.getElementById("tooltipBtn").style.animation = '';
                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        clearTimeout(timer);
                    }}>{x.text}</span></div>
            ))}
            <div className={isOpen ? "btn-order-input toggle" : "btn-order-input"} ref={refText}>
                <input onChange={e => changeText(e)} ref={refInput} className="btn-order-search" type="text" value={text} />
                <div className="btn-order-count order-tooltip" onMouseEnter={e => {
                    timer = setTimeout(() => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById("tooltipBtn").innerHTML = `Элементов в фильтре:<br>- найдено ${list.filter(x => x.text.toLowerCase().includes(text.toLowerCase())).length}`;
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.25s forwards';
                        let blockWidth = posElement.width;
                        let screenWidth = document.body.clientWidth;
                        let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip) + 'px';
                        }
                    }, 150)
                }}
                    onMouseLeave={e => {
                        clearTimeout(timer);
                        document.getElementById("tooltipBtn").style.animation = '';

                    }} >({list.filter(x => x.text.toLowerCase().includes(text.toLowerCase())).length})</div>
            </div>
            <div className={isOpen ? "btn-menu toggle" : "btn-menu"} >
                <SimpleBar style={{ maxHeight: 90 }} autoHide={false}>
                    {list.filter(x => x.text.toLowerCase().includes(text.toLowerCase())).map((x, index) => {


                        return (<div onClick={e => onChange(x.key)} className={x.select ? "btn-menu-list select-btn" : "btn-menu-list"}><span style={{
                            maxWidth: width,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }} className="order-tooltip findFunction text-otdel" onMouseEnter={e => {
                            timer = setTimeout(() => {
                                if (e.target.scrollWidth > e.target.offsetWidth) {

                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                    document.getElementById('tooltipBtn').innerHTML = search(x.text);
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + refText.current.offsetWidth - 15 + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y - 1 + "px";
                                    document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';
                                    let blockWidth = posElement.width;
                                    let screenWidth = document.body.clientWidth;
                                    let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                                    if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                        document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip - 15 + 'px';
                                    }
                                }
                            }, 300)
                        }}
                            onMouseLeave={e => {
                                document.getElementById("tooltipBtn").style.animation = '';
                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                clearTimeout(timer);
                            }} dangerouslySetInnerHTML={{ __html: searchUndreline(x.text) }}></span></div>
                        )
                    }
                    )}
                </SimpleBar>
            </div>
        </div>
    )
}





const DropdownCountry = ({ array, wrapper, setWrapper, closes }) => {

    const [show, setShow] = useState(false);
    const [country, setCountry] = useState([...array]);
    const prevList = usePrevious(country);


    useEffect(() => {
        if (!wrapper) {
            setShow(false);
        }
        if (JSON.stringify(country) !== JSON.stringify(prevList)) {
            setWrapper(false)
        }
    }, [country, wrapper])

    const open = () => {
        if (!closes) {
            setWrapper(true);
            setShow(true);
        }
    }

    const close = () => {
        setShow(false);
    }

    const onChange = (index) => {
        let temp = country.map((x, idx) => { return idx === index ? { ...x, select: true } : { ...x, select: false } })
        setWrapper(false);
        setCountry([...temp])
    }

    return (
        <div className="order-dropdown" onClick={open}>
            <div className="btn-order order-tooltip" onMouseEnter={e => {
                if (!show)
                    timer = setTimeout(() => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById("tooltipBtn").innerHTML = country.filter(x => x.select === true)[0].title;
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x + 45 + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y - 3 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-another 0.25s forwards';
                        let blockWidth = posElement.width;
                        let screenWidth = document.body.clientWidth;
                        let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip) + 'px';
                        }
                    }, 250)
            }}
                onMouseLeave={e => {
                    clearTimeout(timer);
                    document.getElementById("tooltipBtn").style.animation = '';

                }}><span className="flags">{country.filter(x => x.select === true)[0].text}</span></div>
            <div className={show ? "btn-menu toggle" : "btn-menu"} >
                <SimpleBar style={{ maxHeight: 90 }} autoHide={false}>

                    {country.map((x, index) => (
                        <div onClick={e => onChange(index)} className={x.select ? "btn-menu-list select-btn" : "btn-menu-list"}><span className="flags">{x.text}</span> <span className="text-country order-tooltip" onMouseEnter={e => {
                            timer = setTimeout(() => {
                                if (e.target.scrollWidth > e.target.offsetWidth) {

                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                    document.getElementById('tooltipBtn').innerText = x.title;
                                    let posElement = e.target.getBoundingClientRect();
                                    document.getElementById("tooltipBtn").style.left = posElement.x + posElement.width + 10 + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y - 2 + "px";
                                    document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';
                                    let blockWidth = posElement.width;
                                    let screenWidth = document.body.clientWidth;
                                    let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                                    if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                        document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip - 15 + 'px';
                                    }
                                }
                            }, 300)
                        }}
                            onMouseLeave={e => {
                                document.getElementById("tooltipBtn").style.animation = '';
                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                clearTimeout(timer);
                            }}>{x.title}</span></div>
                    ))}
                </SimpleBar>
            </div>
        </div >
    )
}


const DropdownPay = ({ array, wrapper, setWrapper, closes }) => {

    const [show, setShow] = useState(false);
    const [pay, setPay] = useState([...array]);
    const prevList = usePrevious(pay);


    useEffect(() => {
        if (!wrapper) {
            setShow(false);
        }
        if (JSON.stringify(pay) !== JSON.stringify(prevList)) {
            setWrapper(false)
        }
    }, [pay, wrapper])

    const open = () => {
        if (!closes) {
            setWrapper(true);
            setShow(true);

        }
    }

    const close = () => {
        setShow(false);
    }

    const onChange = (index) => {
        let temp = pay.map((x, idx) => { return idx === index ? { ...x, select: true } : { ...x, select: false } })
        setWrapper(false);
        setPay([...temp])
    }

    return (

        <div className="order-dropdown" onClick={open}>
            <div className="btn-order order-tooltip"><span className={"icons " + pay.filter(x => x.select === true)[0].icon} onMouseEnter={e => {
                if (!show)
                    timer = setTimeout(() => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById("tooltipBtn").innerHTML = pay.filter(x => x.select === true)[0].title;
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x + 45 + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y - 3 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-another 0.25s forwards';
                        let blockWidth = posElement.width;
                        let screenWidth = document.body.clientWidth;
                        let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip) + 'px';
                        }
                    }, 250)
            }}
                onMouseLeave={e => {
                    clearTimeout(timer);
                    document.getElementById("tooltipBtn").style.animation = '';

                }}></span></div>
            <div className={show ? "btn-menu toggle" : "btn-menu"} >
                <SimpleBar style={{ maxHeight: 90 }} autoHide={false}>
                    {pay.map((x, index) => (
                        <div onClick={e => onChange(index)} className={"btn-menu-list " + (x.select ? 'select-btn' : '')}><span className={x.icon + " icons"}></span> <span className="text-pay order-tooltip">{x.title}</span></div>
                    ))}
                </SimpleBar>
            </div>
        </div>
    )
}

const DropdownDelivery = ({ array, setArray, wrapper, setWrapper, closes }) => {

    const [show, setShow] = useState(false);
    const prevList = usePrevious(array);


    useEffect(() => {
        if (!wrapper) {
            setShow(false);
        }
        if (JSON.stringify(array) !== JSON.stringify(prevList)) {
            setWrapper(false)
        }
    }, [array, wrapper])

    const open = () => {
        if (!closes) {
            setWrapper(true);
            setShow(true);

        }
    }

    const close = () => {
        setShow(false);
    }

    const onChange = (index) => {
        let temp = array.map((x, idx) => { return idx === index ? { ...x, select: true } : { ...x, select: false } })
        setWrapper(false);
        setArray([...temp])
    }

    return (

        <div className="order-dropdown" onClick={open}>
            <div className="btn-order order-tooltip"><span className={"icons " + array.filter(x => x.select === true)[0].icon} onMouseEnter={e => {
                if (!show)
                    timer = setTimeout(() => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById("tooltipBtn").innerHTML = array.filter(x => x.select === true)[0].title;
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x + 45 + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y - 3 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-another 0.25s forwards';
                        let blockWidth = posElement.width;
                        let screenWidth = document.body.clientWidth;
                        let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip) + 'px';
                        }
                    }, 250)
            }}
                onMouseLeave={e => {
                    clearTimeout(timer);
                    document.getElementById("tooltipBtn").style.animation = '';

                }}></span></div>
            <div className={show ? "btn-menu toggle" : "btn-menu"} >
                <SimpleBar style={{ maxHeight: 90 }} autoHide={false}>
                    {array.map((x, index) => (
                        <div onClick={e => onChange(index)} className={"btn-menu-list " + (x.select ? 'select-btn' : '')}><span className={x.icon + " icons"}></span> <span className="text-pay order-tooltip">{x.title}</span></div>
                    ))}
                </SimpleBar>
            </div>
        </div>
    )
}

const DropdownStatus = ({ wrapper, setWrapper, array, closes }) => {
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState([...array]);
    const prevList = usePrevious(status);
    const [showDropdown, setShowDropdown] = useState('');
    const refInput = useRef();
    const [text, setText] = useState('');
    const [top, setTop] = useState(0);

    useEffect(() => {
        if (!wrapper) {
            setShow(false);
            setShowDropdown('')
            setText('')
        }
        if (JSON.stringify(status) !== JSON.stringify(prevList)) {
            setWrapper(false)
        }
    }, [status, wrapper])

    const open = () => {
        if (!closes) {

            setWrapper(true);
            setShow(true);
            setText('');
            setTimeout(() => {
                refInput.current.focus()
            }, 300);
        }
    }

    const close = () => {
        setShow(false);
    }

    const changeText = (e) => {
        let temp = e.target.value;
        if (temp !== '') {
            temp = temp[0].toUpperCase() + temp.slice(1)
        }
        setText(temp);
    }

    const search = (value) => {
        if (text !== "") {
            let re = new RegExp(text, "gui");
            let text_pr = value.replace(re, x => '<span class="findUnderlines" style="opacity: 1">' + x + '</span>');
            return text_pr;
        } else {
            return value;
        }
    }

    const searchUndreline = (value) => {
        if (text !== "") {
            let re = new RegExp(text, "gui");
            let text_pr = value.replace(re, x => '<span class="findUnderliner" style="opacity: 1;">' + x + '</span>');
            return text_pr;
        } else {
            return value;
        }
    }

    const onChange = (index) => {
        if (status.filter(x => x.key === index)[0]?.items === undefined) {
            let temp = status.map((x, idx) => { return x.key === index ? { ...x, select: true } : { ...x, select: false }; })
            setWrapper(false);
            setStatus([...temp])
        }
    }

    const onChangeAttribute = (index) => {
        let temp = status.map(y => {
            if (y.text === showDropdown) {
                return { ...y, select: true, items: y.items?.map((x, idx) => { return idx === index ? { ...x, select: true } : { ...x, select: false }; }) }
            } else {
                return { ...y, select: false, items: y.items?.map((x, idx) => { return { ...x, select: false }; }) }
            }
        })
        setWrapper(false);
        setStatus([...temp])
    }
    return (
        <div className="order-dropdown" onClick={open}>
            <div className="btn-order-container order-tooltip" onMouseEnter={e => {

                if ((e.target.scrollWidth > e.target.offsetWidth || document.querySelector('.elobaration-menu-text').scrollWidth > document.querySelector('.elobaration-menu-text').offsetWidth) && !status.filter(y => y.select === true)[0]?.items?.filter(x => x.select === true)[0]) {
                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                    document.getElementById('tooltipBtn').innerHTML = status.filter(y => y.select === true)[0].text;
                    let posElement = e.target.getBoundingClientRect();
                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                    document.getElementById("tooltipBtn").style.top = posElement.y + posElement.height + 10 + "px";
                    document.getElementById("tooltipBtn").style.animation = '0.4s ease 1 normal forwards running delay-btn';
                } else if ((e.target.scrollWidth > e.target.offsetWidth || document.querySelector('.elobaration-menu-text').scrollWidth > document.querySelector('.elobaration-menu-text').offsetWidth) && status.filter(y => y.select === true)[0]?.items?.filter(x => x.select === true)[0]) {
                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                    document.getElementById('tooltipBtn').innerHTML = `
                    Статус: ${status.filter(y => y.select === true)[0].text} <br>Атрибут: ${status.filter(y => y.select === true)[0]?.items?.filter(x => x.select === true)[0].text}
                    `;
                    let posElement = e.target.getBoundingClientRect();
                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                    document.getElementById("tooltipBtn").style.top = posElement.y + posElement.height + 10 + "px";
                    document.getElementById("tooltipBtn").style.animation = '0.4s ease 1 normal forwards running delay-btn';
                }

            }} onMouseLeave={e => document.getElementById("tooltipBtn").style.animation = ''}>
                <div className="btn-order"><span className="menu-list-wrapper"><span className="color-515151-before order-tooltip text-status" style={status.filter(y => y.select === true)[0]?.items?.filter(x => x.select === true)[0] ? { maxWidth: 120 } : {}}>{status.filter(y => y.select === true)[0]?.text}</span></span>
                </div>
                <div className="elobaration-menu-text" style={{ pointerEvents: 'none' }}>{status.filter(y => y.select === true)[0]?.items?.filter(x => x.select === true)[0]?.text}</div>
            </div>
            {/* <div className="btn-order-input">
                <input className="btn-order-search" type="text" />
                <div className="btn-order-count order-tooltip"></div> */}

            <div className={show ? "btn-order-input toggle" : "btn-order-input"}>
                <input onChange={e => changeText(e)} ref={refInput} className="btn-order-search" type="text" value={text} />
                <div className="btn-order-count order-tooltip" onMouseEnter={e => {
                    timer = setTimeout(() => {

                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                        document.getElementById("tooltipBtn").innerHTML = `Элементов в фильтре:<br>- найдено ${status.filter(x => x.text.toLowerCase().includes(text.toLowerCase())).length}`;
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 28 + "px";
                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.25s forwards';
                        let blockWidth = posElement.width;
                        let screenWidth = document.body.clientWidth;
                        let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip) + 'px';
                        }
                    }, 150)
                }}
                    onMouseLeave={e => {
                        clearTimeout(timer);
                        document.getElementById("tooltipBtn").style.animation = '';

                    }}  >({status.filter(x => x.text.toLowerCase().includes(text.toLowerCase())).length})</div>
            </div>
            {/* </div> */}
            <div className={show ? "btn-menu toggle" : "btn-menu"} >
                <SimpleBar style={{ maxHeight: 90 }} autoHide={false}>

                    {status.filter(x => x.text.toLowerCase().includes(text.toLowerCase())).map((x, index) => (
                        <div onClick={e => onChange(x.key)} onMouseEnter={e => {
                            setShowDropdown(x.text);
                            if (status.filter(y => y.text === x.text)[0].items !== undefined) {
                                let posElement = e.target.getBoundingClientRect();
                                let block = document.querySelector('.status');
                                let blockPos = block.getBoundingClientRect();
                                let resultBlocks = posElement.y - blockPos.y;
                                setTop(resultBlocks - 5)
                            } else {
                                timer = setTimeout(() => {
                                    if ((e.target.querySelector('.order-tooltip') !== null ? e.target.querySelector('.order-tooltip').scrollWidth : e.target.scrollWidth) > (e.target.querySelector('.order-tooltip') !== null ? e.target.querySelector('.order-tooltip').offsetWidth : e.target.querySelector('.order-tooltip').offsetWidth)) {

                                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                                        document.getElementById('tooltipBtn').innerHTML = search(x.text);
                                        let posElement = e.target.getBoundingClientRect();
                                        document.getElementById("tooltipBtn").style.left = posElement.x + posElement.width + "px";
                                        document.getElementById("tooltipBtn").style.top = posElement.y + 1 + "px";
                                        document.getElementById("tooltipBtn").style.animation = '0.4s ease 1 normal forwards running delay-btn';
                                    }
                                }, 300)
                            }

                        }} onMouseLeave={e => {
                            clearTimeout(timer);
                            document.getElementById("tooltipBtn").style.animation = '';

                        }} className={"btn-menu-list " + (x.select === true ? 'select-btn' : '')}><span className="menu-list-wrapper" style={{ pointerEvents: 'none' }}><span className={x.color + " order-tooltip findFunction text-status"} style={{ pointerEvents: 'none' }} dangerouslySetInnerHTML={{ __html: searchUndreline(x.text) }}></span></span>
                        </div>
                    ))}
                </SimpleBar>
            </div>
            <div className="elobaration-menu-block" style={status.filter(x => x.text === showDropdown)[0]?.items ? { visibility: 'visible', opacity: 1, top: top } : {}}>
                <div className="elobaration-header-tooltip">Атрибут статуса: <span>{showDropdown}</span></div>
                <div className="elobaration-body">
                    <div >
                        <SimpleBar style={{ maxHeight: 112 }} autoHide={false}>
                            {status.filter(x => x.text === showDropdown)[0]?.items?.map((x, index) => (<div onClick={e => onChangeAttribute(index)} className={x.select === true ? 'select-btn' : ''} onMouseEnter={e => {
                                timer = setTimeout(() => {
                                    if (e.target.scrollWidth > e.target.offsetWidth) {

                                        document.getElementById("tooltipBtn").style.fontSize = '12px';
                                        document.getElementById('tooltipBtn').innerHTML = x.text;
                                        let posElement = e.target.getBoundingClientRect();
                                        document.getElementById("tooltipBtn").style.left = posElement.x + posElement.width + "px";
                                        document.getElementById("tooltipBtn").style.top = posElement.y - 5 + "px";
                                        document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';
                                        let blockWidth = posElement.width;
                                        let screenWidth = document.body.clientWidth;
                                        let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                                        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                            document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip - 15 + 'px';
                                        }
                                    }
                                }, 300)
                            }}
                                onMouseLeave={e => {
                                    document.getElementById("tooltipBtn").style.animation = '';
                                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                                    clearTimeout(timer);
                                }}>{x.text}</div>))}
                        </SimpleBar>
                    </div>
                </div>
            </div>
        </div >
    )
}

export {
    Dropdown,
    DropdownCountry,
    DropdownPay,
    DropdownStatus,
    DropdownDelivery

}