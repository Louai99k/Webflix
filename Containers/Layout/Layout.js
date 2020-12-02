import React, { Component, Suspense } from "react";
import css from "./Layout.module.css";
import { Switch, Route } from "react-router-dom";

const MovieSlider = React.lazy(() => import("../MovieSlider/MovieSlider"));
const SignPage = React.lazy(() => import("../SignPage/SignPage"));
const FullMoviePage = React.lazy(() =>
  import("../FullMoviePage/FullMoviePage")
);
class Layout extends Component {
  render() {
    return (
      <div className={css.Layout}>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={MovieSlider} />
            <Route path="/fmp" component={FullMoviePage} />
            <Route path="/sign" component={SignPage} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
export default Layout;
