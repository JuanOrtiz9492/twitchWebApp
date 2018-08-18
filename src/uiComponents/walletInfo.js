import React from 'react'
import '../styles/walletInfo.css'
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