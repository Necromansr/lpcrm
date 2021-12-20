import './index.css';
import React, {Component} from 'react';
import Office from './Office';
import UserGroup from './UserGroup';
import Status from './Status';
import Payment from './Payment';
import Color from './Color';
import Localization from './Localization';

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
        this.state = {}
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
                                <li className="selected list-order" id="status-order-link" onClick={() => this.props.changePath('status')}>Статусы заказов</li>
                                <li className="selected list-order" id="block-payment-method" onClick={() => this.props.changePath('payment')}>Способы оплаты</li>
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
                                <li className="list-catalog hover-list" onClick={() => this.props.changePath('color')}>Цвета товаров</li>
                                <li className="list-catalog hover-list" onClick={() => this.props.changePath('localization')}>Страны</li>
                            </ul>
                            <ul className="block-warehouse">
                                <li className="list-warehouse">Склады</li>
                                <li className="list-warehouse hover-list">Поставщики</li>
                            </ul>
                        </div>

                      {this.props.path === "office" && <Office />}
                      {this.props.path === "group" && <UserGroup />}
                      {this.props.path === "status" && <Status />}
                      {this.props.path === "payment" && <Payment />}
                      {this.props.path === "color" && <Color />}
                      {this.props.path === "localization" && <Localization />}

                    </div>
            </div>
        )
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Setting);

