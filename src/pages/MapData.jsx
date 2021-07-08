import React, { useEffect, useState } from 'react'
import getKillLeaderboard from '../utils/getKillLeaderboard'
import KillLeaders from '../components/MapData/KillLeaders'
import OverallRankings from '../components/MapData/OverallRankings'
const MapData = () => {
    const [data, setdata] = useState([[],[]])
    useEffect(() => {
        getKillLeaderboard(true)
        .then(res=>{
            setdata(res)
        })
    }, [])
    return (
        <div style={{width:'1920px',height:'1080px',display:'flex',justifyContent:'space-between'}}>
            <OverallRankings rankings={data[1]}></OverallRankings>
            <KillLeaders players={data[0]}></KillLeaders>
        </div>
    )
}

export default MapData
