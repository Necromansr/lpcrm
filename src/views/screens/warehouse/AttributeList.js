import React from 'react'
import WarehouseInputField from './WarehouseInputField';
let plusminus;

const AttributeList = ({index,getStart,objAttribute,setObjAttribute,translator,addOneItem,setPodlozhka,podlozhka,setHideArrow,setHideMenu}) => {
    return (
        <tr 
            className={
                objAttribute[index].select
                    ? 'select speed hoverAttributeBlock'
                    : objAttribute[index].lock
                        ? 'lockOrder speed hoverAttributeBlock'
                        : 'speed hoverAttributeBlock'
            }
            onMouseEnter={objAttribute[index].lock ? (e) => {

                let posElement = e.target.getBoundingClientRect();
                const tooltipBlock = document.getElementById('tooltipBtn');
                tooltipBlock.style.fontSize = '12px';
                const widthPlus = e.pageX + tooltipBlock.offsetWidth;
                const viewportWidth = document.body.clientWidth;
                plusminus = setTimeout(() => {
                    const name = 'Олександр';
                    tooltipBlock.innerText = translator.getTranslation('lockOrder', 'lock') + ' ' + name;
                    // tooltipBlock.style.left = posElement.x + 'px';
                    // tooltipBlock.style.top = posElement.y + 23 + 'px';
                    if (widthPlus > viewportWidth) {
                        tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
                        tooltipBlock.style.top = posElement.y + 23 + 'px';
                    } else {
                        tooltipBlock.style.left = posElement.x + 'px';
                        tooltipBlock.style.top = posElement.y + 23 + 'px';
                    }
                    tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
                }, 250);

            } : () => { }}
            onMouseLeave={objAttribute[index].lock ? (e) => {
                clearTimeout(plusminus);
                document.getElementById('tooltipBtn').style.animation = '';
            } : () => { }}
            key={index}
            index={index}>
            <td><div className='stickyBeforeBody'></div></td>
            <td style={{ paddingRight: 15 }}>
                {/* <SwitchBtn status={objAttribute[index].status} data={objAttribute} setData={setObjAttribute} index={index + (getStart() < 0 ? 0 : getStart() - count)} /> */}
            </td>
            <td style={{ paddingRight: 15, color: `rgba(0,0,0,0.4)` }}>{objAttribute[index].product}</td>
            <td style={{ paddingRight: 20, color: `${objAttribute[index].status ? 'rgba(0,0,0,0.4)' : ''}`, minWidth: 40 }}>{objAttribute[index].id}</td>
            <td style={{ position: "relative", minWidth: 300 }}>
                <WarehouseInputField  type={'attribute'} addOneItem={addOneItem} setPodlozhka={setPodlozhka} podlozhka={podlozhka} data={objAttribute} value={objAttribute[index].attribute} setData={setObjAttribute} index={index} setHideMenu={setHideMenu} setHideArrow={setHideArrow} />
                {/* <input onMouseEnter={(e) => inputOn(e, index + (getStart() < 0 ? 0 : getStart()))} onMouseLeave={e => inputOff(e,index + (getStart() < 0 ? 0 : getStart()))} style={{color: `${x.status ? 'rgba(0,0,0,0.4)': ''}`}} className='attributeInput' value={x.attribute} onChange={null}/> */}
            </td>
        </tr>
    )
}

export default AttributeList
