import React from "react";

export default class SubComponent extends React.Component {

	constructor () {
		super();
	}

	warn () {
		alert('Funker det ja');
	}

	render () {
		return (<h2 onClick={this.warn}>Im just a text string in SubComponent</h2>);
	}
}