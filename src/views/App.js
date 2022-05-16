import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './screens/login';
import Setting from './screens/setting';
import { Image } from './screens/order/image';
import Header from './components/Header';
import { NavBar } from './components/NavBar';
import Order from './screens/order';
// import Zakazy from './screens/order/zakazy';
import Modal from "./components/Modal";
import { top, countChange, refresh, changeIDList } from "../store/actions/index";

import React, { Component } from 'react';
import { connect } from "react-redux";
const mapDispatchToProps = dispatch => {
  return {
    changeTop: tops => dispatch(top(tops)),
    changeCount: counts => dispatch(countChange(counts)),
    changeRefresh: refreshs => dispatch(refresh(refreshs)),
    changeIDList: list => dispatch(changeIDList(list)),
  };
}


const mapStateToProps = state => {
  return { isLogin: state.isLogin, zoom: state.zoom, list: state.idList };
};

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      data: [],
      modal: false
    }

    this.updateData = this.updateData.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.updateModal = this.updateModal.bind(this);

  }


  async componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }



  updateData(list, type) {
    this.setState({ data: list })
  }

  updateModal(modal) {
    this.setState({ modal: modal })
  }


  onKeyDown = (e) => {
    if (!this.state.modal) {
      let isCtrl = e.ctrlKey || e.metaKey,
        keyA = e.which == 65;

      if (isCtrl && keyA) {
        let temp = this.state.data.map((x, index) => {
          if (index !== 25) {
            return { ...x, select: true }
          } else {
            return { ...x }
          }
        })

        this.updateData(temp);
        this.props.changeCount(temp.filter(x => x['select'] === true).length)
        e.preventDefault()

      }
    }
  }


  render() {
    return (
      <div>
        <div id="tooltipBtn" className="speed"></div>
        <div id="tooltipBtn1" className="speed"></div>
        <Router>
          {this.props.isLogin && <Header count={10} setModal={this.updateModal} />}
          <div style={{ height: "100%", display: 'flex' }}>
            {this.props.isLogin && <NavBar props={this.props} />}
            <div style={{ height: "100%", width: "91%", paddingTop: 5, paddingLeft: 20, paddingBottom: 50 }}>
              <Switch>
                <Route path="/setting">
                  <Setting />
                </Route>
                <Route path="/image">
                  <Image />
                </Route>
                <Route path="/order">
                  <Order
                    data={this.state.data}
                    rowHeight={18 + 18 * this.props.zoom < 18 ? 18 : 18 + 18 * this.props.zoom}
                    // visibleRows={120}
                    modal={this.state.modal}
                    setModal={this.updateModal}

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





export default connect(mapStateToProps, mapDispatchToProps)(App);
