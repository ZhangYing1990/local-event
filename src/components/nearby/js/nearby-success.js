/**
 * Created by ZhiyuanSun on 16/9/16.
 */
import React, {Component} from 'react';
import Carousel from '../../carousel/carousel';

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

    let item = this.props.events[0];

    if(this.props.getNearbyEventSuccess){
      return this.props.events.length > 0 ?
        (
          <div className="nearby-event">
            <Carousel items={this.props.events} arrows={false} verticalDir={true} textCarousel={true} animationDuration={1}></Carousel>

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

