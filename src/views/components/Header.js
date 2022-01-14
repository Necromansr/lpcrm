import './header.css';
import React, { Component } from 'react';
import { settings, search, accept, sumka, plus, bell, logo, phone, infoyellow, calenyellow } from '../../until/images';
import { IconButton } from '../components/Button';
import { connect } from "react-redux";
import {countChange } from "../../store/actions/index";


const mapStateToProps = state => {
    return { top: state.top, count: state.count };
};
const mapDispatchToProps = dispatch => {
    return {
        changeCount: counts => dispatch(countChange(counts))
    };
}
let arr = [
    {
        source: settings,
        alt: "settings"
    },
    {
        source: search,
        alt: "search"
    },
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
            start: 1
        }
    }


    componentDidMount() {
        this.props.changeCount(0)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.top !== this.props.top)
            this.setState({
                start: this.props.top / 18
            })
    }

    notificationBtn = () => {
        const notificationBlock = document.querySelector('.notifications');
        notificationBlock.classList.toggle('notification-toggle')
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
                    <div className="block-pages" style={this.props.count > 0 ? { justifyContent: 'space-between', height: 32} : { height: 32 }}>
                        <span className="pages-dropdown" style={{ transition: '0.3s', height: 12, display: 'flex', alignItems: 'center' }}><span style={{ width: 69, display: 'inline-block' }}>Отображено</span>&nbsp;<span>{Math.max(1, Math.floor(this.state.start))}&nbsp;-  {Math.min(508, Math.floor(this.state.start + (Math.floor(document.body.clientHeight * 1.5 / 18) * 0.591)))}</span></span>
                        <span className="pages-dropdown" style={this.props.count > 0 ? { transition: '0.3s', height: 12, whiteSpace: 'nowrap' } : { transition: '0.3s', height: 0, overflow: 'hidden' }}><span style={{ width: 69, display: 'inline-block' }}>Выделено</span>&nbsp;<span>{this.props.count}</span></span>
                    </div>
                </div>
                <div className="block-btn">
                    {arr.map((x, index) => <IconButton key={index} source={x.source} alt={x.alt} count={x?.count} />)}
                    {/* <IconButton source={settings} alt={"setting"} />
            <IconButton source={search} alt={"search"} />
            <IconButton source={accept} alt={"accept"} />
            <IconButton source={plus} alt={"plus"} />
           */}
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
            </header>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);