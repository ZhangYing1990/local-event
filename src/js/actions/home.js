/**
 * Created by ZhiyuanSun on 16/9/16.
 */
import {axios} from 'axios';

// Define action type string
export const NEARBY = {
  REQUEST_LOCATION: 'REQUEST_LOCATION',
  FETCH_LOCATION_SUCCESS: 'FETCH_LOCATION_SUCCESS',
  FETCH_LOCATION_FAILURE: 'FETCH_LOCATION_FAILURE'
};


const requestLocation = () =>{
  "use strict";
  return {
    type: NEARBY.REQUEST_LOCATION
  }
};

const receiveLocationSuccess = () =>{
  "use strict";
  return {
    type: NEARBY.FETCH_LOCATION_SUCCESS
  }
};

const receiveLocationFailure = () =>{
  "use strict";
  return {
    type: NEARBY.FETCH_LOCATION_FAILURE
  }
};

// Define actions
export function getLocation() {
  return (dispatch) => {
    "use strict";
    dispatch(requestLocation());

    // Call getCurrentLocation API of browser
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position) =>{

        },
        (err) =>{

        }
      );
    }
    else {

    }
  }
}