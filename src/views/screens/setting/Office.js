import './office.css';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const mapStateToProps = state => {
    return { token: state.token };
};

class Office extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addFlag: false,
            id: null,
            toggle: 0,
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
        this.setState({id:null, name: '', email: '',adress: '', toggle: 0, addFlag: true  })
    }
    getData = () => {
        var myHeaders = new Headers();
        myHeaders.append("authorization", "Bearer "+ this.props.token);
        fetch('http://testcrm.localhost/offices', {headers: myHeaders, method: 'GET'}).then(x => x.json()).then(x => { console.log(x.data); this.setState({ officies: x.data }) })
    }
    componentDidMount() {
        this.getData();
    }

    notify = (text) => toast(text, {position: toast.POSITION.TOP_RIGHT, autoClose: 2000, closeButton: false, hideProgressBar: true});


    onUpdate = (id, name, email, adress) => {
        
        this.setState({id:id, name: name, email: email,adress: adress, toggle: id, addFlag: true  })
    }

    _save = () => {
        
        let { addFlag,toggle,id,officies, ...data } = this.state;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ this.props.token);
        myHeaders.append('Accept', 'application/json');
        myHeaders.append('Content-Type', 'application/json');
        fetch('http://localhost/office', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data)
        }).then(x => x.json()).then(x=>  {
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
        })
    }

    _update = () => {
        let { addFlag,officies,toggle,id, ...data } = this.state;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ this.props.token);
        myHeaders.append('Accept', 'application/json');
        myHeaders.append('Content-Type', 'application/json');
        fetch('http://localhost/office/' + id, {
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
        fetch('http://localhost/office', {
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
                <div className="department-header">Отделы<span className="btnplus" onClick={this.onChangeFlag}></span></div>
                <div className="wrap-container">
                    <ul className="department-id">
                        <List id={"Id"} name={"Название"} desc={"Описание"} email={"E-mail"} sort={"Sort"} style={"list-header"} />

                        {this.state.officies.map((x, index) => (
                            <List key={index} id={x.id} name={x.name} toggle={this.state.toggle} onClick={this.onUpdate} adress={x.adress} email={x.email} sort={x.sort} style={"list-item "} />
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
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                {this.state.id === this.state.toggle && <div className="btn-save-delete" onClick={this._delete}>Удалить</div>}
                <div className="btn-save-close" onClick={this.state.id === this.state.toggle ? this._update : this._save}>Сохранить</div>
                </div>
                </div>}
                {/* <div className="btn-save-close" onClick={this.save}>Сохранить</div> */}
                <ToastContainer bodyStyle={{background: "transparent", color: "white"}}  toastStyle={{background: "rgba(81, 81, 81, 0.7)", marginTop: 32, borderRadius: 0}} />
            
            </div>
        )
    }
}

let List = ({ id, name, adress, email, sort, style, onClick, toggle  }) => (
    <li onClick={ ()=> onClick(id, name, email, adress)} className={style + (id === toggle ? "select-toggle" : "")}>
        <div className="id-block">{id}</div>
        <div className="name-block">{name}</div>
        <div className="desc-block">{adress}</div>
        <div className="email-block">{email}</div>
        <div className="sort-block">{sort}</div>
    </li>
);

export default  connect(mapStateToProps)(Office);