import React from "react";


export default class AnotherComponent extends React.Component {

	constructor (props) {
		super(props);
	}


	render () {
		return (<div>
				<h1>Another component</h1>
				<p>This one has no child components</p>
				</div>);
	}
}