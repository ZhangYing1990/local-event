import React, {
	Component
} from 'react';
import {
	Route,
	IndexRoute
} from 'react-router';

import App from '../pages/app';

// pages
import Page1 from '../pages/page1/index';
import Page2 from '../pages/page2/index';
import Page3 from '../pages/page3/index';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={Page1}/>
		<Route path="page1" component={Page1}></Route>
		<Route path="page2" component={Page2}></Route>
		<Route path="page3" component={Page3}></Route>
	</Route>
);