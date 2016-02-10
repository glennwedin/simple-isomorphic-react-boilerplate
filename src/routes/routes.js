import React from "react";
import {Router, Route} from "react-router";
import MainComponent from "../components/MainComponent";
import SubComponent from "../components/SubComponent";
import AnotherComponent from "../components/AnotherComponent";

var mainroute = (history) => {
	history = history || null;
	return (<Router history={history}>
				<Route path="/" component={MainComponent} >
					<Route path="sub" component={SubComponent} />
				</Route>
				<Route path="/another" component={AnotherComponent} />
			</Router>)
};

export default mainroute;