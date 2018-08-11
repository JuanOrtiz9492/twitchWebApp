import React from 'react'
import './MinerStats.css'
const MinerStats =(props)=>{
    return(
        <section className="minerStats">
            <h3>Account Balance</h3>
            <span>{props.balance}</span>
            <h3> Average Hashrate</h3>
            <span>{props.hashRate}</span>
        </section>
    )
}
export default MinerStats