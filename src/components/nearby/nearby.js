/**
 * Created by ZhiyuanSun on 16/9/16.
 */
import React, {Component} from 'react';
import NearbySuccess from './js/nearby-success';
import './styles/nearby.less';

export default class Nearby extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const {getLocation} = this.props;
    if(getLocation){
      getLocation.bind(this)();
    }
  }

  render(){
    const {getLocationSuccess} = this.props;
    
    return (
      <div>
        {
          getLocationSuccess ?
            <NearbySuccess {...this.props}></NearbySuccess> :
            ""
        }
      </div>
    );
  }
}