import React, { Component, Fragment } from "react";
import { Route, withRouter, Redirect, Switch } from "react-router-dom";

// connect to Redux state
import { connect } from "react-redux";
// auto logs in user upon refresh
import { auto_login } from "./actions/fetchActions";
// gets all teams and games
import { fetchTeams } from "./actions/soccerTeamsActions";
import { fetchGames } from "./actions/fetchActions";

// all containers needed for routes
import Home from "./containers/Home";
import GamesPage from "./containers/GamesPage";
import Dashboard from "./containers/Dashboard";
import SignupPage from "./containers/SignupPage";
import LoginPage from "./containers/LoginPage";
import AddFunds from "./containers/AddFunds";
import TermsOfService from "./components/loginSignup/TermsOfService";
import CreateBets from "./containers/CreateBets";
import AllBets from "./containers/AllBets";
import TeamsPage from "./containers/TeamsPage";
import SoccerShowPage from "./containers/SoccerShowPage";
import PlayerShowPage from "./containers/PlayerShowPage";

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

    // get all teams
    this.props.getTeams();

    // get all games
    this.props.getGames();
  }

  render() {
    if (localStorage["token"]) {
      return (
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/addFunds" component={AddFunds} />
          <Route exact path="/betterSportsTerms" component={TermsOfService} />
          <Route exact path="/bets/new" component={CreateBets} />
          <Route exact path="/bets" component={AllBets} />
          <Route exact path="/teams/soccer" component={TeamsPage} />
          <Route exact path="/teams/soccer/:id" component={SoccerShowPage} />
          <Route
            exact
            path="/teams/soccer/players/:id"
            component={PlayerShowPage}
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
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/betterSportsTerms" component={TermsOfService} />
            <Route exact path="/teams/soccer" component={TeamsPage} />
            <Route exact path="/teams/soccer/:id" component={SoccerShowPage} />
            <Route
              exact
              path="/teams/soccer/players/:id"
              component={PlayerShowPage}
            />
            <Redirect to="/login" />
          </Switch>
        </Fragment>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    games: state.games,
    token: state.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    auto_login: token => auto_login(dispatch, token),
    getTeams: () => fetchTeams(dispatch),
    getGames: () => fetchGames(dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
