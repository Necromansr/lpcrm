import React,{useState} from "react";
let plusminus;
export default function SwitchBtn ({type,status,index,data,setData,addOneItem}) {
    const [btn,setBtn] = useState(status);
    function switchBtn(e) {
        e.stopPropagation();
        if(type === 'card'){
            data[index].status.all =  !data[index].status.all;
        } else {
            data[index].status = !data[index].status;
        }
        setData([...data]);
        setBtn( !btn);
    }
    function tooltipOn(e,html) {
		let posElement = e.currentTarget.getBoundingClientRect();
		const tooltipBlock = document.getElementById('tooltipBtn');
		tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = html;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
    }
    function tooltipOff() {
		clearTimeout(plusminus);
		document.getElementById('tooltipBtn').style.animation = '';
    }

    return (
        <label className="switch-btn-warehouse">
            <input
                type="checkbox"
                className="status-all"
                onChange={data[index].lock ? () => { } : switchBtn}
                checked={btn}
            />
            <span className={`slider round`}
            onMouseEnter={data[index].lock ? () => { } : (e) => {
                tooltipOn(
                    e,
                    e.target.offsetParent.children[0].checked
                        ? 'Заблокировать товар'
                        : 'Разблокировать товар'
                );
            }} onMouseLeave={tooltipOff} onClick={data[index].lock ? () => { } : (e) => {
                tooltipOn(
                    e,
                    e.target.offsetParent.children[0].checked
                        ? 'Заблокирован'
                        : 'Разблокирован'
                );
            }}
            
            ></span>
        </label>
    )
}