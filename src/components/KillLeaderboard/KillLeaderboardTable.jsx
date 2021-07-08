import React from 'react'
import PlayerCard from './PlayerCard'
const KillLeaderboardTable = (props) => {
    return (
        <div style={{height:'675px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            {props.players.slice((props.index-1)*5 , props.index*5).map((player ,i)=>{
                return <PlayerCard key={player.id} rank={(props.index-1)*5+(i+1)} player={player}></PlayerCard>
            })}
        </div>
    )
}

export default KillLeaderboardTable
