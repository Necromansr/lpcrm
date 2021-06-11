import './index.css';
import React, { Component } from 'react';
import {
    eye, ukraine, kazakhstan, russia, albania, coin,
    card, union, ukrmail, nv, link, rusmail, frame,
} from '../../../until/images'


class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
            name: ''
        }
    }

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    onChange = (name, e, capitalize) => {
        this.setState({ [name]:  capitalize ? this.capitalize(e.target.value) : e.target.value })
    }


    onChangeShowInfo = () => {
        this.setState({ showInfo: !this.state.showInfo })
    }

    dropDown = (query) => {
        let arr = [...document.querySelectorAll('.scroll-position')];
        arr.map(x => x.classList.remove('toggle'));
        document.querySelector(query).classList.add('toggle');
    }

    render() {
        return (
            <div>
                <div className="order">
                    <div className="order-header"><span className="order-info-link" onClick={this.onChangeShowInfo}>Заказ № 265457</span><span className="arrow" onClick={this.onChangeShowInfo}></span>{this.state.showInfo && <span className="order-info">Доп.информация Доп.информация Доп.информация</span>}<span className="switch-btn"><label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    </span><span className="btn-close"></span></div>
                    <div className="btn-block"><button className="btn-remind">Напомнить</button><button className="btn-sms">SMS</button><button className="btn-call">Позвонить</button></div>
                    <div className="container">
                        <div className="wrap-contact-utm">
                            <table className="contact-table">
                                <tr>
                                    <td colSpan={2} className="contact-header">Контакт</td>
                                </tr>
                                <tr>
                                    <td className="contact-list">Страна:</td>
                                    <td className="contact-description country-style">
                                        <div onClick={() => this.dropDown(".country-style .dropdown-block .scroll-position")} className="dropdown-block">
                                            <div className="btn"><span className="btn-span"><img src={ukraine} alt="ua" className="list-img" />ua</span></div>
                                            <div className="scroll-position">
                                                <div className="custom-scroll-pretty_container custom-scroll-pretty_hidden-x" id="country-scroll">
                                                    <div className="custom-scroll-pretty_inner">
                                                        <ul className="ul-block">
                                                            <li className="list list-hover"><img src={ukraine} alt="ua" className="list-img" />ua</li>
                                                            <li className="list list-hover"><img src={russia} alt="ru" className="list-img" />ru</li>
                                                            <li className="list list-hover"><img src={kazakhstan} alt="kz" className="list-img" />kz</li>
                                                            <li className="list list-hover"><img src={albania} alt="alb" className="list-img" />alb</li>
                                                            <li className="list list-hover"><img src={ukraine} alt="ua" className="list-img" />ua</li>
                                                            <li className="list list-hover"><img src={albania} alt="alb" className="list-img" />alb</li>
                                                            <li className="list list-hover"><img src={russia} alt="ru" className="list-img" />ru</li>
                                                        </ul>
                                                    </div>
                                                    <div className="custom-scroll-pretty_track-y">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="contact-list">Покупатель:</td>
                                    <td className="contact-description"><input type="text" value={this.state.name} onChange={e => this.onChange('name', e, true)} size="25" className="input-user letter-high" placeholder="Ваше имя" /></td>
                                </tr>
                                <tr>
                                    <td className="contact-list">Телефон:</td>
                                    <td className="contact-description"><span className="description-number-logo"></span><input type="number" size="20" className="input-user-phone" placeholder="Ваш телефон" /></td>
                                </tr>
                                <tr>
                                    <td className="contact-list">E-mail:</td>
                                    <td className="contact-description"><input name="email" type="text" size="25" className="input-user" placeholder="yuliya.mytrofanova03@gmail..." /></td>
                                </tr>
                                <tr>
                                    <td className="contact-list">Отдел:</td>
                                    <td className="contact-description otdel">
                                        <div onClick={() => this.dropDown(".otdel .dropdown-block .scroll-position")} className="dropdown-block">
                                            <div className="btn"><span className="btn-span">Розничный магазин</span></div>
                                            <div className="scroll-position">
                                                <div className="custom-scroll-pretty_container custom-scroll-pretty_hidden-x" id="otdel-scroll">
                                                    <div className="custom-scroll-pretty_inner">
                                                        <ul className="ul-block">
                                                            <li className="list list-hover">Розничный магазин</li>
                                                            <li className="list list-hover">Розничный магазин</li>
                                                            <li className="list list-hover">Оптовый отдел</li>
                                                            <li className="list list-hover">Отдел ОАЭ</li>
                                                            <li className="list list-hover">Black slave</li>
                                                            <li className="list list-hover">Отдел ОАЭ</li>
                                                            <li className="list list-hover">Оптовый отдел</li>
                                                        </ul>
                                                    </div>
                                                    <div className="custom-scroll-pretty_track-y">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="contact-list">Статус заказа:</td>
                                    <td className="contact-description status">
                                        <div onClick={() => this.dropDown(".status .dropdown-block .scroll-position")} className="dropdown-block">
                                            <div className="btn"><span className="status-color"></span><span className="btn-span">Новый</span>
                                            </div>
                                            <div className="scroll-position">
                                                <div className="custom-scroll-pretty_covntainer custom-scroll-pretty_hidden-x" id="status-scroll">
                                                    <div className="custom-scroll-pretty_inner">
                                                        <ul className="ul-block">
                                                            <li className="list list-yellow">Новый</li>
                                                            <li className="list list-yellow">Новый</li>
                                                            <li className="list list-green">Принято</li>
                                                            <li className="list list-red">Отказ</li>
                                                            <li className="list list-blue">Отправлено</li>
                                                            <li className="list list-green">Принято</li>
                                                            <li className="list list-blue">Отправлено</li>
                                                        </ul>
                                                    </div>
                                                    <div className="custom-scroll-pretty_track-y">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="contact-list another-style">Причина отказа:</td>
                                    <td className="contact-description another-opacity user-decline">
                                        <div onClick={() => this.dropDown(".user-decline .dropdown-block .scroll-position")} className="dropdown-block">
                                            <div className="btn"><span className="btn-span">Передумал покупать</span></div>
                                            <div className="scroll-position">
                                                <div className="custom-scroll-pretty_container custom-scroll-pretty_hidden-x" id="user-decline-scroll">
                                                    <div className="custom-scroll-pretty_inner">
                                                        <ul className="ul-block">
                                                            <li className="list list-hover">Передумал покупать</li>
                                                            <li className="list list-hover">Не подошло</li>
                                                            <li className="list list-hover">Передумал покупать</li>
                                                            <li className="list list-hover">Передумал покупать</li>
                                                            <li className="list list-hover">Передумал покупать</li>
                                                            <li className="list list-hover">Передумал покупать</li>
                                                            <li className="list list-hover">Передумал покупать</li>
                                                        </ul>
                                                    </div>
                                                    <div className="custom-scroll-pretty_track-y">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="contact-list">Способ оплаты:</td>
                                    <td className="contact-description pay">
                                        <div onClick={() => this.dropDown(".pay .dropdown-block .scroll-position")} className="dropdown-block">
                                            <div className="btn"><span className="btn-span"><img src={card} alt="ua" className="list-img" /></span></div>
                                            <div className="scroll-position">
                                                <div className="custom-scroll-pretty_container custom-scroll-pretty_hidden-x" id="pay-scroll">
                                                    <div className="custom-scroll-pretty_inner">
                                                        <ul className="ul-block">
                                                            <li className="list list-hover"><img src={card} alt="card" className="list-img" /></li>
                                                            <li className="list list-hover"><img src={card} alt="card" className="list-img" />Предоплата</li>
                                                            <li className="list list-hover"><img src={frame} alt="card" className="list-img" />Наложеный платеж</li>
                                                            <li className="list list-hover"><img src={coin} alt="card" className="list-img coin-position" />Оплачено</li>
                                                            <li className="list list-hover"><img src={card} alt="card" className="list-img" />Предоплата</li>
                                                            <li className="list list-hover"><img src={frame} alt="card" className="list-img" />Наложеный платеж</li>
                                                            <li className="list list-hover"><img src={coin} alt="card" className="list-img coin-position" />Оплачено</li>
                                                        </ul>
                                                    </div>
                                                    <div className="custom-scroll-pretty_track-y">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <div className="comment-block">
                                <div className="comment">Комментарий</div>
                                <textarea className="comment-input letter-high"></textarea>
                            </div>
                            <table className="utm-table">
                                <tr>
                                    <td colSpan={2} className="contact-header">UTM - метки</td>
                                </tr>
                                <tr>
                                    <td className="utm-list">utm_source:</td>
                                    <td className="utm-description">facebook</td>
                                </tr>
                                <tr>
                                    <td className="utm-list">utm_medium:</td>
                                    <td className="utm-description">instalenta_ru</td>
                                </tr>
                                <tr>
                                    <td className="utm-list">utm_term:</td>
                                    <td className="utm-description">fit3</td>
                                </tr>
                                <tr>
                                    <td className="utm-list">utm_content:</td>
                                    <td className="utm-description">tex1</td>
                                </tr>
                                <tr>
                                    <td className="utm-list">utm_source:</td>
                                    <td className="utm-description">мамы_25_60_18_30</td>
                                </tr>
                            </table>
                        </div>
                        <div className="wrap-delivery-info-fields">
                            <table className="delivery-table">
                                <tr>
                                    <td colSpan={2} className="contact-header">Доставка</td>
                                </tr>
                                <tr>
                                    <td className="delivery-list">Способ:</td>
                                    <td className="delivery-description mail">
                                        <div onClick={() => this.dropDown(".mail .dropdown-block .scroll-position")} className="dropdown-block">
                                            <div className="btn"><span className="btn-span"><img src={nv} alt="np" className="list-img" />Нова Пошта</span></div>
                                            <div className="scroll-position">
                                                <div className="custom-scroll-pretty_container custom-scroll-pretty_hidden-x" id="mail-scroll">
                                                    <div className="custom-scroll-pretty_inner">
                                                        <ul className="ul-block">
                                                            <li className="list list-hover"><img src={nv} alt="np" className="list-img" />Нова Пошта</li>
                                                            <li className="list list-hover"><img src={nv} alt="np" className="list-img" />Нова Пошта</li>
                                                            <li className="list list-hover"><img src={ukrmail} alt="up" className="list-img" />Укрпочта</li>
                                                            <li className="list list-hover"><img src={rusmail} alt="pr" className="list-img rus-icon" />Почта России</li>
                                                            <li className="list list-hover"><img src={nv} alt="np" className="list-img" />Нова Пошта</li>
                                                            <li className="list list-hover"><img src={ukrmail} alt="up" className="list-img" />Укрпочта</li>
                                                            <li className="list list-hover"><img src={rusmail} alt="pr" className="list-img rus-icon" />Почта России</li>
                                                        </ul>
                                                    </div>
                                                    <div className="custom-scroll-pretty_track-y">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="delivery-list">TTH:</td>
                                    <td className="delivery-description"><input type="number" size="19" className="input-ttn" placeholder="ТТН" /></td>
                                </tr>
                                <tr>
                                    <td className="delivery-list">Адрес:<span className="pen-logo"></span></td>
                                    <td className="delivery-description"><input type="text" size="19" className="input-address letter-high" placeholder="Адресса" /></td>
                                </tr>
                                <tr>
                                    <td className="delivery-list">Отправлено:</td>
                                    <td className="delivery-description calendary-btn"><span className="calendary-logo"></span><input value="" type="text" id="datepicker" size="12" placeholder="14.01.2021" readOnly /></td>
                                </tr>
                            </table>
                            <table className="info-table">
                                <tr>
                                    <td colSpan={2} className="contact-header">Информация</td>
                                </tr>
                                <tr>
                                    <td className="info-list">Сотрудник:</td>
                                    <td className="info-description user-select">
                                        <div onClick={() => this.dropDown(".user-select .dropdown-block .scroll-position")} className="dropdown-block">
                                            <div className="btn"><span className="btn-span">Юля Дизайнер</span></div>
                                            <div className="scroll-position">
                                                <div className="custom-scroll-pretty_container custom-scroll-pretty_hidden-x" id="user-select-scroll">
                                                    <div className="custom-scroll-pretty_inner">
                                                        <ul className="ul-block">
                                                            <li className="list list-hover">Дима Дизайнер</li>
                                                            <li className="list list-hover">Ваня Дизайнер</li>
                                                            <li className="list list-hover">Валера Дизайнер</li>
                                                            <li className="list list-hover">Макс Дизайнер</li>
                                                            <li className="list list-hover">Рома Дизайнер</li>
                                                            <li className="list list-hover">Леха Дизайнер</li>
                                                            <li className="list list-hover">Юля Дизайнер</li>
                                                        </ul>
                                                    </div>
                                                    <div className="custom-scroll-pretty_track-y">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="info-list">IP:</td>
                                    <td className="info-description ip-color-lock">178.213.0.225<span className="lock-logo"></span><span className="unlock-logo"></span></td>
                                </tr>
                                <tr>
                                    <td className="info-list">Сайт:</td>
                                    <td className="info-description site-style"><a href="#">elastica.mysports.ru</a>
                                        <a href="#" className="site-link"><img className="site-link-img" src={link} alt="link-site" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="info-list">order_id:</td>
                                    <td className="info-description">15957545764 <span className="i-history"></span></td>
                                </tr>
                                <tr>
                                    <td className="info-list"></td>
                                    <td className="info-description data-style">от 26.07.2020 09:09:36</td>
                                </tr>
                            </table>
                            <table className="field-table">
                                <tr>
                                    <td className="contact-header">Дополнительные поля<span className="pen-logo"></span></td>
                                </tr>
                            </table>
                            <div className="table-scroll">
                                <div className="custom-scroll-pretty_container custom-scroll-pretty_hidden-x" id="field-scroll">
                                    <div className="custom-scroll-pretty_inner">
                                        <table>
                                            <tr>
                                                <td className="field-number">1</td>
                                                <td className="field-description"><input className="field-input letter-high" type="text" size="23" />
                                                    <a href="" className="site-link"><img className="site-link-img" src={link} alt="link-site" /></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="field-number">2</td>
                                                <td className="field-description"><input className="field-input letter-high" type="text" size="23" /></td>
                                            </tr>
                                            <tr>
                                                <td className="field-number">3</td>
                                                <td className="field-description"><input className="field-input letter-high" type="text" size="23" /></td>
                                            </tr>
                                            <tr>
                                                <td className="field-number">4</td>
                                                <td className="field-description"><input className="field-input letter-high" type="text" size="23" /></td>
                                            </tr>
                                            <tr>
                                                <td className="field-number">5</td>
                                                <td className="field-description"><input className="field-input letter-high" type="text" size="23" /></td>
                                            </tr>
                                            <tr>
                                                <td className="field-number">6</td>
                                                <td className="field-description"><input className="field-input letter-high" type="text" size="23" /></td>
                                            </tr>
                                            <tr>
                                                <td className="field-number">7</td>
                                                <td className="field-description"><input className="field-input letter-high" type="text" size="23" /></td>
                                            </tr>
                                            <tr>
                                                <td className="field-number">8</td>
                                                <td className="field-description"><input className="field-input letter-high" type="text" size="23" /></td>
                                            </tr>
                                            <tr>
                                                <td className="field-number">9</td>
                                                <td className="field-description"><input className="field-input letter-high" type="text" size="23" /></td>
                                            </tr>
                                            <tr>
                                                <td className="field-number">10</td>
                                                <td className="field-description"><input className="field-input letter-high" type="text" size="23" /></td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="custom-scroll-pretty_track-y">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrap-products-sale">
                            <table className="product-table">
                                <tr>
                                    <td colSpan={8} className="contact-header">Товар<span className="btnplus"></span></td>
                                </tr>
                                <tr>
                                    <td className="product-id">Id</td>
                                    <td className="product-id id-pos">sub id</td>
                                    <td className="product-id">sub_name</td>
                                    <td className="product-id">Товар</td>
                                    <td className="product-id">Цена</td>
                                    <td className="product-id">Кол-во</td>
                                    <td className="product-id">Итого</td>
                                    <td className="product-id"></td>
                                </tr>
                                <tr>
                                    <td className="product-description">5649</td>
                                    <td className="product-description id-pos">10</td>
                                    <td className="product-description">фиолетовый</td>
                                    <td className="product-description  long-str">Видеорегистратор DVR-mini *1244*</td>
                                    <td className="product-description">487.00</td>
                                    <td className="product-description id-pos">1</td>
                                    <td className="product-description">487.00</td>
                                    <td className="product-description"><span className="list-delete"></span></td>
                                </tr>
                                <tr>
                                    <td className="product-description">1880</td>
                                    <td className="product-description id-pos">45</td>
                                    <td className="product-description">черный</td>
                                    <td className="product-description long-str">Рівень лазерний Procraft LE-3D</td>
                                    <td className="product-description">1069.00</td>
                                    <td className="product-description id-pos">1</td>
                                    <td className="product-description">1069.00</td>
                                    <td className="product-description"><span className="list-delete"></span></td>
                                </tr>
                                <tr>
                                    <td colSpan={8} className="sum"><span>Кол-во</span><span className="sum-number">2</span><span className="sum-all">1556.00</span></td>
                                </tr>
                            </table>
                            <table className="sale-table">
                                <tr>
                                    <td colSpan={8} className="contact-header">Доппродажа
                            <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                        <span className="btnplus"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="sale-id">Id</td>
                                    <td className="sale-id id-pos">sub id</td>
                                    <td className="sale-id">sub_name</td>
                                    <td className="sale-id">Товар</td>
                                    <td className="sale-id">Цена</td>
                                    <td className="sale-id id-pos">Кол-во</td>
                                    <td className="sale-id">Итого</td>
                                    <td className="sale-id"></td>
                                </tr>
                                <tr>
                                    <td className="sale-description">806</td>
                                    <td className="sale-description id-pos">10</td>
                                    <td className="sale-description">фиолетовый</td>
                                    <td className="sale-description long-str">Автомагнитола (Xplod CDX) *1372*</td>
                                    <td className="sale-description">547.00</td>
                                    <td className="sale-description id-pos">1</td>
                                    <td className="sale-description">547.00</td>
                                    <td className="sale-description"><span className="list-delete"></span></td>
                                </tr>
                                <tr>
                                    <td colSpan={8} className="sum"><span>Кол-во</span><span className="sum-number">2</span><span className="sum-all">547.00</span></td>
                                </tr>
                            </table>
                            <div className="sum-many"><span>Сумма заказа 2103.00</span></div>
                            <div className="btn-save-close"><span></span>Сохранить и закрыть</div>
                        </div>
                    </div>
                </div>

                <div className="add-order">
                    <div className="add-order-header">Добавление товара на заказ<span className="btn-close-order"></span></div>
                    <table className="order-table">
                        <tr>
                            <td className="order-list">Категория товара</td>
                            <td className="order-description category-list">
                                <div className="dropdown-block">
                                    <div className="btn"><span className="btn-span">аааа</span></div>
                                    <div className="scroll-position">
                                        <div className="custom-scroll-pretty_container custom-scroll-pretty_hidden-x" id="category-scroll">
                                            <div className="custom-scroll-pretty_inner">
                                                <ul className="ul-block">
                                                    <li className="list list-hover">asdasdas</li>
                                                    <li className="list list-hover">12312432rw</li>
                                                    <li className="list list-hover">asdasd1212e</li>
                                                    <li className="list list-hover">asdsd12d1a</li>
                                                    <li className="list list-hover">asdas1221d12</li>
                                                    <li className="list list-hover">asdas asdadwq</li>
                                                    <li className="list list-hover">asdasasd1212</li>
                                                </ul>
                                            </div>
                                            <div className="custom-scroll-pretty_track-y">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="order-list">Товар</td>
                            <td className="order-description product-list">
                                <div className="dropdown-block">
                                    <div className="btn"><span className="btn-span">5766 -Ремень (цена: 199.00) Модель: 232=39 штук</span></div>
                                    <div className="scroll-position">
                                        <div className="custom-scroll-pretty_container custom-scroll-pretty_hidden-x" id="product-scroll">
                                            <div className="custom-scroll-pretty_inner">
                                                <ul className="ul-block">
                                                    <li className="list list-hover">5766 -Ремень (цена: 199.00) Модель: 232=39 штук</li>
                                                    <li className="list list-hover">5766 -Ремень (цена: 199.00) Модель: 232=39 штук</li>
                                                    <li className="list list-hover">5766 -Ремень (цена: 199.00) Модель: </li>
                                                    <li className="list list-hover">5766 -Ремень (цена: 199.00) Модель:</li>
                                                    <li className="list list-hover">5766qwe -Ремень (цена: 199.00) Модель:</li>
                                                    <li className="list list-hover">5766 -Ремень (цена: 199.00) Модель:</li>
                                                    <li className="list list-hover">5766 -Ремень (цена: 199.00) Модель:</li>
                                                </ul>
                                            </div>
                                            <div className="custom-scroll-pretty_track-y">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="order-list">ID товара</td>
                            <td className="order-description">5766</td>
                        </tr>
                        <tr>
                            <td className="order-list">Текущий остаток</td>
                            <td className="order-description">39 шт.</td>
                        </tr>
                        <tr>
                            <td className="order-list">Цена реализации</td>
                            <td className="order-description">199.00 грн.</td>
                        </tr>
                    </table>
                    <div className="sub-id">Sub id</div>
                    <table className="sub-table">
                        <tr>
                            <td className="sub-header">sub id</td>
                            <td className="sub-header">Название</td>
                            <td className="sub-header">Остаток</td>
                            <td className="sub-header">Добавляется</td>
                            <td className="sub-header eye-open"><img className="eye-img" src={union} alt="eye"></img>
                            </td>
                        </tr>
                        <tr>
                            <td className="sub-list">10</td>
                            <td className="sub-list">M</td>
                            <td className="sub-list">20 штук</td>
                            <td className="sub-list"><button className="minus" id="minus"></button><span id="num">1</span><button className="plus" id="plus"></button></td>
                            <td className="sub-list eye-close"><img className="eye-img" src={eye} alt="eye"></img>
                            </td>
                        </tr>
                        <tr>
                            <td className="sub-list">11</td>
                            <td className="sub-list">L</td>
                            <td className="sub-list">20 штук</td>
                            <td className="sub-list"><button className="minus" id="minus2"></button><span id="num2">0</span><button className="plus" id="plus2"></button></td>
                            <td className="sub-list eye-close"><img className="eye-img" src={eye} alt="eye"></img>
                            </td>
                        </tr>
                    </table>
                    <div className="full-info">Итоговая информация</div>
                    <table className="full-info-table">
                        <tr>
                            <td className="info-table-list">Добавляется:</td>
                            <td className="info-tb-desc">1 шт.</td>
                        </tr>
                        <tr>
                            <td className="info-table-list">Цена продажи</td>
                            <td className="info-tb-desc">199.00 грн</td>
                        </tr>
                    </table>
                    <div className="btn-save-add-product"><span className="add-product">Добавить товар</span><span className="save-close">Сохранить и закрыть</span></div>
                </div>
            </div>
        )
    }

}


export default Order;

