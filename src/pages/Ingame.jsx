import React, { useEffect, useState } from 'react'
import { storageUrl } from '../env'
import getOverAllResults from '../utils/getOverAllResults'
import styles from './ingame.module.css'

const TeamCard = ({ team, rank }) => {
    return <div className={styles.teamcard}>
        <div className={styles.team_image_box}>
            <img src={storageUrl + team.image} alt="" height={60} width={60} />
        </div>
        <div className={styles.team_info}>
            <div className={styles.team_info_name}>{team.name}</div>
            <div className={styles.rankandtotal}>
                <div className={styles.rank}>#{rank}</div>
                <div className={styles.team_info_total}>{team.final.total} Pts.</div>
            </div>
        </div>
    </div>
}


const Ingame = () => {
    const [results, setresults] = useState([])
    const [toShow, settoShow] = useState(0)
    useEffect(() => {
        getOverAllResults().then(
            result => {
                setresults(result)
            }
        )
    }, [])

    useEffect(() => {
        let timer;
        if (results.length > 0) {
            timer = setTimeout(() => {
                if (toShow == 3) {
                    settoShow(1)
                } else {
                    settoShow(toShow + 1)
                }
            }, 8000);
        }
        return () => {
            clearTimeout(timer)
        }
    }, [toShow, results])


    console.log(results);
    if (toShow == 1) return <div className={styles.team_wrapper} >
        {results.slice(0, 4).map((team, i) => {
            return <TeamCard team={team} rank={i + 1} ></TeamCard>
        })}
    </div>

    if (toShow == 2) return <div className={styles.team_wrapper} >
        {results.slice(4, 8).map((team, i) => {
            return <TeamCard team={team} rank={i + 5} ></TeamCard>
        })}
    </div>

    if (toShow == 3) return (
        <div className={styles.team_wrapper} >
            {results.slice(8, 12).map((team, i) => {
                return <TeamCard team={team} rank={i + 9} ></TeamCard>
            })}
        </div>
    )
    return <></>
}

export default Ingame
