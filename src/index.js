import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store/index";
import './stylesheets/styles.scss';
import SearchPhone from './containers/SearchPhone/SearchPhone.js'

const Index = () => {
  return <SearchPhone></SearchPhone>
};

ReactDOM.render(
  <Provider store={store}>
    <Index/>
  </Provider>,
  document.getElementById(
    "index"
  )
);
export default Index;
