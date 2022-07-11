
import React, { useEffect, useState } from 'react';
import ScrollBar from '../../components/ScrollBar';
import * as hints from '../../../until/hints'
import './test.css'

let country = {
    "Украина": "🇺🇦",
    "Россия": "🇷🇺",
    "Албания": "🇦🇱",
    "Казахстан": "🇰🇿",
    "Глобально": "icon-Exclude-2"
}

const options = [
    { key: '0', name: 'Все' },
    { key: '1', name: 'П/п', title: hints.pP },
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
    { key: '0', name: 'Все' },
    { key: '1', name: 'П/п', title: hints.pP },
    { key: '2', name: '1' },
    { key: '3', name: '2' },
    { key: '4', name: '3' },
    { key: '5', name: '4' },
    { key: '6', name: '5' },
    { key: '7', name: '6' },
    { key: '8', name: '7' },
    { key: '9', name: '8' },
    { key: '10', name: '9' },
    { key: '11', name: '10' },
    { key: '12', name: '11' },
    { key: '13', name: '12' },
    { key: '14', name: '13' },
    { key: '15', name: '14' },
    { key: '16', name: '15' },
    { key: '17', name: '16' },
    { key: '18', name: '17' },
    { key: '19', name: '18' },
    { key: '20', name: '19' },
    { key: '21', name: '20+' }
]






let status = [
    {
        "id": 1,
        "name": "Все",
        "color": "#C4C4C4",
        "tooltip": "Все заказы в CRM",
        "statusAttributes": []
    },
    {
        "id": 2,
        "name": "Новый",
        "color": "#515151",
        "tooltip": "Заказ без статуса<br><span class=\"text-tooltip\">Ожидает обработку</span>",
        "statusAttributes": []
    },
    {
        "id": 3,
        "name": "Принят",
        "color": "#91d100",
        "tooltip": "Покупатель подтвердил заказ<br><span class=\"text-tooltip\">Ожидает упаковку или передачу в «(Drop) Ожидает ТТН»<br><br>В статусе включена автоматическая отправка SMS согласно настроек модуля. Используемый шаблон:<br>- «Заказ принят, готовится к отправке»</span>",
        "statusAttributes": []
    },
    {
        "id": 4,
        "name": "Отказ",
        "color": "#fd7777",
        "tooltip": "Покупатель отказался от заказа",
        "statusAttributes": [
            {
                "id": 20,
                "name": "Заказал в другом магазине",
                "attributesInStatuses": {
                    "createdAt": "2022-05-24T14:02:38.527Z",
                    "updatedAt": "2022-05-24T14:02:38.527Z",
                    "statusAttributeId": 20,
                    "statusId": 4
                }
            },
            {
                "id": 19,
                "name": "Нашел дешевле",
                "attributesInStatuses": {
                    "createdAt": "2022-05-24T14:02:38.527Z",
                    "updatedAt": "2022-05-24T14:02:38.527Z",
                    "statusAttributeId": 19,
                    "statusId": 4
                }
            },
            {
                "id": 18,
                "name": "Дорого",
                "attributesInStatuses": {
                    "createdAt": "2022-05-24T14:02:38.527Z",
                    "updatedAt": "2022-05-24T14:02:38.527Z",
                    "statusAttributeId": 18,
                    "statusId": 4
                }
            },
            {
                "id": 17,
                "name": "Уже заказал",
                "attributesInStatuses": {
                    "createdAt": "2022-05-24T14:02:38.527Z",
                    "updatedAt": "2022-05-24T14:02:38.527Z",
                    "statusAttributeId": 17,
                    "statusId": 4
                }
            },
            {
                "id": 16,
                "name": "Передумал",
                "attributesInStatuses": {
                    "createdAt": "2022-05-24T14:02:38.527Z",
                    "updatedAt": "2022-05-24T14:02:38.527Z",
                    "statusAttributeId": 16,
                    "statusId": 4
                }
            },
            {
                "id": 15,
                "name": "Отказался",
                "attributesInStatuses": {
                    "createdAt": "2022-05-24T14:02:38.527Z",
                    "updatedAt": "2022-05-24T14:02:38.527Z",
                    "statusAttributeId": 15,
                    "statusId": 4
                }
            },
            {
                "id": 14,
                "name": "Не верный номер",
                "attributesInStatuses": {
                    "createdAt": "2022-05-24T14:02:38.527Z",
                    "updatedAt": "2022-05-24T14:02:38.527Z",
                    "statusAttributeId": 14,
                    "statusId": 4
                }
            },
            {
                "id": 13,
                "name": "Не заказывал",
                "attributesInStatuses": {
                    "createdAt": "2022-05-24T14:02:38.527Z",
                    "updatedAt": "2022-05-24T14:02:38.527Z",
                    "statusAttributeId": 13,
                    "statusId": 4
                }
            },
            {
                "id": 12,
                "name": "Не подходит",
                "attributesInStatuses": {
                    "createdAt": "2022-05-24T14:02:38.527Z",
                    "updatedAt": "2022-05-24T14:02:38.527Z",
                    "statusAttributeId": 12,
                    "statusId": 4
                }
            },
            {
                "id": 11,
                "name": "Дублирующий заказ",
                "attributesInStatuses": {
                    "createdAt": "2022-05-24T14:02:38.527Z",
                    "updatedAt": "2022-05-24T14:02:38.527Z",
                    "statusAttributeId": 11,
                    "statusId": 4
                }
            }
        ]
    },
    {
        "id": 5,
        "name": "Упакован",
        "color": "#928c42",
        "tooltip": "Заказ упакован<br><span class=\"text-tooltip\">Ожидает передачу почтовой службе</span>",
        "statusAttributes": []
    },
    {
        "id": 6,
        "name": "Передан",
        "color": "#c6b922",
        "tooltip": "Заказ передан почтовой службе<br><span class=\"text-tooltip\">Ожидает автоматического присвоения статуса «Отправлен», после подтверждения получения посылки почтовой службой</span>",
        "statusAttributes": []
    },
    {
        "id": 7,
        "name": "Отправлен",
        "color": "#e2d317",
        "tooltip": "Почтовая служба получила посылку<br><span class=\"text-tooltip\">Статус присваивается автоматически согласно настроек модуя:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включен автоматический возврат заказа, согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включена автоматическая отправка SMS, согласно настроек модуля. Используемый шаблон:<br>- «Заказ отправлен»<br>- «Заказ прибыл»<br>- «Заказ 3-й день в отделении»<br>- «Последний день хранения»</span>",
        "statusAttributes": []
    },
    {
        "id": 8,
        "name": "Выкуплен",
        "color": "#64a727",
        "tooltip": "Заказ выкуплен<br><span class=\"text-tooltip\">Ожидает получения наложенного платежа<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>",
        "statusAttributes": []
    },
    {
        "id": 9,
        "name": "Деньги получены",
        "color": "#2c8b11",
        "tooltip": "Наложенный платёж получен<br><span class=\"text-tooltip\">Заказ ожидает завершения<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>",
        "statusAttributes": []
    },
    {
        "id": 10,
        "name": "Завершён",
        "color": "#00CC00",
        "tooltip": "Заказ завершён<br><span class=\"text-tooltip\">Пользователь с правом использования кнопки «Завершить», подтвердил:<br>- получение наложенного платежа;<br>- выполнение заказа.<br>Присвоил заказу статус «Завершён», заблокировал заказ кнопкой «Завершить».<br>Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>",
        "statusAttributes": []
    },
    {
        "id": 11,
        "name": "Возврат",
        "color": "#da291c",
        "tooltip": "Покупатель отказался от получения заказа<br><span class=\"text-tooltip\">Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>",
        "statusAttributes": []
    },
    {
        "id": 12,
        "name": "Возврат (прибыл)",
        "color": "#b52318",
        "tooltip": "Возвращенный заказ прибыл на почту<br><span class=\"text-tooltip\">Ожидает получения отправителем<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>",
        "statusAttributes": []
    },
    {
        "id": 13,
        "name": "Возврат (получен)",
        "color": "#860101",
        "tooltip": "Возвращенный заказ получил отправитель<br><span class=\"text-tooltip\">Ожидает завершения<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>",
        "statusAttributes": []
    },
    {
        "id": 14,
        "name": "Возврат (завершён)",
        "color": "#FF0000",
        "tooltip": "Возврат учтён<br><span class=\"text-tooltip\">Пользователь с правом использования кнопки «Завершить» подтвердил получение возвращенного заказа. Присвоил заказу статус «Возврат (завершён)», заблокировал заказ кнопкой «Завершить».<br> Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>",
        "statusAttributes": []
    },
    {
        "id": 15,
        "name": "(Drop) Ожидает ТТН",
        "color": "#856915",
        "tooltip": "Заказ передан Dropshipping компании<br><span class=\"text-tooltip\">Ожидает создания товарно-транспортной накладной дропшиппером, для её присвоения заказу с дальнейшим отслеживания в CRM системе</span>",
        "statusAttributes": []
    },
    {
        "id": 16,
        "name": "(Drop) Присвоена ТТН",
        "color": "#c7a95c",
        "tooltip": "Заказу присвоена ТТН<br><span class=\"text-tooltip\">Ожидает автоматического присвоения статуса «(Drop) Отправлен», после подтверждения получения посылки почтовой службой</span>",
        "statusAttributes": []
    },
    {
        "id": 17,
        "name": "(Drop) Отправлен",
        "color": "#d7a214",
        "tooltip": "Почтовая служба получила посылку<br><span class=\"text-tooltip\">Статус присваивается автоматически согласно настроек модуя:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включена автоматическая отправка SMS, согласно настроек модуля. Используемый шаблон:<br>- «Заказ отправлен»<br>- «Заказ прибыл»<br>- «Заказ 3-й день в отделении»<br>- «Последний день хранения»</span>",
        "statusAttributes": []
    },
    {
        "id": 18,
        "name": "(Drop) Выкуплен",
        "color": "#68a6d7",
        "tooltip": "Заказ выкуплен<br><span class=\"text-tooltip\">Ожидает выплату от дропшиппера<br><br>Статус присваивается автоматически, согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>",
        "statusAttributes": []
    },
    {
        "id": 19,
        "name": "(Drop) Завершён",
        "color": "#169dd9",
        "tooltip": "Заказ завершён<br><span class=\"text-tooltip\">Пользователь с правом использования кнопки «Завершить», подтвердил:<br>- получение выплаты от дропшиппера;<br>- выполнение заказа.<br>Присвоил заказу статус «(Drop) Завершён», заблокировал заказ кнопкой «Завершить».<br>Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>",
        "statusAttributes": []
    },
    {
        "id": 20,
        "name": "(Drop) Возврат",
        "color": "#a82451",
        "tooltip": "Покупатель отказался от получения заказа<br><span class=\"text-tooltip\">Ожидает вычитания стоимости за возврат заказа из выплат дропшиппера<br><br>Статус присваивается автоматически, согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span></span>",
        "statusAttributes": []
    },
    {
        "id": 21,
        "name": "(Drop) Возврат (учтён)",
        "color": "#d90d53",
        "tooltip": "Возврат учтён<br><span class=\"text-tooltip\">Пользователь с правом использования кнопки «Завершить», подтвердил вычитание стоимости за возврат заказ, из выплат дропшиппера. Присвоил заказу статус «(Drop) Возврат (завершён)», заблокировал заказ кнопкой «Завершить». Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>",
        "statusAttributes": []
    }
]





const VirtualizedList = (props) => {
    const { numItems, itemHeight, windowHeight } = props;
    const [scrollTop, setScrollTop] = useState(0);
    const [fetching, setFetching] = useState(true);
    const [open, setOpen] = useState(true);
    const [array, setArray] = useState([]);
    // const items = [];



    useEffect(() => {

        setArray(props.array)

    }, [props.array])

    const innerHeight = numItems * itemHeight;
    const offset = 0;
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - offset);
    const endIndex = Math.min(
        numItems - 1,
        Math.floor((scrollTop + windowHeight) / itemHeight) + offset
    );

    const onScroll = (e) => {
        setScrollTop(e.target.scrollTop);
    };





    return (
        <ScrollBar onScroll={onScroll} height={props.show ? windowHeight : 0}>
            <div style={{position: 'relative', height: innerHeight}}>
                {array.slice(startIndex, endIndex + 1).map((x, i) => {
                    let style = {
                        position: "absolute",
                        transform: `translate3d(0px, ${(i + startIndex) * itemHeight}px, 0px)`,
                        willChange: "transform, scroll-position",
                        width: '100%'
                    }
                    return (<div className={x.select ? 'select-btn' : ''} style={style} onClick={e => props.onClick(x.id)}>
                        <span style={{ paddingLeft: 16 }} className={'icons ' + x.icon}> {x.name}
                            <span className={'status-before'} style={x.name !== 'Все' ? { backgroundColor: x.color, width: '100%', height: 3, display: 'block' } : {}}></span>
                        </span>
                    </div>)
                })}
            </div>
        </ScrollBar >
    );
};






export default function Test({ input = true }) {


    let [array, setArray] = useState(status.map((x, idx) => { return { ...x, select: false, id: idx } }));
    let [name, setName] = useState('');
    let [show, setShow] = useState(false);
    let [value, setValue] = useState(name.name || '');

    useEffect(() => {
        if (!array.find(x => x.select === true)) {
            array[0].select = true;
            setArray([...array])
        }
    }, [])

    let onClick = (key) => {
        array[key].select = !array[key].select;
        if (array.filter(x => x.select).length === 0 || array[key].name === 'Все') {
            array = array.map(x => { return { ...x, select: false } });
            array[0].select = true;
        } else if (array[key].name !== 'Все') {
            array[0].select = false;
        }
        setArray([...array])
    }


    useEffect(() => {
        setName(
            ((array.filter(x => x.select).length > 1) ? { name: "Фильтр" } :
                (array.filter(x => x.select).length === 1 && array.find(x => x.select === true).name !== 'Все') ?
                    (array.find(x => x.select === true).name ? { name: array.find(x => x.select === true).name } :
                        { icon: array.find(x => x.select === true).icon }) : { name: '' })
        )
    }, [array])

    let open = () => setShow(true);
    let close = () => setShow(false);

    return (
        <div className='dropdown' style={{width: 90}} onMouseEnter={open} onMouseLeave={close}>
            <div className='header-dropdown'>
                {input && <input value={value} onChange={e=> setValue(e.target.value)} />}
                <div className={'icons ' + name.icon}>{name.name}</div>
            </div>
            <VirtualizedList onClick={onClick} array={array.filter(x=>  x.name?.toLowerCase().includes(value.toLowerCase()))} numItems={array.length} itemHeight={18} windowHeight={90} show={show} />
        </div>
    )
}