import React,{useRef} from 'react'
import { addImg } from '../../../until/svg-pack';
let imgTimeout;
const LoadImg = ({...props}) => {
    function tooltipOn(e, html) {
		let posElement = e.currentTarget.getBoundingClientRect();
		const tooltipBlock = document.getElementById('tooltipBtn');
		tooltipBlock.style.fontSize = '12px';
		// if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
		// 	tooltipBlock.innerHTML = searchLine(e.target.innerText, value);
		// 	tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 10 + 'px';
		// 	tooltipBlock.style.top = posElement.y + 'px';
		// 	tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		// }
		// if (e.currentTarget.className === 'count') {
		// 	tooltipBlock.innerHTML = `${translator.getTranslation(
		// 		'tooltipCount',
		// 		'element',
		// 		e.currentTarget.innerText.toLocaleString('ru-RU', {
		// 			minimumFractionDigits: 0,
		// 			maximumFractionDigits: 0,
		// 		}).replace('(', '').replace(')', '')
		// 	)}`;

		// 	tooltipBlock.style.left = posElement.x + 'px';
		// 	tooltipBlock.style.top = posElement.y + 25 + 'px';
		// 	tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		// }
	}

	function tooltipOff() {
		// clearTimeout(plusminus);
		document.getElementById('tooltipBtn').style.animation = '';
	}
    const refLabel = useRef();
    function loadImg(e) {
        const fileSize = e.target.files[0].size; // in MiB
        // const MB = 500000;
        if (fileSize > 500000) {
            clearTimeout(imgTimeout);
            // alert('Файл больше 500кб');
            
            let posElement = refLabel.current.getBoundingClientRect();
		    const tooltipBlock = document.getElementById('tooltipBtn');
            tooltipBlock.style.animation = '';
            tooltipBlock.innerHTML = 'Файл больше 500кб';
		    tooltipBlock.style.fontSize = '12px';
            tooltipBlock.style.left = posElement.x + 'px';
			tooltipBlock.style.top = posElement.y + 24 + 'px';
            tooltipBlock.style.animation = 'delay-btn-copy 1.5s forwards';
            imgTimeout = setTimeout(() => {
                tooltipBlock.style.animation = '';

            }, 1500);
            // $(file).val(''); //for clearing with Jquery
        } else {
            // Proceed further
            if (e.target.files[0]) {
                const tooltipBlock = document.getElementById('tooltipBtn');
                tooltipBlock.style.animation = '';
                var fr = new FileReader();
                fr.addEventListener(
                    'load',
                    function () {
                        e.target.previousSibling.src = fr.result;
                        e.target.previousSibling.classList.remove('clear');
                    },
                    false
                );
                fr.readAsDataURL(e.target.files[0]);
            }
        }
    }
    return (
        <label className="addImg" ref={refLabel} {...props}>
            <img
                // onMouseEnter={zoomImg}
                // onMouseLeave={zoomOutImg}
                src={addImg}
                alt=''
            />
            <input onChange={loadImg} type="file" accept="image/*" />
        </label>
    )
}

export default LoadImg
