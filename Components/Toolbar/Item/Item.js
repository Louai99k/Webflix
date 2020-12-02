import React from "react";
import css from "./Item.module.css";
import { NavLink } from "react-router-dom";
const item = (props) => (
  <div className={css.Item}>
    <NavLink onClick={props.clicked} to={props.to}>
      {props.children}
    </NavLink>
  </div>
);
export default item;
