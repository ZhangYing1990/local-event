/**
 * Created by ZhiyuanSun on 16/9/11.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import './styles/tab-bar.less';
import {TabBarHelper} from '../../js/helpers/tab-bar-helper';

export default class TabBar extends Component{
  constructor(props){
    super(props);

  }

  componentWillMount(){
  }



  render(){
    const {currentTabId, switchTab} = this.props;

    return (
      <div className="tab-bar-flex-container">
        <Link to={TabBarHelper.URL_PATH.HOME} className="tab-bar-flex-item" onClick={switchTab.bind(this, TabBarHelper.TAB_BAR_ID.HOME)}>
          {
            currentTabId === TabBarHelper.TAB_BAR_ID.HOME ? (
            <div>
              <i className="iconfont tab-bar-item-active">&#xe607;</i>
              <div className="tab-bar-item-name tab-bar-item-active">主页</div>
            </div>
            ) : (
            <div>
              <i className="iconfont tab-bar-item-inactive">&#xe606;</i>
              <div className="tab-bar-item-name tab-bar-item-inactive">主页</div>
            </div>)
          }
        </Link>
        <Link to={TabBarHelper.URL_PATH.CONTENT} className="tab-bar-flex-item" onClick={switchTab.bind(this, TabBarHelper.TAB_BAR_ID.CONTENT)}>
          {
            currentTabId === TabBarHelper.TAB_BAR_ID.CONTENT ? (
              <div>
                <i className="iconfont tab-bar-item-active">&#xe602;</i>
                <div className="tab-bar-item-name tab-bar-item-active">内容</div>
              </div>
            ) : (
              <div>
                <i className="iconfont tab-bar-item-inactive">&#xe603;</i>
                <div className="tab-bar-item-name tab-bar-item-inactive">内容</div>
              </div>)
          }
        </Link>
        <Link to={TabBarHelper.URL_PATH.MINE} className="tab-bar-flex-item" onClick={switchTab.bind(this, TabBarHelper.TAB_BAR_ID.HOME)}>
          {
            currentTabId === TabBarHelper.TAB_BAR_ID.MINE ? (
              <div>
                <i className="iconfont tab-bar-item-active">&#xe605;</i>
                <div className="tab-bar-item-name tab-bar-item-active">个人</div>
              </div>
            ) : (
              <div>
                <i className="iconfont tab-bar-item-inactive">&#xe604;</i>
                <div className="tab-bar-item-name tab-bar-item-inactive">个人</div>
              </div>)
          }
        </Link>
      </div>
    );
  }
}