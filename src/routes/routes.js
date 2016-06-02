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