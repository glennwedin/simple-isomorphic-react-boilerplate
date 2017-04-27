import React from "react";
import { Route, Link } from "react-router";
import { Provider } from 'react-redux';
import { editUser, fetchPosts } from '../actions/actions';
import store from '../stores/Store';
import TopMenu from '../components/TopMenu';
import FrontComponent from '../components/FrontComponent';

class MainComponent extends React.Component {

	constructor (props) {
		super(props);

		let state = store.getState();
		console.log(state);
		this.state = {

		};
	}

	componentDidMount() {
		console.log('test')
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
						<TopMenu />
						<div id="app">
							<Route exact path="/" component={FrontComponent} />
						</div>
							<script src="./client.js"></script>
						</body>
					</html>
				</Provider>
			);
	}
}
export default MainComponent;
