/**
 * Created by ZhiyuanSun on 16/9/11.
 */
import React, {Component} from 'react';
import TabBarItem from './js/tab-bar-item';
import './styles/tab-bar.less';
import './styles/tab-bar-item.less';

export default class TabBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  render(){
    let nums = this.props.items.length;
    let items = this.props.items.map((item, index) => {
      return <TabBarItem key={item.id} itemNums={nums} content={item} isActive={this.state.currentIndex === index} ></TabBarItem>;
    });
    return (
      <div className="tab-bar-flex-container">
        {items}
      </div>
    );
  }
}