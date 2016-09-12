/**
 * Created by ZhiyuanSun on 16/9/11.
 */
import React, {Component} from 'react';
import TabBarItem from './js/tab-bar-item';

export default class TabBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  render(){
    let items = this.props.items.map((item, index) => {
      return <TabBarItem content={item} isActive={this.state.currentIndex === index} ></TabBarItem>;
    });
    return (
      <div>
        {items}
      </div>
    );
  }
}