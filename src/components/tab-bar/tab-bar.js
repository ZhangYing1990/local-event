/**
 * Created by ZhiyuanSun on 16/9/11.
 */
import React, {Component} from 'react';
import './styles/tab-bar.less';

export default class TabBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  render(){
    return (
      <div className="tab-bar-flex-container">
        <div className="tab-bar-flex-item">
          {
            this.state.currentIndex === 0 ? (
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
        </div>
        <div className="tab-bar-flex-item">
          {
            this.state.currentIndex === 0 ? (
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
        </div>
        <div className="tab-bar-flex-item">
          {
            this.state.currentIndex === 0 ? (
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
        </div>
      </div>
    );
  }
}