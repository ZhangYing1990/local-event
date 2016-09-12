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
      <div style={tabBarItemStyle}>
        <i className={this.props.content.icon.class}>&#xe64c;</i>
      </div>
    );
  }
}