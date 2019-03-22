import React, { Component } from "react";

import { connect } from "react-redux";

//import SoccerTeamCard from "./SoccerTeamCard";

import "../../../../styles/SoccerTeams.css";

class SoccerTeamShow extends Component {
  // componentDidMount() {
  //   this.props.getTeams();
  // }

  render() {
    console.log(this.props.teams);
    console.log(this.props.selectedTeam);
    return (
      <div className="soccerTeamsContainer">
        <div className="soccerTeamsHeader">
          <h1>Champions League Teams</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams,
    selectedTeam: state.selectedTeam
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getTeams: () => fetchTeams(dispatch)
//   };
// };

export default connect(mapStateToProps)(SoccerTeamShow);
