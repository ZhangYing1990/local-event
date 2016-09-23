/**
 * Created by ZhiyuanSun on 16/9/16.
 */
import {combineReducers} from 'redux';
import {NEARBY} from '../actions/home';

import {eventSelectionReducer} from './event-selection';

const initState = {
  isPending: true,
  getLocationSuccess: true,
  locationInfo: "",
  getNearbyEventSuccess: true,
  events: [],
  display: true
};

const locationReducer = (state = initState, action) => {
  switch (action.type){
    case NEARBY.REQUEST_LOCATION:
      return Object.assign({}, state, {
        isPending: true
      });
    case NEARBY.FINISH_REQUEST_LOCATION:
      return Object.assign({}, state, {
        isPending: false
      });
    case NEARBY.FETCH_LOCATION_SUCCESS:
      return Object.assign({}, state, {
        getLocationSuccess: true,
        locationInfo: action.locationInfo
      });
    case NEARBY.FETCH_LOCATION_FAILURE:
      return Object.assign({}, state, {
        getLocationSuccess: false,
        locationInfo: action.locationInfo
      });
    case NEARBY.FETCH_EVENT_SUCCESS:
      return Object.assign({}, state, {
        getNearbyEventSuccess: true,
        events: action.events
      });
    case NEARBY.FETCH_EVENT_FAILURE:
      return Object.assign({}, state, {
        getNearbyEventSuccess: false
      });
    case NEARBY.HIDE_NEARBY:
      return Object.assign({}, state, {
        display: false
      });
    default:
      return state;
  }
};

const homeReducer = combineReducers({
  nearby: locationReducer,
  eventSelection: eventSelectionReducer
});

export default homeReducer;