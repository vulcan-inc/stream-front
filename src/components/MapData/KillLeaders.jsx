import React from 'react'
import styles from './killleaders.module.css'
import PlayerBox from './PlayerBox'
const KillLeaders = ({players}) => {
    return (
        <div className={styles.killleaders}>
            <div className={styles.head}>KILL LEADERS</div>
            <div className={styles.player_list}>
                {players.slice(0,5).map((player,i)=><PlayerBox key={i} rank={i+1} player={player}></PlayerBox>)}
            </div>
        </div>
    )
}

export default KillLeaders
