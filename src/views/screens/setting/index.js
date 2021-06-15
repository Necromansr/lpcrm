import './index.css';
import React, {Component} from 'react';
import {badge, badgeplus, user, ukraine, kazakhstan, russia, albania, otkaz, pay, coin, 
    card, convert, ukrmail,truck, nv,rusmail, kazmail,delivery,avtoluks,shoplog,sdek,fetch} from '../../../until/images'
import Office from '../../components/Office';
import UserGroup from '../../components/UserGroup';

import { connect } from "react-redux";
import { path } from "../../../store/actions/index";

const mapStateToProps = state => {
    return { path: state.path };
};

const mapDispatchToProps = dispatch => {
    return {
        changePath: paths => dispatch(path(paths))
    };
}


class Setting extends Component{
    constructor(props){
        super(props);

    }


    render(){
        return (
            <div style={{marginTop: "30px", marginLeft: "40px"}}>
                <div className="block-header"> <span className="main-setting">Основные настройки</span><span className="user-setting">Настройки пользователей</span> </div>
                    <div className="wrap-container">
                        <div className="block-nav">
                            <ul className="block-contacts">
                                <li className="list-contacts">Контакты</li>
                                <li className="selected list-contacts" id="otdel-link" onClick={() => this.props.changePath('office')}>Отделы</li>
                                <li className="selected list-contacts" id="group-client-link" onClick={() => this.props.changePath('group')}>Группы клиентов</li>
                            </ul>
                            <ul className="block-order">
                                <li className="list-order">Заказы</li>
                                <li className="selected list-order" id="status-order-link">Статусы заказов</li>
                                <li className="selected list-order" id="block-payment-method">Способы оплаты</li>
                                <li className="selected list-order">Способы доставки</li>
                                <li className="selected list-order">Аутсорсинг</li>
                            </ul>
                            <ul className="block-catalog">
                                <li className="list-catalog">Каталог</li>
                                <li className="list-catalog hover-list">Категории товаров</li>
                                <li className="list-catalog hover-list">Товары</li>
                                <li className="list-catalog hover-list">Производители</li>
                                <li className="list-catalog hover-list">Валюта</li>
                                <li className="list-catalog hover-list">Сайты</li>
                                <li className="list-catalog hover-list">Категории атрибутов</li>
                                <li className="list-catalog hover-list">Атрибуты</li>
                                <li className="list-catalog hover-list">Цвета товаров</li>
                                <li className="list-catalog hover-list">Страны</li>
                            </ul>
                            <ul className="block-warehouse">
                                <li className="list-warehouse">Склады</li>
                                <li className="list-warehouse hover-list">Поставщики</li>
                            </ul>
                        </div>
                        
                      {this.props.path === "office" && <Office />}
                      {this.props.path === "group" && <UserGroup />}

                    </div>
            </div>
        )
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Setting);

