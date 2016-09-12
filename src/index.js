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
import {
	Router,
	Route,
	IndexRoute,
	browserHistory,
	Link
} from 'react-router';
import reducers from './js/reducers/index';
// import routes from './js/routes';
// import './styles/main.less';

const store = createStore(reducers, {}, applyMiddleware(thunk));

// render((
// 	<Provider store={store}>
// 		<Router history={browserHistory} routes={routes}/>
// 	</Provider>
// ), document.getElementById('root'));

render((
	<div>Hello</div>
), document.getElementById('root'));