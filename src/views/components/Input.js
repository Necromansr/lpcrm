import React, { useEffect, useState, useRef } from 'react';
import './input.css';


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
            .replace(/( |-|')(?=\1)/g, x => "").replace(/"/g, x => "'").replace(/(?<=')\w/g, x => x.toLowerCase());
        return [temp.slice(0, 80), start - temp.length]
    } else if (type === 'phone') {
        let temp = text.replace(/[^0-9]/g, x => x = "")
        let len = temp.length;
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

export const SearchInput = ({ type, len, name, onWrapper, wrapper, id, refresh }) => {
    let refInput = useRef();
    let [sort, setSort] = useState('');
    let [show, setShow] = useState(false);
    let [value, setValue] = useState('');
    let [select, setSelect] = useState(false);

    useEffect(() => {
        if (!wrapper && select) {
            setSelect(false)
        }

        if (refresh) {
            setSort('')
            setShow(false)
            setValue('')
            setSelect(false)
            refInput.current.value = ''
        }
    }, [wrapper, refresh]);

    let onPress = e => {
        let caretStart = e.target.selectionStart;
        let caretEnd = e.target.selectionEnd;
        let temp = parserText(e.target.value, type, len);
        e.target.value = temp[0];
        setValue(temp[0])
        e.target.setSelectionRange(caretStart - temp[1], caretEnd - temp[1]);
        if ((temp[0].length > 0) && !wrapper) {
            setShow(true);
            setSelect(true)
            onWrapper(true)
        }
    }

    let onInput = e => {
        if (e.inputType === 'insertFromPaste') {
            let temp = parserText(e.target.value, type, len);
            e.target.value = temp[0];
            setValue(temp[0])

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
        setShow(false);
    }



    let onClick = e => {
        if (sort === '' || sort === 'down') {
            setSort('up')
        } else if (sort === 'up') {
            setSort('down')
        }
        onWrapper(false);
        onClose()
        setSelect(false)

    }

    let onMouseEnter = e => {
        if (!wrapper) {
            setShow(true);

            setTimeout(() => {
                e.target.setSelectionRange(e.target.value.length, e.target.value.length);
                e.target.focus()
                e.target.select();
            }, 150);

        }
    }
    return (

        <div className={`sort-menu ${name} addaptiveInputArrow`} onMouseEnter={onOpen} onMouseLeave={onClose} style={(select && wrapper) ? { zIndex: 999, visibility: 'visible' } : {}}>
            <input ref={refInput}  autoComplete={"new-password"} id={id} onMouseEnter={onMouseEnter} onMouseLeave={e => {
                if (!select)
                    e.target.blur()
            }} onKeyUp={onPress} onInput={onInput} data-count={len ? len : ""} className="input-style idTovara" style={(select && !wrapper) ? { visibility: 'hidden' } : { paddingRight: 0, visibility: 'visible', background: 'rgb(212, 212, 212)', paddingRight: 3 }} />
            <div className={sort !== '' || show || (select && wrapper) ? "sort-btn sort-toggle" : "sort-btn"} style={sort === 'up' ? { transform: 'scaleX(-1)' } : {}} onClick={onClick} onMouseEnter={e => {
                document.getElementById("tooltipBtn").style.fontSize = '12px';
                document.getElementById("tooltipBtn").innerText = 'Сортировать данные ↑↓';
                let posElement = e.target.getBoundingClientRect();
                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';
            }}
                onMouseLeave={e => {
                    document.getElementById("tooltipBtn").style.animation = '';
                    document.getElementById("tooltipBtn").style.fontSize = '12px';
                }}>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.06508L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z" fill="black"></path>
                </svg>
            </div>
            <div className={sort === "" ? "border-sort" : "border-sort border-sort-visible"} style={sort === 'down' ? { visibility: 'visible', opacity: 1, top: 'inherit', bottom: -1 } : sort === 'up' ? { visibility: 'visible', opacity: 1, top: -1, bottom: 'inherit' } : {}}></div>
        </div>
    )
}




export const PhoneInput = ({}) => {


    return (
        <div></div>
    )
}