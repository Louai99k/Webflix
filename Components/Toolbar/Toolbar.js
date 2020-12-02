import React from "react";
import css from "./Toolbar.module.css";
import Item from "./Item/Item";
import Logo from "../Logo/Logo";
const toolbar = (props) => (
  <div className={css.Toolbar}>
    <Logo />
    <div className={css.cont}>
      <Item to="/">Home</Item>
      {props.token === null ? (
        <Item to="/sign">SignIn/Up</Item>
      ) : (
        <Item clicked={props.clicked} to="/">
          Logout
        </Item>
      )}
    </div>
  </div>
);
export default toolbar;
