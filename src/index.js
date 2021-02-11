//Importing External Modules***************************************
import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter';
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import './styles/index.css';
import "./firebase/firebase";

const store = configureStore();

const jsx = (
  <Provider store = {store}>
  <AppRouter />
  </Provider>
);

ReactDOM.render( <p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render( jsx, document.getElementById('app'));
});


