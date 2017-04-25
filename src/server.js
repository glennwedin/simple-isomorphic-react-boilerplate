import express from "express";
import React from "react";
import { match, RouterContext } from "react-router";
import { renderToString } from 'react-dom/server';
import { serverRoute } from "./routes/routes";
import path from "path";

var app = express();

//Point to static files
app.use(express.static('public/'));
/*
app.get('*', function (req, res) {
	let routes = mainroute();
	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(500).send(error.message)
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		} else if (renderProps) {
			res.status(200).send('<!DOCTYPE html>'+renderToString(<RouterContext {...renderProps} />));
		} else {
			res.status(404).send('Not found')
		}
	})
});
*/
app.get('*', function(req, res) {
    let context = {};
    let router = serverRoute(req, context);
    // render the first time
    let markup = renderToString(router);

    // get the result
    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        });
        res.end();
    } else {
        if (context.missed) {
            res.writeHead(404);
            markup = "404";
            res.write(markup);
            res.end();
        }
		res.send(markup);
    }
});
//Listen on port
app.listen(3000);
