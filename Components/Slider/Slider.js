import React from "react";
import css from "./Slider.module.css";
import Movie from "../../Components/Movie/Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const slider = (props) => {
  const scrlRight = (id) => {
    let xPos = document.getElementById(id).scrollLeft;
    document.getElementById(id).scrollTo(xPos + 350, 0);
  };
  const scrolLeft = (id) => {
    let xPos = document.getElementById(id).scrollLeft;
    document.getElementById(id).scrollTo(xPos - 350, 0);
  };
  let movies = Object.keys(props.movies).map((el, ind) => {
    return (
      <Movie
        key={ind}
        poster={props.movies[el]}
        name={el}
        category={props.category}
      />
    );
  });
  return (
    <div className={css.Slider}>
      <button style={{ left: "10px" }} onClick={() => scrolLeft(props.id)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button style={{ right: "10px" }} onClick={() => scrlRight(props.id)}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <div className={css.cont} id={props.id}>
        {movies}
      </div>
    </div>
  );
};
export default slider;
