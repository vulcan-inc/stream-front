import React from 'react'
import { storageUrl } from '../../env'
import styles from './OverallResultTableRow.module.css'
const OverallResultTableRow = (props) => {
    return (
        <div className={styles.table_row}>
            <div className={styles.left}>
                <div className={styles.row_rank}>{props.rank}</div>
                <div className={styles.row_image}>
                <img src={storageUrl +props.result.image} alt="" height="80" width="80"/>

                </div>
                <div className={styles.row_name}>{props.result.name}</div>
            </div>
            <div className={styles.right}>
                <div className={styles.row_data}>{props.result.final.booyah}</div>
                <div className={styles.row_data}>{props.result.final.matchesPlayed}</div>
                <div className={styles.row_data}>{props.result.final.placement}</div>
                <div className={styles.row_data}>{props.result.final.kills}</div>
                <div className={styles.row_data}>{props.result.final.total}</div>
            </div>
        </div>
    )
}
export default OverallResultTableRow
