import Axios from "../modules/Axios";
import placementPoints from "./placementPoints";

export default async function () {
  console.clear();
  let response = await Axios.get("/overalldetails");
  let teams = response.data

  teams.forEach((team) => {
      team.final = {
          booyah : 0,
          kills : 0,
          placement:0,
          position :0,
          matchesPlayed : 0,
          get total(){
            return this.kills+this.placement
          }
      }
        team.matchdetails.forEach(matchdetail=>{
            team.final.placement += placementPoints[matchdetail.position]
            team.final.position += matchdetail.position
            team.final.matchesPlayed++
            if(matchdetail.position === 1){
                team.final.booyah++
            }
        })
        team.players.forEach(player=>{
            player.details.forEach(detail=>{
                team.final.kills += detail.kills
            })
        })
  });
  teams.sort(function (a, b) {
    // check total
    if (a.final.total > b.final.total) return -1;
    if (a.final.total < b.final.total) return 1;

    // check booyah
    if (a.final.booyah > b.final.booyah) return -1;
    if (a.final.booyah < b.final.booyah) return 1;

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
  console.log(teams);
  return teams
}
