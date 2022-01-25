
import { useRef, useEffect } from 'react';
import * as hints from '../../../until/hints'
import html2canvas from 'html2canvas';
let isDown = false;
let startX;
let scrollLeft;
let timer = null;
var scale = 1;
export const Header = () => {
    let ref = useRef();

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
    useEffect(() => {
        [...document.querySelectorAll('.crm-header-link')].forEach(x => x.addEventListener('click', e => {
            [...document.querySelectorAll('.crm-header-link')].forEach(y => y.classList.remove('btn-toggle'));
            e.target.classList.add('btn-toggle');
        }))

        ref.current.addEventListener('mousedown', onMouseDown, false);
        ref.current.addEventListener('mouseleave', onMouseLeave, false);
        ref.current.addEventListener('mouseup', onMouseLeave, false);
        ref.current.addEventListener('mousemove', onMouseMove, false);

        return () => {
            // ref.current.removeEventListener('mousedown', onMouseDown);
            // ref.current.removeEventListener('mouseleave', onMouseLeave);
            // ref.current.removeEventListener('mouseup', onMouseLeave);
            // ref.current.removeEventListener('mousemove', onMouseMove);
        }
    }, [])

    return (
        <>
            <div className="crm-header" id="crmHeader" ref={ref} style={{ overflow: 'auto', scrollBehavior: 'smooth' }} >
                <div className="crm-header-link allOrder btn-toggle"
                    onClick={e => {
                        scale += 0.05;
                        document.querySelector('.zoom').style.transform = 'scale(' + scale + ')';
                    }}
                    onMouseEnter={e => {

                        timer = setTimeout(() => {
                            document.getElementById("tooltipBtn").style.fontSize = '14px';
                            document.getElementById("tooltipBtn").innerHTML = hints.allOrder;
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

                    }}><span className="color-C4C4C4 color-form" ></span><span className="btn-link">Все </span><span className="count-link">755</span></div>
                <div className="crm-header-link newOrder"
                    onClick={e => {
                        scale -= 0.05;
                        document.querySelector('.zoom').style.transform = 'scale(' + scale + ')';
                    }}
                    onMouseEnter={e => {

                        timer = setTimeout(() => {
                            document.getElementById("tooltipBtn").style.fontSize = '14px';
                            document.getElementById("tooltipBtn").innerHTML = hints.newOrder;
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

                    }}><span className="color-515151 color-form"></span><span className="btn-link new-orders-header">Новый </span><span className="count-link">181</span></div>
                <div className="crm-header-link acceptOrder" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.acceptOrder;
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

                    }}><span className="color-91d100 color-form"></span><span className="btn-link">Принят </span><span className="count-link">299</span></div>
                <div className="crm-header-link declineOrder" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.declineOrder;
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

                    }}><span className="color-fd7777 color-form"></span><span className="btn-link">Отказ </span><span className="count-link">6</span></div>
                <div className="crm-header-link upakovanOrder" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.upakovanOrder;
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

                    }}><span className="color-928c42 color-form"></span><span className="btn-link">Упакован </span><span className="count-link">16</span></div>
                <div className="crm-header-link peredanOrder" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.peredanOrder;
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

                    }}><span className="color-c6b922 color-form"></span><span className="btn-link">Передан </span><span className="count-link">16</span></div>
                <div className="crm-header-link sendOrder" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.sendOrder;
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

                    }}><span className="color-e2d317 color-form"></span><span className="btn-link">Отправлен </span><span className="count-link">30</span></div>
                <div className="crm-header-link vikuplenOrder" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.vikuplenOrder;
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

                    }}><span className="color-64a727 color-form"></span><span className="btn-link">Выкуплен </span><span className="count-link">43</span></div>
                <div className="crm-header-link moneyGrab" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.moneyGrab;
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

                    }}><span className="color-2c8b11 color-form"></span><span className="btn-link">Деньги получены </span><span className="count-link">43</span></div>
                <div className="crm-header-link finishOrder" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.finishOrder;
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

                    }}><span className="color-00CC00 color-form"></span><span className="btn-link">Завершён </span><span className="count-link">43</span></div>
                <div className="crm-header-link backOrder" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.backOrderSelect;
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

                    }}><span className="color-da291c color-form"></span><span className="btn-link">Возврат (в пути) </span><span className="count-link">42</span></div>
                <div className="crm-header-link backOrderWarehouse" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.backOrderSelect;
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

                    }}><span className="color-FF0000 color-form"></span><span className="btn-link">Возврат (завершён) </span><span className="count-link">42</span></div>
                <div className="crm-header-link dropWaitTtn" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.dropWaitTtn;
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

                    }}><span className="color-856915 color-form"></span><span className="btn-link">(Drop) Ожидает ТТН </span><span className="count-link">42</span></div>
                <div className="crm-header-link dropAssignedTtn" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.dropAssignedTtn;
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

                    }}><span className="color-c7a95c color-form"></span><span className="btn-link">(Drop) Присвоена ТТН </span><span className="count-link">20</span></div>
                <div className="crm-header-link dropSend" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.dropSend;
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

                    }}><span className="color-d7a214 color-form"></span><span className="btn-link">(Drop) Отправлен </span><span className="count-link">3</span></div>
                <div className="crm-header-link dropBuying" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.dropBuying;
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

                    }}><span className="color-68a6d7 color-form"></span><span className="btn-link">(Drop) Выкуплен </span><span className="count-link">5</span></div>
                <div className="crm-header-link dropFinish" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.dropFinish;
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

                    }}><span className="color-169dd9 color-form"></span><span className="btn-link">(Drop) Завершён </span><span className="count-link">5</span></div>
                <div className="crm-header-link dropBack" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.dropBack;
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

                    }}><span className="color-a82451 color-form"></span><span className="btn-link">(Drop) Возврат </span><span className="count-link">5</span></div>
                <div className="crm-header-link dropBackFinish" onMouseEnter={e => {
                    timer = setTimeout(() => {
                        document.getElementById("tooltipBtn").style.fontSize = '14px';
                        document.getElementById("tooltipBtn").innerHTML = hints.dropBackFinish;
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

                    }}><span className="color-d90d53 color-form"></span><span className="btn-link">(Drop) Возврат (учтён) </span><span className="count-link">5</span></div>
            </div>
            <div className="arrow-bg" style={{ filter: 'none', zIndex: 9999 }}><span className="arrow-prev" id="prev" onClick={clickPrev}></span><span id="next" className="arrow-next" onClick={clickNext}></span></div>
        </>
    )
}

