"use strict";

import React from "react";
import ReactDOM from "react-dom";
import  { Router, browserHistory } from "react-router";
//import createBrowserHistory from '';
import mainroute from "./routes/routes";

//const history = createBrowserHistory();
var routing = mainroute(browserHistory);


ReactDOM.render(routing, document);