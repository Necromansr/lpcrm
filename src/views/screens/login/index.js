import React, { Component } from 'react';
import {LoginInput} from '../../components/Input';
import {LoginButton} from '../../components/Button';
import './index.css';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { sendData } from "../../../until/index";

import { isLogins, token } from "../../../store/actions/index";

const mapStateToProps = state => {
    return { isLogin: state.isLogin, token: state.token };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLogin: logins => dispatch(isLogins(logins)),
        changeToken: tokens => dispatch(token(tokens))
    };
}
class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            login: 'admin',
            pass: 'admin2020',
            message: '',
            showError: false
        }
        this.emailInputRef = React.createRef();
        this.passInputRef = React.createRef();
    }
    componentDidMount(){
        this.props.changeLogin(false);
    }
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.onLoginClick();
        }
    }

    getDate = ()=>{
        let date = new Date();
        let Y = date.getFullYear();

        return Y;
    }

    onChange = (name, e) => {
        this.setState({ [name] : e.target.value});
    }

    onLoginClick =  () => {
        // console.log(window.location);
        sendData('http://testcrm_2.localhost/enter', 'post', this.state).then(data => {
        console.log(data)

            if(data.action === 'true'){
                this.props.changeToken(data.token);
                console.log(this.props.isLogin);
                console.log(this.props.token);
                this.props.changeLogin(true);
                this.props.history.push('/about')
            }
            if(data.action==='error_authorization'){
                if (data.err === 'pass') {
                    this.setState({message: 'Неправильный пароль!', showError: true});
                    this.emailInputRef.current.style.color = "black";
                    this.passInputRef.current.style.color = "red";
                    this.passInputRef.current.focus();

                }
                if (data.err === 'login') {
                    this.setState({message: 'Такого пользователья несуществует!', showError: true});
                    this.emailInputRef.current.style.color = "red";
                    this.passInputRef.current.style.color = "black";
                    this.emailInputRef.current.focus();
                }
            }
        });
  

    }


    render() {
        return (
            <div className='content' onKeyPress={this.handleKeyPress}>
                <h1 style={{color: "#A2CEE1", fontSize: "18px", marginBottom: "15px"}}>WEB LP-CRM</h1>
                { this.state.showError && <div className='error' style={{color: 'darkred', marginBottom: "5px"}}>{this.state.message}</div>}
                <LoginInput title="Login" type="text" value={this.state.login} refs={this.emailInputRef} onChange={(e) => this.onChange('login', e)} />
                <LoginInput title="Password" type="password" value={this.state.pass} refs={this.passInputRef} onChange={(e) => this.onChange('pass', e)} />
                <LoginButton onClick={this.onLoginClick} title={"Войти"} />
                <div style={{color: "rgb(171, 171, 171)", fontSize: "11px", marginTop: "25px"}}>
                BA-WEB®Engine 2012 - {this.getDate()} © All Rights Reserved
                </div>
            </div>)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));