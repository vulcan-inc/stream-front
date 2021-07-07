import React from 'react'
import styles from './OverallResultTable.module.css'
import OverallResultTableRow from './OverallResultTableRow'
const OverallResultTable = (props) => {
    return (
        <div className={styles.overallTable}>
            <div className={styles.tableHead}>
                <div className={styles.table_head_data}>BOOYAH</div>
                <div className={styles.table_head_data}>MATCHES</div>
                <div className={styles.table_head_data}>PLACEMENT</div>
                <div className={styles.table_head_data}>KILLS</div>
                <div className={styles.table_head_data}>TOTAL</div>
            </div>

            <div className={styles.tableBody}>
                {props.results.slice((props.index-1)*9 ,(props.index)*9 ).map((result, i)=>(
                    <OverallResultTableRow result={result} rank={i+1+(props.index-1)*9}></OverallResultTableRow>
                ))}
            </div>
        </div>
    )
}

export default OverallResultTable
