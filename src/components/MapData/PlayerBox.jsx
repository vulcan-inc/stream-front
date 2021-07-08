import React from 'react'
import styles from './playerbox.module.css'
import {storageUrl} from '../../env'
const PlayerBox = ({player , rank}) => {
    return (
        <div className={styles.player_box}>
            <div className={styles.player_box_top}>
                <div className={styles.player_rank_and_team}>
                    <div className={styles.player_rank}>
                        #{rank}
                    </div>
                    <div className={styles.player_team_box}>
                        <img src={storageUrl+player.teamImage} width={85} height={85} />
                    </div>
                </div>
                <img src={storageUrl+player.image} alt="" width={110}  />
                <div className={styles.player_kills_box}>
                    <div className={styles.player_kills_header}>
                        KILLS
                    </div>
                    <div className={styles.player_kills}>
                        {player.totalkills}
                    </div>
                </div>


            </div>
            <div className={styles.player_box_bottom}>{player.name}</div>
        </div>
    )
}

export default PlayerBox
