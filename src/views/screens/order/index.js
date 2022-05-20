import React, { useEffect, useState, useRef, useCallback } from "react";
import { lock } from '../../../until/images';
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
import * as _ from 'lodash';


import { connect } from "react-redux";

import { top, countChange, refresh, changeIDList } from "../../../store/actions/index";
import Modal from "../../components/Modal";

const mapStateToProps = state => {
  return { refresh: state.refresh, zoom: state.zoom, list: state.idList };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTop: tops => dispatch(top(tops)),
    changeCount: counts => dispatch(countChange(counts)),
    changeRefresh: refreshs => dispatch(refresh(refreshs)),
    changeIDList: list => dispatch(changeIDList(list)),
  };
}

let country = {
  "Украина": "🇺🇦",
  "Россия": "🇷🇺",
  "Албания": "🇦🇱",
  "Казахстан": "🇰🇿",
  "Глобально": "icon-Exclude-2"
}

let columns = {
  id: {
    defaultWidth: 35,
    width: 35,
    resize: false,
    swap: false,
    show: true,

    showContent: true
  },
  status: {
    defaultWidth: 106,
    width: 106,
    resize: true,
    swap: false,
    show: true,

    showContent: true
  },
  attribute: {
    defaultWidth: 120,
    width: 120,
    resize: true,
    swap: false,
    show: true,

    showContent: true
  },
  localization: {
    defaultWidth: 54,
    width: 54,
    resize: false,
    swap: true,
    show: true,

    showContent: true
  },
  bayer_name: {
    defaultWidth: 142,
    width: 142,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  phone: {
    defaultWidth: 148,
    width: 148,
    resize: false,
    swap: true,
    show: true,

    showContent: true
  },
  comment: {
    defaultWidth: 187,
    width: 187,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  total: {
    defaultWidth: 61,
    width: 61,
    resize: false,
    swap: true,
    show: true,

    showContent: true
  },
  product: {
    defaultWidth: 258,
    width: 258,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  pay: {
    defaultWidth: 54,
    width: 54,
    resize: false,
    swap: true,
    show: true,

    showContent: true
  },
  ppo: {
    defaultWidth: 44,
    width: 44,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  delivery: {
    defaultWidth: 69,
    width: 69,
    resize: false,
    swap: true,
    show: true,

    showContent: true
  },
  addres: {
    defaultWidth: 172,
    width: 172,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  ttn: {
    defaultWidth: 125,
    width: 125,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  ttn_status: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  office: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  ttn_user: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },

  date1: {
    defaultWidth: 112,
    width: 112,
    resize: false,
    swap: true,
    show: true,

    showContent: true
  },
  date2: {
    defaultWidth: 72,
    width: 72,
    resize: false,
    swap: true,
    show: true,

    showContent: true
  },
  date3: {
    defaultWidth: 112,
    width: 112,
    resize: false,
    swap: true,
    show: true,

    showContent: true
  },
  date4: {
    defaultWidth: 73,
    width: 73,
    resize: false,
    swap: true,
    show: true,

    showContent: true
  },
  date5: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  date6: {
    defaultWidth: 112,
    width: 112,
    resize: false,
    swap: true,
    show: true,

    showContent: true
  },
  date7: {
    defaultWidth: 72,
    width: 72,
    resize: false,
    swap: true,
    show: true,

    showContent: true
  },
  send: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  date8: {
    defaultWidth: 112,
    width: 112,
    resize: false,
    swap: true,
    show: true,

    showContent: true
  },
  change: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  end: {
    defaultWidth: 112,
    width: 112,
    resize: false,
    swap: true,
    show: true,

    showContent: true
  },
  site: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  ip: {
    defaultWidth: 150,
    width: 150,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  utm1: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  utm2: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  utm3: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  utm4: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  utm5: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  additional_1: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  additional_2: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  additional_3: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  additional_4: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  additional_5: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  additional_6: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  additional_7: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  additional_8: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  additional_9: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
  additional_10: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true,

    showContent: true
  },
}

let calc = () => {
  let sumColumn = 0;

  Object.entries(columns).slice(2,).forEach(([key, value]) => {

    if (key === 'ppo') {
      sumColumn += value.width + 29;
      value.sum = sumColumn;
    } else {
      sumColumn += value.width;
      value.sum = sumColumn;
    }
    if (value.sum > document.body.clientWidth) {
      value.showContent = false;
    }
  })
}
calc()
let leftScroll = null;
let countScroll = 0;
function getKeyByValue(object, value) {
  let left = document.querySelector('.tables').scrollLeft;
  if (leftScroll !== left) {
    leftScroll = left;
    countScroll = Object.keys(object).filter(key => {
      if (object[key].sum < left)
        return object[key].showContent === value
    }).length;
    return countScroll;
  } else {
    return countScroll;
  }
}
const updateShow = (e) => {
  let cols = JSON.parse(JSON.stringify(columns));
  let col = Object.keys(cols).slice(2,);
  let leftScroll = e.target.scrollLeft;
  for (let index = 0; index < col.length; index++) {
    const element = cols[col[index]];
    if (element.sum < leftScroll || element.sum > (leftScroll + document.body.clientWidth)) {
      element.showContent = false;
    } else {
      element.showContent = true;
    }
  }
  return cols;
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
  <span className="ico-wrap icon-Exclude colorWhite icons" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {count !== '0' && <span className="count" style={count.toString().length >= 2 ? { borderRadius: 5, pointerEvents: 'none' } : { pointerEvents: 'none' }}>{count}</span>}
  </span>
))

const Additional = React.memo(({ count, hints }) => (
  <span className="ico-wrap icon-2 colorWhite icons" onMouseEnter={e => {
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
    {count !== '0' && <span className="count" style={count.toString().length >= 2 ? { borderRadius: 5, pointerEvents: 'none' } : { pointerEvents: 'none' }}>{count}</span>}
  </span>
))



const Konv = React.memo(({ count }) => (
  <span className="ico-wrap icon-1 colorWhite icons" onMouseEnter={e => {
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
              columns = JSON.parse(JSON.stringify(cols))
              calc()
              isHover.node1.parentElement.style.minWidth = cols[keys].width + 'px';
            } else {
              cols[keys].width = cols[keys].defaultWidth;
              setCols({ ...cols })
              columns = JSON.parse(JSON.stringify(cols))
              calc()
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


const TH = ({ children, style, className, hint, index, cols, setCols, col, keys, dragOver, setDragOver, wrapper, zIndex, setWrapper, showColumn }) => {


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
      {(cols[keys].swap && showColumn) && <div style={{ ...styleDrag(col === dragOver, drag > drop)[0], ...styleDrag(col === dragOver, drag > drop)[1] }}></div>}
      {(cols[keys].resize && showColumn) && <Draggable index={index} zIndex={zIndex} setWrapper={setWrapper} keys={keys} cols={cols} setCols={setCols} setFlag={setFlag} />}
    </th>
  )
}


let move = (from, to, data) => {
  let temp = Object.keys(data);
  temp.splice(to, 0, temp.splice(from, 1)[0])

  var obj = {};
  for (let i = 0; i < temp.length; i++) {
    obj[temp[i]] = data[temp[i]];
  }
  columns = JSON.parse(JSON.stringify(obj))
  calc();
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
  { key: '2', icon: 'icon-Vector-1', title: hints.vodofone },
  { key: '3', icon: 'icon-Union-1', title: hints.kyivstar },
  { key: '4', icon: 'icon-Vector-3', title: hints.lifecell },
  { key: '5', icon: 'icon-Union-18', title: hints.incorrectNumber },
  { key: '6', icon: 'icon-Union', title: hints.unknownNumber },
  { key: '7', icon: 'icons-Tele2', title: 'Tele2' },
  { key: '8', icon: 'icons-Activ', title: 'Activ' },
  { key: '9', icon: 'icons-Altel', title: 'Altel' },
  { key: '10', icon: 'icons-Beeline', title: 'Beeline' },
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
  { key: '1', icon: 'icon-Exclude-2', title: "Глобально" },
  { key: '2', text: '🇺🇦', class: 'flags', title: hints.ukraine },
  { key: '3', text: '🇷🇺', class: 'flags', title: hints.russia },
  { key: '4', text: '🇦🇱', class: 'flags', title: hints.alb },
  { key: '5', text: '🇰🇿', class: 'flags', title: hints.kz }
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
  let text_input = document.getElementById(id + 'input')?.value ?? '';
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

let size = null;

function Order({ data, rowHeight, changeCount, changeTop, refresh, zoom, changeRefresh, updateData, setModal, modal, changeIDList }) {
  const rootRef = React.useRef();

  const [column, setColumn] = useState(JSON.parse(JSON.stringify(columns)));
  const [visible, setVisible] = useState(Math.floor(document.body.clientHeight / (18 + 18 * zoom)) * 1.09);
  const [dragOver, setDragOver] = useState("");
  const [wrapper, setWrapper] = React.useState(false);
  const [index, setIndex] = React.useState(null);
  const [range, setRange] = React.useState(true);
  const [top, setTop] = React.useState(0);
  let [status, setStatus] = useState([]);
  let [item, setItem] = useState({});
  let [resetSort, setResetSort] = useState(false);
  const [width, setWidth] = useState(0);

  let [fetching, setFetching] = useState(true);


  useEffect(async () => {
    changeTop(top);
    clearTimeout(timers);
    if (!document.querySelector('.disableHover')?.classList.contains('disable-hover')) {
      document.querySelector('.disableHover')?.classList.add('disable-hover')

    }
    document.getElementById("tooltipBtn").style.animation = '';
    document.getElementById("tooltipBtn").style.fontSize = '12px';

    timers = setTimeout(() => {
      document.querySelector('.disableHover')?.classList.remove('disable-hover')
    }, 400);
    if (data.length <= getStart() + size && fetching) {
      setFetching(false)
      let dates = await fetch('http://192.168.0.197:3005/search', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "query": Object.filter(search, ([name, text]) => text !== ''),
          "start": data.at(-1)?.id,
          "end": size
        })
      }).catch(e => console.log(e));
      let jsonData = await dates.json();
      if (jsonData.length > 0) {
        let arrays = [...data.concat(jsonData.map(x => { return { ...x, select: false } }))];
        updateData([...arrays], 'scroll');
        setFetching(true)

      }
    }
  }, [top])

  useEffect(async () => {
    if (refresh) {
      [...document.querySelectorAll('.crm-header-link')].forEach(y => y?.classList.remove('btn-toggle'));
      [...document.querySelectorAll('.crm-header-link')][0]?.classList.add('btn-toggle');
      changeRefresh(false);
      fetch('http://192.168.0.197:3005/search', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "query": '',
          "end": size
        })
      }).then(x => x.json()).then(x => {
        let arrays = x.map(x => { return { ...x, select: false } })
        setFetching(true)

        updateData(arrays, 'refresh');
        search = {
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


      })
      fetch('http://192.168.0.197:3005/stats', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(x => x.json()).then(x => setStatus(x.map(x => { return { ...x, show: true, empty: true } })))
    }

  }, [refresh])


  function getTopHeight() {
    let height = ~~(document.body.clientHeight * 0.11);
    let temp = (top - height) < 0 ? 0 : top - height;
    let a = (data.length - visible - 1);
    let b = ~~(temp / rowHeight)
    return rowHeight * (a < b ? a : b);
  }

  function getStart() {
    let height = ~~(document.body.clientHeight * 0.11);
    let temp = (top - height) < 0 ? 0 : top - height;
    let a = (data.length - visible - 1);
    let b = ~~(temp / rowHeight)
    return (a < b ? a : b);
  }
  
  function getBottomHeight() {
    let height = ~~(document.body.clientHeight * 0.11);
    let temp = (top - height) < 0 ? 0 : top - height;
    let a = (data.length - visible - 1);
    let b = ~~(temp / rowHeight)
    return rowHeight * (data.length - (a < b ? a : b) + visible + 1);
  }

  async function onScroll(e) {
    if (top !== e.target.scrollTop) {
      setTop(e.target.scrollTop);
    } else if (top === e.target.scrollTop) {
      setColumn(updateShow(e))

    }
  }

  function onMouseDown(e) {
    if (!e.target.classList.contains('resize') && !e.target.classList.contains('drag') && e.target.localName !== 'input') {
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


  async function clickTr(e, index) {
    if (e.currentTarget) {
      let newobj = [...data];
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        e.stopPropagation();
        newobj[index].select = !newobj[index].select;
      } else if (e.shiftKey) {
        e.preventDefault();
        e.stopPropagation();
        newobj = newobj.map((x) => {
          return { ...x, select: false };
        });
        if (last < index) {
          newobj.slice(last, index).map((x, i) => {
            if (x.lock) {
              x.select = false;
            } else {
              x.select = true;
            }
          });
        } else {
          newobj.slice(index, last).map((x, i) => {
            if (x.lock) {
              x.select = false;
            } else {
              x.select = true;
            }
          });
        }
      } else {
        e.preventDefault();
        e.stopPropagation();
        last = index;
        newobj.map((x, i) => {
          if (i !== index) {
            x.select = false;
          }
        });
        newobj[index].select = !newobj[index].select;
      }
      updateData(newobj);
      changeCount(newobj.filter(x => x['select'] === true).length)
      changeIDList(newobj.filter(x => x['select'] === true).map(x => x.id))
    }
  }

  function onMouseMove(e) {
    if (!isDown) return;


    e.preventDefault();
    const x = e.pageX - rootRef.current.offsetLeft;
    const walk = (x - startX) * 2 //scroll-fast
    rootRef.current.scrollLeft = scrollLeft - walk;

  }


  React.useEffect(async () => {
    rootRef.current.addEventListener('mousedown', onMouseDown, false);
    rootRef.current.addEventListener('mouseleave', onMouseLeave, false);
    rootRef.current.addEventListener('mouseup', onMouseLeave, false);
    rootRef.current.addEventListener('mousemove', onMouseMove, false);
    size = Math.ceil((document.body.clientHeight / 18)) * 5;
    return () => {
    }
  }, []);

  async function onClickWrapper(flags) {
    setWrapper(flags);
  }


  useEffect(async () => {
    if (!wrapper) {
      setRange(true)
      rootRef.current.scrollTop = 0;
      fetch('http://192.168.0.197:3005/search', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "query": Object.filter(search, ([name, text]) => text !== ''),
          "end": size
        })
      }).then(x => x.json()).then(x => {
        let arrays = x.map(x => { return { ...x, select: false } })
        setVisible(Math.ceil((document.body.clientHeight / (18 + 18 * zoom))) * 1.09)
        updateData(arrays, 'wrapper');
        setFetching(true)
      });


      fetch('http://192.168.0.197:3005/stats', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "query": Object.filter(search, ([name, text]) => text !== '' && name !== 'orders')
        })
      }).catch(x => console.log(x)).then(x => x.json()).then(x => {

        setStatus(x.map(x => { return { ...x, show: true, empty: true } }));
      });

    }
  }, [wrapper])

  const onMouseEnterHints = (e, text, x, flag = false) => {
    if (e.target.scrollWidth > e.target.offsetWidth && flag && text !== '' && !document.querySelector('.disableHover').classList.contains('disable-hover')) {

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
    } else if (!flag && text !== '' && !document.querySelector('.disableHover').classList.contains('disable-hover')) {

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
    if (!document.querySelector('.disableHover').classList.contains('disable-hover')) {
      document.getElementById("tooltipBtn").style.animation = '';
      clearTimeout(timer);
    }
  }

  useEffect(() => {
    setWidth((document?.querySelector('#id')?.clientWidth ?? 0))
  }, [status.length])
  return (
    <div tabIndex={-1}>

      {status.length > 0 && <Header status={status} scroll={rootRef.current} search={search} setArr={updateData} />}
      {modal && <Modal setModal={setModal} status={status} item={item} />}
      <div tabIndex={-1}
        onScroll={_.throttle(onScroll, 600, { leading: true, trailing: false })}
        style={range ? {
          height: ((((document.body.clientHeight - 42) / 18) * (18 + 18 * -zoom)) + 42 * (1 + zoom)) - 86 * (1 + -Math.abs(zoom)),
          overflow: 'auto', width: (document.body.clientWidth - 105), transform: 'scale(' + (1 + zoom) + ')', marginLeft: 23
        } : {
          height: ((((document.body.clientHeight - 42) / 18) * (18 + 18 * -zoom)) + 42 * (1 + zoom)) - 86 * (1 + -Math.abs(zoom)),
          overflowY: 'hidden', width: (document.body.clientWidth - 105), transform: 'scale(' + (1 + zoom) + ')', marginLeft: 23
        }}
        ref={rootRef}
        className="speed tables zoom">
        {status.length > 0 && <table style={{ width: 0, outline: 'none' }} tabIndex={-1} className={'crm-table speed'}>
          <thead tabIndex={-1}>
            <tr className="table-header" key={'table-header'}>
              <th style={{
                width: 15, minWidth: 15, height: rowHeight, position: 'sticky', left: 0, top: 0, padding: 0, zIndex: 5, background: '#fff'
              }}>
                <div style={{ position: 'absolute', background: 'white', height: 42, width: 43, top: 0 }}>

                </div>
              </th>
              {Object.keys(column).map((x, i) => {
                if (x === 'id' && column[x].show) {
                  return (
                    <TH style={{
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, left: 15, zIndex: 45, backgroundColor: '#F1F1F1'
                    }} className="header-id" hint={hints.id} key={i} wrapper={wrapper} setWrapper={setWrapper} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      ID
                    </TH>
                  )
                }
                if (x === 'status' && column[x].show) {
                  return (
                    <TH style={{
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, left: 15 + width, zIndex: 5, backgroundColor: '#fff'
                    }} className="header-status" zIndex={5} hint={hints.status} setWrapper={setWrapper} key={i} wrapper={wrapper} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} index={i} hint={hints.attribute} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Атрибут'}
                    </TH>
                  )
                }
                if (x === "ppo" && column[x].show) {
                  return (
                    <TH style={{
                      minWidth: column[x].width + 29,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} index={i} hint={hints.prro} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} index={i} hint={hints.pokupatel} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} index={i} hint={hints.country} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} hint={hints.tel} index={i} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} index={i} hint={hints.comm} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} hint={hints.sum} index={i} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Сумма'}
                    </TH>
                  )
                }
                if (x === "product" && column[x].show) {
                  return (
                    <TH style={{
                      minWidth: (column[x].width + 15),
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.product} setWrapper={setWrapper} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} hint={hints.pay} setWrapper={setWrapper} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} index={i} setWrapper={setWrapper} hint={hints.delivery} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.addres} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.ttn} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.ttnStatus} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.prinyal} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.depart} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.add} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.open} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.accepted} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.prinyatZa} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.whosend} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.changed} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.finish} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.prinyal} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.send} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.otpravka} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.change} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.site} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.ip} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'IP'}
                    </TH>
                  )
                }
                if (x === "utm1" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2,
                    }} hint={hints.utm('utm_source')} setWrapper={setWrapper} key={i} wrapper={wrapper} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Source'}
                    </TH>
                  )
                }
                if (x === "utm2" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.utm('utm_medium')} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Medium'}
                    </TH>
                  )
                }
                if (x === "utm3" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.utm('utm_term')} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Term'}
                    </TH>
                  )
                }
                if (x === "utm4" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.utm('utm_content')} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Content'}
                    </TH>
                  )
                }
                if (x === "utm5" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.utm('utm_campaign')} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Campaign'}
                    </TH>
                  )
                }
                if (x === "additional_1" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 1'}
                    </TH>
                  )
                }
                if (x === "additional_2" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 2'}
                    </TH>
                  )
                }
                if (x === "additional_3" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 3'}
                    </TH>
                  )
                }
                if (x === "additional_4" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 4'}
                    </TH>
                  )
                }
                if (x === "additional_5" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 5'}
                    </TH>
                  )
                }
                if (x === "additional_6" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 6'}
                    </TH>
                  )
                }
                if (x === "additional_7" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 7'}
                    </TH>
                  )
                }
                if (x === "additional_8" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 8'}
                    </TH>
                  )
                }
                if (x === "additional_9" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 9'}
                    </TH>
                  )
                }
                if (x === "additional_10" && column[x].show) {
                  return (
                    <TH style={{
                      maxWidth: column[x].width,
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} showColumn={column[x].showContent} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 10'}
                    </TH>
                  )
                }
              }


              )}



            </tr>
            <tr className="crm-input" key={'crm-input'}>

              <th style={{
                width: 15, minWidth: 15, height: rowHeight, position: 'sticky', left: 0, top: 24, padding: 0, zIndex: 15, background: '#fff'
              }}>
                {wrapper && <div onClick={() => { onClickWrapper(false); document.querySelector('.refresh').lastChild.style.strokeOpacity = 1; }} className="podlozhka" style={{ height: '100vh', width: 4658, position: 'absolute', top: 0, left: 0, display: 'block', zIndex: 998 }}></div>}
              </th>

              {status.length > 0 && Object.keys(column).map((x, i) => {
                if (x === "id" && column[x].show) {
                  return (

                    <th key={x} style={{ maxWidth: column['id'].width, position: 'sticky', top: 24, left: 15, zIndex: 45 }}>
                      <SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} name={'wrap-hide'} type={'id'} />
                    </th>
                  )
                }
                if (x === "status" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, left: 15 + width, zIndex: 45 } : { position: 'sticky', top: 24, left: 15 + width, zIndex: 45 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'status_id'} setRange={setRange} refresh={refresh} showColumn={column[x].showContent} width={column[x].width - 15} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>
                  )
                }
                if (x === 'attribute' && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} name={'wrap-hide'} type={'purchaser'} />
                    </th>
                  )
                }
                if (x === "ppo" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">
                        <SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} type={'ppo'} />
                        <DropdownSmall setRange={setRange} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'count_ppo'} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={ppo} />
                      </div>
                    </th>
                  )
                }
                if (x === "bayer_name" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} search={search} keys={'customer'} onWrapper={onClickWrapper} name={'wrap-hide'} type={'purchaser'} />
                    </th>
                  )
                }
                if (x === "localization" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownMedium setRange={setRange} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'country'} refresh={refresh} showColumn={column[x].showContent} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} options={countries} />
                    </th>
                  )
                }
                if (x === "phone" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">
                        <DropdownSmall setRange={setRange} resetSort={resetSort} setResetSort={setResetSort} refresh={refresh} showColumn={column[x].showContent} setArr={updateData} search={search} keys={'type_phone'} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderRight: '1px solid white' }} options={options} />
                        <SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} type={'phone'} len={12} />
                        <DropdownSmall setRange={setRange} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'count_message'} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={countR} />
                      </div>
                    </th>
                  )
                }
                if (x === "comment" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} name={'wrap-hide'} type={'comment'} len={500} />

                    </th>

                  )
                }
                if (x === "total" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} name={'wrap-hide'} type={'price'} />

                    </th>
                  )
                }
                if (x === "product" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">
                        <ProductDropdown setRange={setRange} refresh={refresh} showColumn={column[x].showContent} width={(column[x].width - 68)} wrapper={wrapper} onWrapper={onClickWrapper} />
                        <DropdownSmall setRange={setRange} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'count_product'} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={countR} />
                        <DropdownSmall setRange={setRange} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'count_resale'} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={countR} />
                      </div>
                    </th>
                  )
                }
                if (x === "pay" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownMedium setRange={setRange} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} options={pay} />

                    </th>
                  )
                }
                if (x === "delivery" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownMedium setRange={setRange} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} options={deliveries} />
                    </th>
                  )
                }
                if (x === "addres" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} search={search} keys={'address'} onWrapper={onClickWrapper} name={'wrap-hide'} type={'comment'} len={200} />
                    </th>
                  )
                }
                if (x === "ttn" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">
                        <SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} type={'phone'} />
                        <DropdownSmall setRange={setRange} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'ttn_count'} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={countR} />
                      </div>
                    </th>

                  )
                }
                if (x === "ttn_status" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={200} />
                    </th>
                  )
                }
                if (x === "ttn_user" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'status_id'} setRange={setRange} refresh={refresh} showColumn={column[x].showContent} width={column[x].width - 27} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>
                  )
                }
                if (x === "office" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'status_id'} setRange={setRange} refresh={refresh} showColumn={column[x].showContent} width={column[x].width - 27} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>

                  )
                }
                if (x === "date1" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)} >
                      <Calendar refresh={refresh} showColumn={column[x].showContent} setRange={setRange} search={search} keys={'add_order'} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>
                  )
                }
                if (x === "date2" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Range refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} setRange={setRange} onWrapper={onClickWrapper} />
                    </th>
                  )
                }
                if (x === "date3" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>

                      <Calendar refresh={refresh} showColumn={column[x].showContent} search={search} keys={'success_order'} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>

                  )
                }
                if (x === "date4" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Range refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} setRange={setRange} onWrapper={onClickWrapper} />
                    </th>
                  )
                }
                if (x === "send" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'status_id'} setRange={setRange} refresh={refresh} showColumn={column[x].showContent} width={column[x].width - 27} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>

                  )
                }
                if (x === "change" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'status_id'} setRange={setRange} refresh={refresh} showColumn={column[x].showContent} width={column[x].width - 27} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>

                  )
                }

                if (x === "end" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Calendar refresh={refresh} showColumn={column[x].showContent} setRange={setRange} search={search} keys={'send_order'} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>

                  )
                }

                if (x === "date5" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'status_id'} setRange={setRange} refresh={refresh} showColumn={column[x].showContent} width={column[x].width - 27} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>

                  )
                }
                if (x === "date6" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Calendar refresh={refresh} showColumn={column[x].showContent} setRange={setRange} search={search} keys={'send_order'} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>
                  )
                }
                if (x === "date7" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Range refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} setRange={setRange} onWrapper={onClickWrapper} />

                    </th>


                  )
                }
                if (x === "date8" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Calendar refresh={refresh} showColumn={column[x].showContent} setRange={setRange} search={search} keys={'update_order'} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>

                  )
                }
                if (x === "site" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} refresh={refresh} showColumn={column[x].showContent} search={search} keys={x} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} name={'wrap-hide'} type={'site'} />

                    </th>
                  )
                }
                if (x === "ip" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className='wrap-hide'>
                        <SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} refresh={refresh} showColumn={column[x].showContent} search={search} keys={x} wrapper={wrapper} onWrapper={onClickWrapper} type={'ip'} />
                        <DropdownSmall setRange={setRange} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'country_order'} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={22} scrollWidth={53} options={countries} />
                        <DropdownSmall setRange={setRange} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'type_device'} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={15} scrollWidth={53} options={device} />
                        <DropdownSmall setRange={setRange} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'type_os'} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={15} scrollWidth={53} options={system} />
                        <DropdownSmall setRange={setRange} resetSort={resetSort} setResetSort={setResetSort} setArr={updateData} search={search} keys={'type_browser'} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={17} scrollWidth={53} options={browser} />
                      </div>
                    </th>
                  )
                }
                if (x === "utm1" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} refresh={refresh} showColumn={column[x].showContent} search={search} keys={x} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} />

                    </th>
                  )
                }
                if (x === "utm2" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm3" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm4" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm5" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_1" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_2" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_3" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_4" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_5" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_6" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_7" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_8" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_9" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_10" && column[x].show) {
                  return (
                    <th key={x} style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput setArr={updateData} resetSort={resetSort} setResetSort={setResetSort} search={search} keys={x} refresh={refresh} showColumn={column[x].showContent} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
              }
              )}
            </tr>
            <tr key={'crm-wrapper'} style={{ height: 0, zIndex: -1, position: 'sticky', top: 24, left: 0 }} className="table-header">

              <th style={{ position: 'sticky', left: 0, background: 'white', zIndex: 10 }}></th>

              <th></th>
              <th></th>
              <th></th>
              {Object.keys(column).slice(3).map((x, i) => {

                if (x === "ppo" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "bayer_name" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "localization" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "phone" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "comment" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "total" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "product" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "pay" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "delivery" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "addres" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "ttn" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "ttn_status" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "ttn_user" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "office" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "date1" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "date2" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "date3" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "date4" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "send" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "change" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "end" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "date5" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "date6" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "date7" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>


                  )
                }
                if (x === "date8" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>


                  )
                }
                if (x === "site" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "ip" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm1" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm2" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm3" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm4" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm5" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_1" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_2" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_3" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_4" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_5" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_6" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_7" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_8" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_9" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_10" && column[x].show) {
                  return (
                    <th key={x}>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
              }


              )}



            </tr>
          </thead>


          {data.length > 0 && <tbody className='disableHover' style={{ marginTop: 5 }}>

            <tr style={{ height: getTopHeight() }} />



            {data.slice(getStart(), getStart() + visible + 1).map((row, rowIndex) => (
              <tr
                style={{ height: rowHeight }}
                key={getStart() + rowIndex}
                className={row.select ? "crm-main-table select-toggle speed" : (getStart() + rowIndex === 25) ? "crm-main-table selected-lock speed" : "crm-main-table speed"}
                onClick={e => (getStart() + rowIndex !== 25) ? clickTr(e, getStart() + rowIndex) : undefined}
                onDoubleClick={e => {
                  setModal(true);
                  setItem(row)
                }}
              >

                <td style={{ width: 15, minWidth: 15, height: rowHeight, position: 'sticky', left: 0, zIndex: 1, padding: 0, background: '#fff' }} className="speed f">
                  
                </td>
                {
                  Object.keys(column).map((x, i) => {
                    let styles = { maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' };
                    if (x === 'id' && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="id-table" style={{
                          position: 'sticky', background: '#eee',
                          left: 15, zIndex: 1,
                        }}>
                          {/* {<div className="first" style={{ height: rowHeight, position: 'absolute', left: -15, top: 0, background: '#fff', width: 15 }}></div>} */}
                          {(getStart() + rowIndex === 25) && <img src={lock} style={{ position: 'absolute', left: -15, top: 3, opacity: 1 }}
                          //   onMouseEnter={e => {
                          //   timer = setTimeout(() => {

                          //     document.getElementById("tooltipBtn").style.fontSize = '12px';

                          //     document.getElementById("tooltipBtn").innerHTML = `Заказ открыт пользователем <span class="lock-count">Василий Хмурый</span><br>Заказ заблокирован сервером для проверки статуса ТТН`;

                          //     let posElement = e.nativeEvent;

                          //     document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                          //     document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                          //     document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.25s forwards';
                          //   }, 100);



                          // }}
                          //   onMouseLeave={onMouseLeaveHints}
                          />}

                          {getStart() + rowIndex === 21 && <div style={{ position: 'absolute', left: -15, top: 2, padding: 5 }}
                          //   onMouseEnter={e => {
                          //   timer = setTimeout(() => {


                          //     document.getElementById("tooltipBtn").style.fontSize = '12px';

                          //     document.getElementById("tooltipBtn").innerHTML = 'Заказ не открывался';

                          //     let posElement = e.target.getBoundingClientRect();

                          //     document.getElementById("tooltipBtn").style.left = posElement.x + posElement.width + 5 + "px";
                          //     document.getElementById("tooltipBtn").style.top = posElement.y - 5 + "px";
                          //     document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.25s forwards';

                          //   }, 250);
                          // }}
                          //   onMouseLeave={onMouseLeaveHints}
                          ><div style={{ width: 4, height: 4, borderRadius: '100%', backgroundColor: '#00B9FF' }}></div></div>}

                          {row.id}
                        </td>
                      )
                    }
                    else if (x === 'status' && column[x].show && column[x].showContent) {
                      return (

                        <td key={x} className="status-table" style={{
                          position: 'sticky', background: 'white',
                          left: 15 + width, zIndex: 1,
                        }}>
                          <div className="new-zakaz color-form2" style={{ background: row.status.color, overflow: 'hidden', textOverflow: 'ellipsis', width: column['status'].width }} onMouseEnter={e => onMouseEnterHints(e, row.status.name, x, true)}
                            onMouseLeave={onMouseLeaveHints}>
                            {row.status.name}
                          </div>
                        </td>
                      )
                    }
                    else if (x === 'attribute' && column[x].show) {
                      return (
                        <td key={x} colSpan={getKeyByValue(column, false)} style={styles} onMouseEnter={e => onMouseEnterHints(e, row.customer, x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.attribute}</td>
                      )
                    }
                    else if (x === "ppo" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="prro-colum" style={{ maxWidth: 73, minWidth: 73 }}>
                          {<><span style={{ display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', width: column['ppo'].width }} className={'prro-number'} onMouseEnter={e => onMouseEnterHints(e, row.ppo, x)}
                            onMouseLeave={onMouseLeaveHints}>{row.ppo}</span>
                            <span className={"colorWhite icons " + row.count_ppo} onMouseEnter={e => onMouseEnterHints(e, ppo.filter(x => x.icon?.includes(row.count_ppo))[0].hint === 'sms' ? hints.sms : hints.mail, x)}
                              onMouseLeave={onMouseLeaveHints}>
                            </span></>}
                        </td>
                      )
                    }

                    else if (x === "bayer_name" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} style={styles} onMouseEnter={e => onMouseEnterHints(e, row.customer, x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.customer}</td>
                      )
                    }
                    else if (x === "localization" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className={row.country === "Глобально" ? "country-block " + country[row.country] : "country-block flags ua "} onMouseEnter={e => onMouseEnterHints(e, row.country, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          {(row.country === "Глобально" ? "" : country[row.country])}
                        </td>
                      )
                    }
                    else if (x === "phone" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="tel-colum" style={{ pointerEvents: 'all' }} >

                          {<div className={'tel'}
                            onMouseEnter={e => onMouseEnterHints(e, options.filter(x => {
                              if (x.icon && x.icon === row.type_phone) {
                                return x;
                              }
                            })[0]?.title ?? '', x)}
                            onMouseLeave={onMouseLeaveHints} >
                            <span className={"icons " + row.type_phone}></span>


                            <span className="tel-number">{row.phone}</span>
                          </div>}
                          {row.count_message !== "" && <Konv count={row.count_message} />}
                        </td>
                      )
                    }
                    else if (x === "comment" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="max-lenght-comment" onMouseEnter={e => onMouseEnterHints(e, row.comment, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column['comment'].width, overflow: "hidden", textOverflow: 'ellipsis', }}>{row.comment}</td>

                      )
                    }
                    else if (x === "total" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="colum-sum">{row.total}</td>
                      )
                    }
                    else if (x === "product" && column[x].show && column[x].showContent) {

                      let dopItem1 = 'test1';
                      let dopItem2 = 'test2';
                      let dopProdazhi = '<div style="text-align:center;display:block;margin-bottom:5px;">Доппродажа</div><div class="item-list-product"style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem1 + '</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem2 + '</div>';
                      return (
                        <td key={x} className="product-colum">
                          {< >
                            <span style={{ width: column['product'].width - 38, display: 'block', overflow: "hidden", textOverflow: 'ellipsis' }} className="max-lenght-product" onMouseEnter={e => onMouseEnterHints(e, '<div style="text-align:center;display:block;margin-bottom:5px;">Основной</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '</div><div class="item-list-product" style="margin-left:15px;margin-bottom:5px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '</div><div style="text-align:center;display:block;margin-bottom:5px;">Доппродажа</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem1 + '</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem2 + '</div>', x)}
                              onMouseLeave={onMouseLeaveHints}>{row.product}</span>
                            <Korobka count={row.count_product} onMouseEnter={e => onMouseEnterHints(e, '<div style="text-align:center;display:block;margin-bottom:5px;">Основной</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '</div><div class="item-list-product" style="margin-left:15px;margin-bottom:5px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '', x)}
                              onMouseLeave={onMouseLeaveHints} />
                            <Additional count={row.count_resale} hints={dopProdazhi} />
                          </>}
                        </td>

                      )
                    }
                    else if (x === "pay" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className={"colum-pay icons colorWhite " + (row.pay)} onMouseEnter={e => onMouseEnterHints(e, pay.filter(x => x.icon?.includes(row.pay))[0].title, x)}
                          onMouseLeave={onMouseLeaveHints} >
                        </td>
                      )
                    }
                    else if (x === "delivery" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className={"colum-delivery icons " + (row.delivery)} onMouseEnter={e => onMouseEnterHints(e, deliveries.filter(y => y.icon?.includes(row.delivery))[0].title, x)}
                          onMouseLeave={onMouseLeaveHints} >
                        </td>
                      )
                    }
                    else if (x === "addres" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="addres-block" style={styles} onMouseEnter={e => onMouseEnterHints(e, row.address, x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.address}</td>
                      )
                    }
                    else if (x === "ttn" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="colum-ttn">
                          {<div className="ttn-position">


                            <TtnGroup ttn1={row.ttn} ttn2={row.ttn} />
                            {/* <span className="ttn-number">{row.ttn}</span> */}
                            <Korobka count={2} onMouseEnter={e => onMouseEnterHints(e, 'Остался 2 дн до платного хранения', x)}
                              onMouseLeave={onMouseLeaveHints} />
                          </div>}
                        </td>

                      )
                    }
                    else if (x === "ttn_status" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} onMouseEnter={e => onMouseEnterHints(e, row.ttn_status, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={styles} >{row.ttn_status}</td>
                      )
                    }
                    else if (x === "ttn_user" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} onMouseEnter={e => onMouseEnterHints(e, row.view_user, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={styles} >{row.view_user}</td>
                      )
                    }
                    else if (x === "office" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="otdel-block" onMouseEnter={e => onMouseEnterHints(e, row.office, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={styles} >{row.office}</td>
                      )
                    }
                    else if (x === "date1" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="date-block">{row.add_order[0]} {<span className="date-time">{row.add_order[1]}</span>} </td>

                      )
                    }
                    else if (x === "date2" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="date-time otkrit time" onMouseEnter={e => onMouseEnterHints(e, row.hints_open, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          {row.open_order} {<span className="colorTime" style={{ backgroundColor: row.color_open_order }}></span>}
                        </td>
                      )
                    }
                    else if (x === "date3" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="date-block">{row.success_order[0]} {<span className="date-time">{row.success_order[1]}</span>}</td>
                      )
                    }
                    else if (x === "date4" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="date-time acceptza time" onMouseEnter={e => onMouseEnterHints(e, row.hints_success, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          {row.success_order_user} {<span className="colorTime" style={{ backgroundColor: row.color_success_order_user }}></span>}
                        </td>
                      )
                    }
                    else if (x === "send" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="date-block" onMouseEnter={e => onMouseEnterHints(e, row.view_user, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={styles} >{row.view_user}</td>
                      )
                    }
                    else if (x === "change" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="date-block" onMouseEnter={e => onMouseEnterHints(e, row.view_user, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={styles} >{row.view_user}</td>
                      )
                    }
                    else if (x === "end" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="date-block">{row.update_order[0]} {<span className="date-time">{row.update_order[1]}</span>}</td>
                      )
                    }
                    else if (x === "date5" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="date-block" onMouseEnter={e => onMouseEnterHints(e, row.view_user, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={styles} >{row.view_user}</td>
                      )
                    }
                    else if (x === "date6" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="date-block">{row.send_order[0]} {<span className="date-time">{row.send_order[1]}</span>} </td>
                      )
                    }
                    else if (x === "date7" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="date-block time" onMouseEnter={e => onMouseEnterHints(e, row.hints_send, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          {row.send_order_user} {<span className="colorTime" style={{ backgroundColor: row.color_send_order_user }}></span>}
                        </td>
                      )
                    }
                    else if (x === "date8" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} className="date-block">{row.update_order[0]} {<span className="date-time">{row.update_order[1]}</span>}</td>
                      )
                    }
                    else if (x === "site" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.site, x), x)}
                          onMouseLeave={onMouseLeaveHints} style={styles} >{row.domen}</td>)
                    }
                    else if (x === "ip" && column[x].show && column[x].showContent) {
                      return (
                        <TD key={x} className={'ip-block'}>
                          {<div className="ip-block-position">
                            <span className="ip-current">{row.ip}</span>
                            <span className="ip-icons-position">
                              <span className="flags" onMouseEnter={e => onMouseEnterHints(e, row.country, x)}
                                onMouseLeave={onMouseLeaveHints} >{country[row.country_order]}</span>
                              <span className={row.type_device + " icons colorWhite"} onMouseEnter={e => onMouseEnterHints(e, device.filter(x => x.icon?.includes(row.type_device))[0].title, x)}
                                onMouseLeave={onMouseLeaveHints} ></span>
                              <span className={row.type_os + " icons colorWhite"} onMouseEnter={e => onMouseEnterHints(e, system.filter(x => x.icon?.includes(row.type_os))[0]?.title || '', x)}
                                onMouseLeave={onMouseLeaveHints}></span>
                              <span className={row.type_browser + " icons colorWhite "} onMouseEnter={e => onMouseEnterHints(e, browser.filter(x => x.icon?.includes(row.type_browser))[0].title, x)}
                                onMouseLeave={onMouseLeaveHints}></span>
                            </span>
                          </div>}
                        </TD>
                      )
                    }
                    else if (x === "utm1" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_source, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_source}</td>
                      )
                    }
                    else if (x === "utm2" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_medium, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_medium}</td>
                      )
                    }
                    else if (x === "utm3" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_term, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_term}</td>
                      )
                    }
                    else if (x === "utm4" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_content, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_content}</td>
                      )
                    }
                    else if (x === "utm5" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_campaign, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_campaign}</td>
                      )
                    }
                    else if (x === "additional_1" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_1, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_1}</td>
                      )
                    }
                    else if (x === "additional_2" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_2, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_2}</td>
                      )
                    }
                    else if (x === "additional_3" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_3, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_3}</td>
                      )
                    }
                    else if (x === "additional_4" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_4, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_4}</td>
                      )
                    }
                    else if (x === "additional_5" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_5, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_5}</td>
                      )
                    }
                    else if (x === "additional_6" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_6, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_6}</td>
                      )
                    }
                    else if (x === "additional_7" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_7, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_7}</td>
                      )
                    }
                    else if (x === "additional_8" && column[x].show && column[x].showContent) {
                      return (
                        <td key={x} style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_8, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_8}</td>
                      )
                    }
                    else if (x === "additional_9" && column[x].show && column[x].showContent) {
                      return (
                        <td style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_9, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_9}</td>
                      )
                    }
                    else if (x === "additional_10" && column[x].show && column[x].showContent) {
                      return (
                        <td style={styles} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_10, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_10}</td>
                      )
                    }
                  })
                }
              </tr>
            ))}
            <tr style={{ height: getBottomHeight() }} />

          </tbody>}



        </table>}
      </div>
      <div onClick={e => {
        rootRef.current.scrollTop = 0;
      }} style={top > 600 ? { position: 'absolute', right: 20, bottom: 20, background: 'white', padding: '16px', borderRadius: '50%', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', boxShadow: '4px 4px 9px rgb(0 0 0 / 15%)' } : { bottom: -100 }}>
        <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.06508L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.3081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z" fill="black"></path>
        </svg>
      </div>

    </div >
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);