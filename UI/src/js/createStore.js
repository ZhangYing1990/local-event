/**
 * Created by ZhiyuanSun on 16/9/19.
 */
import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;