// application's entry

import  React, {
  Component
} from 'react';

import {
  Link
} from 'react-router';

import TabBar from '../components/tab-bar/tab-bar';

import './app.less';


class Test extends Component{
  render(){
    let iconCode = '&#xe64c';

    return (
      <div>
        <i className="iconfont">&#xe64c;</i>
        <i className="iconfont">{iconCode}</i>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    let tabBarItems = [
      {
        id: 0,
        icon: {
          class: 'iconfont',
          code: "&#xe64c;"
        },
        text: "主页"
      },
      {
        id: 1,
        icon: {
          class: 'iconfont',
          code: '&#xe6ec;'
        },
        text: "内容"
      },
      {
        id: 2,
        icon: {
          class: 'iconfont',
          code: '&#xe678;'
        },
        text: "个人"
      }
    ];

    return (
      <div id="app">
        <div className="top-fixed">
          {this.props.children}
        </div>
        <footer className="bottom-fixed">
          <TabBar items={tabBarItems}></TabBar>
        </footer>
      </div>
    );
  }
};