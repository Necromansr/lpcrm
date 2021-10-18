import './user_group.css';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";

import { token } from "../../../store/actions/index";

const mapStateToProps = state => {
    return { token: state.token };
};

class UserGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: 0,
            id: null,
            // id_array: [],
            addFlag: false,
            name: '',
            description: '',
            officies: [],
        }
    }

    
    notify = (text) => toast(text, {position: toast.POSITION.TOP_RIGHT, autoClose: 2000, closeButton: false, hideProgressBar: true});

    onChage = (name, e) => {
        this.setState({ [name]: e.target.value })
    }

    onChangeFlag = () => {
        this.setState({ addFlag: true, id:null, name: '', description: '', toggle: 0, })
    }

    onUpdate = (id, name, desc) => {
        
        this.setState({id:id, name: name, description: desc, toggle: id, addFlag: true  })
    }

    getData = () => {
        var myHeaders = new Headers();
        myHeaders.append("authorization", "Bearer "+ this.props.token);
        fetch('http://localhost/groups', {headers: myHeaders}).then(x => x.json()).then(x => { this.setState({ officies: x.data });  })
    }
    componentDidMount() {
        this.getData();
    }


    _save = () => {
        let { addFlag,officies,toggle,id, ...data } = this.state;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ this.props.token);
        myHeaders.append('Accept', 'application/json');
        myHeaders.append('Content-Type', 'application/json');
        fetch('http://localhost/group', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data)
        }).then(x => x.json()).then(x => {
            if (x.status === true) {
                this.setState({
                    addFlag: false,
                    name: '',
                    adress: '',
                    email: ''
                })
                this.notify(x.message);
                this.getData();
            } else {
                this.notify(x.message);
            }
        }).catch(e=> console.log(e))
    }

    _update = () => {
        let { addFlag,officies,toggle,id, ...data } = this.state;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ this.props.token);
        myHeaders.append('Accept', 'application/json');
        myHeaders.append('Content-Type', 'application/json');
        fetch('http://localhost/group/' + id, {
            method: 'PUT',
            headers: myHeaders,
            body: JSON.stringify(data)
        }).then(x => x.json()).then(x => {
            if (x.status === true) {
                this.setState({
                    addFlag: false,
                    name: '',
                    adress: '',
                    email: ''
                })
                this.notify(x.message);
                this.getData();
            } else {
                this.notify(x.message);
            }
        }).catch(e=> console.log(e))
    }

    _delete = () => {
        let { addFlag,officies,toggle,id, ...data } = this.state;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ this.props.token);
        myHeaders.append('Accept', 'application/json');
        myHeaders.append('Content-Type', 'application/json');
        fetch('http://localhost/group', {
            method: 'DELETE',
            headers: myHeaders,
            body: JSON.stringify({id_array: [id]})
        }).then(x => x.json()).then(x => {
            if (x.status === true) {
                this.setState({
                    addFlag: false,
                    name: '',
                    adress: '',
                    email: ''
                })
                this.notify(x.message);
                this.getData();
            } else {
                this.notify(x.message);
            }
        }).catch(e=> console.log(e))
    }

    render() {
        return (
            <div className="add block-department">
                <div className="department-header">Группы клиентов<span className="btnplus" onClick={this.onChangeFlag}></span></div>
                <div className="wrap-container">
                    <ul className="department-id">
                        <List id={"Id"} name={"Название"} desc={"Описание"}  sort={"Sort"} style={"list-header"} />

                        {this.state.officies.map((x, index) => (
                            <List key={index} onClick={this.onUpdate} toggle={this.state.toggle} id={x.id} name={x.name} desc={x.description}  sort={x.sort} style={"list-item "} />
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
                            <li className="dt-email-input"><input type="text" value={this.state.description} onChange={e => this.onChage('description', e)} placeholder="Ввод" /></li>
                        </ul>
                    </div>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                {this.state.id === this.state.toggle && <div className="btn-save-delete" onClick={this._delete}>Удалить</div>}
                <div className="btn-save-close" onClick={this.state.id === this.state.toggle ? this._update : this._save}>Сохранить</div>
                </div>
                </div>}
    

                <ToastContainer bodyStyle={{background: "transparent", color: "white"}}  toastStyle={{background: "rgba(81, 81, 81, 0.7)", marginTop: 32, borderRadius: 0}} />
            </div>
        )
    }
}

let List = ({ id, name, desc, sort, style, onClick, toggle }) => (
    <li onClick={ ()=> onClick(id, name, desc)} className={style + (id === toggle ? "select-toggle" : "")}>
        <div className="id-block">{id}</div>
        <div className="name-block">{name}</div>
        <div className="desc-block">{desc}</div>
        <div className="sort-block">{sort}</div>
    </li>
);

export default connect(mapStateToProps)(UserGroup);