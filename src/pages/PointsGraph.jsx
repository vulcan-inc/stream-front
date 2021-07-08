import React, { useEffect, useState } from 'react'
import getPointsGraphData from '../utils/getPointsGraphData'
import GraphWrapper from '../components/PointsGraph/GraphWrapper'
const PointsGraph = () => {

    const [teamsdata, setTeamsdata] = useState([])
    useEffect(() => {
        getPointsGraphData().then(res=>{
            setTeamsdata(res)
        })
    }, [])
    return (
        <div style={{height:'1080px' , width:'1920px' , paddingTop:'196px'}}>
            <GraphWrapper teamsdata={teamsdata}></GraphWrapper>
        </div>
    )
}

export default PointsGraph
