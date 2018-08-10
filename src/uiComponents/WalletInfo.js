import React from 'react'

const WalletInfo =(props)=>{
    return(
        <React.Fragment>
            <h2>{props.walletType} Wallet Direction</h2>
            <input type="text" disabled={props.disabled} value={props.walletDir}/>
        </React.Fragment>
    );
}
export default WalletInfo