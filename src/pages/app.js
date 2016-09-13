// application's entry

import  React, {
  Component
} from 'react';

import {
  Link
} from 'react-router';

import TabBarContainer from '../js/containers/tab-bar-container';

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
    return (
      <div id="app">
        <div className="top-fixed">
          {this.props.children}
        </div>
        <footer className="bottom-fixed">
          <TabBarContainer></TabBarContainer>
        </footer>
      </div>
    );
  }
};