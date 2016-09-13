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
import Mine from '../pages/mine/index';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="home" component={Home}></Route>
		<Route path="content" component={Content}></Route>
		<Route path="mine" component={Mine}></Route>
	</Route>
);