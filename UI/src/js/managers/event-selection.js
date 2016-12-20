/**
 * Created by ZhiyuanSun on 16/9/23.
 */
import axios from 'axios';

export default class EventSelectionManager{
  constructor(){
    this.baseUrl = "http://192.168.2.103:4321/v1/event-selection"
  }

  getEventSelectionItems(start, count){
    let queryString = `?start=${start}&count=${count}`;
    let url = this.baseUrl.concat(queryString);
    return axios.get(url)
      .then((res) => {
        return res.data.map((item)=>{
          return {
            img: item.img,
            description: item.description,
            url: `/event-detail.html?id=${item.id}`
          }
        });
      });
  }

}