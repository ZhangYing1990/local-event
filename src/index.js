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
	Router,
	Route,
	IndexRoute,
	browserHistory,
	Link
} from 'react-router';

import store from './js/createStore';
import routes from './js/routes';
import './styles/main.less';


render((
	<Provider store={store}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>
), document.getElementById('root'));