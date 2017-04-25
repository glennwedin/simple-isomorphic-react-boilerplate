/*
import React from "react";
import {Router, Route} from "react-router";
import MainComponent from "../containers/MainComponent";

var mainroute = (history) => {
	history = history || null;
	return (
			<Router history={history}>
				<Route path="/" component={MainComponent} >
				</Route>
			</Router>
		);
};

export default mainroute;
*/
import React from "react";
import {Route, StaticRouter, BrowserRouter } from 'react-router-dom';
import Main from "../containers/MainComponent";

let serverRoute = (req, context) => {
	return (
		<StaticRouter location={req.url} context={context}>
			<Route path="/*" component={Main} />
		</StaticRouter>
	);
};

let browserRoute = () => {
	return (
		<BrowserRouter>
			<Route path="/*" component={Main} />
		</BrowserRouter>
	);
};
export { serverRoute, browserRoute };
