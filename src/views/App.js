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
import Order1 from './screens/order/index2';
// import Zakazy from './screens/order/zakazy';
import Modal from "./components/Modal";

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

    this.updateData = this.updateData.bind(this);

  }

  
  async componentDidMount() {
    // let data = await fetch('http://vanl0073259.online-vm.com:3004?start=1&end=' + (Math.floor(document.body.clientHeight * 1.5 / (18 + 18 * this.props.zoom))) * 2);
    // let jsonData = await data.json();
    // const rawResponse = await fetch('http://vanl0073259.online-vm.com:3004/search', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     "query": '',
    //     "start": 0,
    //     "end": (Math.floor(document.body.clientHeight * 1.5 / (18 + 18))) * 6
    //   })
    // }).catch(e => console.log(e));
    // const content = await rawResponse.json();
    // console.log(content.length);
    // this.setState({ data: content.map(x => { return { ...x, select: false } }) })
  }
  

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState.data);
  //   return JSON.stringify(this.state.data) !== JSON.stringify(nextState.data)
  // }

  updateData(list, type) {
    // console.log(list, type);
    this.setState({ data: list })
  }


  render() {
    return (

      <div>
        <div id="tooltipBtn" className="speed"></div>
        <div id="tooltipBtn1" className="speed"></div>

        <Router>
          {/* {this.props.isLogin && <Header count={10} />} */}
          <div style={{ height: "100%", display: 'flex' }}>
            {/* {this.props.isLogin && <NavBar props={this.props} />} */}
            <div style={{ height: "100%", width: "91%", paddingTop: 5, paddingLeft: 20, paddingBottom: 50 }}>
              <Switch>
                <Route path="/setting">
                  <Setting />
                </Route>
                <Route path="/order">
                  <Order
                    data={this.state.data}
                    rowHeight={18 + 18 * this.props.zoom < 18 ? 18 : 18 + 18 * this.props.zoom}
                    // visibleRows={120}
                    updateData={this.updateData}
                    // visibleRows={Math.floor(document.body.clientHeight * 1.5 / (18 + 18 * this.props.zoom))}
                  />
                </Route>

                <Route path="/order1">
                  <Order1
                    data={this.state.data}
                    rowHeight={18 + 18 * this.props.zoom < 18 ? 18 : 18 + 18 * this.props.zoom}
                    // visibleRows={120}
                    updateData={this.updateData}
                  // visibleRows={Math.floor(document.body.clientHeight * 1.5 / (18 + 18 * this.props.zoom))}
                  />
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
