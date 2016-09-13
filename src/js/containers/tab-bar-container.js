/**
 * Created by zhiyuans on 9/13/2016.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TabBar from '../../components/tab-bar/tab-bar';
import {switchTab} from '../actions/navigator';

const mapStateToProps = (state, ownprops) => {
  return {
    currentTabId: state.currentTabId
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({switchTab}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);