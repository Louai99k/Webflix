import React from "react";
import css from "./Logo.module.css";
import logoPic from "../../Assets/logo.jpg";
const logo = (props) => (
  <div className={css.Logo}>
    <img src={logoPic} alt="logo" />
  </div>
);
export default logo;
