import React from "react";
const classes = require("./imgComponent.styles.scss");
const logoImg = require("./content/logo_1.png");

export const ImgComponent: React.FunctionComponent = () => {
  return <img className={classes.img} src={logoImg} />;
};
