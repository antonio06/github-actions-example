import React from "react";
import ReactDOM from "react-dom";
import { ImgComponent } from "./imgComponent";
const classes = require("./myStyles.scss");

ReactDOM.render(
  <div>
    <h1 className={classes.title}>Hello World from React</h1>
    <span>Env url: {process.env.API_BASE}</span>
    <ImgComponent />
  </div>,
  document.getElementById("root")
);
