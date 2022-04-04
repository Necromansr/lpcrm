// let tooltip = {
//   id: 'Идентификатор/номер заказа<br /><span class:"text-tooltip">Используется для поиска и передачи заказа между пользователями CRM</span>',
//   status: 'Текущий статус заказа<br /><span className="text-tooltip">Используется для контроля, анализа и отслеживания заказа в CRM</span>',
//   bayer_name: 'Фамилия имя отчество покупателя<br /><span className="text-tooltip">Используется для автоматического заполнения товарно-транспортной накладной почтовой службы</span>',
//   country: 'Страна за которой закреплён заказ<br /><span class:"text-tooltip">Используется для разделения заказов из разных стран</span>',
//   tel: 'Телефон покупателя<br /><span class:"text-tooltip">Используется для:<br />-Автоматического заполнения товарно-транспортной накладной почтовой службы<br />-Автоматической отправки SMS</span>',
//   comm: '...',
//   sum: 'Итоговая сумма заказа',
//   product: '...',
//   pay: 'Используемый вид оплаты',
//   delivery: 'Используемый вид доставки',
//   addres: '...',
//   ttn: 'Номер товарно-транспортной накладной',
//   ttnStatus: 'Информация за последний час о статусе посылки<br /><span class:"text-tooltip">Используется для:<br />-автоматической отправки SMS<br />-автоматической смены статусов в CRM</span>',
//   prinyal: 'Пользователь подтвердивший заказ<br /><span class:"text-tooltip">Закрепление происходит автоматически при изменении статуса заказа на «Принят». Используется для расчета зарплаты/премии сотрудника</span>',
//   depart: 'Используемый отдел в заказе<br /><span class:"text-tooltip">Заказ с "отделом" виден только тем пользователям у которых есть доступ к сооответствующему отделу</span>',
//   add: 'Дата и время добавления заказа в CRM',
//   open: 'Время между добавлением заказа в CRM и первым взаимодействием с ним<br /><span class:"text-tooltip">Показывает сколько времени покупатель ожидал звонка/ответа</span>',
//   opened: 'Последний пользователь открывший заказ<br /><span class:"text-tooltip">Используется для выявления сотрудников "ворующих" заказы</span>',
//   prinyatZa: 'Время между открытием заказа и изменением его статуса на «Принят»<br /><span class:"text-tooltip">Используется для оценки времени потраченого на подтверждение заказа</span>',
//   accepted: 'Дата и время изменения статуса заказа на «Принят»<br /><span class:"text-tooltip">Используется для расчета зарплаты/премии сотрудника за период врмени</span>',
//   pered: 'Время между изменением статуса заказа на "Принят" и получением посылки почтовой службой<br /><span class:"text-tooltip">Показывает сколько времени покупатель ожидал отправку заказа</span>',
//   send: 'Дата и время получения посылки почтовой службой<br /><span class:"text-tooltip">Используется для контроля сотрудников отвечающих за отправку заказа</span>',
//   change: 'Дата и время последнего изменения заказа',
//   changed: 'Последний пользователь изменивший заказ',
//   finish: 'Дата и время завершения заказа<br /><span class:"text-tooltip">Используется для подтверждения завершения заказа. Дальнейшее редактирование заказа сотрудниками не имеющим доступ, запрещен</span>',
//   site: 'Источник заказа',
//   ip: 'IP адрес устройства с которого поступил заказ<br /><span class:"text-tooltip">Используется для отслеживания и блокировки в случаях спама</span>',
//   utm: 'UTM-метка<br /><span class:"text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span>',
//   field: 'Дополнительное поле заказа<br /><span class:"text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span>',
// }

// const TD = ({ id, className, children, style }) => {

//   return (
//     <td
//       className={className}
//       id={id}
//       style={style}
//     >
//       {children}
//     </td>
//   );
// }

// function useHover(
//   elementRef,
// ) {
//   const [value, setValue] = useState(false)

//   const handleMouseEnter = () => setValue(true)
//   const handleMouseLeave = () => setValue(false)

//   useEffect(() => {
//     const node = elementRef?.current

//     if (node) {
//       node.addEventListener('mouseenter', handleMouseEnter)
//       node.addEventListener('mouseleave', handleMouseLeave)

//       return () => {
//         node.removeEventListener('mouseenter', handleMouseEnter)
//         node.removeEventListener('mouseleave', handleMouseLeave)
//       }
//     }
//   }, [elementRef])

//   return value
// }




// const ROW = ({ row, i, onDoubleClick }) => {
//   const hoverRef = useRef(null)
//   const isHover = useHover(hoverRef)
//   return (
//     <tr onDoubleClick={onDoubleClick} ref={hoverRef} style={isHover ? { background: '#cbcbcb' } : { background: 'transparent' }} className="crm-main-table" key={i} {...row.getRowProps()}>
//       {row.cells.map((cell) => {
//         if (cell.column.id === "id") {
//           return (
//             <TD className={`id-table new-order  ${!isHover ? 'hover' : '  status-table-hover'}`} {...cell.getCellProps()}> 2432</TD>
//           );
//         } else if (cell.column.id === "status") {
//           return (
//             <TD className={`status-table  ${!isHover ? 'hover' : '  status-table-hover'}`} {...cell.getCellProps()}>   <div className="new-zakaz color-515151 color-form2"><span className="max-lenght-status">Новый</span></div></TD>
//           );
//         } else if (cell.column.id === "bayer_name") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>Александр Сергеевич</TD>

//           );
//         } else if (cell.column.id === "localization") {
//           return (
//             <TD className={`country-block  ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}><span className="country-flag"><img className="flag ua" src={ukraine} alt="flag" /></span></TD>

//           );
//         } else if (cell.column.id === "phone") {
//           return (

//             <TD className={`tel-colum  ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}><span className="tel"><img className="mob-icon" src={ukraine} alt="" /><span className="tel-number max-lenght">+38 096 514 25 46</span></span>
//               <span className="svg-wrap">
//                 <svg className="svg-convert" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.64296 12.1067H3.21439C2.03582 12.1067 1.07153 11.1424 1.07153 9.96387V4.60672C1.07153 3.42815 2.03582 2.46387 3.21439 2.46387H9.64296C10.8215 2.46387 11.7858 3.42815 11.7858 4.60672V9.96387C11.7858 11.1424 10.8215 12.1067 9.64296 12.1067Z" stroke="#9C9B9E" strokeWidth="1.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                   <path d="M3.2146 5.14307L5.67889 7.60735C6.10746 8.03592 6.75031 8.03592 7.17888 7.60735L9.64317 5.14307" stroke="#9C9B9E" strokeWidth="1.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//                 <span className="count">4</span>
//               </span></TD>

//           );
//         }
//         else if (cell.column.id === "comment") {
//           return (

//             <TD className={`max-lenght-comment  ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>Lorem ipsum dolor sit amet consectetur.</TD>

//           );
//         }
//         else if (cell.column.id === "total") {
//           return (

//             <TD className={`colum-sum  ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>9555.40</TD>

//           );
//         }
//         else if (cell.column.id === "product") {
//           return (


//             <TD className={`${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}><span className="product-colum">
//               <span className="svg-wrap">
//                 <svg className="svg-box" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fillRule="evenodd" clipRule="evenodd" d="M5.49929 1.48529C5.49914 1.48536 5.49898 1.48544 5.49883 1.48552L1.33225 3.56881L1.33109 3.56938C1.2443 3.61251 1.17125 3.679 1.12018 3.76137C1.06911 3.84371 1.04203 3.93866 1.04196 4.03555C1.04196 4.03552 1.04196 4.03558 1.04196 4.03555V8.9986C1.04128 9.09569 1.06774 9.19104 1.11837 9.27388C1.16891 9.35659 1.24153 9.42356 1.32805 9.46725C1.32791 9.46718 1.32819 9.46732 1.32805 9.46725L5.49477 11.5506C5.56715 11.5868 5.64712 11.6058 5.72805 11.6058C5.80898 11.6058 5.88881 11.5869 5.96118 11.5507L10.1291 9.46675L10.1302 9.46617C10.217 9.42304 10.2901 9.35655 10.3411 9.27419C10.3922 9.19182 10.4193 9.09683 10.4194 8.99991V4.03565C10.4193 3.93873 10.3922 3.84374 10.3411 3.76137C10.2901 3.679 10.217 3.61251 10.1302 3.56938L10.1291 3.56881L5.96249 1.48552C5.96233 1.48544 5.96217 1.48536 5.96202 1.48529C5.8901 1.44964 5.81092 1.43109 5.73066 1.43109C5.65039 1.43109 5.57121 1.44964 5.49929 1.48529ZM6.19432 1.01898L6.42615 0.552435C6.21003 0.445045 5.97198 0.38916 5.73066 0.38916C5.48933 0.38916 5.25128 0.445045 5.03517 0.552435L5.03401 0.55301L0.867434 2.6363C0.86722 2.63641 0.867006 2.63651 0.866792 2.63662C0.606685 2.76602 0.387788 2.96536 0.234679 3.21226C0.081443 3.45937 0.000179611 3.74433 2.53139e-05 4.0351L2.52518e-05 8.99334C-0.00162631 9.28392 0.0777662 9.56922 0.229306 9.8172C0.381192 10.0657 0.599511 10.2669 0.859632 10.398L0.861072 10.3987L5.02865 12.4825C5.24579 12.5911 5.48525 12.6477 5.72805 12.6477C5.9708 12.6477 6.21021 12.5912 6.4273 12.4825C6.42735 12.4825 6.42725 12.4826 6.4273 12.4825L10.5939 10.3993C10.5941 10.3992 10.5942 10.3991 10.5944 10.399C10.8546 10.2696 11.0735 10.0702 11.2266 9.82329C11.3799 9.57618 11.4611 9.29122 11.4613 9.00046V4.03537C11.4611 3.74461 11.3799 3.45937 11.2266 3.21226C11.0735 2.96537 10.8546 2.76603 10.5945 2.63663C10.5943 2.63652 10.5941 2.63641 10.5939 2.6363L6.4273 0.55301L6.19432 1.01898Z" fill="#9C9B9E" />
//                   <path fillRule="evenodd" clipRule="evenodd" d="M0.221734 3.23975C0.350407 2.9824 0.663338 2.87809 0.920684 3.00676L5.73066 5.41175L10.5406 3.00676C10.798 2.87809 11.1109 2.9824 11.2396 3.23975C11.3683 3.49709 11.2639 3.81002 11.0066 3.9387L5.96364 6.46017C5.81697 6.53351 5.64434 6.53351 5.49767 6.46017L0.454718 3.9387C0.197371 3.81002 0.0930612 3.49709 0.221734 3.23975Z" fill="#9C9B9E" />
//                   <path fillRule="evenodd" clipRule="evenodd" d="M5.73066 5.47324C6.01838 5.47324 6.25162 5.70648 6.25162 5.99421V12.1208C6.25162 12.4085 6.01838 12.6417 5.73066 12.6417C5.44293 12.6417 5.20969 12.4085 5.20969 12.1208V5.99421C5.20969 5.70648 5.44293 5.47324 5.73066 5.47324Z" fill="#9C9B9E" />
//                   <path fillRule="evenodd" clipRule="evenodd" d="M2.65986 1.85397C2.78853 1.59663 3.10146 1.49232 3.35881 1.62099L8.56847 4.22582C8.82582 4.3545 8.93013 4.66743 8.80146 4.92477C8.67278 5.18212 8.35985 5.28643 8.10251 5.15776L2.89284 2.55292C2.63549 2.42425 2.53118 2.11132 2.65986 1.85397Z" fill="#9C9B9E" />
//                 </svg>
//                 <span className="count">1</span>
//               </span>
//               <span className="max-lenght-product">Чай Монастырский (1шт. x 100.00 = 10012321</span></span></TD>

//           );
//         } else if (cell.column.id === "pay") {
//           return (

//             <TD className={`colum-pay ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}><span className="svg-wrap">
//               <svg className="card" width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M8.92 10.8C8.92 10.9867 9.1 11.14 9.32666 11.14H10.9H12.4733C12.7 11.14 12.88 10.9867 12.88 10.8V10.46C12.88 10.2733 12.7 10.12 12.4733 10.12H10.9H9.32666C9.1 10.12 8.92 10.2733 8.92 10.46V10.8V10.8Z" fill="#9C9B9E" />
//                 <path d="M13.8022 2H2.21379C0.999001 2 0.015984 3.025 0.015984 4.29167L0.015984 5.6C0.015984 5.61667 0 5.625 0 5.65C0 5.675 0.015984 5.68333 0.015984 5.7L0.015984 11.7083C0.015984 12.975 0.999001 14 2.21379 14H13.8022C15.017 14 16 12.975 16 11.7083V4.29167C16 3.025 15.017 2 13.8022 2ZM2.21379 3.25H13.8022C14.3536 3.25 14.8012 3.71667 14.8012 4.29167V5.025H1.21479V4.29167C1.21479 3.71667 1.66234 3.25 2.21379 3.25ZM13.8022 12.75H2.21379C1.66234 12.75 1.21479 12.2833 1.21479 11.7083V6.275H14.8012V11.7167C14.8012 12.2833 14.3536 12.75 13.8022 12.75Z" fill="#9C9B9E" />
//               </svg>
//             </span></TD>

//           );
//         } else if (cell.column.id === "delivery") {
//           return (


//             <TD className={`svg-delivery ${!isHover ? 'hover' : ''}`}   {...cell.getCellProps()}><span className="svg-pos"><img src={ukraine} alt="" /></span></TD>

//           );
//         } else if (cell.column.id === "addres") {
//           return (

//             <TD className={`addres-block ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>Євминка, Відділення №1: вул. Київ</TD>


//           );
//         } else if (cell.column.id === "ttn") {
//           return (
//             <TD className={`ttn-block ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}><div className="ttn-position">
//               <span className="ttn-number max-lenght">20454</span>
//               <span className="svg-wrap">
//                 <svg className="svg-box" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fillRule="evenodd" clipRule="evenodd" d="M5.49929 1.48529C5.49914 1.48536 5.49898 1.48544 5.49883 1.48552L1.33225 3.56881L1.33109 3.56938C1.2443 3.61251 1.17125 3.679 1.12018 3.76137C1.06911 3.84371 1.04203 3.93866 1.04196 4.03555C1.04196 4.03552 1.04196 4.03558 1.04196 4.03555V8.9986C1.04128 9.09569 1.06774 9.19104 1.11837 9.27388C1.16891 9.35659 1.24153 9.42356 1.32805 9.46725C1.32791 9.46718 1.32819 9.46732 1.32805 9.46725L5.49477 11.5506C5.56715 11.5868 5.64712 11.6058 5.72805 11.6058C5.80898 11.6058 5.88881 11.5869 5.96118 11.5507L10.1291 9.46675L10.1302 9.46617C10.217 9.42304 10.2901 9.35655 10.3411 9.27419C10.3922 9.19182 10.4193 9.09683 10.4194 8.99991V4.03565C10.4193 3.93873 10.3922 3.84374 10.3411 3.76137C10.2901 3.679 10.217 3.61251 10.1302 3.56938L10.1291 3.56881L5.96249 1.48552C5.96233 1.48544 5.96217 1.48536 5.96202 1.48529C5.8901 1.44964 5.81092 1.43109 5.73066 1.43109C5.65039 1.43109 5.57121 1.44964 5.49929 1.48529ZM6.19432 1.01898L6.42615 0.552435C6.21003 0.445045 5.97198 0.38916 5.73066 0.38916C5.48933 0.38916 5.25128 0.445045 5.03517 0.552435L5.03401 0.55301L0.867434 2.6363C0.86722 2.63641 0.867006 2.63651 0.866792 2.63662C0.606685 2.76602 0.387788 2.96536 0.234679 3.21226C0.081443 3.45937 0.000179611 3.74433 2.53139e-05 4.0351L2.52518e-05 8.99334C-0.00162631 9.28392 0.0777662 9.56922 0.229306 9.8172C0.381192 10.0657 0.599511 10.2669 0.859632 10.398L0.861072 10.3987L5.02865 12.4825C5.24579 12.5911 5.48525 12.6477 5.72805 12.6477C5.9708 12.6477 6.21021 12.5912 6.4273 12.4825C6.42735 12.4825 6.42725 12.4826 6.4273 12.4825L10.5939 10.3993C10.5941 10.3992 10.5942 10.3991 10.5944 10.399C10.8546 10.2696 11.0735 10.0702 11.2266 9.82329C11.3799 9.57618 11.4611 9.29122 11.4613 9.00046V4.03537C11.4611 3.74461 11.3799 3.45937 11.2266 3.21226C11.0735 2.96537 10.8546 2.76603 10.5945 2.63663C10.5943 2.63652 10.5941 2.63641 10.5939 2.6363L6.4273 0.55301L6.19432 1.01898Z" fill="#9C9B9E" />
//                   <path fillRule="evenodd" clipRule="evenodd" d="M0.221734 3.23975C0.350407 2.9824 0.663338 2.87809 0.920684 3.00676L5.73066 5.41175L10.5406 3.00676C10.798 2.87809 11.1109 2.9824 11.2396 3.23975C11.3683 3.49709 11.2639 3.81002 11.0066 3.9387L5.96364 6.46017C5.81697 6.53351 5.64434 6.53351 5.49767 6.46017L0.454718 3.9387C0.197371 3.81002 0.0930612 3.49709 0.221734 3.23975Z" fill="#9C9B9E" />
//                   <path fillRule="evenodd" clipRule="evenodd" d="M5.73066 5.47324C6.01838 5.47324 6.25162 5.70648 6.25162 5.99421V12.1208C6.25162 12.4085 6.01838 12.6417 5.73066 12.6417C5.44293 12.6417 5.20969 12.4085 5.20969 12.1208V5.99421C5.20969 5.70648 5.44293 5.47324 5.73066 5.47324Z" fill="#9C9B9E" />
//                   <path fillRule="evenodd" clipRule="evenodd" d="M2.65986 1.85397C2.78853 1.59663 3.10146 1.49232 3.35881 1.62099L8.56847 4.22582C8.82582 4.3545 8.93013 4.66743 8.80146 4.92477C8.67278 5.18212 8.35985 5.28643 8.10251 5.15776L2.89284 2.55292C2.63549 2.42425 2.53118 2.11132 2.65986 1.85397Z" fill="#9C9B9E" />
//                 </svg>
//                 <span className="count">1</span>
//               </span>
//             </div></TD>


//           );
//         } else if (cell.column.id === "ttn_status") {
//           return (

//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>Нова пошта очікує надходженняя</TD>


//           );
//         } else if (cell.column.id === "user") {
//           return (

//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>Лебедев Евгений Александровичasdsd</TD>


//           );
//         } else if (cell.column.id === "office") {
//           return (
//             <TD className={`otdel-block max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>Розничный магазин</TD>

//           );
//         } else if (cell.column.id === "date1") {
//           return (

//             <TD className={`date-block ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>2020-00-00 <span className="date-time">00:00:00</span></TD>

//           );
//         }
//         else if (cell.column.id === "date2") {
//           return (
//             <TD className={`max-lenght date-time ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>03/00:03:23</TD>
//           );
//         }
//         else if (cell.column.id === "date3") {
//           return (
//             <TD className={`max-lenght date-time ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>00:03:25</TD>

//           );
//         } else if (cell.column.id === "date4") {
//           return (
//             <TD className={`date-block ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>2020-00-00 <span className="date-time">00:00:00</span></TD>

//           );
//         } else if (cell.column.id === "date5") {
//           return (
//             <TD className={`max-lenght date-time ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>03/00:03:23</TD>
//           );
//         } else if (cell.column.id === "date6") {
//           return (
//             <TD className={`date-block ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>2021-01-01 <span className="date-time">11:51:51</span></TD>
//           );
//         } else if (cell.column.id === "date7") {
//           return (
//             <TD className={`date-block ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>2021-04-08 <span className="date-time">22:50:51</span></TD>
//           );
//         } else if (cell.column.id === "date8") {
//           return (
//             <TD className={`date-block ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>2021-01-01 <span className="date-time">11:51:51</span></TD>
//           );
//         } else if (cell.column.id === "site") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>www.abrakadabra.com</TD>

//           );
//         } else if (cell.column.id === "ip") {
//           return (
//             <TD className={`${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>192.168.168.168</TD>
//           );
//         } else if (cell.column.id === "utm1") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>source</TD>
//           );
//         } else if (cell.column.id === "utm2") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>source</TD>

//           );
//         } else if (cell.column.id === "utm3") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>source</TD>

//           );
//         } else if (cell.column.id === "utm4") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>source</TD>

//           );
//         } else if (cell.column.id === "utm5") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>source</TD>

//           );
//         } else if (cell.column.id === "additional_1") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>

//           );
//         } else if (cell.column.id === "additional_2") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_3") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_4") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_5") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_6") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_7") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_8") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_9") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_10" && cell.column.show) {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         }

//       })}
//     </tr>
//   );
// };





// function useShow(
//   elementRef,
// ) {
//   const [value, setValue] = useState(false)
//   const [node1, setNode] = useState(null)
//   const [tooltip, setTooltip] = useState(false)
//   let node = null;
//   const handleMouseEnter = e => {
//     setValue(true);
//     setTooltip(true);
//     node.parentElement.style.cssText += 'z-index: 12';
//   }
//   const handleMouseDown = e => {
//     setValue(true);
//     setTooltip(false);
//     node.parentElement.style.cssText += 'z-index: 12';
//     node.removeEventListener('mouseleave', handleMouseLeave);
//     node.removeEventListener('mouseenter', handleMouseEnter);
//   }
//   const handleMouseLeave = e => {
//     setValue(false);
//     setTooltip(false)
//   }
//   const handleMouseUp = e => {
//     setValue(false)
//     node.addEventListener('mouseenter', handleMouseEnter)
//     node.addEventListener('mouseleave', handleMouseLeave)
//     node.parentElement.style.cssText += 'z-index: 4';
//   }


//   const handleDblClick = e => {
//     node.parentElement.style.minWidth = '0px'
//     node.dataset.dbl = true;
//   }

//   useEffect(() => {
//     setNode(elementRef.current)
//     node = elementRef?.current;
//     if (node) {
//       node.addEventListener('mouseenter', handleMouseEnter)
//       node.addEventListener('mouseleave', handleMouseLeave)
//       node.addEventListener('mousedown', handleMouseDown)
//       document.addEventListener('mouseup', handleMouseUp)
//       node.addEventListener('dblclick', handleDblClick)


//       return () => {
//         node.removeEventListener('mouseenter', handleMouseEnter)
//         node.removeEventListener('mouseleave', handleMouseLeave)
//         node.removeEventListener('mousedown', handleMouseDown)
//         node.removeEventListener('mouseup', handleMouseUp)
//         node.addEventListener('dblclick', handleDblClick)

//       }
//     }
//   }, [elementRef])

//   return { value, node1, setValue, handleMouseEnter, handleMouseLeave, tooltip }
// }


// const TH = ({ column, tooltip, index }) => {
//   const hoverRef = useRef(null)
//   const isHover = useShow(hoverRef);
//   function getStyle(style, {isDragging}) {
//     if (style.transform) {
//       const axisLockY = style.transform.split(',')[0] + ',0px)';
//       return {
//         ...style,
//         transform: isDragging ?  axisLockY : 'translate(0px, 0px)',
//         background: isDragging ? '#FFE600' : '',
//       };
//     }
//     return style
//   }
//   if (column.id === 'status')
//     return (
//       <th {...column.getHeaderProps()}>{column.render("Header")}
//         <div className="tooltip" dangerouslySetInnerHTML={{ __html: tooltip }} ></div>

//         <DTD
//           axis="x" position={{ x: 0, y: 0 }}
//           onStop={(e, d) => {
//             setTimeout(() => {
//               if (isHover.node1.dataset.dbl === "false") {
//                 isHover.node1.parentElement.style.minWidth = isHover.node1.parentElement.clientWidth + (e.pageX - isHover.node1.dataset.x) + 'px';
//               }
//             }, 300);
//           }
//           }
//         ><div ref={hoverRef} data-dbl={false} data-x={isHover.node1?.getBoundingClientRect().x} style={{ height: '100vh', width: '20px', cursor: 'pointer', position: 'absolute', top: 0, right: '-10px', zIndex: 10 }}>
//             <div className={isHover.value ? 'show' : 'hide'} style={{ width: '1px', position: 'absolute', right: '10px' }}></div>
//           </div></DTD></th>
//     )
//   else
//     return (
//       <Draggable isDragDisabled={isHover.value} key={column.id} draggableId={column.id} index={index}>
//         {(provided, snapshot) => (
//           <th ref={provided.innerRef}
//             {...provided.draggableProps}
//             {...provided.dragHandleProps}
//             style={getStyle(provided.draggableProps.style, snapshot)}><span onClick={e => {
//             }} >{column.render("Header")}</span>
//             <div className="tooltip" dangerouslySetInnerHTML={{ __html: tooltip }} ></div>
//             <DTD
//               axis="x" position={{ x: 0, y: 0 }}
//               onStop={(e, d) => {
//                 setTimeout(() => {
//                   if (isHover.node1.dataset.dbl === "false") {
//                     isHover.node1.parentElement.style.minWidth = isHover.node1.parentElement.clientWidth + (e.pageX - isHover.node1.dataset.x) + 'px';
//                   }
//                 }, 700);
//                 isHover.node1.dataset.dbl = false;

//               }
//               }
//             ><div ref={hoverRef} data-dbl={false} data-x={isHover.node1?.getBoundingClientRect().x} style={{ width: '20px', cursor: 'pointer', position: 'absolute', top: 0, right: '-10px', zIndex: 10 }}>
//                 <div className={isHover.value ? 'show' : 'hide'} style={!isHover.tooltip ? { height: '100vh', width: '1px', position: 'absolute', right: '10px' } : { height: '25px', width: '1px', position: 'absolute', right: '10px' }}></div>
//                 <div className="tooltip" style={isHover.tooltip ? { visibility: "visible", opacity: 1, top: '27px', left: '0px' } : { visibility: 'hidden', opacity: 0 }}>{"rwwerewrwerewrwerewrewrewrewrerwe"}</div>
//               </div></DTD>
//           </th>
//         )}
//       </Draggable>
//     )
// }



// function Table({ columns, tooltip, data, onDoubleClick, setOrder }) {

//   const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);

//     return result;
//   };

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     allColumns,
//     rows,
//     setColumnOrder,
//     prepareRow
//   } = useTable({
//     columns,
//     data
//   }, useSticky, useColumnOrder);
//   const currentColOrder = React.useRef();
//   return (
//     <SimpleBar style={{ maxHeight: '100vh', maxWidth: '100vw' }}>

//       <table className='order'   {...getTableProps()}>
//         <thead>

//           <DragDropContext

//             onDragStart={() => {
//               setOrder(50);
//               currentColOrder.current = allColumns.map(o => o.id);
//             }}
//             onDragUpdate={(dragUpdateObj, b) => {
//               const colOrder = [...currentColOrder.current];
//               const sIndex = dragUpdateObj.source.index;
//               const dIndex =
//                 dragUpdateObj.destination && dragUpdateObj.destination.index;

//               if (typeof sIndex === "number" && typeof dIndex === "number") {
//                 colOrder.splice(sIndex, 1);
//                 colOrder.splice(dIndex, 0, dragUpdateObj.draggableId);
//                 setColumnOrder(colOrder);
//               }
//             }}
//             onDragEnd={e=> setOrder(500)}
//           >
//             <Droppable droppableId="droppable" direction="horizontal">
//               {(provided, snapshot) => (
//                 headerGroups.map((headerGroup) => (

//                   <tr ref={provided.innerRef} {...provided.droppableProps} {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map((column, index) => {
//                       if (column.id === "id") {
//                         return (
//                           <th {...column.getHeaderProps()}>{column.render("Header")}</th>)
//                       } else if (column.id === "status") {
//                         return (
//                           <TH tooltip={tooltip[column.id]} key={column.id} column={column} index={index} />
//                         )
//                       }
//                       else if (column.id === "additional_10" && column.show) {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_9") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_8") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_7") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_6") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_5") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_4") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_3") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_2") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_1") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "utm1") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "utm2") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "utm3") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "utm4") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "utm5") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date1") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date2") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date3") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date4") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date5") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date6") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date7") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date8") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "ip") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "site") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "office") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "phone") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "bayer_name") {

//                         return (<TH tooltip={tooltip[column.id]} key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "localization") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "comment") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "status") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "total") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "pay") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "ttn") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "user") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "delivery") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "addres") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "ttn_status") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       } else if (column.id === "product") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }

//                     }
//                     )}
//                     {provided.placeholder}
//                   </tr>
//                 ))


//               )}
//             </Droppable>
//           </DragDropContext>
//         </thead>
//         <tbody {...getTableBodyProps()}>

//           {rows.map((row, i) => {
//             prepareRow(row);
//             return (
//               <ROW onDoubleClick={onDoubleClick} key={i} row={row} i={i} />
//             );
//           })}
//         </tbody>
//       </table>
//     </SimpleBar>
//   );
// }






// function Order({ token }) {
//   const [isModal, setModal] = useState(false);
//   const [order, setOrder] = useState(100);

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'test',
//         columns: [
//           {
//             Header: "ID",
//             accessor: "id"
//           },
//           {
//             Header: "Статус",
//             accessor: "status"
//           },
//         ],
//         sticky: "left"
//       },
//       {
//         Header: "Name",
//         columns: [

//           {
//             Header: "Покупатель",
//             accessor: "bayer_name",
//           },
//           {
//             Header: "Страна",
//             accessor: "localization"
//           },
//           {
//             Header: "Телефон",
//             accessor: "phone"
//           },
//           {
//             Header: "Комментарий",
//             accessor: "comment"
//           },
//           {
//             Header: "Сумма",
//             accessor: "total"
//           },
//           {
//             Header: "Товар",
//             accessor: "product"
//           },
//           {
//             Header: "Оплата",
//             accessor: "pay"
//           },

//           {
//             Header: "Доставка",
//             accessor: "delivery"
//           },
//           {
//             Header: "Адрес доставки",
//             accessor: "addres"
//           },
//           {
//             Header: "ТТН",
//             accessor: "ttn"
//           },
//           {
//             Header: "ТТН статус",
//             accessor: "ttn_status"
//           },
//           {
//             Header: "Пользователь",
//             accessor: "user"
//           },
//           {
//             Header: "Отдел",
//             accessor: "office"
//           },
//           {
//             Header: "Добавлен",
//             accessor: "date1"
//           },
//           {
//             Header: "Открыт",
//             accessor: "date2"
//           },
//           {
//             Header: "Принят",
//             accessor: "date3"
//           },
//           {
//             Header: "Закреплён",
//             accessor: "date4"
//           },
//           {
//             Header: "Передан",
//             accessor: "date5"
//           },
//           {
//             Header: "Отправлен",
//             accessor: "date6"
//           },
//           {
//             Header: "Обновлён",
//             accessor: "date7"
//           },
//           {
//             Header: "Завершён",
//             accessor: "date8"
//           },
//           {
//             Header: "Сайт",
//             accessor: "site"
//           },
//           {
//             Header: "IP",
//             accessor: "ip"
//           },
//           {
//             Header: "utm_source",
//             accessor: "utm1"
//           },
//           {
//             Header: "utm_medium",
//             accessor: "utm2"
//           },
//           {
//             Header: "utm_term",
//             accessor: "utm3"
//           },
//           {
//             Header: "utm_content",
//             accessor: "utm4"
//           },
//           {
//             Header: "utm_campaign",
//             accessor: "utm5"
//           },

//           {
//             Header: "Доп. поле 1",
//             accessor: "additional_1"
//           },
//           {
//             Header: "Доп. поле 2",
//             accessor: "additional_2"
//           },
//           {
//             Header: "Доп. поле 3",
//             accessor: "additional_3"
//           },
//           {
//             Header: "Доп. поле 4",
//             accessor: "additional_4"
//           },
//           {
//             Header: "Доп. поле 5",
//             accessor: "additional_5"
//           },
//           {
//             Header: "Доп. поле 6",
//             accessor: "additional_6"
//           },
//           {
//             Header: "Доп. поле 7",
//             accessor: "additional_7"
//           },
//           {
//             Header: "Доп. поле 8",
//             accessor: "additional_8"
//           },
//           {
//             Header: "Доп. поле 9",
//             accessor: "additional_9"
//           },
//           {
//             Header: "Доп. поле 10",
//             accessor: "additional_10",
//             show: true,
//           }
//         ]
//       },
//     ],
//     []
//   );
//   const data = React.useMemo(async () => {
//     // var myHeaders = new Headers();
//     // myHeaders.append("authorization", "Bearer " + token);
//     // return await fetch('http://localhost/test', { headers: myHeaders, method: "GET" }).then(x => x.json()).then(x => { return x.data })
//   }, []);

//   // useEffect(async () => {
//   //   setData(await data);
//   // })

//   return (
//     <Styles>
//       <Table columns={columns} tooltip={tooltip} setOrder={setOrder} onDoubleClick={() => { setModal(true); }} data={[...new Array(order)].map(x => new Object(data))} />
//       <Zakazy onClose={() => { setModal(false); }} isModal={isModal} />
//     </Styles>
//   );
// }

// export default Order;

// import React, { useEffect, useState, useRef } from "react";
// import styled from "styled-components";
// import { useTable, useColumnOrder } from "react-table";
// import { ukraine } from '../../../until/images';
// import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar.min.css';
// import { useSticky } from "react-table-sticky";
// import Zakazy from "./zakazy";
// import * as DTD from 'react-draggable';
// import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
// let data = {
//   id: '4234',
//   status: 'Новый',
//   bayer_name: 'bayer_namebayer_namebayer_namebayer_namebayer_name',
//   localization: 'ua',
//   phone: '+435435436536',
//   comment: '423432423432423432423423432',
//   total: '432423.00',
//   product: 'rest',
//   pay: '2423',
//   delivery: '423',
//   addres: 'address',
//   ttn: 'ttn',
//   ttn_status: 'Новый',
//   ttn_user: 'test',
//   office: 'Новый',
//   date1: 'Новый',
//   date2: 'Новый',
//   date3: 'Новый',
//   date4: 'Новый',
//   date5: 'Новый',
//   date6: 'Новый',
//   date7: 'Новый',
//   date8: 'Новый',
//   site: 'Новый',
//   ip: 'Новый',
//   utm1: 'Новый',
//   utm2: 'Новый',
//   utm3: 'Новый',
//   utm4: 'Новый',
//   utm5: 'Новый',
//   additional_1: 'Новый',
//   additional_2: 'Новый',
//   additional_3: 'Новый',
//   additional_4: 'Новый',
//   additional_5: 'Новый',
//   additional_6: 'Новый',
//   additional_7: 'Новый',
//   additional_8: 'Новый',
//   additional_9: 'Новый',
//   additional_10: 'Новый',
// }

// const Styles = styled.div`


// table {
//   padding-left: 10px;
// }

// @charset "UTF-8";
// .container-info-settings {
//   margin-left: 51px;
//   margin-top: 35px;
//   margin-right: 0px;
//   width: 100%;
//   height: 100%;
//   justify-content: space-between;
//   position: relative;
// }
// @media (max-width: 800px) {
//   .container-info-settings {
//     margin-left: 30px;
//   }
// }
// .container-info-settings .simplebar-track.simplebar-vertical {
//   background-color: transparent;
//   width: 8px;
//   margin-right: 0;
//   margin-top: 0;
//   margin-bottom: 40px;
//   cursor: pointer;
// }
// .container-info-settings .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   width: 8px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   cursor: pointer;
// }
// .container-info-settings .simplebar-track.simplebar-horizontal {
//   background-color: transparent;
//   height: 8px;
//   margin-right: 10px;
//   margin-bottom: 40px;
//   margin-left: 20px;
//   cursor: pointer;
//   padding-top: 2px;
//   bottom: 0;
//   border-radius: 10px;
// }
// .container-info-settings .simplebar-track.simplebar-horizontal .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   border-radius: 10px;
//   height: 8px;
//   left: 0;
//   right: 0;
//   bottom: 38px;
//   top: 0px;
//   cursor: pointer;
//   margin-bottom: 2px;
// }
// .container-info-settings .simplebar-scrollbar.simplebar-visible:before {
//   opacity: 1;
//   cursor: pointer;
// }
// .container-info-settings .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
//   height: 10px;
// }
// .container-info-settings .simplebar-content-wrapper {
//   padding-right: 15px;
//   padding-left: 15px;
//   padding-bottom: 30px;
// }

// @media screen and (max-height: 800px) {
//   .container-info-settings .simplebar-track.simplebar-horizontal {
//     margin-bottom: 60px;
//   }
// }
// .crm-header {
//   -ms-overflow-style: none;
//   /* IE 10+ */
//   scrollbar-width: none;
//   /* Firefox */
// }

// .crm-header::-webkit-scrollbar {
//   /* chrome based */
//   width: 0px;
//   /* ширина scrollbar'a */
//   background: transparent;
//   /* опционально */
// }

// .crm-header {
//   display: flex;
//   margin: 0;
//   position: fixed;
//   padding-bottom: 5px;
//   top: 55px;
//   z-index: 333;
//   background-color: white;
//   overflow-x: scroll;
//   width: 100%;
//   white-space: nowrap;
//   flex-wrap: nowrap;
//   padding-right: 20px;
// }
// .crm-header .crm-header-link:last-child {
//   margin-right: 180px;
// }
// .crm-header .crm-header-link {
//   padding-left: 10px;
//   padding-right: 10px;
//   padding-top: 5px;
//   padding-bottom: 5px;
//   position: relative;
//   text-align: center;
//   margin: 1px;
//   cursor: pointer;
//   font-size: 12px;
//   user-select: none;
// }
// .crm-header .crm-header-link .count-link {
//   font-size: 10px;
//   opacity: 0.5;
// }

// .color-64a727 {
//   background-color: #64a727;
// }

// .color-515151 {
//   background-color: rgba(81, 81, 81, 0.7);
// }

// .color-C4C4C4 {
//   background-color: #C4C4C4;
// }

// .color-83004F {
//   background-color: #83004F;
// }

// .color-91d100 {
//   background-color: #91d100;
// }

// .color-C94F62 {
//   background-color: #C94F62;
// }

// .color-fd7777 {
//   background-color: #fd7777;
// }

// .color-9C02A7 {
//   background-color: #9C02A7;
// }

// .color-1DD787 {
//   background-color: #1DD787;
// }

// .color-00CC00 {
//   background-color: #00CC00;
// }

// .color-00B9FF {
//   background-color: #00B9FF;
// }

// .color-ffe600 {
//   background-color: #d4c72a;
// }

// .color-FF0000 {
//   background-color: #FF0000;
// }

// .color-FFCF00 {
//   background-color: #FFCF00;
// }

// .color-91D100 {
//   background-color: #91D100;
// }

// .color-da291c {
//   background-color: #da291c;
// }

// .color-6996D3 {
//   background-color: #6996D3;
// }

// .color-3415B0 {
//   background-color: #3415B0;
// }

// .color-B0FF00 {
//   background-color: #B0FF00;
// }

// .color-470010 {
//   background-color: #470010;
// }

// .color-9C02A7 {
//   background-color: #9C02A7;
// }

// .color-form {
//   height: 2px;
//   width: 100%;
//   position: absolute;
//   bottom: 2px;
//   border-radius: 2px;
//   left: 0;
//   opacity: 0.75;
// }

// .btn-toggle {
//   font-weight: 600;
//   position: relative;
// }
// .btn-toggle .color-form {
//   height: 4px;
//   bottom: 2px;
// }

// .arrow-bg {
//   background-color: white;
//   height: 25px;
//   width: 40px;
//   position: fixed;
//   top: 60px;
//   right: 0;
//   z-index: 2222;
// }
// .arrow-bg .arrow-next {
//   width: 13px;
//   height: 13px;
//   background-image: url("../img/arrow-down.svg");
//   background-size: 100%;
//   background-repeat: no-repeat;
//   position: absolute;
//   transform: rotate(-90deg);
//   opacity: 0.7;
//   left: 20px;
//   cursor: pointer;
// }
// .arrow-bg .arrow-prev {
//   width: 13px;
//   height: 13px;
//   background-image: url("../img/arrow-down.svg");
//   background-size: 100%;
//   background-repeat: no-repeat;
//   position: absolute;
//   transform: rotate(90deg);
//   opacity: 0.7;
//   cursor: pointer;
// }

// #hoverSelect {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 95px;
//   height: 38px;
//   line-height: 38px;
//   text-align: center;
//   font-size: 12px;
//   background: #515151;
//   color: white;
//   border-radius: 3px;
//   z-index: 999;
//   display: none;
// }

// .crm-table {
//   margin-top: 0px;
//   z-index: 888;
//   position: relative;
// }

// .container-info-settings tr td {
//   white-space: nowrap;
//   height: 18px;
//   line-height: 14px;
// }
// .container-info-settings tr td .input-style {
//   background: #d4d4d4;
//   outline: none;
//   border: 1px white solid;
//   width: 100%;
//   box-sizing: border-box;
//   padding: 1px 3px;
//   font-size: 10px;
//   line-height: 14px;
// }
// .container-info-settings tr td .input-style::placeholder {
//   font-size: 10px;
// }
// .container-info-settings tr td .count-message {
//   background: rgba(156, 155, 158, 0.4);
//   box-sizing: border-box;
//   position: relative;
//   left: -2px;
//   width: 17%;
//   border-right: 2px white solid;
// }
// .container-info-settings tr td .tel-style {
//   width: 83%;
// }
// .container-info-settings tr td .date-block {
//   background: rgba(156, 155, 158, 0.4);
//   padding: 0 3px;
//   border: 1px white solid;
//   min-width: 113px;
//   justify-content: space-between;
//   display: flex;
//   text-align: center;
//   color: rgba(0, 0, 0, 0.5);
//   line-height: 16px;
// }
// .container-info-settings tr td .date-block .date-style {
//   width: 50px;
//   text-align: center;
//   border: none;
//   font-size: 9px;
//   background-color: transparent;
//   color: rgba(0, 0, 0, 0.5);
//   padding: 0;
// }

// .date-block {
//   text-align: center;
// }

// .ttn-search {
//   background: rgba(156, 155, 158, 0.4);
//   outline: none;
//   border: 1px white solid;
//   width: 100%;
//   box-sizing: border-box;
//   font-size: 10px;
//   line-height: 14px;
// }
// .ttn-search .ttn-style {
//   width: 12%;
//   outline: none;
//   border: none;
//   background: transparent;
//   padding: 0;
//   line-height: 16px;
//   box-sizing: border-box;
//   padding-left: 3px;
// }
// .ttn-search .ttn-style:first-child {
//   width: 86%;
//   border-right: 2px solid white;
// }

// table {
//   border-collapse: collapse;
//   width: max-content;
//   font-size: 12px;
//   white-space: nowrap;
// }
// .order tr td {

//   padding: 0px 4px;

// }
// .hover:nth-child(odd) {
//   background-color: #F1F1F1;
// }

// tr th {
//   white-space: nowrap;
//   padding: 2.5px 4px;
//   font-size: 14px;
//   font-weight: 400;
//   border-radius: 3px 3px 0 0;
//   padding-top: 7px;
// }
// tr th:nth-child(odd) {
//   background-color: #F1F1F1;
// }

// .header-search {
//   padding: 0;
//   font-size: 10px;
//   height: 18px;
//   box-sizing: border-box;
// }

// .table-header {
//   height: 24px;
//   cursor: grab;
// }

// .crm-input {
//   height: 18px;
// }

// .crm-main-table {
//   height: 18px;

// }
// .crm-main-table .country-block {
//   text-align: center;
//   position: relative;
// }
// .crm-main-table .country-flag {
//   text-align: center;
//   box-sizing: border-box;
//   height: 18px;
//   position: relative;
//   top: 2px;
// }
// .crm-main-table .country-flag .flag {
//   height: 13px;
// }
// .crm-main-table .svg-pos {
//   position: relative;
//   top: 2px;
// }
// .crm-main-table .svg-pos img {
//   height: 15px;
// }
// .crm-main-table .svg-pos .samovivoz path {
//   fill: #515151;
// }
// .crm-main-table .tel-colum {
//   justify-content: space-between;
//   width: inherit;
//   display: flex;
//   height: 18px;
// }
// .crm-main-table .tel-colum .svg-wrap {
//   display: inline-block;
// }
// .crm-main-table .tel-colum .svg-wrap .count {
//   top: -2px;
// }
// .crm-main-table .tel {
//   text-align: center;
//   line-height: 16px;
//   display: inline-block;
// }
// .crm-main-table .tel .mob-icon {
//   position: relative;
//   top: 2px;
//   margin-right: 5px;
//   height: 13px;
// }
// .crm-main-table .svg-wrap {
//   margin-left: 5px;
//   position: relative;
//   margin-right: 3px;
//   top: 2px;
// }
// .crm-main-table .svg-wrap .count {
//   position: absolute;
//   border-radius: 100%;
//   font-size: 7px;
//   width: 8px;
//   height: 8px;
//   font-weight: 600;
//   background-color: #9C9B9E;
//   color: white;
//   text-align: center;
//   right: -3px;
//   line-height: 9px;
//   top: -5px;
//   border: 1.28571px solid #F1F1F1;
// }
// .crm-main-table .product-colum {
//   text-align: center;
//   position: relative;
//   top: -1px;
// }
// .crm-main-table .product-colum .svg-wrap {
//   margin-left: 3px;
//   margin-right: 8px;
//   position: relative;
//   top: 4px;
// }
// .crm-main-table .product-colum .svg-wrap .count {
//   right: -2px;
//   border: 1.28571px solid #F1F1F1;
// }
// .crm-main-table .colum-pay {
//   text-align: center;
// }
// .crm-main-table .ttn-block .ttn-position {
//   justify-content: space-between;
//   height: auto;
//   width: 100%;
//   display: flex;
//   align-items: center;
// }
// .crm-main-table .ttn-block .ttn-number {
//   display: inline-block;
//   text-align: left;
// }
// .crm-main-table .ttn-block .svg-wrap {
//   margin-left: 3px;
//   margin-right: 3px;
//   display: inline-block;
// }
// .crm-main-table .ttn-block .svg-wrap .count {
//   right: -4px;
//   top: -3px;
// }

// .crm-main-table.select-toggle:hover {
//   position: relative;
//   color: white;
// }
// // .crm-main-table.select-toggle:hover td {
// //   background-color: rgba(81, 81, 81, 0.7);
// // }

// .crm-main-table.selected-lock:hover {
//   position: relative;
// }
// .crm-main-table.selected-lock:hover td {
//   background: rgba(198, 193, 190, 0.5);
//   color: rgba(0, 0, 0, 0.2);
// }
// .crm-main-table.selected-lock:hover .id-table:before {
//   content: "";
//   background: none;
//   background-image: url("../img/lock.svg");
//   width: 12px;
//   height: 12px;
//   position: absolute;
//   top: 3px;
//   left: -15px;
// }

// .select-toggle {
//   position: relative;
// }
// .select-toggle img {
//   opacity: 0.5;
// }
// .select-toggle td:nth-child(odd) {
//   background-color: rgba(81, 81, 81, 0.7);
// }
// .select-toggle td {
//   color: white;
//   background-color: rgba(81, 81, 81, 0.7);
// }
// .select-toggle .np-ico path {
//   opacity: 0.5;
// }
// .select-toggle .cls-2 {
//   opacity: 0.5;
// }
// .select-toggle .date-time {
//   color: white;
// }
// .select-toggle .svg-convert path {
//   stroke: #F1F1F1;
// }
// .select-toggle .svg-wrap .count {
//   background: #F1F1F1;
//   color: #515151;
//   border: 1.28571px solid rgba(81, 81, 81, 0.7);
// }
// .select-toggle .product-colum .svg-wrap path {
//   fill: #F1F1F1;
// }
// .select-toggle .product-colum .svg-wrap .count {
//   background: #F1F1F1;
//   border: 1.28571px solid rgba(81, 81, 81, 0.7);
// }
// .select-toggle .card path {
//   fill: #F1F1F1;
// }
// .select-toggle .coin path {
//   fill: #F1F1F1;
// }
// .select-toggle .coin circle {
//   stroke: #F1F1F1;
// }
// .select-toggle .convert-pay path {
//   fill: #F1F1F1;
// }
// .select-toggle .svg-decline path {
//   stroke: #F1F1F1;
// }
// .select-toggle .svg-trade path {
//   stroke: #F1F1F1;
// }
// .select-toggle .svg-box path {
//   fill: #F1F1F1;
// }
// .select-toggle .id-table:before {
//   content: "";
//   width: 7px;
//   height: 18px;
//   position: absolute;
//   background: #515151;
//   left: -7px;
//   border-radius: 3px 0 0 3px;
//   top: 0;
// }

// .selected-lock {
//   position: relative;
// }
// .selected-lock td {
//   background: rgba(198, 193, 190, 0.5);
//   color: rgba(0, 0, 0, 0.2);
// }
// .selected-lock td:nth-child(odd) {
//   background: rgba(198, 193, 190, 0.5);
// }
// .selected-lock img {
//   opacity: 0.5;
// }
// .selected-lock .np-ico path {
//   opacity: 0.5;
// }
// .selected-lock .cls-2 {
//   opacity: 0.5;
// }
// .selected-lock .svg-wrap .count {
//   border: 1.28571px solid #d8d8d8;
// }
// .selected-lock .id-table:before {
//   content: "";
//   background-image: url("../img/lock.svg");
//   width: 12px;
//   height: 12px;
//   position: absolute;
//   top: 3px;
//   left: -15px;
// }
// .selected-lock .date-time {
//   color: #c5bfbf;
// }

// .id-table {
//   position: relative;
// }

// // .crm-main-table:hover {
// //   position: relative;
// // }
// // .crm-main-table:hover td {
// //   background: rgba(81, 81, 81, 0.3);
// // }
// .crm-main-table .id-table:before {
//   content: "";
//   width: 7px;
//   height: 18px;
//   position: absolute;
//   background: transparent;
//   // opacity: 0;
//   left: -7px;
//   border-radius: 3px 0 0 3px;
//   top: 0;
// }

// .crm-main-table:hover .id-table:before {
//   background: #515151;
// }

// .crm-main-table .status-table {
//   text-align: center;
// }
// .crm-main-table .status-table .color-form2 {
//   text-align: left;
//   line-height: 14px;
//   box-sizing: border-box;
//   border-radius: 3px;
//   color: white;
//   opacity: 0.75;
//   padding: 0.5px 6px;
//   margin: 0 3px;
// }

// .new-order {
//   position: relative;
// }




// .new-order:after {
//   content: "\\2022";
//   width: 22px;
//   height: 20px;
//   background-color: white;
//   position: absolute;
//   color: #00B9FF;
//   font-size: 25px;
//   left: -22px;
//   text-align: center;
//   line-height: 0px;
//   top: 8px;
//   z-index: -1;
// }

// .color-928c42 {
//   background-color: #928c42;
// }

// .color-470010 {
//   background-color: #470010;
// }

// .color-83004F {
//   background-color: #83004F;
// }

// .color-C94F62 {
//   background-color: #C94F62;
// }

// .color-9C02A7 {
//   background-color: #9C02A7;
// }

// .color-1DD787 {
//   background-color: #1DD787;
// }

// .color-00CC00 {
//   background-color: #00CC00;
// }

// .color-00B9FF {
//   background-color: #00B9FF;
// }

// .color-FF0000 {
//   background-color: #FF0000;
// }

// .color-FFCF00 {
//   background-color: #FFCF00;
// }

// .color-91D100 {
//   background-color: #91D100;
// }

// .color-F50296 {
//   background-color: #F50296;
// }

// .color-6996D3 {
//   background-color: #6996D3;
// }

// .color-3415B0 {
//   background-color: #3415B0;
// }

// .color-B0FF00 {
//   background-color: #B0FF00;
// }

// .colum-country {
//   position: relative;
//   box-sizing: border-box;
// }
// .colum-country .country-btn {
//   text-align: left;
//   display: block;
//   cursor: pointer;
//   line-height: 16px;
//   height: 16px;
//   border: 1px solid white;
//   background: #d4d4d4;
//   color: rgba(0, 0, 0, 0.5);
//   padding-left: 3px;
// }
// .colum-country .country-btn .list-item img {
//   position: absolute;
//   left: 4px;
// }
// .colum-country .country-btn .list-item span {
//   margin-left: 20px;
// }
// .colum-country .country-btn .list {
//   height: 14px;
// }
// .status-table {
//   left: 36px !important;
//   background: white;
// }

// .status-table-hover{
//   background: #cbcbcb !important;
// }

// table thead tr:first-child {
//   display: none;
// }
// .order tr th:nth-child(2){
//   left: 36px !important;
//   background: white;
//   z-index: 10 !important;

// }
// .order tr th:nth-child(1){
//   background: #f1f1f1;
//   z-index: 10 !important;
// }


// .order tr th:nth-child(1):after {
//   content: "";
//   width: 22px;
//   height: 35px;
//   background-color: white;
//   position: absolute;
//   color: #00B9FF;
//   font-size: 25px;
//   left: -22px;
//   text-align: center;
//   line-height: 0px;
//   top: 0px;
//   z-index: -1;
// }

// .order tr td:nth-child(1){
//   background: #f1f1f1;
//   z-index: 11 !important;
// }
// .colum-country .country-btn:after {
//   content: "";
//   position: absolute;
//   background-image: url("../img/arrow-down.svg");
//   width: 6px;
//   height: 3px;
//   background-size: 100%;
//   top: 7px;
//   right: 4px;
//   opacity: 0.5;
// }
// .colum-country .block1 .list:hover:before {
//   background-color: rgba(81, 81, 81, 0.3);
//   content: "";
//   width: 4px;
//   height: 4px;
//   position: absolute;
//   border-radius: 100%;
//   top: 6px;
//   left: -2px;
// }
// .colum-country .block1 {
//   background: white;
//   z-index: 3;
//   color: black;
//   display: none;
//   position: absolute;
//   text-align: left;
//   overflow-x: hidden;
//   height: 90px;
//   box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
//   cursor: pointer;
//   width: 55px;
// }
// .colum-country .block1 .list-item img {
//   position: absolute;
//   left: 5px;
// }
// .colum-country .block1 .list-item span {
//   margin-left: 25px;
// }
// .colum-country .block1 .list {
//   height: 18px;
//   line-height: 18px;
//   margin-left: 5px;
// }
// .colum-country .block1 .list:first-child span {
//   padding-left: 3px;
//   margin-left: 0;
// }
// .colum-country .block1 .simplebar-track.simplebar-vertical {
//   background-color: rgba(0, 0, 0, 0.1);
//   width: 3px;
//   margin-top: 5px;
//   margin-bottom: 5px;
//   margin-right: 5px;
//   bottom: 0;
//   border-radius: 5px;
// }
// .colum-country .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   width: 3px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: -9px;
//   top: 0;
// }
// .colum-country .block1 .simplebar-scrollbar.simplebar-visible:before {
//   opacity: 1;
// }
// .colum-country .block1 .simplebar-content-wrapper {
//   padding: 0;
// }

// .colum-pay {
//   position: relative;
//   box-sizing: border-box;
// }
// .colum-pay .pay-btn {
//   text-align: left;
//   display: block;
//   cursor: pointer;
//   line-height: 16px;
//   height: 16px;
//   border: 1px solid white;
//   background: #d4d4d4;
//   color: rgba(0, 0, 0, 0.5);
//   padding-left: 3px;
// }
// .colum-pay .pay-btn .list-item img {
//   margin-right: 5px;
//   width: 12px;
//   height: 12px;
//   top: 2px;
//   position: relative;
//   margin-left: 18px;
// }
// .colum-pay .pay-btn:after {
//   content: "";
//   position: absolute;
//   background-image: url("../img/arrow-down.svg");
//   width: 6px;
//   height: 3px;
//   background-size: 100%;
//   top: 7px;
//   right: 4px;
//   opacity: 0.5;
// }
// .colum-pay .block1 .list:hover:before {
//   background-color: rgba(81, 81, 81, 0.3);
//   content: "";
//   width: 4px;
//   height: 4px;
//   position: absolute;
//   border-radius: 100%;
//   top: 6px;
//   left: 6px;
// }
// .colum-pay .block1 {
//   background: white;
//   z-index: 3;
//   color: black;
//   display: none;
//   position: absolute;
//   text-align: left;
//   overflow-x: hidden;
//   height: 90px;
//   box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
//   cursor: pointer;
//   width: 55px;
// }
// .colum-pay .block1 .simplebar-track.simplebar-vertical {
//   background-color: rgba(0, 0, 0, 0.1);
//   width: 3px;
//   margin-top: 5px;
//   margin-bottom: 5px;
//   margin-right: 5px;
//   bottom: 0;
//   border-radius: 5px;
// }
// .colum-pay .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   width: 3px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: -9px;
//   top: 0;
// }
// .colum-pay .block1 .simplebar-scrollbar.simplebar-visible:before {
//   opacity: 1;
// }
// .colum-pay .block1 .simplebar-content-wrapper {
//   padding: 0;
// }
// .colum-pay .block1 .list {
//   position: relative;
//   height: 18px;
// }
// .colum-pay .block1 .list img {
//   margin-right: 5px;
//   width: 12px;
//   height: 12px;
//   position: relative;
//   top: 2px;
// }
// .colum-pay .block1 .list-item {
//   width: 100%;
//   box-sizing: border-box;
//   display: block;
//   text-align: center;
// }

// .colum-delivery {
//   box-sizing: border-box;
//   border: none;
//   font-size: 10px;
//   position: relative;
// }
// .colum-delivery .delivery-btn {
//   text-align: left;
//   display: block;
//   cursor: pointer;
//   line-height: 16px;
//   height: 16px;
//   border: 1px solid white;
//   background: #d4d4d4;
//   color: rgba(0, 0, 0, 0.5);
//   padding-left: 3px;
// }
// .colum-delivery .delivery-btn .list-item img {
//   position: relative;
//   left: 0px;
//   bottom: -2px;
//   width: 12px;
//   height: 12px;
// }
// .colum-delivery .delivery-btn .list-item {
//   text-align: center;
//   line-height: 18px;
// }
// .colum-delivery .delivery-btn:after {
//   content: "";
//   position: absolute;
//   background-image: url("../img/arrow-down.svg");
//   width: 6px;
//   height: 3px;
//   background-size: 100%;
//   top: 7px;
//   right: 4px;
//   opacity: 0.5;
// }
// .colum-delivery .block1 .list:hover:before {
//   background-color: rgba(81, 81, 81, 0.3);
//   content: "";
//   width: 4px;
//   height: 4px;
//   position: absolute;
//   border-radius: 100%;
//   top: 6px;
//   left: 6px;
// }
// .colum-delivery .block1 {
//   z-index: 222;
//   color: black;
//   display: none;
//   position: absolute;
//   text-align: left;
//   height: 90px;
//   width: 100%;
//   cursor: pointer;
//   z-index: 2222;
//   top: 18px;
//   background-color: white;
//   box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
// }
// .colum-delivery .block1 .simplebar-track.simplebar-vertical {
//   background-color: rgba(0, 0, 0, 0.1);
//   width: 3px;
//   margin-top: 5px;
//   margin-bottom: 5px;
//   margin-right: 5px;
//   bottom: 0;
//   border-radius: 5px;
// }
// .colum-delivery .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   width: 3px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: -9px;
//   top: 0;
// }
// .colum-delivery .block1 .simplebar-track.simplebar-horizontal {
//   background-color: rgba(0, 0, 0, 0.1);
//   height: 3px;
//   bottom: 0;
//   margin: 0;
//   border-radius: 5px;
//   margin-left: 5px;
//   padding-top: 0;
// }
// .colum-delivery .block1 .simplebar-track.simplebar-horizontal .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   height: 3px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   margin: 0;
//   margin-left: 5px;
// }
// .colum-delivery .block1 .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
//   height: 3px;
//   left: 0;
//   top: 0;
// }
// .colum-delivery .block1 .simplebar-scrollbar.simplebar-visible:before {
//   opacity: 1;
// }
// .colum-delivery .block1 .simplebar-content-wrapper {
//   padding: 0;
// }
// .colum-delivery .block1 .list {
//   position: relative;
//   height: 16px;
// }
// .colum-delivery .block1 .list img {
//   margin-right: 5px;
//   width: 11px;
//   height: 11px;
//   position: relative;
//   top: 2px;
// }
// .colum-delivery .block1 .list-item {
//   margin-left: 5px;
//   width: 100%;
//   box-sizing: border-box;
//   display: block;
//   height: 16px;
// }

// .colum-employe {
//   box-sizing: border-box;
//   border: none;
//   font-size: 10px;
//   position: relative;
// }
// .colum-employe .employe-btn {
//   text-align: left;
//   display: block;
//   cursor: pointer;
//   line-height: 16px;
//   height: 16px;
//   border: 1px solid white;
//   background: #d4d4d4;
//   color: rgba(0, 0, 0, 0.5);
//   padding-left: 3px;
//   min-width: 100px;
// }
// .colum-employe .employe-btn .list-item img {
//   position: relative;
//   left: 0px;
//   bottom: -2px;
//   width: 12px;
//   height: 12px;
// }
// .colum-employe .employe-btn .list-item {
//   text-align: center;
//   line-height: 18px;
// }
// .colum-employe .employe-btn:after {
//   content: "";
//   position: absolute;
//   background-image: url("../img/arrow-down.svg");
//   width: 6px;
//   height: 3px;
//   background-size: 100%;
//   top: 7px;
//   right: 4px;
//   opacity: 0.5;
// }
// .colum-employe .block1 {
//   z-index: 222;
//   color: black;
//   display: none;
//   position: absolute;
//   text-align: left;
//   height: 90px;
//   width: 100%;
//   overflow-x: hidden;
//   cursor: pointer;
//   z-index: 2222;
//   top: 18px;
//   background-color: white;
//   box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
// }
// .colum-employe .block1 .simplebar-track.simplebar-vertical {
//   background-color: rgba(0, 0, 0, 0.1);
//   width: 3px;
//   margin-top: 5px;
//   margin-bottom: 5px;
//   margin-right: 5px;
//   bottom: 0;
//   border-radius: 5px;
// }
// .colum-employe .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   width: 3px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: -9px;
//   top: 0;
// }
// .colum-employe .block1 .simplebar-scrollbar.simplebar-visible:before {
//   opacity: 1;
// }
// .colum-employe .block1 .simplebar-content-wrapper {
//   padding: 0;
// }
// .colum-employe .block1 .list {
//   position: relative;
//   height: 16px;
// }
// .colum-employe .block1 .list img {
//   margin-right: 5px;
//   width: 11px;
//   height: 11px;
//   position: relative;
//   top: 2px;
// }
// .colum-employe .block1 .list-item {
//   margin-left: 5px;
//   width: 100%;
//   box-sizing: border-box;
//   display: block;
//   height: 16px;
// }

// .colum-depart {
//   box-sizing: border-box;
//   border: none;
//   font-size: 10px;
//   position: relative;
// }
// .colum-depart .depart-btn {
//   text-align: left;
//   display: block;
//   cursor: pointer;
//   line-height: 16px;
//   height: 16px;
//   border: 1px solid white;
//   background: #d4d4d4;
//   color: rgba(0, 0, 0, 0.5);
//   padding-left: 3px;
//   min-width: 110px;
// }
// .colum-depart .depart-btn .list-item img {
//   position: relative;
//   left: 0px;
//   bottom: -2px;
//   width: 12px;
//   height: 12px;
// }
// .colum-depart .depart-btn .list-item {
//   text-align: center;
//   line-height: 18px;
// }
// .colum-depart .depart-btn:after {
//   content: "";
//   position: absolute;
//   background-image: url("../img/arrow-down.svg");
//   width: 6px;
//   height: 3px;
//   background-size: 100%;
//   top: 7px;
//   right: 4px;
//   opacity: 0.5;
// }
// .colum-depart .block1 {
//   z-index: 222;
//   color: black;
//   display: none;
//   position: absolute;
//   text-align: left;
//   height: 90px;
//   width: 100%;
//   overflow-x: hidden;
//   cursor: pointer;
//   z-index: 2222;
//   top: 18px;
//   background-color: white;
//   box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
// }
// .colum-depart .block1 .simplebar-track.simplebar-vertical {
//   background-color: rgba(0, 0, 0, 0.1);
//   width: 3px;
//   margin-top: 5px;
//   margin-bottom: 5px;
//   margin-right: 5px;
//   bottom: 0;
//   border-radius: 5px;
// }
// .colum-depart .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   width: 3px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: -9px;
//   top: 0;
// }
// .colum-depart .block1 .simplebar-scrollbar.simplebar-visible:before {
//   opacity: 1;
// }
// .colum-depart .block1 .simplebar-content-wrapper {
//   padding: 0;
// }
// .colum-depart .block1 .list {
//   position: relative;
//   height: 16px;
// }
// .colum-depart .block1 .list img {
//   margin-right: 5px;
//   width: 11px;
//   height: 11px;
//   position: relative;
//   top: 2px;
// }
// .colum-depart .block1 .list-item {
//   margin-left: 5px;
//   width: 100%;
//   box-sizing: border-box;
//   display: block;
//   height: 16px;
// }

// .z-index {
//   z-index: -1;
//   position: relative;
// }

// .block1.toggle {
//   display: block;
// }

// .list {
//   position: relative;
// }

// .select-btn {
//   background-color: rgba(81, 81, 81, 0.7);
// }

// .wrap-hide {
//   opacity: 0;
//   visibility: hidden;
//   transition: 0.2s;
//   -webkit-transition: 0.2s;
//   -moz-transition: 0.2s;
//   bottom: -18px;
//   position: relative;
// }

// .wrap-open {
//   opacity: 1;
//   visibility: visible;
//   transition: 0.2s;
//   -moz-transition: 0.2s;
//   -webkit-transition: 0.2s;
//   transition: 0.2s;
//   bottom: 0;
// }

// .svg-delivery {
//   text-align: center;
// }

// .date-time {
//   font-size: 10px;
//   color: #7b7b7b;
//   margin-left: 4px;
//   text-align: center;
// }



// .max-lenght-comment {
//   position: relative;
// }

// .colum-sum {
//   text-align: right;
// }
// .simplebar-track.simplebar-vertical {
//   background-color: transparent;
//   width: 8px;
//   margin-right: 0;
//   margin-top: 0;
//   margin-bottom: 40px;
//   cursor: pointer;
// }
// .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   width: 8px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   cursor: pointer;
// }
// .simplebar-track.simplebar-horizontal {
//   background-color: transparent;
//   height: 8px;
//   margin-right: 10px;
//   margin-bottom: 40px;
//   margin-left: 20px;
//   cursor: pointer;
//   padding-top: 2px;
//   bottom: 0;
//   border-radius: 10px;
//   // top: -2px;
// }
// .simplebar-track.simplebar-horizontal .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   border-radius: 10px;
//   height: 8px;
//   left: 0;
//   right: 0;
//   bottom: 38px;
//   top: 0px;
//   cursor: pointer;
//   margin-bottom: 2px;
// }
// .simplebar-scrollbar.simplebar-visible:before {
//   opacity: 1;
//   cursor: pointer;
// }
// .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
//   height: 10px;
// }
// .simplebar-content-wrapper {
//   padding-right: 15px;
//   padding-left: 15px;
//   padding-bottom: 30px;
// }
// thead th .hide {
//   background-color: transparent;
// }





// thead th .show {
//   background-color: red;
//   z-index: 10 !important;
// }


// thead th .show:before {
//   position: absolute;
//   content: '';
//   background-color: red;
//   height: 25px;
//   width: 3px;
//   right: -3px;
//   z-index: 10 !important;


// }
// thead th .show:after {
//   position: absolute;
//   content: '';
//   background-color: red;
//   height: 25px;
//   width: 3px;
//   right: 1px;
//   z-index: 10 !important;
// }

// thead th {
//   position: relative;
// }


// .text-tooltip {

//     font-size: 12px;
//     display: block;
//     margin-top: 7px;

// }

// thead th .tooltip {
//     position: absolute;
//     user-select: none;
//     max-height: 100px;
//     background-color: rgba(81, 81, 81, 0.6);
//     border-radius: 3px;
//     top: 0;
//     color: white;
//     padding: 4px 5px;
//     white-space: normal;
//     width: max-content;
//     word-break: break-word;
//     text-align: left;
//     max-width: 300px;
//     opacity: 0;
//     visibility: hidden;
//     // backdrop-filter: blur(4px);
// }



// // thead th:hover .tooltip {
// //     visibility: visible;
// //     opacity: 1;
// //     top: 22px;
// //     z-index: 999 !important;
// //     transition: 0.3s;
// //     -moz-transition: 0.3s;
// //     -webkit-transition: 0.3s;
// //     transition-delay: 0.3s;
// //     -moz-transition-delay: 0.3s;
// //     -webkit-transition-delay: 0.3s;
// // }

// // thead th:hover .tooltip {
// //   top: 27px;
// //   left: 0px;
// //   transition-delay: 0.5s;
// //   -moz-transition-delay: 0.5s;
// //   -webkit-transition-delay: 0.5s;
// // }
// `;

// let tooltip = {
//   id: 'Идентификатор/номер заказа<br /><span class:"text-tooltip">Используется для поиска и передачи заказа между пользователями CRM</span>',
//   status: 'Текущий статус заказа<br /><span className="text-tooltip">Используется для контроля, анализа и отслеживания заказа в CRM</span>',
//   bayer_name: 'Фамилия имя отчество покупателя<br /><span className="text-tooltip">Используется для автоматического заполнения товарно-транспортной накладной почтовой службы</span>',
//   country: 'Страна за которой закреплён заказ<br /><span class:"text-tooltip">Используется для разделения заказов из разных стран</span>',
//   tel: 'Телефон покупателя<br /><span class:"text-tooltip">Используется для:<br />-Автоматического заполнения товарно-транспортной накладной почтовой службы<br />-Автоматической отправки SMS</span>',
//   comm: '...',
//   sum: 'Итоговая сумма заказа',
//   product: '...',
//   pay: 'Используемый вид оплаты',
//   delivery: 'Используемый вид доставки',
//   addres: '...',
//   ttn: 'Номер товарно-транспортной накладной',
//   ttnStatus: 'Информация за последний час о статусе посылки<br /><span class:"text-tooltip">Используется для:<br />-автоматической отправки SMS<br />-автоматической смены статусов в CRM</span>',
//   prinyal: 'Пользователь подтвердивший заказ<br /><span class:"text-tooltip">Закрепление происходит автоматически при изменении статуса заказа на «Принят». Используется для расчета зарплаты/премии сотрудника</span>',
//   depart: 'Используемый отдел в заказе<br /><span class:"text-tooltip">Заказ с "отделом" виден только тем пользователям у которых есть доступ к сооответствующему отделу</span>',
//   add: 'Дата и время добавления заказа в CRM',
//   open: 'Время между добавлением заказа в CRM и первым взаимодействием с ним<br /><span class:"text-tooltip">Показывает сколько времени покупатель ожидал звонка/ответа</span>',
//   opened: 'Последний пользователь открывший заказ<br /><span class:"text-tooltip">Используется для выявления сотрудников "ворующих" заказы</span>',
//   prinyatZa: 'Время между открытием заказа и изменением его статуса на «Принят»<br /><span class:"text-tooltip">Используется для оценки времени потраченого на подтверждение заказа</span>',
//   accepted: 'Дата и время изменения статуса заказа на «Принят»<br /><span class:"text-tooltip">Используется для расчета зарплаты/премии сотрудника за период врмени</span>',
//   pered: 'Время между изменением статуса заказа на "Принят" и получением посылки почтовой службой<br /><span class:"text-tooltip">Показывает сколько времени покупатель ожидал отправку заказа</span>',
//   send: 'Дата и время получения посылки почтовой службой<br /><span class:"text-tooltip">Используется для контроля сотрудников отвечающих за отправку заказа</span>',
//   change: 'Дата и время последнего изменения заказа',
//   changed: 'Последний пользователь изменивший заказ',
//   finish: 'Дата и время завершения заказа<br /><span class:"text-tooltip">Используется для подтверждения завершения заказа. Дальнейшее редактирование заказа сотрудниками не имеющим доступ, запрещен</span>',
//   site: 'Источник заказа',
//   ip: 'IP адрес устройства с которого поступил заказ<br /><span class:"text-tooltip">Используется для отслеживания и блокировки в случаях спама</span>',
//   utm: 'UTM-метка<br /><span class:"text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span>',
//   field: 'Дополнительное поле заказа<br /><span class:"text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span>',
// }

// const TD = ({ id, className, children, style }) => {

//   return (
//     <td
//       className={className}
//       id={id}
//       style={style}
//     >
//       {children}
//     </td>
//   );
// }

// function useHover(
//   elementRef,
// ) {
//   const [value, setValue] = useState(false)

//   const handleMouseEnter = () => setValue(true)
//   const handleMouseLeave = () => setValue(false)

//   useEffect(() => {
//     const node = elementRef?.current

//     if (node) {
//       node.addEventListener('mouseenter', handleMouseEnter)
//       node.addEventListener('mouseleave', handleMouseLeave)

//       return () => {
//         node.removeEventListener('mouseenter', handleMouseEnter)
//         node.removeEventListener('mouseleave', handleMouseLeave)
//       }
//     }
//   }, [elementRef])

//   return value
// }




// const ROW = ({ row, i, onDoubleClick }) => {
//   const hoverRef = useRef(null)
//   const isHover = useHover(hoverRef)
//   return (
//     <tr onDoubleClick={onDoubleClick} ref={hoverRef} style={isHover ? { background: '#cbcbcb' } : { background: 'transparent' }} className="crm-main-table" key={i} {...row.getRowProps()}>
//       {row.cells.map((cell) => {
//         if (cell.column.id === "id") {
//           return (
//             <TD className={`id-table new-order  ${!isHover ? 'hover' : '  status-table-hover'}`} {...cell.getCellProps()}> 2432</TD>
//           );
//         } else if (cell.column.id === "status") {
//           return (
//             <TD className={`status-table  ${!isHover ? 'hover' : '  status-table-hover'}`} {...cell.getCellProps()}>   <div className="new-zakaz color-515151 color-form2"><span className="max-lenght-status">Новый</span></div></TD>
//           );
//         } else if (cell.column.id === "bayer_name") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>Александр Сергеевич</TD>

//           );
//         } else if (cell.column.id === "localization") {
//           return (
//             <TD className={`country-block  ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}><span className="country-flag"><img className="flag ua" src={ukraine} alt="flag" /></span></TD>

//           );
//         } else if (cell.column.id === "phone") {
//           return (

//             <TD className={`tel-colum  ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}><span className="tel"><img className="mob-icon" src={ukraine} alt="" /><span className="tel-number max-lenght">+38 096 514 25 46</span></span>
//               <span className="svg-wrap">
//                 <svg className="svg-convert" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.64296 12.1067H3.21439C2.03582 12.1067 1.07153 11.1424 1.07153 9.96387V4.60672C1.07153 3.42815 2.03582 2.46387 3.21439 2.46387H9.64296C10.8215 2.46387 11.7858 3.42815 11.7858 4.60672V9.96387C11.7858 11.1424 10.8215 12.1067 9.64296 12.1067Z" stroke="#9C9B9E" strokeWidth="1.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                   <path d="M3.2146 5.14307L5.67889 7.60735C6.10746 8.03592 6.75031 8.03592 7.17888 7.60735L9.64317 5.14307" stroke="#9C9B9E" strokeWidth="1.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//                 <span className="count">4</span>
//               </span></TD>

//           );
//         }
//         else if (cell.column.id === "comment") {
//           return (

//             <TD className={`max-lenght-comment  ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>Lorem ipsum dolor sit amet consectetur.</TD>

//           );
//         }
//         else if (cell.column.id === "total") {
//           return (

//             <TD className={`colum-sum  ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>9555.40</TD>

//           );
//         }
//         else if (cell.column.id === "product") {
//           return (


//             <TD className={`${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}><span className="product-colum">
//               <span className="svg-wrap">
//                 <svg className="svg-box" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fillRule="evenodd" clipRule="evenodd" d="M5.49929 1.48529C5.49914 1.48536 5.49898 1.48544 5.49883 1.48552L1.33225 3.56881L1.33109 3.56938C1.2443 3.61251 1.17125 3.679 1.12018 3.76137C1.06911 3.84371 1.04203 3.93866 1.04196 4.03555C1.04196 4.03552 1.04196 4.03558 1.04196 4.03555V8.9986C1.04128 9.09569 1.06774 9.19104 1.11837 9.27388C1.16891 9.35659 1.24153 9.42356 1.32805 9.46725C1.32791 9.46718 1.32819 9.46732 1.32805 9.46725L5.49477 11.5506C5.56715 11.5868 5.64712 11.6058 5.72805 11.6058C5.80898 11.6058 5.88881 11.5869 5.96118 11.5507L10.1291 9.46675L10.1302 9.46617C10.217 9.42304 10.2901 9.35655 10.3411 9.27419C10.3922 9.19182 10.4193 9.09683 10.4194 8.99991V4.03565C10.4193 3.93873 10.3922 3.84374 10.3411 3.76137C10.2901 3.679 10.217 3.61251 10.1302 3.56938L10.1291 3.56881L5.96249 1.48552C5.96233 1.48544 5.96217 1.48536 5.96202 1.48529C5.8901 1.44964 5.81092 1.43109 5.73066 1.43109C5.65039 1.43109 5.57121 1.44964 5.49929 1.48529ZM6.19432 1.01898L6.42615 0.552435C6.21003 0.445045 5.97198 0.38916 5.73066 0.38916C5.48933 0.38916 5.25128 0.445045 5.03517 0.552435L5.03401 0.55301L0.867434 2.6363C0.86722 2.63641 0.867006 2.63651 0.866792 2.63662C0.606685 2.76602 0.387788 2.96536 0.234679 3.21226C0.081443 3.45937 0.000179611 3.74433 2.53139e-05 4.0351L2.52518e-05 8.99334C-0.00162631 9.28392 0.0777662 9.56922 0.229306 9.8172C0.381192 10.0657 0.599511 10.2669 0.859632 10.398L0.861072 10.3987L5.02865 12.4825C5.24579 12.5911 5.48525 12.6477 5.72805 12.6477C5.9708 12.6477 6.21021 12.5912 6.4273 12.4825C6.42735 12.4825 6.42725 12.4826 6.4273 12.4825L10.5939 10.3993C10.5941 10.3992 10.5942 10.3991 10.5944 10.399C10.8546 10.2696 11.0735 10.0702 11.2266 9.82329C11.3799 9.57618 11.4611 9.29122 11.4613 9.00046V4.03537C11.4611 3.74461 11.3799 3.45937 11.2266 3.21226C11.0735 2.96537 10.8546 2.76603 10.5945 2.63663C10.5943 2.63652 10.5941 2.63641 10.5939 2.6363L6.4273 0.55301L6.19432 1.01898Z" fill="#9C9B9E" />
//                   <path fillRule="evenodd" clipRule="evenodd" d="M0.221734 3.23975C0.350407 2.9824 0.663338 2.87809 0.920684 3.00676L5.73066 5.41175L10.5406 3.00676C10.798 2.87809 11.1109 2.9824 11.2396 3.23975C11.3683 3.49709 11.2639 3.81002 11.0066 3.9387L5.96364 6.46017C5.81697 6.53351 5.64434 6.53351 5.49767 6.46017L0.454718 3.9387C0.197371 3.81002 0.0930612 3.49709 0.221734 3.23975Z" fill="#9C9B9E" />
//                   <path fillRule="evenodd" clipRule="evenodd" d="M5.73066 5.47324C6.01838 5.47324 6.25162 5.70648 6.25162 5.99421V12.1208C6.25162 12.4085 6.01838 12.6417 5.73066 12.6417C5.44293 12.6417 5.20969 12.4085 5.20969 12.1208V5.99421C5.20969 5.70648 5.44293 5.47324 5.73066 5.47324Z" fill="#9C9B9E" />
//                   <path fillRule="evenodd" clipRule="evenodd" d="M2.65986 1.85397C2.78853 1.59663 3.10146 1.49232 3.35881 1.62099L8.56847 4.22582C8.82582 4.3545 8.93013 4.66743 8.80146 4.92477C8.67278 5.18212 8.35985 5.28643 8.10251 5.15776L2.89284 2.55292C2.63549 2.42425 2.53118 2.11132 2.65986 1.85397Z" fill="#9C9B9E" />
//                 </svg>
//                 <span className="count">1</span>
//               </span>
//               <span className="max-lenght-product">Чай Монастырский (1шт. x 100.00 = 10012321</span></span></TD>

//           );
//         } else if (cell.column.id === "pay") {
//           return (

//             <TD className={`colum-pay ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}><span className="svg-wrap">
//               <svg className="card" width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M8.92 10.8C8.92 10.9867 9.1 11.14 9.32666 11.14H10.9H12.4733C12.7 11.14 12.88 10.9867 12.88 10.8V10.46C12.88 10.2733 12.7 10.12 12.4733 10.12H10.9H9.32666C9.1 10.12 8.92 10.2733 8.92 10.46V10.8V10.8Z" fill="#9C9B9E" />
//                 <path d="M13.8022 2H2.21379C0.999001 2 0.015984 3.025 0.015984 4.29167L0.015984 5.6C0.015984 5.61667 0 5.625 0 5.65C0 5.675 0.015984 5.68333 0.015984 5.7L0.015984 11.7083C0.015984 12.975 0.999001 14 2.21379 14H13.8022C15.017 14 16 12.975 16 11.7083V4.29167C16 3.025 15.017 2 13.8022 2ZM2.21379 3.25H13.8022C14.3536 3.25 14.8012 3.71667 14.8012 4.29167V5.025H1.21479V4.29167C1.21479 3.71667 1.66234 3.25 2.21379 3.25ZM13.8022 12.75H2.21379C1.66234 12.75 1.21479 12.2833 1.21479 11.7083V6.275H14.8012V11.7167C14.8012 12.2833 14.3536 12.75 13.8022 12.75Z" fill="#9C9B9E" />
//               </svg>
//             </span></TD>

//           );
//         } else if (cell.column.id === "delivery") {
//           return (


//             <TD className={`svg-delivery ${!isHover ? 'hover' : ''}`}   {...cell.getCellProps()}><span className="svg-pos"><img src={ukraine} alt="" /></span></TD>

//           );
//         } else if (cell.column.id === "addres") {
//           return (

//             <TD className={`addres-block ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>Євминка, Відділення №1: вул. Київ</TD>


//           );
//         } else if (cell.column.id === "ttn") {
//           return (
//             <TD className={`ttn-block ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}><div className="ttn-position">
//               <span className="ttn-number max-lenght">20454</span>
//               <span className="svg-wrap">
//                 <svg className="svg-box" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fillRule="evenodd" clipRule="evenodd" d="M5.49929 1.48529C5.49914 1.48536 5.49898 1.48544 5.49883 1.48552L1.33225 3.56881L1.33109 3.56938C1.2443 3.61251 1.17125 3.679 1.12018 3.76137C1.06911 3.84371 1.04203 3.93866 1.04196 4.03555C1.04196 4.03552 1.04196 4.03558 1.04196 4.03555V8.9986C1.04128 9.09569 1.06774 9.19104 1.11837 9.27388C1.16891 9.35659 1.24153 9.42356 1.32805 9.46725C1.32791 9.46718 1.32819 9.46732 1.32805 9.46725L5.49477 11.5506C5.56715 11.5868 5.64712 11.6058 5.72805 11.6058C5.80898 11.6058 5.88881 11.5869 5.96118 11.5507L10.1291 9.46675L10.1302 9.46617C10.217 9.42304 10.2901 9.35655 10.3411 9.27419C10.3922 9.19182 10.4193 9.09683 10.4194 8.99991V4.03565C10.4193 3.93873 10.3922 3.84374 10.3411 3.76137C10.2901 3.679 10.217 3.61251 10.1302 3.56938L10.1291 3.56881L5.96249 1.48552C5.96233 1.48544 5.96217 1.48536 5.96202 1.48529C5.8901 1.44964 5.81092 1.43109 5.73066 1.43109C5.65039 1.43109 5.57121 1.44964 5.49929 1.48529ZM6.19432 1.01898L6.42615 0.552435C6.21003 0.445045 5.97198 0.38916 5.73066 0.38916C5.48933 0.38916 5.25128 0.445045 5.03517 0.552435L5.03401 0.55301L0.867434 2.6363C0.86722 2.63641 0.867006 2.63651 0.866792 2.63662C0.606685 2.76602 0.387788 2.96536 0.234679 3.21226C0.081443 3.45937 0.000179611 3.74433 2.53139e-05 4.0351L2.52518e-05 8.99334C-0.00162631 9.28392 0.0777662 9.56922 0.229306 9.8172C0.381192 10.0657 0.599511 10.2669 0.859632 10.398L0.861072 10.3987L5.02865 12.4825C5.24579 12.5911 5.48525 12.6477 5.72805 12.6477C5.9708 12.6477 6.21021 12.5912 6.4273 12.4825C6.42735 12.4825 6.42725 12.4826 6.4273 12.4825L10.5939 10.3993C10.5941 10.3992 10.5942 10.3991 10.5944 10.399C10.8546 10.2696 11.0735 10.0702 11.2266 9.82329C11.3799 9.57618 11.4611 9.29122 11.4613 9.00046V4.03537C11.4611 3.74461 11.3799 3.45937 11.2266 3.21226C11.0735 2.96537 10.8546 2.76603 10.5945 2.63663C10.5943 2.63652 10.5941 2.63641 10.5939 2.6363L6.4273 0.55301L6.19432 1.01898Z" fill="#9C9B9E" />
//                   <path fillRule="evenodd" clipRule="evenodd" d="M0.221734 3.23975C0.350407 2.9824 0.663338 2.87809 0.920684 3.00676L5.73066 5.41175L10.5406 3.00676C10.798 2.87809 11.1109 2.9824 11.2396 3.23975C11.3683 3.49709 11.2639 3.81002 11.0066 3.9387L5.96364 6.46017C5.81697 6.53351 5.64434 6.53351 5.49767 6.46017L0.454718 3.9387C0.197371 3.81002 0.0930612 3.49709 0.221734 3.23975Z" fill="#9C9B9E" />
//                   <path fillRule="evenodd" clipRule="evenodd" d="M5.73066 5.47324C6.01838 5.47324 6.25162 5.70648 6.25162 5.99421V12.1208C6.25162 12.4085 6.01838 12.6417 5.73066 12.6417C5.44293 12.6417 5.20969 12.4085 5.20969 12.1208V5.99421C5.20969 5.70648 5.44293 5.47324 5.73066 5.47324Z" fill="#9C9B9E" />
//                   <path fillRule="evenodd" clipRule="evenodd" d="M2.65986 1.85397C2.78853 1.59663 3.10146 1.49232 3.35881 1.62099L8.56847 4.22582C8.82582 4.3545 8.93013 4.66743 8.80146 4.92477C8.67278 5.18212 8.35985 5.28643 8.10251 5.15776L2.89284 2.55292C2.63549 2.42425 2.53118 2.11132 2.65986 1.85397Z" fill="#9C9B9E" />
//                 </svg>
//                 <span className="count">1</span>
//               </span>
//             </div></TD>


//           );
//         } else if (cell.column.id === "ttn_status") {
//           return (

//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>Нова пошта очікує надходженняя</TD>


//           );
//         } else if (cell.column.id === "user") {
//           return (

//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>Лебедев Евгений Александровичasdsd</TD>


//           );
//         } else if (cell.column.id === "office") {
//           return (
//             <TD className={`otdel-block max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>Розничный магазин</TD>

//           );
//         } else if (cell.column.id === "date1") {
//           return (

//             <TD className={`date-block ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>2020-00-00 <span className="date-time">00:00:00</span></TD>

//           );
//         }
//         else if (cell.column.id === "date2") {
//           return (
//             <TD className={`max-lenght date-time ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>03/00:03:23</TD>
//           );
//         }
//         else if (cell.column.id === "date3") {
//           return (
//             <TD className={`max-lenght date-time ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>00:03:25</TD>

//           );
//         } else if (cell.column.id === "date4") {
//           return (
//             <TD className={`date-block ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>2020-00-00 <span className="date-time">00:00:00</span></TD>

//           );
//         } else if (cell.column.id === "date5") {
//           return (
//             <TD className={`max-lenght date-time ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>03/00:03:23</TD>
//           );
//         } else if (cell.column.id === "date6") {
//           return (
//             <TD className={`date-block ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>2021-01-01 <span className="date-time">11:51:51</span></TD>
//           );
//         } else if (cell.column.id === "date7") {
//           return (
//             <TD className={`date-block ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>2021-04-08 <span className="date-time">22:50:51</span></TD>
//           );
//         } else if (cell.column.id === "date8") {
//           return (
//             <TD className={`date-block ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>2021-01-01 <span className="date-time">11:51:51</span></TD>
//           );
//         } else if (cell.column.id === "site") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>www.abrakadabra.com</TD>

//           );
//         } else if (cell.column.id === "ip") {
//           return (
//             <TD className={`${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>192.168.168.168</TD>
//           );
//         } else if (cell.column.id === "utm1") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>source</TD>
//           );
//         } else if (cell.column.id === "utm2") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>source</TD>

//           );
//         } else if (cell.column.id === "utm3") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>source</TD>

//           );
//         } else if (cell.column.id === "utm4") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`} {...cell.getCellProps()}>source</TD>

//           );
//         } else if (cell.column.id === "utm5") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>source</TD>

//           );
//         } else if (cell.column.id === "additional_1") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>

//           );
//         } else if (cell.column.id === "additional_2") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_3") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_4") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_5") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_6") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_7") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_8") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_9") {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         } else if (cell.column.id === "additional_10" && cell.column.show) {
//           return (
//             <TD className={`max-lenght ${!isHover ? 'hover' : ''}`}  {...cell.getCellProps()}>Доп поле</TD>
//           );
//         }

//       })}
//     </tr>
//   );
// };





// function useShow(
//   elementRef,
// ) {
//   const [value, setValue] = useState(false)
//   const [node1, setNode] = useState(null)
//   const [tooltip, setTooltip] = useState(false)
//   let node = null;
//   const handleMouseEnter = e => {
//     setValue(true);
//     setTooltip(true);
//     node.parentElement.style.cssText += 'z-index: 12';
//   }
//   const handleMouseDown = e => {
//     setValue(true);
//     setTooltip(false);
//     node.parentElement.style.cssText += 'z-index: 12';
//     node.removeEventListener('mouseleave', handleMouseLeave);
//     node.removeEventListener('mouseenter', handleMouseEnter);
//   }
//   const handleMouseLeave = e => {
//     setValue(false);
//     setTooltip(false)
//   }
//   const handleMouseUp = e => {
//     setValue(false)
//     node.addEventListener('mouseenter', handleMouseEnter)
//     node.addEventListener('mouseleave', handleMouseLeave)
//     node.parentElement.style.cssText += 'z-index: 4';
//   }


//   const handleDblClick = e => {
//     node.parentElement.style.minWidth = '0px'
//     node.dataset.dbl = true;
//   }

//   useEffect(() => {
//     setNode(elementRef.current)
//     node = elementRef?.current;
//     if (node) {
//       node.addEventListener('mouseenter', handleMouseEnter)
//       node.addEventListener('mouseleave', handleMouseLeave)
//       node.addEventListener('mousedown', handleMouseDown)
//       document.addEventListener('mouseup', handleMouseUp)
//       node.addEventListener('dblclick', handleDblClick)


//       return () => {
//         node.removeEventListener('mouseenter', handleMouseEnter)
//         node.removeEventListener('mouseleave', handleMouseLeave)
//         node.removeEventListener('mousedown', handleMouseDown)
//         node.removeEventListener('mouseup', handleMouseUp)
//         node.addEventListener('dblclick', handleDblClick)

//       }
//     }
//   }, [elementRef])

//   return { value, node1, setValue, handleMouseEnter, handleMouseLeave, tooltip }
// }


// const TH = ({ column, tooltip, index }) => {
//   const hoverRef = useRef(null)
//   const isHover = useShow(hoverRef);
//   function getStyle(style, {isDragging}) {
//     if (style.transform) {
//       const axisLockY = style.transform.split(',')[0] + ',0px)';
//       return {
//         ...style,
//         transform: isDragging ?  axisLockY : 'translate(0px, 0px)',
//         background: isDragging ? '#FFE600' : '',
//       };
//     }
//     return style
//   }
//   if (column.id === 'status')
//     return (
//       <th {...column.getHeaderProps()}>{column.render("Header")}
//         <div className="tooltip" dangerouslySetInnerHTML={{ __html: tooltip }} ></div>

//         <DTD
//           axis="x" position={{ x: 0, y: 0 }}
//           onStop={(e, d) => {
//             setTimeout(() => {
//               if (isHover.node1.dataset.dbl === "false") {
//                 isHover.node1.parentElement.style.minWidth = isHover.node1.parentElement.clientWidth + (e.pageX - isHover.node1.dataset.x) + 'px';
//               }
//             }, 300);
//           }
//           }
//         ><div ref={hoverRef} data-dbl={false} data-x={isHover.node1?.getBoundingClientRect().x} style={{ height: '100vh', width: '20px', cursor: 'pointer', position: 'absolute', top: 0, right: '-10px', zIndex: 10 }}>
//             <div className={isHover.value ? 'show' : 'hide'} style={{ width: '1px', position: 'absolute', right: '10px' }}></div>
//           </div></DTD></th>
//     )
//   else
//     return (
//       <Draggable isDragDisabled={isHover.value} key={column.id} draggableId={column.id} index={index}>
//         {(provided, snapshot) => (
//           <th ref={provided.innerRef}
//             {...provided.draggableProps}
//             {...provided.dragHandleProps}
//             style={getStyle(provided.draggableProps.style, snapshot)}><span onClick={e => {
//             }} >{column.render("Header")}</span>
//             <div className="tooltip" dangerouslySetInnerHTML={{ __html: tooltip }} ></div>
//             <DTD
//               axis="x" position={{ x: 0, y: 0 }}
//               onStop={(e, d) => {
//                 setTimeout(() => {
//                   if (isHover.node1.dataset.dbl === "false") {
//                     isHover.node1.parentElement.style.minWidth = isHover.node1.parentElement.clientWidth + (e.pageX - isHover.node1.dataset.x) + 'px';
//                   }
//                 }, 700);
//                 isHover.node1.dataset.dbl = false;

//               }
//               }
//             ><div ref={hoverRef} data-dbl={false} data-x={isHover.node1?.getBoundingClientRect().x} style={{ width: '20px', cursor: 'pointer', position: 'absolute', top: 0, right: '-10px', zIndex: 10 }}>
//                 <div className={isHover.value ? 'show' : 'hide'} style={!isHover.tooltip ? { height: '100vh', width: '1px', position: 'absolute', right: '10px' } : { height: '25px', width: '1px', position: 'absolute', right: '10px' }}></div>
//                 <div className="tooltip" style={isHover.tooltip ? { visibility: "visible", opacity: 1, top: '27px', left: '0px' } : { visibility: 'hidden', opacity: 0 }}>{"rwwerewrwerewrwerewrewrewrewrerwe"}</div>
//               </div></DTD>
//           </th>
//         )}
//       </Draggable>
//     )
// }



// function Table({ columns, tooltip, data, onDoubleClick, setOrder }) {

//   const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);

//     return result;
//   };

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     allColumns,
//     rows,
//     setColumnOrder,
//     prepareRow
//   } = useTable({
//     columns,
//     data
//   }, useSticky, useColumnOrder);
//   const currentColOrder = React.useRef();
//   return (
//     <SimpleBar style={{ maxHeight: '100vh', maxWidth: '100vw' }}>

//       <table className='order'   {...getTableProps()}>
//         <thead>

//           <DragDropContext

//             onDragStart={() => {
//               setOrder(50);
//               currentColOrder.current = allColumns.map(o => o.id);
//             }}
//             onDragUpdate={(dragUpdateObj, b) => {
//               const colOrder = [...currentColOrder.current];
//               const sIndex = dragUpdateObj.source.index;
//               const dIndex =
//                 dragUpdateObj.destination && dragUpdateObj.destination.index;

//               if (typeof sIndex === "number" && typeof dIndex === "number") {
//                 colOrder.splice(sIndex, 1);
//                 colOrder.splice(dIndex, 0, dragUpdateObj.draggableId);
//                 setColumnOrder(colOrder);
//               }
//             }}
//             onDragEnd={e=> setOrder(500)}
//           >
//             <Droppable droppableId="droppable" direction="horizontal">
//               {(provided, snapshot) => (
//                 headerGroups.map((headerGroup) => (

//                   <tr ref={provided.innerRef} {...provided.droppableProps} {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map((column, index) => {
//                       if (column.id === "id") {
//                         return (
//                           <th {...column.getHeaderProps()}>{column.render("Header")}</th>)
//                       } else if (column.id === "status") {
//                         return (
//                           <TH tooltip={tooltip[column.id]} key={column.id} column={column} index={index} />
//                         )
//                       }
//                       else if (column.id === "additional_10" && column.show) {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_9") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_8") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_7") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_6") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_5") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_4") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_3") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_2") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "additional_1") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "utm1") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "utm2") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "utm3") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "utm4") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "utm5") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date1") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date2") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date3") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date4") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date5") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date6") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date7") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "date8") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "ip") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "site") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "office") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "phone") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "bayer_name") {

//                         return (<TH tooltip={tooltip[column.id]} key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "localization") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "comment") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "status") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "total") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "pay") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "ttn") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "user") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "delivery") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "addres") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }
//                       else if (column.id === "ttn_status") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       } else if (column.id === "product") {

//                         return (<TH key={column.id} column={column} index={index} />)
//                       }

//                     }
//                     )}
//                     {provided.placeholder}
//                   </tr>
//                 ))


//               )}
//             </Droppable>
//           </DragDropContext>
//         </thead>
//         <tbody {...getTableBodyProps()}>

//           {rows.map((row, i) => {
//             prepareRow(row);
//             return (
//               <ROW onDoubleClick={onDoubleClick} key={i} row={row} i={i} />
//             );
//           })}
//         </tbody>
//       </table>
//     </SimpleBar>
//   );
// }






// function Order({ token }) {
//   const [isModal, setModal] = useState(false);
//   const [order, setOrder] = useState(300);

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'test',
//         columns: [
//           {
//             Header: "ID",
//             accessor: "id"
//           },
//           {
//             Header: "Статус",
//             accessor: "status"
//           },
//         ],
//         sticky: "left"
//       },
//       {
//         Header: "Name",
//         columns: [

//           {
//             Header: "Покупатель",
//             accessor: "bayer_name",
//           },
//           {
//             Header: "Страна",
//             accessor: "localization"
//           },
//           {
//             Header: "Телефон",
//             accessor: "phone"
//           },
//           {
//             Header: "Комментарий",
//             accessor: "comment"
//           },
//           {
//             Header: "Сумма",
//             accessor: "total"
//           },
//           {
//             Header: "Товар",
//             accessor: "product"
//           },
//           {
//             Header: "Оплата",
//             accessor: "pay"
//           },

//           {
//             Header: "Доставка",
//             accessor: "delivery"
//           },
//           {
//             Header: "Адрес доставки",
//             accessor: "addres"
//           },
//           {
//             Header: "ТТН",
//             accessor: "ttn"
//           },
//           {
//             Header: "ТТН статус",
//             accessor: "ttn_status"
//           },
//           {
//             Header: "Пользователь",
//             accessor: "user"
//           },
//           {
//             Header: "Отдел",
//             accessor: "office"
//           },
//           {
//             Header: "Добавлен",
//             accessor: "date1"
//           },
//           {
//             Header: "Открыт",
//             accessor: "date2"
//           },
//           {
//             Header: "Принят",
//             accessor: "date3"
//           },
//           {
//             Header: "Закреплён",
//             accessor: "date4"
//           },
//           {
//             Header: "Передан",
//             accessor: "date5"
//           },
//           {
//             Header: "Отправлен",
//             accessor: "date6"
//           },
//           {
//             Header: "Обновлён",
//             accessor: "date7"
//           },
//           {
//             Header: "Завершён",
//             accessor: "date8"
//           },
//           {
//             Header: "Сайт",
//             accessor: "site"
//           },
//           {
//             Header: "IP",
//             accessor: "ip"
//           },
//           {
//             Header: "utm_source",
//             accessor: "utm1"
//           },
//           {
//             Header: "utm_medium",
//             accessor: "utm2"
//           },
//           {
//             Header: "utm_term",
//             accessor: "utm3"
//           },
//           {
//             Header: "utm_content",
//             accessor: "utm4"
//           },
//           {
//             Header: "utm_campaign",
//             accessor: "utm5"
//           },

//           {
//             Header: "Доп. поле 1",
//             accessor: "additional_1"
//           },
//           {
//             Header: "Доп. поле 2",
//             accessor: "additional_2"
//           },
//           {
//             Header: "Доп. поле 3",
//             accessor: "additional_3"
//           },
//           {
//             Header: "Доп. поле 4",
//             accessor: "additional_4"
//           },
//           {
//             Header: "Доп. поле 5",
//             accessor: "additional_5"
//           },
//           {
//             Header: "Доп. поле 6",
//             accessor: "additional_6"
//           },
//           {
//             Header: "Доп. поле 7",
//             accessor: "additional_7"
//           },
//           {
//             Header: "Доп. поле 8",
//             accessor: "additional_8"
//           },
//           {
//             Header: "Доп. поле 9",
//             accessor: "additional_9"
//           },
//           {
//             Header: "Доп. поле 10",
//             accessor: "additional_10",
//             show: true,
//           }
//         ]
//       },
//     ],
//     []
//   );
//   const data = React.useMemo(async () => {
//     // var myHeaders = new Headers();
//     // myHeaders.append("authorization", "Bearer " + token);
//     // return await fetch('http://localhost/test', { headers: myHeaders, method: "GET" }).then(x => x.json()).then(x => { return x.data })
//   }, []);

//   // useEffect(async () => {
//   //   setData(await data);
//   // })

//   return (
//     <Styles>
//       <Table columns={columns} tooltip={tooltip} setOrder={setOrder} onDoubleClick={() => { setModal(true); }} data={[...new Array(order)].map(x => new Object(data))} />
//       <Zakazy onClose={() => { setModal(false); }} isModal={isModal} />
//     </Styles>
//   );
// }

// export default Order;

// import React, { useEffect, useState, useRef } from "react";
// import styled from "styled-components";
// // import { useTable, useColumnOrder } from "react-table";
// import { ukraine } from '../../../until/images';
// // import SimpleBar from 'simplebar-react';
// // import 'simplebar/dist/simplebar.min.css';
// // import { useSticky } from "react-table-sticky";
// // import Zakazy from "./zakazy";
// import * as DTD from 'react-draggable';
// import { Fragment } from "react";
// // import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
// // let data = {
// //   id: '4234',
// //   status: 'Новый',
// //   bayer_name: 'bayer_namebayer_namebayer_namebayer_namebayer_name',
// //   localization: 'ua',
// //   phone: '+435435436536',
// //   comment: '423432423432423432423423432',
// //   total: '432423.00',
// //   product: 'rest',
// //   pay: '2423',
// //   delivery: '423',
// //   addres: 'address',
// //   ttn: 'ttn',
// //   ttn_status: 'Новый',
// //   ttn_user: 'test',
// //   office: 'Новый',
// //   date1: 'Новый',
// //   date2: 'Новый',
// //   date3: 'Новый',
// //   date4: 'Новый',
// //   date5: 'Новый',
// //   date6: 'Новый',
// //   date7: 'Новый',
// //   date8: 'Новый',
// //   site: 'Новый',
// //   ip: 'Новый',
// //   utm1: 'Новый',
// //   utm2: 'Новый',
// //   utm3: 'Новый',
// //   utm4: 'Новый',
// //   utm5: 'Новый',
// //   additional_1: 'Новый',
// //   additional_2: 'Новый',
// //   additional_3: 'Новый',
// //   additional_4: 'Новый',
// //   additional_5: 'Новый',
// //   additional_6: 'Новый',
// //   additional_7: 'Новый',
// //   additional_8: 'Новый',
// //   additional_9: 'Новый',
// //   additional_10: 'Новый',
// // }

// const Styles = styled.div`


// table {
//   padding-left: 10px;
// }

// @charset "UTF-8";
// .container-info-settings {
//   margin-left: 51px;
//   margin-top: 35px;
//   margin-right: 0px;
//   width: 100%;
//   height: 100%;
//   justify-content: space-between;
//
// }
// @media (max-width: 800px) {
//   .container-info-settings {
//     margin-left: 30px;
//   }
// }
// .container-info-settings .simplebar-track.simplebar-vertical {
//   background-color: transparent;
//   width: 8px;
//   margin-right: 0;
//   margin-top: 0;
//   margin-bottom: 40px;
//   cursor: pointer;
// }
// .container-info-settings .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   width: 8px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   cursor: pointer;
// }
// .container-info-settings .simplebar-track.simplebar-horizontal {
//   background-color: transparent;
//   height: 8px;
//   margin-right: 10px;
//   margin-bottom: 40px;
//   margin-left: 20px;
//   cursor: pointer;
//   padding-top: 2px;
//   bottom: 0;
//   border-radius: 10px;
// }
// .container-info-settings .simplebar-track.simplebar-horizontal .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   border-radius: 10px;
//   height: 8px;
//   left: 0;
//   right: 0;
//   bottom: 38px;
//   top: 0px;
//   cursor: pointer;
//   margin-bottom: 2px;
// }
// .container-info-settings .simplebar-scrollbar.simplebar-visible:before {
//   opacity: 1;
//   cursor: pointer;
// }
// .container-info-settings .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
//   height: 10px;
// }
// .container-info-settings .simplebar-content-wrapper {
//   padding-right: 15px;
//   padding-left: 15px;
//   padding-bottom: 30px;
// }

// @media screen and (max-height: 800px) {
//   .container-info-settings .simplebar-track.simplebar-horizontal {
//     margin-bottom: 60px;
//   }
// }
// .crm-header {
//   -ms-overflow-style: none;
//   /* IE 10+ */
//   scrollbar-width: none;
//   /* Firefox */
// }

// .crm-header::-webkit-scrollbar {
//   /* chrome based */
//   width: 0px;
//   /* ширина scrollbar'a */
//   background: transparent;
//   /* опционально */
// }

// .crm-header {
//   display: flex;
//   margin: 0;
//   position: fixed;
//   padding-bottom: 5px;
//   top: 55px;
//   z-index: 333;
//   background-color: white;
//   overflow-x: scroll;
//   width: 100%;
//   white-space: nowrap;
//   flex-wrap: nowrap;
//   padding-right: 20px;
// }
// .crm-header .crm-header-link:last-child {
//   margin-right: 180px;
// }
// .crm-header .crm-header-link {
//   padding-left: 10px;
//   padding-right: 10px;
//   padding-top: 5px;
//   padding-bottom: 5px;
//
//   text-align: center;
//   margin: 1px;
//   cursor: pointer;
//   font-size: 12px;
//   user-select: none;
// }
// .crm-header .crm-header-link .count-link {
//   font-size: 10px;
//   opacity: 0.5;
// }

// .color-64a727 {
//   background-color: #64a727;
// }

// .color-515151 {
//   background-color: rgba(81, 81, 81, 0.7);
// }

// .color-C4C4C4 {
//   background-color: #C4C4C4;
// }

// .color-83004F {
//   background-color: #83004F;
// }

// .color-91d100 {
//   background-color: #91d100;
// }

// .color-C94F62 {
//   background-color: #C94F62;
// }

// .color-fd7777 {
//   background-color: #fd7777;
// }

// .color-9C02A7 {
//   background-color: #9C02A7;
// }

// .color-1DD787 {
//   background-color: #1DD787;
// }

// .color-00CC00 {
//   background-color: #00CC00;
// }

// .color-00B9FF {
//   background-color: #00B9FF;
// }

// .color-ffe600 {
//   background-color: #d4c72a;
// }

// .color-FF0000 {
//   background-color: #FF0000;
// }

// .color-FFCF00 {
//   background-color: #FFCF00;
// }

// .color-91D100 {
//   background-color: #91D100;
// }

// .color-da291c {
//   background-color: #da291c;
// }

// .color-6996D3 {
//   background-color: #6996D3;
// }

// .color-3415B0 {
//   background-color: #3415B0;
// }

// .color-B0FF00 {
//   background-color: #B0FF00;
// }

// .color-470010 {
//   background-color: #470010;
// }

// .color-9C02A7 {
//   background-color: #9C02A7;
// }

// .color-form {
//   height: 2px;
//   width: 100%;
//   position: absolute;
//   bottom: 2px;
//   border-radius: 2px;
//   left: 0;
//   opacity: 0.75;
// }

// .btn-toggle {
//   font-weight: 600;
//
// }
// .btn-toggle .color-form {
//   height: 4px;
//   bottom: 2px;
// }

// .arrow-bg {
//   background-color: white;
//   height: 25px;
//   width: 40px;
//   position: fixed;
//   top: 60px;
//   right: 0;
//   z-index: 2222;
// }
// .arrow-bg .arrow-next {
//   width: 13px;
//   height: 13px;
//   background-image: url("../img/arrow-down.svg");
//   background-size: 100%;
//   background-repeat: no-repeat;
//   position: absolute;
//   transform: rotate(-90deg);
//   opacity: 0.7;
//   left: 20px;
//   cursor: pointer;
// }
// .arrow-bg .arrow-prev {
//   width: 13px;
//   height: 13px;
//   background-image: url("../img/arrow-down.svg");
//   background-size: 100%;
//   background-repeat: no-repeat;
//   position: absolute;
//   transform: rotate(90deg);
//   opacity: 0.7;
//   cursor: pointer;
// }

// #hoverSelect {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 95px;
//   height: 38px;
//   line-height: 38px;
//   text-align: center;
//   font-size: 12px;
//   background: #515151;
//   color: white;
//   border-radius: 3px;
//   z-index: 999;
//   display: none;
// }

// .crm-table {
//   margin-top: 0px;
//   z-index: 888;
//
// }

// .container-info-settings tr td {
//   white-space: nowrap;
//   height: 18px;
//   line-height: 14px;
// }
// .container-info-settings tr td .input-style {
//   background: #d4d4d4;
//   outline: none;
//   border: 1px white solid;
//   width: 100%;
//   box-sizing: border-box;
//   padding: 1px 3px;
//   font-size: 10px;
//   line-height: 14px;
// }
// .container-info-settings tr td .input-style::placeholder {
//   font-size: 10px;
// }
// .container-info-settings tr td .count-message {
//   background: rgba(156, 155, 158, 0.4);
//   box-sizing: border-box;
//
//   left: -2px;
//   width: 17%;
//   border-right: 2px white solid;
// }
// .container-info-settings tr td .tel-style {
//   width: 83%;
// }
// .container-info-settings tr td .date-block {
//   background: rgba(156, 155, 158, 0.4);
//   padding: 0 3px;
//   border: 1px white solid;
//   min-width: 113px;
//   justify-content: space-between;
//   display: flex;
//   text-align: center;
//   color: rgba(0, 0, 0, 0.5);
//   line-height: 16px;
// }
// .container-info-settings tr td .date-block .date-style {
//   width: 50px;
//   text-align: center;
//   border: none;
//   font-size: 9px;
//   background-color: transparent;
//   color: rgba(0, 0, 0, 0.5);
//   padding: 0;
// }

// .date-block {
//   text-align: center;
// }

// .ttn-search {
//   background: rgba(156, 155, 158, 0.4);
//   outline: none;
//   border: 1px white solid;
//   width: 100%;
//   box-sizing: border-box;
//   font-size: 10px;
//   line-height: 14px;
// }
// .ttn-search .ttn-style {
//   width: 12%;
//   outline: none;
//   border: none;
//   background: transparent;
//   padding: 0;
//   line-height: 16px;
//   box-sizing: border-box;
//   padding-left: 3px;
// }
// .ttn-search .ttn-style:first-child {
//   width: 86%;
//   border-right: 2px solid white;
// }

// table {
//   border-collapse: collapse;
//   width: max-content;
//   font-size: 12px;
//   white-space: nowrap;
// }
//  tr td {

//   padding: 0px 4px;

// }
// td:nth-child(odd) {
//   // background-color: #F1F1F1;
// }

// tr th {
//   white-space: nowrap;
//   padding: 2.5px 4px;
//   font-size: 14px;
//   font-weight: 400;
//   border-radius: 3px 3px 0 0;
//   padding-top: 7px;
// }
// tr th:nth-child(odd) {
//   // background-color: #F1F1F1;
// }

// .header-search {
//   padding: 0;
//   font-size: 10px;
//   height: 18px;
//   box-sizing: border-box;
// }

// .table-header {
//   height: 24px;
//   cursor: grab;
// }

// .crm-input {
//   height: 18px;
// }

// .crm-main-table .country-block {
//   text-align: center;
//
// }
// .crm-main-table .country-flag {
//   text-align: center;
//   box-sizing: border-box;
//   height: 18px;
//
//   top: 2px;
// }
// .crm-main-table .country-flag .flag {
//   height: 13px;
// }
// .crm-main-table .svg-pos {
//
//   top: 2px;
// }
// .crm-main-table .svg-pos img {
//   height: 15px;
// }
// .crm-main-table .svg-pos .samovivoz path {
//   fill: #515151;
// }
// .crm-main-table .tel-colum {
//   justify-content: space-between;
//   width: inherit;
//   display: flex;
//   height: 18px;
// }
// .crm-main-table .tel-colum .svg-wrap {
//   display: inline-block;
// }
// .crm-main-table .tel-colum .svg-wrap .count {
//   top: -2px;
// }
// .crm-main-table .tel {
//   text-align: center;
//   line-height: 16px;
//   display: inline-block;
// }
// .crm-main-table .tel .mob-icon {
//
//   top: 2px;
//   margin-right: 5px;
//   height: 13px;
// }
// .crm-main-table .svg-wrap {
//   margin-left: 5px;
//
//   margin-right: 3px;
//   top: 2px;
// }
// .crm-main-table .svg-wrap .count {
//   position: absolute;
//   border-radius: 100%;
//   font-size: 7px;
//   width: 8px;
//   height: 8px;
//   font-weight: 600;
//   background-color: #9C9B9E;
//   color: white;
//   text-align: center;
//   right: -3px;
//   line-height: 9px;
//   top: -5px;
//   border: 1.28571px solid #F1F1F1;
// }
// .crm-main-table .product-colum {
//   text-align: center;
//
//   top: -1px;
// }
// .crm-main-table .product-colum .svg-wrap {
//   margin-left: 3px;
//   margin-right: 8px;
//
//   top: 4px;
// }
// .crm-main-table .product-colum .svg-wrap .count {
//   right: -2px;
//   border: 1.28571px solid #F1F1F1;
// }
// .crm-main-table .colum-pay {
//   text-align: center;
// }
// .crm-main-table .ttn-block .ttn-position {
//   justify-content: space-between;
//   height: auto;
//   width: 100%;
//   display: flex;
//   align-items: center;
// }
// .crm-main-table .ttn-block .ttn-number {
//   display: inline-block;
//   text-align: left;
// }
// .crm-main-table .ttn-block .svg-wrap {
//   margin-left: 3px;
//   margin-right: 3px;
//   display: inline-block;
// }
// .crm-main-table .ttn-block .svg-wrap .count {
//   right: -4px;
//   top: -3px;
// }

// .crm-main-table.select-toggle:hover {
//
//   color: white;
// }
// // .crm-main-table.select-toggle:hover td {
// //   background-color: rgba(81, 81, 81, 0.7);
// // }

// .crm-main-table.selected-lock:hover {
//
// }
// .crm-main-table.selected-lock:hover td {
//   background: rgba(198, 193, 190, 0.5);
//   color: rgba(0, 0, 0, 0.2);
// }
// .crm-main-table.selected-lock:hover .id-table:before {
//   content: "";
//   background: none;
//   background-image: url("../img/lock.svg");
//   width: 12px;
//   height: 12px;
//   position: absolute;
//   top: 3px;
//   left: -15px;
// }

// .select-toggle {
//
// }
// .select-toggle img {
//   opacity: 0.5;
// }
// .select-toggle td:nth-child(odd) {
//   background-color: rgba(81, 81, 81, 0.7);
// }
// .select-toggle td {
//   color: white;
//   background-color: rgba(81, 81, 81, 0.7);
// }
// .select-toggle .np-ico path {
//   opacity: 0.5;
// }
// .select-toggle .cls-2 {
//   opacity: 0.5;
// }
// .select-toggle .date-time {
//   color: white;
// }
// .select-toggle .svg-convert path {
//   stroke: #F1F1F1;
// }
// .select-toggle .svg-wrap .count {
//   background: #F1F1F1;
//   color: #515151;
//   border: 1.28571px solid rgba(81, 81, 81, 0.7);
// }
// .select-toggle .product-colum .svg-wrap path {
//   fill: #F1F1F1;
// }
// .select-toggle .product-colum .svg-wrap .count {
//   background: #F1F1F1;
//   border: 1.28571px solid rgba(81, 81, 81, 0.7);
// }
// .select-toggle .card path {
//   fill: #F1F1F1;
// }
// .select-toggle .coin path {
//   fill: #F1F1F1;
// }
// .select-toggle .coin circle {
//   stroke: #F1F1F1;
// }
// .select-toggle .convert-pay path {
//   fill: #F1F1F1;
// }
// .select-toggle .svg-decline path {
//   stroke: #F1F1F1;
// }
// .select-toggle .svg-trade path {
//   stroke: #F1F1F1;
// }
// .select-toggle .svg-box path {
//   fill: #F1F1F1;
// }
// .select-toggle .id-table:before {
//   content: "";
//   width: 7px;
//   height: 18px;
//   position: absolute;
//   background: #515151;
//   left: -7px;
//   border-radius: 3px 0 0 3px;
//   top: 0;
// }

// .selected-lock {
//
// }
// .selected-lock td {
//   background: rgba(198, 193, 190, 0.5);
//   color: rgba(0, 0, 0, 0.2);
// }
// .selected-lock td:nth-child(odd) {
//   background: rgba(198, 193, 190, 0.5);
// }
// .selected-lock img {
//   opacity: 0.5;
// }
// .selected-lock .np-ico path {
//   opacity: 0.5;
// }
// .selected-lock .cls-2 {
//   opacity: 0.5;
// }
// .selected-lock .svg-wrap .count {
//   border: 1.28571px solid #d8d8d8;
// }
// .selected-lock .id-table:before {
//   content: "";
//   background-image: url("../img/lock.svg");
//   width: 12px;
//   height: 12px;
//   position: absolute;
//   top: 3px;
//   left: -15px;
// }
// .selected-lock .date-time {
//   color: #c5bfbf;
// }

// .id-table {
//
// }

// // .crm-main-table:hover {
// //
// // }
// // .crm-main-table:hover td {
// //   background: rgba(81, 81, 81, 0.3);
// // }
// .crm-main-table .id-table:before {
//   content: "";
//   width: 7px;
//   height: 18px;
//   position: absolute;
//   background: transparent;
//   // opacity: 0;
//   left: -7px;
//   border-radius: 3px 0 0 3px;
//   top: 0;
// }

// .hover:hover .id-table:before {
//   background: #515151;
// }

// .crm-main-table .status-table {
//   text-align: center;
// }
// .crm-main-table .status-table .color-form2 {
//   text-align: left;
//   line-height: 14px;
//   box-sizing: border-box;
//   border-radius: 3px;
//   color: white;
//   opacity: 0.75;
//   padding: 0.5px 6px;
//   margin: 0 3px;
// }

// .new-order {
//
// }




// .new-order:after {
//   content: "\\2022";
//   width: 22px;
//   height: 20px;
//   background-color: white;
//   position: absolute;
//   color: #00B9FF;
//   font-size: 25px;
//   left: -22px;
//   text-align: center;
//   line-height: 0px;
//   top: 8px;
//   z-index: -1;
// }

// .color-928c42 {
//   background-color: #928c42;
// }

// .color-470010 {
//   background-color: #470010;
// }

// .color-83004F {
//   background-color: #83004F;
// }

// .color-C94F62 {
//   background-color: #C94F62;
// }

// .color-9C02A7 {
//   background-color: #9C02A7;
// }

// .color-1DD787 {
//   background-color: #1DD787;
// }

// .color-00CC00 {
//   background-color: #00CC00;
// }

// .color-00B9FF {
//   background-color: #00B9FF;
// }

// .color-FF0000 {
//   background-color: #FF0000;
// }

// .color-FFCF00 {
//   background-color: #FFCF00;
// }

// .color-91D100 {
//   background-color: #91D100;
// }

// .color-F50296 {
//   background-color: #F50296;
// }

// .color-6996D3 {
//   background-color: #6996D3;
// }

// .color-3415B0 {
//   background-color: #3415B0;
// }

// .color-B0FF00 {
//   background-color: #B0FF00;
// }

// .colum-country {
//
//   box-sizing: border-box;
// }
// .colum-country .country-btn {
//   text-align: left;
//   display: block;
//   cursor: pointer;
//   line-height: 16px;
//   height: 16px;
//   border: 1px solid white;
//   background: #d4d4d4;
//   color: rgba(0, 0, 0, 0.5);
//   padding-left: 3px;
// }
// .colum-country .country-btn .list-item img {
//   position: absolute;
//   left: 4px;
// }
// .colum-country .country-btn .list-item span {
//   margin-left: 20px;
// }
// .colum-country .country-btn .list {
//   height: 14px;
// }
// .status-table {
//   background: white;
// }

// .status-table-hover{
//   background: #cbcbcb !important;
// }

// // table thead tr:first-child {
// //   display: none;
// // }
// //  tr th:nth-child(2){
// //   left: 36px !important;
// //   background: white;
// //   z-index: 10 !important;

// // }
// .hover:hover td{
//   background: rgba(81, 81, 81, 0.3);
// }
//  tr th:nth-child(1){
//   background: #f1f1f1;
//   z-index: 10 !important;
// }


//  tr th:nth-child(1):after {
//   content: "";
//   width: 22px;
//   height: 35px;
//   background-color: white;
//   position: absolute;
//   color: #00B9FF;
//   font-size: 25px;
//   left: -22px;
//   text-align: center;
//   line-height: 0px;
//   top: 0px;
//   z-index: -1;
// }

//  tr td:nth-child(1){
//   // background: #f1f1f1;
//   // z-index: 11 !important;
// }
// .colum-country .country-btn:after {
//   content: "";
//   position: absolute;
//   background-image: url("../img/arrow-down.svg");
//   width: 6px;
//   height: 3px;
//   background-size: 100%;
//   top: 7px;
//   right: 4px;
//   opacity: 0.5;
// }
// .colum-country .block1 .list:hover:before {
//   background-color: rgba(81, 81, 81, 0.3);
//   content: "";
//   width: 4px;
//   height: 4px;
//   position: absolute;
//   border-radius: 100%;
//   top: 6px;
//   left: -2px;
// }
// .colum-country .block1 {
//   background: white;
//   z-index: 3;
//   color: black;
//   display: none;
//   position: absolute;
//   text-align: left;
//   overflow-x: hidden;
//   height: 90px;
//   box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
//   cursor: pointer;
//   width: 55px;
// }
// .colum-country .block1 .list-item img {
//   position: absolute;
//   left: 5px;
// }
// .colum-country .block1 .list-item span {
//   margin-left: 25px;
// }
// .colum-country .block1 .list {
//   height: 18px;
//   line-height: 18px;
//   margin-left: 5px;
// }
// .colum-country .block1 .list:first-child span {
//   padding-left: 3px;
//   margin-left: 0;
// }
// .colum-country .block1 .simplebar-track.simplebar-vertical {
//   background-color: rgba(0, 0, 0, 0.1);
//   width: 3px;
//   margin-top: 5px;
//   margin-bottom: 5px;
//   margin-right: 5px;
//   bottom: 0;
//   border-radius: 5px;
// }
// .colum-country .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   width: 3px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: -9px;
//   top: 0;
// }
// .colum-country .block1 .simplebar-scrollbar.simplebar-visible:before {
//   opacity: 1;
// }
// .colum-country .block1 .simplebar-content-wrapper {
//   padding: 0;
// }

// .colum-pay {
//
//   box-sizing: border-box;
// }
// .colum-pay .pay-btn {
//   text-align: left;
//   display: block;
//   cursor: pointer;
//   line-height: 16px;
//   height: 16px;
//   border: 1px solid white;
//   background: #d4d4d4;
//   color: rgba(0, 0, 0, 0.5);
//   padding-left: 3px;
// }
// .colum-pay .pay-btn .list-item img {
//   margin-right: 5px;
//   width: 12px;
//   height: 12px;
//   top: 2px;
//
//   margin-left: 18px;
// }
// .colum-pay .pay-btn:after {
//   content: "";
//   position: absolute;
//   background-image: url("../img/arrow-down.svg");
//   width: 6px;
//   height: 3px;
//   background-size: 100%;
//   top: 7px;
//   right: 4px;
//   opacity: 0.5;
// }
// .colum-pay .block1 .list:hover:before {
//   background-color: rgba(81, 81, 81, 0.3);
//   content: "";
//   width: 4px;
//   height: 4px;
//   position: absolute;
//   border-radius: 100%;
//   top: 6px;
//   left: 6px;
// }
// .colum-pay .block1 {
//   background: white;
//   z-index: 3;
//   color: black;
//   display: none;
//   position: absolute;
//   text-align: left;
//   overflow-x: hidden;
//   height: 90px;
//   box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
//   cursor: pointer;
//   width: 55px;
// }
// .colum-pay .block1 .simplebar-track.simplebar-vertical {
//   background-color: rgba(0, 0, 0, 0.1);
//   width: 3px;
//   margin-top: 5px;
//   margin-bottom: 5px;
//   margin-right: 5px;
//   bottom: 0;
//   border-radius: 5px;
// }
// .colum-pay .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   width: 3px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: -9px;
//   top: 0;
// }
// .colum-pay .block1 .simplebar-scrollbar.simplebar-visible:before {
//   opacity: 1;
// }
// .colum-pay .block1 .simplebar-content-wrapper {
//   padding: 0;
// }
// .colum-pay .block1 .list {
//
//   height: 18px;
// }
// .colum-pay .block1 .list img {
//   margin-right: 5px;
//   width: 12px;
//   height: 12px;
//
//   top: 2px;
// }
// .colum-pay .block1 .list-item {
//   width: 100%;
//   box-sizing: border-box;
//   display: block;
//   text-align: center;
// }

// .colum-delivery {
//   box-sizing: border-box;
//   border: none;
//   font-size: 10px;
//
// }
// .colum-delivery .delivery-btn {
//   text-align: left;
//   display: block;
//   cursor: pointer;
//   line-height: 16px;
//   height: 16px;
//   border: 1px solid white;
//   background: #d4d4d4;
//   color: rgba(0, 0, 0, 0.5);
//   padding-left: 3px;
// }
// .colum-delivery .delivery-btn .list-item img {
//
//   left: 0px;
//   bottom: -2px;
//   width: 12px;
//   height: 12px;
// }
// .colum-delivery .delivery-btn .list-item {
//   text-align: center;
//   line-height: 18px;
// }
// .colum-delivery .delivery-btn:after {
//   content: "";
//   position: absolute;
//   background-image: url("../img/arrow-down.svg");
//   width: 6px;
//   height: 3px;
//   background-size: 100%;
//   top: 7px;
//   right: 4px;
//   opacity: 0.5;
// }
// .colum-delivery .block1 .list:hover:before {
//   background-color: rgba(81, 81, 81, 0.3);
//   content: "";
//   width: 4px;
//   height: 4px;
//   position: absolute;
//   border-radius: 100%;
//   top: 6px;
//   left: 6px;
// }
// .colum-delivery .block1 {
//   z-index: 222;
//   color: black;
//   display: none;
//   position: absolute;
//   text-align: left;
//   height: 90px;
//   width: 100%;
//   cursor: pointer;
//   z-index: 2222;
//   top: 18px;
//   background-color: white;
//   box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
// }
// .colum-delivery .block1 .simplebar-track.simplebar-vertical {
//   background-color: rgba(0, 0, 0, 0.1);
//   width: 3px;
//   margin-top: 5px;
//   margin-bottom: 5px;
//   margin-right: 5px;
//   bottom: 0;
//   border-radius: 5px;
// }
// .colum-delivery .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   width: 3px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: -9px;
//   top: 0;
// }
// .colum-delivery .block1 .simplebar-track.simplebar-horizontal {
//   background-color: rgba(0, 0, 0, 0.1);
//   height: 3px;
//   bottom: 0;
//   margin: 0;
//   border-radius: 5px;
//   margin-left: 5px;
//   padding-top: 0;
// }
// .colum-delivery .block1 .simplebar-track.simplebar-horizontal .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   height: 3px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   margin: 0;
//   margin-left: 5px;
// }
// .colum-delivery .block1 .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
//   height: 3px;
//   left: 0;
//   top: 0;
// }
// .colum-delivery .block1 .simplebar-scrollbar.simplebar-visible:before {
//   opacity: 1;
// }
// .colum-delivery .block1 .simplebar-content-wrapper {
//   padding: 0;
// }
// .colum-delivery .block1 .list {
//
//   height: 16px;
// }
// .colum-delivery .block1 .list img {
//   margin-right: 5px;
//   width: 11px;
//   height: 11px;
//
//   top: 2px;
// }
// .colum-delivery .block1 .list-item {
//   margin-left: 5px;
//   width: 100%;
//   box-sizing: border-box;
//   display: block;
//   height: 16px;
// }

// .colum-employe {
//   box-sizing: border-box;
//   border: none;
//   font-size: 10px;
//
// }
// .colum-employe .employe-btn {
//   text-align: left;
//   display: block;
//   cursor: pointer;
//   line-height: 16px;
//   height: 16px;
//   border: 1px solid white;
//   background: #d4d4d4;
//   color: rgba(0, 0, 0, 0.5);
//   padding-left: 3px;
//   min-width: 100px;
// }
// .colum-employe .employe-btn .list-item img {
//
//   left: 0px;
//   bottom: -2px;
//   width: 12px;
//   height: 12px;
// }
// .colum-employe .employe-btn .list-item {
//   text-align: center;
//   line-height: 18px;
// }
// .colum-employe .employe-btn:after {
//   content: "";
//   position: absolute;
//   background-image: url("../img/arrow-down.svg");
//   width: 6px;
//   height: 3px;
//   background-size: 100%;
//   top: 7px;
//   right: 4px;
//   opacity: 0.5;
// }
// .colum-employe .block1 {
//   z-index: 222;
//   color: black;
//   display: none;
//   position: absolute;
//   text-align: left;
//   height: 90px;
//   width: 100%;
//   overflow-x: hidden;
//   cursor: pointer;
//   z-index: 2222;
//   top: 18px;
//   background-color: white;
//   box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
// }
// .colum-employe .block1 .simplebar-track.simplebar-vertical {
//   background-color: rgba(0, 0, 0, 0.1);
//   width: 3px;
//   margin-top: 5px;
//   margin-bottom: 5px;
//   margin-right: 5px;
//   bottom: 0;
//   border-radius: 5px;
// }
// .colum-employe .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   width: 3px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: -9px;
//   top: 0;
// }
// .colum-employe .block1 .simplebar-scrollbar.simplebar-visible:before {
//   opacity: 1;
// }
// .colum-employe .block1 .simplebar-content-wrapper {
//   padding: 0;
// }
// .colum-employe .block1 .list {
//
//   height: 16px;
// }
// .colum-employe .block1 .list img {
//   margin-right: 5px;
//   width: 11px;
//   height: 11px;
//
//   top: 2px;
// }
// .colum-employe .block1 .list-item {
//   margin-left: 5px;
//   width: 100%;
//   box-sizing: border-box;
//   display: block;
//   height: 16px;
// }

// .colum-depart {
//   box-sizing: border-box;
//   border: none;
//   font-size: 10px;
//
// }
// .colum-depart .depart-btn {
//   text-align: left;
//   display: block;
//   cursor: pointer;
//   line-height: 16px;
//   height: 16px;
//   border: 1px solid white;
//   background: #d4d4d4;
//   color: rgba(0, 0, 0, 0.5);
//   padding-left: 3px;
//   min-width: 110px;
// }
// .colum-depart .depart-btn .list-item img {
//
//   left: 0px;
//   bottom: -2px;
//   width: 12px;
//   height: 12px;
// }
// .colum-depart .depart-btn .list-item {
//   text-align: center;
//   line-height: 18px;
// }
// .colum-depart .depart-btn:after {
//   content: "";
//   position: absolute;
//   background-image: url("../img/arrow-down.svg");
//   width: 6px;
//   height: 3px;
//   background-size: 100%;
//   top: 7px;
//   right: 4px;
//   opacity: 0.5;
// }
// .colum-depart .block1 {
//   z-index: 222;
//   color: black;
//   display: none;
//   position: absolute;
//   text-align: left;
//   height: 90px;
//   width: 100%;
//   overflow-x: hidden;
//   cursor: pointer;
//   z-index: 2222;
//   top: 18px;
//   background-color: white;
//   box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
// }
// .colum-depart .block1 .simplebar-track.simplebar-vertical {
//   background-color: rgba(0, 0, 0, 0.1);
//   width: 3px;
//   margin-top: 5px;
//   margin-bottom: 5px;
//   margin-right: 5px;
//   bottom: 0;
//   border-radius: 5px;
// }
// .colum-depart .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   width: 3px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: -9px;
//   top: 0;
// }
// .colum-depart .block1 .simplebar-scrollbar.simplebar-visible:before {
//   opacity: 1;
// }
// .colum-depart .block1 .simplebar-content-wrapper {
//   padding: 0;
// }
// .colum-depart .block1 .list {
//
//   height: 16px;
// }
// .colum-depart .block1 .list img {
//   margin-right: 5px;
//   width: 11px;
//   height: 11px;
//
//   top: 2px;
// }
// .colum-depart .block1 .list-item {
//   margin-left: 5px;
//   width: 100%;
//   box-sizing: border-box;
//   display: block;
//   height: 16px;
// }

// .z-index {
//   z-index: -1;
//
// }

// .block1.toggle {
//   display: block;
// }

// .list {
//
// }

// .select-btn {
//   background-color: rgba(81, 81, 81, 0.7);
// }

// .wrap-hide {
//   opacity: 0;
//   visibility: hidden;
//   transition: 0.2s;
//   -webkit-transition: 0.2s;
//   -moz-transition: 0.2s;
//   bottom: -18px;
//
// }

// .wrap-open {
//   opacity: 1;
//   visibility: visible;
//   transition: 0.2s;
//   -moz-transition: 0.2s;
//   -webkit-transition: 0.2s;
//   transition: 0.2s;
//   bottom: 0;
// }

// .svg-delivery {
//   text-align: center;
// }

// .date-time {
//   font-size: 10px;
//   color: #7b7b7b;
//   margin-left: 4px;
//   text-align: center;
// }



// .max-lenght-comment {
//
// }

// .colum-sum {
//   text-align: right;
// }
// .simplebar-track.simplebar-vertical {
//   background-color: transparent;
//   width: 8px;
//   margin-right: 0;
//   margin-top: 0;
//   margin-bottom: 40px;
//   cursor: pointer;
// }
// .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   width: 8px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   cursor: pointer;
// }
// .simplebar-track.simplebar-horizontal {
//   background-color: transparent;
//   height: 8px;
//   margin-right: 10px;
//   margin-bottom: 40px;
//   margin-left: 20px;
//   cursor: pointer;
//   padding-top: 2px;
//   bottom: 0;
//   border-radius: 10px;
//   // top: -2px;
// }
// .simplebar-track.simplebar-horizontal .simplebar-scrollbar::before {
//   background: rgba(0, 0, 0, 0.3);
//   border-radius: 10px;
//   height: 8px;
//   left: 0;
//   right: 0;
//   bottom: 38px;
//   top: 0px;
//   cursor: pointer;
//   margin-bottom: 2px;
// }
// .simplebar-scrollbar.simplebar-visible:before {
//   opacity: 1;
//   cursor: pointer;
// }
// .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
//   height: 10px;
// }
// .simplebar-content-wrapper {
//   padding-right: 15px;
//   padding-left: 15px;
//   padding-bottom: 30px;
// }
// thead th .hide {
//   background-color: transparent;
// }





// thead th .show {
//   background-color: red;
//   z-index: 10 !important;
// }


// thead th .show:before {
//   position: absolute;
//   content: '';
//   background-color: red;
//   height: 25px;
//   width: 3px;
//   right: -3px;
//   z-index: 10 !important;


// }
// thead th .show:after {
//   position: absolute;
//   content: '';
//   background-color: red;
//   height: 25px;
//   width: 3px;
//   right: 1px;
//   z-index: 10 !important;
// }

// thead th {
//
//   background: white;
// }


// .text-tooltip {

//     font-size: 12px;
//     display: block;
//     margin-top: 7px;

// }

// thead th .tooltip {
//     position: absolute;
//     user-select: none;
//     max-height: 100px;
//     background-color: rgba(81, 81, 81, 0.6);
//     border-radius: 3px;
//     top: 0;
//     color: white;
//     padding: 4px 5px;
//     white-space: normal;
//     width: max-content;
//     word-break: break-word;
//     text-align: left;
//     max-width: 300px;
//     opacity: 0;
//     visibility: hidden;
//     // backdrop-filter: blur(4px);
// }



// // thead th:hover .tooltip {
// //     visibility: visible;
// //     opacity: 1;
// //     top: 22px;
// //     z-index: 999 !important;
// //     transition: 0.3s;
// //     -moz-transition: 0.3s;
// //     -webkit-transition: 0.3s;
// //     transition-delay: 0.3s;
// //     -moz-transition-delay: 0.3s;
// //     -webkit-transition-delay: 0.3s;
// // }

// // thead th:hover .tooltip {
// //   top: 27px;
// //   left: 0px;
// //   transition-delay: 0.3s;
// //   -moz-transition-delay: 0.3s;
// //   -webkit-transition-delay: 0.3s;
// // }
// `;
// let startTH = [86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 308, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375, 86.359375];
// let ps = 0;
// let countStart = startTH.map((x, i) => { ps += x; return ps < window.screen.width ? i : undefined }).filter(x => x !== undefined).length;
// let sum = 0;



// function useShow(
//   elementRef,
// ) {
//   const [value, setValue] = useState(false)
//   const [node1, setNode] = useState(null)
//   const [tooltip, setTooltip] = useState(false)
//   let node = null;
//   const handleMouseEnter = e => {
//     setValue(true);
//     setTooltip(true);
//     node.parentElement.style.cssText += 'z-index: 12';
//   }
//   const handleMouseDown = e => {
//     setValue(true);
//     setTooltip(false);
//     node.parentElement.style.cssText += 'z-index: 12';
//     node.removeEventListener('mouseleave', handleMouseLeave);
//     node.removeEventListener('mouseenter', handleMouseEnter);
//   }
//   const handleMouseLeave = e => {
//     setValue(false);
//     setTooltip(false)
//   }
//   const handleMouseUp = e => {

//     setValue(false)
//     node.addEventListener('mouseenter', handleMouseEnter)
//     node.addEventListener('mouseleave', handleMouseLeave)
//     node.parentElement.style.cssText += 'z-index: 6';
//   }


//   const handleDblClick = e => {
//     node.parentElement.style.minWidth = '0px'
//     node.dataset.dbl = true;
//   }

//   useEffect(() => {
//     setNode(elementRef.current)
//     node = elementRef?.current;
//     if (node) {
//       node.addEventListener('mouseenter', handleMouseEnter)
//       node.addEventListener('mouseleave', handleMouseLeave)
//       node.addEventListener('mousedown', handleMouseDown)
//       document.addEventListener('mouseup', handleMouseUp)
//       node.addEventListener('dblclick', handleDblClick)


//       return () => {
//         node.removeEventListener('mouseenter', handleMouseEnter)
//         node.removeEventListener('mouseleave', handleMouseLeave)
//         node.removeEventListener('mousedown', handleMouseDown)
//         node.removeEventListener('mouseup', handleMouseUp)
//         node.addEventListener('dblclick', handleDblClick)

//       }
//     }
//   }, [elementRef])

//   return { value, node1, setValue, handleMouseEnter, handleMouseLeave, tooltip }
// }


// const TH = ({ children, style, className, index }) => {
//   const hoverRef = useRef(null)
//   const isHover = useShow(hoverRef);
//   const [x, setX] = useState(0)

//   return (
//     <th style={style} className={className}>
//       {children}
//       <DTD

//         axis="x" position={{ x: 0, y: 0 }}
//         onStart ={(e) => {setX(e.pageX); }}
//         onStop={(e, d) => {
//           setTimeout(() => {
//             if (isHover.node1.dataset.dbl === "false") {
//               startTH[index] = (isHover.node1.parentElement.clientWidth - 8) + (e.pageX - x);
//               isHover.node1.parentElement.style.minWidth = (isHover.node1.parentElement.clientWidth - 8) + (e.pageX - x) + 'px';
//             }
//           }, document.body.clientHeight - 120);
//           isHover.node1.dataset.dbl = false;

//         }
//         }
//       ><div ref={hoverRef} data-dbl={false} data-x={isHover.node1?.getBoundingClientRect().x} style={{ width: '20px', cursor: 'pointer', position: 'absolute', top: 0, right: '-10px', zIndex: 10 }}>
//           <div className={isHover.value ? 'show' : 'hide'} style={isHover.tooltip ? { height: '25px', width: '1px', position: 'absolute', right: '10px' }: { height: '100vh', width: '1px', position: 'absolute', right: '10px' } }></div>
//         </div></DTD>
//     </th>
//   )
// }



// function Order({ data, rowHeight, visibleRows }) {
//   const rootRef = React.useRef();
//   const tableRef = React.useRef();
//   const [start, setStart] = React.useState(0);
//   const [left, setLeft] = React.useState(0);


//   function getTopHeight() {
//     return rowHeight * start;
//   }
//   function getBottomHeight() {
//     return rowHeight * (data.length - (start + visibleRows - 1));
//   }

//   // let recalc = left => {

//   // }

//   let calc = left => {
//     let t = 0;
//     sum = 0;
//     for (let index = 0; index < startTH.length; index++) {
//       const element = startTH[index];
//       sum += element;
//       if (Math.floor(sum) > left)
//         break
//       t++;
//     }
//     return t;
//   }

//   // function getLeftHeight() {
//   //   return left;
//   // }
//   function getRightHeight() {
//     return startTH.slice(countStart+left).reduce((a, b) => a + b, 0) + 30;

//     // recalc(left);
//     // if (left < (sizeH - (startTH[0] + startTH[1] + sizeT))) {
//     //   return (sizeH - (startTH[0] + startTH[1] + sizeT)) - left;
//     // }
//     // else
//     //   return 50
//   }

//   function getLeftHeight() {
//     return startTH.slice(0, left).reduce((a, b) => a + b, 0);
//     // if (left > (sizeH - (startTH[0] + startTH[1] + sizeT))) {
//     //   return (sizeH - (startTH[0] + startTH[1] + sizeT));
//     // }
//     // else {
//     //   if (left > 0) {
//     //     return left - (startTH[0] + startTH[1] + 100);

//     //   } else {
//     //     return 0;
//     //   }
//     // }

//   }

//   React.useEffect(() => {
//     function onScroll(e) {
//       setStart(Math.min(
//         data.length - visibleRows - 1,
//         Math.floor(e.target.scrollTop / rowHeight)
//       ));
//         ps = 0;
//         countStart = startTH.slice(calc(e.target.scrollLeft)+1).map((x, i) => { ps += x; return ps < window.screen.width ? i : undefined }).filter(x => x !== undefined).length;

//       // console.log(e.target.scrollLeft / [...document.querySelectorAll('th')].map(x => x.getBoundingClientRect().width)[1], [...document.querySelectorAll('th')].map(x => x.getBoundingClientRect().width)[1],  [...document.querySelectorAll('th')].map(x => x.getBoundingClientRect().width));
//       setLeft(Math.min(
//         52 - countStart - 1,
//         // Math.floor(e.target.scrollLeft / [...document.querySelectorAll('th')].map(x => x.getBoundingClientRect().width)[1])
//         calc(e.target.scrollLeft)
//       ));
//     }



//     // function onMouseDown(e) {
//     //   isDown = true;
//     //   startX = e.pageX - e.target.offsetLeft;
//     //   scrollLeft = e.target.scrollLeft;
//     // }

//     // function onMouseLeave(e) {
//     //   isDown = false;
//     // }
//     // function onMouseUp(e) {
//     //   isDown = false;
//     // }

//     // function onMouseMove(e) {
//     //   if (!isDown) return;
//     //   e.preventDefault();
//     //   const x = e.pageX - e.target.offsetLeft;
//     //   const walk = (x - startX) * 5 //scroll-fast
//     //   e.target.scrollLeft = scrollLeft - walk;
//     // }



//     // setP([...document.querySelectorAll('th')].map(x => x.getBoundingClientRect().width).map((x, i) => { ps += x; return ps < window.screen.width ? i : undefined }).filter(x => x !== undefined))

//     rootRef.current.addEventListener('scroll', onScroll);
//     // rootRef.current.addEventListener('mousedown', onMouseDown);
//     // rootRef.current.addEventListener('mouseleave', onMouseLeave);
//     // rootRef.current.addEventListener('mouseup', onMouseUp);
//     // rootRef.current.addEventListener('mousemove', onMouseMove);

//     return () => {
//       rootRef.current.removeEventListener('scroll', onScroll);
//     }
//   }, [data.length, visibleRows, rowHeight]);

//   return (
//     <Styles>
//       <div style={{ height: rowHeight * visibleRows + 1, overflow: 'auto', scrollBehavior: 'smooth', paddingLeft: 10 }} ref={rootRef}>
//         <table ref={tableRef}>
//           <thead>
//             <tr className="table-header">
//               <th style={{
//                 position: 'sticky',
//                 top: 0, left: 0, zIndex: 6,
//               }} className="header-id">ID

//               </th>
//               {/* <TH style={{
//               position: 'sticky',
//               top: 0, left: startTH[0], zIndex: 6,
//             }} className="header-status">
//               Статус
//             </TH> */}
//               <div style={{ width: getLeftHeight() }} />




//               {[...new Array(52)].slice(0).map((x, i) => {
//                   return (
//                     <TH style={{
//                       position: 'sticky',
//                       top: 0, zIndex: 5, minWidth: startTH[left+i]
//                     }} className="header-pokupatel" key={left+i} >
//                       Покупатель
//                     </TH>
//                   )
//               }


//               )}


//               {/* <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-country">Страна<div className="tooltip">Страна за которой закреплён заказ<br /><span className="text-tooltip">Используется для разделения заказов из разных стран</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-tel">Телефон<div className="tooltip">Телефон покупателя<br /><span className="text-tooltip">Используется для:<br />-Автоматического заполнения товарно-транспортной накладной почтовой службы<br />-Автоматической отправки SMS</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-comm">Комментарий<div className="tooltip">...</div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-sum">Сумма<div className="tooltip">Итоговая сумма заказа</div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-product">Товар<div className="tooltip">...</div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-pay">Оплата<div className="tooltip">Используемый вид оплаты</div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-delivery">Доставка<div className="tooltip">Используемый вид доставки</div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-addres">Адрес доставки<div className="tooltip">...</div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-ttn">ТТН<div className="tooltip">Номер товарно-транспортной накладной</div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-ttn-status">ТТН статус<div className="tooltip">Информация за последний час о статусе посылки<br /><span className="text-tooltip">Используется для:<br />-автоматической отправки SMS<br />-автоматической смены статусов в CRM</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-depart">Отдел<div className="tooltip">Используемый отдел в заказе<br /><span className="text-tooltip">Заказ с "отделом" виден только тем пользователям у которых есть доступ к сооответствующему отделу</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-opened">Просмотрел<div className="tooltip">Последний пользователь открывший заказ<br /><span className="text-tooltip">Используется для выявления сотрудников "ворующих" заказы</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-add">Добавлен<div className="tooltip">Дата и время добавления заказа в CRM</div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-open">Открыт<div className="tooltip">Время между добавлением заказа в CRM и первым взаимодействием с ним<br /><span className="text-tooltip">Показывает сколько времени покупатель ожидал звонка/ответа</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-accepted">Принят<div className="tooltip">Дата и время изменения статуса заказа на «Принят»<br /><span className="text-tooltip">Используется для расчета зарплаты/премии сотрудника за период врмени</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-prinyatZa">Принят за<div className="tooltip">Время между открытием заказа и изменением его статуса на «Принят»<br /><span className="text-tooltip">Используется для оценки времени потраченого на подтверждение заказа</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-prinyal">Принял<div className="tooltip">Пользователь подтвердивший заказ<br /><span className="text-tooltip">Закрепление происходит автоматически при изменении статуса заказа на «Принят». Используется для расчета зарплаты/премии сотрудника</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-pered">Передан<div className="tooltip">Время между изменением статуса заказа на "Принят" и получением посылки почтовой службой<br /><span className="text-tooltip">Показывает сколько времени покупатель ожидал отправку заказа</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-send">Отправлен<div className="tooltip">Дата и время получения посылки почтовой службой<br /><span className="text-tooltip">Используется для контроля сотрудников отвечающих за отправку заказа</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-change">Изменён<div className="tooltip">Дата и время последнего изменения заказа</div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-changed">Изменил<div className="tooltip">Последний пользователь изменивший заказ</div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-finish">Завершён<div className="tooltip">Дата и время завершения заказа<br /><span className="text-tooltip">Используется для подтверждения завершения заказа. Дальнейшее редактирование заказа сотрудниками не имеющим доступ, запрещен</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-site">Сайт<div className="tooltip">Источник заказа</div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-ip">IP<div className="tooltip">IP адрес устройства с которого поступил заказ<br /><span className="text-tooltip">Используется для отслеживания и блокировки в случаях спама</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-utm">utm_<div className="tooltip">UTM-метка<br /><span className="text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-utm">utm_medium<div className="tooltip">UTM-метка<br /><span className="text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-utm">utm_term<div className="tooltip">UTM-метка<br /><span className="text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-utm">utm_content<div className="tooltip">UTM-метка<br /><span className="text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-utm">utm_campaign<div className="tooltip">UTM-метка<br /><span className="text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-field">Доп. поле 1<div className="tooltip">Дополнительное поле заказа<br /><span className="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-field">Доп. поле 2<div className="tooltip">Дополнительное поле заказа<br /><span className="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-field">Доп. поле 3<div className="tooltip">Дополнительное поле заказа<br /><span className="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-field">Доп. поле 4<div className="tooltip">Дополнительное поле заказа<br /><span className="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-field">Доп. поле 5<div className="tooltip">Дополнительное поле заказа<br /><span className="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-field">Доп. поле 6<div className="tooltip">Дополнительное поле заказа<br /><span className="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-field">Доп. поле 7<div className="tooltip">Дополнительное поле заказа<br /><span className="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-field">Доп. поле 8<div className="tooltip">Дополнительное поле заказа<br /><span className="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-field">Доп. поле 9<div className="tooltip">Дополнительное поле заказа<br /><span className="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span></div></th>
//               <th style={{
//                 position: 'sticky',
//                 top: 0, zIndex: 5,
//               }} className="header-field">Доп. поле 10<div className="tooltip">Дополнительное поле заказа<br /><span className="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span></div></th>
//               */} <div style={{ width: getRightHeight() }} />

//             </tr>
//           </thead>
//           <tbody>
//             <div style={{ height: getTopHeight() }} />

//             {data.slice(start, start + visibleRows + 1).map((row, rowIndex) => (
//               <tr
//                 style={{ height: rowHeight }}
//                 key={start + rowIndex}
//                 className="crm-main-table hover"
//                 data-i={start}
//               >
//                 <td className="id-table new-orders" style={{
//                   position: 'sticky',
//                   left: 0, zIndex: 5,
//                 }}>{start + rowIndex}</td>
//                 {/* <td className="status-table" style={{
//                 position: 'sticky',
//                 left: startTH[0], zIndex: 5,
//               }}>
//                 <div className="new-zakaz color-515151 color-form2">Новый</div>
//               </td> */}
//                 <div style={{ width: getLeftHeight() }} />


//                 {[...new Array(52)].slice(0).map((x, i) => {

//                   if (i === 6) {
//                     return (
//                       <td className="max-lenght" style={{ minWidth: 300 }}>Алекс... {i}</td>
//                     )
//                   } else {
//                     return (
//                       <td className="max-lenght">Алекс... {i}</td>
//                     )
//                   }

//                 })}
//                 {/* <td className="country-block"><span className="country-flag"><img className="flag ua" src={ukraine} alt="flag" /></span>
//                 </td>
//                 <td className="tel-colum">
//                   <span className="tel"><img className="mob-icon vod" src="img/vodafone2.svg" alt="" /><span className="tel-number max-lenght">+38 096 514 25 46</span></span>
//                   <span className="svg-wrap">
//                     <svg className="svg-convert" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M9.64296 12.1067H3.21439C2.03582 12.1067 1.07153 11.1424 1.07153 9.96387V4.60672C1.07153 3.42815 2.03582 2.46387 3.21439 2.46387H9.64296C10.8215 2.46387 11.7858 3.42815 11.7858 4.60672V9.96387C11.7858 11.1424 10.8215 12.1067 9.64296 12.1067Z" stroke="#9C9B9E" stroke-width="1.28571" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
//                       <path d="M3.2146 5.14307L5.67889 7.60735C6.10746 8.03592 6.75031 8.03592 7.17888 7.60735L9.64317 5.14307" stroke="#9C9B9E" stroke-width="1.28571" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
//                     </svg>
//                     <span className="count">4</span>
//                   </span>
//                 </td>
//                 <td className="max-lenght-comment">Lorem ipsum dolor sit amet c...</td>
//                 <td className="colum-sum">9555.40</td>
//                 <td><span className="product-colum"><span className="svg-wrap">
//                   <svg className="svg-box" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path fill-rule="evenodd" clip-rule="evenodd" d="M5.49929 1.48529C5.49914 1.48536 5.49898 1.48544 5.49883 1.48552L1.33225 3.56881L1.33109 3.56938C1.2443 3.61251 1.17125 3.679 1.12018 3.76137C1.06911 3.84371 1.04203 3.93866 1.04196 4.03555C1.04196 4.03552 1.04196 4.03558 1.04196 4.03555V8.9986C1.04128 9.09569 1.06774 9.19104 1.11837 9.27388C1.16891 9.35659 1.24153 9.42356 1.32805 9.46725C1.32791 9.46718 1.32819 9.46732 1.32805 9.46725L5.49477 11.5506C5.56715 11.5868 5.64712 11.6058 5.72805 11.6058C5.80898 11.6058 5.88881 11.5869 5.96118 11.5507L10.1291 9.46675L10.1302 9.46617C10.217 9.42304 10.2901 9.35655 10.3411 9.27419C10.3922 9.19182 10.4193 9.09683 10.4194 8.99991V4.03565C10.4193 3.93873 10.3922 3.84374 10.3411 3.76137C10.2901 3.679 10.217 3.61251 10.1302 3.56938L10.1291 3.56881L5.96249 1.48552C5.96233 1.48544 5.96217 1.48536 5.96202 1.48529C5.8901 1.44964 5.81092 1.43109 5.73066 1.43109C5.65039 1.43109 5.57121 1.44964 5.49929 1.48529ZM6.19432 1.01898L6.42615 0.552435C6.21003 0.445045 5.97198 0.38916 5.73066 0.38916C5.48933 0.38916 5.25128 0.445045 5.03517 0.552435L5.03401 0.55301L0.867434 2.6363C0.86722 2.63641 0.867006 2.63651 0.866792 2.63662C0.606685 2.76602 0.387788 2.96536 0.234679 3.21226C0.081443 3.45937 0.000179611 3.74433 2.53139e-05 4.0351L2.52518e-05 8.99334C-0.00162631 9.28392 0.0777662 9.56922 0.229306 9.8172C0.381192 10.0657 0.599511 10.2669 0.859632 10.398L0.861072 10.3987L5.02865 12.4825C5.24579 12.5911 5.48525 12.6477 5.72805 12.6477C5.9708 12.6477 6.21021 12.5912 6.4273 12.4825C6.42735 12.4825 6.42725 12.4826 6.4273 12.4825L10.5939 10.3993C10.5941 10.3992 10.5942 10.3991 10.5944 10.399C10.8546 10.2696 11.0735 10.0702 11.2266 9.82329C11.3799 9.57618 11.4611 9.29122 11.4613 9.00046V4.03537C11.4611 3.74461 11.3799 3.45937 11.2266 3.21226C11.0735 2.96537 10.8546 2.76603 10.5945 2.63663C10.5943 2.63652 10.5941 2.63641 10.5939 2.6363L6.4273 0.55301L6.19432 1.01898Z" fill="#9C9B9E"></path>
//                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.221734 3.23975C0.350407 2.9824 0.663338 2.87809 0.920684 3.00676L5.73066 5.41175L10.5406 3.00676C10.798 2.87809 11.1109 2.9824 11.2396 3.23975C11.3683 3.49709 11.2639 3.81002 11.0066 3.9387L5.96364 6.46017C5.81697 6.53351 5.64434 6.53351 5.49767 6.46017L0.454718 3.9387C0.197371 3.81002 0.0930612 3.49709 0.221734 3.23975Z" fill="#9C9B9E"></path>
//                     <path fill-rule="evenodd" clip-rule="evenodd" d="M5.73066 5.47324C6.01838 5.47324 6.25162 5.70648 6.25162 5.99421V12.1208C6.25162 12.4085 6.01838 12.6417 5.73066 12.6417C5.44293 12.6417 5.20969 12.4085 5.20969 12.1208V5.99421C5.20969 5.70648 5.44293 5.47324 5.73066 5.47324Z" fill="#9C9B9E"></path>
//                     <path fill-rule="evenodd" clip-rule="evenodd" d="M2.65986 1.85397C2.78853 1.59663 3.10146 1.49232 3.35881 1.62099L8.56847 4.22582C8.82582 4.3545 8.93013 4.66743 8.80146 4.92477C8.67278 5.18212 8.35985 5.28643 8.10251 5.15776L2.89284 2.55292C2.63549 2.42425 2.53118 2.11132 2.65986 1.85397Z" fill="#9C9B9E"></path>
//                   </svg>
//                   <span className="count">1</span>
//                 </span>
//                   <span className="max-lenght-product">Чай Монастырский (1шт. x 100.00 = 1001...</span></span>
//                 </td>
//                 <td className="colum-pay"><span className="svg-wrap">
//                   <svg className="card" width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8.92 10.8C8.92 10.9867 9.1 11.14 9.32666 11.14H10.9H12.4733C12.7 11.14 12.88 10.9867 12.88 10.8V10.46C12.88 10.2733 12.7 10.12 12.4733 10.12H10.9H9.32666C9.1 10.12 8.92 10.2733 8.92 10.46V10.8V10.8Z" fill="#9C9B9E"></path>
//                     <path d="M13.8022 2H2.21379C0.999001 2 0.015984 3.025 0.015984 4.29167L0.015984 5.6C0.015984 5.61667 0 5.625 0 5.65C0 5.675 0.015984 5.68333 0.015984 5.7L0.015984 11.7083C0.015984 12.975 0.999001 14 2.21379 14H13.8022C15.017 14 16 12.975 16 11.7083V4.29167C16 3.025 15.017 2 13.8022 2ZM2.21379 3.25H13.8022C14.3536 3.25 14.8012 3.71667 14.8012 4.29167V5.025H1.21479V4.29167C1.21479 3.71667 1.66234 3.25 2.21379 3.25ZM13.8022 12.75H2.21379C1.66234 12.75 1.21479 12.2833 1.21479 11.7083V6.275H14.8012V11.7167C14.8012 12.2833 14.3536 12.75 13.8022 12.75Z" fill="#9C9B9E"></path>
//                   </svg>
//                 </span>
//                 </td>
//                 <td className="svg-delivery">
//                   <span className="svg-position"><img src={ukraine} className="nv" alt="" /></span>
//                 </td>
//                 <td className="addres-block">Євминка, Відділення №1: вул....</td>
//                 <td className="ttn-block">
//                   <div className="ttn-position">
//                     <span className="ttn-number max-lenght">20454</span>
//                     <span className="svg-wrap">
//                       <svg className="svg-box-day" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M5.49929 1.48529C5.49914 1.48536 5.49898 1.48544 5.49883 1.48552L1.33225 3.56881L1.33109 3.56938C1.2443 3.61251 1.17125 3.679 1.12018 3.76137C1.06911 3.84371 1.04203 3.93866 1.04196 4.03555C1.04196 4.03552 1.04196 4.03558 1.04196 4.03555V8.9986C1.04128 9.09569 1.06774 9.19104 1.11837 9.27388C1.16891 9.35659 1.24153 9.42356 1.32805 9.46725C1.32791 9.46718 1.32819 9.46732 1.32805 9.46725L5.49477 11.5506C5.56715 11.5868 5.64712 11.6058 5.72805 11.6058C5.80898 11.6058 5.88881 11.5869 5.96118 11.5507L10.1291 9.46675L10.1302 9.46617C10.217 9.42304 10.2901 9.35655 10.3411 9.27419C10.3922 9.19182 10.4193 9.09683 10.4194 8.99991V4.03565C10.4193 3.93873 10.3922 3.84374 10.3411 3.76137C10.2901 3.679 10.217 3.61251 10.1302 3.56938L10.1291 3.56881L5.96249 1.48552C5.96233 1.48544 5.96217 1.48536 5.96202 1.48529C5.8901 1.44964 5.81092 1.43109 5.73066 1.43109C5.65039 1.43109 5.57121 1.44964 5.49929 1.48529ZM6.19432 1.01898L6.42615 0.552435C6.21003 0.445045 5.97198 0.38916 5.73066 0.38916C5.48933 0.38916 5.25128 0.445045 5.03517 0.552435L5.03401 0.55301L0.867434 2.6363C0.86722 2.63641 0.867006 2.63651 0.866792 2.63662C0.606685 2.76602 0.387788 2.96536 0.234679 3.21226C0.081443 3.45937 0.000179611 3.74433 2.53139e-05 4.0351L2.52518e-05 8.99334C-0.00162631 9.28392 0.0777662 9.56922 0.229306 9.8172C0.381192 10.0657 0.599511 10.2669 0.859632 10.398L0.861072 10.3987L5.02865 12.4825C5.24579 12.5911 5.48525 12.6477 5.72805 12.6477C5.9708 12.6477 6.21021 12.5912 6.4273 12.4825C6.42735 12.4825 6.42725 12.4826 6.4273 12.4825L10.5939 10.3993C10.5941 10.3992 10.5942 10.3991 10.5944 10.399C10.8546 10.2696 11.0735 10.0702 11.2266 9.82329C11.3799 9.57618 11.4611 9.29122 11.4613 9.00046V4.03537C11.4611 3.74461 11.3799 3.45937 11.2266 3.21226C11.0735 2.96537 10.8546 2.76603 10.5945 2.63663C10.5943 2.63652 10.5941 2.63641 10.5939 2.6363L6.4273 0.55301L6.19432 1.01898Z" fill="#9C9B9E"></path>
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M0.221734 3.23975C0.350407 2.9824 0.663338 2.87809 0.920684 3.00676L5.73066 5.41175L10.5406 3.00676C10.798 2.87809 11.1109 2.9824 11.2396 3.23975C11.3683 3.49709 11.2639 3.81002 11.0066 3.9387L5.96364 6.46017C5.81697 6.53351 5.64434 6.53351 5.49767 6.46017L0.454718 3.9387C0.197371 3.81002 0.0930612 3.49709 0.221734 3.23975Z" fill="#9C9B9E"></path>
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M5.73066 5.47324C6.01838 5.47324 6.25162 5.70648 6.25162 5.99421V12.1208C6.25162 12.4085 6.01838 12.6417 5.73066 12.6417C5.44293 12.6417 5.20969 12.4085 5.20969 12.1208V5.99421C5.20969 5.70648 5.44293 5.47324 5.73066 5.47324Z" fill="#9C9B9E"></path>
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M2.65986 1.85397C2.78853 1.59663 3.10146 1.49232 3.35881 1.62099L8.56847 4.22582C8.82582 4.3545 8.93013 4.66743 8.80146 4.92477C8.67278 5.18212 8.35985 5.28643 8.10251 5.15776L2.89284 2.55292C2.63549 2.42425 2.53118 2.11132 2.65986 1.85397Z" fill="#9C9B9E"></path>
//                       </svg>
//                       <span className="count">1</span>
//                     </span>
//                   </div>
//                 </td>
//                 <td className="max-lenght">Нова пошта очікує ...</td>
//                 <td className="otdel-block max-lenght">Розничный магазин</td>
//                 <td className="max-lenght">Лебедев Евгений Ал...</td>
//                 <td className="date-block">2020-00-00 </td>
//                 <td className="date-time otkrit">10/00:03:25</td>
//                 <td className="date-block">2020-00-00 </td>
//                 <td className="date-time acceptza">00:03:23</td>
//                 <td className="max-lenght">Лебедев Евгений Ал...</td>
//                 <td className="date-time peredan">03/00:03:23</td>
//                 <td className="date-block">2021-01-01 <span className="date-time">11:51:51</span></td>
//                 <td className="date-block">2021-04-08 <span className="date-time">22:50:51</span></td>
//                 <td className="max-lenght">Лебедев Евгений Ал...</td>
//                 <td className="date-block">2021-01-01 <span className="date-time">11:51:51</span></td>
//                 <td className="max-lenght">www.abrakadabra.com</td>
//                 <td className="">192.168.168.168</td>
//                 <td className="max-lenght"></td>
//                 <td className="max-lenght"></td>
//                 <td className="max-lenght"></td>
//                 <td className="max-lenght"></td>
//                 <td className="max-lenght">campaign</td>
//                 <td className="max-lenght"></td>
//                 <td className="max-lenght"></td>
//                 <td className="max-lenght"></td>
//                 <td className="max-lenght"></td>
//                 <td className="max-lenght"></td>
//                 <td className="max-lenght"></td>
//                 <td className="max-lenght"></td>
//                 <td className="max-lenght"></td>
//                 <td className="max-lenght"></td>
//                 <td className="max-lenght"></td> */}
//                 <div style={{ width: getRightHeight() }} />
//               </tr>
//             ))}
//             <div style={{ height: getBottomHeight() }} />

//           </tbody>
//         </table>
//       </div>
//     </Styles>
//   )
// }




// export default Order;

// let calc = left => {
  //   let t = 0;
  //   let sum = 0;
  //   for (let index = startTH.length; index >= 0; --index) {
  //     const element = startTH[startTH.length - index];
  //     sum += element.width;
  //     if (Math.floor(sum) > Math.floor(left))
  //       break
  //     t++;
  //   }
  //   return t;
  // }


  // function getRightHeight() {
  //   return 0
  //   // return startTH.slice(countStart + left).reduce((a, b) => a + b.width, 0) + 30;
  // }

  // function getLeftHeight() {
  //   return 0
  //   // return Math.floor(startTH.slice(0, left).reduce((a, b) => a + b.width, 0));
  //   // if (left > (sizeH - (startTH[0] + startTH[1] + sizeT))) {
  //   //   return (sizeH - (startTH[0] + startTH[1] + sizeT));
  //   // }
  //   // else {
  //   //   if (left > 0) {
  //   //     return left - (startTH[0] + startTH[1] + 100);

  //   //   } else {
  //   //     return 0;
  //   //   }
  //   // }

  // }

  


import React, { useEffect, useState, useRef } from "react";
import { lock } from '../../../until/images';
// import Zakazy from "./zakazy";
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




import { connect } from "react-redux";

import { top, countChange, refresh } from "../../../store/actions/index";
import Modal from "../../components/Modal";

const mapStateToProps = state => {
  return { refresh: state.refresh, zoom: state.zoom };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTop: tops => dispatch(top(tops)),
    changeCount: counts => dispatch(countChange(counts)),
    changeRefresh: refreshs => dispatch(refresh(refreshs)),
  };
}
// let data = [75,55,55,50,55,70,90,110]


let country = {
  "Украина": "🇺🇦",
  "Россия": "🇷🇺",
  "Албания": "🇦🇱"
}

let columns = {
  id: {
    defaultWidth: 35,
    width: 35,
    resize: false,
    swap: false,
    show: true
  },
  status: {
    defaultWidth: 110,
    width: 110,
    resize: true,
    swap: false,
    show: true
  },
  attribute: {
    defaultWidth: 116,
    width: 116,
    resize: true,
    swap: false,
    show: true
  },
  localization: {
    defaultWidth: 54,
    width: 54,
    resize: false,
    swap: true,
    show: true
  },
  bayer_name: {
    defaultWidth: 142,
    width: 142,
    resize: true,
    swap: true,
    show: true
  },
  phone: {
    defaultWidth: 150,
    width: 150,
    resize: false,
    swap: true,
    show: true
  },
  comment: {
    defaultWidth: 187,
    width: 187,
    resize: true,
    swap: true,
    show: true
  },
  total: {
    defaultWidth: 60,
    width: 60,
    resize: false,
    swap: true,
    show: true
  },
  product: {
    defaultWidth: 258,
    width: 258,
    resize: true,
    swap: true,
    show: true
  },
  pay: {
    defaultWidth: 54,
    width: 54,
    resize: false,
    swap: true,
    show: true
  },
  ppo: {
    defaultWidth: 44,
    width: 44,
    resize: true,
    swap: true,
    show: true
  },
  delivery: {
    defaultWidth: 69,
    width: 69,
    resize: false,
    swap: true,
    show: true
  },
  addres: {
    defaultWidth: 172,
    width: 172,
    resize: true,
    swap: true,
    show: true
  },
  ttn: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  ttn_status: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  office: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  ttn_user: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },

  date1: {
    defaultWidth: 108,
    width: 108,
    resize: false,
    swap: true,
    show: true
  },
  date2: {
    defaultWidth: 65,
    width: 65,
    resize: false,
    swap: true,
    show: true
  },
  date3: {
    defaultWidth: 110,
    width: 110,
    resize: false,
    swap: true,
    show: true
  },
  date4: {
    defaultWidth: 73,
    width: 73,
    resize: false,
    swap: true,
    show: true
  },
  date5: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  date6: {
    defaultWidth: 110,
    width: 110,
    resize: false,
    swap: true,
    show: true
  },
  date7: {
    defaultWidth: 70,
    width: 70,
    resize: false,
    swap: true,
    show: true
  },
  send: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  date8: {
    defaultWidth: 110,
    width: 110,
    resize: false,
    swap: true,
    show: true
  },
  change: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  end: {
    defaultWidth: 110,
    width: 110,
    resize: false,
    swap: true,
    show: true
  },
  site: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  ip: {
    defaultWidth: 150,
    width: 150,
    resize: true,
    swap: true,
    show: true
  },
  utm1: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true
  },
  utm2: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true
  },
  utm3: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true
  },
  utm4: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true
  },
  utm5: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true
  },
  additional_1: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_2: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_3: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_4: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_5: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_6: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_7: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_8: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_9: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  additional_10: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
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
  selects = false,
  last = 0;
let isDown = false;
let startX;
let scrollLeft;
let leftScroll = 0;

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
  <span className="ico-wrap" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {count !== '0' && <span className="icon-Exclude colorWhite icons" style={{ pointerEvents: 'none' }}></span>}
    {count !== '0' && <span className="count" style={count.toString().length >= 2 ? { borderRadius: 5, pointerEvents: 'none' } : { pointerEvents: 'none' }}>{count}</span>}
  </span>
))

const Additional = React.memo(({ count, hints }) => (
  <span className="ico-wrap" onMouseEnter={e => {
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
    {count !== '0' && <span className="icon-2 colorWhite icons" style={{ pointerEvents: 'none' }}></span>}
    {count !== '0' && <span className="count" style={count.toString().length >= 2 ? { borderRadius: 5, pointerEvents: 'none' } : { pointerEvents: 'none' }}>{count}</span>}
  </span>
))



const Konv = React.memo(({ count }) => (
  <span className="ico-wrap" onMouseEnter={e => {
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
    <span className="icon-1 colorWhite icons" ></span>
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
              isHover.node1.parentElement.style.minWidth = cols[keys].width + 'px';
            } else {
              cols[keys].width = cols[keys].defaultWidth;
              setCols({ ...cols })
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


const TH = ({ children, style, className, hint, index, cols, setCols, col, keys, dragOver, setDragOver, wrapper, zIndex, setWrapper }) => {


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
      {(cols[keys].swap) && <div style={{ ...styleDrag(col === dragOver, drag > drop)[0], ...styleDrag(col === dragOver, drag > drop)[1] }}></div>}
      {(cols[keys].resize) && <Draggable index={index} zIndex={zIndex} setWrapper={setWrapper} keys={keys} cols={cols} setCols={setCols} setFlag={setFlag} />}
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
  { key: '2', icon: 'icon-Vector-1 icons', title: hints.vodofone },
  { key: '3', icon: 'icon-Union-1 icons', title: hints.kyivstar },
  { key: '4', icon: 'icon-Vector-3 icons', title: hints.lifecell },
  { key: '5', icon: 'icon-Union-18 icons', title: hints.incorrectNumber },
  { key: '6', icon: 'icon-Union icons', title: hints.unknownNumber }
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
  { key: '1', text: '🇺🇦', class: 'flags', title: hints.ukraine },
  { key: '2', text: '🇷🇺', class: 'flags', title: hints.russia },
  { key: '3', text: '🇦🇱', class: 'flags', title: hints.alb }
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
  let text_input = document.getElementById(id + 'input').value;
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


function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}


function debounce(f, ms) {

  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}


function Order({ data, rowHeight, visibleRows, changeCount, changeTop, refresh, zoom, changeRefresh, updateData }) {
  const rootRef = React.useRef();
  // const [arr, setArr] = useState(data)
  const [column, setColumn] = useState(columns);
  const [visible, setVisible] = React.useState(visibleRows);
  const [dragOver, setDragOver] = useState("");
  // const [isModal, setModal] = React.useState(false);
  const [wrapper, setWrapper] = React.useState(false);
  const [index, setIndex] = React.useState(null);
  const [range, setRange] = React.useState(true);
  const [top, setTop] = React.useState(0);
  let [status, setStatus] = useState([]);


  let [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (refresh) {
      [...document.querySelectorAll('.crm-header-link')].forEach(y => y?.classList.remove('btn-toggle'));
      [...document.querySelectorAll('.crm-header-link')][0]?.classList.add('btn-toggle');
      changeRefresh(false);
      fetch('http://vanl0073259.online-vm.com:3004/search', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "query": '',
          "start": 0,
          "end": (Math.floor(document.body.clientHeight * 1.5 / (18 + 18))) * 3
        })
      }).then(x => x.json()).then(x => {
        let arrays = x.map(x => { return { ...x, select: false } })
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
    }
  }, [refresh])



  function getTopHeight() {
    // let sum = 0;
    // Object.keys(column).forEach(x => {
    //   if (sum < document.body.clientWidth + left) {
    //     sum += column[x].width;
    //     column[x].show = true;
    //   } else {
    //     column[x].show = false;
    //   }
    // })


    let temp = top - document.body.clientHeight * 0.5;

    return rowHeight * Math.min(
      (data.length - visible - 1),
      Math.floor(temp < 0 ? 0 : temp / rowHeight)
    );
  }




  function getStart() {
    let temp = top - document.body.clientHeight * 0.5;

    return Math.min(
      (data.length - visible - 1),
      Math.floor(temp < 0 ? 0 : temp / rowHeight)
    );
  }
  function getBottomHeight() {
    let temp = top - document.body.clientHeight * 0.5;
    return rowHeight * (data.length - (Math.min(
      (data.length - visible - 1),
      Math.floor(temp < 0 ? 0 : temp / rowHeight)
    ) + visible + 1));
  }




  function onKeyDown(e) {
    let isCtrl = e.ctrlKey || e.metaKey,
      keyA = e.which == 65;

    if (isCtrl && keyA) {
      let temp = data.map((x, index) => {
        if (index !== 20 && index !== 22 && index !== 23 && index !== 24 && index !== 25) {
          return { ...x, select: true }

        } else {
          return { ...x }
        }
      })
      updateData(temp);
      changeCount(temp.filter(x => x['select'] === true).length)
      e.preventDefault()


    }
  }


  // async function update(e) {
  //   let temp = e.target.scrollTop - document.body.clientHeight * 0.5;
  //   // setStart(Math.min(
  //   //   (data.length - visible - 1),
  //   //   Math.floor(temp < 0 ? 0 : temp / 18)
  //   // ));
  // }




  async function updateHover(e) {
    clearTimeout(timers);
    clearTimeout(timer);
    if (!document.querySelector('.disableHover').classList.contains('disable-hover')) {
      document.querySelector('.disableHover').classList.add('disable-hover')
    }
    document.getElementById("tooltipBtn").style.animation = '';
    document.getElementById("tooltipBtn").style.fontSize = '12px';
    timers = setTimeout(function () {

      document.querySelector('.disableHover').classList.remove('disable-hover')
    }, 400);
  }


  // console.log(data.length);

  // useEffect(() )

  async function updateList() {
    // console.log(data);
    if (data.length < 500 && fetching) {
      setFetching(false)
      let dates = await fetch('http://vanl0073259.online-vm.com:3004/search', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "query": Object.filter(search, ([name, text]) => text !== ''),
          "start": data.length,
          "end": data.length * 8
        })
      }).catch(e => console.log(e));
      let jsonData = await dates.json();
      if (jsonData.length > 0) {

        let arrays = [...data.concat(jsonData.map(x => { return { ...x, select: false } }))];
        // console.log(arrays);
        updateData([...arrays], 'scroll');
        setFetching(true)

      }
    }
  }


  async function onScroll(e) {
    // let el = document.querySelector('.table-scroll-wrapper-left .table-scroll');
    // el.style.top = Math.min(e.target.offsetHeight - el.offsetHeight, (e.target.scrollTop / e.target.offsetHeight) * 100) + 'px';
    setTop(e.target.scrollTop);
    updateList()
    // console.log(Math.floor(data.length / 3), Math.floor(e.target.scrollTop / 18));
    changeTop(e.target.scrollTop)
    updateHover(e)
    // setLeft(e.target.scrollLeft);

    // update(e);
    // updateCounter(e);
    // updateHover(e);
  }



  function onMouseDown(e) {
    if (!e.target.classList.contains('resize') && !e.target.classList.contains('drag')) {
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




  function onClick(e, index) {
    try {
      e.preventDefault()
      let isCtrl = e.ctrlKey || e.metaKey;
      let isShift = e.shiftKey;
      if (isCtrl) {
        data[index]['select'] = !data[index]['select'];
        updateData([...data]);
      } else if (isShift) {
        if (last < index) {
          updateData(data.map(x => x['select'] = false))
          data.slice(last, index + 1).map((x, indexs) => (indexs + last !== 20 && indexs + last !== 22 && indexs + last !== 23 && indexs + last !== 24 && indexs + last !== 25) ? x['select'] = true : x['select'] = false);
          updateData([...data])
        } else {
          updateData(data.map(x => x['select'] = false))
          data.slice(index, last + 1).map((x, indexs) => (indexs + last !== 20 && indexs + last !== 22 && indexs + last !== 23 && indexs + last !== 24 && indexs + last !== 25) ? x['select'] = true : x['select'] = false);
          updateData([...data])
        }
      }
      else if (!isCtrl && !isShift) {
        if (last !== index)
          updateData(data.map(x => x['select'] = false))

        data[index]['select'] = !data[index]['select'];
        updateData([...data])
      }
      changeCount(data.filter(x => x['select'] === true).length)
      last = index;
    } catch (e) { }

  }
  function onMouseMove(e) {
    if (!isDown) return;


    e.preventDefault();
    throttle(() => {
      const x = e.pageX - rootRef.current.offsetLeft;
      const walk = (x - startX) * 2 //scroll-fast
      rootRef.current.scrollLeft = scrollLeft - walk;
    }, 100)()

  }

  // function resizeWindow(e) {
  //   setVisible(document.body.clientHeight * 1.5 / rowHeight)
  // }

  React.useEffect(async () => {
    // changeCount(0);
    rootRef.current.addEventListener('mousedown', onMouseDown, false);
    rootRef.current.addEventListener('mouseleave', onMouseLeave, false);
    rootRef.current.addEventListener('mouseup', onMouseLeave, false);
    rootRef.current.addEventListener('mousemove', onMouseMove, false);


    // let data = await fetch('http://vanl0073259.online-vm.com:3004?start=' + ((Math.floor(document.body.clientHeight * 1.5 / (18 + 18))) * 3) + '&end=' + (Math.floor(document.body.clientHeight * 1.5 / (18 + 18 * zoom))) * 7);
    // let jsonData = await data.json();

    // let data = await fetch('http://vanl0073259.online-vm.com:3004/search', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     "query": Object.filter(search, ([name, text]) => text !== ''),
    //     "start": (Math.floor(document.body.clientHeight * 1.5 / (18 + 18))) * 3,
    //     "end": Math.floor(document.body.clientHeight * 1.5 / (18 + 18 * zoom)) * 7
    //   })
    // }).catch(e => console.log(e));
    // let jsonData = await data.json();
    // // console.log();
    // let arrays = [...data.concat(jsonData.map(x => { return { ...x, select: false } }))];

    // setArr(data);
    // updateData(arrays);
    const rawResponse = await fetch('http://vanl0073259.online-vm.com:3004/status').catch(e => console.log(e));
    const content = await rawResponse.json();
    setStatus(content);
    // updateData();
    // window.addEventListener('resize', resizeWindow, false)
    // rootRef.current.addEventListener('wheel', debounce(() => {
    //   let el = document.querySelector('.table-scroll-wrapper-left .table-scroll');
    //   let tables = document.querySelector('.tables');
    //   el.style.top = Math.min(tables.offsetHeight - el.offsetHeight, (tables.scrollTop / tables.offsetHeight) * 100) + 'px';
    // }, 50), false);
    // document.querySelector('.crm-table').style.minWidth = Object.keys(column).reduce((x, y) => x + column[y].width, 0) + 'px';
    // 
    // rootRef.current.addEventListener('scroll', async e => , false);
    // document.addEventListener('keydown', onKeyDown, false);

    return () => {
      // rootRef.current.removeEventListener('scroll', onScroll);
      // // rootRef.current.removeEventListener('wheel', onWheel);
      // document.removeEventListener('keydown', onKeyDown);
      // rootRef.current.removeEventListener('mousedown', onMouseDown);
      // rootRef.current.removeEventListener('mouseleave', onMouseLeave);
      // rootRef.current.removeEventListener('mouseup', onMouseLeave);
      // rootRef.current.removeEventListener('mousemove', onMouseMove);
      // window.removeEventListener('resize', resizeWindow)

    }
  }, [data.length]);

  async function onClickWrapper(flags) {
    setWrapper(flags);
  }


  useEffect(async () => {
    if (!wrapper) {
      setRange(true)

      const rawResponse = await fetch('http://vanl0073259.online-vm.com:3004/search', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "query": Object.filter(search, ([name, text]) => text !== ''),
          "start": 0,
          "end": (Math.floor(document.body.clientHeight * 1.5 / (18 + 18))) * 3
        })
      }).catch(e => console.log(e));
      const content = await rawResponse.json();
      let arrays = content.map(x => { return { ...x, select: false } })

      // updateData(arrays);
      updateData(arrays, 'wrapper');
    }
  }, [wrapper])

  const onMouseEnterHints = (e, text, x, flag = false) => {
    if (e.target.scrollWidth > e.target.offsetWidth && flag) {

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
    } else if (!flag) {
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
    document.getElementById("tooltipBtn").style.animation = '';
    clearTimeout(timer);
  }

  const [modal, setModal] = useState(false);


  return (
    <div>

      {status.length > 0 && <Header status={status} search={search} setArr={updateData} />}
      {modal && <Modal setModal={setModal} />}

      <div style={range ? { height: ((((document.body.clientHeight - 42) / 18) * (18 + 18 * -zoom)) + 42 * (1 + zoom)) - 86 * (1 + -Math.abs(zoom)), overflow: 'auto', width: (document.body.clientWidth) * (1 - zoom) + (1285.7143 * ((1 + zoom) ** 2) - 2523.8095 * (1 + zoom) + 1289.2262), transform: 'scale(' + (1 + zoom) + ')' } : { height: ((((document.body.clientHeight - 42) / 18) * (18 + 18 * -zoom)) + 42 * (1 + zoom)) - 86 * (1 + -Math.abs(zoom)), overflowY: 'hidden', width: (document.body.clientWidth) * (1 - zoom) + (1285.7143 * ((1 + zoom) ** 2) - 2523.8095 * (1 + zoom) + 1289.2262), transform: 'scale(' + (1 + zoom) + ')' }}
        onScroll={e => throttle(onScroll(e), 40)}
        ref={rootRef}
        className="speed tables zoom">
        {/* <Scroll height={document.body.clientHeight} width={document.body.clientWidth}> */}
        {status.length > 0 && <table style={{ width: 0 }} className={'crm-table speed'}>
          <thead>
            <tr className="table-header">


              <th style={{ minWidth: 27, position: 'sticky', left: 0, background: 'white', zIndex: 40, height: 0, top: 0 }}>
                <div style={{ position: 'absolute', background: 'white', height: 42, width: 43, top: 0 }}>

                </div>
              </th>


              <th>
              </th>
              {Object.keys(column).map((x, i) => {


                if (x === 'id' && column[x].show) {
                  return (

                    <TH style={{
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, left: 35, zIndex: 45, backgroundColor: '#F1F1F1'
                    }} className="header-id" hint={hints.id} key={i} wrapper={wrapper} setWrapper={setWrapper} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>


                      ID

                    </TH>
                  )
                }

                if (x === 'status' && column[x].show) {
                  return (

                    <TH style={{
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, left: 70, zIndex: 5, backgroundColor: '#fff'
                    }} className="header-status" zIndex={5} hint={hints.status} setWrapper={setWrapper} key={i} wrapper={wrapper} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} index={i} hint={hints.attribute} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Атрибут'}
                    </TH>
                  )
                }
                if (x === "ppo" && column[x].show) {
                  return (
                    <TH style={{
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} index={i} hint={hints.prro} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} index={i} hint={hints.pokupatel} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} index={i} hint={hints.country} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} hint={hints.tel} index={i} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} index={i} hint={hints.comm} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} hint={hints.sum} index={i} setWrapper={setWrapper} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Сумма'}
                    </TH>
                  )
                }
                if (x === "product" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} hint={hints.product} setWrapper={setWrapper} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} hint={hints.pay} setWrapper={setWrapper} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} index={i} setWrapper={setWrapper} hint={hints.delivery} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.addres} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.ttn} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.ttnStatus} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.prinyal} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.depart} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.add} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.open} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.accepted} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.prinyatZa} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.whosend} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.changed} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.finish} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.prinyal} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.send} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.otpravka} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.change} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.site} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
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
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.ip} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'IP'}
                    </TH>
                  )
                }
                if (x === "utm1" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2,
                    }} hint={hints.utm('utm_source')} setWrapper={setWrapper} key={i} wrapper={wrapper} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Source'}
                    </TH>
                  )
                }
                if (x === "utm2" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.utm('utm_medium')} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Medium'}
                    </TH>
                  )
                }
                if (x === "utm3" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.utm('utm_term')} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Term'}
                    </TH>
                  )
                }
                if (x === "utm4" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.utm('utm_content')} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Content'}
                    </TH>
                  )
                }
                if (x === "utm5" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.utm('utm_campaign')} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Campaign'}
                    </TH>
                  )
                }
                if (x === "additional_1" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 1'}
                    </TH>
                  )
                }
                if (x === "additional_2" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 2'}
                    </TH>
                  )
                }
                if (x === "additional_3" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 3'}
                    </TH>
                  )
                }
                if (x === "additional_4" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 4'}
                    </TH>
                  )
                }
                if (x === "additional_5" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 5'}
                    </TH>
                  )
                }
                if (x === "additional_6" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 6'}
                    </TH>
                  )
                }
                if (x === "additional_7" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 7'}
                    </TH>
                  )
                }
                if (x === "additional_8" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 8'}
                    </TH>
                  )
                }
                if (x === "additional_9" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 9'}
                    </TH>
                  )
                }
                if (x === "additional_10" && column[x].show) {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: (i + 1) % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} wrapper={wrapper} setWrapper={setWrapper} hint={hints.field} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 10'}
                    </TH>
                  )
                }
              }


              )}



            </tr>
            <tr className="crm-input">
              <th style={{ minWidth: 27, height: rowHeight, position: 'sticky', left: 0, background: 'white', zIndex: 10 }}></th>

              <th style={{ position: 'sticky', zIndex: 10, top: 24 }}>
                {wrapper && <div onClick={() => { onClickWrapper(false); document.querySelector('.refresh').lastChild.style.strokeOpacity = 1; }} className="podlozhka" style={{ height: '100vh', width: 4658, position: 'absolute', top: 0, left: 0, display: 'block', zIndex: 998 }}></div>}
              </th>



              {status.length > 0 && Object.keys(column).map((x, i) => {
                if (x === "id" && column[x].show) {
                  return (

                    <th style={{ maxWidth: column['id'].width, position: 'sticky', top: 24, left: 35, zIndex: 45 }}>
                      <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} name={'wrap-hide'} type={'id'} />
                    </th>
                  )
                }
                if (x === "status" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, left: 70, zIndex: 45 } : { position: 'sticky', top: 24, left: 70, zIndex: 45 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} setArr={updateData} search={search} keys={'status_id'} setRange={setRange} refresh={refresh} width={column[x].width - 15} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>
                  )
                }
                if (x === 'attribute' && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} name={'wrap-hide'} type={'purchaser'} />
                    </th>
                  )
                }
                if (x === "ppo" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">
                        <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} type={'ppo'} />
                        <DropdownSmall setRange={setRange} setArr={updateData} search={search} keys={'count_ppo'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={ppo} />
                      </div>
                    </th>
                  )
                }
                if (x === "bayer_name" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={'purchaser'} onWrapper={onClickWrapper} name={'wrap-hide'} type={'purchaser'} />
                    </th>
                  )
                }
                if (x === "localization" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownMedium setRange={setRange} setArr={updateData} search={search} keys={'country'} refresh={refresh} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} options={countries} />
                    </th>
                  )
                }
                if (x === "phone" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">
                        <DropdownSmall setRange={setRange} refresh={refresh} setArr={updateData} search={search} keys={'type_phone'} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderRight: '1px solid white' }} options={options} />
                        <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} type={'phone'} len={12} />
                        <DropdownSmall setRange={setRange} setArr={updateData} search={search} keys={'count_message'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={countR} />
                      </div>
                    </th>
                  )
                }
                if (x === "comment" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} name={'wrap-hide'} type={'comment'} len={500} />

                    </th>

                  )
                }
                if (x === "total" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} name={'wrap-hide'} type={'price'} />

                    </th>
                  )
                }
                if (x === "product" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">

                        <ProductDropdown setRange={setRange} refresh={refresh} width={(column[x].width - 68)} wrapper={wrapper} onWrapper={onClickWrapper} />

                        <DropdownSmall setRange={setRange} setArr={updateData} search={search} keys={'count_product'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={countR} />
                        <DropdownSmall setRange={setRange} setArr={updateData} search={search} keys={'count_resale'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={countR} />
                      </div>
                    </th>
                  )
                }
                if (x === "pay" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownMedium setRange={setRange} setArr={updateData} search={search} keys={x} refresh={refresh} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} options={pay} />

                    </th>
                  )
                }
                if (x === "delivery" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownMedium setRange={setRange} setArr={updateData} search={search} keys={x} refresh={refresh} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} options={deliveries} />

                    </th>
                  )
                }
                if (x === "addres" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={'address'} onWrapper={onClickWrapper} name={'wrap-hide'} type={'comment'} len={200} />
                    </th>
                  )
                }
                if (x === "ttn" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className="wrap-hide">
                        <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} type={'phone'} />

                        <DropdownSmall setRange={setRange} setArr={updateData} search={search} keys={'ttn_count'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} options={countR} />
                      </div>
                    </th>

                  )
                }
                if (x === "ttn_status" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} wrapper={wrapper} search={search} keys={x} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={200} />
                    </th>
                  )
                }
                if (x === "ttn_user" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} setArr={updateData} setRange={setRange} refresh={refresh} width={column[x].width - 30} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>
                  )
                }
                if (x === "office" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} setArr={updateData} setRange={setRange} refresh={refresh} width={column[x].width - 30} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>

                  )
                }
                if (x === "date1" && column[x].show) {



                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)} >
                      <Calendar refresh={refresh} search={search} keys={'add_order'} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>
                  )
                }
                if (x === "date2" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Range refresh={refresh} wrapper={wrapper} setRange={setRange} onWrapper={onClickWrapper} />
                    </th>
                  )
                }
                if (x === "date3" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>

                      <Calendar refresh={refresh} search={search} keys={'success_order'} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>

                  )
                }
                if (x === "date4" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Range refresh={refresh} wrapper={wrapper} setRange={setRange} onWrapper={onClickWrapper} />
                    </th>
                  )
                }
                if (x === "send" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} setArr={updateData} setRange={setRange} refresh={refresh} width={column[x].width - 30} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>

                  )
                }
                if (x === "change" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} setArr={updateData} setRange={setRange} refresh={refresh} width={column[x].width - 30} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>

                  )
                }

                if (x === "end" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Calendar refresh={refresh} search={search} keys={'send_order'} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>

                  )
                }

                if (x === "date5" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <DropdownLarge data={status} setArr={updateData} setRange={setRange} refresh={refresh} width={column[x].width - 30} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>

                  )
                }
                if (x === "date6" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Calendar refresh={refresh} search={search} keys={'send_order'} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />

                    </th>
                  )
                }
                if (x === "date7" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Range refresh={refresh} wrapper={wrapper} setRange={setRange} onWrapper={onClickWrapper} />

                    </th>


                  )
                }
                if (x === "date8" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <Calendar refresh={refresh} search={search} keys={'update_order'} width={column[x].width} wrapper={wrapper} onWrapper={onClickWrapper} />
                    </th>

                  )
                }
                if (x === "site" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} search={search} keys={x} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} name={'wrap-hide'} type={'site'} />

                    </th>
                  )
                }
                if (x === "ip" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <div className='wrap-hide'>
                        <SearchInput refresh={refresh} search={search} keys={x} wrapper={wrapper} onWrapper={onClickWrapper} type={'ip'} />
                        <DropdownSmall setRange={setRange} setArr={updateData} search={search} keys={'country_order'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={22} scrollWidth={53} options={countries} />
                        <DropdownSmall setRange={setRange} setArr={updateData} search={search} keys={'type_device'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={15} scrollWidth={53} options={device} />
                        <DropdownSmall setRange={setRange} setArr={updateData} search={search} keys={'type_os'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={15} scrollWidth={53} options={system} />
                        <DropdownSmall setRange={setRange} setArr={updateData} search={search} keys={'type_browser'} refresh={refresh} wrapper={wrapper} onWrapper={onClickWrapper} style={{ borderLeft: '1px solid white' }} width={17} scrollWidth={53} options={browser} />
                      </div>
                    </th>
                  )
                }
                if (x === "utm1" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}>
                      <SearchInput refresh={refresh} search={search} keys={x} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} />

                    </th>
                  )
                }
                if (x === "utm2" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm3" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm4" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm5" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_1" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_2" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_3" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_4" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_5" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_6" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_7" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_8" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_9" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_10" && column[x].show) {
                  return (
                    <th style={index === i ? { position: 'sticky', top: 24, zIndex: 11 } : { position: 'sticky', top: 24, zIndex: 3 }} onMouseEnter={e => setIndex(i)}><SearchInput search={search} keys={x} refresh={refresh} wrapper={wrapper} id={x + 'input'} onWrapper={onClickWrapper} type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
              }
              )}
            </tr>
            <tr style={{ height: 0, zIndex: -1, position: 'sticky', top: 24, left: 0 }} className="table-header">

              <th style={{ minWidth: 27, position: 'sticky', left: 0, background: 'white', zIndex: 10 }}></th>

              <th></th>
              <th></th>
              <th></th>
              <th></th>
              {Object.keys(column).slice(3).map((x, i) => {

                if (x === "ppo" && column[x].show) {
                  return (
                    <th>

                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "bayer_name" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "localization" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "phone" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "comment" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "total" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "product" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "pay" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "delivery" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "addres" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "ttn" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "ttn_status" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "ttn_user" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "office" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "date1" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "date2" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "date3" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "date4" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "send" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "change" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "end" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "date5" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>

                  )
                }
                if (x === "date6" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "date7" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>


                  )
                }
                if (x === "date8" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>


                  )
                }
                if (x === "site" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "ip" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm1" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm2" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm3" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm4" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "utm5" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_1" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_2" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_3" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_4" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_5" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_6" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_7" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_8" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_9" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
                if (x === "additional_10" && column[x].show) {
                  return (
                    <th>
                      {i % 2 === 0 && <Wrapper zoom={zoom} />}
                    </th>
                  )
                }
              }


              )}



            </tr>
          </thead>

          {data.length > 0 && <tbody className='disableHover' style={{ marginTop: 5 }}>
            <tr style={{ height: 1 + getTopHeight() }} />
            {data.slice(getStart(), getStart() + visible + 1).map((row, rowIndex) => (
              <tr
                style={((getStart() + rowIndex === 20) || (getStart() + rowIndex === 22) || getStart() + rowIndex === 23 || getStart() + rowIndex === 24 || getStart() + rowIndex === 25) || row.select ? { height: rowHeight } : { height: rowHeight }}
                key={getStart() + rowIndex}
                onDoubleClick={((getStart() + rowIndex !== 20) || (getStart() + rowIndex !== 22) || (getStart() + rowIndex !== 22) || (getStart() + rowIndex !== 24) || (getStart() + rowIndex !== 25)) ? e => {
                  setModal(true);
                  setTimeout(() => {
                    let table = document.querySelectorAll('.crm-table thead tr:first-child th');
                    let sum = [...table].slice(0, 4).reduce((x, y) => x + parseInt(y.clientWidth), 0);
                    let data = [...table].slice(4,);
                    let col = Object.keys(column).slice(2,);
                    leftScroll = document.querySelector('.tables').scrollLeft;
                    for (let index = 0; index < data.length; index++) {
                      const element = data[index];
                      if (sum + element.clientWidth < document.querySelector('.tables').scrollLeft) {
                        sum += element.clientWidth
                        column[col[index]].show = false;
                      } else if (sum + element.clientWidth > document.querySelector('.tables').scrollLeft + document.body.clientWidth) {
                        sum += element.clientWidth
                        column[col[index]].show = false;
                      } else {
                        sum += element.clientWidth
                      }
                    }
                    setColumn({ ...column })
                  }, 200);

                } : undefined}
                className={row.select ? "crm-main-table select-toggle speed" : ((getStart() + rowIndex === 20) || (getStart() + rowIndex === 22) || getStart() + rowIndex === 23 || getStart() + rowIndex === 24 || getStart() + rowIndex === 25) ? "crm-main-table selected-lock speed" : "crm-main-table speed"}
                onClick={((getStart() + rowIndex !== 20) && (getStart() + rowIndex !== 22) && (getStart() + rowIndex !== 23) && (getStart() + rowIndex !== 24) && (getStart() + rowIndex !== 25)) ? e => onClick(e, getStart() + rowIndex) : undefined}

              >
                <td style={{ minWidth: 27, height: rowHeight, position: 'sticky', left: 0, background: 'white', zIndex: 10 }} className="speed">
                  {((getStart() + rowIndex !== 20) && (getStart() + rowIndex !== 22) && (getStart() + rowIndex !== 23) && (getStart() + rowIndex !== 24) && (getStart() + rowIndex !== 25)) && <div className="first" style={{ width: 7, height: rowHeight, borderRadius: "3px 0 0 3px", position: 'absolute', left: 28, top: 0 }}></div>}
                  {((getStart() + rowIndex === 20) || (getStart() + rowIndex === 22) || getStart() + rowIndex === 23 || getStart() + rowIndex === 24 || getStart() + rowIndex === 25) && <img src={lock} style={{ position: 'absolute', left: 20, top: 3, opacity: 1 }} onMouseEnter={e => {
                    timer = setTimeout(() => {

                      document.getElementById("tooltipBtn").style.fontSize = '12px';

                      document.getElementById("tooltipBtn").innerHTML = `Заказ открыт пользователем <span class="lock-count">Василий Хмурый</span><br>Заказ заблокирован сервером для проверки статуса ТТН`;

                      let posElement = e.nativeEvent;

                      document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                      document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                      document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.25s forwards';
                    }, 100);



                  }}
                    onMouseLeave={onMouseLeaveHints} />}
                  {((((getStart() + rowIndex === 20) || (getStart() + rowIndex === 22) || getStart() + rowIndex === 23 || getStart() + rowIndex === 24 || getStart() + rowIndex === 25)) || (getStart() + rowIndex === 22)) && <div className="" style={{ zIndex: -1, width: '100vw', height: rowHeight, position: 'absolute', left: 28, top: 0 }} onMouseEnter={e => {
                    timer = setTimeout(() => {

                      document.getElementById("tooltipBtn").style.fontSize = '12px';

                      document.getElementById("tooltipBtn").innerHTML = `Заказ открыт пользователем <span class="lock-count">Василий Хмурый</span><br>Заказ заблокирован сервером для проверки статуса ТТН`;

                      let posElement = e.nativeEvent;

                      document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                      document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
                      document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.25s forwards';
                    }, 100);



                  }}
                    onMouseLeave={onMouseLeaveHints}
                  ></div>}
                  {getStart() + rowIndex === 21 && <div style={{ position: 'absolute', left: 19, top: 2, padding: 5 }} onMouseEnter={e => {
                    timer = setTimeout(() => {


                      document.getElementById("tooltipBtn").style.fontSize = '12px';

                      document.getElementById("tooltipBtn").innerHTML = 'Заказ не открывался';

                      let posElement = e.target.getBoundingClientRect();

                      document.getElementById("tooltipBtn").style.left = posElement.x + posElement.width + 5 + "px";
                      document.getElementById("tooltipBtn").style.top = posElement.y - 5 + "px";
                      document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.25s forwards';

                    }, 250);
                  }}
                    onMouseLeave={onMouseLeaveHints} ><div style={{ width: 4, height: 4, borderRadius: '100%', backgroundColor: '#00B9FF' }}></div></div>}
                </td>
                <td style={{ width: 0, height: rowHeight, position: 'sticky', left: 0, padding: 0 }} className="speed">

                  {(((getStart() + rowIndex !== 20) && (getStart() + rowIndex !== 22) && (getStart() + rowIndex !== 23) && (getStart() + rowIndex !== 24) && (getStart() + rowIndex !== 25)) && !row.select) ? <div className="last" style={{ zIndex: -1, width: (document.body.clientWidth) + (zoom !== 0 ? (document.body.clientWidth * -zoom + (45 * Math.abs(zoom * 10))) : 45), height: rowHeight, position: 'absolute', left: 28, top: 0 }}></div> : (((getStart() + rowIndex !== 20) || (getStart() + rowIndex !== 22) || (getStart() + rowIndex !== 22) || (getStart() + rowIndex !== 24) || (getStart() + rowIndex !== 25)) && row.select) && <div className="last" style={{ zIndex: -1, width: (document.body.clientWidth) + (zoom !== 0 ? (document.body.clientWidth * -zoom + (45 * Math.abs(zoom * 10))) : 45), height: rowHeight, position: 'absolute', left: 28, top: 0, background: 'rgba(81, 81, 81, 0.7)' }}></div>}
                </td>

                {
                  Object.keys(column).map((x, i) => {
                    if (x === 'id' && column[x].show) {
                      return (
                        <td className="id-table" style={{
                          position: 'sticky', background: '#eee',
                          left: 35, zIndex: 1,
                        }}>{row.id}
                        </td>
                      )
                    }
                    if (x === 'status' && column[x].show) {
                      return (

                        <td className="status-table" style={{
                          position: 'sticky', background: 'white',
                          left: 70, zIndex: 1,
                        }}>
                          <div className="new-zakaz color-form2" style={{ background: row.status_color, overflow: 'hidden', textOverflow: 'ellipsis', width: column['status'].width }} onMouseEnter={e => onMouseEnterHints(e, row.status_name, x, true)}
                            onMouseLeave={onMouseLeaveHints}>
                            {row.status_name}
                          </div>
                        </td>
                      )
                    }
                    if (x === 'attribute' && column[x].show) {
                      return (
                        <td style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, row.customer, x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.attribute}</td>
                      )
                    }
                    if (x === "ppo" && column[x].show) {
                      return (
                        <td className="prro-colum">
                          <span style={{ display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', width: column['ppo'].width }} className={'prro-number'} onMouseEnter={e => onMouseEnterHints(e, row.ppo, x)}
                            onMouseLeave={onMouseLeaveHints}>{row.ppo}</span>

                          <span className="ico-wrap">
                            <span className={"colorWhite icons " + row.count_ppo} onMouseEnter={e => onMouseEnterHints(e, ppo.filter(x => x.icon?.includes(row.count_ppo))[0].hint === 'sms' ? hints.sms : hints.mail, x)}
                              onMouseLeave={onMouseLeaveHints}></span>
                          </span>
                        </td>
                      )
                    }

                    if (x === "bayer_name" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['bayer_name'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, row.customer, x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.customer}</td>
                      )
                    }
                    if (x === "localization" && column[x].show) {
                      return (
                        <td className="country-block flags ua" onMouseEnter={e => onMouseEnterHints(e, row.country, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          {country[row.country]}
                        </td>
                      )
                    }
                    if (x === "phone" && column[x].show) {
                      return (
                        <td className="tel-colum" style={{ pointerEvents: 'all' }} >
                          <div className={'tel'} onMouseEnter={e => onMouseEnterHints(e, row.type_phone === "icon-Vector-3" ? "Lifecell" : 'Киевстар', x)}
                            onMouseLeave={onMouseLeaveHints} >
                            <span className={"icons " + row.type_phone}></span>


                            <span className="tel-number">{row.phone}</span>
                          </div>
                          {row.count_message !== "0" && <Konv count={row.count_message} />}
                        </td>
                      )
                    }
                    if (x === "comment" && column[x].show) {
                      return (
                        <td className="max-lenght-comment" onMouseEnter={e => onMouseEnterHints(e, row.comment, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column['comment'].width, overflow: "hidden", textOverflow: 'ellipsis', }}>{row.comment}</td>

                      )
                    }
                    if (x === "total" && column[x].show) {
                      return (
                        <td className="colum-sum">{row.total}</td>
                      )
                    }
                    if (x === "product" && column[x].show) {

                      let dopItem1 = 'test1';
                      let dopItem2 = 'test2';
                      let dopProdazhi = '<div style="text-align:center;display:block;margin-bottom:5px;">Доппродажа</div><div class="item-list-product"style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem1 + '</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem2 + '</div>';
                      return (
                        <td>
                          <span className="product-colum">
                            <span style={{ width: column['product'].width - 38, display: 'block', overflow: "hidden", textOverflow: 'ellipsis' }} className="max-lenght-product" onMouseEnter={e => onMouseEnterHints(e, '<div style="text-align:center;display:block;margin-bottom:5px;">Основной</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '</div><div class="item-list-product" style="margin-left:15px;margin-bottom:5px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '</div><div style="text-align:center;display:block;margin-bottom:5px;">Доппродажа</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem1 + '</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem2 + '</div>', x)}
                              onMouseLeave={onMouseLeaveHints}>{row.product}</span>
                            <Korobka count={row.count_product} onMouseEnter={e => onMouseEnterHints(e, '<div style="text-align:center;display:block;margin-bottom:5px;">Основной</div><div class="item-list-product" style="margin-left:15px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '</div><div class="item-list-product" style="margin-left:15px;margin-bottom:5px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + row.product + '', x)}
                              onMouseLeave={onMouseLeaveHints} />
                            <Additional count={row.count_resale} hints={dopProdazhi} />
                          </span>
                        </td>

                      )
                    }
                    if (x === "pay" && column[x].show) {
                      return (
                        <td className="colum-pay" onMouseEnter={e => onMouseEnterHints(e, pay.filter(x => x.icon?.includes(row.pay))[0].title, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          <span className={'icons colorWhite ' + row.pay}></span>
                        </td>
                      )
                    }
                    if (x === "delivery" && column[x].show) {
                      return (
                        <td className="colum-delivery" onMouseEnter={e => onMouseEnterHints(e, deliveries.filter(y => y.icon?.includes(row.delivery))[0].title, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          <span className={"icons " + row.delivery}></span>
                        </td>
                      )
                    }
                    if (x === "addres" && column[x].show) {
                      return (
                        <td className="addres-block" style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, row.address, x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.address}</td>
                      )
                    }
                    if (x === "ttn" && column[x].show) {
                      return (
                        <td className="colum-ttn">
                          <div className="ttn-position">


                            <TtnGroup ttn1={row.ttn} ttn2={row.ttn} />
                            {/* <span className="ttn-number">{row.ttn}</span> */}
                            <Korobka count={2} onMouseEnter={e => onMouseEnterHints(e, 'Остался 2 дн до платного хранения', x)}
                              onMouseLeave={onMouseLeaveHints} />
                          </div>
                        </td>

                      )
                    }
                    if (x === "ttn_status" && column[x].show) {
                      return (
                        <td onMouseEnter={e => onMouseEnterHints(e, row.ttn_status, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.ttn_status}</td>
                      )
                    }
                    if (x === "ttn_user" && column[x].show) {
                      return (
                        <td onMouseEnter={e => onMouseEnterHints(e, row.view_user, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.view_user}</td>
                      )
                    }
                    if (x === "office" && column[x].show) {
                      return (
                        <td className="otdel-block" onMouseEnter={e => onMouseEnterHints(e, row.office, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.office}</td>
                      )
                    }
                    if (x === "date1" && column[x].show) {
                      return (
                        <td className="date-block">{row.add_order[0]} <span className="date-time">{row.add_order[1]}</span> </td>

                      )
                    }
                    if (x === "date2" && column[x].show) {
                      return (
                        <td className="date-time otkrit" onMouseEnter={e => onMouseEnterHints(e, row.hints_open, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          <div className="acceptza time">{row.open_order}<span className="colorTime" style={{ backgroundColor: row.color_open_order }}></span></div>
                        </td>
                      )
                    }
                    if (x === "date3" && column[x].show) {
                      return (
                        <td className="date-block">{row.success_order[0]} <span className="date-time">{row.success_order[1]}</span></td>
                      )
                    }
                    if (x === "date4" && column[x].show) {
                      return (
                        <td className="date-time acceptza" onMouseEnter={e => onMouseEnterHints(e, row.hints_success, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          <div className="acceptza time">{row.success_order_user}<span className="colorTime" style={{ backgroundColor: row.color_success_order_user }}></span></div>
                        </td>
                      )
                    }
                    if (x === "send" && column[x].show) {
                      return (
                        <td className="date-block" onMouseEnter={e => onMouseEnterHints(e, row.view_user, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.view_user}</td>
                      )
                    }
                    if (x === "change" && column[x].show) {
                      return (
                        <td className="date-block" onMouseEnter={e => onMouseEnterHints(e, row.view_user, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.view_user}</td>
                      )
                    }
                    if (x === "end" && column[x].show) {
                      return (
                        <td className="date-block">{row.update_order[0]} <span className="date-time">{row.update_order[1]}</span></td>
                      )
                    }
                    if (x === "date5" && column[x].show) {
                      return (
                        <td className="date-block" onMouseEnter={e => onMouseEnterHints(e, row.view_user, x, true)}
                          onMouseLeave={onMouseLeaveHints} style={{ maxWidth: column[x].width, overflow: "hidden", textOverflow: 'ellipsis' }}>{row.view_user}</td>
                      )
                    }
                    if (x === "date6" && column[x].show) {
                      return (
                        <td className="date-block">{row.send_order[0]} <span className="date-time">{row.send_order[1]}</span> </td>
                      )
                    }
                    if (x === "date7" && column[x].show) {
                      return (
                        <td className="date-block" onMouseEnter={e => onMouseEnterHints(e, row.hints_send, x)}
                          onMouseLeave={onMouseLeaveHints} >
                          <div className="acceptza time">{row.send_order_user}<span className="colorTime" style={{ backgroundColor: row.color_send_order_user }}></span></div>
                        </td>
                      )
                    }
                    if (x === "date8" && column[x].show) {
                      return (
                        <td className="date-block">{row.update_order[0]} <span className="date-time">{row.update_order[1]}</span></td>
                      )
                    }
                    if (x === "site" && column[x].show) {
                      return (
                        <td onMouseEnter={e => onMouseEnterHints(e, lightHints(row.site, x), x)}
                          onMouseLeave={onMouseLeaveHints} >{row.domen}</td>)
                    }
                    if (x === "ip" && column[x].show) {
                      return (
                        <TD className={'ip-block'}>
                          <div className="ip-block-position">
                            <span className="ip-current">{row.ip}</span>
                            <span className="ip-icons-position">
                              <span className="flags ru" onMouseEnter={e => onMouseEnterHints(e, row.country, x)}
                                onMouseLeave={onMouseLeaveHints} >{country[row.country_order]}</span>
                              <span className={row.type_device + " icons colorWhite"} onMouseEnter={e => onMouseEnterHints(e, device.filter(x => x.icon?.includes(row.type_device))[0].title, x)}
                                onMouseLeave={onMouseLeaveHints} ></span>
                              <span className={row.type_os + " icons colorWhite"} onMouseEnter={e => onMouseEnterHints(e, system.filter(x => x.icon?.includes(row.type_os))[0]?.title || '', x)}
                                onMouseLeave={onMouseLeaveHints}></span>
                              <span className={row.type_browser + " icons colorWhite "} onMouseEnter={e => onMouseEnterHints(e, browser.filter(x => x.icon?.includes(row.type_browser))[0].title, x)}
                                onMouseLeave={onMouseLeaveHints}></span>
                            </span>
                          </div>
                        </TD>
                      )
                    }
                    if (x === "utm1" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm1'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_source, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_source}</td>
                      )
                    }
                    if (x === "utm2" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm2'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_medium, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_medium}</td>
                      )
                    }
                    if (x === "utm3" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm3'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_term, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_term}</td>
                      )
                    }
                    if (x === "utm4" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm4'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_content, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_content}</td>
                      )
                    }
                    if (x === "utm5" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['utm5'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.utm_campaign, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.utm_campaign}</td>
                      )
                    }
                    if (x === "additional_1" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_1'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_1, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_1}</td>
                      )
                    }
                    if (x === "additional_2" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_2'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_2, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_2}</td>
                      )
                    }
                    if (x === "additional_3" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_3'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_3, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_3}</td>
                      )
                    }
                    if (x === "additional_4" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_4'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_4, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_4}</td>
                      )
                    }
                    if (x === "additional_5" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_5'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_5, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_5}</td>
                      )
                    }
                    if (x === "additional_6" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_6'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_6, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_6}</td>
                      )
                    }
                    if (x === "additional_7" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_7'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_7, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_7}</td>
                      )
                    }
                    if (x === "additional_8" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_8'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_8, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_8}</td>
                      )
                    }
                    if (x === "additional_9" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_9'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_9, x), x, true)}
                          onMouseLeave={onMouseLeaveHints} >{row.additional_field_9}</td>
                      )
                    }
                    if (x === "additional_10" && column[x].show) {
                      return (
                        <td style={{ maxWidth: column['additional_10'].width, overflow: "hidden", textOverflow: 'ellipsis' }} onMouseEnter={e => onMouseEnterHints(e, lightHints(row.additional_field_10, x), x, true)}
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

    </div >
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);