import React from 'react'
import styles from './matchResultTable.module.css'
import MatchResultTableRow from './MatchResultTableRow'
const MatchResultTable = (props) => {
    console.log(props.results.slice(props.from - 1 , props.to))
    return (
        <div className={styles.table}>
            <div className={styles.tableHead}>
                <div className={styles.head_block}>
                    PP
                </div>
                <div className={styles.head_block}>
                    KP
                </div>
                <div className={styles.head_block}>
                    TOTAL
                </div>
            </div>

            <div className={styles.tableBody}>
                {props.results.slice(props.from - 1 , props.to).map((result , index) =>(
                    <MatchResultTableRow result={result} rank={index + props.from }>
                    </MatchResultTableRow>))
                }
            </div>
        </div>
    )
}

export default MatchResultTable
