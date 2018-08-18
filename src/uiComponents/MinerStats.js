import React from 'react'
import '../styles/MinerStats.css'
const MinerStats =(props)=>{
    
    let balance= isNaN(props.balance)?0:props.balance
    let hashRate= isNaN(props.hashRate)?0:props.hashRate

    return(
        <div className="minerStats">
            <h3>Account Balance</h3>
            <span>{balance>0?balance.toFixed(3):balance}</span>
            <h3> Average Hashrate</h3>
            <span>{Math.round(hashRate)}</span>
        </div>
    )
}
export default MinerStats