import React from "react";
import { Link } from "react-router";


import AddItem from '../containers/AddItem';
import ItemList from './ItemList';

import { Provider } from 'react-redux';
import MainAppReducer from '../reducers/reducers';
import { createStore } from 'redux';

let store = createStore(MainAppReducer);


class MainComponent extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			itemsFromRedux: store.getState().items
		};
	}

	componentDidMount() {
		/*
		this.setState({
			itemsFromRedux: store.getState().items
		});
		*/
		
		store.subscribe(() => {
			let items = store.getState();
			//console.log('ypp', items);
			this.setState({
				itemsFromRedux: items.items
			})
		});
	}

	render () {
		/*
			
		*/
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
						<ItemList items={this.state.itemsFromRedux}/>
						<div id="app">{this.props.children}</div>
						<script type="text/javascript" src="js/app.js"></script>
						</body>
					</html>
				</Provider>
			);
	}
}
export default MainComponent;