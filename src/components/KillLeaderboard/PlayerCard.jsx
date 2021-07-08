import React from 'react'
import styles from './PlayerCard.module.css'
import { storageUrl } from '../../env'
const PlayerCard = (props) => {
    return (
        <div className={styles.playerCard}>
            <div className={styles.rank}>{props.rank}</div>
            <div className={styles.team_image_box}>
                <img src={storageUrl+props.player.teamImage} width={105} height={105}/> 
            </div>
            <div className={styles.player_info}>
                <img className={styles.player_image} src={storageUrl+props.player.image}></img>
                <div className={styles.player_name}>{props.player.name}</div>
            </div>
            <div className={styles.kills}>{props.player.totalkills}</div>
        </div>
    )
}

export default PlayerCard
