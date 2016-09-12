import React, {
	Component
} from 'react';
import {
	Route,
	IndexRoute
} from 'react-router';

import App from '../pages/app';

// pages
import Home from '../pages/home/index';
import Content from '../pages/content/index';
import Page3 from '../pages/page3/index';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="home" component={Home}></Route>
		<Route path="content" component={Content}></Route>
		<Route path="page3" component={Page3}></Route>
	</Route>
);