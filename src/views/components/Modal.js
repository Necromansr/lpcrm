import './modal.css';
import React from 'react';
import { Dropdown } from './Dropdown';


const Modal = ({
    visible = false,
    title = '',
    header = '',
    content = '',
    footer = '',
    onClose,
}) => {

    // создаем обработчик нажатия клавиши Esc
    const onKeydown = ({ key }) => {
        switch (key) {
            case 'Escape':
                onClose()
                break
        }
    }

    // c помощью useEffect цепляем обработчик к нажатию клавиш
    // https://ru.reactjs.org/docs/hooks-effect.html
    React.useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })


    // если компонент невидим, то не отображаем его
    if (!visible) return null;

    // или возвращаем верстку модального окна
    return <div className="modal" >


        <div className="bg-blur">
            <div className="bg-horizontal"></div>
            <div className="bg-vert"></div>
            <div className="bg-vert-2"></div>
            <div className="bg-horizontal-2"></div>
        </div>
        <div className="order orderModeOn" id="order">
            <div className="podlozhka-order"></div>
            <div className="order-header"><span className="order-info-link">Заказ № 265457</span><span className="arrow"></span><span className="order-info">Доп.информация Доп.информация Доп.информация</span><span className="switch-btn"><label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            </span><button className="btn-close"></button></div>
            <div className="container">
                <div className="wrap-contact-utm">
                    <table className="contact-table">
                        <tr>
                            <td colspan="2" className="contact-header">Контакт</td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div className="order-tooltip">Страна:</div>
                            </td>
                            <td className="contact-description country-style">
                                <div className="order-dropdown">
                                    <div className="btn-order order-tooltip"><span className="flags ua">&#x1F1FA;&#x1F1E6;</span></div>
                                    <div className="btn-menu"  >
                                        <div className="btn-menu-list select-btn"><span className="flags ua">&#x1F1FA;&#x1F1E6;</span> <span className="text-country order-tooltip">Украина</span></div>
                                        <div className="btn-menu-list"><span className="flags ru">&#x1F1F7;&#x1F1FA;</span> <span className="text-country order-tooltip">Россия</span></div>
                                        <div className="btn-menu-list"><span className="flags al">&#x1F1E6;&#x1F1F1;</span> <span className="text-country order-tooltip">Албания</span></div>
                                        <div className="btn-menu-list"><span className="flags ar">&#x1F1E6;&#x1F1F2;</span> <span className="text-country order-tooltip">Армения армения армения</span></div>
                                        <div className="btn-menu-list"><span className="flags al">&#x1F1E6;&#x1F1F1;</span> <span className="text-country order-tooltip">Албания</span></div>
                                        <div className="btn-menu-list"><span className="flags al">&#x1F1E6;&#x1F1F1;</span> <span className="text-country order-tooltip">Албания</span></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div className="order-tooltip">Отдел:</div>
                            </td>
                            <td className="contact-description otdel">
                                <Dropdown />
                            </td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div className="order-tooltip">Телефон:</div>
                            </td>
                            <td className="contact-description user-tel-block">
                                <div className="icon-operator">
                                    <span className="icon-Union-1 order-tooltip icons" ></span>
                                    <span className="icon-Vector-1 order-tooltip icons" ></span>
                                    <span className="icon-Vector-3 order-tooltip icons" ></span>
                                    <span className="icon-Union-18 order-tooltip icons" ></span>
                                    <span className="icon-Union order-tooltip icons" ></span>
                                    <span className="icon-uniE941 order-tooltip icons" ></span>
                                </div>
                                <div className="tel-input-block">
                                    <div className="underline-animation" >
                                        <span className="underline"></span>
                                        <input autocomplete="new-password" type="text" onkeyup="onPress(this)" className="input-user-phone input-order" placeholder="" />
                                    </div>
                                    <div className="tel-sms-block">
                                        <div className="send-sms order-tooltip">
                                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.66995 9.55H2.96995C1.92495 9.55 1.06995 8.695 1.06995 7.65V2.9C1.06995 1.855 1.92495 1 2.96995 1H8.66995C9.71495 1 10.5699 1.855 10.5699 2.9V7.65C10.5699 8.695 9.71495 9.55 8.66995 9.55Z" stroke="#9C9B9E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M2.97009 3.37524L5.15509 5.56024C5.53509 5.94024 6.10509 5.94024 6.48509 5.56024L8.67009 3.37524" stroke="#9C9B9E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span className="count">1</span>
                                        </div>
                                        <div className="magazin order-tooltip">
                                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.22685 10.5H3.04293C1.75978 10.5 0.784579 9.32656 1.04121 8.05105L1.70845 4.98983C1.91375 4.07146 2.73497 3.35718 3.71017 3.35718H7.55961C8.53481 3.35718 9.35603 4.02044 9.56133 4.98983L10.2286 8.05105C10.5365 9.27554 9.56133 10.5 8.22685 10.5Z" stroke="#9C9B9E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M3.85706 4.78571V2.64286C3.85706 1.46429 4.66063 0.5 5.64277 0.5C6.62491 0.5 7.42848 1.46429 7.42848 2.64286V4.78571" stroke="#9C9B9E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span className="count">1</span>
                                        </div>
                                        <div className="btn-call-block">
                                            <svg className="btn-call order-tooltip" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.39122 5.3844C9.01142 6.06847 8.57523 6.72488 8.00606 7.3249C7.43795 7.92812 6.72942 8.47601 5.81236 8.94411C5.74427 8.97709 5.67938 8.97709 5.62299 8.95475C5.53575 8.92177 5.44639 8.84943 5.35915 8.76219C5.29106 8.6941 5.20702 8.58559 5.11872 8.4675C4.76658 8.00365 4.32933 7.4281 3.71334 7.71534C3.69951 7.72172 3.68888 7.72917 3.67611 7.73556L1.61965 8.91751C1.61327 8.92071 1.60582 8.92815 1.59944 8.93134C1.32815 9.11752 1.21644 9.40583 1.21325 9.73138C1.21325 10.0633 1.3356 10.4367 1.51433 10.7506C1.75051 11.1665 2.10052 11.4421 2.50266 11.624C2.88565 11.8006 3.31227 11.8953 3.72186 11.9559C4.3655 12.0506 4.96765 11.99 5.58363 11.8006C6.18684 11.6144 6.79325 11.3059 7.45604 10.8963L7.50498 10.8655C7.80924 10.6761 8.13798 10.4718 8.46033 10.2325C9.64123 9.34094 10.8434 8.05472 11.6264 6.63871C12.2839 5.4493 12.6424 4.16627 12.4467 2.94282C12.3381 2.27259 12.0509 1.66299 11.5487 1.25978C11.1115 0.90764 10.5232 0.714016 9.76038 0.782104C9.67314 0.788487 9.59442 0.839553 9.55399 0.914024L8.23585 3.14177C8.04329 3.39178 8.01883 3.63966 8.12415 3.88754C8.21139 4.09074 8.38799 4.27798 8.62842 4.45245C8.6997 4.51309 8.78375 4.5748 8.87205 4.63863C9.16674 4.85247 9.50186 5.09929 9.38696 5.39079L9.39122 5.3844ZM5.70678 0.80402C5.76104 0.799764 5.8121 0.78487 5.85785 0.761465C5.90573 0.736996 5.94722 0.704016 5.98126 0.664653C6.0153 0.624225 6.0419 0.578479 6.05892 0.527413C6.07382 0.478475 6.0802 0.426346 6.07594 0.372088L6.07488 0.364641C6.07062 0.312512 6.05573 0.263574 6.03339 0.219955L6.02913 0.212508C6.00573 0.167825 5.97381 0.128462 5.93658 0.09761C5.89721 0.0635662 5.8504 0.0369695 5.79934 0.0199476C5.75146 0.00398951 5.7004 -0.00239371 5.64827 0.000797902L5.63763 0.00186178C5.27272 0.0305863 4.92058 0.0859075 4.58227 0.166762C4.24077 0.24868 3.91523 0.358258 3.60777 0.491242C3.29818 0.626353 3.00668 0.786997 2.73539 0.972111C2.46517 1.15722 2.21303 1.36681 1.9843 1.59979C1.7577 1.83065 1.55237 2.08492 1.37045 2.36046C1.19066 2.63387 1.03427 2.92857 0.902347 3.24134C0.774683 3.54774 0.670424 3.87328 0.591697 4.21798C0.515098 4.55522 0.462969 4.90949 0.437436 5.27972L0.436372 5.2978V5.31695C0.436372 5.36589 0.444883 5.41377 0.460841 5.45845C0.477863 5.50632 0.503396 5.54888 0.536376 5.58611C0.569356 5.62335 0.608719 5.6542 0.653401 5.67761C0.694893 5.69995 0.742766 5.71378 0.792768 5.72016L0.814046 5.72229H0.834259C0.884261 5.72335 0.932136 5.71484 0.976818 5.69782C1.02363 5.6808 1.06725 5.65526 1.10448 5.62228C1.14385 5.58824 1.17683 5.54569 1.20023 5.49781C1.22257 5.45207 1.23746 5.39994 1.24066 5.34674C1.263 5.01801 1.30768 4.70523 1.37471 4.41054C1.44173 4.10946 1.53216 3.82541 1.6428 3.55838C1.75344 3.29028 1.88643 3.03921 2.03856 2.80729C2.19282 2.57217 2.36623 2.35727 2.55773 2.16152C2.75135 1.9647 2.96306 1.7881 3.19286 1.63171C3.42372 1.47426 3.67266 1.33808 3.93863 1.22318L3.94289 1.22106C4.20673 1.10722 4.48652 1.0136 4.78122 0.943386C5.07484 0.876363 5.38337 0.828488 5.70678 0.80402ZM6.59192 4.59778C6.64618 4.59246 6.69724 4.57544 6.74193 4.55203C6.78874 4.5265 6.83023 4.49246 6.86214 4.45203C6.893 4.41373 6.91747 4.36905 6.93342 4.32117C6.94832 4.27649 6.9547 4.22862 6.95257 4.17968C6.95151 4.16585 6.95151 4.15521 6.94938 4.14244C6.94193 4.09138 6.92491 4.0435 6.90151 4.00201C6.87704 3.95839 6.84406 3.92009 6.80576 3.88924C6.76746 3.85839 6.72278 3.83392 6.6749 3.81796C6.63022 3.80413 6.58235 3.79668 6.53234 3.79881L6.49511 3.802C6.33659 3.81903 6.18446 3.84669 6.03764 3.88392C5.8887 3.92222 5.74721 3.97116 5.61422 4.02861L5.60997 4.03074C5.47486 4.09031 5.34826 4.15946 5.23017 4.23925C5.11101 4.32011 5.00037 4.41054 4.89824 4.51267C4.79717 4.61374 4.70568 4.72331 4.62483 4.84247C4.54397 4.96056 4.47376 5.08716 4.41312 5.22333C4.3546 5.35632 4.30567 5.49781 4.26737 5.64675C4.23013 5.7925 4.20353 5.94783 4.18651 6.11166C4.18119 6.16592 4.18651 6.21912 4.20034 6.26805L4.20141 6.27231C4.2163 6.32125 4.24183 6.36699 4.27269 6.40636L4.27375 6.40848C4.30673 6.44891 4.34716 6.48189 4.39397 6.50742C4.43865 6.53189 4.48971 6.54785 4.54397 6.55317H4.54929C4.60142 6.55743 4.65249 6.55211 4.70036 6.53828C4.75143 6.52338 4.79824 6.49785 4.83866 6.46487C4.87909 6.43189 4.9142 6.39146 4.93973 6.34359C4.9642 6.29891 4.98016 6.24784 4.98548 6.19465V6.19039C4.99718 6.07443 5.01633 5.96379 5.04293 5.85846C5.06952 5.75101 5.10357 5.65101 5.14399 5.55845C5.18442 5.4659 5.23123 5.37972 5.28443 5.301C5.33868 5.22121 5.39826 5.14886 5.46422 5.0829C5.53018 5.01694 5.60359 4.95737 5.68338 4.90417C5.76317 4.85098 5.8504 4.80417 5.94509 4.76268L5.95041 4.76055C6.04296 4.72012 6.14297 4.68714 6.24829 4.66055C6.35893 4.62969 6.47277 4.61054 6.59192 4.59778ZM6.16637 2.76579H6.17701L6.19084 2.76367C6.24084 2.75835 6.28765 2.74345 6.32915 2.72218C6.37383 2.69877 6.41319 2.66792 6.44617 2.63175C6.48021 2.59345 6.50681 2.54983 6.52383 2.50089C6.53979 2.45514 6.5483 2.40621 6.54724 2.35408V2.33599L6.54511 2.31897C6.53979 2.27003 6.5249 2.22322 6.50362 2.18173C6.48022 2.13705 6.44936 2.09662 6.41319 2.0647C6.37383 2.0296 6.32808 2.003 6.27702 1.98491C6.22808 1.96789 6.17595 1.96045 6.12169 1.96364C5.8387 1.98066 5.56954 2.01683 5.31528 2.07109C5.05995 2.12535 4.81845 2.19875 4.59397 2.29025C4.36737 2.3828 4.15566 2.49451 3.95991 2.6243C3.76628 2.75303 3.58755 2.90091 3.42691 3.06793C3.26733 3.23283 3.12477 3.41582 3.00136 3.61583C2.87902 3.81371 2.77369 4.02861 2.68858 4.25947C2.6056 4.48501 2.53964 4.72757 2.49283 4.98715C2.44709 5.24248 2.41943 5.51164 2.41091 5.79782L2.40985 5.81272C2.40985 5.86378 2.41943 5.91378 2.43857 5.95953C2.45772 6.00741 2.48538 6.04996 2.51943 6.0872C2.55454 6.1255 2.59815 6.15635 2.64709 6.17762C2.69284 6.1989 2.74497 6.21061 2.79923 6.21273H2.81731C2.86838 6.21167 2.91625 6.20209 2.96093 6.18401C3.00881 6.16486 3.05136 6.1372 3.08753 6.10315C3.12583 6.06698 3.15669 6.02443 3.17903 5.97549C3.2003 5.92868 3.21201 5.87761 3.21414 5.82229C3.22052 5.58399 3.24392 5.35951 3.28116 5.1478C3.31839 4.93396 3.37159 4.73502 3.43755 4.55203C3.50351 4.36905 3.58436 4.20095 3.67798 4.04669C3.77267 3.89137 3.88118 3.752 4.00246 3.6254C4.12587 3.4988 4.26205 3.38497 4.41205 3.28603C4.56312 3.18602 4.73015 3.09985 4.90888 3.02751L4.91314 3.02538C5.09399 2.9541 5.28762 2.89559 5.49507 2.85197C5.70359 2.80835 5.92594 2.77856 6.15999 2.76473L6.16637 2.76579Z" fill="#9C9B9E" />
                                            </svg>
                                            <div className="select-call">
                                                <svg className="btn-nextel order-tooltip" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.25749 0C5.9496 0 4.85969 0.432433 3.90601 1.18919V0L0.5 2.51351V12H3.90601H5.07765C4.91418 11.5405 4.83242 11.027 4.83242 10.4865V7.24323H3.90601V5.02703H4.83242V3.9189L7.47548 1.97297V5.02703H10.4455L7.47548 7.24323V10.4595C7.47548 11.4865 8.1022 11.9459 9.08313 11.9459C9.21935 11.9459 9.3556 11.973 9.49183 11.973H12.4074V5.62163C12.4074 2.21621 10.3638 0 7.25749 0Z" fill="#E7384E" />
                                                </svg>
                                                <svg className="btn-binotel order-tooltip" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 6C0.5 2.68629 3.18629 0 6.5 0C9.81371 0 12.5 2.68629 12.5 6C12.5 9.31371 9.81371 12 6.5 12C3.18629 12 0.5 9.31371 0.5 6ZM7.07078 6.44174C7.42477 6.06881 7.69706 5.65918 7.93384 5.23298L7.92911 5.23889C8.00133 5.05657 7.79178 4.90267 7.60827 4.77007C7.55263 4.72982 7.49935 4.69193 7.45555 4.65405C7.30519 4.54395 7.19509 4.42792 7.14063 4.30125C7.07552 4.14734 7.09091 3.99343 7.21048 3.83716L8.03211 2.44963C8.05815 2.40227 8.10669 2.37031 8.16115 2.36676C8.6359 2.32414 9.0029 2.44489 9.2752 2.66392C9.58657 2.91372 9.76652 3.29375 9.834 3.71166C9.95476 4.47291 9.73219 5.27204 9.32256 6.01316C8.83597 6.89517 8.08657 7.69667 7.35137 8.25073C7.1501 8.39991 6.94529 8.52658 6.75586 8.64497L6.72627 8.66391C6.31427 8.91964 5.93542 9.11143 5.56013 9.22745C5.17536 9.34584 4.80006 9.38373 4.39991 9.32453C4.14537 9.28783 3.87899 9.22745 3.64103 9.11853C3.39004 9.00369 3.17339 8.83321 3.0254 8.57394C2.91411 8.37741 2.83834 8.14537 2.83834 7.93818C2.83953 7.73574 2.90938 7.55697 3.07868 7.44095C3.08341 7.43858 3.08815 7.43503 3.0917 7.43266L4.37149 6.69627C4.37978 6.69154 4.38688 6.6868 4.39517 6.68325C4.77875 6.50448 5.05105 6.8632 5.27007 7.15208C5.32571 7.22548 5.37899 7.29414 5.42043 7.33558C5.47607 7.39004 5.53053 7.43384 5.58499 7.45515C5.62051 7.47054 5.66194 7.47054 5.70338 7.44923C6.2752 7.15918 6.71679 6.81703 7.07078 6.44174Z" fill="#AD1167" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="record order-tooltip">
                                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.665999 7.91637C1.1322 7.91637 1.332 8.38261 1.332 8.69341V11.223C1.332 11.5338 1.1322 12 0.665999 12C0.1998 12 0 11.5338 0 11.223V8.69341C0 8.38261 0.1998 7.91637 0.665999 7.91637Z" fill="#9C9B9E" />
                                                <path d="M3.46319 2.15695C3.92939 2.15695 4.12919 2.62318 4.12919 2.93398V11.223C4.12919 11.5338 3.92939 12 3.46319 12C2.99699 12 2.79719 11.5338 2.79719 11.223V2.93398C2.79719 2.62318 2.99699 2.15695 3.46319 2.15695Z" fill="#9C9B9E" />
                                                <path d="M6.26039 6.03778C6.72659 6.03778 6.92639 6.50401 6.92639 6.81481V11.223C6.92639 11.5338 6.72659 12 6.26039 12C5.79419 12 5.59439 11.5338 5.59439 11.223V6.81481C5.59439 6.50401 5.79419 6.03778 6.26039 6.03778Z" fill="#9C9B9E" />
                                                <path d="M9.05758 8.87637C9.52378 8.87637 9.72358 9.34261 9.72358 9.65341V11.223C9.72358 11.5338 9.52378 12 9.05758 12C8.59138 12 8.39158 11.5338 8.39158 11.223V9.65341C8.39158 9.34261 8.59138 8.87637 9.05758 8.87637Z" fill="#9C9B9E" />
                                                <path d="M11.8548 5.16058C12.321 5.16058 12.5208 5.62682 12.5208 5.93762V11.223C12.5208 11.5338 12.321 12 11.8548 12C11.3886 12 11.1888 11.5338 11.1888 11.223V5.93762C11.1888 5.62682 11.3886 5.16058 11.8548 5.16058Z" fill="#9C9B9E" />
                                                <path d="M14.652 0C15.1182 0 15.318 0.466237 15.318 0.777036V11.223C15.318 11.5338 15.1182 12 14.652 12C14.1858 12 13.986 11.5338 13.986 11.223V0.777036C13.986 0.466237 14.1858 0 14.652 0Z" fill="#9C9B9E" />
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div className="order-tooltip">Покупатель:</div>
                            </td>
                            <td className="contact-description">
                                <div className="user-input-block">
                                    <div className="underline-animation" >
                                        <span className="underline"></span>
                                        <input autocomplete="new-password" type="text" data-count="80" className="input-user input-order pokupatel-validation" placeholder="" />
                                    </div>
                                </div>

                            </td>
                        </tr>

                        <tr>
                            <td className="contact-list">
                                <div className="order-tooltip">E-mail:</div>
                            </td>
                            <td className="contact-description">
                                <button className="generate-email order-tooltip">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.4761 12C11.1898 12 10.9523 11.745 10.9523 11.4375V9.1725L9.95343 10.245C7.77416 12.585 4.22584 12.585 2.04657 10.245C1.45285 9.6075 1.00582 8.85 0.726426 8.0025C0.628638 7.71 0.77532 7.3875 1.04773 7.2825C1.32014 7.1775 1.62049 7.335 1.71828 7.6275C1.94179 8.3175 2.30501 8.9325 2.78696 9.45C4.56112 11.355 7.43888 11.355 9.21304 9.45L10.2119 8.3775H8.10245C7.81607 8.3775 7.57858 8.1225 7.57858 7.815C7.57858 7.5075 7.81607 7.2525 8.10245 7.2525H11.4761C11.546 7.2525 11.6158 7.2675 11.6787 7.2975C11.7416 7.3275 11.7974 7.365 11.8463 7.4175C11.8952 7.47 11.9371 7.53 11.9581 7.5975C11.986 7.665 12 7.74 12 7.815V11.4375C12 11.7525 11.7625 12 11.4761 12ZM10.7776 4.7475C10.5611 4.7475 10.3586 4.605 10.2817 4.3725C10.0582 3.6825 9.69499 3.075 9.21304 2.55C7.43888 0.645 4.56112 0.6525 2.78696 2.55L1.78813 3.6225H3.89756C4.18393 3.6225 4.42142 3.8775 4.42142 4.185C4.42142 4.4925 4.18393 4.7475 3.89756 4.7475H0.523865C0.454016 4.7475 0.384168 4.7325 0.328289 4.7025C0.27241 4.68 0.216531 4.6425 0.167637 4.59C0.160652 4.5825 0.153667 4.575 0.146682 4.5675C0.097788 4.5225 0.0628638 4.4625 0.0419092 4.4025C0.0139697 4.335 0 4.2675 0 4.185V0.5625C0 0.2475 0.237485 0 0.523865 0C0.810244 0 1.04773 0.255 1.04773 0.5625V2.8275L2.04657 1.755C4.22584 -0.585 7.77416 -0.585 9.95343 1.755C10.5471 2.3925 10.9942 3.15 11.2736 3.9975C11.3714 4.29 11.2247 4.6125 10.9523 4.7175C10.8964 4.74 10.8335 4.7475 10.7776 4.7475Z" fill="#9C9B9E" />
                                    </svg>
                                </button>
                                <div className="email-input-block">
                                    <div className="underline-animation" >
                                        <span className="underline"></span>
                                        <input autocomplete="new-password" type="text" className="input-user-email input-order" placeholder="" />
                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div className="order-tooltip">ПРРО:</div>
                            </td>
                            <td className="contact-description">
                                <button className="btnplus btnprro btnprro-hover order-tooltip">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.712422 0H2.5V1H1V2.5H0V0.894312C0 0.252317 0.224492 0 0.712422 0ZM1 9.5V11H2.5V12H0.712422C0.224492 12 0 11.7489 0 11.1057V9.5H1ZM9.5 0H11.2876C11.7755 0 12 0.252317 12 0.894312V2.5H11V1H9.5V0ZM12 9.5V11.2257C12 11.7477 11.7755 12 11.2876 12H9.5V11H11V9.5H12Z" fill="#9C9B9E" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.13152 2.12012H5.51904V5.49496H2.13152V2.12012ZM2.12 6.48338H5.50636V9.85823H2.12V6.48338ZM3.06642 7.42865H4.56455V8.91641H3.06642V7.42865ZM6.48556 2.12127H9.87078V5.49496H6.48441V2.12012L6.48556 2.12127ZM7.43199 3.06424H8.93011V4.55199H7.43199V3.06424ZM3.0814 3.06424H4.57953V4.55199H3.0814V3.06424Z" fill="#9C9B9E" />
                                        <path d="M8.41042 8.89401V9.85426L9.88551 9.86233V7.45811H8.90105V8.89401H8.41042Z" fill="#9C9B9E" />
                                        <path d="M7.45798 9.83633V8.89426L6.47699 8.89401V9.83633H7.45798Z" fill="#9C9B9E" />
                                        <path d="M6.47699 6.49811H7.92V7.44011H7.45798V7.92011H6.47699V6.49811Z" fill="#9C9B9E" />
                                    </svg>
                                </button>
                                <div className="prro-block">
                                    <a href="https://api.checkbox.in.ua/api/v1/receipts/dfc0e302-2b89-286b-af46-14df56612a22/html" target="_blank" className="prro-generation order-tooltip"></a>
                                    <div className="prro-email-sms">
                                        <span className="icon-Vector-21 colorWhite icons icons-tooltip"></span>
                                        <svg className="prro-sms" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6667 12.5H3.66667C2.2 12.5 1 11.4 1 10.0556V3.94444C1 2.6 2.2 1.5 3.66667 1.5H11.6667C13.1333 1.5 14.3333 2.6 14.3333 3.94444V10.0556C14.3333 11.4 13.1333 12.5 11.6667 12.5Z" stroke="#9C9B9E" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.66678 4.55605L6.73344 7.36716C7.26678 7.85605 8.06678 7.85605 8.60011 7.36716L11.6668 4.55605" stroke="#9C9B9E" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <svg className="prro-email" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.84212 0.00726604C4.87112 0.0558977 4.0606 0.255285 3.25981 0.641092C2.12509 1.189 1.31295 2.01087 0.708309 3.22503C0.314398 4.01772 0.0874539 4.84445 0.0161285 5.75223C-0.0227763 6.23854 0.0112654 6.97611 0.090696 7.44135C0.230105 8.24376 0.544585 9.0559 0.953085 9.67514C1.66148 10.7434 2.82862 11.4745 4.35401 11.8068C5.05268 11.9592 5.64597 12.0111 6.51809 11.9981C7.0968 11.99 7.38534 11.9657 7.83275 11.8895C8.89938 11.7063 9.82986 11.3043 10.5464 10.7142C10.736 10.557 11.057 10.2328 11.1996 10.0528C11.3423 9.87291 11.5255 9.59085 11.6308 9.39146C11.6811 9.29744 11.7216 9.21477 11.7216 9.2099C11.7216 9.20342 11.4314 9.19856 11.0781 9.20018H10.4329L10.3194 9.33796C9.69855 10.095 8.70648 10.5926 7.45505 10.7774C6.77907 10.878 5.76269 10.878 5.08672 10.7791C4.09302 10.6316 3.23226 10.2895 2.61951 9.79672C1.97271 9.27637 1.47992 8.48043 1.24973 7.58562C0.988748 6.56923 1.08277 5.31779 1.50261 4.20576C1.88194 3.2072 2.46064 2.46152 3.26792 1.93306C3.92119 1.50511 4.64418 1.26681 5.58599 1.17279C5.83726 1.14686 6.55213 1.14686 6.80177 1.17279C7.86679 1.27978 8.66596 1.62344 9.28519 2.24106C9.88173 2.83436 10.2157 3.53951 10.2967 4.37597C10.3227 4.6483 10.3081 5.10057 10.2627 5.3648C10.0844 6.42009 9.45702 7.38786 8.63516 7.88227C8.44874 7.99412 8.23476 8.06059 8.13102 8.03789C7.96567 8.00223 7.91056 7.8612 7.9527 7.57265C7.98026 7.37164 7.97215 7.41541 8.28501 5.89164C8.34823 5.58364 8.40659 5.29996 8.4147 5.25943C8.4228 5.21891 8.48116 4.93522 8.54438 4.62723C8.6076 4.31923 8.66596 4.03555 8.67406 3.99502C8.68217 3.9545 8.74052 3.67081 8.80374 3.36282C8.86696 3.05482 8.9237 2.77924 8.92856 2.75006L8.93829 2.69819H8.13588H7.33347L7.26376 3.01754C7.22648 3.19423 7.19082 3.34823 7.18433 3.35795C7.17785 3.37092 7.14056 3.33364 7.08545 3.25583C6.8504 2.92676 6.49701 2.69657 6.07717 2.59607C5.94424 2.56527 5.88102 2.5604 5.56168 2.56202C5.24396 2.56202 5.17425 2.56689 5.02674 2.59769C4.50315 2.71116 4.06222 2.94621 3.66831 3.32229C3.01828 3.94153 2.53359 4.86552 2.36176 5.81058C2.29206 6.18829 2.26612 6.76538 2.3034 7.09931C2.37473 7.73151 2.59519 8.23404 2.97613 8.62957C3.30034 8.96675 3.68615 9.18072 4.13679 9.27312C4.30538 9.30716 4.76089 9.32175 4.9311 9.29744C5.40444 9.22936 5.81618 9.03159 6.18416 8.69441C6.23441 8.64902 6.27818 8.61336 6.2798 8.6166C6.28142 8.61984 6.29763 8.66361 6.31384 8.71224C6.3803 8.91001 6.54078 9.10291 6.71099 9.19045C6.86985 9.26988 7.01899 9.29906 7.32374 9.30716C8.65461 9.34769 9.78285 8.71711 10.6096 7.46891C11.258 6.4898 11.5125 5.38911 11.3715 4.18955C11.2758 3.37578 10.9694 2.57337 10.5091 1.92982C9.72935 0.842101 8.40335 0.154781 6.83419 0.0250978C6.53268 0.000782013 6.13066 -0.00732327 5.84212 0.00726604ZM5.94262 3.69513C6.34464 3.77942 6.66884 4.11984 6.78394 4.58022C6.84392 4.82175 6.86013 5.19135 6.82446 5.51556C6.78232 5.90785 6.64453 6.44279 6.47594 6.86102C6.31546 7.26141 6.17119 7.48998 5.91993 7.74124C5.66867 7.9925 5.42875 8.11894 5.11427 8.16271C4.76575 8.21134 4.4691 8.1076 4.22433 7.84985C3.97955 7.59373 3.8596 7.19657 3.8596 6.63894C3.8596 5.91919 4.12058 4.95143 4.44803 4.45702C4.83059 3.87831 5.40768 3.58328 5.94262 3.69513Z" fill="#9C9B9E" />
                                        </svg>
                                        <button className="btnplus btnprro-back order-tooltip">
                                            <svg width="15" height="12" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9093 2.39222H1.78071L3.22773 0.911265C3.43142 0.702793 3.43142 0.364848 3.22773 0.156376C3.02398 -0.0521551 2.69383 -0.0520958 2.49008 0.156376L0.152771 2.54862C-0.0509238 2.75709 -0.0509238 3.09503 0.152771 3.3035L2.49008 5.69562C2.59196 5.79989 2.72542 5.85196 2.85888 5.85196C2.99234 5.85196 3.12579 5.79983 3.22767 5.69562C3.43137 5.48715 3.43137 5.14921 3.22767 4.94074L1.78065 3.45978H11.9093C13.0383 3.45978 13.9569 4.3999 13.9569 5.55542C13.9569 6.71094 13.0383 7.65105 11.9093 7.65105H9.59971C9.31164 7.65105 9.07816 7.89001 9.07816 8.18483C9.07816 8.47966 9.31164 8.71862 9.59971 8.71862H11.9093C13.6135 8.71862 15 7.29959 15 5.55542C15 3.81125 13.6135 2.39222 11.9093 2.39222Z" fill="#9C9B9E" />
                                                <path d="M5.47967 7.65101C5.1916 7.65101 4.95812 7.88997 4.95812 8.1848C4.95812 8.47962 5.1916 8.71858 5.47967 8.71858H7.7842C8.07227 8.71858 8.30575 8.47962 8.30575 8.1848C8.30575 7.88997 8.07227 7.65101 7.7842 7.65101H5.47967Z" fill="#9C9B9E" />
                                                <path d="M1.26009 7.65101C0.972016 7.65101 0.738535 7.88997 0.738535 8.1848C0.738535 8.47962 0.972016 8.71858 1.26009 8.71858H3.56462C3.85269 8.71858 4.08617 8.47962 4.08617 8.1848C4.08617 7.88997 3.85269 7.65101 3.56462 7.65101H1.26009Z" fill="#9C9B9E" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div className="order-tooltip">Оплата:</div>
                            </td>
                            <td className="contact-description pay-method">
                                <div className="order-dropdown">
                                    <div className="btn-order order-tooltip"><span className="icon-Vector-15 icons"></span></div>
                                    <div className="btn-menu"  >
                                        <div className="btn-menu-list select-btn"><span className="icon-Vector-15 icons"></span> <span className="text-pay order-tooltip">Предоплата</span></div>
                                        <div className="btn-menu-list"><span className="icon-Vector-17 icons"></span> <span className="text-pay order-tooltip">Наложенный платёж</span></div>
                                        <div className="btn-menu-list"><span className="icon-Vector-19 icons"></span> <span className="text-pay order-tooltip">Оплачен</span></div>
                                        <div className="btn-menu-list"><span className="icon-Vector-16 icons"></span> <span className="text-pay order-tooltip">Обмен</span></div>
                                        <div className="btn-menu-list"><span className="icon-Vector-18 icons"></span> <span className="text-pay order-tooltip">Отказ</span></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="contact-list">
                                <div className="order-tooltip">Статус:</div>
                            </td>
                            <td className="contact-description status">
                                <div className="order-dropdown">
                                    <div className="btn-order"><span className="menu-list-wrapper"><span className="color-515151-before order-tooltip text-status">Новый</span></span>
                                    </div>
                                    <div className="btn-order-input">
                                        <input className="btn-order-search" type="text" />
                                        <div className="btn-order-count order-tooltip"></div>
                                    </div>
                                    <div className="btn-menu"  >
                                        <div className="btn-menu-list select-btn"><span className="menu-list-wrapper"><span className="color-515151-before order-tooltip findFunction text-status">Новый</span></span>
                                        </div>
                                        <div className="btn-menu-list"><span className="menu-list-wrapper"><span className="color-91d100-before order-tooltip findFunction text-status">Принят</span></span>
                                        </div>
                                        <div className="btn-menu-list"><span className="menu-list-wrapper"><span className="color-fd7777-before order-tooltip findFunction text-status">Отказ Отказ Отказ Отказ Отказ Отказ</span></span>
                                        </div>
                                        <div className="btn-menu-list"><span className="menu-list-wrapper"><span className="color-e2d317-before order-tooltip findFunction text-status">Отправлен</span></span>
                                        </div>
                                        <div className="btn-menu-list"><span className="menu-list-wrapper"><span className="color-c6b922-before order-tooltip findFunction text-status">Передан</span></span>
                                        </div>
                                        <div className="btn-menu-list"><span className="menu-list-wrapper"><span className="color-928c42-before order-tooltip findFunction text-status">Упакован</span></span>
                                        </div>
                                        <div className="btn-menu-list"><span className="menu-list-wrapper"><span className="color-64a727-before order-tooltip findFunction text-status">Выкуплен</span></span>
                                        </div>
                                        <div className="btn-menu-list"><span className="menu-list-wrapper"><span className="color-00CC00-before order-tooltip findFunction text-status">Завершён</span></span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>

                    </table>
                    <div className="comment-block">
                        <div className="comment">Комментарий</div>
                        <div className="comment-wrapper">
                            <textarea className="comment-input-order input-order" placeholder=""></textarea>
                        </div>
                    </div>
                    <div className="field-wrapper">
                        <table className="field-table">
                            <tr>
                                <td className="contact-header order-tooltip">Дополнительные поля<span className="pen-logo"></span></td>
                            </tr>
                        </table>
                        <div className="field-block"  >
                            <table>
                                <tr>
                                    <td className="field-number">1</td>
                                    <td className="field-description">
                                        <div className="underline-animation">
                                            <span className="underline"></span>
                                            <input autocomplete="new-password" type="text" className="field-input input-order firstLetterUpper" data-count="200" placeholder="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="field-number">2</td>
                                    <td className="field-description">
                                        <div className="underline-animation">
                                            <span className="underline"></span>
                                            <input autocomplete="new-password" type="text" className="field-input input-order firstLetterUpper" data-count="200" placeholder="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="field-number">3</td>
                                    <td className="field-description">
                                        <div className="underline-animation">
                                            <span className="underline"></span>
                                            <input autocomplete="new-password" type="text" className="field-input input-order firstLetterUpper" data-count="200" placeholder="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="field-number">4</td>
                                    <td className="field-description">
                                        <div className="underline-animation">
                                            <span className="underline"></span>
                                            <input autocomplete="new-password" type="text" className="field-input input-order firstLetterUpper" data-count="200" placeholder="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="field-number">5</td>
                                    <td className="field-description">
                                        <div className="underline-animation">
                                            <span className="underline"></span>
                                            <input autocomplete="new-password" type="text" className="field-input input-order firstLetterUpper" data-count="200" placeholder="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="field-number">6</td>
                                    <td className="field-description">
                                        <div className="underline-animation">
                                            <span className="underline"></span>
                                            <input autocomplete="new-password" type="text" className="field-input input-order firstLetterUpper" data-count="200" placeholder="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="field-number">7</td>
                                    <td className="field-description">
                                        <div className="underline-animation">
                                            <span className="underline"></span>
                                            <input autocomplete="new-password" type="text" className="field-input input-order firstLetterUpper" data-count="200" placeholder="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="field-number">8</td>
                                    <td className="field-description">
                                        <div className="underline-animation">
                                            <span className="underline"></span>
                                            <input autocomplete="new-password" type="text" className="field-input input-order firstLetterUpper" data-count="200" placeholder="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="field-number">9</td>
                                    <td className="field-description">
                                        <div className="underline-animation">
                                            <span className="underline"></span>
                                            <input autocomplete="new-password" type="text" className="field-input input-order firstLetterUpper" data-count="200" placeholder="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="field-number">10</td>
                                    <td className="field-description">
                                        <div className="underline-animation">
                                            <span className="underline"></span>
                                            <input autocomplete="new-password" type="text" className="field-input input-order firstLetterUpper" data-count="200" placeholder="" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>
                <div className="wrap-delivery-info-fields">

                    <table className="delivery-table">
                        <tr>
                            <td colspan="2" className="contact-header">Доставка</td>
                        </tr>
                        <tr>
                            <td className="delivery-list">
                                <div className="order-tooltip">Вид:</div>
                            </td>
                            <td className="delivery-description delivery-mail">
                                <div className="order-dropdown">
                                    <div className="btn-order order-tooltip"><span className="icon-Union-3 icons"></span></div>
                                    <div className="btn-menu"  >
                                        <div className="btn-menu-list select-btn"><span className="icon-Union-3 icons"></span> <span className="text-delivery">Новая почта</span></div>
                                        <div className="btn-menu-list"><span className="icon-Vector-2 icons"></span> <span className="text-delivery">Justin</span></div>
                                        <div className="btn-menu-list"><span className="icon-ukrposhta icons"></span> <span className="text-delivery">Укрпочта</span></div>
                                        <div className="btn-menu-list"><span className="icon-Union-4 icons"></span> <span className="text-delivery">Самовывоз</span></div>
                                        <div className="btn-menu-list"><span className="icon-Union-4 icons"></span> <span className="text-delivery">Самовывоз</span></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="delivery-list">
                                <div className="order-tooltip">Адрес:</div>
                            </td>
                            <td className="delivery-description">
                                <div className="delivery-chose-btn">
                                    <button className="btn-find-otdel order-tooltip">

                                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.72199 5.46189C3.72199 5.21843 3.96848 4.9493 4.18693 4.9493H5.96965C6.18809 4.9493 6.43459 5.21843 6.43459 5.46189L6.43598 7.45975C6.43598 7.70321 6.18948 7.97234 5.97103 7.97234H4.18693C3.96848 7.97234 3.72199 7.70321 3.72199 7.45975V5.46189Z" fill="#9C9B9E" />
                                            <path d="M7.33864 5.46189C7.33864 5.21843 7.58514 4.9493 7.80359 4.9493H9.5863C9.80475 4.9493 10.0512 5.21843 10.0512 5.46189L10.0526 7.45975C10.0526 7.70321 9.80614 7.97234 9.58769 7.97234H7.80359C7.58514 7.97234 7.33864 7.70321 7.33864 7.45975V5.46189Z" fill="#9C9B9E" />
                                            <path d="M9.14697 9.48955C9.14697 9.24609 9.39347 8.97696 9.61191 8.97696H11.3946C11.6131 8.97696 11.8596 9.24609 11.8596 9.48955L11.861 11.4874C11.861 11.7309 11.6145 12 11.396 12H9.61191C9.39347 12 9.14697 11.7309 9.14697 11.4874V9.48955Z" fill="#9C9B9E" />
                                            <path d="M5.53032 9.48955C5.53032 9.24609 5.77681 8.97696 5.99526 8.97696H7.77798C7.99642 8.97696 8.24292 9.24609 8.24292 9.48955L8.2443 11.4874C8.2443 11.7309 7.99781 12 7.77936 12H5.99526C5.77681 12 5.53032 11.7309 5.53032 11.4874V9.48955Z" fill="#9C9B9E" />
                                            <path d="M1.91355 9.48955C1.91355 9.24609 2.16004 8.97696 2.37849 8.97696H4.16121C4.37965 8.97696 4.62615 9.24609 4.62615 9.48955L4.62754 11.4874C4.62754 11.7309 4.38104 12 4.1626 12H2.37849C2.16004 12 1.91355 11.7309 1.91355 11.4874V9.48955Z" fill="#9C9B9E" />
                                            <path d="M12.0983 4.00288L6.88656 1.28549L1.6748 4.00288C1.6748 4.00288 1.13662 4.15068 0.946564 3.78C0.728116 3.35395 1.03047 3.05637 1.26266 2.93394C1.26266 2.93394 5.96553 0.311839 6.28656 0.134795C6.6076 -0.0422485 7.16329 -0.047597 7.48656 0.134801C7.80983 0.317199 12.3041 2.80687 12.5105 2.93394C12.7427 3.05637 12.925 3.35395 12.7066 3.78C12.5165 4.15068 12.0983 4.00288 12.0983 4.00288Z" fill="#9C9B9E" />
                                        </svg>
                                    </button>
                                    <button className="btnplus btn-find-addres order-tooltip">
                                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7317 6.61659L10.5501 3.51801V0.642857C10.5501 0.287829 10.3214 0 9.97276 0C9.62417 0 9.42658 0.287829 9.42658 0.642857V2.23239L7.41933 0.329657C7.17286 0.0786429 6.77318 0.0786429 6.52671 0.3297L0.214818 6.75806C-0.0316908 7.00907 -0.108929 7.41416 0.214818 7.66719C0.214818 7.66719 0.654835 7.97987 1.10743 7.52576C1.56003 7.07164 2.13399 6.4803 2.13399 6.4803V11.3571C2.13399 11.7122 2.41661 12 2.7652 12H5.71085H8.23569H11.1813C11.5299 12 11.8126 11.7122 11.8126 11.3571V6.48039L12.8391 7.5258C13.0855 7.77681 13.6241 7.9182 13.8706 7.66719C14.1171 7.41609 13.9782 6.86764 13.7317 6.61659ZM6.2032 8.14286V10.8557H6.97327H7.74335V8.14286H6.2032ZM8.8669 10.8557H10.689V5.33623L6.97306 1.55199L3.25755 5.33601V10.8557H5.07964V7.5C5.07964 7.14497 5.36225 6.85714 5.71085 6.85714H8.23569C8.58429 6.85714 8.8669 7.14497 8.8669 7.5V10.8557Z" fill="#9C9B9E" />
                                        </svg>

                                    </button>
                                </div>
                                <div className="samovivoz-block">
                                    <div className="underline-animation"><span className="underline"></span><input autocomplete="new-password" type="text" className="input-order" placeholder="" /></div>
                                </div>
                                <div className="addres-delivery-block">
                                    <div className="addres-delivery-wrapper"  >

                                    </div>
                                    <div className="addres-menu-find"  >

                                    </div>
                                </div>
                                <div className="addres-result order-tooltip">
                                    <div>
                                        <span className="strana-text addres-result-text"><b></b><span></span></span>
                                        <span className="gorod-text addres-result-text"><b></b><span></span></span>
                                        <span className="otdel-text addres-result-text"><b></b><span></span></span>
                                        <span className="ulica-text addres-result-text"><b></b><span></span></span>
                                        <span className="dom-text addres-result-text"><b></b><span></span></span>
                                        <span className="index-text addres-result-text"><b></b><span></span></span>
                                        <span className="kvartira-text addres-result-text"><b></b><span></span></span>

                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td className="delivery-list">
                                <div className="order-tooltip">TTH:</div>
                            </td>
                            <td className="delivery-description ttn-block-description">
                                <button className="btnplus add-ttn order-tooltip">
                                    <svg width="12" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.712422 0H2.5V1H1V2.5H0V0.74526C0 0.210264 0.224492 0 0.712422 0ZM2 2H3V8H2V2ZM5.5 2H6.5V8H5.5V2ZM9 2H10V8H9V2ZM7.5 2H8V8H7.5V2ZM4 2H4.5V8H4V2ZM1 7.5V9H2.5V10H0.712422C0.224492 10 0 9.79077 0 9.25474V7.5H1ZM9.5 0H11.2876C11.7755 0 12 0.210264 12 0.74526V2.5H11V1H9.5V0ZM12 7.5V9.35474C12 9.78974 11.7755 10 11.2876 10H9.5V9H11V7.5H12Z" fill="#9C9B9E" />
                                    </svg>
                                </button>
                                <button className="gpsmetka order-tooltip" id="gpsmetka-ttn">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.79389 0.0032196C5.45068 0.0388937 5.21695 0.0930204 4.93894 0.201274C3.85272 0.628139 3.07157 1.62579 2.94733 2.74524C2.94118 2.80551 2.93133 2.98635 2.92764 3.14504C2.9178 3.46857 2.93379 3.65186 2.99038 3.9065C3.05681 4.20297 3.22288 4.69995 3.35943 5.00749C3.42339 5.15142 3.68172 5.64717 3.95236 6.14662C4.5908 7.32634 5.98456 9.8051 5.99932 9.79034C6.01654 9.77189 6.88503 8.23296 7.37463 7.35217C7.94419 6.32622 8.34029 5.59182 8.54081 5.19325C8.761 4.75285 8.98243 4.08119 9.04148 3.67277C9.06362 3.51654 9.06731 2.99865 9.0464 2.79321C8.99227 2.23964 8.78684 1.71929 8.43994 1.25675C8.29232 1.05992 8.002 0.769607 7.80887 0.626908C7.37709 0.305838 6.89979 0.102861 6.40281 0.0265923C6.27734 0.00813961 5.89353 -0.00662231 5.79389 0.0032196ZM6.31916 1.82139C6.78047 1.93948 7.14213 2.29746 7.2713 2.76492C7.31066 2.90762 7.32419 3.16103 7.30205 3.31849C7.23685 3.77242 6.9084 4.18944 6.48523 4.35551C6.30317 4.42809 6.22813 4.44039 6.00301 4.44162C5.81357 4.44162 5.78159 4.43793 5.6721 4.40841C5.29814 4.30753 4.98076 4.04305 4.81592 3.69492C4.47025 2.9679 4.8356 2.0994 5.5946 1.84599C5.74714 1.79556 5.86155 1.77956 6.03992 1.78572C6.15678 1.78941 6.23182 1.79802 6.31916 1.82139Z" fill="#9C9B9E" />
                                        <path d="M4.96108 8.61547C4.96847 8.61792 4.98323 8.61792 4.99185 8.61547C4.99923 8.61179 4.99308 8.60933 4.97585 8.60933C4.95862 8.60933 4.95247 8.61179 4.96108 8.61547Z" fill="#9C9B9E" />
                                        <path d="M7.05233 8.61547C7.05971 8.61792 7.07448 8.61792 7.0831 8.61547C7.09048 8.61179 7.08433 8.60933 7.0671 8.60933C7.04987 8.60933 7.04371 8.61179 7.05233 8.61547Z" fill="#9C9B9E" />
                                        <path d="M4.76419 8.62779C4.78633 8.63025 4.81953 8.63025 4.83798 8.62779C4.85643 8.62533 4.83798 8.62286 4.7974 8.62286C4.75681 8.62286 4.74205 8.62533 4.76419 8.62779Z" fill="#9C9B9E" />
                                        <path d="M7.21219 8.62779C7.23433 8.63025 7.26753 8.63025 7.28598 8.62779C7.30443 8.62533 7.28598 8.62286 7.24539 8.62286C7.20481 8.62286 7.19005 8.62533 7.21219 8.62779Z" fill="#9C9B9E" />
                                        <path d="M4.29308 8.65727C1.93119 8.86516 0.259411 9.43965 0.0219913 10.1236C-0.00753233 10.211 -0.00753233 10.3746 0.0232215 10.4619C0.149927 10.8285 0.73917 11.1963 1.62488 11.4608C3.5513 12.0377 6.59962 12.1669 9.01933 11.7745C10.5115 11.5321 11.594 11.1077 11.9274 10.6329C12.3973 9.96369 11.4526 9.29203 9.49048 8.89715C8.89385 8.77782 7.96386 8.6585 7.46688 8.63882C7.31065 8.63267 7.32787 8.63513 7.66985 8.66957C8.88893 8.79013 9.94071 9.07183 10.4611 9.41504C11.2545 9.94032 10.8178 10.5443 9.35516 10.9454C8.13854 11.2787 6.34129 11.403 4.68673 11.2701C3.30158 11.1569 2.15631 10.8715 1.58059 10.4951C1.44528 10.4065 1.2829 10.2405 1.23738 10.1445C1.09468 9.84437 1.28782 9.55282 1.80202 9.2908C2.40234 8.98449 3.37539 8.75937 4.60062 8.64497C4.70518 8.63513 4.70641 8.63513 4.63137 8.6339C4.58709 8.6339 4.43578 8.64497 4.29308 8.65727Z" fill="#9C9B9E" />
                                    </svg>
                                </button>
                                <div className="inputPlusBackTtn">
                                    <div className="underline-animation">
                                        <span className="underline"></span>
                                        <input autocomplete="new-password" type="text" className="input-ttn input-order numberValidation" data-count="14" placeholder="" />
                                    </div>

                                    <div className="back-ttn">
                                        <div className="backttntooltip order-tooltip">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.38331 1.07301C5.38347 1.07293 5.38316 1.07308 5.38331 1.07301L1.30415 3.11259L1.30302 3.11315C1.21806 3.15537 1.14655 3.22046 1.09655 3.30109C1.04657 3.3817 1.02005 3.47464 1.01998 3.56949C1.01998 3.56945 1.01998 3.56952 1.01998 3.56949V8.42786C1.01932 8.52291 1.04522 8.61624 1.09478 8.69734C1.14426 8.77831 1.21535 8.84386 1.30004 8.88663C1.2999 8.88656 1.30018 8.8867 1.30004 8.88663L5.37888 10.9261C5.44974 10.9615 5.52802 10.98 5.60725 10.98C5.68647 10.98 5.76461 10.9616 5.83546 10.9261L9.91544 8.88614L9.91657 8.88558C10.0015 8.84335 10.073 8.77827 10.123 8.69764C10.173 8.61701 10.1996 8.52402 10.1996 8.42914V3.56958C10.1996 3.47471 10.173 3.38172 10.123 3.30109C10.073 3.22046 10.0015 3.15537 9.91657 3.11315L9.91544 3.11259L5.83674 1.07324C5.83689 1.07331 5.83658 1.07316 5.83674 1.07324C5.76634 1.03834 5.68837 1.01996 5.6098 1.01996C5.53122 1.01996 5.45371 1.03811 5.38331 1.07301ZM6.06368 0.616534L6.29062 0.159832C6.07906 0.0547063 5.84603 0 5.6098 0C5.37356 0 5.14053 0.0547063 4.92897 0.159832L4.92785 0.160394L0.84914 2.19975C0.84935 2.19964 0.84893 2.19985 0.84914 2.19975C0.594519 2.32642 0.379609 2.52187 0.229729 2.76356C0.0797254 3.00546 0.000175823 3.28441 2.478e-05 3.56904L2.47192e-05 8.42272C-0.00159201 8.70717 0.0761261 8.98645 0.22447 9.2292C0.373152 9.4725 0.586867 9.66941 0.841503 9.79771L0.842911 9.79842L4.9226 11.8383C5.13515 11.9446 5.36956 12 5.60725 12C5.84487 12 6.07923 11.9446 6.29175 11.8383C6.2918 11.8383 6.2917 11.8384 6.29175 11.8383L10.3705 9.79898C10.3703 9.79906 10.3706 9.79889 10.3705 9.79898C10.6251 9.67231 10.84 9.4769 10.9899 9.23516C11.1399 8.99327 11.2194 8.71432 11.2196 8.42968V3.56931C11.2194 3.28468 11.1399 3.00546 10.9899 2.76356C10.84 2.52187 10.6257 2.32674 10.3711 2.20007C10.3713 2.20018 10.3709 2.19996 10.3711 2.20007L6.29175 0.160394L6.06368 0.616534Z" fill="#9C9B9E" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.217058 2.79047C0.343017 2.53855 0.649348 2.43644 0.901267 2.5624L5.6098 4.91666L10.3183 2.5624C10.5702 2.43644 10.8766 2.53855 11.0025 2.79047C11.1285 3.04238 11.0264 3.34872 10.7745 3.47467L5.83787 5.94297C5.69429 6.01476 5.5253 6.01476 5.38173 5.94297L0.445128 3.47467C0.193209 3.34872 0.0910985 3.04238 0.217058 2.79047Z" fill="#9C9B9E" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.6098 4.97686C5.89145 4.97686 6.11978 5.20518 6.11978 5.48684V11.4842C6.11978 11.7658 5.89145 11.9942 5.6098 11.9942C5.32814 11.9942 5.09982 11.7658 5.09982 11.4842V5.48684C5.09982 5.20518 5.32814 4.97686 5.6098 4.97686Z" fill="#9C9B9E" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.60376 1.43392C2.72972 1.182 3.03605 1.07989 3.28797 1.20585L8.38776 3.75575C8.63968 3.88171 8.74179 4.18804 8.61583 4.43996C8.48987 4.69187 8.18354 4.79399 7.93162 4.66803L2.83183 2.11813C2.57991 1.99217 2.4778 1.68584 2.60376 1.43392Z" fill="#9C9B9E" />
                                            </svg>
                                            <span className="count">1</span>
                                        </div>
                                        <button className="btnplus btnbackttn order-tooltip">
                                            <svg width="16" height="12" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.6142 3.06906H5.67126L7.09175 1.61526C7.29171 1.41061 7.29171 1.07886 7.09175 0.874212C6.89173 0.669504 6.56764 0.669562 6.36763 0.874212L4.07317 3.22259C3.87321 3.42724 3.87321 3.75899 4.07317 3.96364L6.36763 6.31191C6.46764 6.41426 6.59865 6.46538 6.72966 6.46538C6.86067 6.46538 6.99169 6.4142 7.09169 6.31191C7.29166 6.10726 7.29166 5.77551 7.09169 5.57086L5.67121 4.11706H12.6141C13.7225 4.11706 14.6242 5.03993 14.6242 6.17427C14.6242 7.30861 13.7225 8.23148 12.6141 8.23148H10.8334C10.5506 8.23148 10.3214 8.46606 10.3214 8.75548C10.3214 9.0449 10.5506 9.27948 10.8334 9.27948H12.6141C14.2871 9.27948 15.6482 7.88646 15.6482 6.17427C15.6482 4.46208 14.2872 3.06906 12.6142 3.06906Z" fill="#9C9B9E" />
                                                <path d="M6.04564 8.23145C5.76285 8.23145 5.53365 8.46602 5.53365 8.75544C5.53365 9.04486 5.76285 9.27944 6.04564 9.27944H9.05116C9.33395 9.27944 9.56315 9.04486 9.56315 8.75544C9.56315 8.46602 9.33395 8.23145 9.05116 8.23145H6.04564Z" fill="#9C9B9E" />
                                                <path d="M1.16018 8.23145C0.877394 8.23145 0.648193 8.46602 0.648193 8.75544C0.648193 9.04486 0.877394 9.27944 1.16018 9.27944H4.16571C4.44849 9.27944 4.67769 9.04486 4.67769 8.75544C4.67769 8.46602 4.44849 8.23145 4.16571 8.23145H1.16018Z" fill="#9C9B9E" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="status-ttn-info order-tooltip">Відправлення прямує до міста Богородчани.</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="delivery-list">
                            </td>
                            <td className="delivery-description ttn-block-description">
                                <button className="gpsmetka order-tooltip" id="gpsmetka-ttn-2">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.79389 0.0032196C5.45068 0.0388937 5.21695 0.0930204 4.93894 0.201274C3.85272 0.628139 3.07157 1.62579 2.94733 2.74524C2.94118 2.80551 2.93133 2.98635 2.92764 3.14504C2.9178 3.46857 2.93379 3.65186 2.99038 3.9065C3.05681 4.20297 3.22288 4.69995 3.35943 5.00749C3.42339 5.15142 3.68172 5.64717 3.95236 6.14662C4.5908 7.32634 5.98456 9.8051 5.99932 9.79034C6.01654 9.77189 6.88503 8.23296 7.37463 7.35217C7.94419 6.32622 8.34029 5.59182 8.54081 5.19325C8.761 4.75285 8.98243 4.08119 9.04148 3.67277C9.06362 3.51654 9.06731 2.99865 9.0464 2.79321C8.99227 2.23964 8.78684 1.71929 8.43994 1.25675C8.29232 1.05992 8.002 0.769607 7.80887 0.626908C7.37709 0.305838 6.89979 0.102861 6.40281 0.0265923C6.27734 0.00813961 5.89353 -0.00662231 5.79389 0.0032196ZM6.31916 1.82139C6.78047 1.93948 7.14213 2.29746 7.2713 2.76492C7.31066 2.90762 7.32419 3.16103 7.30205 3.31849C7.23685 3.77242 6.9084 4.18944 6.48523 4.35551C6.30317 4.42809 6.22813 4.44039 6.00301 4.44162C5.81357 4.44162 5.78159 4.43793 5.6721 4.40841C5.29814 4.30753 4.98076 4.04305 4.81592 3.69492C4.47025 2.9679 4.8356 2.0994 5.5946 1.84599C5.74714 1.79556 5.86155 1.77956 6.03992 1.78572C6.15678 1.78941 6.23182 1.79802 6.31916 1.82139Z" fill="#9C9B9E" />
                                        <path d="M4.96108 8.61547C4.96847 8.61792 4.98323 8.61792 4.99185 8.61547C4.99923 8.61179 4.99308 8.60933 4.97585 8.60933C4.95862 8.60933 4.95247 8.61179 4.96108 8.61547Z" fill="#9C9B9E" />
                                        <path d="M7.05233 8.61547C7.05971 8.61792 7.07448 8.61792 7.0831 8.61547C7.09048 8.61179 7.08433 8.60933 7.0671 8.60933C7.04987 8.60933 7.04371 8.61179 7.05233 8.61547Z" fill="#9C9B9E" />
                                        <path d="M4.76419 8.62779C4.78633 8.63025 4.81953 8.63025 4.83798 8.62779C4.85643 8.62533 4.83798 8.62286 4.7974 8.62286C4.75681 8.62286 4.74205 8.62533 4.76419 8.62779Z" fill="#9C9B9E" />
                                        <path d="M7.21219 8.62779C7.23433 8.63025 7.26753 8.63025 7.28598 8.62779C7.30443 8.62533 7.28598 8.62286 7.24539 8.62286C7.20481 8.62286 7.19005 8.62533 7.21219 8.62779Z" fill="#9C9B9E" />
                                        <path d="M4.29308 8.65727C1.93119 8.86516 0.259411 9.43965 0.0219913 10.1236C-0.00753233 10.211 -0.00753233 10.3746 0.0232215 10.4619C0.149927 10.8285 0.73917 11.1963 1.62488 11.4608C3.5513 12.0377 6.59962 12.1669 9.01933 11.7745C10.5115 11.5321 11.594 11.1077 11.9274 10.6329C12.3973 9.96369 11.4526 9.29203 9.49048 8.89715C8.89385 8.77782 7.96386 8.6585 7.46688 8.63882C7.31065 8.63267 7.32787 8.63513 7.66985 8.66957C8.88893 8.79013 9.94071 9.07183 10.4611 9.41504C11.2545 9.94032 10.8178 10.5443 9.35516 10.9454C8.13854 11.2787 6.34129 11.403 4.68673 11.2701C3.30158 11.1569 2.15631 10.8715 1.58059 10.4951C1.44528 10.4065 1.2829 10.2405 1.23738 10.1445C1.09468 9.84437 1.28782 9.55282 1.80202 9.2908C2.40234 8.98449 3.37539 8.75937 4.60062 8.64497C4.70518 8.63513 4.70641 8.63513 4.63137 8.6339C4.58709 8.6339 4.43578 8.64497 4.29308 8.65727Z" fill="#9C9B9E" />
                                    </svg>
                                </button>
                                <div className="inputPlusBackTtn">
                                    <div className="ttn2-block">12323123121231</div>
                                    <div className="back-ttn-2">
                                        <div className="backttntooltip order-tooltip">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.38331 1.07301C5.38347 1.07293 5.38316 1.07308 5.38331 1.07301L1.30415 3.11259L1.30302 3.11315C1.21806 3.15537 1.14655 3.22046 1.09655 3.30109C1.04657 3.3817 1.02005 3.47464 1.01998 3.56949C1.01998 3.56945 1.01998 3.56952 1.01998 3.56949V8.42786C1.01932 8.52291 1.04522 8.61624 1.09478 8.69734C1.14426 8.77831 1.21535 8.84386 1.30004 8.88663C1.2999 8.88656 1.30018 8.8867 1.30004 8.88663L5.37888 10.9261C5.44974 10.9615 5.52802 10.98 5.60725 10.98C5.68647 10.98 5.76461 10.9616 5.83546 10.9261L9.91544 8.88614L9.91657 8.88558C10.0015 8.84335 10.073 8.77827 10.123 8.69764C10.173 8.61701 10.1996 8.52402 10.1996 8.42914V3.56958C10.1996 3.47471 10.173 3.38172 10.123 3.30109C10.073 3.22046 10.0015 3.15537 9.91657 3.11315L9.91544 3.11259L5.83674 1.07324C5.83689 1.07331 5.83658 1.07316 5.83674 1.07324C5.76634 1.03834 5.68837 1.01996 5.6098 1.01996C5.53122 1.01996 5.45371 1.03811 5.38331 1.07301ZM6.06368 0.616534L6.29062 0.159832C6.07906 0.0547063 5.84603 0 5.6098 0C5.37356 0 5.14053 0.0547063 4.92897 0.159832L4.92785 0.160394L0.84914 2.19975C0.84935 2.19964 0.84893 2.19985 0.84914 2.19975C0.594519 2.32642 0.379609 2.52187 0.229729 2.76356C0.0797254 3.00546 0.000175823 3.28441 2.478e-05 3.56904L2.47192e-05 8.42272C-0.00159201 8.70717 0.0761261 8.98645 0.22447 9.2292C0.373152 9.4725 0.586867 9.66941 0.841503 9.79771L0.842911 9.79842L4.9226 11.8383C5.13515 11.9446 5.36956 12 5.60725 12C5.84487 12 6.07923 11.9446 6.29175 11.8383C6.2918 11.8383 6.2917 11.8384 6.29175 11.8383L10.3705 9.79898C10.3703 9.79906 10.3706 9.79889 10.3705 9.79898C10.6251 9.67231 10.84 9.4769 10.9899 9.23516C11.1399 8.99327 11.2194 8.71432 11.2196 8.42968V3.56931C11.2194 3.28468 11.1399 3.00546 10.9899 2.76356C10.84 2.52187 10.6257 2.32674 10.3711 2.20007C10.3713 2.20018 10.3709 2.19996 10.3711 2.20007L6.29175 0.160394L6.06368 0.616534Z" fill="#9C9B9E" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.217058 2.79047C0.343017 2.53855 0.649348 2.43644 0.901267 2.5624L5.6098 4.91666L10.3183 2.5624C10.5702 2.43644 10.8766 2.53855 11.0025 2.79047C11.1285 3.04238 11.0264 3.34872 10.7745 3.47467L5.83787 5.94297C5.69429 6.01476 5.5253 6.01476 5.38173 5.94297L0.445128 3.47467C0.193209 3.34872 0.0910985 3.04238 0.217058 2.79047Z" fill="#9C9B9E" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.6098 4.97686C5.89145 4.97686 6.11978 5.20518 6.11978 5.48684V11.4842C6.11978 11.7658 5.89145 11.9942 5.6098 11.9942C5.32814 11.9942 5.09982 11.7658 5.09982 11.4842V5.48684C5.09982 5.20518 5.32814 4.97686 5.6098 4.97686Z" fill="#9C9B9E" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.60376 1.43392C2.72972 1.182 3.03605 1.07989 3.28797 1.20585L8.38776 3.75575C8.63968 3.88171 8.74179 4.18804 8.61583 4.43996C8.48987 4.69187 8.18354 4.79399 7.93162 4.66803L2.83183 2.11813C2.57991 1.99217 2.4778 1.68584 2.60376 1.43392Z" fill="#9C9B9E" />
                                            </svg>
                                            <span className="count">22</span>
                                        </div>
                                        <button className="btnplus btnbackttn order-tooltip">
                                            <svg width="16" height="12" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.6142 3.06906H5.67126L7.09175 1.61526C7.29171 1.41061 7.29171 1.07886 7.09175 0.874212C6.89173 0.669504 6.56764 0.669562 6.36763 0.874212L4.07317 3.22259C3.87321 3.42724 3.87321 3.75899 4.07317 3.96364L6.36763 6.31191C6.46764 6.41426 6.59865 6.46538 6.72966 6.46538C6.86067 6.46538 6.99169 6.4142 7.09169 6.31191C7.29166 6.10726 7.29166 5.77551 7.09169 5.57086L5.67121 4.11706H12.6141C13.7225 4.11706 14.6242 5.03993 14.6242 6.17427C14.6242 7.30861 13.7225 8.23148 12.6141 8.23148H10.8334C10.5506 8.23148 10.3214 8.46606 10.3214 8.75548C10.3214 9.0449 10.5506 9.27948 10.8334 9.27948H12.6141C14.2871 9.27948 15.6482 7.88646 15.6482 6.17427C15.6482 4.46208 14.2872 3.06906 12.6142 3.06906Z" fill="#9C9B9E" />
                                                <path d="M6.04564 8.23145C5.76285 8.23145 5.53365 8.46602 5.53365 8.75544C5.53365 9.04486 5.76285 9.27944 6.04564 9.27944H9.05116C9.33395 9.27944 9.56315 9.04486 9.56315 8.75544C9.56315 8.46602 9.33395 8.23145 9.05116 8.23145H6.04564Z" fill="#9C9B9E" />
                                                <path d="M1.16018 8.23145C0.877394 8.23145 0.648193 8.46602 0.648193 8.75544C0.648193 9.04486 0.877394 9.27944 1.16018 9.27944H4.16571C4.44849 9.27944 4.67769 9.04486 4.67769 8.75544C4.67769 8.46602 4.44849 8.23145 4.16571 8.23145H1.16018Z" fill="#9C9B9E" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="status-ttn-info order-tooltip">Відправлення прямує до міста Богородчани.</div>
                            </td>
                        </tr>
                    </table>
                    <table className="info-table">
                        <tr>
                            <td colspan="2" className="contact-header">Информация
                                <button className="btn-notification order-tooltip">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.1073 9.46145C4.06725 9.58523 4.04541 9.71538 4.04541 9.84917C4.04541 10.7056 4.9128 11.4001 5.98406 11.4001C7.05442 11.4001 7.92271 10.7056 7.92271 9.84917C7.92271 9.71538 7.90087 9.58523 7.86082 9.46145H4.1073ZM5.98406 0.600098C3.84245 0.600098 2.10676 2.33578 2.10676 4.4774V6.95212C2.10676 7.28797 1.87922 7.58013 1.55338 7.66204C1.22754 7.74305 1 8.03521 1 8.37107V8.52853C1 9.04368 1.41686 9.46145 1.93292 9.46145H4.1073H7.85809H10.0352C10.5513 9.46145 10.9681 9.04368 10.9681 8.52853V8.37107C10.9681 8.03521 10.7397 7.74305 10.4147 7.66204C10.0889 7.58013 9.86137 7.28797 9.86137 6.95212V4.4774C9.86137 2.33578 8.12568 0.600098 5.98406 0.600098V0.600098Z" stroke="#9C9B9E" stroke-width="1.1" stroke-miterlimit="22.9256" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button className="btninfo order-tooltip">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 0C2.6916 0 0 2.69164 0 6.00004C0 9.30844 2.6916 12 6 12C9.3084 12 12 9.30844 12 6.00004C12 2.69164 9.3084 0 6 0ZM6 10.9091C3.29309 10.9091 1.09091 8.70691 1.09091 6.00004C1.09091 3.29316 3.29309 1.09091 6 1.09091C8.70691 1.09091 10.9091 3.29316 10.9091 6.00004C10.9091 8.70691 8.70687 10.9091 6 10.9091Z" fill="#919191" />
                                        <path d="M5.99989 2.54541C5.59895 2.54541 5.27277 2.87181 5.27277 3.27301C5.27277 3.67385 5.59895 3.99996 5.99989 3.99996C6.40084 3.99996 6.72702 3.67385 6.72702 3.27301C6.72702 2.87181 6.40084 2.54541 5.99989 2.54541Z" fill="#919191" />
                                        <path d="M6.00004 5.09082C5.69881 5.09082 5.45459 5.33504 5.45459 5.63628V8.909C5.45459 9.21024 5.69881 9.45446 6.00004 9.45446C6.30128 9.45446 6.5455 9.21024 6.5455 8.909V5.63628C6.5455 5.33504 6.30128 5.09082 6.00004 5.09082Z" fill="#919191" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="info-list">
                                <div className="order-tooltip">Сайт:</div>
                            </td>
                            <td className="info-description">
                                <a className="another-opacity site-link order-tooltip" href="" target="_blank"></a>
                            </td>
                        </tr>
                        <tr>
                            <td className="info-list">
                                <div className="order-tooltip">IP:</div>
                            </td>
                            <td className="info-description another-opacity-ip">
                                <div >
                                    <div className="info-description-ip-block">
                                        <button className="unlock-logo tooltip-logo order-tooltip">
                                            <svg className="first" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85714 4.85718H1.85714C1.38376 4.85718 1 5.24093 1 5.71432V8.71432C1 9.18771 1.38376 9.57146 1.85714 9.57146H7.85714C8.33053 9.57146 8.71429 9.18771 8.71429 8.71432V5.71432C8.71429 5.24093 8.33053 4.85718 7.85714 4.85718Z" stroke="#9C9B9E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M7 4.85714V3.14286C7 2.57454 7.22576 2.02949 7.62763 1.62763C8.02949 1.22576 8.57454 1 9.14286 1C9.71118 1 10.2562 1.22576 10.6581 1.62763C11.0599 2.02949 11.2857 2.57454 11.2857 3.14286V4.85714" stroke="#9C9B9E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <svg className="second" width="12" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85714 4.85718H1.85714C1.38376 4.85718 1 5.24093 1 5.71432V8.71432C1 9.18771 1.38376 9.57146 1.85714 9.57146H7.85714C8.33053 9.57146 8.71429 9.18771 8.71429 8.71432V5.71432C8.71429 5.24093 8.33053 4.85718 7.85714 4.85718Z" stroke="#9C9B9E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M2.70001 4.86V3.14444C2.70001 2.5757 2.92578 2.03025 3.32764 1.62809C3.7295 1.22593 4.27455 1 4.84287 1C5.41119 1 5.95623 1.22593 6.3581 1.62809C6.75996 2.03025 6.98573 2.5757 6.98573 3.14444V4.86" stroke="#9C9B9E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>

                                        <div className="info-ip order-tooltip"><span id="primary-ip">178.213.0.225</span>
                                        </div>
                                        <div className="ip-icons-position">
                                            <span className="flags ua">🇺🇦</span>
                                            <span className="icon-Vector-10 icons colorWhite"></span>
                                            <span className="icon-Windows-1 icons colorWhite"></span>
                                            <span className="icon-Vector-13 icons colorWhite"></span>
                                        </div>
                                    </div>
                                    <div className="info-description-ip-block-all-network">

                                        <button className="unlock-logo tooltip-logo-network order-tooltip">
                                            <svg className="first" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85714 4.85718H1.85714C1.38376 4.85718 1 5.24093 1 5.71432V8.71432C1 9.18771 1.38376 9.57146 1.85714 9.57146H7.85714C8.33053 9.57146 8.71429 9.18771 8.71429 8.71432V5.71432C8.71429 5.24093 8.33053 4.85718 7.85714 4.85718Z" stroke="#9C9B9E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M7 4.85714V3.14286C7 2.57454 7.22576 2.02949 7.62763 1.62763C8.02949 1.22576 8.57454 1 9.14286 1C9.71118 1 10.2562 1.22576 10.6581 1.62763C11.0599 2.02949 11.2857 2.57454 11.2857 3.14286V4.85714" stroke="#9C9B9E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <svg className="second" width="12" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85714 4.85718H1.85714C1.38376 4.85718 1 5.24093 1 5.71432V8.71432C1 9.18771 1.38376 9.57146 1.85714 9.57146H7.85714C8.33053 9.57146 8.71429 9.18771 8.71429 8.71432V5.71432C8.71429 5.24093 8.33053 4.85718 7.85714 4.85718Z" stroke="#9C9B9E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M2.70001 4.86V3.14444C2.70001 2.5757 2.92578 2.03025 3.32764 1.62809C3.7295 1.22593 4.27455 1 4.84287 1C5.41119 1 5.95623 1.22593 6.3581 1.62809C6.75996 2.03025 6.98573 2.5757 6.98573 3.14444V4.86" stroke="#9C9B9E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                        <div className="info-ip order-tooltip"><span id="another-ip"></span>
                                        </div>
                                        <div className="ip-icons-position">
                                            <span className="flags ua button-tooltip">🇺🇦</span>
                                            <img className="wifi-icon button-tooltip" src="img/wifinet.svg" alt="" />
                                        </div>
                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td className="info-list">
                                <div className="order-tooltip">Принял:</div>
                            </td>
                            <td className="info-description calen-block">
                                <div className="info-calendary"></div>
                                <div className="info-calendary-block">
                                    <span className="info-calen-data calen-data-accept order-tooltip">14.01.2021</span><span className="info-calen-data-2 calen-data-accept-2 order-tooltip">13:45:21</span><span className="info-calen-data-3 calen-data-accept-3 order-tooltip"><b className="block-hours">00</b>:<b className="block-min">12</b>:<b className="block-sec">22</b><span className="color-time zelen"></span></span>
                                </div>
                                <div className="info-user-block">
                                    <Dropdown />

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="info-list">
                                <div className="order-tooltip">Отправил:</div>
                            </td>
                            <td className="info-description calen-block">
                                <div className="info-calendary"></div>
                                <div className="info-calendary-block">
                                    <span className="info-calen-data order-tooltip">14.01.2021</span><span className="info-calen-data-2 order-tooltip">13:45:21</span><span className="info-calen-data-3 order-tooltip"><b className="block-days">00</b>/<b className="block-hours">09</b>:<b className="block-min">37</b>:<b className="block-sec">20</b><span className="color-time"></span></span>
                                </div>
                                <div className="info-user-block">
                                    <Dropdown />

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="info-list">
                                <div className="order-tooltip">Изменил:</div>
                            </td>
                            <td className="info-description calen-block">
                                <div className="info-calendary"></div>
                                <div className="info-calendary-block">
                                    <span className="info-calen-data calen-data-change order-tooltip">14.01.2021</span><span className="info-calen-data-2 calen-data-change-2 order-tooltip">13:45:21</span>
                                </div>
                                <div className="info-user-block">
                                    <Dropdown />
                                </div>
                            </td>
                        </tr>

                    </table>
                    <div className="utm-wrapper">
                        <table className="utm-table">
                            <tr>
                                <td className="contact-header utm-header order-tooltip">UTM - метки</td>
                            </tr>
                        </table>
                        <div className="utm-block"  >
                            <table className="">
                                <tr>
                                    <td className="utm-list"><span className="order-tooltip">Source:</span></td>
                                    <td className="utm-description order-tooltip">facebook</td>
                                </tr>
                                <tr>
                                    <td className="utm-list"><span className="order-tooltip">Medium:</span></td>
                                    <td className="utm-description order-tooltip">instalenta_ru</td>
                                </tr>
                                <tr>
                                    <td className="utm-list"><span className="order-tooltip">Term:</span></td>
                                    <td className="utm-description order-tooltip">fit3</td>
                                </tr>
                                <tr>
                                    <td className="utm-list"><span className="order-tooltip">Content:</span></td>
                                    <td className="utm-description order-tooltip">tex1</td>
                                </tr>
                                <tr>
                                    <td className="utm-list"><span className="order-tooltip">Campaign:</span></td>
                                    <td className="utm-description order-tooltip">мамы_25_60_18_30 34df sdfd fsdfs df</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="wrap-products-sale">
                    <button className="btnplus order-tooltip" id="btnAddProduct"><img src="img/btnplusnew.svg" alt="" /></button>
                    <table className="product-table">
                        <thead>
                            <tr>
                                <td colspan="8" className="contact-header order-tooltip">Товар</td>
                            </tr>
                            <tr>
                                <td className="product-id">ID</td>
                                <td className="product-id">Товар</td>
                                <td className="product-id">Атрибут</td>
                                <td className="product-id">Цена</td>
                                <td className="product-id">Кол-во</td>
                                <td className="product-id">Итого</td>
                                <td className="product-id"></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="product-description id-product"><span>5649-01</span></td>
                                <td className="product-description long-str"><span>Видеорегистратор DVR-mini *1244*</span></td>
                                <td className="product-description id-product2"><span data-images="video">Фиолетовый, 42размер</span></td>
                                <td className="product-description price-product price-for-one"><input type="text" className="product-number-format" value="1487" maxlength="9" /></td>
                                <td className="product-description price-product currency-block">
                                    <div >
                                        <button className="minus-btn"></button><input type="text" className="number-product" value="1" maxlength="4" /><button className="plus-btn"></button>
                                    </div>
                                </td>
                                <td className="product-description price-product product-number-format all-price">1487.00</td>
                                <td className="product-description price-del"><button className="product-delete order-tooltip"></button></td>
                            </tr>
                            <tr>
                                <td className="product-description id-product"><span>9999-54.56.5</span></td>
                                <td className="product-description long-str"><span>Рівень лазерний Procraft LE-3D</span></td>
                                <td className="product-description id-product2"><span data-images="uroven">Черный</span></td>
                                <td className="product-description price-product product-number-format">2342</td>
                                <td className="product-description price-product">1
                                </td>
                                <td className="product-description price-product product-number-format">1069.00</td>
                                <td className="product-description price-del"><button className="product-delete order-tooltip"></button></td>
                            </tr>

                        </tbody>
                    </table>
                    <div>
                        <div colspan="8" className="sum"><span>Кол-во</span><span className="sum-number">2</span><span className="sum-all product-number-format">1556.00</span></div>
                    </div>
                    <div className="sum-many"><span>Предоплата <span className="product-number-format">2103.00</span></span><span>Сумма заказа <span className="product-number-format">2103.00</span></span>
                    </div>
                    <div className="btn-save-close"><button className="save-btn">Сохранить и закрыть</button></div>
                </div>
            </div>
        </div>
    </div>
    {/* <div className="bg-blur">
            <div className="bg-horizontal" ></div>
            <div className="bg-vert" ></div>
            <div className="bg-vert-2" ></div>
            <div className="bg-horizontal-2" ></div>
        </div>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-header">

                {header}
            </div>
            <div className="modal-body">
                
                <div className="modal-content">{content}</div>
            </div>
            {footer && <div className="modal-footer">{footer}</div>}
        </div> */}
}



export default Modal;