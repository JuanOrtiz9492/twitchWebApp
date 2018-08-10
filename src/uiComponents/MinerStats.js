import React from 'react'

const MinerStats =(props)=>{
    return(
        <React.Fragment>
            <h3>Account Balance</h3>
            <span>{props.balance}</span>
            <h3> Average Hashrate</h3>
            <span>{props.hashRate}</span>
        </React.Fragment>
    )
}
export default MinerStats