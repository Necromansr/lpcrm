import React, { useState, useEffect,useRef } from 'react'

const WarehouseCountryField = ({ country, podlozhka, setPodlozhka, data, setData, setHideMenu, index }) => {

    const [newarr, setNewArr] = useState([
        // { id: 0, country: 'all', select: true },
        { id: 0, country: '🇷🇺', select: false },
        { id: 1, country: '🇺🇦', select: false },
        { id: 2, country: '🇹🇷', select: false },
    ]);
    const [openMenu, setOpenMenu] = useState(false);
    const [result, setResult] = useState(country);
    const [flag, setFlag] = useState(false);
    const refDropmenu = useRef();
    function onClick() {
        setPodlozhka(true);
        setOpenMenu(true);
        setFlag(true);
        setHideMenu(true);
        document.querySelector('.contentScroll').style.overflow = 'hidden';
        document.querySelector('.track-vertical').style.opacity = 0;
        document.querySelector('.track-horizontal').style.opacity = 0;
        refDropmenu.current.closest('tr').classList.add('hover-disabled');
    }
    useEffect(() => {
        if (!podlozhka && flag) {
            setFlag(false);
            setOpenMenu(false);
            setHideMenu(false);
            document.querySelector('.contentScroll').style.overflow = 'auto';
            document.querySelector('.track-vertical').style.opacity = 1;
            document.querySelector('.track-horizontal').style.opacity = 1;
            refDropmenu.current.closest('tr').classList.remove('hover-disabled');
        }
    }, [podlozhka])
    useEffect(() => {
        if (openMenu) {
            let pos = refDropmenu.current.getBoundingClientRect();
            const heightPlus = pos.y + refDropmenu.current.offsetHeight;
            const viewportHeight = document.body.clientHeight;
            if (heightPlus + 100 > viewportHeight) {
                // refDropmenu.current.style.bottom = '18px';
                refDropmenu.current.classList.add('toggleUp');
            }
        }

    }, [openMenu])
    function clicklist(i) {
        let obj = newarr.map((x, ind) => {
            if (ind === i) {
                setResult(x.country)
                data[index].country = x.country;
                setData([...data]);
                return { ...x, select: true };
            } else {
                return { ...x, select: false }
            };
        });
        setNewArr(obj);
    }
    const [hidearrow,sethidearrow] = useState(false)
    return (
        <div className={`warehouse-dropmenu ${!hidearrow && 'hide-arrow'}`}
            style={{ height: 18, lineHeight: '18px', zIndex: `${openMenu ? '3' : '0'}` }}
            onClick={(e) => { onClick(); e.stopPropagation() }}
            onMouseEnter={()=> sethidearrow(true)}
            onMouseLeave={()=> sethidearrow(false)}>
            <div style={{width:'100%',textAlign: 'center'}} >
                <span style={{color:'rgba(0,0,0,1)'}} className={'flags'}>
                    {result}
                </span>
            </div>
            <div ref={refDropmenu} className={`dropmenu ${openMenu && 'dropmenu toggle'}`} style={openMenu ? {height: 90}: {height:0}}>
                {openMenu && newarr.map((x, i) =>
                    <div
                        className={`list ${x.select && 'select-btn'}`}
                        onClick={(e) => clicklist(i)}
                        style={{ textOverflow: 'unset'}}
                    >
                        <span className='flags'>{x.country}</span>
                    </div>)
                }
            </div>
        </div>
    )
}

export default WarehouseCountryField;
