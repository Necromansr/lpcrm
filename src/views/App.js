import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Login from './screens/login';
import Setting from './screens/setting';
import {Header} from './components/Header';
import {NavBar} from './components/NavBar';
import Order from './screens/order';

import { connect } from "react-redux";

const mapStateToProps = state => {
  return { isLogin: state.isLogin};
};


function App({isLogin}) {

  return (

    <div>
    {isLogin && <Header count={10} />}
    <div style={{height: "100%", display: 'flex'}}>
    {isLogin && <NavBar />}
    <Router>
    <div style={{height: "100%", width: "100%", overflow: 'scroll'}}>
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
        <Route path="/about">
          <Setting />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>
  </div>
  </div>
  );
}




export default connect(mapStateToProps)(App);
