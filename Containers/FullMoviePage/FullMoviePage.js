import React, { Component } from "react";
import css from "./FMP.module.css";
import * as posters from "../../Assets/index";
import { withRouter } from "react-router-dom";
import axios from "../../axios";
import Footer from "../../Components/Footer/Footer";
class FullMoviePage extends Component {
  state = {
    cat: this.props.location.search.slice(1).split("&")[0],
    name: this.props.location.search.slice(1).split("&")[1],
    realName: "",
    isAuth: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    if (localStorage.getItem("token")) {
      this.setState({ isAuth: true });
    }
    axios
      .get("/Movies/" + this.state.cat + "/" + this.state.name + ".json")
      .then((res) => {
        this.setState({ realName: res.data });
      });
  }
  render() {
    return (
      <React.Fragment>
        <div
          className={css.FMP}
          style={{
            backgroundImage:
              "url(" + posters[this.state.cat][this.state.name] + ")",
          }}
        >
          <div className={css.cont}>
            <img
              src={posters[this.state.cat][this.state.name]}
              alt={this.state.name}
            />
            <div>
              <h3>{this.state.realName}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium saepe fugiat, quo harum ut odio iusto provident in
                magnam voluptas eum culpa. Corrupti, reprehenderit ratione qui
                magnam doloremque earum iure?
                <br />
                <button>Watch Movie</button>
                <button disabled={!this.state.isAuth}>
                  {this.state.isAuth
                    ? "Download the Movie"
                    : "Sign in to Download"}
                </button>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default withRouter(FullMoviePage);
