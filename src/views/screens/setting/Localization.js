import './localization.css';
import React, { Component } from 'react';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { otkaz, pay, coin, card, convert } from '../../../until/images'
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { token: state.token };
};

let images = {
    "otkaz": otkaz,
    "pay": pay,
    "coin": coin,
    "card": card,
    "convert": convert,

}

class Localization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localization: [],
        }
    }



    getData = () => {
        var myHeaders = new Headers();
        myHeaders.append("authorization", "Bearer " + this.props.token);
        fetch('http://localhost/countries', { headers: myHeaders }).then(x => x.json()).then(x => { this.setState({ localization: x.data }) })
    }
    componentDidMount() {
        this.getData();
    }




    render() {
        return (
            <div className="add block-payment-method">
                <div className="payment-header">Страны</div>
                <div className="wrap-container">
                    <ul className="payment-method">
                        <li className="list-header">
                            <div className="id-block">Id</div>
                            <div className="name-block">Код</div>
                            <div className="name-block">Title</div>
                            <div className="name-block">Название</div>
                            <div className="name-block">Alpha</div>
                            <div className="name-block">ISO</div>
                            <div className="sort-block">Status</div>
                        </li>
                        <SimpleBar style={{height: "550px"}}>
                        {this.state.localization.length > 0 && this.state.localization.map(x => (<List style={"list-item"} iso={x.iso} alpha={x.alpha} title={x.title} name={x.name} cod={x.cod} id={x.id} status={x.status} />))}
                        </SimpleBar>
                        {/* <li className="list-item">
                                <div className="id-block">2</div>
                                <div className="name-block"><img src={card} alt="" /> Предоплата</div>
                                <div className="sort-block">2</div>
                            </li>
                            <li className="list-item">
                                <div className="id-block">3</div>
                                <div className="name-block"><img src={coin} alt="" /> Оплачено</div>
                                <div className="sort-block">3</div>
                            </li>
                            <li className="list-item">
                                <div className="id-block">4</div>
                                <div className="name-block"><img src={pay} alt="" /> Наложенный платеж</div>
                                <div className="sort-block">4</div>
                            </li>
                            <li className="list-item">
                                <div className="id-block">4</div>
                                <div className="name-block"><img src={convert} alt="" /> Обмен</div>
                                <div className="sort-block">4</div>
                            </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

let List = ({ id, name,cod, status,title,alpha,iso, style }) => (
    <li key={id} className={style}>
        <div className="id-block">{id}</div>
        <div className="name-block">{cod}</div>
        <div className="name-block">{name}</div>

        <div className="name-block">{title}</div>
        
        <div className="name-block">{alpha}</div>
        <div className="name-block">{iso}</div>
        <div className="sort-block">{status}</div>
    </li>
);

export default connect(mapStateToProps)(Localization);