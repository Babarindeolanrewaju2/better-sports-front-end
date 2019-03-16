import React, { Component, Fragment } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./containers/Home";
import GamesPage from "./containers/GamesPage";
import Dashboard from "./containers/Dashboard";
import SignupPage from "./containers/SignupPage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route
          exact
          path="/"
          render={routerProps => <Home {...routerProps} />}
        />
        <Route
          exact
          path="/games"
          render={routerProps => (
            <GamesPage {...routerProps} games={this.props.games} />
          )}
        />
        <Route
          exact
          path="/dashboard"
          render={routerProps => (
            <Dashboard {...routerProps} games={this.props.games} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={routerProps => <SignupPage {...routerProps} />}
        />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    games: state.games,
    bets: state.bets,
    teams: state.teams,
    players: state.players,
    currentUser: state.currentUser
  };
}

export default withRouter(connect(mapStateToProps)(App));
