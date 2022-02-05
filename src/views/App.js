import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './screens/login';
import Setting from './screens/setting';
import  Header  from './components/Header';
import { NavBar } from './components/NavBar';
import Order from './screens/order';
// import Zakazy from './screens/order/zakazy';

import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { isLogin: state.isLogin, zoom: state.zoom };
};

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      data: []
    }




  }


  async componentDidMount() {
    let data = await fetch('http://evilgenius.fit:8081/');
    let jsonData = await data.json();
    this.setState({ data: jsonData.map(x => { return { ...x, select: false } }) })
  }



  render() {
    return (

      <div>
        <div id="tooltipBtn" className="speed"></div>
        <div id="tooltipBtn1" className="speed"></div>
        <Router>
          {this.props.isLogin && <Header count={10} />}
          <div style={{ height: "100%", display: 'flex' }}>
            {this.props.isLogin && <NavBar props={this.props} />}
            <div style={{ height: "100%", width: "100%", paddingTop: 5, paddingLeft: 20, paddingBottom: 50 }}>
              <Switch>
                <Route path="/setting">
                  <Setting />
                </Route>
                <Route path="/order">
                  {this.state.data.length > 0 && <Order
                    data={this.state.data}
                    rowHeight={18 + 18 * this.props.zoom < 18 ? 18 : 18 + 18 * this.props.zoom}
                    // visibleRows={120}
                    visibleRows={Math.floor(document.body.clientHeight * 1.5 / (18 + 18 * this.props.zoom))}
                  />}
                </Route>
                {/* <Route path="/zakazy">
                  <Zakazy />
                </Route> */}
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
