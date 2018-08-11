import React from 'react'
import './WalletInfo.css'
const WalletInfo =(props)=>{
    return(
        <section className="WalletInfo">
            <label>
            <h2>{props.walletType} Wallet Direction</h2>
            <input type="text" disabled={props.disabled} value={props.walletDir}/>
            </label>
            <button disabled={props.disabled}>SAVE</button>
        </section>
    );
}
export default WalletInfo