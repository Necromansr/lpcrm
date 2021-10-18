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
