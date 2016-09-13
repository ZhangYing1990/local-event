import {combineReducers} from 'redux';
import NavigatorReducer from './navigator';

const rootReducer = combineReducers({
  currentIndex: NavigatorReducer
});

export default rootReducer;