/**
 * Created by ZhiyuanSun on 16/9/16.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Nearby from '../../components/nearby/nearby';

import {switchTab} from '../actions/navigator';

const mapStateToProps = (state) => {
  return {
    getLocationSuccess: state.getLocationSuccess,
    locationInfo: state.locationInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({switchTab}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Nearby);
