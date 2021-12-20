// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';


// import App from './views/App';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from "react-redux";
// import {store, persistor} from "./store/store";
// // import persistor from "./store/store";
// import { PersistGate } from 'redux-persist/integration/react'

// ReactDOM.render(
//   <Provider store={store}>
//      <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './views/App';
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
// import persistor from "./store/store";
import { PersistGate } from 'redux-persist/integration/react'


// ReactDOM.createRoot(document.getElementById('root')).render( <Provider store={store}>
//   <PersistGate loading={null} persistor={persistor}>
//    <App />
//  </PersistGate>
// </Provider>);
// ReactDOM.render(


// );

const container = document.getElementById('root');


ReactDOM.render(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>, container);

// ReactDOM.render(<Provider store={store}>
//   <PersistGate loading={null} persistor={persistor}>
//     <App />
//   </PersistGate>
// </Provider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
