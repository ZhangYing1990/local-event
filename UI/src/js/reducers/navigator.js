/**
 * Created by zhiyuans on 9/13/2016.
 */
import {NAVIGATOR} from '../actions/navigator';
import {TabBarHelper} from '../helpers/tab-bar-helper';

const getInitTabId = () => {
  "use strict";
  return TabBarHelper.getTabIdByUrlPath(window.location.pathname);
};

export default function navigatorReducer(state = getInitTabId(), action) {
  switch (action.type){
    case NAVIGATOR.SWITCH_TAB:
      return action.currentTabId;
    default:
      return state;
  }
};