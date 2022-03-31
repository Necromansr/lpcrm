import React, { useEffect, useState, useRef } from "react";
import { lock } from '../../../until/images';
// import Zakazy from "./zakazy";
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
import Header from './header';




import { connect } from "react-redux";

import { top, countChange, refresh } from "../../../store/actions/index";
import Modal from "../../components/Modal";

const mapStateToProps = state => {
  return { refresh: state.refresh, zoom: state.zoom };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTop: tops => dispatch(top(tops)),
    changeCount: counts => dispatch(countChange(counts)),
    changeRefresh: refreshs => dispatch(refresh(refreshs)),
  };
}
// let arr = [75,55,55,50,55,70,90,110]


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
    defaultWidth: 54,
    width: 54,
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
    defaultWidth: 54,
    width: 54,
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
    defaultWidth: 69,
    width: 69,
    resize: false,
    swap: true,
    show: true
  },
  addres: {
    defaultWidth: 172,
    width: 172,
    resize: true,
    swap: true,
    show: true
  },
  ttn: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  ttn_status: {
    defaultWidth: 128,
    width: 128,
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
  ttn_user: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },

  date1: {
    defaultWidth: 108,
    width: 108,
    resize: false,
    swap: true,
    show: true
  },
  date2: {
    defaultWidth: 65,
    width: 65,
    resize: false,
    swap: true,
    show: true
  },
  date3: {
    defaultWidth: 110,
    width: 110,
    resize: false,
    swap: true,
    show: true
  },
  date4: {
    defaultWidth: 73,
    width: 73,
    resize: false,
    swap: true,
    show: true
  },
  date5: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  date6: {
    defaultWidth: 110,
    width: 110,
    resize: false,
    swap: true,
    show: true
  },
  date7: {
    defaultWidth: 70,
    width: 70,
    resize: false,
    swap: true,
    show: true
  },
  send: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  date8: {
    defaultWidth: 110,
    width: 110,
    resize: false,
    swap: true,
    show: true
  },
  change: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  end: {
    defaultWidth: 110,
    width: 110,
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

let search = {
  id: '',
  status_id: '',
  attribute: '',
  customer: '',
  country: '',
  type_phone: '',
  phone: '',
  count_message: '',
  comment: '',
  total: '',
  product: '',
  count_product: '',
  count_resale: '',
  pay: '',
  ppo: '',
  count_ppo: '',
  delivery: '',
  address: '',
  ttn: '',
  ttn_status: '',
  view_user: '',
  office: '',
  add_order: '',
  open_order: '',
  color_open_order: '',
  success_order: '',
  success_order_user: '',
  color_success_order_user: '',
  send_order: '',
  send_order_user: '',
  color_send_order_user: '',
  update_order: '',
  site: '',
  ip: '',
  country_order: '',
  type_device: '',
  type_os: '',
  type_browser: '',
  utm_source: '',
  utm_medium: '',
  utm_term: '',
  utm_content: '',
  utm_campaign: '',
  additional_field_1: '',
  additional_field_2: '',
  additional_field_3: '',
  additional_field_4: '',
  additional_field_5: '',
  additional_field_6: '',
  additional_field_7: '',
  additional_field_8: '',
  additional_field_9: '',
  additional_field_10: '',
}


Object.filter = (obj, predicate) =>
  Object.fromEntries(Object.entries(obj).filter(predicate));


var timer;
let timers = null,
  selects = false,
  last = 0;
let isDown = false;
let startX;
let scrollLeft;
let leftScroll = 0;

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
    try {
      node.parentElement.style.cssText += zIndex ? 'z-index: ' + zIndex : 'z-index: 2';

    } catch (error) {

    }
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
    {count !== '0' && <span className="icon-Exclude colorWhite icons" style={{ pointerEvents: 'none' }}></span>}
    {count !== '0' && <span className="count" style={count.toString().length >= 2 ? { borderRadius: 5, pointerEvents: 'none' } : { pointerEvents: 'none' }}>{count}</span>}
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
      document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


    }, 300);

  }}
    onMouseLeave={e => {
      document.getElementById("tooltipBtn").style.animation = '';
      clearTimeout(timer);
    }}>
    {count !== '0' && <span className="icon-2 colorWhite icons" style={{ pointerEvents: 'none' }}></span>}
    {count !== '0' && <span className="count" style={count.toString().length >= 2 ? { borderRadius: 5, pointerEvents: 'none' } : { pointerEvents: 'none' }}>{count}</span>}
  </span>
))



const Konv = React.memo(({ count }) => (
  <span className="ico-wrap" onMouseEnter={e => {
    timer = setTimeout(() => {


      document.getElementById("tooltipBtn").style.fontSize = '12px';

      document.getElementById("tooltipBtn").innerText = `Отправлено ${count} сообщения/e/й`;

      let posElement = e.target.getBoundingClientRect();

      document.getElementById("tooltipBtn").style.left = posElement.x + "px";
      document.getElementById("tooltipBtn").style.top = posElement.y + 16 + "px";
      document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


    }, 250);

  }}
    onMouseLeave={e => {
      document.getElementById("tooltipBtn").style.animation = '';
      clearTimeout(timer);
    }}>
    <span className="icon-1 colorWhite icons" ></span>
    <span className="count" style={count.toString().length >= 2 ? { borderRadius: 5, pointerEvents: 'none' } : { pointerEvents: 'none' }}>{count}</span>
  </span>
))




const Draggable = ({ index, setFlag, keys, cols, show, setCols, zIndex, setWrapper }) => {


  useEffect(() => {
  }, [])
  const hoverRef = useRef(null)
  const isHover = useShow(hoverRef, keys, cols, setCols, zIndex);
  const [x, setX] = useState(0)


  return (
    <DTD

      axis="x" position={{ x: 0, y: 0 }}
      onStart={(e) => { setX(e.pageX); setFlag(false); setWrapper(true); }}
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
        setWrapper(false);
      }
      }

    ><div ref={hoverRef} data-dbl={false} onMouseEnter={e => {
      clearTimeout(timer)
      document.getElementById("tooltipBtn").style.animation = '';

      timer = setTimeout(() => {

        document.getElementById("tooltipBtn1").style.fontSize = '14px';

        document.getElementById("tooltipBtn1").innerHTML = "Задать размер столбца<br>Зажать и потянуть для изменения размера<br>Двойной клик возвращает размер по умолчанию";

        let posElement = e.target.getBoundingClientRect();

        document.getElementById("tooltipBtn1").style.left = posElement.x + 10 + "px";
        document.getElementById("tooltipBtn1").style.top = posElement.y + 26 + "px";
        document.getElementById("tooltipBtn1").style.animation = 'delay-header 0.3s forwards';
        let blockWidth = cols[keys].width;
        let screenWidth = document.body.clientWidth;
        let widthTooltip = document.getElementById("tooltipBtn1").offsetWidth;
        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
          document.getElementById("tooltipBtn1").style.left = posElement.x - widthTooltip + 'px';
        }
      }, 100);

    }}
      onMouseLeave={e => {
        clearTimeout(timer)
        document.getElementById("tooltipBtn1").style.animation = '';
      }} style={{ width: '70px', cursor: 'pointer', position: 'absolute', top: 0, right: '-10px', zIndex: 10 }}>
        <div className={'resize'} style={{ width: '10px', position: 'absolute', right: '10px' }}></div>
        <div style={isHover.value ? { height: '100vh', width: '1px', position: 'absolute', right: '10px', top: 2, background: 'rgb(206, 206, 206)', pointerEvents: 'none' } : { pointerEvents: 'none' }}></div>
      </div></DTD>
  )

}
let drag = 0, drop = 0;


const TH = ({ children, style, className, hint, index, cols, setCols, col, keys, dragOver, setDragOver, wrapper, zIndex, setWrapper }) => {


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
          timer = setTimeout(() => {
            document.getElementById("tooltipBtn").style.fontSize = '14px';

            document.getElementById("tooltipBtn").innerHTML = hint;

            let posElement = e.target.getBoundingClientRect();

            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
            document.getElementById("tooltipBtn").style.top = posElement.y + 26 + "px";
            document.getElementById("tooltipBtn").style.animation = 'delay-header 0.5s forwards';
            let blockWidth = cols[keys].width;
            let screenWidth = document.body.clientWidth;
            let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
            if (screenWidth < posElement.x + widthTooltip) {
              document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
            }

          }, 250);

        }
      }}
      onMouseLeave={e => {
        clearTimeout(timer)
        document.getElementById("tooltipBtn").style.animation = '';
      }}
    >

      {children}
      {(cols[keys].swap) && <div style={{ ...styleDrag(col === dragOver, drag > drop)[0], ...styleDrag(col === dragOver, drag > drop)[1] }}></div>}
      {(cols[keys].resize) && <Draggable index={index} zIndex={zIndex} setWrapper={setWrapper} keys={keys} cols={cols} setCols={setCols} setFlag={setFlag} />}
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

const Wrapper = ({ zoom }) => (
  <div style={{ width: "100%", height: ((((document.body.clientHeight - 42) / 18) * (18 + 18 * -zoom)) + 42 * (1 + zoom)) - 86 * (1 + -Math.abs(zoom)), position: 'absolute', backgroundColor: 'rgba(111, 111, 111, 0.1)', top: 0, left: 0, zIndex: -1 }}></div>
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


const countR = [
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
  { key: '2', icon: 'icon-1 icons', title: "SMS", hint: 'sms' },
  { key: '3', icon: 'icon-Vector-21 icons', title: "Почта", hint: 'mail' },
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
      <span className="ttn-first" style={ttn === 'ttn1' ? { opacity: 1, width: 100, paddingRight: 4.5 } : ttn === 'ttn2' ? { opacity: 0, width: 0, paddingRight: 0 } : { opacity: 1, width: 42, paddingRight: 4.5 }} onMouseEnter={e => {
        setTtn('ttn1')
        timer = setTimeout(() => {


          document.getElementById("tooltipBtn").style.fontSize = '12px';

          document.getElementById("tooltipBtn").innerHTML = 'Первая ТТН';

          let posElement = e.target.getBoundingClientRect();

          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


        }, 250);
      }}
        onMouseLeave={e => {
          document.getElementById("tooltipBtn").style.animation = '';
          clearTimeout(timer);
        }}>{ttn1}</span>
      <span className="icon-Vector-81" style={ttn === 'ttn1' ? { left: 0 } : ttn === 'ttn2' ? { left: -1 } : { left: 0 }}></span>
      <span className="ttn-second" style={ttn === 'ttn2' ? { width: 100, paddingLeft: 0, left: -1, opacity: 1 } : ttn === 'ttn1' ? { width: 0, paddingLeft: 0, left: 0, opacity: 0 } : { width: 42, paddingLeft: 4.5, left: 0, opacity: 1 }} onMouseEnter={e => {
        setTtn('ttn2')
        timer = setTimeout(() => {


          document.getElementById("tooltipBtn").style.fontSize = '12px';

          document.getElementById("tooltipBtn").innerHTML = 'Вторая ТТН';

          let posElement = e.target.getBoundingClientRect();

          document.getElementById("tooltipBtn").style.left = posElement.x + "px";
          document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
          document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';
        }, 250);
      }}
        onMouseLeave={e => {
          document.getElementById("tooltipBtn").style.animation = '';
          clearTimeout(timer);
        }}>{ttn2}</span>
      <span className="trigger-mouse-2" style={ttn === 'ttn1' ? { width: 20 } : { width: 0 }} onMouseEnter={e => setTtn('ttn2')}></span>
    </div>
  )
})


function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}


function debounce(f, ms) {

  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}


function Order({ data, rowHeight, visibleRows, changeCount, changeTop, refresh, zoom, changeRefresh }) {
  const rootRef = React.useRef();
  const [arr, setArr] = useState(data)
  const [column, setColumn] = useState(columns);
  const [visible, setVisible] = React.useState(visibleRows);
  const [dragOver, setDragOver] = useState("");
  const [isModal, setModal] = React.useState(false);
  const [wrapper, setWrapper] = React.useState(false);
  const [index, setIndex] = React.useState(null);
  const [range, setRange] = React.useState(true);
  const [top, setTop] = React.useState(0);
  let [status, setStatus] = useState([]);

  let [refs, setRefs] = useState(refresh);

  useEffect(() => {
    setRefs(refresh)
  }, [refresh])

  if (refs) {
    changeRefresh(false);
    setRefs(false);
    fetch('http://vanl0073259.online-vm.com:3004/search', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "query": Object.filter(search, ([name, text]) => text !== '')
      })
    }).then(x => x.json()).then(x => {
      setArr(x);
    })
  }

  function getTopHeight() {
    // let sum = 0;
    // Object.keys(column).forEach(x => {
    //   if (sum < document.body.clientWidth + left) {
    //     sum += column[x].width;
    //     column[x].show = true;
    //   } else {
    //     column[x].show = false;
    //   }
    // })


    let temp = top - document.body.clientHeight * 0.5;

    return rowHeight * Math.min(
      (arr.length - visible - 1),
      Math.floor(temp < 0 ? 0 : temp / rowHeight)
    );
  }




  function getStart() {
    let temp = top - document.body.clientHeight * 0.5;

    return Math.min(
      (arr.length - visible - 1),
      Math.floor(temp < 0 ? 0 : temp / rowHeight)
    );
  }
  function getBottomHeight() {
    let temp = top - document.body.clientHeight * 0.5;
    return rowHeight * (arr.length - (Math.min(
      (arr.length - visible - 1),
      Math.floor(temp < 0 ? 0 : temp / rowHeight)
    ) + visible + 1));
  }




  function onKeyDown(e) {
    let isCtrl = e.ctrlKey || e.metaKey,
      keyA = e.which == 65;

    if (isCtrl && keyA) {
      let temp = arr.map((x, index) => {
        if (index !== 20 && index !== 22 && index !== 23 && index !== 24 && index !== 25) {
          return { ...x, select: true }

        } else {
          return { ...x }
        }
      })
      setArr(temp);
      changeCount(temp.filter(x => x['select'] === true).length)
      e.preventDefault()


    }
  }


  // async function update(e) {
  //   let temp = e.target.scrollTop - document.body.clientHeight * 0.5;
  //   // setStart(Math.min(
  //   //   (data.length - visible - 1),
  //   //   Math.floor(temp < 0 ? 0 : temp / 18)
  //   // ));
  // }




  async function updateHover(e) {
    clearTimeout(timers);
    clearTimeout(timer);
    if (!document.querySelector('.disableHover').classList.contains('disable-hover')) {
      document.querySelector('.disableHover').classList.add('disable-hover')
    }
    document.getElementById("tooltipBtn").style.animation = '';
    document.getElementById("tooltipBtn").style.fontSize = '12px';
    timers = setTimeout(function () {

      document.querySelector('.disableHover').classList.remove('disable-hover')
    }, 400);
  }


  async function onScroll(e) {
    // let el = document.querySelector('.table-scroll-wrapper-left .table-scroll');
    // el.style.top = Math.min(e.target.offsetHeight - el.offsetHeight, (e.target.scrollTop / e.target.offsetHeight) * 100) + 'px';
    setTop(e.target.scrollTop);

    changeTop(e.target.scrollTop)

    // setLeft(e.target.scrollLeft);

    // update(e);
    // updateCounter(e);
    // updateHover(e);
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
          arr.slice(last, index + 1).map((x, indexs) => (indexs + last !== 20 && indexs + last !== 22 && indexs + last !== 23 && indexs + last !== 24 && indexs + last !== 25) ? x['select'] = true : x['select'] = false);
          setArr([...arr])
        } else {
          setArr(arr.map(x => x['select'] = false))
          arr.slice(index, last + 1).map((x, indexs) => (indexs + last !== 20 && indexs + last !== 22 && indexs + last !== 23 && indexs + last !== 24 && indexs + last !== 25) ? x['select'] = true : x['select'] = false);
          setArr([...arr])
        }
      }
      else if (!isCtrl && !isShift) {
        if (last !== index)
          setArr(arr.map(x => x['select'] = false))

        arr[index]['select'] = !arr[index]['select'];
        setArr([...arr])
      }
      changeCount(arr.filter(x => x['select'] === true).length)
      last = index;
    } catch (e) { }

  }
  function onMouseMove(e) {
    if (!isDown) return;


    e.preventDefault();
    throttle(() => {
      const x = e.pageX - rootRef.current.offsetLeft;
      const walk = (x - startX) * 2 //scroll-fast
      rootRef.current.scrollLeft = scrollLeft - walk;
    }, 100)()

  }

  // function resizeWindow(e) {
  //   setVisible(document.body.clientHeight * 1.5 / rowHeight)
  // }

  React.useEffect(async () => {
    // changeCount(0);
    rootRef.current.addEventListener('mousedown', onMouseDown, false);
    rootRef.current.addEventListener('mouseleave', onMouseLeave, false);
    rootRef.current.addEventListener('mouseup', onMouseLeave, false);
    rootRef.current.addEventListener('mousemove', onMouseMove, false);


    let data = await fetch('http://vanl0073259.online-vm.com:3004?start=' + (Math.floor(document.body.clientHeight * 1.5 / (18 + 18 * zoom)) * 2) + '&end=' + (Math.floor(document.body.clientHeight * 1.5 / (18 + 18 * zoom))) * 7);
    let jsonData = await data.json();
    // console.log();
    setArr([...arr.concat(jsonData.map(x => { return { ...x, select: false } }))])

    const rawResponse = await fetch('http://vanl0073259.online-vm.com:3004/status').catch(e => console.log(e));
    const content = await rawResponse.json();
    setStatus(content);
    // updateData();
    // window.addEventListener('resize', resizeWindow, false)
    // rootRef.current.addEventListener('wheel', debounce(() => {
    //   let el = document.querySelector('.table-scroll-wrapper-left .table-scroll');
    //   let tables = document.querySelector('.tables');
    //   el.style.top = Math.min(tables.offsetHeight - el.offsetHeight, (tables.scrollTop / tables.offsetHeight) * 100) + 'px';
    // }, 50), false);
    // document.querySelector('.crm-table').style.minWidth = Object.keys(column).reduce((x, y) => x + column[y].width, 0) + 'px';

    rootRef.current.addEventListener('scroll', async e => throttle(onScroll(e), 40), false);
    // document.addEventListener('keydown', onKeyDown, false);

    return () => {
      // rootRef.current.removeEventListener('scroll', onScroll);
      // // rootRef.current.removeEventListener('wheel', onWheel);
      // document.removeEventListener('keydown', onKeyDown);
      // rootRef.current.removeEventListener('mousedown', onMouseDown);
      // rootRef.current.removeEventListener('mouseleave', onMouseLeave);
      // rootRef.current.removeEventListener('mouseup', onMouseLeave);
      // rootRef.current.removeEventListener('mousemove', onMouseMove);
      // window.removeEventListener('resize', resizeWindow)

    }
  }, [data.length, visibleRows, rowHeight]);

  async function onClickWrapper(flags) {
    if (!flags) {
      setRange(true)


      const rawResponse = await fetch('http://vanl0073259.online-vm.com:3004/search', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "query": Object.filter(search, ([name, text]) => text !== '')
        })
      }).catch(e => console.log(e));
      const content = await rawResponse.json();
      setArr(content);
    }
    setWrapper(flags);
  }

  const onMouseEnterHints = (e, text, x, flag = false) => {
    if (e.target.scrollWidth > e.target.offsetWidth && flag) {

      timer = setTimeout(() => {
        document.getElementById("tooltipBtn").style.fontSize = '12px';
        document.getElementById("tooltipBtn").innerHTML = text;
        let posElement = e.target.getBoundingClientRect();

        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
        document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';
        let blockWidth = column[x].width;
        let screenWidth = document.body.clientWidth;
        let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
          document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
        }

      }, 250);
    } else if (!flag) {
      timer = setTimeout(() => {
        document.getElementById("tooltipBtn").style.fontSize = '12px';
        document.getElementById("tooltipBtn").innerHTML = text;
        let posElement = e.target.getBoundingClientRect();

        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
        document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';
        let blockWidth = column[x].width;
        let screenWidth = document.body.clientWidth;
        let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
          document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
        }

      }, 250);
    }
  }
  const onMouseLeaveHints = () => {
    document.getElementById("tooltipBtn").style.animation = '';
    clearTimeout(timer);
  }
  return (
    <div>

      {status.length > 0 && <Header status={status} search={search} setArr={setArr} />}
      {/* <Modal /> */}

      <div style={range ? { height: ((((document.body.clientHeight - 42) / 18) * (18 + 18 * -zoom)) + 42 * (1 + zoom)) - 86 * (1 + -Math.abs(zoom)), overflow: 'auto', width: (document.body.clientWidth) * (1 - zoom) + (1285.7143 * ((1 + zoom) ** 2) - 2523.8095 * (1 + zoom) + 1289.2262), transform: 'scale(' + (1 + zoom) + ')' } : { height: ((((document.body.clientHeight - 42) / 18) * (18 + 18 * -zoom)) + 42 * (1 + zoom)) - 86 * (1 + -Math.abs(zoom)), overflowY: 'hidden', width: (document.body.clientWidth) * (1 - zoom) + (1285.7143 * ((1 + zoom) ** 2) - 2523.8095 * (1 + zoom) + 1289.2262), transform: 'scale(' + (1 + zoom) + ')' }} ref={rootRef} className="speed tables zoom">
        {/* <Scroll height={document.body.clientHeight} width={document.body.clientWidth}> */}
        {status.length > 0 && <table style={{ width: 0 }} className={'crm-table speed'}>
          <thead>
            <tr className="table-header">


              <th style={{ minWidth: 27, position: 'sticky', left: 0, background: 'white', zIndex: 40, height: 0, top: 0 }}>
                <div style={{ position: 'absolute', background: 'white', height: 42, width: 43, top: 0 }}>

                </div>
              </th>


              <th>
              </th>
              {Object.keys(column).map((x, i) => {


                if (x === 'id' && column[x].show) {
                  return (

                    <TH style={{
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, left: 35, zIndex: 45, backgroundColor: '#F1F1F1'
                    }} className="header-id" hint={hints.id} key={i} wrapper={wrapper} setWrapper={setWrapper} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>


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
                    }} className="header-status" zIndex={5} hint={hints.status} setWrapper={setWrapper} key={i} wrapper={wrapper} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} index={i} hint={hints.attribute} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} index={i} hint={hints.prro} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} index={i} hint={hints.pokupatel} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} index={i} hint={hints.country} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} hint={hints.tel} index={i} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} index={i} hint={hints.comm} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} hint={hints.sum} index={i} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} hint={hints.product} setWrapper={setWrapper} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} hint={hints.pay} setWrapper={setWrapper} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} index={i} setWrapper={setWrapper} hint={hints.delivery} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.addres} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.ttn} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.ttnStatus} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.prinyal} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.depart} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.add} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.open} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.accepted} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.prinyatZa} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Принят за'}
                    </TH>
                  )
                }
                if (x === "send" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.whosend} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Отправил'}
                    </TH>
                  )
                }
                if (x === "change" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.changed} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Изменил'}
                    </TH>
                  )
                }
                if (x === "end" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.finish} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Завершён'}
                    </TH>
                  )
                }
                if (x === "date5" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.prinyal} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.send} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Отправлен'}
                    </TH>
                  )
                }
                if (x === "date7" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.otpravka} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Отправка'}
                    </TH>


                  )
                }
                if (x === "date8" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.change} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.site} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.ip} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} hint={hints.utm('utm_source')} setWrapper={setWrapper} key={i} wrapper={wrapper} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.utm('utm_medium')} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.utm('utm_term')} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.utm('utm_content')} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.utm('utm_campaign')} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                {wrapper && <div onClick={() => { onClickWrapper(false); document.querySelector('.refresh').lastChild.style.strokeOpacity = 1; }} className="podlozhka" style={{ height: '100vh', width: 4658, position: 'absolute', top: 0, left: 0, display: 'block', zIndex: 998 }}></div>}
              </th>



              {status.length > 0 && Object.keys(column).map((x, i) => {
                if (x === "id" && column[x].show) {
                  return (

                    <th style={{ maxWidth: column['id'].width, position: 'sticky', top: 24, left: 35, zIndex: 45 }}>
                      <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} name={'wrap-hide'} type={'id'} />
                    </th>
                  )
                }
                if (x === "status" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, left: 70, zIndex: 45 } : { position: 'sticky', top: 24, left: 70, zIndex: 45 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} setArr={setArr} search={search} keys={'status_id'} setRange={setRange} refresh={refresh} width={column[x].width - 15} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>
                  )
                }
                if (x === 'attribute' && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} name={'wrap-hide'} type={'purchaser'} />
                    </th>
                  )
                }
                if (x === "ppo" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">
                        <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} type={'ppo'} />
                        <DropdownSmall setRange={setRange} setArr={setArr} search={search} keys={'count_ppo'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={ppo} />
                      </div>
                    </th>
                  )
                }
                if (x === "bayer_name" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={'purchaser'} onWrapper={onClickWrapper} name={'wrap-hide'} type={'purchaser'} />
                    </th>
                  )
                }
                if (x === "localization" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownMedium setRange={setRange} setArr={setArr} search={search} keys={'country'} refresh={refresh} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} options={countries} />
                    </th>
                  )
                }
                if (x === "phone" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">
                        <DropdownSmall setRange={setRange} refresh={refresh} setArr={setArr} search={search} keys={'type_phone'} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderRight: '1px solid white' }} options={options} />
                        <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} type={'phone'} len={12} />
                        <DropdownSmall setRange={setRange} setArr={setArr} search={search} keys={'count_phone'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={countR} />
                      </div>
                    </th>
                  )
                }
                if (x === "comment" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} name={'wrap-hide'} type={'comment'} len={500} />

                    </th>

                  )
                }
                if (x === "total" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} name={'wrap-hide'} type={'price'} />

                    </th>
                  )
                }
                if (x === "product" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">

                        <ProductDropdown setRange={setRange} refresh={refresh} width={(column[x].width - 68)} wrapper={wrapper} onWrapper={onClickWrapper} />

                        <DropdownSmall setRange={setRange} setArr={setArr} search={search} keys={'count_product'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={countR} />
                        <DropdownSmall setRange={setRange} setArr={setArr} search={search} keys={'count_resale'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={countR} />
                      </div>
                    </th>
                  )
                }
                if (x === "pay" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownMedium setRange={setRange} setArr={setArr} search={search} keys={x} refresh={refresh} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} options={pay} />

                    </th>
                  )
                }
                if (x === "delivery" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownMedium setRange={setRange} setArr={setArr} search={search} keys={x} refresh={refresh} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} options={deliveries} />

                    </th>
                  )
                }
                if (x === "addres" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={'address'} onWrapper={onClickWrapper} name={'wrap-hide'} type={'comment'} len={200} />
                    </th>
                  )
                }
                if (x === "ttn" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">
                        <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} type={'phone'} />

                        <DropdownSmall setRange={setRange} setArr={setArr} search={search} keys={'ttn_count'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={countR} />
                      </div>
                    </th>

                  )
                }
                if (x === "ttn_status" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={200} />
                    </th>
                  )
                }
                if (x === "ttn_user" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} setArr={setArr} setRange={setRange} refresh={refresh} width={column[x].width - 30} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>
                  )
                }
                if (x === "office" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} setArr={setArr} setRange={setRange} refresh={refresh} width={column[x].width - 30} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>

                  )
                }
                if (x === "date1" && column[x].show) {



                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)} >
                      <Calendar refresh={refresh} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />

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

                      <Calendar refresh={refresh} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />
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
                if (x === "send" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} setArr={setArr} setRange={setRange} refresh={refresh} width={column[x].width - 30} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>

                  )
                }
                if (x === "change" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} setArr={setArr} setRange={setRange} refresh={refresh} width={column[x].width - 30} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>

                  )
                }

                if (x === "end" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Calendar refresh={refresh} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>

                  )
                }

                if (x === "date5" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} setArr={setArr} setRange={setRange} refresh={refresh} width={column[x].width - 30} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>

                  )
                }
                if (x === "date6" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Calendar refresh={refresh} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />

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
                      <Calendar refresh={refresh} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>

                  )
                }
                if (x === "site" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} search={search} keys={x} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} name={'wrap-hide'} type={'site'} />

                    </th>
                  )
                }
                if (x === "ip" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className='wrap-hide'>
                        <SearchInput refresh={refresh} search={search} keys={x} wrapper={wrapper} onWrapper={onClickWrapper} type={'ip'} />
                        <DropdownSmall setRange={setRange} setArr={setArr} search={search} keys={'country_order'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={22} scrollWidth={53} options={countries} />
                        <DropdownSmall setRange={setRange} setArr={setArr} search={search} keys={'type_device'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={15} scrollWidth={53} options={device} />
                        <DropdownSmall setRange={setRange} setArr={setArr} search={search} keys={'type_os'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={15} scrollWidth={53} options={system} />
                        <DropdownSmall setRange={setRange} setArr={setArr} search={search} keys={'type_browser'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={17} scrollWidth={53} options={browser} />
                      </div>
                    </th>
                  )
                }
                if (x === "utm1" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} search={search} keys={x} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} />

                    </th>
                  )
                }
                if (x === "utm2" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm3" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm4" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm5" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_1" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_2" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_3" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_4" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_5" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_6" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_7" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_8" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_9" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_10" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
              }
              )}
            </tr>
            <tr style={{ height: 0, zIndex: -1, position: 'sticky', top: 24, left: 0 }} className="table-header">

              <th style={{ minWidth: 27, position: 'sticky', left: 0, background: 'white', zIndex: 10 }}></th>

              <th></th>
              <th></th>
              <th></th>
              <th></th>
              {Object.keys(column).slice(3).map((x, i) => {

                if (x === "ppo" && column[x].show) {
                  return (
                    <th>

                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "bayer_name" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "localization" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "phone" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "comment" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "total" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "product" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "pay" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "delivery" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "addres" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "ttn" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "ttn_status" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "ttn_user" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "office" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "date1" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "date2" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "date3" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "date4" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "send" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "change" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "end" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "date5" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "date6" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "date7" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>


                  )
                }
                if (x === "date8" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>


                  )
                }
                if (x === "site" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "ip" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm1" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm2" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm3" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm4" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm5" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_1" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_2" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_3" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_4" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_5" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_6" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_7" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_8" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_9" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_10" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
              }


              )}



            </tr>
          </thead>

          <tbody className='disableHover' style={{ marginTop: 5 }}>
            <tr style={{ height: 1 + getTopHeight() }} />
            {arr.slice(getStart(), getStart() + visible + 1).map((row, rowIndex) => (
              <tr
                style={((getStart() + rowIndex === 20) || (getStart() + rowIndex === 22) || getStart() + rowIndex === 23 || getStart() + rowIndex === 24 || getStart() + rowIndex === 25) || row.select ? { height: rowHeight } : { height: rowHeight }}
                key={getStart() + rowIndex}
                onDoubleClick={((getStart() + rowIndex !== 20) || (getStart() + rowIndex !== 22) || (getStart() + rowIndex !== 22) || (getStart() + rowIndex !== 24) || (getStart() + rowIndex !== 25)) ? e => {
                  setModal(true);
                  setTimeout(() => {
                    let table = document.querySelectorAll('.crm-table thead tr:first-child th');
                    let sum = [...table].slice(0, 4).reduce((x, y) => x + parseInt(y.clientWidth), 0);
                    let arr = [...table].slice(4,);
                    let col = Object.keys(column).slice(2,);
                    leftScroll = document.querySelector('.tables').scrollLeft;
                    for (let index = 0; index < arr.length; index++) {
                      const element = arr[index];
                      if (sum + element.clientWidth < document.querySelector('.tables').scrollLeft) {
                        sum += element.clientWidth
                        column[col[index]].show = false;
                      } else if (sum + element.clientWidth > document.querySelector('.tables').scrollLeft + document.body.clientWidth) {
                        sum += element.clientWidth
                        column[col[index]].show = false;
                      } else {
                        sum += element.clientWidth
                      }
                    }
                    setColumn({ ...column })
                  }, 200);

                } : undefined}
                className={row.select ? "crm-main-table select-toggle speed" : ((getStart() + rowIndex === 20) || (getStart() + rowIndex === 22) || getStart() + rowIndex === 23 || getStart() + rowIndex === 24 || getStart() + rowIndex === 25) ? "crm-main-table selected-lock speed" : "crm-main-table speed"}
                onClick={((getStart() + rowIndex !== 20) && (getStart() + rowIndex !== 22) && (getStart() + rowIndex !== 23) && (getStart() + rowIndex !== 24) && (getStart() + rowIndex !== 25)) ? e => onClick(e, getStart() + rowIndex) : undefined}

              >
                <td style={{ minWidth: 27, height: rowHeight, position: 'sticky', left: 0, background: 'white', zIndex: 10 }} className="speed">
                  {((getStart() + rowIndex !== 20) && (getStart() + rowIndex !== 22) && (getStart() + rowIndex !== 23) && (getStart() + rowIndex !== 24) && (getStart() + rowIndex !== 25)) && <div className="first" style={{ width: 7, height: rowHeight, borderRadius: "3px 0 0 3px", position: 'absolute', left: 28, top: 0 }}></div>}
                  {((getStart() + rowIndex === 20) || (getStart() + rowIndex === 22) || getStart() + rowIndex === 23 || getStart() + rowIndex === 24 || getStart() + rowIndex === 25) && <img src={lock} style={{ position: 'absolute', left: 20, top: 3, opacity: 1 }} onMouseEnter={e => {
                    timer = setTimeout(() => {

                      document.getElementById("tooltipBtn").style.fontSize = '12px';

                      document.getElementById("tooltipBtn").innerHTML = `Заказ открыт пользователем <span class="lock-count">Василий Хмурый</span><br>Заказ заблокирован сервером для проверки статуса ТТН`;

                      let posElement = e.nativeEvent;

                      document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                      document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                      document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.25s forwards';
                    }, 100);



                  }}
                    onMouseLeave={onMouseLeaveHints} />}
                  {((((getStart() + rowIndex === 20) || (getStart() + rowIndex === 22) || getStart() + rowIndex === 23 || getStart() + rowIndex === 24 || getStart() + rowIndex === 25)) || (getStart() + rowIndex === 22)) && <div className="" style={{ zIndex: -1, width: '100vw', height: rowHeight, position: 'absolute', left: 28, top: 0 }} onMouseEnter={e => {
                    timer = setTimeout(() => {

                      document.getElementById("tooltipBtn").style.fontSize = '12px';

                      document.getElementById("tooltipBtn").innerHTML = `Заказ открыт пользователем <span class="lock-count">Василий Хмурый</span><br>Заказ заблокирован сервером для проверки статуса ТТН`;

                      let posElement = e.nativeEvent;

                      document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                      document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                      document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.25s forwards';
                    }, 100);



                  }}
                    onMouseLeave={onMouseLeaveHints}
                  ></div>}
                  {getStart() + rowIndex === 21 && <div style={{ position: 'absolute', left: 19, top: 2, padding: 5 }} onMouseEnter={e => {
                    timer = setTimeout(() => {


                      document.getElementById("tooltipBtn").style.fontSize = '12px';

                      document.getElementById("tooltipBtn").innerHTML = 'Заказ не открывался';

                      let posElement = e.target.getBoundingClientRect();

                      document.getElementById("tooltipBtn").style.left = posElement.x + posElement.width + 5 + "px";
                      document.getElementById("tooltipBtn").style.top = posElement.y - 5 + "px";
                      document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.25s forwards';

                    }, 250);
                  }}
                    onMouseLeave={onMouseLeaveHints} ><div style={{ width: 4, height: 4, borderRadius: '100%', backgroundColor: '#00B9FF' }}></div></div>}
                </td>
                <td style={{ width: 0, height: rowHeight, position: 'sticky', left: 0, padding: 0 }} className="speed">

                  {(((getStart() + rowIndex !== 20) && (getStart() + rowIndex !== 22) && (getStart() + rowIndex !== 23) && (getStart() + rowIndex !== 24) && (getStart() + rowIndex !== 25)) && !row.select) ? <div className="last" style={{ zIndex: -1, width: (document.body.clientWidth) + (zoom !== 0 ? (document.body.clientWidth * -zoom + (45 * Math.abs(zoom * 10))) : 45), height: rowHeight, position: 'absolute', left: 28, top: 0 }}></div> : (((getStart() + rowIndex !== 20) || (getStart() + rowIndex !== 22) || (getStart() + rowIndex !== 22) || (getStart() + rowIndex !== 24) || (getStart() + rowIndex !== 25)) && row.select) && <div className="last" style={{ zIndex: -1, width: (document.body.clientWidth) + (zoom !== 0 ? (document.body.clientWidth * -zoom + (45 * Math.abs(zoom * 10))) : 45), height: rowHeight, position: 'absolute', left: 28, top: 0, background: 'rgba(81, 81, 81, 0.7)' }}></div>}
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
                          <div className="new-zakaz color-form2" style={{ background: row.status_color, overflow: 'hidden', textOverflow: 'ellipsis', width: column['status'].width }} onMouseEnter={e => onMouseEnterHints(e, row.status_name, x, true)}
                            onMouseLeave={onMouseLeaveHints}>
                            {row.status_name}
                          </div>
                        </td>
                      )
                    }
                    if (x === 'attribute' && column[x].show) {
                      return (
                        <td style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, row.customer, x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.attribute}</td>
                      )
                    }
                    if (x === "ppo" && column[x].show) {
                      return (
                        <td className="prro-colum">
                          <span style={{ display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', width: column['ppo'].width }} className={'prro-number'} onMouseEnter={e => onMouseEnterHints(e, row.ppo, x)}
                            onMouseLeave={onMouseLeaveHints}>{row.ppo}</span>

                          <span className="ico-wrap">
                            <span className={"colorWhite icons " + row.count_ppo} onMouseEnter={e => onMouseEnterHints(e, ppo.filter(x => x.icon?.includes(row.count_ppo))[0].hint === 'sms' ? hints.sms : hints.mail, x)}
                              onMouseLeave={onMouseLeaveHints}></span>
                          </span>
                        </td>
                      )
                    }

                    if (x === "bayer_name" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['bayer_name'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, row.customer, x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.customer}</td>
                      )
                    }
                    if (x === "localization" && column[x].show) {
                      return (
                        <td className="country-block flags ua" onMouseEnter={e => onMouseEnterHints(e, row.country, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          {country[row.country]}
                        </td>
                      )
                    }
                    if (x === "phone" && column[x].show) {
                      return (
                        <td className="tel-colum" style={{ pointerEvents: 'all' }} >
                          <div className={'tel'} onMouseEnter={e => onMouseEnterHints(e, row.type_phone === "icon-Vector-3" ? "Lifecell" : 'Киевстар', x)}
                            onMouseLeave={onMouseLeaveHints} >
                            <span className={"icons " + row.type_phone}></span>


                            <span className="tel-number">{row.phone}</span>
                          </div>
                          {row.count_message !== "0" && <Konv count={row.count_message} />}
                        </td>
                      )
                    }
                    if (x === "comment" && column[x].show) {
                      return (
                        <td className="max-lenght-comment" onMouseEnter={e => onMouseEnterHints(e, row.comment, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column['comment'].width, overflow: "hidden", textOverflow: 'ellipsis', }}>{row.comment}</td>

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
                            <span style={{ width: column['product'].width - 38, display: 'block', overflow: "hidden", textOverflow: 'ellipsis' }} className="max-lenght-product" onMouseEnter={e => onMouseEnterHints(e, '<div style="text-align:center;display:block;margin-bottom:5px;">Основной</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '</div><div class="item-list-product" style="margin-left:15px;margin-bottom:5px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '</div><div style="text-align:center;display:block;margin-bottom:5px;">Доппродажа</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem1 + '</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem2 + '</div>', x)}
                              onMouseLeave={onMouseLeaveHints}>{row.product}</span>
                            <Korobka count={row.count_product} onMouseEnter={e => onMouseEnterHints(e, '<div style="text-align:center;display:block;margin-bottom:5px;">Основной</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '</div><div class="item-list-product" style="margin-left:15px;margin-bottom:5px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '', x)}
                              onMouseLeave={onMouseLeaveHints} />
                            <Additional count={row.count_resale} hints={dopProdazhi} />
                          </span>
                        </td>

                      )
                    }
                    if (x === "pay" && column[x].show) {
                      return (
                        <td className="colum-pay" onMouseEnter={e => onMouseEnterHints(e, pay.filter(x => x.icon?.includes(row.pay))[0].title, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          <span className={'icons colorWhite ' + row.pay}></span>
                        </td>
                      )
                    }
                    if (x === "delivery" && column[x].show) {
                      return (
                        <td className="colum-delivery" onMouseEnter={e => onMouseEnterHints(e, deliveries.filter(y => y.icon?.includes(row.delivery))[0].title, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          <span className={"icons " + row.delivery}></span>
                        </td>
                      )
                    }
                    if (x === "addres" && column[x].show) {
                      return (
                        <td className="addres-block" style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, row.address, x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.address}</td>
                      )
                    }
                    if (x === "ttn" && column[x].show) {
                      return (
                        <td className="colum-ttn">
                          <div className="ttn-position">


                            <TtnGroup ttn1={row.ttn} ttn2={row.ttn} />
                            {/* <span className="ttn-number">{row.ttn}</span> */}
                            <Korobka count={2} onMouseEnter={e => onMouseEnterHints(e, 'Остался 2 дн до платного хранения', x)}
                              onMouseLeave={onMouseLeaveHints} />
                          </div>
                        </td>

                      )
                    }
                    if (x === "ttn_status" && column[x].show) {
                      return (
                        <td onMouseEnter={e => onMouseEnterHints(e, row.ttn_status, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.ttn_status}</td>
                      )
                    }
                    if (x === "ttn_user" && column[x].show) {
                      return (
                        <td onMouseEnter={e => onMouseEnterHints(e, row.view_user, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.view_user}</td>
                      )
                    }
                    if (x === "office" && column[x].show) {
                      return (
                        <td className="otdel-block" onMouseEnter={e => onMouseEnterHints(e, row.office, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.office}</td>
                      )
                    }
                    if (x === "date1" && column[x].show) {
                      return (
                        <td className="date-block">{row.add_order[0]} <span className="date-time">{row.add_order[1]}</span> </td>

                      )
                    }
                    if (x === "date2" && column[x].show) {
                      return (
                        <td className="date-time otkrit" onMouseEnter={e => onMouseEnterHints(e, row.hints_open, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          <div className="acceptza time">{row.open_order}<span className="colorTime" style={{ backgroundColor: row.color_open_order }}></span></div>
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
                        <td className="date-time acceptza" onMouseEnter={e => onMouseEnterHints(e, row.hints_success, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          <div className="acceptza time">{row.success_order_user}<span className="colorTime" style={{ backgroundColor: row.color_success_order_user }}></span></div>
                        </td>
                      )
                    }
                    if (x === "send" && column[x].show) {
                      return (
                        <td className="date-block" onMouseEnter={e => onMouseEnterHints(e, row.view_user, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.view_user}</td>
                      )
                    }
                    if (x === "change" && column[x].show) {
                      return (
                        <td className="date-block" onMouseEnter={e => onMouseEnterHints(e, row.view_user, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.view_user}</td>
                      )
                    }
                    if (x === "end" && column[x].show) {
                      return (
                        <td className="date-block">{row.update_order[0]} <span className="date-time">{row.update_order[1]}</span></td>
                      )
                    }
                    if (x === "date5" && column[x].show) {
                      return (
                        <td className="date-block" onMouseEnter={e => onMouseEnterHints(e, row.view_user, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.view_user}</td>
                      )
                    }
                    if (x === "date6" && column[x].show) {
                      return (
                        <td className="date-block">{row.send_order[0]} <span className="date-time">{row.send_order[1]}</span> </td>
                      )
                    }
                    if (x === "date7" && column[x].show) {
                      return (
                        <td className="date-block" onMouseEnter={e => onMouseEnterHints(e, row.hints_send, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          <div className="acceptza time">{row.send_order_user}<span className="colorTime" style={{ backgroundColor: row.color_send_order_user }}></span></div>
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
                        <td onMouseEnter={e => onMouseEnterHints(e, lightHints(row.site, x), x)}
                          onMouseLeave={onMouseLeaveHints} >{row.domen}</td>)
                    }
                    if (x === "ip" && column[x].show) {
                      return (
                        <TD className={'ip-block'}>
                          <div className="ip-block-position">
                            <span className="ip-current">{row.ip}</span>
                            <span className="ip-icons-position">
                              <span className="flags ru" onMouseEnter={e => onMouseEnterHints(e, row.country, x)}
                                onMouseLeave={onMouseLeaveHints} >{country[row.country_order]}</span>
                              <span className={row.type_device + " icons colorWhite"} onMouseEnter={e => onMouseEnterHints(e, device.filter(x => x.icon?.includes(row.type_device))[0].title, x)}
                                onMouseLeave={onMouseLeaveHints} ></span>
                              <span className={row.type_os + " icons colorWhite"} onMouseEnter={e => onMouseEnterHints(e, system.filter(x => x.icon?.includes(row.type_os))[0]?.title || '', x)}
                                onMouseLeave={onMouseLeaveHints}></span>
                              <span className={row.type_browser + " icons colorWhite "} onMouseEnter={e => onMouseEnterHints(e, browser.filter(x => x.icon?.includes(row.type_browser))[0].title, x)}
                                onMouseLeave={onMouseLeaveHints}></span>
                            </span>
                          </div>
                        </TD>
                      )
                    }
                    if (x === "utm1" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm1'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_source, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_source}</td>
                      )
                    }
                    if (x === "utm2" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm2'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_medium, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_medium}</td>
                      )
                    }
                    if (x === "utm3" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm3'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_term, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_term}</td>
                      )
                    }
                    if (x === "utm4" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm4'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_content, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_content}</td>
                      )
                    }
                    if (x === "utm5" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm5'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_campaign, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_campaign}</td>
                      )
                    }
                    if (x === "additional_1" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_1'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_1, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_1}</td>
                      )
                    }
                    if (x === "additional_2" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_2'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_2, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_2}</td>
                      )
                    }
                    if (x === "additional_3" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_3'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_3, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_3}</td>
                      )
                    }
                    if (x === "additional_4" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_4'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_4, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_4}</td>
                      )
                    }
                    if (x === "additional_5" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_5'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_5, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_5}</td>
                      )
                    }
                    if (x === "additional_6" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_6'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_6, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_6}</td>
                      )
                    }
                    if (x === "additional_7" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_7'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_7, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_7}</td>
                      )
                    }
                    if (x === "additional_8" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_8'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_8, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_8}</td>
                      )
                    }
                    if (x === "additional_9" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_9'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_9, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_9}</td>
                      )
                    }
                    if (x === "additional_10" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_10'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_10, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_10}</td>
                      )
                    }
                  })
                }
              </tr>
            ))}
            <tr style={{ height: getBottomHeight() }} />

          </tbody>

        </table>}


      </div>

    </div >
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);