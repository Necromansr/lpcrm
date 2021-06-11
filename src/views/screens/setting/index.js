import './index.css';
import React, {Component} from 'react';
import {badge, badgeplus, user, ukraine, kazakhstan, russia, albania, otkaz, pay, coin, 
    card, convert, ukrmail,truck, nv,rusmail, kazmail,delivery,avtoluks,shoplog,sdek,fetch} from '../../../until/images'


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
                                <li className="selected list-contacts" id="otdel-link">Отделы</li>
                                <li className="selected list-contacts" id="group-client-link">Группы клиентов</li>
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
                        <div className="add block-department">
                            <div className="department-header">Отделы<span className="btnplus"></span></div>
                            <div className="wrap-container">
                                <ul className="department-id">
                                    <li className="list-id">Id</li>
                                    <li className="list-id">1</li>
                                    <li className="list-id">2</li>
                                    <li className="list-id">3</li>
                                    <li className="list-id">4</li>
                                    <li className="list-id">11</li>
                                </ul>
                                <ul className="department-name">
                                    <li className="list-name">Название</li>
                                    <li className="list-name">Розничный магазин</li>
                                    <li className="list-name">Оптовый магазин</li>
                                    <li className="list-name">Отдел АОЭ</li>
                                    <li className="list-name">Black slave</li>
                                    <li className="list-name">Test</li>
                                </ul>
                                <ul className="department-description">
                                    <li className="list-description">Описание</li>
                                    <li className="list-description">г. Киев</li>
                                    <li className="list-description">г. Днепропетровск, ул. Димитр...</li>
                                    <li className="list-description"></li>
                                    <li className="list-description">Часів Яр, вул Дніпровська, 30</li>
                                    <li className="list-description"></li>
                                </ul>
                                <ul className="department-email">
                                    <li className="list-email">E-mail</li>
                                    <li className="list-email">office1@gmail.com</li>
                                    <li className="list-email">office2@gmail.com</li>
                                    <li className="list-email"></li>
                                    <li className="list-email">black-office slave@gmail.com</li>
                                    <li className="list-email"></li>
                                </ul>
                                <ul className="department-sort">
                                    <li className="list-sort">Sort</li>
                                    <li className="list-sort">1</li>
                                    <li className="list-sort">2</li>
                                    <li className="list-sort">3</li>
                                    <li className="list-sort">4</li>
                                    <li className="list-sort">5</li>
                                </ul>
                            </div>
                            <div className="department-change-toggle">
                                <div className="department-header">Изменить</div>
                                <div className="wrap-container-change">
                                    <ul className="department-change">
                                        <li className="department-change-name">Название отдела</li>
                                        <li className="dt-name-input"><input type="text" placeholder="Ввод" /></li>
                                        <li className="department-change-addres">Адрес</li>
                                        <li className="dt-addres-input"><input type="text" placeholder="Ввод" /></li>
                                    </ul>
                                    <ul className="department-change-email">
                                        <li className="dt-email">E-mail</li>
                                        <li className="dt-email-input"><input type="text" placeholder="Ввод" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="btn-save-close">Сохранить</div>
                        </div>
                        <div className="add block-clients">
                            <div className="clients-header">Групы клиентов<span className="btnplus2"></span></div>
                            <div className="wrap-container">
                                <ul className="clients-id">
                                    <li className="list-id">Id</li>
                                    <li className="list-id">1</li>
                                    <li className="list-id">2</li>
                                    <li className="list-id">3</li>
                                    <li className="list-id">4</li>
                                </ul>
                                <ul className="clients-name">
                                    <li className="list-name">Название</li>
                                    <li className="list-name">Покупатель</li>
                                    <li className="list-name">Оптовик</li>
                                    <li className="list-name">Поставщики</li>
                                    <li className="list-name">База</li>
                                </ul>
                                <ul className="clients-description">
                                    <li className="list-description">Описание</li>
                                    <li className="list-description"></li>
                                    <li className="list-description"></li>
                                    <li className="list-description"></li>
                                    <li className="list-description"></li>
                                    <li className="list-description"></li>
                                </ul>
                                <ul className="clients-sort">
                                    <li className="list-sort">Sort</li>
                                    <li className="list-sort">1</li>
                                    <li className="list-sort">2</li>
                                    <li className="list-sort">3</li>
                                    <li className="list-sort">4</li>

                                </ul>
                            </div>
                            <div className="clients-change-toggle">
                                <div className="clients-header">Изменить</div>
                                <div className="wrap-container-change">
                                    <ul className="clients-change">
                                        <li className="department-change-name">Название группы</li>
                                        <li className="dt-name-input"><input type="text" placeholder="Ввод" /></li>

                                    </ul>
                                    <ul className="clients-change-email">
                                        <li className="dt-email">Описание</li>
                                        <li className="dt-email-input"><input type="text" placeholder="Ввод" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="btn-save-close">Сохранить</div>
                        </div>
                        <div className="add block-status-order">
                            <div className="status-header">Групы клиентов<span className="btnplus3"></span></div>
                            <div className="custom-scroll_container" id="status-scroll">
                                <div className="custom-scroll_inner">
                                    <div className="wrap-container">
                                        <ul className="status-id">
                                            <li className="list-id">Id</li>
                                            <li className="list-id">1</li>
                                            <li className="list-id">2</li>
                                            <li className="list-id">3</li>
                                            <li className="list-id">44</li>
                                            <li className="list-id">11</li>
                                            <li className="list-id">22</li>
                                            <li className="list-id">4</li>
                                            <li className="list-id">14</li>
                                            <li className="list-id">24</li>
                                            <li className="list-id">63</li>
                                            <li className="list-id">17</li>
                                            <li className="list-id">59</li>
                                            <li className="list-id">63</li>
                                            <li className="list-id">17</li>
                                            <li className="list-id">59</li>
                                        </ul>
                                        <ul className="status-name">
                                            <li className="list-name">Цвет и название</li>
                                            <li><span className="list-name"><span className="color-83004F color-form"></span>Утилизация</span>
                                            </li>
                                            <li><span className="list-name"><span className="color-C94F62 color-form"></span>Успешно не выполнил</span>
                                            </li>
                                            <li><span className="list-name"><span className="color-9C02A7 color-form"></span>Успешно выполнен</span>
                                            </li>
                                            <li><span className="list-name"><span className="color-1DD787 color-form"></span>Сдано</span>
                                            </li>
                                            <li><span className="list-name"><span className="color-00CC00 color-form"></span>Принято</span>
                                            </li>
                                            <li><span className="list-name"><span className="color-00B9FF color-form"></span>Отправлено</span>
                                            </li>
                                            <li><span className="list-name"><span className="color-FF0000 color-form"></span>Отказ</span>
                                            </li>
                                            <li><span className="list-name"><span className="color-FFCF00 color-form"></span>Новый</span>
                                            </li>
                                            <li><span className="list-name"><span className="color-91D100 color-form"></span>Завершенно</span>
                                            </li>
                                            <li><span className="list-name"><span className="color-F50296 color-form"></span>Возврат товара (склад)</span>
                                            </li>
                                            <li><span className="list-name"><span className="color-6996D3 color-form"></span>Деньги в пути</span>
                                            </li>
                                            <li><span className="list-name"><span className="color-3415B0 color-form"></span>На контроле</span>
                                            </li>
                                            <li><span className="list-name"><span className="color-F50296 color-form"></span>Возврат товара (склад)</span>
                                            </li>
                                            <li><span className="list-name"><span className="color-6996D3 color-form"></span>Деньги в пути</span>
                                            </li>
                                            <li><span className="list-name"><span className="color-3415B0 color-form"></span>На контроле</span>
                                            </li>
                                        </ul>
                                        <ul className="status-description">
                                            <li className="list-description">Атрибуция</li>
                                            <li className="list-description"><span><img src={badge} alt="" /></span><span><img src={user} alt="" /></span></li>
                                            <li className="list-description"></li>
                                            <li className="list-description"></li>
                                            <li className="list-description"></li>
                                            <li className="list-description"><span><img src={user} alt="" /></span></li>
                                            <li className="list-description"></li>
                                            <li className="list-description"><span><img src={badgeplus} alt="" /></span></li>
                                            <li className="list-description"></li>
                                            <li className="list-description"></li>
                                            <li className="list-description"></li>
                                            <li className="list-description"></li>
                                            <li className="list-description"></li>
                                            <li className="list-description"></li>
                                            <li className="list-description"></li>
                                            <li className="list-description"></li>
                                        </ul>
                                        <ul className="status-nap">
                                            <li className="list-nap">Направление</li>
                                            <li className="list-nap"><img src={ukraine} alt="" /> ua</li>
                                            <li className="list-nap"><img src={russia} alt="" /> ru</li>
                                            <li className="list-nap"><img src={ukraine} alt="" /> ua</li>
                                            <li className="list-nap"><img src={kazakhstan} alt="" /> kz</li>
                                            <li className="list-nap"><img src={albania} alt="" /> alb</li>
                                            <li className="list-nap"><img src={ukraine} alt="" /> ua</li>
                                            <li className="list-nap"><img src={ukraine} alt="" /> ua</li>
                                            <li className="list-nap"><img src={ukraine} alt="" /> ua</li>
                                            <li className="list-nap"><img src={ukraine} alt="" /> ua</li>
                                            <li className="list-nap"><img src={ukraine} alt="" /> ua</li>
                                            <li className="list-nap"><img src={ukraine} alt="" /> ua</li>
                                            <li className="list-nap"><img src={ukraine} alt="" /> ua</li>
                                            <li className="list-nap"><img src={ukraine} alt="" /> ua</li>
                                            <li className="list-nap"><img src={ukraine} alt="" /> ua</li>
                                            <li className="list-nap"><img src={ukraine} alt="" /> ua</li>
                                        </ul>
                                        <ul className="status-sort">
                                            <li className="list-sort">Sort</li>
                                            <li className="list-sort">1</li>
                                            <li className="list-sort">2</li>
                                            <li className="list-sort">3</li>
                                            <li className="list-sort">44</li>
                                            <li className="list-sort">11</li>
                                            <li className="list-sort">22</li>
                                            <li className="list-sort">4</li>
                                            <li className="list-sort">14</li>
                                            <li className="list-sort">24</li>
                                            <li className="list-sort">63</li>
                                            <li className="list-sort">17</li>
                                            <li className="list-sort">59</li>
                                            <li className="list-sort">63</li>
                                            <li className="list-sort">17</li>
                                            <li className="list-sort">59</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="custom-scroll_bar-y"></div>
                                <div className="custom-scroll_bar-x"></div>
                            </div>
                            <div className="status-change-toggle">
                                <div className="status-header">Изменить</div>
                                <div className="wrap-container-change">
                                    <ul className="status-change">
                                        <li className="status-local status-local-btn">Локализация:
                                            <div className="dropdown-block">
                                                <div className="btn"><span className="btn-span"><img src={ukraine} alt="ua" className="list-img" />ua</span></div>
                                                <div className="scroll-position">
                                                    <div className="custom-scroll-pretty_container custom-scroll-pretty_hidden-x" id="local-btn-scroll">
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
                                                        <div className="custom-scroll-pretty_bar-y">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="status-color">Выбрать цвет: </li>
                                    </ul>
                                    <ul className="status-change-email">
                                        <li className="dt-email">Название</li>
                                        <li className="dt-email-input"><input type="text" placeholder="Ввод" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="block-pick-color">
                                <div className="header-pick-color">Выбрать цвет<span className="close-btn-color"></span></div>
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
                            </div>
                            <div className="block-btn-close">
                                <div className="block-for-user">* Заказов с этим статусом: 0 шт. <br /> При создании нового статуса <br /> нужно разрешить его пользователю в доступах.</div>
                                <div className="btn-save-close">Сохранить</div>
                            </div>
                        </div>
                        <div className="add block-payment-method">
                            <div className="payment-header">Способ оплаты</div>
                            <div className="wrap-container">
                                <ul className="payment-id">
                                    <li className="list-id">Id</li>
                                    <li className="list-id">1</li>
                                    <li className="list-id">2</li>
                                    <li className="list-id">3</li>
                                    <li className="list-id">4</li>
                                    <li className="list-id">4</li>
                                </ul>
                                <ul className="payment-name">
                                    <li className="list-name">Название</li>
                                    <li className="list-name"><span><img src={otkaz} alt="" /> Отказ</span>
                                    </li>
                                    <li className="list-name"><img src={card} alt="" /> Предоплата</li>
                                    <li className="list-name"><img src={coin} alt="" /> Оплачено</li>
                                    <li className="list-name"><img src={pay} alt="" /> Наложенный платеж</li>
                                    <li className="list-name"><img src={convert} alt="" /> Обмен</li>
                                </ul>
                                <ul className="payment-sort">
                                    <li className="list-sort">Sort</li>
                                    <li className="list-sort">1</li>
                                    <li className="list-sort">2</li>
                                    <li className="list-sort">3</li>
                                    <li className="list-sort">4</li>
                                    <li className="list-sort">4</li>
                                </ul>
                            </div>
                        </div>
                        <div className="add block-delivery-method">
                            <div className="delivery-header">Способы доставки<span className="btnplus2"></span></div>
                            <div className="wrap-container">
                                <ul className="delivery-id">
                                    <li className="list-id">Id</li>
                                    <li className="list-id">1</li>
                                    <li className="list-id">2</li>
                                    <li className="list-id">3</li>
                                    <li className="list-id">4</li>
                                    <li className="list-id">4</li>
                                    <li className="list-id">4</li>
                                    <li className="list-id">4</li>
                                    <li className="list-id">4</li>
                                    <li className="list-id">4</li>
                                    <li className="list-id">4</li>
                                </ul>
                                <ul className="delivery-name">
                                    <li className="list-name">Название</li>
                                    <li className="list-name"><span><img src={ukrmail} alt="mail-logo" />Укрпочта</span></li>
                                    <li className="list-name"><span><img src={truck} alt="mail-logo" />Самовывоз</span></li>
                                    <li className="list-name"><span><img src={rusmail} alt="mail-logo" />Почта России</span></li>
                                    <li className="list-name"><span><img src={nv} alt="mail-logo" />Новая почта</span></li>
                                    <li className="list-name"><span><img src={kazmail} alt="mail-logo" />Казпочта</span></li>
                                    <li className="list-name"><span><img src={delivery} alt="mail-logo"  />Деливери</span></li>
                                    <li className="list-name"><span><img src={avtoluks} alt="mail-logo" />Автолюкс</span></li>
                                    <li className="list-name"><span><img src={shoplog} alt="mail-logo" />Shop-Logistics</span></li>
                                    <li className="list-name"><span><img src={sdek} alt="mail-logo" />СДЭК</span></li>
                                    <li className="list-name"><span><img src={fetch} alt="mail-logo" />Fetchr</span></li>
                                </ul>
                                <ul className="delivery-description">
                                    <li className="list-description">Направление</li>
                                    <li className="list-description"><span><img src={ukraine} alt="" />ua</span></li>
                                    <li className="list-description"><span><img src={russia} alt="" />ru</span></li>
                                    <li className="list-description"><span><img src={ukraine} alt="" />ua</span></li>
                                    <li className="list-description"><span><img src={kazakhstan} alt="" />kz</span></li>
                                    <li className="list-description"><span><img src={albania} alt="" />alb</span></li>
                                    <li className="list-description"><span><img src={ukraine} alt="" />ua</span></li>
                                    <li className="list-description"><span><img src={ukraine} alt="" />ua</span></li>
                                    <li className="list-description"><span><img src={ukraine} alt="" />ua</span></li>
                                    <li className="list-description"><span><img src={ukraine} alt="" />ua</span></li>
                                    <li className="list-description"><span><img src={ukraine} alt="" />ua</span></li>
                                </ul>
                                <ul className="delivery-sort">
                                    <li className="list-sort">Sort</li>
                                    <li className="list-sort">1</li>
                                    <li className="list-sort">2</li>
                                    <li className="list-sort">3</li>
                                    <li className="list-sort">4</li>
                                    <li className="list-sort">4</li>
                                    <li className="list-sort">4</li>
                                    <li className="list-sort">4</li>
                                    <li className="list-sort">4</li>
                                    <li className="list-sort">4</li>
                                    <li className="list-sort">4</li>
                                </ul>
                            </div>
                            <div className="delivery-change-toggle">
                                <div className="delivery-header">Изменить</div>
                                <div className="wrap-container-change">
                                    <ul className="clients-change">
                                        <li className="department-change-name">Название</li>
                                        <li className="dt-name-input"><input type="text" placeholder="Ввод" /></li>
                                        <li className="dt-email">Описание</li>
                                        <li className="dt-email-input"><input type="text" placeholder="Ввод" /></li>
                                    </ul>
                                    <ul className="clients-change-email">
                                        <li className="dt-email">Локализация ua L</li>
                                        <li className="dt-email-input">Загрузить иконку</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="btn-save-close">Сохранить</div>
                        </div>
                    </div>
            </div>
        )
    }

}


export default Setting;

