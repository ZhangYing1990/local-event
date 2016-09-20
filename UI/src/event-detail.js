/**
 * Created by ZhiyuanSun on 16/9/18.
 */
// application's entry

import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';
import {
  Provider
} from 'react-redux';
import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './js/reducers/event-detail';
import './styles/main.less';

const store = createStore(reducers, {}, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <div>Hello</div>
  </Provider>
), document.getElementById('root'));