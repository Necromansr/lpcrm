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
import Trash from "./screens/order/trash";
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
      trash: [],
      modal: false,
      loading: true
    }

    this.updateData = this.updateData.bind(this);
    this.updateTrash = this.updateTrash.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.updateModal = this.updateModal.bind(this);
    this.updateLoading = this.updateLoading.bind(this);

  }


  async componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  updateLoading(flag) {
    this?.setState({ loading: flag })
  }

  updateData(list, type) {
    this.setState({ data: list })
  }
  updateTrash(list, type) {
    this.setState({ trash: list })
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
       {!this.state.loading && <div className="loading">
            <svg id="" className="header-logo__svg-logo" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                    <path className="logo-yellow" d="M500.2,32C303.3,32,134.9,153.6,65.8,325.7c61.7-112.7,181.4-189.1,318.9-189.1C585.4,136.6,748,299.3,748,500
    S585.4,863.4,384.7,863.4c-137.5,0-257.2-76.4-318.9-189.1C134.9,846.4,303.3,968,500.2,968c258.4,0,468-209.5,468-468
    S758.6,32,500.2,32z"/>
                    <path className="logo-red" d="M500.2,32C303.3,32,134.9,153.6,65.8,325.7c61.7-112.7,181.4-189.1,318.9-189.1C585.4,136.6,748,299.3,748,500
    S585.4,863.4,384.7,863.4c-137.5,0-257.2-76.4-318.9-189.1C134.9,846.4,303.3,968,500.2,968c258.4,0,468-209.5,468-468
    S758.6,32,500.2,32z"/>
                    <path className="logo-blue" d="M500.2,32C303.3,32,134.9,153.6,65.8,325.7c61.7-112.7,181.4-189.1,318.9-189.1C585.4,136.6,748,299.3,748,500
    S585.4,863.4,384.7,863.4c-137.5,0-257.2-76.4-318.9-189.1C134.9,846.4,303.3,968,500.2,968c258.4,0,468-209.5,468-468
    S758.6,32,500.2,32z"/></svg>
        </div> }
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
                    updateLoading={this.updateLoading}
                    updateData={this.updateData}
                  // visibleRows={Math.floor(document.body.clientHeight * 1.5 / (18 + 18 * this.props.zoom))}
                  />
                </Route>

                <Route path="/trash">
                  <Trash
                    data={this.state.trash}
                    rowHeight={18 + 18 * this.props.zoom < 18 ? 18 : 18 + 18 * this.props.zoom}
                    // visibleRows={120}
                    modal={this.state.modal}
                    setModal={this.updateModal}
                    updateLoading={this.updateLoading}
                    updateData={this.updateTrash}
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
