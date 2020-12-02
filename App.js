import React, { Component } from "react";
import Layout from "./Containers/Layout/Layout";
import Toolbar from "./Components/Toolbar/Toolbar";
import css from "./App.module.css";
class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <Toolbar
          clicked={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
          token={localStorage.getItem("token")}
        />
        <Layout />
      </div>
    );
  }
}

export default App;
