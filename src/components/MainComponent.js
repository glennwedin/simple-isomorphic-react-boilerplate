import React from "react";
import { Link } from "react-router";

export default class MainComponent extends React.Component {

	constructor () {
		super();

		this.state = {
			'name': 'Glenn Wedin'
		}
	}

	render () {
		return (<html lang="en">
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
					<div id="app">{this.props.children}</div>
					<script type="text/javascript" src="js/app.js"></script>
					</body>
				</html>);
	}
}