/**
 * Created by ZhiyuanSun on 16/9/18.
 */
// application's entry

import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';
import {
  Provider
} from 'react-redux';
import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './js/reducers/event-detail';
import './styles/main.less';


import EventSelection from './components/event-selection/event-selection';

const store = createStore(reducers, {}, applyMiddleware(thunk));

let items= [
  {
    description: "desc1",
    url: "https://www.baidu.com",
    img: require('./img/carouselItems/carousel-item1.jpg')
  },
  {
    description: "desc2",
    url: "https://www.baidu.com",
    img: require('./img/carouselItems/carousel-item2.jpg')
  },
  {
    description: "desc3",
    url: "https://www.baidu.com",
    img: require('./img/carouselItems/carousel-item3.jpg')
  },
  {
    description: "desc4",
    url: "https://www.baidu.com",
    img: require('./img/carouselItems/carousel-item4.jpg')
  },
  {
    description: "desc1",
    url: "https://www.baidu.com",
    img: require('./img/carouselItems/carousel-item1.jpg')
  },
  {
    description: "desc2",
    url: "https://www.baidu.com",
    img: require('./img/carouselItems/carousel-item2.jpg')
  },
  {
    description: "desc3",
    url: "https://www.baidu.com",
    img: require('./img/carouselItems/carousel-item3.jpg')
  },
  {
    description: "desc4",
    url: "https://www.baidu.com",
    img: require('./img/carouselItems/carousel-item4.jpg')
  }
];

render((
  <Provider store={store}>
    <EventSelection lazyLoading={true} items={items}></EventSelection>
  </Provider>
), document.getElementById('root'));