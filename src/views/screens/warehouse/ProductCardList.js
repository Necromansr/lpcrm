import React, { useState, useEffect, useRef } from 'react'
import SwitchBtn from './SwitchBtn';
import SwitchBtnSmall from './SwitchBtnSmall';
// import styles from './Warehouse.scss';
import PlusMinusBlock from './PlusMinusBlock';
import { SvgDeleteBtn } from '../../../until/svg-pack';
import LoadImg from './LoadImg';
// import ProductCardListMenu from './ProductCardListMenu';
const ProductCardList = ({ podlozhkaTable, setPodlozhkaTable, carouselDrop, setCarouselDrop, setIndexTr, attributeData, setAttributeData, index, arr, setArr, item, data2, onClick, tooltipOff, tooltipOn, translator, podlozhka, setPodlozhka }) => {

    const [valueWeigth, setValueWeight] = useState(item.weight);
    const [valueSize, setValueSize] = useState(item.size);
    const [valueZakupka, setValueZakupka] = useState(item.zakupka);
    const [valueProdazha, setValueProdazha] = useState(item.prodazha);
    const [flagWeight, setFlagWeight] = useState(false);
    const [flagSize, setFlagSize] = useState(false);
    const [flagZakupka, setFlagZakupka] = useState(false);
    const [flagProdazha, setFlagProdazha] = useState(false);
    // const [visibleRow,setVisibleRow] = useState(carouselDrop);
    const inputRefWeight = useRef();
    const inputRefSize = useRef();
    const inputRefZakupka = useRef();
    const inputRefProdazha = useRef();

    useEffect(() => {
        if (inputRefWeight.current) {
            inputRefWeight.current.style.width = inputRefWeight.current.value.length * 7 + 'px';
            inputRefSize.current.style.width = inputRefSize.current.value.length * 7 + 'px';
            inputRefZakupka.current.style.width = inputRefZakupka.current.value.length * 7 + 'px';
            inputRefProdazha.current.style.width = inputRefProdazha.current.value.length * 7 + 'px';
        }
    }, [])

    function changeInputWeight(e) {
        e.target.closest('.weight').style.zIndex = 999;
        e.target.style.width = e.target.value.length * 7 + 'px';
        e.target.value = e.target.value.replace(/[^0-9.,]/g, (x) => (x = '')).replace(/,/g, (x) => '.').replace(/(\.)(?=\1)/g, (x) => '').replace(/\.(?=.*\..*)/g, (x) => '')
        setFlagWeight(true);
        setPodlozhkaTable(true);
        setValueWeight(e.target.value)
    }

    function changeInputSize(e) {
        e.target.closest('.size').style.zIndex = 999;
        setFlagSize(true);
        setPodlozhkaTable(true);
        e.target.style.width = e.target.value.length * 7 + 'px';
        let format = (text, size = text.replace(/\D+/g, 'x').replace(/^\D/g, '')) => size.match(/^\d+x\d+x\d+/)?.toString() ?? size;
        setValueSize(format(e.target.value))
    }
    function changeInputZakupka(e) {
        e.target.closest('.nal-zakupka').style.zIndex = 999;
        setFlagZakupka(true);
        setPodlozhkaTable(true);
        e.target.style.width = e.target.value.length * 7 + 'px';
        e.target.value = e.target.value.replace(/[^0-9.,]/g, (x) => (x = '')).replace(/,/g, (x) => '.').replace(/(\.)(?=\1)/g, (x) => '').replace(/\.(?=.*\..*)/g, (x) => '')
        setValueZakupka(e.target.value)
    }
    function changeInputProdazha(e) {
        e.target.closest('.nal-prodazha').style.zIndex = 999;
        setFlagProdazha(true);
        setPodlozhkaTable(true);
        e.target.style.width = e.target.value.length * 7 + 'px';
        e.target.value = e.target.value.replace(/[^0-9.,]/g, (x) => (x = '')).replace(/,/g, (x) => '.').replace(/(\.)(?=\1)/g, (x) => '').replace(/\.(?=.*\..*)/g, (x) => '')
        setValueProdazha(e.target.value)
    }
    function enterWeight() {
        setFlagWeight(false);
        if (carouselDrop === true) {
            let text = Math.round(((+valueWeigth)) * 1000) / 1000;
            let lenghtText = text.toString().indexOf('.') + 1;
            if (lenghtText > 3) {
                arr[index].weight = '99';
                setValueWeight('99');
            } else if (lenghtText === 0 && valueWeigth.length >= 3) {
                arr[index].weight = '99';
                setValueWeight('99');
            } else if (valueWeigth === '') {
                arr[index].weight = '0.1';
                setValueWeight('0.1');
                setArr([...arr])
            } else {

                arr[index].weight = text.toString();
                setValueWeight(text.toString());
            }
            document.querySelectorAll('.weight,.size,.nal-prodazha,.nal-zakupka').forEach(x => x.style.zIndex = '');
            document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
            setArr([...arr])
            setFlagSize(true);
            let sizeBlock = document.querySelectorAll('.size')[index];
            let sizeInput = document.querySelectorAll('.size input')[index];
            let sizePoloska = document.querySelectorAll('.size .poloska')[index];
            sizeBlock.style.zIndex = 999;
            sizeInput.focus()
            sizePoloska.style.width = '100%';
            // setCarouselDrop(false)
        } else if (carouselDrop === false) {
            let text = Math.round(((+valueWeigth)) * 1000) / 1000;
            let lenghtText = text.toString().indexOf('.') + 1;
            if (lenghtText > 3) {
                arr[index].weight = '99';
                setValueWeight('99');
                setArr([...arr])
            } else if (lenghtText === 0 && valueWeigth.length >= 3) {
                arr[index].weight = '99';
                setValueWeight('99');
                setArr([...arr])
            } else if (valueWeigth === '') {
                arr[index].weight = '0.1';
                setValueWeight('0.1');
                setArr([...arr])
            } else {
                arr[index].weight = text.toString();
                setValueWeight(text.toString());
                setArr([...arr])
            }
            // e.target.blur()
            inputRefWeight.current.blur();
            document.querySelectorAll('.weight,.size,.nal-prodazha,.nal-zakupka').forEach(x => x.style.zIndex = '');
            document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')

            setPodlozhkaTable(false);
            setCarouselDrop(false);
            // setPodlozhka(false);
        }
    }
    function handleWeight(e) {
        if (inputRefWeight.current && !inputRefWeight.current.contains(e.target)) {
            enterWeight();
        }
    }
    function enterSize() {
        setFlagSize(false);
        if (carouselDrop === true) {
            if (valueSize.match(/x/g)?.length == undefined && valueSize !== '') {
                arr[index].size = valueSize + 'x1x1';
                setArr([...arr])
                setValueSize(valueSize + 'x1x1')
                inputRefSize.current.style.width = inputRefSize.current.value.length * 7 + 'px';
            } else if (valueSize.match(/x/g)?.length === 1 && valueSize[valueSize.length - 1] !== 'x') {
                arr[index].size = valueSize + 'x1';
                setValueSize(valueSize + 'x1')
                setArr([...arr])
                inputRefSize.current.style.width = inputRefSize.current.value.length * 7 + 'px';

            } else if (valueSize[valueSize.length - 1] === 'x' && valueSize.match(/x/g)?.length === 1) {
                arr[index].size = valueSize + '1x1';
                setValueSize(valueSize + '1x1')
                setArr([...arr])
                inputRefSize.current.style.width = inputRefSize.current.value.length * 7 + 'px';
            } else if (valueSize[valueSize.length - 1] === 'x' && valueSize.match(/x/g)?.length === 2) {
                arr[index].size = valueSize + '1';
                setValueSize(valueSize + '1')
                setArr([...arr])
                inputRefSize.current.style.width = inputRefSize.current.value.length * 7 + 'px';
            } else if (valueSize === '') {
                arr[index].size = '1x1x1';
                setValueSize('1x1x1')
                setArr([...arr])
            } else {
                arr[index].size = valueSize;
                setValueSize(valueSize)
                setArr([...arr])
            }
            setFlagZakupka(true);
            document.querySelectorAll('.weight,.size,.nal-zakupka,.nal-prodazha').forEach(x => x.style.zIndex = '');
            document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
            let zakupkaBlock = document.querySelectorAll('.product-card .nal-zakupka')[index];
            let zakupkaInput = document.querySelectorAll('.product-card .nal-zakupka input')[index];
            let zakupkaPoloska = document.querySelectorAll('.product-card .nal-zakupka .poloska')[index];
            zakupkaBlock.style.zIndex = 999;
            zakupkaInput.focus()
            zakupkaPoloska.style.width = 'calc(100% - 10px)';
            // setCarouselDrop(false)
            // setPodlozhkaTable(false);

        } else if (carouselDrop === false) {
            if (valueSize.match(/x/g)?.length == undefined && valueSize !== '') {
                arr[index].size = valueSize + 'x1x1';
                setArr([...arr])
                setValueSize(valueSize + 'x1x1')
                inputRefSize.current.style.width = inputRefSize.current.value.length * 7 + 'px';
            } else if (valueSize.match(/x/g)?.length === 1 && valueSize[valueSize.length - 1] !== 'x') {
                arr[index].size = valueSize + 'x1';
                setValueSize(valueSize + 'x1')
                setArr([...arr])
                inputRefSize.current.style.width = inputRefSize.current.value.length * 7 + 'px';

            } else if (valueSize[valueSize.length - 1] === 'x' && valueSize.match(/x/g)?.length === 1) {
                arr[index].size = valueSize + '1x1';
                setValueSize(valueSize + '1x1')
                setArr([...arr])
                inputRefSize.current.style.width = inputRefSize.current.value.length * 7 + 'px';
            } else if (valueSize[valueSize.length - 1] === 'x' && valueSize.match(/x/g)?.length === 2) {
                arr[index].size = valueSize + '1';
                setValueSize(valueSize + '1')
                setArr([...arr])
                inputRefSize.current.style.width = inputRefSize.current.value.length * 7 + 'px';
            } else if (valueSize === '') {
                arr[index].size = '1x1x1';
                setValueSize('1x1x1')
                setArr([...arr])
            } else {
                arr[index].size = valueSize;
                setValueSize(valueSize)
                setArr([...arr])
            }
            inputRefSize.current.blur();
            setCarouselDrop(false);
            setPodlozhkaTable(false);
            document.querySelectorAll('.weight,.size,.nal-zakupka,.nal-prodazha').forEach(x => x.style.zIndex = '');
            document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
        }
    }
    function handleSize(e) {
        if (inputRefSize.current && !inputRefSize.current.contains(e.target)) {
            enterSize();
        }
    }
    function enterZakupka() {
        setFlagZakupka(false);

        if (carouselDrop === true && valueZakupka !== '') {

            let value = (+valueZakupka).toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).replace(',', '.')
            inputRefZakupka.current.style.width = value.length * 7 + 'px';
            arr[index].zakupka = value;
            setArr([...arr])
            setValueZakupka(value)
            setFlagProdazha(true);
            document.querySelectorAll('.weight,.size,.nal-zakupka,.nal-prodazha').forEach(x => x.style.zIndex = '');
            document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
            let prodazhaBlock = document.querySelectorAll('.product-card .nal-prodazha')[index];
            let prodazhaInput = document.querySelectorAll('.product-card .nal-prodazha input')[index];
            let prodazhaPoloska = document.querySelectorAll('.product-card .nal-prodazha .poloska')[index];
            prodazhaBlock.style.zIndex = 999;
            prodazhaInput.focus()
            prodazhaPoloska.style.width = 'calc(100% - 10px)';

            // setCarouselDrop(false)
        } else if (carouselDrop === false) {

            let value = (+valueZakupka).toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).replace(',', '.')
            inputRefZakupka.current.style.width = value.length * 7 + 'px';
            arr[index].zakupka = value;
            let pereschet = (+valueProdazha.replaceAll(/\s/gmu, '') - (+valueZakupka.replaceAll(/\s/gmu, '')));
            pereschet = pereschet.toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).replace(',', '.')
            arr[index].marzha = pereschet;
            setArr([...arr])
            setValueZakupka(value)
            inputRefZakupka.current.blur();
            // console.log(valueWeigth.length)
            // // arr[index].weight = text.toString();
            setPodlozhkaTable(false);
            setCarouselDrop(false);
            // setCarouselDrop(false);
            // setPodlozhkaTable(false);
            document.querySelectorAll('.weight,.size,.nal-zakupka,.nal-prodazha').forEach(x => x.style.zIndex = '');
            document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
        }
    }
    function handleZakupka(e) {
        if (inputRefZakupka.current && !inputRefZakupka.current.contains(e.target)) {
            enterZakupka();
            if (carouselDrop === true && valueZakupka === '') {
                let obj = JSON.parse(JSON.stringify(attributeData));
                setCarouselDrop(false)
                setPodlozhkaTable(false);
                obj.sort.splice(index, 1);
                obj.array.splice(index, 1);
                setAttributeData(obj)
                arr = arr.filter((x, i) => i !== index)
                setArr([...arr])
            }
        }
    }
    // console.log(arr)
    function enterProdazha() {
        setFlagProdazha(false);
        setPodlozhkaTable(false);

        if (carouselDrop === true && valueProdazha !== '') {

            let value = (+valueProdazha).toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).replace(',', '.')
            inputRefProdazha.current.style.width = value.length * 7 + 'px';
            arr[index].prodazha = value;
            let pereschet = (+valueProdazha.replaceAll(/\s/gmu, '') - (+valueZakupka.replaceAll(/\s/gmu, '')));
            pereschet = pereschet.toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).replace(',', '.')
            arr[index].marzha = pereschet;
            setArr([...arr])
            setCarouselDrop(false);
            console.log('che1')
            setValueProdazha(value)
            inputRefProdazha.current.blur();
            document.querySelectorAll('.weight,.size,.nal-zakupka,.nal-prodazha').forEach(x => x.style.zIndex = '');
            document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
            // setCarouselDrop(false)
        } else if (carouselDrop === false) {

            let value = (+valueProdazha).toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).replace(',', '.')
            inputRefProdazha.current.style.width = value.length * 7 + 'px';

            arr[index].prodazha = value;
            let pereschet = (+valueProdazha.replaceAll(/\s/gmu, '') - (+valueZakupka.replaceAll(/\s/gmu, '')));
            pereschet = pereschet.toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).replace(',', '.')
            arr[index].marzha = pereschet;
            setArr([...arr])
            setCarouselDrop(false);
            setValueProdazha(value)
            inputRefProdazha.current.blur();
            // console.log(valueWeigth.length)
            // // arr[index].weight = text.toString();
            console.log('che')
            // setCarouselDrop(false);
            // setPodlozhkaTable(false);
            document.querySelectorAll('.weight,.size,.nal-zakupka, .nal-prodazha').forEach(x => x.style.zIndex = '');
            document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
        }

    }
    function handleProdazha(e) {
        if (inputRefProdazha.current && !inputRefProdazha.current.contains(e.target)) {
            enterProdazha();
            if (carouselDrop === true && valueProdazha === '') {
                let obj = JSON.parse(JSON.stringify(attributeData));
                setCarouselDrop(false)
                setPodlozhkaTable(false);
                obj.sort.splice(index, 1);
                obj.array.splice(index, 1);
                setAttributeData(obj)
                arr = arr.filter((x, i) => i !== index)
                setArr([...arr])
            }
        }
    }

    useEffect(() => {
        if (flagWeight) {
            document.addEventListener("click", handleWeight, true);
        }
        if (flagSize) {
            document.addEventListener("click", handleSize, true);
        }
        if (flagZakupka) {
            document.addEventListener("click", handleZakupka, true);
        }
        if (flagProdazha) {
            document.addEventListener("click", handleProdazha, true);
        }
        return () => {
            document.removeEventListener("click", handleZakupka, true);
            document.removeEventListener("click", handleWeight, true);
            document.removeEventListener("click", handleSize, true);
            document.removeEventListener("click", handleProdazha, true);
        };
    }, [flagWeight, valueWeigth, flagSize, valueSize, flagZakupka, valueZakupka, flagProdazha, valueProdazha]);
    // useEffect(()=> {
    //     if(arr[index].status.all === false){

    //         // data[index].status.all  = false;
    //         arr[index].status.rozetka  = false;
    //         arr[index].status.prom  = false;
    //         arr[index].status.crm  = false;
    //         setArr([...arr])
    //     }
    // },[arr])
    return (
        <tr>
            <td className="sticky-body">
                <div className="sticky-block" style={
                    !arr[index].status.all
                        ? {
                            opacity: '0.4',

                        }
                        : {}
                }>
                    <div
                        style={{
                            minWidth: '51px',
                            paddingRight: '10px',
                            height: '18px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <SwitchBtn type={'card'} status={item.status.all} data={arr} setData={setArr} index={index} />
                    </div>
                    <div style={{ width: 28, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <SwitchBtnSmall type={'card'} status={item.status.crm} data={arr} setData={setArr} index={index} />
                    </div>
                    <div style={{ width: 28, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <SwitchBtnSmall type={'card'} status={item.status.rozetka} data={arr} setData={setArr} index={index} />
                    </div>
                    <div style={{ width: 28, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <SwitchBtnSmall type={'card'} status={item.status.prom} data={arr} setData={setArr} index={index} />
                    </div>
                    <div
                        onMouseEnter={tooltipOn}
                        onMouseLeave={tooltipOff}
                        style={{ textAlign: 'left', padding: '0px 10px', paddingLeft: 7, width: 56, lineHeight: '18px', height: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                        {/* 5649- */}
                        {item.id}
                        {/* {sortedArr[0]?.filter((x) => x.select === true).map(x=> x?.idNumber).join('.')} */}
                    </div>
                    <div style={{ height: 18, lineHeight: '18px', display: 'flex', position: 'relative' }} className="atr">
                        <LoadImg style={{ marginRight: 6 }} />
                        <div
                            onMouseEnter={tooltipOn}
                            onMouseLeave={tooltipOff}
                            className="btn-product-menu2"
                            onClick={(e) => {
                                setCarouselDrop(false);
                                onClick('attribute', e.currentTarget, index)
                            }}>
                            {attributeData.sort[index]?.filter((x) => x.select === true).map(x => x?.name).join(', ')}
                        </div>
                        {/* <ProductCardListMenu 
                            // openCardMenu={openCardMenu}
                            // searchLine={searchLine}
                            // inputRef={inputRef}
                            // style={{marginLeft: 20}}
                            multiselect={true}
                            inputOn={true}
                            data={objAttribute}
                            // dataCurrent={data}
                            // typeData={typeData}
                            setData={setObjAttribute}
                            podlozhka={podlozhka}
                            setPodlozhka={setPodlozhka}
                            // setOpenCardMenu={setOpenCardMenu}
                            translator={translator}
                            createAttr={true}
                            setSortedArr={setSortedArr}
                            sortedArr={sortedArr}
                            // currentData={objAttribute}
                            index={index}
                            // carouselDrop={carouselDrop}
                            // onClick={onClick}
                        /> */}
                    </div>
                    <div className="shadow-left"></div>
                </div>
            </td>
            <td className='weight' style={
                !arr[index].status.all
                    ? { opacity: '0.4', paddingLeft: 12, paddingRight: 10 } : { paddingLeft: 12, paddingRight: 10 }}
                onMouseEnter={e => {
                    e.currentTarget.querySelector('.poloska').style.width = 'calc(100% - 22px)';

                    if (!flagWeight) e.currentTarget.querySelector('input').select()
                    e.currentTarget.querySelector('input').focus()
                }}
                onMouseLeave={e => {
                    if (!flagWeight) {
                        e.currentTarget.querySelector('.poloska').style.width = '0%'
                        e.currentTarget.querySelector('input').blur()
                    };
                }}
                onKeyDown={e => {
                    if (e.key === "Enter") {
                        enterWeight();
                    }
                }}
            >
                {/* {item.weight} */}
                <input maxLength={6} ref={inputRefWeight} value={valueWeigth} onChange={changeInputWeight} onClick={e => {
                    setFlagWeight(true);
                    setPodlozhkaTable(true);

                }} />
                <div className="poloska" style={{ width: '0%' }}></div>
            </td>
            <td className='size'
                onMouseEnter={e => {
                    e.currentTarget.querySelector('.poloska').style.width = '100%';
                    // e.currentTarget.querySelector('input').focus()
                    if (!flagSize) e.currentTarget.querySelector('input').select()
                    e.currentTarget.querySelector('input').focus()

                }}
                onMouseLeave={e => {
                    if (!flagSize) {
                        e.currentTarget.querySelector('.poloska').style.width = '0%';
                        e.currentTarget.querySelector('input').blur()
                    };
                }}
                onKeyDown={e => {
                    if (e.key === "Enter") {
                        enterSize();
                    }
                }}
                style={
                    !arr[index].status.all
                        ? {
                            opacity: '0.4',

                        }
                        : {}
                }
            >
                <input maxLength={14} ref={inputRefSize} value={valueSize} onChange={changeInputSize} onClick={e => {
                    setFlagSize(true);
                    // setPodlozhkaTable(true);

                }} />
                <div className="poloska" style={{ width: '0%' }}></div>
            </td>

            <PlusMinusBlock
                translator={translator}
                objProduct={arr}
                setObjProduct={setArr}
                item={item.size}
                // setSwitchMenu={setSwitchMenu}
                podlozhka={podlozhka}
                setPodlozhka={setPodlozhka}
                // hideMenu={hideMenu}
                style={{ paddingLeft: '10px', minWidth: 39 }}
                // setHideMenu={setHideMenu}
                index={index}
                tooltipOn={tooltipOn}
                tooltipOff={tooltipOff}
            />
            {/* <PlusMinusBlock
							translator={translator}
							objProduct={objProduct}
							setObjProduct={setObjProduct}
							setSwitchMenu={setSwitchMenu}
							podlozhka={podlozhka}
							setPodlozhka={setPodlozhka}
							hideMenu={hideMenu}
							setHideMenu={setHideMenu}
							index={index}
							tooltipOn={tooltipOn}
							tooltipOff={tooltipOff}
						/> */}
            <td
                className="nal-rezerv"
                style={{

                    paddingRight: '4px',
                    visibility: `${item.size === '' ? 'hidden' : 'visible'}`,
                    opacity: `${!arr[index].status.all ? '0.4' : ''}`
                }}

            >

                {item.rezerv}
                <span style={{ pointerEvents: 'none' }}></span>
            </td>
            <td
                className="nal-otpr"
                style={{
                    paddingRight: '4px',
                    // visibility:`hidden`
                    visibility: `${item.size === '' ? 'hidden' : 'visible'}`,
                    opacity: `${!arr[index].status.all ? '0.4' : ''}`

                }}
            >
                {/* <div
            style={{
                opacity: `${!objProduct[index].status.all ? 0.4 : ''}`,
                height: '18px',
                lineHeight: '18px',
                color: 'rgba(0,0,0,0.5)',
                paddingRight: '4px',
            }}
        >
        </div> */}
                {/* {formatNumber2(objProduct[index].otpr)} */}
                {item.otpr}
                <span style={{ pointerEvents: 'none' }}></span>
            </td>
            <td
                className="nal-vozvrat"
                style={{
                    paddingRight: '10px',
                    visibility: `${item.size === '' ? 'hidden' : 'visible'}`,
                    opacity: `${!arr[index].status.all ? '0.4' : ''}`

                }}

            >
                {/* <div
        
        >
        </div> */}
                {/* {formatNumber2(objProduct[index].vozvrat)} */}
                {/* {objProduct[index].vozvrat} */}
                {item.vozvrat}
                <span style={{ pointerEvents: 'none' }}></span>
            </td>
            <td
                className="nal-zakupka"
                onMouseEnter={e => {
                    e.currentTarget.querySelector('.poloska').style.width = 'calc(100% - 10px)';
                    // e.currentTarget.querySelector('input').focus()
                    if (!flagZakupka) e.currentTarget.querySelector('input').select()
                    e.currentTarget.querySelector('input').focus()

                }}
                onMouseLeave={e => {
                    if (!flagZakupka) {
                        e.currentTarget.querySelector('.poloska').style.width = '0%';
                        e.currentTarget.querySelector('input').blur()
                    };
                }}
                onKeyDown={e => {
                    if (e.key === "Enter") {
                        enterZakupka();
                    }
                }}
                style={{ opacity: `${!arr[index].status.all ? '0.4' : ''}` }}
            >
                {/* {objProduct[index].zakupka} */}
                {/* {formatNumber(objProduct[index].zakupka)} */}
                {/* 565.00 */}
                {/* {item.zakupka} */}
                <input maxLength={9} ref={inputRefZakupka} value={valueZakupka} onChange={changeInputZakupka} onClick={e => {
                    setFlagZakupka(true);
                    // setPodlozhkaTable(true);

                }} />
                <div className="poloska" style={{ width: '0%' }}></div>

            </td>
            <td
                className="nal-prodazha"
                onMouseEnter={e => {
                    e.currentTarget.querySelector('.poloska').style.width = 'calc(100% - 10px)';
                    // e.currentTarget.querySelector('input').focus()
                    if (!flagProdazha) e.currentTarget.querySelector('input').select()
                    e.currentTarget.querySelector('input').focus()

                }}
                onMouseLeave={e => {
                    if (!flagProdazha) {
                        e.currentTarget.querySelector('.poloska').style.width = '0%';
                        e.currentTarget.querySelector('input').blur()
                    };
                }}
                onKeyDown={e => {
                    if (e.key === "Enter") {
                        enterProdazha();
                    }
                }}
                style={{ opacity: `${!arr[index].status.all ? '0.4' : ''}` }}

            >
                {/* {objProduct[index].prodazha} */}
                {/* 1 000.00 */}
                {/* {item.prodazha} */}
                <input maxLength={9} ref={inputRefProdazha} value={valueProdazha} onChange={changeInputProdazha} onClick={e => {
                    setFlagProdazha(true);
                    // setPodlozhkaTable(true);

                }} />
                <div className="poloska" style={{ width: '0%' }}></div>
                {/* {formatNumber(objProduct[index].prodazha)} */}
            </td>
            <td
                className="nal-marzha"
                style={{ opacity: `${!arr[index].status.all ? '0.4' : ''}` }}

            >
                {/* {formatNumber(objProduct[index].marzha)} */}
                {/* 667 */}
                {item.marzha}
            </td>
            <td
                className="summa-suma1"
                style={{
                    textAlign: 'right',
                    display: 'flex',
                    justifyContent: 'end',
                    paddingRight: '3px',
                    opacity: `${!arr[index].status.all ? '0.4' : ''}`
                }}
            // onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
            // onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
            >
                {/* 1 570.00 */}
                {item.suma1}
                {/* {objProduct[index].suma1} */}

                <span style={{ paddingLeft: 3, color: 'rgba(0,0,0,0.5)', pointerEvents: 'none' }}>/</span>
                {/* </div> */}
            </td>
            <td
                className="summa-suma2"
                style={{
                    color: 'rgba(0, 0, 0, 0.5)',
                    paddingRight: '4px',
                    opacity: `${!arr[index].status.all ? '0.4' : ''}`
                    // color: 'rgba(0,0,0,0.5)',
                }}

            >

                {/* {objProduct[index].suma2} */}
                {item.suma2}

                <span style={{ pointerEvents: 'none' }}></span>
            </td>
            <td
                className="summa-suma3"
                style={{
                    color: 'rgba(0, 0, 0, 0.5)',
                    paddingRight: '4px',
                    opacity: `${!arr[index].status.all ? '0.4' : ''}`
                }}

            >
                {item.suma3}

                <span style={{ pointerEvents: 'none' }}></span>
            </td>
            <td
                className="summa-suma4"
                style={{
                    color: 'rgba(0, 0, 0, 0.5)',
                    paddingRight: 12,
                    opacity: `${!arr[index].status.all ? '0.4' : ''}`
                }}
            >
                {item.suma4}

                <span style={{ pointerEvents: 'none', width: 'calc(100% - 12px)' }}></span>
            </td>
            <td className='delete'
                onMouseEnter={e => {
                    e.currentTarget.closest('tr').style.opacity = 0.5;
                }}
                onMouseLeave={e => {
                    e.currentTarget.closest('tr').style.opacity = '';
                }}>
                <button onClick={e => {
                    // console.log(arr[index]);
                    // arr.splice(index,1)
                    // console.log(arr)

                    // console.log(arr[index])
                    // console.log(attributeData.sort)
                    // console.log(attributeData.array.filter((x,i) => i !== index))
                    // console.log(attributeData.sort.filter((x,i) => i !== index))
                    // console.log(index)
                    // attributeData.sort[index] = attributeData.sort[index].filter((x,i) =>  x.id !== index)

                    // attributeData.array[index] = attributeData.array[index].filter((x,i) =>  x.id !== index)
                    // let obj = {...attributeData};
                    let obj = JSON.parse(JSON.stringify(attributeData));
                    obj.sort.splice(index, 1);
                    obj.array.splice(index, 1);

                    setAttributeData(obj)
                    // console.log(arr)
                    setIndexTr(index);
                    arr = arr.filter((x, i) => i !== index)
                    setArr([...arr])
                    // console.log(attributeData.sort)
                    console.log(attributeData.array)
                }}>
                    <SvgDeleteBtn />
                </button>
            </td>
        </tr>
    )
}

export default ProductCardList;
