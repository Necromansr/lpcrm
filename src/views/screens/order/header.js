
import { useRef, useEffect, useState } from 'react';
import * as hints from '../../../until/hints'
import { connect } from "react-redux";
import styles from './style.module.css';

import { changeZoom } from "../../../store/actions/index";
let isDown = false;
let startX;
let scrollLeft;
let timer = null;
var scale = 1;


const mapStateToProps = state => {
    return { zoom: state.zoom };
};
const mapDispatchToProps = dispatch => {
    return {
        changeZoom: zooms => dispatch(changeZoom(zooms)),
    };
}

let calc = (obj, el) => {
    let sumColumn = 0;

    Object.entries(obj).forEach(([key, value], index) => {
        sumColumn += el[index].clientWidth;
        value.sum = sumColumn;
        value.width = el[index].clientWidth;
        if (value.sum > document.body.clientWidth) {
            value.show = false;
            value.empty = false;
        }
    })
    return obj;
}

const updateShow = (e, obj) => {
    let leftScroll = e.target.scrollLeft;
    Object.entries(obj).forEach(([key, element]) => {
        if (element.sum < leftScroll || element.sum > (leftScroll + document.body.clientWidth)) {
            element.empty = false;
        } else {
            element.empty = true;
        }
        if (element.sum < (leftScroll + document.body.clientWidth)) {
            element.show = true;
        } else {
            element.show = false;
        }
    })
    return obj;
}



const Header = ({ zoom, changeZoom, status, search, setArr, scroll }) => {
    let ref = useRef();
    const [obj, setObj] = useState(status);
    function onMouseDown(e) {
        if (!e.target.classList.contains('resize') && !e.target.classList.contains('drag')) {
            isDown = true;
            startX = e.pageX - ref.current.offsetLeft;
            scrollLeft = ref.current.scrollLeft;
            ref.current.style.scrollBehavior = '';

        } else {
            isDown = false;
        }

    }

    function onMouseLeave(e) {
        ref.current.style.scrollBehavior = 'smooth';
        isDown = false;
    }

    function onMouseMove(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        const walk = (x - startX) * 2 //scroll-fast
        ref.current.scrollLeft = scrollLeft - walk;
    }

    const clickPrev = (e) => {
        ref.current.scrollLeft = 0;

    }

    const clickNext = (e) => {
        ref.current.scrollLeft = ref.current.scrollLeft + 600;
    }

    useEffect(async () => {

        if (search['status_id'] === '') {
            document.querySelectorAll('.crm-header-link')[0].classList.add('btn-toggle')
        }
        // [...document.querySelectorAll('.crm-header-link')].forEach(x => x.addEventListener('click', async e => {

        // }))


        ref.current.addEventListener('mousedown', onMouseDown, false);
        ref.current.addEventListener('mouseleave', onMouseLeave, false);
        ref.current.addEventListener('mouseup', onMouseLeave, false);
        ref.current.addEventListener('mousemove', onMouseMove, false);



    }, [])

    let onClick = async e => {
        if(!e.target.classList.contains('btn-toggle')){
            [...document.querySelectorAll('.crm-header-link')].forEach(y => y.classList.remove('btn-toggle'));
            // document.querySelector('.refresh').lastChild.style.strokeOpacity = 1;
            search['statusId'] = e.target.dataset.id === '1' ? "" : +e.target.dataset.id;
            scroll.scrollTop = 0;
            const rawResponse = await fetch('http://localhost:3005/search', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "query": Object.filter(search, ([name, text]) => text !== '' && text.length !== 0),
                    "end": (Math.floor(document.body.clientHeight * 1.5 / (18 + 18))) * 3
                    // "query":
                })
            }).catch(e => console.log(e));
            const content = await rawResponse.json();
    
            setArr(content.orders.map(x => { return { ...x, select: false } }));
    
            e.target.classList.add('btn-toggle');
        }
    }
    useEffect(() => {
        setObj(JSON.parse(JSON.stringify(calc(status, document.querySelectorAll('.crm-header-link')))))
    }, [status.length])
    const onScroll = (e) => setObj(JSON.parse(JSON.stringify(updateShow(e, status))));
    return (
        <>
            <div className="crm-header" id="crmHeader" onScroll={onScroll} ref={ref} style={{ overflow: 'auto', scrollBehavior: 'smooth', width: document.body.clientWidth - 155}} >
                <div style={{ width: (status[status.length - 1]?.sum + 5 ) }}>
                    {status.map((x, index) => {
                        if (x.show) {
                            return (
                                <div key={index} className={+x?.count === 0 ? "crm-header-link allOrder disable" : "crm-header-link allOrder"}  style={{width: x.width}}  onClick={+x.count ?? 0 === 0 ? onClick : null} data-id={x.id}
                                    onMouseEnter={e => {

                                        timer = setTimeout(() => {
                                            document.getElementById("tooltipBtn").style.fontSize = '14px';
                                            document.getElementById("tooltipBtn").innerHTML = x.tooltip;
                                            let posElement = e.target.getBoundingClientRect();
                                            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                            document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
                                            document.getElementById("tooltipBtn").style.animation = 'delay-status 0.75s forwards';
                                            let blockWidth = posElement.width;
                                            let screenWidth = document.body.clientWidth;
                                            let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                                            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                                document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
                                            }
                                        }, 750);

                                    }}
                                    onMouseLeave={e => {
                                        clearTimeout(timer)
                                        document.getElementById("tooltipBtn").style.animation = '';

                                    }}>{x.empty && <> <span className="color-form" style={{ backgroundColor: x.color }} ></span><span className="btn-link"  >{x.name} </span><span className="count-link">{x.count ?? 0}</span></>}</div>
                            )
                        }

                    })}
                </div>
                <div class="shadow-right"></div>
            </div>
            <div className="arrow-bg" style={{ filter: 'none', zIndex: 9999 }}><span className="arrow-prev" id="prev" onClick={clickPrev}></span><span id="next" className="arrow-next" onClick={clickNext}></span></div>
        </>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);