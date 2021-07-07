import Axios from "../modules/Axios";
import placementPoints from "./placementPoints";


export default async function () {
  console.clear();
  let response = await Axios.get("/matchdetails");
  let { details, groups } = response.data;

  let allTeams = [];
  groups.forEach((group) => {
    let teams = group.teams;
    for (let i = 0; i < teams.length; i++) {
      allTeams.push(teams[i].phase_team.team);
    }
  });
  for (let j = 0; j < allTeams.length; j++) {
    let teamdetail = details.filter(
      (v) => v.team.tournament_team_id == allTeams[j].id
    );
    if (teamdetail.length > 0) {
      allTeams[j].teamdetail = teamdetail[0].team;
      allTeams[j].playerdetail = teamdetail[0].players;
    }
  }

  for (let k = 0; k < allTeams.length; k++) {
    if (allTeams[k].teamdetail) {
      allTeams[k].final = {};
      allTeams[k].final.placement =
        placementPoints[allTeams[k].teamdetail.position];
      allTeams[k].final.position = allTeams[k].teamdetail.position;
      allTeams[k].final.kills = 0;
      for (let l = 0; l < allTeams[k].playerdetail.length; l++) {
        allTeams[k].final.kills =
          allTeams[k].final.kills +
          allTeams[k].playerdetail[l].playerdetail.kills;
      }
      allTeams[k].final.total =
        allTeams[k].final.kills + allTeams[k].final.placement;
      allTeams[k].final.played = true;
    } else {
      allTeams[k].final = {
        placement: 0,
        position: 0,
        kills: 0,
        total: 0,
        played: false,
      };
    }
  }
  allTeams.sort(function (a, b) {
    // check total
    if (a.final.total > b.final.total) return -1;
    if (a.final.total < b.final.total) return 1;

    // check placement
    if (a.final.placement > b.final.placement) return -1;
    if (a.final.placement < b.final.placement) return 1;

    // check has played 
    if(a.final.played && !b.final.played) return -1
    if(!a.final.played && b.final.played) return 1

    // check position
    if (a.final.position > b.final.position) return 1;
    if (a.final.position < b.final.position) return -1;
    return 0;  
  });

  return allTeams.slice(0 ,12);
}
