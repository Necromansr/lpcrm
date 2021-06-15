import './user_group.css';
import React, { Component } from 'react';


class UserGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addFlag: false,
            name: '',
            desc: '',
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
                <div className="department-header">Группы клиентов<span className="btnplus" onClick={this.onChangeFlag}></span></div>
                <div className="wrap-container">
                    <ul className="department-id">
                        <List id={"Id"} name={"Название"} desc={"Описание"}  sort={"Sort"} style={"list-header"} />

                        {this.state.officies.map((x, index) => (
                            <List key={index} id={x.id} name={x.name} desc={x.description}  sort={x.sort} style={"list-item"} />
                        ))}


                    </ul>
                </div>
                {this.state.addFlag && <div className="department-change-toggle">
                    <div className="department-header">Изменить</div>
                    <div className="wrap-container-change">
                        <ul className="department-change">
                            <li className="department-change-name">Название группы</li>
                            <li className="dt-name-input"><input type="text" value={this.state.name} onChange={e => this.onChage('name', e)} placeholder="Ввод" /></li>
                        </ul>
                        <ul className="department-change-email">
                            <li className="dt-email">Описание</li>
                            <li className="dt-email-input"><input type="text" value={this.state.desc} onChange={e => this.onChage('desc', e)} placeholder="Ввод" /></li>
                        </ul>
                    </div>
                </div>}
                <div className="btn-save-close" onClick={this.save}>Сохранить</div>
            </div>
        )
    }
}

let List = ({ id, name, desc, sort, style }) => (
    <li className={style}>
        <div className="id-block">{id}</div>
        <div className="name-block">{name}</div>
        <div className="desc-block">{desc}</div>
        <div className="sort-block">{sort}</div>
    </li>
);

export default UserGroup;