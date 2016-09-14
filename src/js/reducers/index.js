import {combineReducers} from 'redux';
import NavigatorReducer from './navigator';

const rootReducer = combineReducers({
  currentTabId: NavigatorReducer
});

export default rootReducer;