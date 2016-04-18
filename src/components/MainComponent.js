import React from "react";
import { Link } from "react-router";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainApp from '../reducers/reducers';
import AddItem from '../containers/AddItem';

let store = createStore(MainApp);

export default class MainComponent extends React.Component {

	constructor () {
		super();
	}

	componentDidMount() {
		store.subscribe(() => {
			console.log('ypp', store.getState());
		});   
	}

	render () {
		return (
				<Provider store={store}>
					<html lang="en">
					<head>
						<meta charSet="UTF-8" />
						<title>Simple-isomorphic-react-boilerplate</title>
					</head>
					<body>
						<h1>This is the main component</h1>
						<ul>
							<li><Link to="/">Main (has no sub-components)</Link></li>
							<li><Link to="sub">Go to subcomponent</Link></li>
							<li><Link to="another">Go to another subcomponent</Link></li>
						</ul>
						<AddItem />
						<div id="app">{this.props.children}</div>
						<script type="text/javascript" src="js/app.js"></script>
						</body>
					</html>
				</Provider>
			);
	}
}