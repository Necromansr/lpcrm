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

class App extends Component {

  constructor(props){
    super(props);


    this.state = {
      start: 1,
      end: Math.floor((document.body.clientHeight - 120) / 18),
      data: []
    }


  this.changeStart = this.changeStart.bind(this);
  this.changeEnd = this.changeEnd.bind(this);

  }


  async componentDidMount(){
    let data = await fetch('http://evilgenius.fit:8081/');
    let jsonData = await data.json();
    this.setState({data: jsonData.map(x=> {return {...x, select: false}})})
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
        <div id="hoverSelect" style={{display: 'none', left: 410, top: 197}}>Выделено <span class="count-hover">1</span></div>
        <div id="tooltipBtn" className="speed"></div>
        <Router>
          {this.props.isLogin && <Header start={this.state.start}  end={this.state.end} count={10} />}
          <div style={{ height: "100%", display: 'flex' }}>
            {this.props.isLogin && <NavBar props={this.props} />}
            <div style={{ height: "100%", width: "100%", paddingTop: 5, paddingLeft: 20, paddingBottom: 50 }}>
              <Switch>
                <Route path="/setting">
                  <Setting />
                </Route>
                <Route path="/order">
                  { this.state.data.length > 0 && <Order
                    changeStart={this.changeStart}
                    changeEnd={this.changeEnd}
                    data={this.state.data}
                    rowHeight={18}
                    // visibleRows={120}
                    visibleRows={Math.floor(document.body.clientHeight * 1.5 / 18)}
                  /> }
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
