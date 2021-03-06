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
                {props.results.slice((props.index-1)*6 ,(props.index)*6 ).map((result, i)=>(
                    <OverallResultTableRow key={result.id} result={result} rank={i+1+(props.index-1)*6}></OverallResultTableRow>
                ))}
            </div>
        </div>
    )
}

export default OverallResultTable
