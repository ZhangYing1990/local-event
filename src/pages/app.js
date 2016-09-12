// application's entry

// import  React, {
//   Component
// } from 'react';
//
// import {
//   Link
// } from 'react-router';
//
// // import TabBar from '../components/tab-bar/tab-bar';
//
// // import 'app.less';
//
// export default class App extends Component {
//   render() {
//     // let tabBarItems = [
//     //   {
//     //     icon: {
//     //       class: 'iconfont',
//     //       code: '&#xe64c'
//     //     }
//     //   },
//     //   {
//     //     icon: {
//     //       class: 'iconfont',
//     //       code: '&#xe6ec'
//     //     }
//     //   },
//     //   {
//     //     icon: {
//     //       class: 'iconfont',
//     //       code: '&#xe678'
//     //     }
//     //   }
//     // ];
//
//     return (
//       <div id="app">
//         <div className="header">
//           <Link to="home">page1</Link>
//           <Link to="content">page2</Link>
//           <Link to="page3">page3</Link>
//         </div>
//         {this.props.children}
//      <!--   <TabBar items={tabBarItems}></TabBar> -->
//       </div>
//     );
//   }
// };


import  React, {
  Component
} from 'react';

import {
  Link
} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="page1">page1</Link>
          <Link to="page2">page2</Link>
          <Link to="page3">page3</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
};