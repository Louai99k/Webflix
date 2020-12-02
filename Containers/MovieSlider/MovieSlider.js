import React, { Component } from "react";
import Slider from "../../Components/Slider/Slider";
import * as posters from "../../Assets/index";
import Footer from "../../Components/Footer/Footer";
class MovieSlider extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider category="Horror" movies={posters.Horror} id="slider1" />
        <Slider category="Action" movies={posters.Action} id="slider2" />
        <Slider category="Comedy" movies={posters.Comedy} id="slider3" />
        <Slider category="Cartoon" movies={posters.Cartoon} id="slider4" />
        <Slider category="Family" movies={posters.Family} id="slider5" />
        <Footer />
      </React.Fragment>
    );
  }
}
export default MovieSlider;
