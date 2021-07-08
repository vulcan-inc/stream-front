import getMatchResults from './getMatchResults'

export default async function(){
    let matchdata = await getMatchResults()
    let highestpoint = 0
    let teamsdata = []
    matchdata.forEach(team=>{
        teamsdata.push({
            ...team.final,
            image : team.image,
            name : team.name
        })

        if(team.final.kills>highestpoint){
            highestpoint = team.final.kills
        }

        if(team.final.placement > highestpoint){
            highestpoint = team.final.placement
        }

    })

    teamsdata = teamsdata.map(team=>{
        return {
            ...team,
            placementHeight : ((team.placement/highestpoint)*580)+'px',
            killsHeight : ((team.kills/highestpoint)*580)+'px'
        }
    })

    return teamsdata
    
}