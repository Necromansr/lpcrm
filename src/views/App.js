import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './screens/login';
import Setting from './screens/setting';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import Order from './screens/order';
import Zakazy from './screens/order/zakazy';

import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { isLogin: state.isLogin };
};

function makeTableData(w, h) {
  return new Array(h).fill(0).map((_, row) => {
    return {
      id: '4234',
      status: 'Новый',
      bayer_name: 'bayer_name',
      localization: 'ua',
      phone: '+435435436536',
      comment: '423432423432423432423423432',
      total: '432423.00',
      product: 'rest',
      pay: '2423',
      ppo: 't',
      delivery: '423',
      addres: 'address',
      ttn: 'ttn',
      ttn_status: 'Новый',
      ttn_user: 'test',
      office: 'Новый',
      date1: 'Новый',
      date2: 'Новый',
      date3: 'Новый',
      date4: 'Новый',
      date5: 'Новый',
      date6: 'Новый',
      date7: 'Новый',
      date8: 'Новый',
      site: 'Новый',
      ip: 'Новый',
      utm1: 'Новый',
      utm2: 'Новый',
      utm3: 'Новый',
      utm4: 'Новый',
      utm5: 'Новый',
      additional_1: 'Новый',
      additional_2: 'Новый',
      additional_3: 'Новый',
      additional_4: 'Новый',
      additional_5: 'Новый',
      additional_6: 'Новый',
      additional_7: 'Новый',
      additional_8: 'Новый',
      additional_9: 'Новый',
      additional_10: 'Новый',
      select: false
    }
  });
}





class App extends Component {

  constructor(props){
    super(props);


    this.state = {
      start: 0,
      end: 0
    }


  this.changeStart = this.changeStart.bind(this);
  this.changeEnd = this.changeEnd.bind(this);

  }

  changeStart(number){
    this.setState({start: number})
      
  }


  changeEnd(number){
    this.setState({end: number})
      
  }

  render() {
    return (

      <div>
        <div id="tooltipBtn"></div>
        <Router>
          {/* {console.log(this.props.isLogin)} */}
          {!this.props.isLogin && <Header start={this.state.start}  end={this.state.end} count={10} />}
          <div style={{ height: "100%", display: 'flex' }}>
            {!this.props.isLogin && <NavBar props={this.props} />}
            <div style={{ height: "100%", width: "100%", paddingTop: 50, paddingLeft: 50, paddingBottom: 50 }}>
              {/* <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/setting">
                  <Setting />
                </Route>
                <Route path="/order">
                  <Order
                    changeStart={this.changeStart}
                    changeEnd={this.changeEnd}
                    data={makeTableData(45, 500)}
                    rowHeight={18}
                    // visibleRows={Math.floor(window.screen.height / 19) - 5}
                    visibleRows={Math.floor((document.body.clientHeight - 124) / 18) + Math.floor((document.body.clientHeight - 124) * 1.3 / 18) * 2}
                  />
                </Route>
                <Route path="/zakazy">
                  <Zakazy />
                </Route>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }

}





export default connect(mapStateToProps)(App);
