/**
 * Created by ZhiyuanSun on 16/9/21.
 */
const eventContext = require('../data-access/event');

class EventManager{
  constructor(){
    this.eventContext = eventContext;
  }

  createEvent(event){
    return this.eventContext.create(event);
  }

  createEvents(events){
    return this.eventContext.create(events);
  }

  getEventSelection(start,count){
    return new Promise((resolve, reject)=>{
      this.eventContext.find({isSelection: true})
        .sort('_id').skip(start).limit(count).select('_id bigPost abstract')
        .exec((err, items)=>{
          if(err){
            reject(err);
          }
          else {
            const results = items.map((item)=>{
              return {
                img: item.bigPost,
                description: item.abstract,
                id: item._id
              }
            });
            resolve(results);
          }
        });
    });
  }

  getEventDetailUrl(){

  }
}

module.exports = EventManager;