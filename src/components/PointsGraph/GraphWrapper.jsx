import React from 'react'
import TeamGraph from './TeamGraph'
import styles from './graphwrapper.module.css'
const GraphWrapper = ({teamsdata}) => {
    return (
        
        <div className={styles.graphwrapper}>

            <div className={styles.graphinfo}>
                <div className={styles.type_info}>
                    <div className={styles.placementbox}></div>
                    <div className={styles.info_text}>Placement</div>
                </div>
                <div className={styles.type_info}>
                    <div className={styles.killsbox}></div>
                    <div className={styles.info_text}>Kills</div>
                </div>
            </div>
            <div className={styles.graphs}>
                {teamsdata.map((team,i)=>{
                    return <TeamGraph key={i} team={team}></TeamGraph>
                })}
            </div>
        </div>
    )
}

export default GraphWrapper
