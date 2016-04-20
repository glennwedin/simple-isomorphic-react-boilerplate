import React from "react";
import { Link } from "react-router";


import AddItem from '../containers/AddItem';
import ItemList from './ItemList';

import { Provider } from 'react-redux';
/*
import MainAppReducer from '../reducers/reducers';
import { createStore } from 'redux';
*/

import { editUser } from '../actions/actions';

//let store = createStore(MainAppReducer);
import store from '../stores/Store';


class MainComponent extends React.Component {

	constructor (props) {
		super(props);

		let state = store.getState();
		console.log(state);
		this.state = {
			itemList: state.items,
			user: state.user
		};
	}

	componentDidMount() {
		/*
		this.setState({
			itemsFromRedux: store.getState().items
		});
		*/
		
		store.subscribe(() => {
			let state = store.getState();
			console.log('Data from redux', state);
			this.setState({
				itemList: state.items,
				user: state.user
			})
		});
	}

	changeName () {
		//console.log(store)
		store.dispatch(editUser('Navn Navnesen', 25, 'mail@wedinweb.no'));
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
						<p>This component belongs to {this.state.user.name}</p>
						<button onClick={this.changeName.bind(this)}>Change name</button>
						<ul>
							<li><Link to="/">Main (has no sub-components)</Link></li>
							<li><Link to="sub">Go to subcomponent</Link></li>
							<li><Link to="another">Go to another subcomponent</Link></li>
						</ul>
						<AddItem />
						<ItemList items={this.state.itemList}/>
						<div id="app">{this.props.children}</div>
						<script type="text/javascript" src="js/app.js"></script>
						</body>
					</html>
				</Provider>
			);
	}
}
export default MainComponent;