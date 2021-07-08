import React from 'react'
import { storageUrl } from '../../env'
import styles from './teamgraph.module.css'
const TeamGraph = ({ team }) => {
    return (
        <div className={styles.teamgraph}>
            <div className={styles.bars}>
                <div className={styles.placementbarwrapper}>
                    <div className={styles.bar_info}>{team.placement}</div>
                    <div style={{ height: team.placementHeight }} className={styles.placementbar}></div>
                </div>
                <div className={styles.killsbarwrapper}>
                    <div className={styles.bar_info}>{team.kills}</div>
                    <div style={{ height: team.killsHeight }} className={styles.killsbar}></div>
                </div>
            </div>
            <div className={styles.team_image_box}>
                <img src={storageUrl + team.image} height={100} width={100} />
            </div>
        </div>
    )
}

export default TeamGraph
