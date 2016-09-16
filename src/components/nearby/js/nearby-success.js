/**
 * Created by ZhiyuanSun on 16/9/16.
 */
import {Component} from 'react';

export default class NearbySuccess extends Component{
  render(){
    return (
      <div>
        <div className="nearby-location">
          <img className="nearby-title" src={require('../img/nearby-title.jpg')}/>
          <div className="nearby-location-name">
            <i className="iconfont">&#xe608;</i>
            {this.props.locationInfo}
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}