import React, { Component, useState, useRef, useEffect } from "react";
import * as DTD from 'react-draggable';
let column = {
    id: '4234',
    status: 'Новый',
    bayer_name: 'bayer_name',
    localization: 'ua',
    phone: '+435435436536',
    comment: '423432423432423432423423432',
    total: '432423.00',
    product: 'rest',
    pay: '2423',
    ppo: 't',
    delivery: '423',
    addres: 'address',
    ttn: 'ttn',
    ttn_status: 'Новый',
    ttn_user: 'test',
    office: 'Новый',
    date1: 'Новый',
    date2: 'Новый',
    date3: 'Новый',
    date4: 'Новый',
    date5: 'Новый',
    date6: 'Новый',
    date7: 'Новый',
    date8: 'Новый',
    site: 'Новый',
    ip: 'Новый',
    utm1: 'Новый',
    utm2: 'Новый',
    utm3: 'Новый',
    utm4: 'Новый',
    utm5: 'Новый',
    additional_1: 'Новый',
    additional_2: 'Новый',
    additional_3: 'Новый',
    additional_4: 'Новый',
    additional_5: 'Новый',
    additional_6: 'Новый',
    additional_7: 'Новый',
    additional_8: 'Новый',
    additional_9: 'Новый',
    additional_10: 'Новый',
    select: false
}
let timers;
const Wrapper = React.memo(({ }) => (
    <div style={{ width: "100%", height: document.body.clientHeight - 120, position: 'absolute', backgroundColor: 'rgba(111, 111, 111, 0.1)', top: 0, left: 0, zIndex: -1 }}></div>
))
let startTH = [{ width: 88, color: "#f1f1f1" }, { width: 58 }, { width: 156, color: "#f1f1f1" }, { width: 178 }, { width: 58 }, { width: 54, color: "#f1f1f1" }, { width: 68 }, { width: 58, color: "#f1f1f1" }, { width: 74 }, { width: 184, color: "#f1f1f1" }, { width: 64 }, { width: 124, color: "#f1f1f1" }, { width: 134 }, { width: 122, color: "#f1f1f1" }, { width: 134 }, { width: 68, color: "#f1f1f1" }, { width: 134 }, { width: 76, color: "#f1f1f1" }, { width: 74 }, { width: 74, color: "#f1f1f1" }, { width: 84 }, { width: 68, color: "#f1f1f1" }, { width: 136 }, { width: 92, color: "#f1f1f1" }, { width: 86 }, { width: 96, color: "#f1f1f1" }, { width: 74 }, { width: 92, color: "#f1f1f1" }, { width: 108 }, { width: 84, color: "#f1f1f1" }, { width: 86 }, { width: 86, color: "#f1f1f1" }, { width: 86 }, { width: 86, color: "#f1f1f1" }, { width: 86 }, { width: 86, color: "#f1f1f1" }, { width: 86 }, { width: 86, color: "#f1f1f1" }, { width: 94 }];




function useShow(
    elementRef,
) {
    const [value, setValue] = useState(false)
    const [node1, setNode] = useState(null)
    const [tooltip, setTooltip] = useState(false)
    let node = null;
    const handleMouseEnter = e => {
        setValue(true);
        node.parentElement.style.cssText += 'z-index: 12';
    }
    const handleMouseDown = e => {
        setValue(true);
        setTooltip(true);
        node.parentElement.style.cssText += 'z-index: 12';
        node.removeEventListener('mouseleave', handleMouseLeave);
        node.removeEventListener('mouseenter', handleMouseEnter);
    }
    const handleMouseLeave = e => {
        setValue(false);
    }
    const handleMouseUp = e => {
        setValue(false)
        node.addEventListener('mouseenter', handleMouseEnter)
        node.addEventListener('mouseleave', handleMouseLeave)
        node.parentElement.style.cssText += 'z-index: 2';
    }


    const handleDblClick = e => {
        node.parentElement.style.minWidth = '0px'
        node.dataset.dbl = true;
    }

    useEffect(() => {
        setNode(elementRef.current)
        node = elementRef?.current;
        if (node) {
            node.addEventListener('mouseenter', handleMouseEnter)
            node.addEventListener('mouseleave', handleMouseLeave)
            node.addEventListener('mousedown', handleMouseDown)
            document.addEventListener('mouseup', handleMouseUp)
            node.addEventListener('dblclick', handleDblClick)


            return () => {
                node.removeEventListener('mouseenter', handleMouseEnter)
                node.removeEventListener('mouseleave', handleMouseLeave)
                node.removeEventListener('mousedown', handleMouseDown)
                node.removeEventListener('mouseup', handleMouseUp)
                node.addEventListener('dblclick', handleDblClick)

            }
        }
    }, [elementRef])

    return { value, node1, setValue, handleMouseEnter, handleMouseLeave, tooltip }
}
const TH = ({ children, style, className, index }) => {
    const hoverRef = useRef(null)
    const isHover = useShow(hoverRef);
    const [x, setX] = useState(0)

    return (

        <th
            style={style} className={className}>

            {children}
            <DTD

                axis="x" position={{ x: 0, y: 0 }}
                onStart={(e) => { setX(e.pageX); }}
                onStop={(e, d) => {
                    setTimeout(() => {
                        if (isHover.node1.dataset.dbl === "false") {
                            startTH[index].width = (isHover.node1.parentElement.clientWidth - 8) + (e.pageX - x);
                            isHover.node1.parentElement.style.minWidth = (isHover.node1.parentElement.clientWidth - 8) + (e.pageX - x) + 'px';
                        }
                    }, document.body.clientHeight - 120);
                    isHover.node1.dataset.dbl = false;

                }
                }
            ><div ref={hoverRef} data-dbl={false} style={{ width: '70px', cursor: 'pointer', position: 'absolute', top: 0, right: '-10px', zIndex: 10 }}>
                    <div className={isHover.value ? 'show' : 'hide'} style={{ height: '25px', width: '10px', position: 'absolute', right: '10px' }}></div>
                    <div className={isHover.value ? 'show' : 'hide'} style={isHover.tooltip ? { height: '100vh', width: '1px', position: 'absolute', right: '10px' } : { height: '25px', width: '1px', position: 'absolute', right: '10px' }}></div>
                </div></DTD>
        </th>
    )
}
const setInitialState = settings => {
    const {
        itemHeight,
        amount,
        tolerance,
        minIndex,
        maxIndex,
        startIndex
    } = settings;
    const viewportHeight = amount * itemHeight;
    const totalHeight = (maxIndex - minIndex + 1) * itemHeight;
    const toleranceHeight = tolerance * itemHeight;
    const bufferHeight = viewportHeight + 2 * toleranceHeight;
    const bufferedItems = amount + 2 * tolerance;
    const itemsAbove = startIndex - tolerance - minIndex;
    const topPaddingHeight = itemsAbove * itemHeight;
    const bottomPaddingHeight = totalHeight - topPaddingHeight;
    const initialPosition = topPaddingHeight + toleranceHeight;
    return {
        settings,
        viewportHeight,
        totalHeight,
        toleranceHeight,
        bufferHeight,
        bufferedItems,
        topPaddingHeight,
        bottomPaddingHeight,
        initialPosition,
        data: [],
        count: 0
    };
};

class Scroller extends Component {
    constructor(props) {
        super(props);
        this.state = setInitialState(props.settings);
        this.viewportElement = React.createRef();
    }

    componentDidMount() {
        this.viewportElement.current.scrollTop = this.state.initialPosition;
        if (!this.state.initialPosition) {
            this.runScroller({ target: { scrollTop: 0 } });
        }
    }

    runScroller = ({ target: { scrollTop } }) => {
        const {
            totalHeight,
            toleranceHeight,
            bufferedItems,
            count,
            settings: { itemHeight, minIndex }
        } = this.state;
        
        const index = minIndex + Math.floor((scrollTop - toleranceHeight) / itemHeight);
        const data = this.props.get(index, bufferedItems);
        const topPaddingHeight = Math.max((index - minIndex) * itemHeight, 0);
        const bottomPaddingHeight = Math.max(
            totalHeight - topPaddingHeight - data.length * itemHeight,
            0
        );

        // clearTimeout(timers);
        // if (!document.querySelector('tbody').classList.contains('disable-hover')) {
        //     document.querySelector('tbody').classList.add('disable-hover')
        // }

        // timers = setTimeout(function () {
        //     document.querySelector('tbody').classList.remove('disable-hover')
        // }, 350);
        this.setState({
            topPaddingHeight,
            bottomPaddingHeight,
            data
        });
    };

    render() {
        const {
            viewportHeight,
            topPaddingHeight,
            bottomPaddingHeight,
            data
        } = this.state;
        return (
            <div
                className="viewport"
                ref={this.viewportElement}
                onScroll={this.runScroller}
                style={{ height: 850, willChange: 'transform' }}
            >
                <table >

                    <thead>
                        <tr className="table-header">
                            <th style={{
                                position: 'sticky',
                                top: 0, left: 0, zIndex: 2, backgroundColor: '#F1F1F1'
                            }} className="header-id">


                                ID

                            </th>
                            <TH style={{
                                position: 'sticky',
                                top: 0, left: 0, zIndex: 2,
                                minWidth: 110, backgroundColor: '#fff'
                            }} className="header-status">
                                Статус
                            </TH>



                            {Object.keys(column).slice(2).slice(0).map((x, i) => {


                                if (x === "ppo") {
                                    return (
                                        <TH style={{

                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {/*  */}
                                            {'ПPPO'}
                                        </TH>
                                    )
                                }
                                if (x === "bayer_name") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Покупатель'}
                                        </TH>
                                    )
                                }
                                if (x === "localization") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Страна'}
                                        </TH>
                                    )
                                }
                                if (x === "phone") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Телефон'}
                                        </TH>
                                    )
                                }
                                if (x === "comment") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Комментарий'}
                                        </TH>

                                    )
                                }
                                if (x === "total") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Сумма'}
                                        </TH>
                                    )
                                }
                                if (x === "product") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Товар'}
                                        </TH>
                                    )
                                }
                                if (x === "pay") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Оплата'}
                                        </TH>
                                    )
                                }
                                if (x === "delivery") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Доставка'}
                                        </TH>
                                    )
                                }
                                if (x === "addres") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Адрес'}
                                        </TH>
                                    )
                                }
                                if (x === "ttn") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'ТТН'}
                                        </TH>

                                    )
                                }
                                if (x === "ttn_status") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'ТТН статус'}
                                        </TH>
                                    )
                                }
                                if (x === "ttn_user") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Просмотрел'}
                                        </TH>
                                    )
                                }
                                if (x === "office") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Отдел'}
                                        </TH>

                                    )
                                }
                                if (x === "date1") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Добавлен'}
                                        </TH>
                                    )
                                }
                                if (x === "date2") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Открыт'}
                                        </TH>
                                    )
                                }
                                if (x === "date3") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Принят'}
                                        </TH>

                                    )
                                }
                                if (x === "date4") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Принят за'}
                                        </TH>
                                    )
                                }
                                if (x === "date5") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Принял'}
                                        </TH>

                                    )
                                }
                                if (x === "date6") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Отправка'}
                                        </TH>
                                    )
                                }
                                if (x === "date7") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Отправлен'}
                                        </TH>


                                    )
                                }
                                if (x === "date8") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Изменен'}
                                        </TH>


                                    )
                                }
                                if (x === "site") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Сайт'}
                                        </TH>
                                    )
                                }
                                if (x === "ip") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'IP'}
                                        </TH>
                                    )
                                }
                                if (x === "utm1") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'utm_'}
                                        </TH>
                                    )
                                }
                                if (x === "utm2") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'utm_medium'}
                                        </TH>
                                    )
                                }
                                if (x === "utm3") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'utm_term'}
                                        </TH>
                                    )
                                }
                                if (x === "utm4") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'utm_content'}
                                        </TH>
                                    )
                                }
                                if (x === "utm5") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'utm_campaign'}
                                        </TH>
                                    )
                                }
                                if (x === "additional_1") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Доп. поле 1'}
                                        </TH>
                                    )
                                }
                                if (x === "additional_2") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Доп. поле 2'}
                                        </TH>
                                    )
                                }
                                if (x === "additional_3") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Доп. поле 3'}
                                        </TH>
                                    )
                                }
                                if (x === "additional_4") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Доп. поле 4'}
                                        </TH>
                                    )
                                }
                                if (x === "additional_5") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Доп. поле 5'}
                                        </TH>
                                    )
                                }
                                if (x === "additional_6") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Доп. поле 6'}
                                        </TH>
                                    )
                                }
                                if (x === "additional_7") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Доп. поле 7'}
                                        </TH>
                                    )
                                }
                                if (x === "additional_8") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Доп. поле 8'}
                                        </TH>
                                    )
                                }
                                if (x === "additional_9") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#F1F1F1', zIndex: 2
                                        }} key={i} index={i}>

                                            {'Доп. поле 9'}
                                        </TH>
                                    )
                                }
                                if (x === "additional_10") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, backgroundColor: '#fff', zIndex: 2
                                        }} key={i} index={i}>
                                            {'Доп. поле 10'}
                                        </TH>
                                    )
                                }
                            }


                            )}



                        </tr>
                        <tr style={{ height: 0, zIndex: -1, position: 'sticky', top: 24, left: 0 }} className="table-header">
                            <th style={{
                                position: 'sticky',
                                top: 0, left: 0, zIndex: -1,
                            }} className="header-id">
                                <Wrapper />


                            </th>
                            <TH style={{
                                position: 'sticky',
                                top: 0, left: 28, zIndex: 1,
                                minWidth: 110
                            }} className="header-status">
                            </TH>



                            {Object.keys(column).slice(2).slice(0).map((x, i) => {


                                if (x === "ppo") {
                                    return (
                                        <TH style={{

                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            {/* <Wrapper /> */}
                                        </TH>
                                    )
                                }
                                if (x === "bayer_name") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "localization") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>
                                    )
                                }
                                if (x === "phone") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "comment") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>

                                    )
                                }
                                if (x === "total") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "product") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>
                                    )
                                }
                                if (x === "pay") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "delivery") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>
                                    )
                                }
                                if (x === "addres") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "ttn") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>

                                    )
                                }
                                if (x === "ttn_status") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "ttn_user") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>
                                    )
                                }
                                if (x === "office") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>

                                    )
                                }
                                if (x === "date1") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>
                                    )
                                }
                                if (x === "date2") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "date3") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>

                                    )
                                }
                                if (x === "date4") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "date5") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>

                                    )
                                }
                                if (x === "date6") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "date7") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>


                                    )
                                }
                                if (x === "date8") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>


                                    )
                                }
                                if (x === "site") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>
                                    )
                                }
                                if (x === "ip") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "utm1") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>
                                    )
                                }
                                if (x === "utm2") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "utm3") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>
                                    )
                                }
                                if (x === "utm4") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "utm5") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>
                                    )
                                }
                                if (x === "additional_1") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "additional_2") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>
                                    )
                                }
                                if (x === "additional_3") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "additional_4") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>
                                    )
                                }
                                if (x === "additional_5") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "additional_6") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>
                                    )
                                }
                                if (x === "additional_7") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "additional_8") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>
                                    )
                                }
                                if (x === "additional_9") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                            <Wrapper />
                                        </TH>
                                    )
                                }
                                if (x === "additional_10") {
                                    return (
                                        <TH style={{

                                            minWidth: startTH[i].width,
                                            position: 'sticky',
                                            top: 0, zIndex: -1
                                        }} key={i} index={i}>
                                        </TH>
                                    )
                                }
                            }


                            )}



                        </tr>
                    </thead>
                    <tbody >
                        <div style={{ height: topPaddingHeight }} />
                        {data.map(this.props.row)}
                        <div style={{ height: bottomPaddingHeight }} />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Scroller;
