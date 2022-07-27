import React from 'react';
import {SvGBtnPlus,Preloaded} from '../../img/svg-pack';

const ButtonAdd = ({data,setData}) => {
    let newAttribute = [{
        status:false,
        product: 'XXXX-',
        id: '****',
        select:false,
        lock:false,
        attribute: 'дщр'
    }]
    function addAttribute() {
		
		// objAttribute
		data.unshift([...newAttribute]);
		setData(data);
		// console.log(objAttribute)
	}
    console.log(data)
  return (
    <button onClick={addAttribute}>
        <SvGBtnPlus />
    </button>
  )
}

export default ButtonAdd;
