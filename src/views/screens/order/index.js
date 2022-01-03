import React, { useEffect, useState, useRef } from "react";
import { lock } from '../../../until/images';
import Zakazy from "./zakazy";
import * as DTD from 'react-draggable';
import * as hints from '../../../until/hints'
import DropdownSmall from '../../components/DropdownSmall'
import DropdownMedium from '../../components/DropdownMedium'
import { SearchInput } from '../../components/Input';
import './index2.scss';
import DropdownLarge from "../../components/DropdownLarge";
import Calendar from "../../components/Calendar";
import ProductDropdown from "../../components/ProductDropdown";
import Range from "../../components/Range";

let country = {
  "Украина": "🇺🇦",
  "Россия": "🇷🇺",
  "Албания": "🇦🇱"
}

let columns = {
  id: {
    defaultWidth: 35,
    width: 35,
    resize: false,
    swap: false,
    show: true
  },
  status: {
    defaultWidth: 110,
    width: 110,
    resize: true,
    swap: false,
    show: true
  },
  attribute: {
    defaultWidth: 116,
    width: 116,
    resize: true,
    swap: false,
    show: true
  },
  localization: {
    defaultWidth: 55,
    width: 55,
    resize: false,
    swap: true,
    show: true
  },
  bayer_name: {
    defaultWidth: 142,
    width: 142,
    resize: true,
    swap: true,
    show: true
  },
  phone: {
    defaultWidth: 150,
    width: 150,
    resize: false,
    swap: true,
    show: true
  },
  comment: {
    defaultWidth: 187,
    width: 187,
    resize: true,
    swap: true,
    show: true
  },
  total: {
    defaultWidth: 60,
    width: 60,
    resize: false,
    swap: true,
    show: true
  },
  product: {
    defaultWidth: 258,
    width: 258,
    resize: true,
    swap: true,
    show: true
  },
  pay: {
    defaultWidth: 55,
    width: 55,
    resize: false,
    swap: true,
    show: true
  },
  ppo: {
    defaultWidth: 44,
    width: 44,
    resize: true,
    swap: true,
    show: true
  },
  delivery: {
    defaultWidth: 70,
    width: 70,
    resize: false,
    swap: true,
    show: true
  },
  addres: {
    defaultWidth: 180,
    width: 180,
    resize: true,
    swap: true,
    show: true
  },
  ttn: {
    defaultWidth: 132,
    width: 132,
    resize: true,
    swap: true,
    show: true
  },
  ttn_status: {
    defaultWidth: 100,
    width: 100,
    resize: true,
    swap: true,
    show: true
  },
  ttn_user: {
    defaultWidth: 134,
    width: 134,
    resize: true,
    swap: true,
    show: true
  },
  office: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  date1: {
    defaultWidth: 124,
    width: 124,
    resize: false,
    swap: true,
    show: true
  },
  date2: {
    defaultWidth: 71,
    width: 71,
    resize: false,
    swap: true,
    show: true
  },
  date3: {
    defaultWidth: 124,
    width: 124,
    resize: false,
    swap: true,
    show: true
  },
  date4: {
    defaultWidth: 74,
    width: 74,
    resize: false,
    swap: true,
    show: true
  },
  date5: {
    defaultWidth: 129,
    width: 129,
    resize: true,
    swap: true,
    show: true
  },
  date6: {
    defaultWidth: 71,
    width: 71,
    resize: false,
    swap: true,
    show: true
  },
  date7: {
    defaultWidth: 124,
    width: 124,
    resize: false,
    swap: true,
    show: true
  },
  date8: {
    defaultWidth: 124,
    width: 124,
    resize: false,
    swap: true,
    show: true
  },
  site: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  ip: {
    defaultWidth: 150,
    width: 150,
    resize: true,
    swap: true,
    show: true
  },
  utm1: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true
  },
  utm2: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true
  },
  utm3: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true
  },
  utm4: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true
  },
  utm5: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true
  },
  additional_1: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_2: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_3: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_4: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_5: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_6: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_7: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_8: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_9: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_10: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
}


var timer;
let timers = null,
  selects = false,
  last = 0;
let isDown = false;
let startX;
let scrollLeft;

function useShow(
  elementRef,
  keys,
  cols,
  setCols,
  zIndex
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
    try {
      node.parentElement.style.cssText += zIndex ? 'z-index: ' + zIndex : 'z-index: 2';

    } catch (error) {

    }
  }




  const handleDblClick = e => {
    node.parentElement.style.minWidth = cols[keys].defaultWidth + 'px'
    cols[keys].width = cols[keys].defaultWidth
    setCols(cols)
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





const Korobka = React.memo(({ count, onMouseEnter, onMouseLeave }) => (
  <span className="ico-wrap" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <span className="icon-Exclude colorWhite icons" style={{ pointerEvents: 'none' }}></span>
    <span className="count" style={count.toString().length >= 2 ? { borderRadius: 5, pointerEvents: 'none' } : { pointerEvents: 'none' }}>{count}</span>
  </span>
))

const Additional = React.memo(({ count, hints }) => (
  <span className="ico-wrap" onMouseEnter={e => {
    timer = setTimeout(() => {


      document.getElementById("tooltipBtn").style.fontSize = '12px';

      document.getElementById("tooltipBtn").innerHTML = hints;

      let posElement = e.target.getBoundingClientRect();

      document.getElementById("tooltipBtn").style.left = posElement.x + "px";
      document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
      document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';


    }, 50);

  }}
    onMouseLeave={e => {
      document.getElementById("tooltipBtn").style.animation = '';
      document.getElementById("tooltipBtn").style.fontSize = '12px';
      clearTimeout(timer);
    }}>
    <span className="icon-2 colorWhite icons" style={{ pointerEvents: 'none' }}></span>
    <span className="count" style={count.toString().length >= 2 ? { borderRadius: 5, pointerEvents: 'none' } : { pointerEvents: 'none' }}>{count}</span>
  </span>
))

const Header = ({ setRefresh, refresh }) => {
  let ref = useRef();

  function onMouseDown(e) {
    if (!e.target.classList.contains('resize') && !e.target.classList.contains('drag')) {
      isDown = true;
      startX = e.pageX - ref.current.offsetLeft;
      scrollLeft = ref.current.scrollLeft;

    } else {
      isDown = false;
    }

  }

  function onMouseLeave(e) {
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
    ref.current.style.scrollBehavior = 'smooth';
    ref.current.scrollLeft = 0;
    ref.current.style.scrollBehavior = 'auto';

  }

  const clickNext = (e) => {
    ref.current.style.scrollBehavior = 'smooth';
    ref.current.scrollLeft = ref.current.scrollLeft + 200;
    ref.current.style.scrollBehavior = 'auto';

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
      ref.current.removeEventListener('mousedown', onMouseDown);
      ref.current.removeEventListener('mouseleave', onMouseLeave);
      ref.current.removeEventListener('mouseup', onMouseLeave);
      ref.current.removeEventListener('mousemove', onMouseMove);
    }
  }, [])

  return (
    <>
      <div className="crm-header" id="crmHeader" ref={ref} style={{ overflow: 'auto' }} >
        <div className="crm-header-link allOrder btn-toggle" onClick={e => setRefresh(!refresh)} onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.allOrder;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-C4C4C4 color-form" ></span><span className="btn-link">Все </span><span className="count-link">755</span></div>
        <div className="crm-header-link newOrder" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.newOrder;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-515151 color-form"></span><span className="btn-link new-orders-header">Новый </span><span className="count-link">181</span></div>
        <div className="crm-header-link acceptOrder" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.acceptOrder;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-91d100 color-form"></span><span className="btn-link">Принят </span><span className="count-link">299</span></div>
        <div className="crm-header-link declineOrder" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.declineOrder;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-fd7777 color-form"></span><span className="btn-link">Отказ </span><span className="count-link">6</span></div>
        <div className="crm-header-link upakovanOrder" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.upakovanOrder;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-928c42 color-form"></span><span className="btn-link">Упакован </span><span className="count-link">16</span></div>
        <div className="crm-header-link peredanOrder" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.peredanOrder;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-c6b922 color-form"></span><span className="btn-link">Передан </span><span className="count-link">16</span></div>
        <div className="crm-header-link sendOrder" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.sendOrder;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-e2d317 color-form"></span><span className="btn-link">Отправлен </span><span className="count-link">30</span></div>
        <div className="crm-header-link vikuplenOrder" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.vikuplenOrder;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-64a727 color-form"></span><span className="btn-link">Выкуплен </span><span className="count-link">43</span></div>
        <div className="crm-header-link moneyGrab" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.moneyGrab;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-2c8b11 color-form"></span><span className="btn-link">Деньги получены </span><span className="count-link">43</span></div>
        <div className="crm-header-link finishOrder" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.finishOrder;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-00CC00 color-form"></span><span className="btn-link">Завершён </span><span className="count-link">43</span></div>
        <div className="crm-header-link backOrder" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.backOrderSelect;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-da291c color-form"></span><span className="btn-link">Возврат (в пути) </span><span className="count-link">42</span></div>
        <div className="crm-header-link backOrderWarehouse" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.backOrderSelect;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-FF0000 color-form"></span><span className="btn-link">Возврат (завершён) </span><span className="count-link">42</span></div>
        <div className="crm-header-link dropWaitTtn" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.dropWaitTtn;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-856915 color-form"></span><span className="btn-link">(Drop) Ожидает ТТН </span><span className="count-link">42</span></div>
        <div className="crm-header-link dropAssignedTtn" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.dropAssignedTtn;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-c7a95c color-form"></span><span className="btn-link">(Drop) Присвоена ТТН </span><span className="count-link">20</span></div>
        <div className="crm-header-link dropSend" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.dropSend;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-d7a214 color-form"></span><span className="btn-link">(Drop) Отправлен </span><span className="count-link">3</span></div>
        <div className="crm-header-link dropBuying" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.dropBuying;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-68a6d7 color-form"></span><span className="btn-link">(Drop) Выкуплен </span><span className="count-link">5</span></div>
        <div className="crm-header-link dropFinish" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.dropFinish;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-169dd9 color-form"></span><span className="btn-link">(Drop) Завершён </span><span className="count-link">5</span></div>
        <div className="crm-header-link dropBack" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.dropBack;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-a82451 color-form"></span><span className="btn-link">(Drop) Возврат </span><span className="count-link">5</span></div>
        <div className="crm-header-link dropBackFinish" onMouseEnter={e => {
          document.getElementById("tooltipBtn").style.fontSize = '14px';
          document.getElementById("tooltipBtn").innerHTML = hints.dropBackFinish;
          let posElement = e.target.getBoundingClientRect();
          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 23 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
          let blockWidth = posElement.width;
          let screenWidth = document.body.clientWidth;
          let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
          if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip - blockWidth) + 'px';
          }
        }}
          onMouseLeave={e => {
            document.getElementById("tooltipBtn").style.animation = '';
            document.getElementById("tooltipBtn").style.fontSize = '14px';
          }}><span className="color-d90d53 color-form"></span><span className="btn-link">(Drop) Возврат (учтён) </span><span className="count-link">5</span></div>
      </div>
      <div className="arrow-bg" style={{ filter: 'none', zIndex: 9999 }}><span className="arrow-prev" id="prev" onClick={clickPrev}></span><span id="next" className="arrow-next" onClick={clickNext}></span></div>
    </>
  )
}

const Konv = React.memo(({ count }) => (
  <span className="ico-wrap" onMouseEnter={e => {
    timer = setTimeout(() => {


      document.getElementById("tooltipBtn").style.fontSize = '12px';

      document.getElementById("tooltipBtn").innerText = `Отправлено ${count} сообщени(e/я)`;

      let posElement = e.target.getBoundingClientRect();

      document.getElementById("tooltipBtn").style.left = posElement.x + "px";
      document.getElementById("tooltipBtn").style.top = posElement.y + 16 + "px";
      document.getElementById("tooltipBtn").style.animation = '0.2s ease 0.2s 1 normal forwards running delay-btn';


    }, 200);

  }}
    onMouseLeave={e => {
      document.getElementById("tooltipBtn").style.animation = '';
      document.getElementById("tooltipBtn").style.fontSize = '12px';
      clearTimeout(timer);
    }}>
    <span className="icon-1 colorWhite icons"></span>
    <span className="count" style={count.toString().length >= 2 ? { borderRadius: 5, pointerEvents: 'none' } : { pointerEvents: 'none' }}>{count}</span>
  </span>
))




const Draggable = ({ index, setFlag, keys, cols, show, setCols, zIndex }) => {


  useEffect(() => {
  }, [])
  const hoverRef = useRef(null)
  const isHover = useShow(hoverRef, keys, cols, setCols, zIndex);
  const [x, setX] = useState(0)


  return (
    <DTD

      axis="x" position={{ x: 0, y: 0 }}
      onStart={(e) => { setX(e.pageX); setFlag(false); }}
      onStop={(e, d) => {
        setTimeout(() => {
          if (isHover.node1.dataset.dbl === "false") {
            if ((isHover.node1.parentElement.clientWidth - 8) + (e.pageX - x) > cols[keys].defaultWidth) {
              cols[keys].width = (isHover.node1.parentElement.clientWidth - 8) + (e.pageX - x);
              setCols({ ...cols })
              isHover.node1.parentElement.style.minWidth = cols[keys].width + 'px';
            } else {
              cols[keys].width = cols[keys].defaultWidth;
              setCols({ ...cols })
              isHover.node1.parentElement.style.minWidth = cols[keys].defaultWidth + 'px';
            }
          }
        }, document.body.clientHeight - 120);
        isHover.node1.dataset.dbl = false;
        setFlag(true);
      }
      }

    ><div ref={hoverRef} data-dbl={false} onMouseEnter={e => {
      timer =  setTimeout(() => {
        document.getElementById("tooltipBtn").style.fontSize = '14px';

        document.getElementById("tooltipBtn").innerHTML = "Задать размер столбца<br>Зажать и потянуть для изменения размера<br>Двойной клик возвращает размер по умолчанию";

        let posElement = e.target.getBoundingClientRect();

        document.getElementById("tooltipBtn").style.left = posElement.x + 10 + "px";
        document.getElementById("tooltipBtn").style.top = posElement.y + 26 + "px";
        document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
        let blockWidth = cols[keys].width;
        let screenWidth = document.body.clientWidth;
        let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
          document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip + 'px';
        }
      }, 250);

    }}
        onMouseLeave={e => {
        clearTimeout(timer)
        document.getElementById("tooltipBtn").style.animation = '';
        document.getElementById("tooltipBtn").style.fontSize = '14px';
      }} style={{ width: '70px', cursor: 'pointer', position: 'absolute', top: 0, right: '-10px', zIndex: 10 }}>
        <div className={'resize'} style={{  width: '10px', position: 'absolute', right: '10px' }}></div>
        <div style={isHover.value ? { height: '100vh', width: '1px', position: 'absolute', right: '10px', background: 'rgba(194, 194, 194, 0.8)', pointerEvents: 'none' } : { height: '25px', width: '1px', position: 'absolute', right: '10px', pointerEvents: 'none' }}></div>
      </div></DTD>
  )

}
let drag = 0, drop = 0;


const TH = ({ children, style, className, hint, index, cols, setCols, col, keys, dragOver, setDragOver, wrapper, zIndex }) => {


  useEffect(() => {
  }, [wrapper])

  const [flag, setFlag] = useState(true)

  const handleDragStart = (e) => {
    const { id } = e.target;
    const idx = Object.keys(cols).indexOf(id);
    // setResize(false);
    drag = idx;

    e.dataTransfer.setData("colIdx", idx);
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDragEnter = (e) => {
    const { id } = e.target;
    drop = Object.keys(cols).indexOf(id);
    setDragOver(id);
  };



  const handleOnDrop = (e) => {

    const id = e.target.id;

    const droppedColIdx = Object.keys(cols).indexOf(id);
    const draggedColIdx = e.dataTransfer.getData("colIdx");

    if (cols[keys].swap) {
      let temp = move(parseInt(draggedColIdx), parseInt(droppedColIdx), cols)
      setCols(temp);
      setDragOver("");
    }



  };
  let styles = cols[keys].swap ? {} : { userSelect: 'none' }
  let styleDrag = (dragOver, flags) => {

    return [(dragOver && !flags) && { position: 'absolute', right: 0, top: 0, height: '100vh', width: 1, backgroundColor: 'red' }, (dragOver && flags) && { position: 'absolute', left: 0, top: 0, height: '100vh', width: 1, backgroundColor: 'red' }]
  }

  return (


    <th
      style={{ ...style, ...styles }} className={'drag'} id={col}
      key={col}
      draggable={flag && cols[keys].swap}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleOnDrop}
      onDragEnter={handleDragEnter}
      onMouseEnter={e => {
        if (hint !== '...') {

            document.getElementById("tooltipBtn").style.fontSize = '14px';

            document.getElementById("tooltipBtn").innerHTML = hint;

            let posElement = e.target.getBoundingClientRect();

            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
            document.getElementById("tooltipBtn").style.top = posElement.y + 26 + "px";
            document.getElementById("tooltipBtn").style.animation = 'delay-header 1s forwards';
            let blockWidth = cols[keys].width;
            let screenWidth = document.body.clientWidth;
            let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
              document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
            }

        }
      }}
      onMouseLeave={e => {
        if (hint !== '...') {
          document.getElementById("tooltipBtn").style.animation = '';
          document.getElementById("tooltipBtn").style.fontSize = '12px';
          clearTimeout(timer);
        }
      }}
    >

      {children}
      {(cols[keys].swap) && <div style={{ ...styleDrag(col === dragOver, drag > drop)[0], ...styleDrag(col === dragOver, drag > drop)[1] }}></div>}
      {(cols[keys].resize) && <Draggable index={index} zIndex={zIndex} keys={keys} cols={cols} setCols={setCols} setFlag={setFlag} />}
    </th>
  )
}


let move = (from, to, arr) => {
  let temp = Object.keys(arr);
  temp.splice(to, 0, temp.splice(from, 1)[0])

  var obj = {};
  for (let i = 0; i < temp.length; i++) {
    obj[temp[i]] = arr[temp[i]];
  }

  return obj;
};

const Wrapper = ({ }) => (
  <div style={{ width: "100%", height: document.body.clientHeight - 120, position: 'absolute', backgroundColor: 'rgba(111, 111, 111, 0.1)', top: 0, left: 0, zIndex: -1 }}></div>
)
const TD = ({ children, className, style, hint, ...props }) => {

  useEffect(() => {

  }, [])

  return (
    <td className={className} style={style} {...props}>{children}</td>
  )
}






const options = [
  { key: '0', text: 'Все' },
  { key: '1', text: 'П/п', title: hints.pP },
  { key: '2', icon: 'icon-Vector-1 icons', title: hints.vodofone },
  { key: '3', icon: 'icon-Union-1 icons', title: hints.kyivstar },
  { key: '4', icon: 'icon-Vector-3 icons', title: hints.lifecell },
  { key: '5', icon: 'icon-Union-18 icons', title: hints.incorrectNumber },
  { key: '6', icon: 'icon-Union icons', title: hints.unknownNumber }
]


const count = [
  { key: '0', text: 'Все' },
  { key: '1', text: 'П/п', title: hints.pP },
  { key: '2', text: '1' },
  { key: '3', text: '2' },
  { key: '4', text: '3' },
  { key: '5', text: '4' },
  { key: '6', text: '5' },
  { key: '7', text: '6' },
  { key: '8', text: '7' },
  { key: '9', text: '8' },
  { key: '10', text: '9' },
  { key: '11', text: '10' },
  { key: '12', text: '11' },
  { key: '13', text: '12' },
  { key: '14', text: '13' },
  { key: '15', text: '14' },
  { key: '16', text: '15' },
  { key: '17', text: '16' },
  { key: '18', text: '17' },
  { key: '19', text: '18' },
  { key: '20', text: '19' },
  { key: '21', text: '20+' }
]


const ppo = [
  { key: '0', text: 'Все' },
  { key: '1', text: 'П/п', title: hints.pP },
  { key: '2', icon: 'icon-1 icons', title: "SMS" },
  { key: '3', icon: 'icon-Vector-21 icons', title: "Почта" },
]


let countries = [
  { key: '0', text: 'Все' },
  { key: '1', text: '🇺🇦', class: 'flags', title: hints.ukraine },
  { key: '2', text: '🇷🇺', class: 'flags', title: hints.russia },
  { key: '3', text: '🇦🇱', class: 'flags', title: hints.alb }
]

const deliveries = [
  { key: '0', text: 'Все' },
  { key: '1', text: 'П/п', title: hints.pP },
  { key: '2', icon: 'icon-Union-3 icons', title: hints.nv },
  { key: '3', icon: 'icon-Vector-2 icons', title: hints.justin },
  { key: '4', icon: 'icon-ukrposhta icons', title: hints.ukrPochta },
  { key: '5', icon: 'icon-Union-4 icons', title: hints.samovivoz },
]


const pay = [
  { key: '0', text: 'Все' },
  { key: '1', text: 'П/п', title: hints.pP },
  { key: '2', icon: 'icon-Vector-17 icons', title: hints.nalozhplatezh },
  { key: '3', icon: 'icon-Vector-15 icons', title: hints.predoplata },
  { key: '4', icon: 'icon-Vector-19 icons', title: hints.acceptPay },
  { key: '5', icon: 'icon-Vector-16 icons', title: hints.decline },
  { key: '5', icon: 'icon-Vector-18 icons', title: hints.trade },
]

const device = [
  { key: '0', text: 'Все' },
  { key: '1', text: 'П/п', title: hints.pP },
  { key: '2', icon: 'icon-uniE941 icons', title: hints.unknown },
  { key: '3', icon: 'icon-Union-13 icons', title: hints.mobile },
  { key: '4', icon: 'icon-Tablet icons', title: hints.tablet },
  { key: '5', icon: 'icon-Vector-10 icons', title: hints.desktop },
]

const system = [
  { key: '0', text: 'Все' },
  { key: '1', text: 'П/п', title: hints.pP },
  { key: '2', icon: 'icon-uniE941 icons', title: hints.unknown },
  { key: '3', icon: 'icon-Union-12 icons', title: hints.android },
  { key: '4', icon: 'icon-Windows-1 icons', title: hints.windows },
  { key: '5', icon: 'icon-Vector-9 icons', title: hints.iOS },
]

const browser = [
  { key: '0', text: 'Все' },
  { key: '1', text: 'П/п', title: hints.pP },
  { key: '2', icon: 'icon-uniE941 icons', title: hints.unknown },
  { key: '3', icon: 'icon-Union-14 icons', title: hints.chrome },
  { key: '4', icon: 'icon-Union-15 icons', title: hints.safari },
  { key: '5', icon: 'icon-Vector-11 icons', title: hints.firefox },
  { key: '6', icon: 'icon-Union-16 icons', title: hints.opera },
  { key: '7', icon: 'icon-Vector-12 icons', title: hints.edge },
  { key: '8', icon: 'icon-Union-17 icons', title: hints.yandex },
  { key: '9', icon: 'icon-Vector-13 icons', title: hints.emailBrowser }
]
const lightHints = (text, id) => {
  let text_input = document.getElementById(id + 'input').value;
  if (text_input !== '') {
    let re = new RegExp(text_input, "gui");
    let text_pr = text.replace(re, x => '<span style="background: #FFE600; color: black;">' + x + '</span>');
    return text_pr;
  } else {
    return text;
  }
}



const TtnGroup = React.memo(({ ttn1, ttn2 }) => {
  const [ttn, setTtn] = useState('');
  return (
    <div className="ttn-number" style={{ overflow: 'hidden', width: 100 }} onMouseLeave={e => setTtn('')}>
      <span className="trigger-mouse" style={ttn === 'ttn2' ? { width: 20 } : { width: 0 }} onMouseEnter={e => setTtn('ttn1')}></span>
      <span className="ttn-first" style={ttn === 'ttn1' ? { opacity: 1, width: 100, paddingRight: 4.5 } : ttn === 'ttn2' ? { opacity: 0, width: 0, paddingRight: 0 } : { opacity: 1, width: 47, paddingRight: 4.5 }} onMouseEnter={e => {
        setTtn('ttn1')
        timer = setTimeout(() => {


          document.getElementById("tooltipBtn").style.fontSize = '12px';

          document.getElementById("tooltipBtn").innerHTML = 'Первая ТТН';

          let posElement = e.target.getBoundingClientRect();

          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
          document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';


        }, 250);
      }}
        onMouseLeave={e => {
          document.getElementById("tooltipBtn").style.animation = '';
          document.getElementById("tooltipBtn").style.fontSize = '12px';
          clearTimeout(timer);
        }}>{ttn1}</span>
      <span className="icon-Vector-81" style={ttn === 'ttn1' ? { left: 0 } : ttn === 'ttn2' ? { left: -1 } : { left: 0 }}></span>
      <span className="ttn-second" style={ttn === 'ttn2' ? { width: 100, paddingLeft: 0, left: -1, opacity: 1 } : ttn === 'ttn1' ? { width: 0, paddingLeft: 0, left: 0, opacity: 0 } : { width: 47, paddingLeft: 4.5, left: 0, opacity: 1 }} onMouseEnter={e => {
        setTtn('ttn2')
        timer = setTimeout(() => {


          document.getElementById("tooltipBtn").style.fontSize = '12px';

          document.getElementById("tooltipBtn").innerHTML = 'Вторая ТТН';

          let posElement = e.target.getBoundingClientRect();

          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
          document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
        }, 250);
      }}
        onMouseLeave={e => {
          document.getElementById("tooltipBtn").style.animation = '';
          document.getElementById("tooltipBtn").style.fontSize = '12px';
          clearTimeout(timer);
        }}>{ttn2}</span>
      <span className="trigger-mouse-2" style={ttn === 'ttn1' ? { width: 20 } : { width: 0 }} onMouseEnter={e => setTtn('ttn2')}></span>
    </div>
  )
})


function Order({ data, rowHeight, visibleRows, navigation, changeStart, changeEnd }) {
  const rootRef = React.useRef();
  const [start, setStart] = React.useState(0);
  const [arr, setArr] = useState(data)
  const [column, setColumn] = useState(columns);
  const [visible, setVisible] = React.useState(visibleRows);
  const [dragOver, setDragOver] = useState("");
  const [isModal, setModal] = React.useState(false);
  const [wrapper, setWrapper] = React.useState(false);
  const [index, setIndex] = React.useState(null);
  const [range, setRange] = React.useState(true);
  const [refresh, setRefresh] = React.useState(false);

  function getTopHeight() {

    return rowHeight * start;
  }
  function getBottomHeight() {
    return rowHeight * (data.length - (start + visible + 1));
  }




  function onKeyDown(e) {
    let isCtrl = e.ctrlKey || e.metaKey,
      keyA = e.which == 65;



    if (isCtrl && keyA) {
      // setArr(arr.map(x => { return { ...x, select: false } }));
      setArr(arr.map((x, index) => {
        if (index !== 20) {
          return { ...x, select: true }

        } else {
          return { ...x }
        }
      }));
      e.preventDefault()

      // } else if (isCtrl && keyA && !selects) {
      //   setArr(arr.map((x, index) => {
      //     if (index !== 20) {
      //       return { ...x, select: true }

      //     } else {
      //       return { ...x }
      //     }
      //   }));
      //   selects = true;
      //   e.preventDefault()


    }
  }



  function onScroll(e) {

    clearTimeout(timers);
    clearTimeout(timer);
    if (!document.querySelector('.disableHover').classList.contains('disable-hover')) {
      document.querySelector('.disableHover').classList.add('disable-hover')
    }

    // let timer = setTimeout(() => {
    setStart(Math.min(
      (data.length - visible - 1),
      Math.floor(e.target.scrollTop - document.body.clientHeight * 0.5 < 0 ? 0 : (e.target.scrollTop - document.body.clientHeight * 0.5) / 18)
    ));
    // }, 100);



    setTimeout(() => {
      changeStart(Math.max(1, Math.floor(e.target.scrollTop / rowHeight)));
      changeEnd(Math.min(data.length, Math.floor(e.target.scrollTop / rowHeight + (visible * 0.591))))
    }, 100);


    document.getElementById("tooltipBtn").style.animation = '';
    document.getElementById("tooltipBtn").style.fontSize = '12px';
    timers = setTimeout(function () {

      document.querySelector('.disableHover').classList.remove('disable-hover')
    }, 500);

  }

  function onMouseDown(e) {
    if (!e.target.classList.contains('resize') && !e.target.classList.contains('drag')) {
      isDown = true;
      startX = e.pageX - rootRef.current.offsetLeft;
      scrollLeft = rootRef.current.scrollLeft;

    } else {
      isDown = false;
    }

  }

  function onMouseLeave(e) {
    isDown = false;
  }




  function onClick(e, index) {
    try {
      e.preventDefault()
      let isCtrl = e.ctrlKey || e.metaKey;
      let isShift = e.shiftKey;
      if (isCtrl) {
        arr[index]['select'] = !arr[index]['select'];
        setArr([...arr]);
      } else if (isShift) {
        if (last < index) {
          setArr(arr.map(x => x['select'] = false))
          arr.slice(last, index + 1).map(x => x['select'] = true);
          setArr([...arr])
        } else {
          setArr(arr.map(x => x['select'] = false))
          arr.slice(index, last + 1).map(x => x['select'] = true);
          setArr([...arr])
        }
      }
      else if (!isCtrl && !isShift) {
        if (last !== index)
          setArr(arr.map(x => x['select'] = false))

        arr[index]['select'] = !arr[index]['select'];
        setArr([...arr])
      }

      last = index;
    } catch (e) { }

  }
  function onMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - rootRef.current.offsetLeft;
    const walk = (x - startX) * 2 //scroll-fast
    rootRef.current.scrollLeft = scrollLeft - walk;
  }

  function resizeWindow(e) {
    setVisible(document.body.clientHeight * 1.5 / 18)
  }

  React.useEffect(async () => {

    // document.addEventListener('mousedown', onClick, false);
    rootRef.current.addEventListener('mousedown', onMouseDown, false);
    rootRef.current.addEventListener('mouseleave', onMouseLeave, false);
    rootRef.current.addEventListener('mouseup', onMouseLeave, false);
    rootRef.current.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('resize', resizeWindow, false)

    rootRef.current.addEventListener('scroll', onScroll, false);
    document.addEventListener('keydown', onKeyDown, false);

    return () => {
      rootRef.current.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKeyDown);
      // document.removeEventListener('mousedown', onClick);
      rootRef.current.removeEventListener('mousedown', onMouseDown);
      rootRef.current.removeEventListener('mouseleave', onMouseLeave);
      rootRef.current.removeEventListener('mouseup', onMouseLeave);
      rootRef.current.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resizeWindow)

    }
  }, [data.length, visibleRows, rowHeight]);

  function onClickWrapper(flags) {
    if (!flags) {
      setRange(true)
    }
    setWrapper(flags);
  }


  return (
    <div>
      <Header setRefresh={setRefresh} refresh={refresh} />
      {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
      </div> */}
      <div style={range ? { height: document.body.clientHeight - 86, overflow: 'auto', width: document.body.clientWidth - 75 } : { height: document.body.clientHeight - 86, overflow: 'hidden', width: document.body.clientWidth - 75 }} ref={rootRef} className="speed">
        <table style={{ width: 0 }} className={'crm-table speed'}>
          <thead>
            <tr className="table-header">


              <th style={{ minWidth: 27, position: 'sticky', left: 0, background: 'white', zIndex: 40, height: 0, top: 0 }}>
                <div style={{ position: 'absolute', background: 'white', height: 43, width: 43, top: 0 }}>

                </div>
              </th>


              <th>
                {/* <div style={{height: '100vh', width: 25, background:'white', position: 'absolute', top: -10, zIndex: -1}}></div> */}
              </th>
              {Object.keys(column).map((x, i) => {


                if (x === 'id' && column[x].show) {
                  return (

                    <TH style={{
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, left: 35, zIndex: 45, backgroundColor: '#F1F1F1'
                    }} className="header-id" hint={hints.id} key={i} wrapper={wrapper} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>


                      ID

                    </TH>
                  )
                }

                if (x === 'status' && column[x].show) {
                  return (

                    <TH style={{
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, left: 70, zIndex: 5, backgroundColor: '#fff'
                    }} className="header-status" zIndex={5} hint={hints.status} key={i} wrapper={wrapper} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      Статус
                    </TH>
                  )
                }

                if (x === 'attribute' && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} index={i} hint={hints.attribute} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Атрибут'}
                    </TH>
                  )
                }
                if (x === "ppo" && column[x].show) {
                  return (
                    <TH style={{
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} index={i} hint={hints.prro} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {/*  */}
                      {'ПPPO'}
                    </TH>
                  )
                }
                if (x === "bayer_name" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} index={i} hint={hints.pokupatel} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Покупатель'}
                    </TH>
                  )
                }
                if (x === "localization" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} index={i} hint={hints.country} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Страна'}
                    </TH>
                  )
                }
                if (x === "phone" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.tel} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Телефон'}
                    </TH>
                  )
                }
                if (x === "comment" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} index={i} hint={hints.comm} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Комментарий'}
                    </TH>

                  )
                }
                if (x === "total" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.sum} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Сумма'}
                    </TH>
                  )
                }
                if (x === "product" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.product} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Товар'}
                    </TH>
                  )
                }
                if (x === "pay" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.pay} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Оплата'}
                    </TH>
                  )
                }
                if (x === "delivery" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} index={i} hint={hints.delivery} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доставка'}
                    </TH>
                  )
                }
                if (x === "addres" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.addres} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Адрес'}
                    </TH>
                  )
                }
                if (x === "ttn" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.ttn} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'ТТН'}
                    </TH>

                  )
                }
                if (x === "ttn_status" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.ttnStatus} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'ТТН статус'}
                    </TH>
                  )
                }
                if (x === "ttn_user" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.prinyal} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Просмотрел'}
                    </TH>
                  )
                }
                if (x === "office" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.depart} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Отдел'}
                    </TH>

                  )
                }
                if (x === "date1" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.add} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Добавлен'}
                    </TH>
                  )
                }
                if (x === "date2" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.open} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Открыт'}
                    </TH>
                  )
                }
                if (x === "date3" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.accepted} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Принят'}
                    </TH>

                  )
                }
                if (x === "date4" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.prinyatZa} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Принят за'}
                    </TH>
                  )
                }
                if (x === "date5" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.prinyal} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Принял'}
                    </TH>

                  )
                }
                if (x === "date6" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.send} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Отправка'}
                    </TH>
                  )
                }
                if (x === "date7" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.otpravka} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Отправлен'}
                    </TH>


                  )
                }
                if (x === "date8" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.change} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Изменен'}
                    </TH>


                  )
                }
                if (x === "site" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.site} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Сайт'}
                    </TH>
                  )
                }
                if (x === "ip" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.ip} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'IP'}
                    </TH>
                  )
                }
                if (x === "utm1" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2,
                    }} hint={hints.utm('utm_source')} key={i} wrapper={wrapper} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Source'}
                    </TH>
                  )
                }
                if (x === "utm2" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.utm('utm_medium')} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Medium'}
                    </TH>
                  )
                }
                if (x === "utm3" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.utm('utm_term')} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Term'}
                    </TH>
                  )
                }
                if (x === "utm4" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.utm('utm_content')} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Content'}
                    </TH>
                  )
                }
                if (x === "utm5" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.utm('utm_campaign')} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Campaign'}
                    </TH>
                  )
                }
                if (x === "additional_1" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 1'}
                    </TH>
                  )
                }
                if (x === "additional_2" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 2'}
                    </TH>
                  )
                }
                if (x === "additional_3" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 3'}
                    </TH>
                  )
                }
                if (x === "additional_4" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 4'}
                    </TH>
                  )
                }
                if (x === "additional_5" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 5'}
                    </TH>
                  )
                }
                if (x === "additional_6" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 6'}
                    </TH>
                  )
                }
                if (x === "additional_7" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 7'}
                    </TH>
                  )
                }
                if (x === "additional_8" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 8'}
                    </TH>
                  )
                }
                if (x === "additional_9" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 9'}
                    </TH>
                  )
                }
                if (x === "additional_10" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 10'}
                    </TH>
                  )
                }
              }


              )}



            </tr>
            <tr className="crm-input">
              <th style={{ minWidth: 27, height: rowHeight, position: 'sticky', left: 0, background: 'white', zIndex: 10 }}></th>

              <th style={{ position: 'sticky', zIndex: 10 }}>
                {wrapper && <div onClick={() => onClickWrapper(false)} className="podlozhka" style={{ height: '100vh', width: 4658, position: 'absolute', top: 0, left: 0, display: 'block', zIndex: 998 }}></div>}
              </th>



              {Object.keys(column).map((x, i) => {
                if (x === "id" && column[x].show) {
                  return (

                    <th style={{ maxWidth: column['id'].width, position: 'sticky', top: 24, left: 35, zIndex: 45 }}>
                      <SearchInput refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} name={'wrap-hide'} type={'id'} />
                    </th>
                  )
                }
                if (x === "status" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, left: 70, zIndex: 45 } : { position: 'sticky', top: 24, left: 70, zIndex: 45 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge refresh={refresh} width={column[x].width - 15} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>
                  )
                }
                if (x === 'attribute' && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} name={'wrap-hide'} type={'purchaser'} />
                    </th>
                  )
                }
                if (x === "ppo" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">
                        <SearchInput refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} type={'ppo'} />
                        <DropdownSmall refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={ppo} />
                      </div>
                    </th>
                  )
                }
                if (x === "bayer_name" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} name={'wrap-hide'} type={'purchaser'} />
                    </th>
                  )
                }
                if (x === "localization" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownMedium refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} options={countries} />
                    </th>
                  )
                }
                if (x === "phone" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">
                        <DropdownSmall refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderRight: '1px solid white' }} options={options} />
                        <SearchInput refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} type={'phone'} len={12} />
                        <DropdownSmall refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={count} />
                      </div>
                    </th>
                  )
                }
                if (x === "comment" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} name={'wrap-hide'} type={'comment'} len={500} />

                    </th>

                  )
                }
                if (x === "total" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} name={'wrap-hide'} type={'price'} />

                    </th>
                  )
                }
                if (x === "product" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">

                        <ProductDropdown refresh={refresh} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />

                        <DropdownSmall refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={count} />
                        <DropdownSmall refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={count} />
                      </div>
                    </th>
                  )
                }
                if (x === "pay" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownMedium refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} options={pay} />

                    </th>
                  )
                }
                if (x === "delivery" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownMedium refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} options={deliveries} />

                    </th>
                  )
                }
                if (x === "addres" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} name={'wrap-hide'} type={'comment'} len={200} />
                    </th>
                  )
                }
                if (x === "ttn" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">
                        <SearchInput refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} type={'phone'} />

                        <DropdownSmall refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={count} />
                      </div>
                    </th>

                  )
                }
                if (x === "ttn_status" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={200} />
                    </th>
                  )
                }
                if (x === "ttn_user" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge refresh={refresh} width={column[x].width - 30} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>
                  )
                }
                if (x === "office" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge refresh={refresh} width={column[x].width - 30} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>

                  )
                }
                if (x === "date1" && column[x].show) {



                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)} >
                      <Calendar refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>
                  )
                }
                if (x === "date2" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Range refresh={refresh} wrapper={wrapper} setRange={setRange} onWrapper={onClickWrapper} />
                    </th>
                  )
                }
                if (x === "date3" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>

                      <Calendar refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>

                  )
                }
                if (x === "date4" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Range refresh={refresh} wrapper={wrapper} setRange={setRange} onWrapper={onClickWrapper} />
                    </th>
                  )
                }
                if (x === "date5" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge refresh={refresh} width={column[x].width - 30} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>

                  )
                }
                if (x === "date6" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Calendar refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>
                  )
                }
                if (x === "date7" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Range refresh={refresh} wrapper={wrapper} setRange={setRange} onWrapper={onClickWrapper} />

                    </th>


                  )
                }
                if (x === "date8" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Calendar refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>

                  )
                }
                if (x === "site" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} name={'wrap-hide'} type={'site'} />

                    </th>
                  )
                }
                if (x === "ip" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className='wrap-hide'>
                        <SearchInput refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} type={'ip'} />
                        <DropdownSmall refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={22} options={countries} />
                        <DropdownSmall refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={15} options={device} />
                        <DropdownSmall refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={15} options={system} />
                        <DropdownSmall refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={17} options={browser} />
                      </div>
                    </th>
                  )
                }
                if (x === "utm1" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} />

                    </th>
                  )
                }
                if (x === "utm2" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm3" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm4" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm5" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_1" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_2" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_3" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_4" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_5" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_6" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_7" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_8" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_9" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_10" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
              }


              )}



            </tr>
            <tr style={{ height: 0, zIndex: -1, position: 'sticky', top: 24, left: 0 }} className="table-header">


              {/* <th style={{position: 'relative'}}>
                <div style={{zIndex: 20, background: '#fff', height: '100vh', minWidth: 15, position: 'absolute'}}></div>
              </th> */}
              <th style={{ minWidth: 27, position: 'sticky', left: 0, background: 'white', zIndex: 10 }}></th>

              <th></th>
              <th></th>
              <th></th>
              <th></th>
              {/* 
              if (x === "id" && column[x].show) {
                  return (

                    <th>
                     {i % 2 === 0 && <Wrapper />} 
                    </th>
                  )
                }
                if (x === "status" && column[x].show) {
                  return (

                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === 'attribute' && column[x].show) {
                  return (
                    <th>

                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                } */}
              {Object.keys(column).slice(3).map((x, i) => {

                if (x === "ppo" && column[x].show) {
                  return (
                    <th>

                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "bayer_name" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "localization" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "phone" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "comment" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>

                  )
                }
                if (x === "total" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "product" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "pay" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "delivery" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "addres" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "ttn" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>

                  )
                }
                if (x === "ttn_status" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "ttn_user" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "office" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>

                  )
                }
                if (x === "date1" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "date2" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "date3" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>

                  )
                }
                if (x === "date4" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "date5" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>

                  )
                }
                if (x === "date6" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "date7" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>


                  )
                }
                if (x === "date8" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>


                  )
                }
                if (x === "site" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "ip" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "utm1" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "utm2" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "utm3" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "utm4" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "utm5" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "additional_1" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "additional_2" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "additional_3" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "additional_4" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "additional_5" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "additional_6" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "additional_7" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "additional_8" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "additional_9" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
                if (x === "additional_10" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper />}
                    </th>
                  )
                }
              }


              )}



            </tr>
          </thead>
          <tbody className='disableHover' style={{ marginTop: 5 }}>
            <tr style={{ height: 1 + getTopHeight() }} />

            {arr.slice(start, start + visible + 1).map((row, rowIndex) => (
              <tr
                style={start + rowIndex === 20 || row.select ? { height: rowHeight } : { height: rowHeight }}
                key={start + rowIndex}
                onDoubleClick={start + rowIndex !== 20 ? e => setModal(true) : undefined}
                className={row.select ? "crm-main-table select-toggle speed" : start + rowIndex === 20 ? "crm-main-table selected-lock speed" : "crm-main-table speed"}
                onClick={start + rowIndex !== 20 ? e => onClick(e, start + rowIndex) : undefined}

              >
                <td style={{ minWidth: 27, height: rowHeight, position: 'sticky', left: 0, background: 'white', zIndex: 10 }} className="speed">
                  {start + rowIndex !== 20 && <div className="first" style={{ width: 7, height: rowHeight, borderRadius: "3px 0 0 3px", position: 'absolute', left: 28, top: 0 }}></div>}
                  {start + rowIndex === 20 && <img src={lock} style={{ position: 'absolute', left: 20, top: 3, opacity: 1 }} />}
                  {start + rowIndex === 20 && <div className="" style={{ zIndex: -1, width: '100vw', height: rowHeight, position: 'absolute', left: 28, top: 0 }} onMouseEnter={e => {

                    document.getElementById("tooltipBtn").style.fontSize = '12px';

                    document.getElementById("tooltipBtn").innerHTML = `Заказ открыт пользователем <span class="lock-count">Василий Хмурый</span><br>Заказ заблокирован сервером для проверки статуса ТТН`;

                    let posElement = e.nativeEvent;

                    document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                    document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                    document.getElementById("tooltipBtn").style.animation = '0.2s ease 0.2s 1 normal forwards running delay-btn';



                  }}

                  ></div>}
                  {start + rowIndex === 21 && <div style={{ position: 'absolute', left: 19, top: 2, padding: 5 }} onMouseEnter={e => {
                    timer = setTimeout(() => {


                      document.getElementById("tooltipBtn").style.fontSize = '12px';

                      document.getElementById("tooltipBtn").innerHTML = 'Заказ не открывался';

                      let posElement = e.target.getBoundingClientRect();

                      document.getElementById("tooltipBtn").style.left = posElement.x + posElement.width + 5 + "px";
                      document.getElementById("tooltipBtn").style.top = posElement.y - 5 + "px";
                      document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';

                    }, 250);
                  }}
                    onMouseLeave={e => {
                      document.getElementById("tooltipBtn").style.animation = '';
                      document.getElementById("tooltipBtn").style.fontSize = '12px';
                      clearTimeout(timer);
                    }} ><div style={{ width: 4, height: 4, borderRadius: '100%', backgroundColor: '#00B9FF' }}></div></div>}
                </td>
                <td style={{ width: 0, height: rowHeight, position: 'sticky', left: 0, padding: 0 }} className="speed">

                  {(start + rowIndex !== 20 && !row.select) ? <div className="last" style={{ zIndex: -1, width: '100vw', height: rowHeight, position: 'absolute', left: 28, top: 0 }}></div> : (start + rowIndex !== 20 && row.select) && <div className="last" style={{ zIndex: -1, width: '100vw', height: rowHeight, position: 'absolute', left: 28, top: 0, background: 'rgba(81, 81, 81, 0.7)' }}></div>}
                </td>

                {
                  Object.keys(column).map((x, i) => {
                    if (x === 'id' && column[x].show) {
                      return (
                        <td className="id-table" style={{
                          position: 'sticky', background: '#eee',
                          left: 35, zIndex: 1,
                        }}>{row.id}
                        </td>
                      )
                    }
                    if (x === 'status' && column[x].show) {
                      return (

                        <td className="status-table" style={{
                          position: 'sticky', background: 'white',
                          left: 70, zIndex: 1,
                        }}>
                          <div className="new-zakaz color-form2" style={{ background: row.status_color, overflow: 'hidden', textOverflow: 'ellipsis', width: column['status'].width }} onMouseEnter={e => {
                            if (e.target.scrollWidth > e.target.offsetWidth) {

                              timer = setTimeout(() => {

                                document.getElementById("tooltipBtn").style.fontSize = '12px';

                                document.getElementById("tooltipBtn").innerText = row.status_name;

                                let posElement = e.target.getBoundingClientRect();

                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                                document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';


                              }, 250);
                            }

                          }}
                            onMouseLeave={e => {
                              document.getElementById("tooltipBtn").style.animation = '';
                              document.getElementById("tooltipBtn").style.fontSize = '12px';
                              clearTimeout(timer);
                            }}>
                            {row.status_name}
                          </div>
                        </td>
                      )
                    }
                    if (x === 'attribute' && column[x].show) {
                      return (
                        <td style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {
                              document.getElementById("tooltipBtn").style.fontSize = '12px';
                              document.getElementById("tooltipBtn").innerText = row.customer;
                              let posElement = e.target.getBoundingClientRect();
                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';


                            }, 250);
                          }

                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.attribute}</td>
                      )
                    }
                    if (x === "ppo" && column[x].show) {
                      return (
                        <td className="prro-colum">
                          <span style={{ display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', width: column['ppo'].width }} className={'prro-number'} onMouseEnter={e => {
                            if (e.target.scrollWidth > e.target.offsetWidth) {


                              // (async function () {
                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerText = row.ppo;

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              // }())





                            }
                          }}
                            onMouseLeave={e => {
                              document.getElementById("tooltipBtn").style.animation = '';
                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                            }}>{row.ppo}</span>

                          <span className="ico-wrap">
                            <span className={"colorWhite icons " + row.count_ppo} onMouseEnter={e => {

                              // (async function () {


                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerText = ppo.filter(x => x.icon?.includes(row.count_ppo))[0].title;

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.2s ease 0.2s 1 normal forwards running delay-btn';
                              // }())

                            }}
                              onMouseLeave={e => {
                                document.getElementById("tooltipBtn").style.animation = '';
                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                clearTimeout(timer);
                              }}></span>
                          </span>
                        </td>
                      )
                    }

                    if (x === "bayer_name" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['bayer_name'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {

                            timer = setTimeout(() => {

                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerText = row.customer;

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';


                            }, 250);
                          }

                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.customer}</td>
                      )
                    }
                    if (x === "localization" && column[x].show) {
                      return (
                        <td className="country-block flags ua" onMouseEnter={e => {
                          timer = setTimeout(() => {

                            document.getElementById("tooltipBtn").style.fontSize = '12px';

                            document.getElementById("tooltipBtn").innerText = row.country;

                            let posElement = e.target.getBoundingClientRect();

                            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                            document.getElementById("tooltipBtn").style.animation = '0.2s ease 0.2s 1 normal forwards running delay-btn';


                          }, 50);

                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >
                          {country[row.country]}
                        </td>
                      )
                    }
                    if (x === "phone" && column[x].show) {
                      return (
                        <td className="tel-colum" style={{ pointerEvents: 'all' }} >
                          <div className={'tel'} onMouseEnter={e => {
                            timer = setTimeout(() => {

                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerText = row.type_phone === "icon-Vector-3" ? "Lifecell" : 'Киевстар';

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';


                            }, 200);

                          }}
                            onMouseLeave={e => {
                              document.getElementById("tooltipBtn").style.animation = '';
                              document.getElementById("tooltipBtn").style.fontSize = '12px';
                              clearTimeout(timer);
                            }} >
                            <span className={"icons " + row.type_phone}></span>


                            <span className="tel-number">{row.phone}</span>
                          </div>
                          {row.count_message !== "0" && <Konv count={row.count_message} />}
                        </td>
                      )
                    }
                    if (x === "comment" && column[x].show) {
                      return (
                        <td className="max-lenght-comment" onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {

                              document.getElementById("tooltipBtn").style.fontSize = '12px';
                              document.getElementById("tooltipBtn").innerText = row.comment;
                              document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";



                            }, 300);
                          }

                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} style={{ maxWidth: column['comment'].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.comment}</td>

                      )
                    }
                    if (x === "total" && column[x].show) {
                      return (
                        <td className="colum-sum">{row.total}</td>
                      )
                    }
                    if (x === "product" && column[x].show) {

                      let dopItem1 = 'test1';
                      let dopItem2 = 'test2';
                      let dopProdazhi = '<div style="text-align:center;display:block;margin-bottom:5px;">Доппродажа</div><div class="item-list-product"style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem1 + '</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem2 + '</div>';
                      return (
                        <td>
                          <span className="product-colum">
                            <span style={{ width: column['product'].width + 30, display: 'block', overflow: "hidden", textOverflow: 'ellipsis' }} className="max-lenght-product" onMouseEnter={e => {
                              timer = setTimeout(() => {

                                let data = '<div style="text-align:center;display:block;margin-bottom:5px;">Основной</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '</div><div class="item-list-product" style="margin-left:15px;margin-bottom:5px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '</div><div style="text-align:center;display:block;margin-bottom:5px;">Доппродажа</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem1 + '</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem2 + '</div>';

                                document.getElementById("tooltipBtn").style.fontSize = '12px';

                                document.getElementById("tooltipBtn").innerHTML = data;

                                let posElement = e.target.getBoundingClientRect();

                                document.getElementById("tooltipBtn").style.left = posElement.x - 5 + "px";
                                document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                                document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';


                              }, 250);

                            }}
                              onMouseLeave={e => {
                                document.getElementById("tooltipBtn").style.animation = '';
                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                clearTimeout(timer);
                              }}>{row.product}</span>
                            {row.count_product !== '0' && <Korobka count={row.count_product} onMouseEnter={e => {
                              timer = setTimeout(() => {

                                let data = '<div style="text-align:center;display:block;margin-bottom:5px;">Основной</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '</div><div class="item-list-product" style="margin-left:15px;margin-bottom:5px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '</div><div style="text-align:center;display:block;margin-bottom:5px;">Доппродажа</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem1 + '</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem2 + '</div>';

                                document.getElementById("tooltipBtn").style.fontSize = '12px';

                                document.getElementById("tooltipBtn").innerHTML = data;

                                let posElement = e.target.getBoundingClientRect();

                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                                document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';


                              }, 50);

                            }}
                              onMouseLeave={e => {
                                document.getElementById("tooltipBtn").style.animation = '';
                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                clearTimeout(timer);
                              }} />}
                            {row.count_resale !== '0' && <Additional count={row.count_resale} hints={dopProdazhi} />}</span>
                        </td>

                      )
                    }
                    if (x === "pay" && column[x].show) {
                      return (
                        <td className="colum-pay" onMouseEnter={e => {
                          timer = setTimeout(() => {
                            document.getElementById("tooltipBtn").style.fontSize = '12px';

                            document.getElementById("tooltipBtn").innerText = pay.filter(x => x.icon?.includes(row.pay))[0].title;

                            let posElement = e.target.getBoundingClientRect();

                            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                            document.getElementById("tooltipBtn").style.animation = '0.2s ease 0.2s 1 normal forwards running delay-btn';


                          }, 250);
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >
                          <span className={'icons colorWhite ' + row.pay}></span>
                        </td>
                      )
                    }
                    if (x === "delivery" && column[x].show) {
                      return (
                        <td className="colum-delivery" onMouseEnter={e => {
                          timer = setTimeout(() => {
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            document.getElementById("tooltipBtn").innerText = deliveries.filter(y => y.icon?.includes(row.delivery))[0].title
                            let posElement = e.target.getBoundingClientRect();

                            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                            document.getElementById("tooltipBtn").style.animation = '0.2s ease 0.2s 1 normal forwards running delay-btn';
                            let blockWidth = column[x].width;
                            let screenWidth = document.body.clientWidth;
                            let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                              document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                            }

                          }, 250);

                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >
                          <span className={"icons " + row.delivery}></span>
                        </td>
                      )
                    }
                    if (x === "addres" && column[x].show) {
                      return (
                        <td className="addres-block" style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {
                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerText = row.address;

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }

                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.address}</td>

                      )
                    }
                    if (x === "ttn" && column[x].show) {
                      return (
                        <td className="colum-ttn">
                          <div className="ttn-position">


                            <TtnGroup ttn1={row.ttn} ttn2={row.ttn} />
                            {/* <span className="ttn-number">{row.ttn}</span> */}
                            <Korobka count={2} onMouseEnter={e => {
                              timer = setTimeout(() => {


                                document.getElementById("tooltipBtn").style.fontSize = '12px';

                                document.getElementById("tooltipBtn").innerText = `Остался 2 (день/дня) до платного хранения`;

                                let posElement = e.target.getBoundingClientRect();

                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                                document.getElementById("tooltipBtn").style.animation = '0.2s ease 0.2s 1 normal forwards running delay-btn';


                              }, 250);

                            }}
                              onMouseLeave={e => {
                                document.getElementById("tooltipBtn").style.animation = '';
                                document.getElementById("tooltipBtn").style.fontSize = '12px';
                                clearTimeout(timer);
                              }} />
                          </div>
                        </td>

                      )
                    }
                    if (x === "ttn_status" && column[x].show) {
                      return (
                        <td onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {


                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerText = row.ttn_status;

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.ttn_status}</td>
                      )
                    }
                    if (x === "ttn_user" && column[x].show) {
                      return (
                        <td onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {
                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerText = row.view_user;

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.view_user}</td>
                      )
                    }
                    if (x === "office" && column[x].show) {
                      return (
                        <td className="otdel-block" onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {

                            timer = setTimeout(() => {
                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerText = row.office;

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.office}</td>

                      )
                    }
                    if (x === "date1" && column[x].show) {
                      return (
                        <td className="date-block">{row.add_order[0]} <span className="date-time">{row.add_order[1]}</span> </td>

                      )
                    }
                    if (x === "date2" && column[x].show) {
                      return (
                        <td className="date-time otkrit" onMouseEnter={e => {
                          timer = setTimeout(() => {
                            document.getElementById("tooltipBtn").style.fontSize = '12px';

                            document.getElementById("tooltipBtn").innerText = row.hints_open;

                            let posElement = e.target.getBoundingClientRect();

                            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                            document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                            let blockWidth = column[x].width;
                            let screenWidth = document.body.clientWidth;
                            let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                              document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                            }


                          }, 250);

                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >
                          <div class="acceptza time">{row.open_order}<span class="colorTime" style={{ backgroundColor: row.color_open_order }}></span></div>

                        </td>

                      )
                    }
                    if (x === "date3" && column[x].show) {
                      return (
                        <td className="date-block">{row.success_order[0]} <span className="date-time">{row.success_order[1]}</span></td>


                      )
                    }
                    if (x === "date4" && column[x].show) {
                      return (
                        <td className="date-time acceptza" onMouseEnter={e => {
                          timer = setTimeout(() => {

                            document.getElementById("tooltipBtn").style.fontSize = '12px';

                            document.getElementById("tooltipBtn").innerText = row.hints_success;

                            let posElement = e.target.getBoundingClientRect();

                            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                            document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';

                            let blockWidth = column[x].width;
                            let screenWidth = document.body.clientWidth;
                            let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                              document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                            }

                          }, 250);

                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >
                          <div class="acceptza time">{row.success_order_user}<span class="colorTime" style={{ backgroundColor: row.color_success_order_user }}></span></div>



                        </td>


                      )
                    }
                    if (x === "date5" && column[x].show) {
                      return (
                        <td className="date-block" onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {


                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerText = row.view_user;

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.view_user}</td>

                      )
                    }
                    if (x === "date6" && column[x].show) {
                      return (
                        <td className="date-block">{row.send_order[0]} <span className="date-time">{row.send_order[1]}</span> </td>


                      )
                    }
                    if (x === "date7" && column[x].show) {
                      return (
                        <td className="date-block" onMouseEnter={e => {
                          timer = setTimeout(() => {

                            document.getElementById("tooltipBtn").style.fontSize = '12px';

                            document.getElementById("tooltipBtn").innerText = row.hints_send;

                            let posElement = e.target.getBoundingClientRect();

                            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                            document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                            let blockWidth = column[x].width;
                            let screenWidth = document.body.clientWidth;
                            let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                              document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                            }


                          }, 250);

                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >
                          <div class="acceptza time">{row.send_order_user}<span class="colorTime" style={{ backgroundColor: row.color_send_order_user }}></span></div>
                        </td>



                      )
                    }
                    if (x === "date8" && column[x].show) {
                      return (
                        <td className="date-block">{row.update_order[0]} <span className="date-time">{row.update_order[1]}</span></td>




                      )
                    }
                    if (x === "site" && column[x].show) {
                      return (
                        <td onMouseEnter={e => {
                          timer = setTimeout(() => {


                            document.getElementById("tooltipBtn").style.fontSize = '12px';

                            document.getElementById("tooltipBtn").innerHTML = lightHints(row.site, x);

                            let posElement = e.target.getBoundingClientRect();

                            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                            document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                            let blockWidth = column[x].width;
                            let screenWidth = document.body.clientWidth;
                            let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                              document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                            }


                          }, 250);

                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.domen}</td>)
                    }
                    if (x === "ip" && column[x].show) {
                      return (
                        <TD className={'ip-block'}>
                          <div className="ip-block-position">
                            <span className="ip-current">{row.ip}</span>
                            <span className="ip-icons-position">
                              <span className="flags ru" onMouseEnter={e => {
                                timer = setTimeout(() => {

                                  document.getElementById("tooltipBtn").style.fontSize = '12px';

                                  document.getElementById("tooltipBtn").innerText = row.country;

                                  let posElement = e.target.getBoundingClientRect();

                                  document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                  document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                                  document.getElementById("tooltipBtn").style.animation = '0.2s ease 0.2s 1 normal forwards running delay-btn';


                                }, 50);

                              }}
                                onMouseLeave={e => {
                                  document.getElementById("tooltipBtn").style.animation = '';
                                  document.getElementById("tooltipBtn").style.fontSize = '12px';
                                  clearTimeout(timer);
                                }} >{country[row.country_order]}</span>
                              <span className={row.type_device + " icons colorWhite"} onMouseEnter={e => {
                                timer = setTimeout(() => {

                                  document.getElementById("tooltipBtn").style.fontSize = '12px';

                                  document.getElementById("tooltipBtn").innerText = device.filter(x => x.icon?.includes(row.type_device))[0].title;

                                  let posElement = e.target.getBoundingClientRect();

                                  document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                  document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                                  document.getElementById("tooltipBtn").style.animation = '0.2s ease 0.2s 1 normal forwards running delay-btn';


                                }, 50);

                              }}
                                onMouseLeave={e => {
                                  document.getElementById("tooltipBtn").style.animation = '';
                                  document.getElementById("tooltipBtn").style.fontSize = '12px';
                                  clearTimeout(timer);
                                }} ></span>
                              <span className={row.type_os + " icons colorWhite"} onMouseEnter={e => {
                                timer = setTimeout(() => {

                                  document.getElementById("tooltipBtn").style.fontSize = '12px';

                                  document.getElementById("tooltipBtn").innerText = system.filter(x => x.icon?.includes(row.type_os))[0]?.title || '';

                                  let posElement = e.target.getBoundingClientRect();

                                  document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                  document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                                  document.getElementById("tooltipBtn").style.animation = '0.2s ease 0.2s 1 normal forwards running delay-btn';


                                }, 50);

                              }}
                                onMouseLeave={e => {
                                  document.getElementById("tooltipBtn").style.animation = '';
                                  document.getElementById("tooltipBtn").style.fontSize = '12px';
                                  clearTimeout(timer);
                                }}></span>
                              <span className={row.type_browser + " icons colorWhite "} onMouseEnter={e => {
                                timer = setTimeout(() => {

                                  document.getElementById("tooltipBtn").style.fontSize = '12px';

                                  document.getElementById("tooltipBtn").innerText = browser.filter(x => x.icon?.includes(row.type_browser))[0].title;

                                  let posElement = e.target.getBoundingClientRect();

                                  document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                  document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                                  document.getElementById("tooltipBtn").style.animation = '0.2s ease 0.2s 1 normal forwards running delay-btn';


                                }, 50);

                              }}
                                onMouseLeave={e => {
                                  document.getElementById("tooltipBtn").style.animation = '';
                                  document.getElementById("tooltipBtn").style.fontSize = '12px';
                                  clearTimeout(timer);
                                }}></span>
                            </span>
                          </div>
                        </TD>
                      )
                    }
                    if (x === "utm1" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm1'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {
                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.utm_source, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.utm_source}</td>
                      )
                    }
                    if (x === "utm2" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm2'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {

                            timer = setTimeout(() => {


                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.utm_medium, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.utm_medium}</td>
                      )
                    }
                    if (x === "utm3" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm3'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {

                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.utm_term, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.utm_term}</td>
                      )
                    }
                    if (x === "utm4" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm4'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {


                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.utm_content, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.utm_content}</td>
                      )
                    }
                    if (x === "utm5" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm5'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {


                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.utm_campaign, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.utm_campaign}</td>
                      )
                    }
                    if (x === "additional_1" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_1'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {


                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.additional_field_1, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.additional_field_1}</td>

                      )
                    }
                    if (x === "additional_2" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_2'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {


                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.additional_field_2, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';

                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }

                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.additional_field_2}</td>

                      )
                    }
                    if (x === "additional_3" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_3'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {

                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.additional_field_3, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';

                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }

                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.additional_field_3}</td>

                      )
                    }
                    if (x === "additional_4" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_4'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {

                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.additional_field_4, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.additional_field_4}</td>

                      )
                    }
                    if (x === "additional_5" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_5'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {


                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.additional_field_5, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.additional_field_5}</td>

                      )
                    }
                    if (x === "additional_6" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_6'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {

                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.additional_field_6, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.additional_field_6}</td>

                      )
                    }
                    if (x === "additional_7" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_7'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {


                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.additional_field_7, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';
                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }


                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.additional_field_7}</td>

                      )
                    }
                    if (x === "additional_8" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_8'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {


                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.additional_field_8, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';

                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }

                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.additional_field_8}</td>

                      )
                    }
                    if (x === "additional_9" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_9'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {


                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.additional_field_9, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';

                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }

                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                            clearTimeout(timer);
                          }} >{row.additional_field_9}</td>

                      )
                    }
                    if (x === "additional_10" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_10'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => {
                          if (e.target.scrollWidth > e.target.offsetWidth) {
                            timer = setTimeout(() => {

                              document.getElementById("tooltipBtn").style.fontSize = '12px';

                              document.getElementById("tooltipBtn").innerHTML = lightHints(row.additional_field_10, x);

                              let posElement = e.target.getBoundingClientRect();

                              document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                              document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                              document.getElementById("tooltipBtn").style.animation = '0.3s ease 0.3s 1 normal forwards running delay-btn';

                              let blockWidth = column[x].width;
                              let screenWidth = document.body.clientWidth;
                              let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                              if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
                              }

                            }, 250);
                          }
                        }}
                          onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            document.getElementById("tooltipBtn").style.fontSize = '12px';
                          }} >{row.additional_field_10}</td>

                      )
                    }
                  })
                }
              </tr>
            ))}
            <tr style={{ height: getBottomHeight() }} />

          </tbody>
        </table>
      </div>

      <Zakazy isModal={isModal} onClose={e => setModal(false)} />
    </div >
  )
}

export default Order;