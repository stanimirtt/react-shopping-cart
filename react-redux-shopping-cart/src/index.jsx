/* eslint-disable import/default */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'toastr/build/toastr.min.css';
import { configureStore } from './store/configureStore';
import { loadItems } from './actions/shoppingCartActions';
import ShoppingCartContainer from './components/ShoppingCartContainer';
import './style.css'; // Webpack can import CSS files too!

const store = configureStore();

store.dispatch(loadItems());

ReactDOM.render(
  <Provider store={store}>
    <ShoppingCartContainer />
  </Provider>,
  document.getElementById('app')
);
