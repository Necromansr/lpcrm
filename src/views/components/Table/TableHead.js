
// import * as DTD from 'react-draggable';
// import { useEffect, useState, useRef } from 'react';

// var timer;


// function useShow(
//     elementRef,
//     keys,
//     cols,
//     setCols,
//     zIndex,
//     calc
//   ) {
//     const [value, setValue] = useState(false)
//     const [node1, setNode] = useState(null)
//     const [tooltip, setTooltip] = useState(false)
//     let node = null;
//     const handleMouseEnter = e => {
//       setValue(true);
//       node.parentElement.style.cssText += 'z-index: 12';
//     }
//     const handleMouseDown = e => {
//       setValue(true);
//       setTooltip(true);
//       node.parentElement.style.cssText += 'z-index: 12';
//       node.removeEventListener('mouseleave', handleMouseLeave);
//       node.removeEventListener('mouseenter', handleMouseEnter);
//     }
//     const handleMouseLeave = e => {
//       setValue(false);
//       try {
//         node.parentElement.style.cssText += zIndex ? 'z-index: ' + zIndex : 'z-index: 2';
  
//       } catch (error) {
  
//       }
//     }
//     const handleMouseUp = e => {
//       setValue(false)
//       node.addEventListener('mouseenter', handleMouseEnter)
//       node.addEventListener('mouseleave', handleMouseLeave)
//       try {
//         node.parentElement.style.cssText += zIndex ? 'z-index: ' + zIndex : 'z-index: 2';
  
//       } catch (error) {
  
//       }
//     }
  
  
  
  
//     const handleDblClick = e => {
//       node.parentElement.style.minWidth = cols[keys].defaultWidth + 'px'
//       cols[keys].width = cols[keys].defaultWidth
//       setCols({ ...cols })
//       columns = JSON.parse(JSON.stringify(cols))
//       calc()
//       node.dataset.dbl = true;
//     }
  
//     useEffect(() => {
//       setNode(elementRef.current)
//       node = elementRef?.current;
//       if (node) {
//         node.addEventListener('mouseenter', handleMouseEnter)
//         node.addEventListener('mouseleave', handleMouseLeave)
//         node.addEventListener('mousedown', handleMouseDown)
//         document.addEventListener('mouseup', handleMouseUp)
//         node.addEventListener('dblclick', handleDblClick)
  
  
//         return () => {
//           node.removeEventListener('mouseenter', handleMouseEnter)
//           node.removeEventListener('mouseleave', handleMouseLeave)
//           node.removeEventListener('mousedown', handleMouseDown)
//           node.removeEventListener('mouseup', handleMouseUp)
//           node.addEventListener('dblclick', handleDblClick)
  
//         }
//       }
//     }, [elementRef])
  
//     return { value, node1, setValue, handleMouseEnter, handleMouseLeave, tooltip }
//   }


// const Draggable = ({ index, setFlag, keys, cols, show, setCols, zIndex, setWrapper, calc }) => {


//     useEffect(() => {
//     }, [])
//     const hoverRef = useRef(null)
//     const isHover = useShow(hoverRef, keys, cols, setCols, zIndex);
//     const [x, setX] = useState(0)


//     return (
//         <DTD

//             axis="x" position={{ x: 0, y: 0 }}
//             onStart={(e) => { setX(e.pageX); setFlag(false); document.querySelector('.disableHover')?.classList.add('disable-hover') }}
//             onStop={(e, d) => {
//                 setTimeout(() => {
//                     if (isHover.node1.dataset.dbl === "false") {
//                         if ((isHover.node1.parentElement.clientWidth - 8) + (e.pageX - x) > cols[keys].defaultWidth) {
//                             cols[keys].width = (isHover.node1.parentElement.clientWidth - 8) + (e.pageX - x);
//                             setCols({ ...cols })
//                             columns = JSON.parse(JSON.stringify(cols))
//                             calc()
//                             isHover.node1.parentElement.style.minWidth = cols[keys].width + 'px';
//                         } else {
//                             cols[keys].width = cols[keys].defaultWidth;
//                             setCols({ ...cols })
//                             columns = JSON.parse(JSON.stringify(cols))
//                             calc()
//                             isHover.node1.parentElement.style.minWidth = cols[keys].defaultWidth + 'px';
//                         }
//                     }
//                 }, document.body.clientHeight - 120);
//                 isHover.node1.dataset.dbl = false;
//                 setFlag(true);
//                 document.querySelector('.disableHover')?.classList.remove('disable-hover')
//             }
//             }

//         ><div ref={hoverRef} data-dbl={false} onMouseEnter={e => {
//             clearTimeout(timer)
//             document.getElementById("tooltipBtn").style.animation = '';

//             timer = setTimeout(() => {

//                 document.getElementById("tooltipBtn1").style.fontSize = '14px';

//                 document.getElementById("tooltipBtn1").innerHTML = "Задать размер столбца<br><span class='text-tooltip'>Зажать и потянуть для изменения размера<br>Двойной клик возвращает размер по умолчанию</span>";

//                 let posElement = e.target.getBoundingClientRect();

//                 document.getElementById("tooltipBtn1").style.left = posElement.x + 10 + "px";
//                 document.getElementById("tooltipBtn1").style.top = posElement.y + 26 + "px";
//                 document.getElementById("tooltipBtn1").style.animation = 'delay-header 0.3s forwards';
//                 let blockWidth = cols[keys].width;
//                 let screenWidth = document.body.clientWidth;
//                 let widthTooltip = document.getElementById("tooltipBtn1").offsetWidth;
//                 if (screenWidth < posElement.x + widthTooltip + blockWidth) {
//                     document.getElementById("tooltipBtn1").style.left = posElement.x - widthTooltip + 'px';
//                 }
//             }, 100);

//         }}
//             onMouseLeave={e => {
//                 clearTimeout(timer)
//                 document.getElementById("tooltipBtn1").style.animation = '';
//             }} style={{ width: '70px', cursor: 'pointer', position: 'absolute', top: 0, right: '-10px', zIndex: 10 }}>
//                 <div className={'resize'} style={isHover.value ? { width: '10px', position: 'absolute', right: '10px', backgroundColor: "rgb(206, 206, 206)", height: 23.5, visibility: 'visible' } : { width: '10px', position: 'absolute', right: '10px' }}></div>
//                 <div style={isHover.value ? { height: '100vh', width: '1px', position: 'absolute', right: '10px', top: 2, background: 'rgb(206, 206, 206)', pointerEvents: 'none' } : { pointerEvents: 'none' }}></div>
//             </div></DTD>
//     )

// }
// let drag = 0, drop = 0;


// export const TH = ({ children, style, className, hint, index, cols, setCols, col, keys, dragOver, setDragOver, wrapper, zIndex, setWrapper, showColumn, calc }) => {


//     useEffect(() => {
//     }, [wrapper])

//     const [flag, setFlag] = useState(true)

//     const handleDragStart = (e) => {
//         const { id } = e.target;
//         const idx = Object.keys(cols).indexOf(id);
//         // setResize(false);
//         drag = idx;

//         e.dataTransfer.setData("colIdx", idx);
//     };

//     const handleDragOver = (e) => e.preventDefault();
//     const handleDragEnter = (e) => {
//         const { id } = e.target;
//         drop = Object.keys(cols).indexOf(id);
//         setDragOver(id);
//     };



//    const handleOnDrop = (e) => {

//         const id = e.target.id;

//         const droppedColIdx = Object.keys(cols).indexOf(id);
//         const draggedColIdx = e.dataTransfer.getData("colIdx");

//         if (cols[keys].swap) {
//             let temp = move(parseInt(draggedColIdx), parseInt(droppedColIdx), cols)
//             setCols(temp);
//             setDragOver("");
//         }



//     };
//     let styles = cols[keys].swap ? {} : { userSelect: 'none' }
//     let styleDrag = (dragOver, flags) => {

//         return [(dragOver && !flags) && { position: 'absolute', right: 0, top: 0, height: '100vh', width: 1, backgroundColor: 'red' }, (dragOver && flags) && { position: 'absolute', left: 0, top: 0, height: '100vh', width: 1, backgroundColor: 'red' }]
//     }

//     return (


//         <th
//             style={{ ...style, ...styles }} className={'drag'} id={col}
//             key={col}
//             draggable={flag && cols[keys].swap}
//             onDragStart={handleDragStart}
//             onDragOver={handleDragOver}
//             onDrop={handleOnDrop}
//             onDragEnter={handleDragEnter}
//             onMouseEnter={e => {
//                 if (hint !== '...') {
//                     timer = setTimeout(() => {
//                         document.getElementById("tooltipBtn").style.fontSize = '14px';

//                         document.getElementById("tooltipBtn").innerHTML = hint;

//                         let posElement = e.target.getBoundingClientRect();

//                         document.getElementById("tooltipBtn").style.left = posElement.x + "px";
//                         document.getElementById("tooltipBtn").style.top = posElement.y + 26 + "px";
//                         document.getElementById("tooltipBtn").style.animation = 'delay-header 0.5s forwards';
//                         let blockWidth = cols[keys].width;
//                         let screenWidth = document.body.clientWidth;
//                         let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
//                         if (screenWidth < posElement.x + widthTooltip) {
//                             document.getElementById("tooltipBtn").style.left = posElement.x + (blockWidth - widthTooltip) + 'px';
//                         }

//                     }, 250);

//                 }
//             }}
//             onMouseLeave={e => {
//                 clearTimeout(timer)
//                 document.getElementById("tooltipBtn").style.animation = '';
//             }}
//         >

//             {children}
//             {(cols[keys].swap && showColumn) && <div style={{ ...styleDrag(col === dragOver, drag > drop)[0], ...styleDrag(col === dragOver, drag > drop)[1] }}></div>}
//             {(cols[keys].resize && showColumn) && <Draggable index={index} zIndex={zIndex} setWrapper={setWrapper} keys={keys} cols={cols} setCols={setCols} calc={calc} setFlag={setFlag} />}
//         </th>
//     )
// }


// let move = (from, to, data) => {
//     let temp = Object.keys(data);
//     temp.splice(to, 0, temp.splice(from, 1)[0])

//     var obj = {};
//     for (let i = 0; i < temp.length; i++) {
//         obj[temp[i]] = data[temp[i]];
//     }
//     columns = JSON.parse(JSON.stringify(obj))
//     calc();
//     return obj;
// };