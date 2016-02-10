import React from "react";
import { Link } from "react-router";

export default class MainComponent extends React.Component {

	constructor () {
		super();
	}

	jess () {
		alert('test');
	}

	render () {
		return (<div>
				<h1>Main component</h1>
				<div onClick={this.jess}>Click on me to test javascript</div>
				<div><Link to={`/another`}>Click to go to AnotherComponent</Link></div>
				<div>{this.props.children}</div>
				</div>);
	}
}