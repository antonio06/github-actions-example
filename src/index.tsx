import React from "react";
import ReactDOM from "react-dom";
import { ImgComponent } from "./imgComponent";
import { TypeComponent } from "./typeComponent";
const classes = require("./myStyles.scss");

ReactDOM.render(
  <div>
    <h1 className={classes.title}>Hello World people</h1>
    <span>Env url: {process.env.API_BASE}</span>
    <ImgComponent />
    <TypeComponent />
  </div>,
  document.getElementById("root")
);
