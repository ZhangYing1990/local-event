/**
 * Created by zhiyuans on 9/13/2016.
 */
import {NAVIGATOR} from '../actions/navigator';

export default function navigatorReducer(state = 0, action) {
  switch (action.type){
    case NAVIGATOR.SWITCH_TAB:
      console.log(action.currentIndex);
      return action.currentIndex;
    default:
      return state;
  }
};