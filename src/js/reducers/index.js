import {combineReducers} from 'redux';
import NavigatorReducer from './navigator';

const rootReducer = combineReducers({
  currentTab: NavigatorReducer
});

export default rootReducer;