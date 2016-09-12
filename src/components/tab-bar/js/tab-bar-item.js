/**
 * Created by ZhiyuanSun on 16/9/11.
 */
import React, {Component} from 'react';

export default class TabBarItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let tabBarItemStyle = {
      width: 100/this.props.itemNums + '%'
    };
    
    return (
      <div style={tabBarItemStyle} className="tab-bar-flex-item">
        <i className={this.props.content.icon.class + (this.props.isActive ? " tab-bar-item-active" : "")}>&#xe64c;</i>
        <div className="tab-bar-item-name">{this.props.content.text}</div>
      </div>
    );
  }
}