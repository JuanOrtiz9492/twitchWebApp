/*import React from 'react'
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
export default WalletInfo*/

import React from 'react'
import '../styles/WalletInfo.css'
class WalletInfo  extends React.Component{

    constructor(props){
        super(props)

        this.saveWallet = this.saveWallet.bind(this)
    }

    saveWallet(){

        this.props.newWalletAddress(document.getElementById('walletAddressField').value)

    }

    render(){

        return(
            <div className="WalletInfo">
                <label>
                <h2>{this.props.walletType} Wallet Direction</h2>
                <input id="walletAddressField" type="text" disabled={this.props.disabled} defaultValue={this.props.walletDir}/>
                </label>
                <button disabled={this.props.disabled} onClick={this.saveWallet}>SAVE</button>
            </div>
        )
    }
}
export default WalletInfo