import React from 'react'
import styles from './MatchResultTableRow.module.css'
import { storageUrl } from '../../env'
const MatchResultTableRow = (props) => {
    return (
        <div className={styles.row}>
            <div className={styles.left}>
                <div className={styles.row_rank}> {props.rank}</div>
                <div className={styles.row_image}>
                    <img src={storageUrl +props.result.image} alt="" height="80" width="80"/>
                </div>
                <div className={styles.row_name}> {props.result.name}</div>
            </div>
            <div className={styles.right}>
                <div className={styles.row_data}>
                    {props.result.final.placement}
                </div>
                <div className={styles.row_data}>
                    {props.result.final.kills}
                </div>
                <div className={styles.row_data}>
                    {props.result.final.total}
                </div>
            </div>
        </div>
    )
}

export default MatchResultTableRow
