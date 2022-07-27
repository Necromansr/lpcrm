import React, { useState, useEffect, useRef } from 'react';
import { formatPhone, recognizeOperator } from '@jaood/phone-numbers';
let inputselect;
const WarehouseInputField = ({setAddOneItem, data, setData, index, podlozhka, setPodlozhka, setHideMenu, addOneItem, value, type, iconOperator, setHideArrow }) => {
    function inputOn(e, index) {
        inputselect = setTimeout(() => {
            if (!data[index].lock) {
                e.target.setSelectionRange(e.target.value.length, e.target.value.length);
                e.target.focus();
                e.target.select();
            }
        }, 150);
    }
    const refInput = useRef();

    function inputOff(e) {
        if (!podlozhka) {
            e.target.blur();
        }
        clearTimeout(inputselect);
    }
    const [input, setInput] = useState(data[index].attribute);
    const [memoryInput, setMemoryInput] = useState(data[index].attribute);
    const [flag, setFlag] = useState(false);
    function changeInput(e) {
		refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
		refInput.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 0;
		refInput.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 0;
        refInput.current.closest('td').style.zIndex = 99;
        refInput.current.closest('tr').classList.add('hover-disabled');
        refInput.current.closest('td').querySelector('span').style.width = '100%';
        if (e.target.value.length >= 1) {
            e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
        }
        setHideMenu(true);
        setFlag(true);
        setInput(e.target.value);
        setPodlozhka(true);
    }
    useEffect(() => {
        if (!podlozhka && flag) {
            if (type === 'attribute') {
                if (input !== '') {
                    data[index].attribute = input;
                    setData([...data])
                    setMemoryInput(input)
                } else {
                    data[index].attribute = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            } else if (type === 'commentary') {
                if (input !== '') {
                    data[index].commentary = input;
                    setData([...data])
                    setMemoryInput(input)
                } else {
                    data[index].commentary = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            } else if (type === 'contact') {
                if (input !== '') {
                    data[index].contact = input;
                    setData([...data])
                    setMemoryInput(input)
                } else {
                    data[index].contact = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            } else if (type === 'company') {
                if (input !== '') {
                    data[index].company = input;
                    setData([...data])
                    setMemoryInput(input)
                } else {
                    data[index].company = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            }
            else if (type === 'number') {
                if (input !== '') {
                    data[index].number = input;
                    setData([...data])
                    setMemoryInput(input)
                } else {
                    data[index].number = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            }
            setHideArrow(true);
            setFlag(false);
            refInput.current.closest('td').querySelector('span').style.width = '0%';
            refInput.current.closest('td').style.zIndex = '';
            refInput.current.closest('tr').classList.remove('hover-disabled');
        }
        if (!podlozhka && value === '' && input === '') {
            data.shift();
            setHideArrow(true);
            setData([...data]);
        }
    }, [podlozhka, data])
    useEffect(() => {
        setFlag(addOneItem)
    }, [addOneItem])
    useEffect(() => {
        setInput(value)
    }, [value])
    const enter = (e) => {
        if(e.key === 'Enter'){
            if (type === 'attribute') {
                if (input !== '') {
                    data[index].attribute = input;
                    console.log(data);
                    setData([...data])
                    setMemoryInput(input)
                } else {
                    data[index].attribute = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            } else if (type === 'commentary') {
                if (input !== '') {
                    data[index].commentary = input;
                    setData([...data])
                    setMemoryInput(input)
                } else {
                    data[index].commentary = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            } else if (type === 'contact') {
                if (input !== '') {
                    data[index].contact = input;
                    setData([...data])
                    setMemoryInput(input)
                } else {
                    data[index].contact = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            } else if (type === 'company') {
                if (input !== '') {
                    data[index].company = input;
                    setData([...data])
                    setMemoryInput(input)
                } else {
                    data[index].company = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            }
            else if (type === 'number') {
                if (input !== '') {
                    data[index].number = input;
                    setData([...data])
                    setMemoryInput(input)
                } else {
                    data[index].number = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            }
            setHideArrow(true);
            setFlag(false);
            setPodlozhka(false);
            setHideMenu(false);
            setAddOneItem(false);
            e.target.blur();
            if((data.length) * 18 < (	refInput.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
                refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
            }else {
                refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
            }
            refInput.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
            refInput.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
            refInput.current.closest('td').querySelector('span').style.width = '0%';
            refInput.current.closest('td').style.zIndex = '';
            refInput.current.closest('tr').classList.remove('hover-disabled');
        }
      
    }
    function clickVirtualWrapper () {
		setPodlozhka(false);
		setHideMenu(false);
		setFlag(false);
        setAddOneItem(false);
        if((data.length) * 18 < (refInput.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
			refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
		}else {
			refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
		}
		refInput.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
		refInput.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
	}
	function handle(e) {
        if (refInput.current && !refInput.current.contains(e.target)) {
			clickVirtualWrapper()
		}
    }
    useEffect(() => {
		if(flag){
			document.addEventListener("click", handle, true);
		}
        return () => {
            document.removeEventListener("click", handle, true);
        };
    }, [flag]);
    return (
        <>
            {iconOperator && <span className={recognizeOperator(input, 'UA')} style={{ marginRight: 6, top: 1, position: 'relative', marginLeft: 4, pointerEvents: 'none' }}></span>}
            <input
                onMouseEnter={(e) => {e.stopPropagation();inputOn(e, index)}}
                onMouseLeave={e => inputOff(e, index)}
                style={{ color: `${!data[index].status ? 'rgba(0,0,0,0.4)' : ''}` }}
                className='warehouseInput'
                value={iconOperator ? formatPhone(input, 'UA') : input}
                onChange={changeInput}
                disabled={data[index].lock && true}
                onKeyDown={enter}
                onClick={e => e.target.style.cursor = 'none'}
                onMouseMove={e => e.target.style.cursor = 'text'}
                ref={refInput}
            />
            <span className="underline"
                style={{
                    transition: '0.2s',
                    width: '0%',
                    backgroundColor: '#9c9b9e',
                    height: '1px',
                    bottom: '2px',
                    left: 0,
                    zIndex: 4,
                    position: 'absolute',
                    pointerEvents:'none'
                }}>
            </span>
        </>
    )
}

export default WarehouseInputField;
