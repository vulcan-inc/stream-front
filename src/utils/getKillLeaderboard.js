import getOverAllResults from "./getOverAllResults";

export default async function(mapdata = false){
    let overalldata = await getOverAllResults()
    let players = []
    overalldata.forEach(team => {
        team.players.forEach(player=>{
            let totalkills = 0
            player.details.forEach(detail=>{
                totalkills += detail.kills
            })
            player.totalkills = totalkills
            player.contribution = parseFloat(((totalkills/team.final.kills)*100).toFixed(2))
            player.teamImage = team.image
            players.push(player)
        })
        
    });
    players.sort(function(a,b){
        if(a.totalkills>b.totalkills) return -1
        if(a.totalkills<b.totalkills) return 1

        if(a.contribution > b.contribution) return -1
        if(a.contribution < b.contribution) return 1

        return 0
    })
    if(mapdata) return [players , overalldata]
    return players
}