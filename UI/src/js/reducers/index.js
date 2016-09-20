import {combineReducers} from 'redux';
import NavigatorReducer from './navigator';
import HomeReducer from './home';

const rootReducer = combineReducers({
  currentTabId: NavigatorReducer,
  home: HomeReducer
});

export default rootReducer;