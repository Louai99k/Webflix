import React from "react";
import css from "./Movie.module.css";
import { Link } from "react-router-dom";
const movie = (props) => (
  <div className={css.Movie}>
    <Link
      to={{
        pathname: "/fmp",
        search: props.category + "&" + props.name,
      }}
    >
      <img src={props.poster} alt={props.name} />
    </Link>
  </div>
);
export default movie;
