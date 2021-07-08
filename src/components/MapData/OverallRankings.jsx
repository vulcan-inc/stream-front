import React from 'react'
import styles from './overallrankings.module.css'
import TeamCard from './TeamCard'
const OverallRankings = ({rankings}) => {
    return (
        <div className={styles.rankings}>
            <div className={styles.head}>OVERALL RANKING</div>
            <div className={styles.head_data}>
                <div className={styles.head_data_rank}>#</div>
                <div className={styles.head_data_info}>
                    <div className={styles.head_data_info_name}>TEAM</div>
                    <div className={styles.head_data_info_total}>TOTAL</div>
                </div>
            </div>
            <div className={styles.team_cards}>
                {rankings.map((team, i) => <TeamCard key={i} team={team} rank={i+1}></TeamCard>)}
            </div>
        </div>
    )
}

export default OverallRankings
