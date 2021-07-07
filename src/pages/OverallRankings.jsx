import React, { useEffect, useState } from 'react'
import getOverAllResults from '../utils/getOverAllResults'
import OverallResultTable from '../components/OverallResults/OverallResultTable'

const OverallRankings = (props) => {
    const [results, setresults] = useState([])
    useEffect(() => {
        getOverAllResults().then(
            result =>{
                setresults(result)
            }
        )
    }, [])
    return (
        <div style={{
            width:'1920px',
            height:'1080px',
            paddingTop:'190px',
        }}>
            <OverallResultTable results={results} index={props.index}></OverallResultTable>
        </div>
    )
}
export default OverallRankings
