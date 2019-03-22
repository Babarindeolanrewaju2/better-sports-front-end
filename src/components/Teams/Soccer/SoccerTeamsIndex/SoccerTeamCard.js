import React from "react";

//import BetButton from "./BetButton";

const SoccerTeamCard = props => {
  let team = props.team.attributes;
  const handleClick = () => {
    console.log(props.team);

    //props.routerProps.history.push(`/teams/soccer/${team.id}`);
  };
  return (
    <div className="SoccerTeamCard" onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={team.team_logo} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <h1>{team.name}</h1>
          <h3>{team.league}</h3>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedTeam: team => setSelectedTeam(dispatch, team)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SoccerTeamCard);
