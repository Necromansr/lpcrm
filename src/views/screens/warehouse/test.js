<div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between', alignItems: 'center' }}>
<span>{memoryCena >= 1 ? translator.getTranslation('menuAdd/CribProduct', 'add') : translator.getTranslation('menuAdd/CribProduct', 'crib')}</span>
<span style={{ display: 'flex', alignItems: 'center' }}><button
    // onDoubleClick={(e) => e.stopPropagation()}
    onClick={BtnMinus}
    style={{ top: -1 }}

>
    <svg
        width="9"
        height="7"
        viewBox="0 0 9 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1.26782 3.44748L8.08752 3.44747"
            stroke="black"
            strokeOpacity="0.7"
            strokeWidth="1.09116"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </svg>
</button>{memoryCena} шт<button
    onClick={BtnPlus}
    style={{ top: -1 }}
>
        <svg
            width="15"
            height="15"
            viewBox="3 2 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(45deg)', opacity: 0.7 }}
        >
            <path
                d="M7.26655 8.03662L12.0888 12.8589"
                stroke="black"
                strokeOpacity="0.7"
                strokeWidth="1.09116"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
            <path
                d="M7.26655 12.8589L12.0888 8.03659"
                stroke="black"
                strokeOpacity="0.7"
                strokeWidth="1.09116"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
            <path
                d="M7.26655 8.03662L12.0888 12.8589"
                stroke="black"
                strokeOpacity="0.7"
                strokeWidth="1.09116"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
            <path
                d="M7.26655 12.8589L12.0888 8.03659"
                stroke="black"
                strokeOpacity="0.7"
                strokeWidth="1.09116"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
            <path
                d="M7.26655 8.03662L12.0888 12.8589"
                stroke="black"
                strokeOpacity="0.7"
                strokeWidth="1.09116"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
            <path
                d="M7.26655 12.8589L12.0888 8.03659"
                stroke="black"
                strokeOpacity="0.7"
                strokeWidth="1.09116"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
        </svg>
    </button></span>
</div>
{memoryCena >= 1 ? <>
<div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between', alignItems: 'center' }}>
    <span>Поставщик</span>
    <div style={{ minWidth: '100px', padding: 5, paddingLeft: 0, paddingRight: 11 }}>
        <SimpleDropMenu
            setListenChangeSuppliers={setListenChangeSuppliers}
            listenChangeSuppliers={listenChangeSuppliers}
            addPrice={addPrice}
        />
    </div>
</div>
<div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between' }}>
    <span>{translator.getTranslation('menuAdd/CribProduct', 'purchase')}</span><input className='cenaInput' onChange={cenaChange} value={cena} />
    <div className='poloska'></div>
</div>
<div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between' }}>
    <span>{translator.getTranslation('menuAdd/CribProduct', 'exchangeRates')}</span><input value={kurs} onChange={kursChange} />
    <div className='poloska'></div>
</div>
<div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between', alignItems: 'center' }}>
    <span>{translator.getTranslation('menuAdd/CribProduct', 'total')}</span><span>{(+itogoZakupka).toFixed(2)}</span>
</div>

</> :
<div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between' }}>
    <span>{translator.getTranslation('menuAdd/CribProduct', 'reason')}</span><input className='prichinaInput' onChange={pri4inaChange} value={pri4ina} />
    <div className='poloska'></div>
</div>
}