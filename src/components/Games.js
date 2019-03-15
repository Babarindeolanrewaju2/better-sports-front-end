import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGames, fetchTeams } from "../actions/fetchActions";

import "../styles/Games.css";

class Games extends Component {
  componentDidMount() {
    this.props.getGames();
    this.props.getTeams();
  }

  render() {
    return (
      <div className="gamesContainer">
        <h1>Future Games</h1>
        <div className="gamesList">
          {this.props.games.length === 0 ? (
            <h1>Loading</h1>
          ) : (
            <h1>{this.props.games[0].attributes.one}</h1>
          )}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getGames: () => fetchGames(dispatch),
    getTeams: () => fetchTeams(dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Games);
