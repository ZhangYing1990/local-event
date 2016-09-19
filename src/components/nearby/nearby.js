/**
 * Created by ZhiyuanSun on 16/9/16.
 */
import React, {Component} from 'react';
import NearbySuccess from './js/nearby-success';
import './styles/nearby.less';

export default class Nearby extends Component{
  constructor(props){
    super(props);

    this.nearbyFailureNode = (
      <div className="no-event">
        获取附近活动失败
      </div>
    );
  }

  componentWillMount(){
    const {getLocation} = this.props;
    if(getLocation){
      getLocation.bind(this)();
    }
  }

  getFinishLoadingNode(getLocationSuccess){
    if(getLocationSuccess){
      return <NearbySuccess {...this.props}></NearbySuccess>;
    }
    else {
      const {hideNearby} = this.props;
      setTimeout(()=>{
        hideNearby();
      }, 3000);
      return this.nearbyFailureNode;
    }
  }

  render(){
    let {getLocationSuccess, isPending, display} = this.props;
    let finishLoadingNode = this.getFinishLoadingNode(getLocationSuccess);

    let loadingNode = (
      <div className="no-event">
        Loading
      </div>
    );
    return (
      <div>
        {
          display ? (isPending ? loadingNode : finishLoadingNode) : null
        }
      </div>
    );
  }
}