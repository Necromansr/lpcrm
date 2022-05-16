import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from 'redux-persist/integration/react'
const container = document.getElementById('root');


ReactDOM.render(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>, container);

