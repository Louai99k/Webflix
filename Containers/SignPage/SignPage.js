import React, { Component } from "react";
import css from "./SignPage.module.css";
import axios from "../../axios";
import { withRouter } from "react-router-dom";

class SignPage extends Component {
  state = {
    signup: true,
    email: "",
    password: "",
  };
  emailHandler = (event) => {
    let newMail = event.target.value;
    this.setState({ email: newMail });
  };
  passHandler = (event) => {
    let newPass = event.target.value;
    this.setState({ password: newPass });
  };
  submit = (event) => {
    event.preventDefault();
    const userInfo = {
      email: this.state.email,
      password: this.state.password,
      returnSecureToken: true,
    };
    if (this.state.signup) {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDjY5SEke-l1K75SuZOhWwpsobkGXyE2nA",
          userInfo
        )
        .then((res) => {
          localStorage.setItem("token", res.data.idToken);
          this.props.history.replace("/");
          window.location.reload();
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDjY5SEke-l1K75SuZOhWwpsobkGXyE2nA",
          userInfo
        )
        .then((res) => {
          localStorage.setItem("token", res.data.idToken);
          this.props.history.replace("/");
          window.location.reload();
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  switchSign = () => {
    let newSign = this.state.signup;
    this.setState({ signup: !newSign });
  };
  render() {
    return (
      <React.Fragment>
        <div className={css.SignPage}>
          <form onSubmit={this.submit}>
            <input
              onChange={(event) => this.emailHandler(event)}
              type="email"
              placeholder="Your Email"
            />
            <input
              onChange={(event) => this.passHandler(event)}
              type="password"
              placeholder="Your Paswoord"
            />
            <button>Sign {this.state.signup ? "Up" : "In"}</button>
            <br />
            <label onClick={this.switchSign}>
              Switch to Sign {!this.state.signup ? "Up" : "In"}
            </label>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(SignPage);
