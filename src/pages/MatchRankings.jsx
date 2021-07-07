import React, { useEffect, useState } from 'react'
import getMatchResults from '../utils/getMatchResults'
import MatchResultTable from '../components/MatchResults/MatchResultTable'
import styles from './MatchRankings.module.css'
const MatchRankings = () => {
    const [matchResults, setMatchResults] = useState([])
    useEffect(() => {
        getMatchResults().then(result =>{
            console.log(result)
            setMatchResults(result)
        })
    }, [])
    return (
        <div className={styles.matchrankings}>
            {matchResults.length>0 ? (<div className={styles.tables}>
                <MatchResultTable from={1} to={6} results={matchResults}>
                </MatchResultTable>
                <MatchResultTable from={7} to={12} results={matchResults}>
                </MatchResultTable>
            </div>
            ) : <h2>failed to load data</h2>}
            
        </div>
    )
}

export default MatchRankings
