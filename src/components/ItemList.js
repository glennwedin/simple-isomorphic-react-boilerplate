import React from "react";
import { connect } from 'react-redux';

class ItemsList extends React.Component {
	
	constructor (props) {
		super(props);
	}

	render () {
		console.log('itemprops', this.props);
		return (
			<div>
				<div>Items</div>
				<ul>
					{this.props.items.map((obj, i) => {
						return <li key={i}>{obj.text}</li>;
					})}
				</ul>
			</div>
		)
	}
}
ItemsList = connect()(ItemsList);
export default ItemsList;