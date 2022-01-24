import './dropdown.css';

import React, { Component, useEffect, useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { arrowDown, arrowUp } from '../../until/images'


let arr = [
    { key: 0, text: 'Розничный магазин', select: true },
    { key: 1, text: 'Розничный магазин Розничный магазин', select: false },
    { key: 2, text: 'Розничный магазин', select: false },
    { key: 3, text: 'Отдел ОАЭ', select: false },
    { key: 4, text: 'Black slave', select: false },
    { key: 5, text: 'Отдел ОАЭ', select: false },
    { key: 6, text: 'Оптовый отдел', select: false },
]
let timer;
export const Dropdown = ({ }) => {

    const refInput = useRef();
    const [isOpen, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [list, setList] = useState(arr);

    useEffect(() => {
        setOpen(false)
    }, [list])

    const open = e => {
        setText('');
        setTimeout(() => {
            refInput.current.focus()
        }, 300);
        setOpen(true)
    }

    const onChange = index => {
        let temp = list;
        temp.forEach(x => x.select = false);
        temp.forEach(x => { if (x.key === index) x.select = true })
        setList([...temp])
    }


    const search = (value) => {
        if (text !== "") {
            let re = new RegExp(text, "gui");
            let text_pr = value.replace(re, x => '<span class="findUnderline">' + x + '</span>');
            return text_pr;
        } else {
          return value;
        }
    }

    return (
        <div className="order-dropdown" onClick={open}>
            {list.map(x => (
                x.select && <div className="btn-order"><span className="order-tooltip findFunction text-otdel">{x.text}</span></div>
            ))}
            <div className={isOpen ? "btn-order-input toggle" : "btn-order-input"}>
                <input onChange={e => setText(e.target.value)} ref={refInput} className="btn-order-search" type="text" value={text} />
                <div className="btn-order-count order-tooltip">({list.filter(x => x.text.toLowerCase().includes(text.toLowerCase())).length})</div>
            </div>
            <div className={isOpen ? "btn-menu toggle" : "btn-menu"} >
                {list.filter(x => x.text.toLowerCase().includes(text.toLowerCase())).map((x, index) => {


                    return (<div onClick={e => onChange(x.key)} className={x.select ? "btn-menu-list select-btn" : "btn-menu-list"}><span className="order-tooltip findFunction text-otdel" onMouseEnter={e => {
                        timer = setTimeout(() => {
                            if (e.target.scrollWidth > e.target.offsetWidth) {

                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                document.getElementById('tooltipBtn').innerText = x.text;
                                let posElement = e.target.getBoundingClientRect();
                                document.getElementById("tooltipBtn").style.left = posElement.x + e.target.parentElement.parentElement.clientWidth + "px";
                                document.getElementById("tooltipBtn").style.top = posElement.y + "px";
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
                        }} dangerouslySetInnerHTML={{__html: search(x.text)}}></span></div>
                    )
                }
                )}
            </div>
        </div>
    )
}