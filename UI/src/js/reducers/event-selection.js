/**
 * Created by ZhiyuanSun on 16/9/23.
 */
import {EVENT_SELECTION} from '../actions/home';

const initState = {
  isPending: true,
  items: [],
  err: null
};
export const eventSelectionReducer = (state=initState, action)=>{
  switch (action.type){
    case EVENT_SELECTION.REQUEST_EVENT_SELECTION_ITEMS:
      return Object.assign({}, state, {
        isPending: true
      });
    case EVENT_SELECTION.RECEIVE_EVENT_SELECTION_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        isPending: false,
        items: action.items
      });
    case EVENT_SELECTION.RECEIVE_EVENT_SELECTION_ITEMS_FAILURE:
      return Object.assign({}, state, {
        isPending: false,
        err: action.err
      });
    default:
      return state;
  }
};