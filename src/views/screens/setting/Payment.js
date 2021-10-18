import './payment.css';
import React, { Component } from 'react';
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

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payments: [],
        }
    }



    getData = () => {
        var myHeaders = new Headers();
        myHeaders.append("authorization", "Bearer " + this.props.token);
        fetch('http://localhost/payments', { headers: myHeaders }).then(x => x.json()).then(x => { this.setState({ payments: x.data }) })
    }
    componentDidMount() {
        this.getData();
    }




    render() {
        return (
            <div className="add block-payment-method">
                <div className="payment-header">Способ оплаты</div>
                <div className="wrap-container">
                    <ul className="payment-method">
                        <li className="list-header">
                            <div className="id-block">Id</div>
                            <div className="name-block">Название</div>
                            <div className="sort-block">Sort</div>
                        </li>
                        {this.state.payments.length > 0 && this.state.payments.map(x => (<List style={"list-item"} name={x.name} id={x.id} icon={x.icon} sort={x.sort} />))}

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

let List = ({ id, name, icon, sort, style }) => (
    <li key={id} className={style}>
        <div className="id-block">{id}</div>
        <div className="name-block"><img src={images[icon]} alt="" /> {name}</div>
        <div className="sort-block">{sort}</div>
    </li>
);

export default connect(mapStateToProps)(Payment);