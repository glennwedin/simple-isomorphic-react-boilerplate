"use strict";

import React from "react";
import ReactDOM from "react-dom";
import  { Router } from "react-router";
import { browserRoute } from "./routes/routes";
import "!style-loader!css-loader!sass-loader!./style/main.scss";

var routing = browserRoute();

ReactDOM.render(routing, document);
