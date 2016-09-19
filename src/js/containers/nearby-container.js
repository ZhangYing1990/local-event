/**
 * Created by ZhiyuanSun on 16/9/16.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Nearby from '../../components/nearby/nearby';

import {getLocation, hideNearby} from '../actions/home';

const mapStateToProps = (state) => {
  return {
    getLocationSuccess: state.home.nearby.getLocationSuccess,
    locationInfo: state.home.nearby.locationInfo,
    isPending: state.home.nearby.isPending,
    getNearbyEventSuccess: state.home.nearby.getNearbyEventSuccess,
    events: state.home.nearby.events,
    display: state.home.nearby.display
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getLocation, hideNearby}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Nearby);
