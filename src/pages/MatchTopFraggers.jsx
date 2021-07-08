import React, { useEffect, useState } from 'react'
import PlayerBox from '../components/MatchTopFraggers/PlayerBox'
import getTopFraggers from '../utils/getTopFraggers'

const MatchTopFraggers = (props) => {
    const [players, setplayers] = useState([])
    useEffect(() => {
        getTopFraggers().then(
            players=>{
                setplayers(players)
            }
        )
    }, [])
    
    return (
        <div style={{
            width :'1920px',
            height : '1080px',
            paddingTop : '270px'
        }}>

        <div style={{
            width :'1416px',
            margin : 'auto',
            display:'flex',
            justifyContent :'space-between'
        }}>
            {players.slice(0,4).map(player=>(
                <PlayerBox key={player.id} player={player}></PlayerBox>
                ))}
        </div>
      </div>
    )
}

export default MatchTopFraggers
