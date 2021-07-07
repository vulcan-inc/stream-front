import getMatchResults from "./getMatchResults";

export default async function(){
    let teams = await getMatchResults()
    let players = []
    teams.forEach(team=>{
        team.playerdetail.forEach(playerdetail=>{
            playerdetail.playerdetail.contribution = parseFloat(((playerdetail.playerdetail.kills/team.final.kills)*100).toFixed(2))
            playerdetail.teamimage = team.image
            players.push(playerdetail)
        })
    })

    players.sort(
        function(a,b){
            if(a.playerdetail.kills>b.playerdetail.kills) return -1
            if(a.playerdetail.kills<b.playerdetail.kills) return 1

            if(a.playerdetail.contribution>b.playerdetail.contribution) return -1
            if(a.playerdetail.contribution<b.playerdetail.contribution) return 1

            return 0
        }
    )
    return players
}