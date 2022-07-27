import React, { useRef, useEffect,useState } from 'react';


const InputDropBtn = ({cena,setCena,setInput,setFlagForZakupka,flag,setListenChangeSuppliers,setFlag,data,setData,setVirtualClick,vitrualClick, setOpenMenu, ...props }) => {
    const [suppliersInput, setSuppliersInput] = useState('');
    const ref = useRef();
    function addItem(e) {
        let obj = {id:0, company: suppliersInput, select: true};
        let newdata = data.map(x => ({...x, select:false , id: x.id + 1}));
        let arr = [obj, ...newdata];
        setSuppliersInput('');
        setData([...arr]);
        setFlag(false);
        setOpenMenu(false);
        setListenChangeSuppliers(data.filter(x => x.select)[0]?.company);
    
        // setCena('');
        // ref.current.closest('.cena').querySelector('.cenaInput').focus();
        ref.current.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
        ref.current.closest('.cena').querySelector('.cenaInput').zIndex = 10001;
        ref.current.closest('.cena').querySelector('.memoryCena').classList.remove('hide');
        ref.current.closest('.cena').querySelector('.save-btn').classList.remove('hide');
        ref.current.closest('.cena').querySelector('.cenaInput').nextSibling.style.width = '100%';
        if(cena !== '' || cena !=='0.00') {
         
            e.target.closest('.cena').querySelector('.cenaInput').focus();
        } else {

            e.target.closest('.cena').querySelector('.cenaInput').focus();
            setCena('');
        }
        setVirtualClick(false);
        setFlagForZakupka(true);
        // setVirtualPodlozhka(false);

    }
    function handle(e) {
        if (ref.current && !ref.current.contains(e.target)) {
            addItem(e);
        }   
    }
    useEffect(() => {
        if(vitrualClick){
            document.addEventListener("click", handle, true);
        }
        return () => {
            document.removeEventListener("click", handle, true);
        };
    }, [vitrualClick,suppliersInput]);
    return (
        <input ref={ref}
        onMouseEnter={e => e.target.focus()}
        onMouseLeave={e => {
            if (!flag) e.target.blur()
        }}
        placeholder='Создать поставщика'
        style={{  height: 18, lineHeight: '18px' }}
        value={suppliersInput}
        onChange={e => {
            if (e.target.value.length === 1) {
                e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
            }
            if (e.target.value.length >= 1) {
                setFlag(true);
                setVirtualClick(true);
                ref.current.closest('.cena').querySelector('.memoryCena').classList.add('hide');
                ref.current.closest('.cena').querySelector('.save-btn').classList.add('hide');
                ref.current.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = 'none';

            } else {
                setFlag(false);
                setVirtualClick(false);
                ref.current.closest('.cena').querySelector('.memoryCena').classList.remove('hide');
                ref.current.closest('.cena').querySelector('.save-btn').classList.remove('hide');
                ref.current.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';

            }
            // setVirtualClick(true);
            setInput('');
            setSuppliersInput(e.target.value)
        }} onKeyDown={e=> {
            if(e.key === 'Enter'){
                addItem(e);

            }
        }}
            {...props}
        />
    )
}

export default InputDropBtn
