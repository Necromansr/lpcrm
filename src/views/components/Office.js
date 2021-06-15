import './office.css';
import React, { Component } from 'react';


class Office extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addFlag: false,
            name: '',
            email: '',
            adress: '',
            officies: [],
        }
    }


    onChage = (name, e) => {
        this.setState({ [name]: e.target.value })
    }

    onChangeFlag = () => {
        this.setState({ addFlag: !this.state.addFlag })
    }
    getData = () => {
        fetch('http://localhost/test1').then(x => x.json()).then(x => { console.log(x.data); this.setState({ officies: x.data }) })
    }
    componentDidMount() {
        this.getData();
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
            <div className="add block-department">
                <div className="department-header">Отделы<span className="btnplus" onClick={this.onChangeFlag}></span></div>
                <div className="wrap-container">
                    <ul className="department-id">
                        <List id={"Id"} name={"Название"} desc={"Описание"} email={"E-mail"} sort={"Sort"} style={"list-header"} />

                        {this.state.officies.map((x, index) => (
                            <List key={index} id={x.id} name={x.name} desc={x.adress} email={x.email} sort={x.sort} style={"list-item"} />
                        ))}


                    </ul>
                </div>
                {this.state.addFlag && <div className="department-change-toggle">
                    <div className="department-header">Изменить</div>
                    <div className="wrap-container-change">
                        <ul className="department-change">
                            <li className="department-change-name">Название отдела</li>
                            <li className="dt-name-input"><input type="text" value={this.state.name} onChange={e => this.onChage('name', e)} placeholder="Ввод" /></li>
                            <li className="department-change-addres">Адрес</li>
                            <li className="dt-addres-input"><input type="text" value={this.state.adress} onChange={e => this.onChage('adress', e)} placeholder="Ввод" /></li>
                        </ul>
                        <ul className="department-change-email">
                            <li className="dt-email">E-mail</li>
                            <li className="dt-email-input"><input type="text" value={this.state.email} onChange={e => this.onChage('email', e)} placeholder="Ввод" /></li>
                        </ul>
                    </div>
                </div>}
                <div className="btn-save-close" onClick={this.save}>Сохранить</div>
            </div>
        )
    }
}

let List = ({ id, name, desc, email, sort, style }) => (
    <li className={style}>
        <div className="id-block">{id}</div>
        <div className="name-block">{name}</div>
        <div className="desc-block">{desc}</div>
        <div className="email-block">{email}</div>
        <div className="sort-block">{sort}</div>
    </li>
);

export default Office;