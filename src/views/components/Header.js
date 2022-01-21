import './header.css';
import React, { Component } from 'react';
import { settings, search, accept, sumka, plus, bell, logo, phone, infoyellow, calenyellow, autocell, changestatus, copy, createttt, del, exportdata, importdata, pechat, redactor, sendsms } from '../../until/images';
import { IconButton } from '../components/Button';
import { connect } from "react-redux";
import { countChange, refresh } from "../../store/actions/index";


const mapStateToProps = state => {
    return { top: state.top, count: state.count, refresh: state.refresh };
};
const mapDispatchToProps = dispatch => {
    return {
        changeCount: counts => dispatch(countChange(counts)),
        changeRefresh: refreshs => dispatch(refresh(refreshs))
    };
}
let arr = [
    {
        source: settings,
        alt: "settings"
    },
    // {
    //     source: search,
    //     alt: "search"
    // },
    {
        source: accept,
        alt: "accept"
    },
    {
        source: plus,
        alt: "plus"
    },
    // {
    //     source: bell,
    //     alt: "bell",
    //     count: 10
    // }
]

// const btnNot = document.querySelector('.btn-not');
// const btnTech = document.querySelector('.btn-tech');

// const blockNote = document.querySelector('.block-not');
// const techNote = document.querySelector('.tech-note');

// btnNot.addEventListener('click', () => {
//     btnNot.classList.add('btn-style');
//     blockNote.style.display = 'block';
//     techNote.style.display = 'none';
//     btnTech.classList.remove('btn-style');

// });
// btnTech.addEventListener('click', () => {
//     blockNote.style.display = 'none';
//     techNote.style.display = 'block';
//     btnTech.classList.add('btn-style');
//     btnNot.classList.remove('btn-style');
// });

// const notificationBtn = document.querySelector('.notification-btn');
// const notificationBlock = document.querySelector('.notifications');

// notificationBtn.addEventListener('click', () => {
//     notificationBlock.classList.toggle('notification-toggle');
// });
// document.addEventListener('mousedown', function (e) {
//     if (e.target.closest('.header-crm') === null) {
//         notificationBlock.classList.remove('notification-toggle');
//     }
// });
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            rotate: 0
        }
    }


    componentDidMount() {
        this.props.changeCount(0)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.top !== this.props.top) {
            this.setState({
                start: this.props.top / 18
            })
        }

    }

    notificationBtn = () => {
        const notificationBlock = document.querySelector('.notifications');
        notificationBlock.classList.toggle('notification-toggle')
        const module = document.querySelector('.modul-block');
        module.classList.remove('modul-toggle')
        const imports = document.querySelector('.import-block');
        imports.classList.remove('import-toggle')
    }

    moduleBtn = () => {
        const module = document.querySelector('.modul-block');
        module.classList.toggle('modul-toggle')

        const notificationBlock = document.querySelector('.notifications');
        notificationBlock.classList.remove('notification-toggle')
        const imports = document.querySelector('.import-block');
        imports.classList.remove('import-toggle')
    }

    importBtn = () => {
        const imports = document.querySelector('.import-block');
        imports.classList.toggle('import-toggle')

        const notificationBlock = document.querySelector('.notifications');
        notificationBlock.classList.remove('notification-toggle')
        const module = document.querySelector('.modul-block');
        module.classList.remove('modul-toggle')
    }

    noteBtn = () => {
        const btnNot = document.querySelector('.btn-not');
        const btnTech = document.querySelector('.btn-tech');

        const blockNote = document.querySelector('.block-not');
        const techNote = document.querySelector('.tech-note');
        btnNot.classList.add('btn-style');
        blockNote.style.display = 'block';
        techNote.style.display = 'none';
        btnTech.classList.remove('btn-style');
    }

    techBtn = () => {
        const btnNot = document.querySelector('.btn-not');
        const btnTech = document.querySelector('.btn-tech');

        const blockNote = document.querySelector('.block-not');
        const techNote = document.querySelector('.tech-note');
        blockNote.style.display = 'none';
        techNote.style.display = 'block';
        btnTech.classList.add('btn-style');
        btnNot.classList.remove('btn-style');
    }

    // notificationMouse = (e) => {
    //     const notificationBlock = document.querySelector('.notifications');

    //     if(e.target.closest('.header-crm') === null) {
    //             notificationBlock.classList.remove('notification-toggle');
    //     }
    // }


    render() {
        return (
            <header className="header-crm">
                <div className="logo-pages-wrap">
                    <div className="logo-position"><img className="logo-lp-crm" src={logo} alt="" /></div>

                    <div class="block-pages" style={{ pointerEvents: 'none' }}>
                        <div class="current-pages" style={this.props.count > 0 ? { top: 0 } : {}}>
                            <span>Отображено</span>
                            <span>{Math.floor(this.state.start) === 0 ? 1 : Math.floor(this.state.start) + 1}-{Math.min(505, Math.floor(this.state.start + (Math.floor(document.body.clientHeight * 1.5 / 18) * 0.59) - 1))}</span>
                        </div>
                        <div class="order-select" style={this.props.count > 0 ? { height: 12 } : {}}>
                            <span>Выделено</span>
                            <span>{this.props.count}</span>
                        </div>
                    </div>
                    {/* <div className="block-pages" style={this.props.count > 0 ? { justifyContent: 'space-between', height: 30, marginTop: 2 } : { height: 30 }}>
                        <span className="pages-dropdown" style={{ transition: '0.3s', height: 12, display: 'flex', alignItems: 'center' }}><span style={{ width: 69, display: 'inline-block' }}>Отображено</span>&nbsp;&nbsp;<span>{Math.floor(this.state.start) === 0 ? 1 : Math.floor(this.state.start) + 1}-{Math.min(505, Math.floor(this.state.start + (Math.floor(document.body.clientHeight * 1.5 / 18) * 0.59) - 1))}</span></span>
                        <span className="pages-dropdown" style={this.props.count > 0 ? { transition: '0.3s', height: 12, whiteSpace: 'nowrap' } : { transition: '0.3s', height: 0, overflow: 'hidden' }}><span style={{ width: 69, display: 'inline-block' }}>Выделено</span>&nbsp;&nbsp;<span>{this.props.count}</span></span>
                    </div> */}
                </div>
                <div className="block-btn" >
                    <svg width="16" className='refresh' height="15" onClick={e => {
                        this.props.changeRefresh(!this.props.refresh);
                        this.setState({ rotate: this.state.rotate + 360 }, () => {
                            e.target.style.transition = '0.4s';
                            e.target.style.transform = 'rotate(' + this.state.rotate + 'deg)'
                            e.target.lastChild.style.strokeOpacity = 0.5;
                        })

                    }
                    } style={{ marginRight: 5 }} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4163 9.48857C13.6094 12.0955 11.0644 14 8.04995 14C4.38639 14 1.41631 11.1875 1.41631 7.71809C1.41631 4.24872 4.38639 1.43612 8.04995 1.43612C10.4773 1.43612 12.6011 2.67076 13.7568 4.51321M13.8416 1L13.7837 4.55667L10.0916 4.49239" stroke="white" stroke-opacity="0.5" stroke-width="1.2" stroke-miterlimit="22.9256" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    {/* {arr.map((x, index) => <IconButton key={index} source={x.source} alt={x.alt} count={x?.count} />)} */}
                    {/* <IconButton source={settings} alt={"setting"} />
            <IconButton source={search} alt={"search"} />
            <IconButton source={accept} alt={"accept"} />
            <IconButton source={plus} alt={"plus"} />
           */}
                    <IconButton source={settings} alt={"settings"}  onClick={this.moduleBtn} />
                    <IconButton source={accept} alt={"accept"}  onClick={this.importBtn} />
                    <IconButton source={plus} alt={"plus"}  />

                    <IconButton source={bell} alt={"bell"} count={20} onClick={this.notificationBtn} />
                </div>
                <div className="notifications">
                    <div className="noti-header"><span onClick={this.noteBtn} className="btn-not btn-style">Уведомления</span><span onClick={this.techBtn} className="btn-tech">Техническое</span></div>
                    <div className="block-not">
                        <div className="call">
                            <div><span className="call-header"><img src={phone} alt="" />Пропущеный звонок</span></div>
                            <div><span>Анатолий</span></div>
                            <div><span>+3809696966</span></div>
                        </div>
                        <div className="reminder">
                            <div><span className="reminder-not"><img src={calenyellow} alt="" />Напоминание</span></div>
                            <div>Перезвонить клиенту <br /> <span className="call-name">Анатолий</span> <span className="call-num">+3809696966</span></div>
                            <div>17:40 05.01.2021</div>
                        </div>
                        <div className="new-order">
                            <div><span className="new"><img src={sumka} alt="" />Новый заказ</span></div>
                            <div><span className="id">id 264353</span></div>
                        </div>
                    </div>
                    <div className="tech-note">
                        <div className="tech">
                            <div><span className="tech-header"><img src={infoyellow} alt="" />Обновление деклараций Нова Пошта</span></div>
                            <div><span>204000161913885  Номер не найдено</span></div>
                            <div><span>204000161913885  Нова Пошта ожидает поступления от отправителя</span></div>
                            <div className="btn-last-posit"><span className="btn-last">Показать последние</span></div>
                        </div>
                        <div className="tech">
                            <div><span className="tech-header"><img src={infoyellow} alt="" />Обновление деклараций Укрпочта</span></div>
                            <div><span>0503325159555  Shipment not found</span></div>
                            <div><span>0503325159555  Shipment not found</span></div>
                        </div>
                    </div>
                </div>

                <div class="modul-block">
                    <div class="modul-wrap">
                        <div class="modul-header btn-style">Дополнения и расширения</div>
                        <div class="modul-header-1">Дополнительно:</div>
                        <ul class="modul-ul">
                            <li class="modul-list changeComm"><img src={redactor} alt="" />Редактировать коментарий</li>
                            <li class="modul-list sendSMS"><img src={sendsms} alt="" />Отправить SMS</li>
                            <li class="modul-list changeStatus"><img src={changestatus} alt="" />Сменить статус</li>
                            <li class="modul-list copy"><img src={copy} alt="" />Копировать</li>
                            <li class="modul-list delet"><img src={del} alt="" />Удалить</li>
                        </ul>
                        <div class="modul-header-2">Расширения модулей:</div>
                        <ul class="modul-ul">
                            <li class="modul-list none">Новая почта</li>
                            <li class="modul-list createTtn"><img src={createttt} alt="" />Создать ТТН</li>
                            <li class="modul-list none">Nextel</li>
                            <li class="modul-list avtoobzvon"><img src={autocell} alt="" />Автообзвон</li>
                        </ul>
                    </div>
                </div>

                <div class="import-block">
                    <div class="import-wrap">
                        <div class="import-header btn-style">Импорт и экспорт данных</div>
                        <ul class="import-ul">
                            <li class="import-list pechat"><img src={pechat} alt="" />Печать таблицы</li>
                            <li class="import-list exportExcel"><img src={exportdata} alt="" />Экспорт данных в Excel</li>
                            <li class="import-list importExcel"><img src={importdata} alt="" />Импорт заказов из Excel</li>
                            <li class="import-list exportDrop"><img src={exportdata} alt="" />Экспорт заказов для Dropshipping</li>
                            <li class="import-list importDrop"><img src={importdata} alt="" />Импорт заказов от Dropshipping</li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);