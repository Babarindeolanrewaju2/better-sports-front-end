import React, { Component, Fragment } from "react";
import { Route, withRouter } from "react-router-dom";

import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" render={() => <Home />} />
      </Fragment>
    );
  }
}

export default withRouter(App);
