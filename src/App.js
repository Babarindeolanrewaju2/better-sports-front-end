import React, { Component, Fragment } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { auto_login } from "./actions/fetchActions";

import Home from "./containers/Home";
import GamesPage from "./containers/GamesPage";
import Dashboard from "./containers/Dashboard";
import SignupPage from "./containers/SignupPage";
import LoginPage from "./containers/LoginPage";
import AddFunds from "./containers/AddFunds";
import TermsOfService from "./components/loginSignup/TermsOfService";
import BetsForm from "./components/Bets/BetsForm";

class App extends Component {
  // check to see if user already has a JWT stored on browser,
  // and if so use it to verify who they are
  componentDidMount() {
    // check for token
    let token = localStorage.getItem("token");
    if (token) {
      // login user automatically with their token
      this.props.auto_login(token);
    }
  }

  render() {
    return (
      <Fragment>
        <Route
          exact
          path="/"
          render={routerProps => (
            <Home {...routerProps} currentUser={this.props.currentUser} />
          )}
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
            <Dashboard
              {...routerProps}
              games={this.props.games}
              currentUser={this.props.currentUser}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={routerProps => (
            <SignupPage {...routerProps} currentUser={this.props.currentUser} />
          )}
        />
        <Route
          exact
          path="/login"
          render={routerProps => (
            <LoginPage {...routerProps} currentUser={this.props.currentUser} />
          )}
        />
        <Route
          exact
          path="/addFunds"
          render={routerProps => <AddFunds {...routerProps} />}
        />
        <Route exact path="/betterSportsTerms" component={TermsOfService} />
        <Route exact path="/bets/new" component={BetsForm} />
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

function mapDispatchToProps(dispatch) {
  return {
    auto_login: token => auto_login(dispatch, token)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
