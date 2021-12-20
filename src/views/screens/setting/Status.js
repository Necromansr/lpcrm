import './status.css';
import React, { Component } from 'react';

import {badge, user, ukraine, kazakhstan, russia, albania, badgeplus} from '../../../until/images';

class Status extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            addFlag: false,
            color: false,
            name: '',
            desc: '',
            officies: [],
        }
    }


    onChage = (name, e) => {
        this.setState({ [name]: e.target.value })
    }

    onChangeFlag = () => {
        this.setState({ addFlag: true })
    }
    
    onChangeColor = () => {
        this.setState({ color: true })
    }
    closeColor = ()=>{
        this.setState({ color: false })
    }
    getData = () => {
        var myHeaders = new Headers();
        myHeaders.append("authorization", "Bearer "+ this.props.token);
        fetch('http://localhost/status', {headers: myHeaders}).then(x => x.json()).then(x => {  this.setState({ officies: x.data }) })
    }
    componentDidMount() {
        this.getData();
        // $("#sortable").sortable({
        //     revert: 200
        // });
        // $("#sortable").disableSelection();
    }


    save = () => {
        let { addFlag, ...data } = this.state;
        fetch('http://localhost/test', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(x => {
            if (x.ok === true) {
                this.setState({
                    addFlag: false,
                    name: '',
                    adress: '',
                    email: ''
                })
                this.getData();
            } else {
                console.log(x.ok);
            }
        })
    }

    render() {
        return (
            <div className="add block-status-order">
                <div className="status-header">Статусы заказов<span className="btnplus"  onClick={this.onChangeFlag}></span></div>
                <div className="status-header-list">
                    <ul className="status-header-ul">
                        <li className="header-list">Id</li>
                        <li className="header-list">Цвет и название</li>
                        <li className="header-list">Атрибуция</li>
                        <li className="header-list">Направление</li>
                        <li className="header-list">Sort</li>
                    </ul>
                </div>
                <div className="status-order" data-simplebar data-simplebar-auto-hide="false">
                    <ul className="status-ul" id="sortable">
                        {this.state.officies.map(x=> (
                            <li key={x.id} className="status-list">
                            <span className="id">{x.id}</span>
                            <span className="list-name"><span className="color100width"><span style={{backgroundColor: x.color}} className="color-form"></span>{x.name}</span>
                            </span>
                            <span className="atr">{ x.accounting === 2 ? <img src={badge} alt="" />  :  x.accounting === 1 ?  <img src={badgeplus} alt="" /> : null}{x.freeze === 1 && <img src={user} alt="" />}</span>
                            <span className="country"><img src={ukraine} alt="" /> {x.localization}</span>
                            <span className="sort">{x.sort}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                {this.state.addFlag && <div className="status-change-toggle">
                    <div className="status-header">Изменить</div>
                    <div className="wrap-container-change">
                        <ul className="status-change">
                            <li className="status-local status-local-btn">Локализация:
                                <div className="dropdown">
                                    <div className="btn"><span className="btn-span"><img className="list-img" src={ukraine} alt="logo" />ua</span></div>
                                    <ul className="ul-block" data-simplebar data-simplebar-auto-hide="false">
                                        <li className="list"><img className="list-img" src={ukraine} alt="logo" />ua</li>
                                        <li className="list"><img className="list-img" src={russia} alt="logo" />ru</li>
                                        <li className="list"><img className="list-img" src={kazakhstan} alt="logo" />kz</li>
                                        <li className="list"><img className="list-img" src={albania} alt="logo" />alb</li>
                                        <li className="list"><img className="list-img" src={albania} alt="logo" />alb</li>
                                        <li className="list"><img className="list-img" src={albania} alt="logo" />alb</li>
                                        <li className="list"><img className="list-img" src={albania} alt="logo" />alb</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="status-color">Выбрать цвет: <span className="current-color" onClick={this.onChangeColor}></span></li>
                        </ul>
                        <ul className="status-change-email">
                            <li className="dt-email">Название</li>
                            <li className="dt-email-input"><input type="text" placeholder="Ввод" /></li>
                        </ul>
                    </div>
                </div>}
                {this.state.color && <div className="block-pick-color">
                    <div className="header-pick-color">Выбрать цвет<span className="close-btn-color" onClick={this.closeColor}></span></div>
                    <div className="wrap-container">
                        <ul className="selected-color">
                            <li>Выбран цвет</li>
                            <li><span className="color-83004F color-form"></span>Утилизация</li>
                            <li><span className="color-C94F62 color-form"></span>Успешно не выполнил</li>
                            <li><span className="color-9C02A7 color-form"></span>Успешно выполнен</li>
                            <li><span className="color-1DD787 color-form"></span>Сдано</li>
                            <li><span className="color-00CC00 color-form"></span>Принято</li>
                            <li><span className="color-00B9FF color-form"></span>Отправлено</li>
                            <li><span className="color-FF0000 color-form"></span>Отказ</li>
                            <li><span className="color-FFCF00 color-form"></span>Новый</li>
                            <li><span className="color-91D100 color-form"></span>Завершенно</li>
                            <li><span className="color-F50296 color-form"></span>Возврат товара (склад)</li>
                            <li><span className="color-6996D3 color-form"></span>Деньги в пути</li>
                            <li><span className="color-3415B0 color-form"></span>На контроле</li>
                        </ul>
                        <ul className="free-color">
                            <li>Свободный цвет</li>
                            <li><span className="color-1B1B51 color-form"></span></li>
                            <li><span className="color-E1004C color-form"></span></li>
                            <li><span className="color-006B53 color-form"></span></li>
                            <li><span className="color-A63F00 color-form"></span></li>
                            <li><span className="color-AC5FCA color-form"></span></li>
                            <li><span className="color-747323 color-form"></span></li>
                            <li><span className="color-485164 color-form"></span></li>
                            <li><span className="color-747C77 color-form"></span></li>
                            <li><span className="color-470010 color-form"></span></li>
                            <li><span className="color-CEB339 color-form"></span></li>
                            <li><span className="color-9E9E73 color-form"></span></li>
                            <li><span className="color-C6693B color-form"></span></li>
                        </ul>
                    </div>
                    <div className="footer-pick-color">Выберете цвет для “Название статуса”</div>

                    <div className="block-btn-close">
                    <div className="block-for-user">* Заказов с этим статусом: 0 шт. <br /> При создании нового статуса <br /> нужно разрешить его пользователю в доступах.</div>
                    <div className="btn-save-close">Сохранить</div>
                </div>
                </div>} 
                
               
            </div>
        )
    }
}

// let List = ({ id, name, desc, sort, style }) => (
//     <li className={style}>
//         <div className="id-block">{id}</div>
//         <div className="name-block">{name}</div>
//         <div className="desc-block">{desc}</div>
//         <div className="sort-block">{sort}</div>
//     </li>
// );

export default Status;