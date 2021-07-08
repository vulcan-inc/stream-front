import React, { useEffect, useState } from 'react'
import getKillLeaderboard from '../utils/getKillLeaderboard'
import KillLeaderboardTable from '../components/KillLeaderboard/KillLeaderboardTable'

const KillLeaderboard = () => {
    const [players, setplayers] = useState([])
    useEffect(() => {
        getKillLeaderboard().then(players=>{
            setplayers(players)
        })
  
    }, [])
  
    return (
        
        <div style={{height:'1080px' , width:'1920px' , paddingTop:'250px'}}>
        <div style={{display:'flex',width:'1800px', margin:'auto' ,justifyContent:'space-between'}}>
            <KillLeaderboardTable players={players} index={1}></KillLeaderboardTable> 
            <KillLeaderboardTable players={players} index={2}></KillLeaderboardTable> 
        </div>
        </div>
    )
}

export default KillLeaderboard
