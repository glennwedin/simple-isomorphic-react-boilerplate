import express from "express";
import React from "react";
import { match, RouterContext } from "react-router";
import { renderToString } from 'react-dom/server';
import mainroute from "./src/routes/routes";
import path from "path";

var app = express();

//Point to views
app.set('views', path.join(__dirname, './src/views'));

//Set view engine. Ejs, mustache, jade or whatever
app.set('view engine', 'ejs');

//Point to static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
	let routes = mainroute(null);
	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(500).send(error.message)
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		} else if (renderProps) {
			res.render('index', {data: renderToString(<RouterContext {...renderProps} />)});
		} else {
			res.status(404).send('Not found')
		}
	})
});

//Listen on port
app.listen(3000);