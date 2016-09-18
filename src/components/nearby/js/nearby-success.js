/**
 * Created by ZhiyuanSun on 16/9/16.
 */
import React, {Component} from 'react';

export default class NearbySuccess extends Component{

  static defaultProps = {
    events: []
  };

  createNearbyEventNode(){
    let noNearbyEventNode = (
      <div className="nearby-event">
        附近没有活动
      </div>
    );

    if(this.props.getNearbyEventSuccess){
      return this.props.events.length > 0 ?
        (
          <div className="nearby-event">
            <div className="nearby-event-content">
              <p className="title">{this.props.events[0].title}</p>
              <span className="description">{this.props.events[0].description}</span>
            </div>
            <div className="nearby-event-arrow">
              <i className="iconfont">&#xe609;</i>
            </div>
          </div>
        ) :
        noNearbyEventNode;
    }
    else{
      return noNearbyEventNode;
    }
  }

  render(){
    return (
      <div className="nearby-container">
        <div className="nearby-location">
          <img className="nearby-title" src={require('../img/nearby-title.jpg')}/>
          <div className="nearby-location-name">
            <i className="iconfont">&#xe608;</i>
            {this.props.locationInfo}
          </div>
        </div>
        {this.createNearbyEventNode()}
      </div>
    );
  }
}