import React from 'react'
import { storageUrl } from '../../env'
import styles from './PlayerBox.module.css'

const PlayerBox = (props) => {
        return (
        <div className={styles.main_box}>
            <div className={styles.main_box_upper}>
                <div className={styles.team_image_box}>
                <img src={storageUrl +props.player.teamimage} alt="" height="80" width="80"/>

                </div>
                <img className={styles.player_image} src={storageUrl + props.player.image}></img>
            </div>
            <div className={styles.main_box_bottom}>
                <div className={styles.player_name}>{props.player.name}</div>
                <div className={styles.info}>
                    <div className={styles.infoheader}>KILLS</div>
                    <div className={styles.infoData}>{props.player.playerdetail.kills}</div>
                    <div className={styles.infoheader}>CONTRIBUTION</div>
                    <div className={styles.infoData}>{props.player.playerdetail.contribution} %</div>
                </div>
            </div>

        </div>
    )
}

export default PlayerBox
