import React from 'react'
import { storageUrl } from '../../env'
import styles from './teamcard.module.css'
const TeamCard = ({rank , team}) => {
    return (
        <div className={styles.teamcard}>
            <div className={styles.rank}>{rank}</div>
            <div className={styles.team_image_box}>
                <img src={storageUrl+team.image} alt="" height={50} width={50} />
            </div>
            <div className={styles.team_info}>
                <div className={styles.team_info_name}>{team.name}</div>
                <div className={styles.team_info_total}>{team.final.total}</div>
            </div>
        </div>
    )
}

export default TeamCard
