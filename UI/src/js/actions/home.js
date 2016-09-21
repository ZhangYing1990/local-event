/**
 * Created by ZhiyuanSun on 16/9/16.
 */
import {axios} from 'axios';

// Define action type string
export const NEARBY = {
  REQUEST_LOCATION: 'REQUEST_LOCATION',
  FINISH_REQUEST_LOCATION: 'FINISH_REQUEST_LOCATION',
  FETCH_LOCATION_SUCCESS: 'FETCH_LOCATION_SUCCESS',
  FETCH_LOCATION_FAILURE: 'FETCH_LOCATION_FAILURE',
  FETCH_EVENT_SUCCESS: 'FETCH_EVENT_SUCCESS',
  FETCH_EVENT_FAILURE: 'FETCH_EVENT_FAILURE',
  HIDE_NEARBY: 'HIDE_NEARBY'
};

const DISPLAY_MESSAGES = {
  GET_LOCATION_FAILURE: "获取位置失败"
};


const requestLocation = () =>{
  "use strict";
  return {
    type: NEARBY.REQUEST_LOCATION
  }
};

const finishRequestLocation = () =>{
  "use strict";
  return{
    type: NEARBY.FINISH_REQUEST_LOCATION
  }
};

const receiveLocationSuccess = (locationInfo) =>{
  "use strict";
  return {
    type: NEARBY.FETCH_LOCATION_SUCCESS,
    locationInfo: locationInfo
  }
};

const receiveLocationFailure = (locationInfo) =>{
  "use strict";
  return {
    type: NEARBY.FETCH_LOCATION_FAILURE,
    locationInfo
  }
};

const receiveEventSuccess = (events) =>{
  "use strict";
  return {
    type: NEARBY.FETCH_EVENT_SUCCESS,
    events: events
  }
};

const receiveEventFailure = () =>{
  "use strict";
  return {
    type: NEARBY.FETCH_EVENT_SUCCESS
  }
};

export const hideNearby = () =>{
  "use strict";
  return {
    type: NEARBY.HIDE_NEARBY
  }
};




const getLocationCoord = (dispatch) =>{
  "use strict";
  let geolocation = new BMap.Geolocation();
  return new Promise((resolve, reject) =>{
    geolocation.getCurrentPosition(
      (r) => {
        if(geolocation.getStatus() === BMAP_STATUS_SUCCESS){
          resolve(r.point);
        }
        else{
          dispatch(receiveLocationFailure(DISPLAY_MESSAGES.GET_LOCATION_FAILURE));
          reject(DISPLAY_MESSAGES.GET_LOCATION_FAILURE);
        }
      }
    )
  });
};

const getLocationName = (point, dispatch) => {
  "use strict";
  let gc = new BMap.Geocoder();
  return new Promise((resolve, reject) =>{
    gc.getLocation(point, (rs) =>{
      if(rs.address === "")
      {
        dispatch(receiveLocationFailure(DISPLAY_MESSAGES.GET_LOCATION_FAILURE));
        reject(DISPLAY_MESSAGES.GET_LOCATION_FAILURE);
      }
      else{
        console.log(rs.addressComponents);
        let locationName = rs.addressComponents.street + rs.addressComponents.streetNumber;
        dispatch(receiveLocationSuccess(locationName));
        resolve(locationName);
      }
    });
  });
};

const getNearyEvents = (point, dispatch) => {
  "use strict";
  return new Promise((resolve, reject) => {
    // Simulate call API
    setTimeout(() => {
      if(Math.round(Math.random() * 10)%2 ===0){
        let events = [
          {
            title: "演唱会",
            description: "Zhiyuan的演出会",
            url: "event-detail.html"
          },
          {
            title: "戏曲",
            description: "Junmei的戏曲",
            url: "event-detail.html"
          },
          {
            title: "电影",
            description: "Wanzhou的电影",
            url: "event-detail.html"
          }
        ];
        dispatch(receiveEventSuccess(events));
        resolve(events);
      }
      else{
        let disc = "获取活动失败";
        dispatch(receiveEventFailure());
        reject(disc);
      }
    }, 1000);
  });
};


// Define actions
export function getLocation() {
  return (dispatch) => {
    "use strict";
    dispatch(requestLocation());

    // Call getCurrentLocation API of Baidu Map
    getLocationCoord(dispatch)
      .then((point) => {
        return Promise.all([getLocationName(point, dispatch), getNearyEvents(point, dispatch)])
      })
      .then(()=>{
        dispatch(finishRequestLocation());
      })
      .catch((err) => {
        dispatch(finishRequestLocation());
      });

  }
}