/**
 * Created by ZhiyuanSun on 16/9/23.
 */
import axios from 'axios';

export default class EventSelectionManager{
  constructor(){
    this.baseUrl = "http://localhost:4321/v1/event-selection-items"
  }

  getEventSelectionItems(start, count){
    let queryString = `?start=${start}&count=${count}`;
    let url = this.baseUrl.concat(queryString);
    return axios.get(url)
      .then((res) => {
        return res.data;
      });
  }

}