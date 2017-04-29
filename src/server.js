import express from "express";
import React from "react";
import { renderToString } from 'react-dom/server';
import { serverRoute } from "./routes/routes";
import path from "path";

var app = express();

//Point to static files
app.use(express.static('dist/public/'));

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
