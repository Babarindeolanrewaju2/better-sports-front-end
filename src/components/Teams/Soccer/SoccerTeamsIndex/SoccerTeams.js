import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchTeams } from "../../../../actions/soccerTeamsActions";

import SoccerTeamCard from "./SoccerTeamCard";

import "../../../../styles/SoccerTeams.css";

class SoccerTeams extends Component {
  componentDidMount() {
    this.props.getTeams();
  }

  mapTeamsToTeamCard = () => {
    return this.props.teams.map(team => {
      return <SoccerTeamCard key={team.id} team={team} />;
    });
  };

  render() {
    console.log(this.props.teams);
    return (
      <div className="soccerTeamsContainer">
        <div className="soccerTeamsHeader">
          <h1>Champions League Teams</h1>
        </div>
        <div className="soccerTeamsCards">{this.mapTeamsToTeamCard()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTeams: () => fetchTeams(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SoccerTeams);
