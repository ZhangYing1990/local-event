/**
 * Created by ZhiyuanSun on 16/9/11.
 */
import React, {Component} from 'react';

export default class TabBarItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <i className={this.props.content.icon.class}>{this.props.content.icon.code}</i>
      </div>
    );
  }
}