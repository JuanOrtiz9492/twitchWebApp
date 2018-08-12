import React from 'react'
import './MinerStats.css'
const MinerStats =(props)=>{
    return(
        <section className="minerStats">
            <h3>Account Balance</h3>
            <span>{props.balance>0?props.balance.toFixed(3):props.balance}</span>
            <h3> Average Hashrate</h3>
            <span>{Math.round(props.hashRate)}</span>
        </section>
    )
}
export default MinerStats