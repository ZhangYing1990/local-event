/**
 * Created by ZhiyuanSun on 16/9/16.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Nearby from '../../components/nearby/nearby';

import {getLocation} from '../actions/home';

const mapStateToProps = (state) => {
  return {
    getLocationSuccess: state.home.nearby.getLocationSuccess,
    locationInfo: state.home.nearby.locationInfo,
    isPending: state.home.nearby.isPending,
    getNearbyEventSuccess: state.home.nearby.getNearbyEventSuccess,
    events: state.home.nearby.events
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getLocation}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Nearby);
