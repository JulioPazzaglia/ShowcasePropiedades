import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route path="/" component={App} />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
)