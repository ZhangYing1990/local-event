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
}

module.exports = EventManager;