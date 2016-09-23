/**
 * Created by ZhiyuanSun on 16/9/21.
 */
const fs = require('fs');
const EventManager = require('../../management/event-manager');
const EVENT_TYPE = require('../../constants/event-type');
const Address = require('../../model/address');
const axios = require('axios');
let eventManager = new EventManager();



const fetchEvent = (url) => {
  return axios.get('http://api.wenkor.com/wenkor/servapi/content?id=10&page=1');
};

const getTypes = (tags)=>{
  let tagArr = tags.split(',');
  let types = [];

  let tagTypeMap = new Map([
    ["音乐", EVENT_TYPE.YAN_CHANG_HUI],
    ["戏剧", EVENT_TYPE.XI_QU],
    ["话剧", EVENT_TYPE.HUA_JU],
    ["大咖秀", EVENT_TYPE.HUO_DONG],
    ["流行", EVENT_TYPE.YAN_CHANG_HUI],
    ["民谣", EVENT_TYPE.YAN_CHANG_HUI],
    ["怀旧", EVENT_TYPE.YAN_CHANG_HUI],
    ["动作", EVENT_TYPE.DIAN_YING],
    ["科幻", EVENT_TYPE.DIAN_YING],
    ["冒险", EVENT_TYPE.DIAN_YING],
    ["爱情", EVENT_TYPE.DIAN_YING],
    ["喜剧", EVENT_TYPE.DIAN_YING],
    ["剧情", EVENT_TYPE.DIAN_YING],
    ["犯罪", EVENT_TYPE.DIAN_YING],
    ["", EVENT_TYPE.HUO_DONG],


  ]);
  for(let tag of tagArr){

  }
};

const convertEvents = (events) =>{
  let newEvents = [];
  for(let event of events){
    newEvents.push({
      title: event.name,
      abstract: event.desc,
      time: new Date(event.showinfo),
      types: event.tag,
      bigPost: "",
      smallPost: event.img,
      price: {
        beforeDiscount: [event.price, event.price2],
        afterDiscount: []
      },
      address: new Address(80,50,"江苏省", "南京市", "江宁区", "天元西路", 2),
      phone: "18795865835",
      detail: "",
      comments: null,
      isSelection: Math.round(Math.random() * 10) % 2 === 0
    });
  }
  return newEvents;
};

// ('YAN_CHANG_HUI', 'HUA_JU', 'ZHAN_LAN', 'HUO_DONG', 'DIAN_YING', 'YIN_YUE_HUI', 'WU_DAO', 'XI_QU')


const fetchYanchanghui= ()=>{
  return Promise.all([
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=0201&page=1'),
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=0201&page=2')
  ]).then((res)=>{
    "use strict";
    let result = [];
    for(let r of res){
      for(let e of r.data.data){
        e.tag = [EVENT_TYPE.YAN_CHANG_HUI];
      }
      result = result.concat(r.data.data)
    }
    return result;
  })
};


const fetchYinyuehui = ()=>{
  return Promise.all([
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=05&page=1')
  ]).then((res)=>{
    "use strict";
    let result = [];
    for(let r of res){
      for(let e of r.data.data){
        e.tag = [EVENT_TYPE.YIN_YUE_HUI];
      }
      result = result.concat(r.data.data)
    }
    return result;
  })
};

const fetchHuaju = ()=>{
  return Promise.all([
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=0401&page=1'),
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=0401&page=2')
  ]).then((res)=>{
    "use strict";
    let result = [];
    for(let r of res){
      for(let e of r.data.data){
        e.tag = [EVENT_TYPE.HUA_JU];
      }
      result = result.concat(r.data.data)
    }
    return result;
  })
};

const fetchDianying = ()=>{
  return Promise.all([
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=01&page=1'),
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=01&page=2'),
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=01&page=3'),
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=01&page=4')
  ]).then((res)=>{
    "use strict";
    let result = [];
    for(let r of res){
      for(let e of r.data.data){
        e.tag = [EVENT_TYPE.DIAN_YING];
      }
      result = result.concat(r.data.data)
    }
    return result;
  })
};

const fetchZhanlan = ()=>{
  return Promise.all([
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=07&page=1'),
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=07&page=2')
  ]).then((res)=>{
    "use strict";
    let result = [];
    for(let r of res){
      for(let e of r.data.data){
        e.tag = [EVENT_TYPE.ZHAN_LAN];
      }
      result = result.concat(r.data.data)
    }
    return result;
  })
};

const fetchHuodong = ()=>{
  return Promise.all([
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=08&page=1'),
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=08&page=2'),
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=08&page=3'),
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=10&page=1')
  ]).then((res)=>{
    "use strict";
    let result = [];
    for(let r of res){
      for(let e of r.data.data){
        e.tag = [EVENT_TYPE.HUO_DONG];
      }
      result = result.concat(r.data.data)
    }
    return result;
  })
};

const fetchXiqu = ()=>{
  return Promise.all([
    fetchEvent('http://api.wenkor.com/wenkor/servapi/content?id=06&page=1')
  ]).then((res)=>{
    "use strict";
    let result = [];
    for(let r of res){
      for(let e of r.data.data){
        e.tag = [EVENT_TYPE.XI_QU];
      }
      result = result.concat(r.data.data)
    }
    return result;
  })
};

const fetchBigPost = (eventId, type) => {
  let url = `http://api.wenkor.com/wenkor/servapi/photolist?id=${eventId}&type=${type}`;
  return axios.get(url).then((result)=>{
    return result.data.data.head;
  })
};

const fetchLocation = (eventId, type) => {
  let url = `http://api.wenkor.com/wenkor/servapi/content_info?id=${eventId}&type=${type}`;

  return axios.get(url).then((result)=>{
    let data = result.data.data;
    return {
      lat: data.lat,
      lng: data.lon
    };
  })
};


// fetchLocation("071b3f467f2f4d8f848be879476efc76",1).then((res)=>{
//   "use strict";
//   console.log(res);
// });

let globalEvents = null;
let globalNewEvents = null;

Promise.all([
  fetchYanchanghui(),
  fetchYinyuehui(),
  fetchHuaju(),
  fetchDianying(),
  fetchZhanlan(),
  fetchHuodong(),
  fetchXiqu()
]).then((res)=>{
  let result = [];
  for(let r of res){
    result = result.concat(r)
  }
  return result;
}).then((events)=>{
  globalEvents = events;

  globalNewEvents = convertEvents(globalEvents);
  let promiseArray = [];
  for(let event of globalEvents){
    promiseArray.push(fetchBigPost(event.id, event.type));
  }
  return Promise.all(promiseArray);
}).then((res)=>{
  "use strict";
  for(let i = 0;i<res.length;i++){
    globalNewEvents[i].bigPost = res[i];
  }
  return globalNewEvents;
}).then((newEvents)=>{
  let promiseArray = [];
  for(let event of globalEvents){
    promiseArray.push(fetchLocation(event.id, event.type));
  }
  return Promise.all(promiseArray);
}).then((res)=>{
  "use strict";
  for(let i = 0;i<res.length;i++){
    globalNewEvents[i].address.lat = res[i].lat;
    globalNewEvents[i].address.lng = res[i].lng;
  }
  return globalNewEvents;
}).then((newEvents)=>{
  return eventManager.createEvents(newEvents);
}).then((...doc) =>{
  console.log('import data successfully');
}).catch((err)=>{
  console.log(err)
});










