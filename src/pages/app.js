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
        }
      },
      {
        id: 1,
        icon: {
          class: 'iconfont',
          code: '&#xe6ec;'
        }
      },
      {
        id: 2,
        icon: {
          class: 'iconfont',
          code: '&#xe678;'
        }
      }
    ];

    return (
      <div id="app">
        <div className="header">
          <Link to="home">page1</Link>
          <Link to="content">page2</Link>
          <Link to="page3">page3</Link>
        </div>
        {this.props.children}
        <TabBar items={tabBarItems}></TabBar>
      </div>
    );
  }
};