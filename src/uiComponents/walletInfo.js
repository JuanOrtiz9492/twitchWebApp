import React from 'react'
import '../styles/walletInfo.css'
class WalletInfo  extends React.Component{

    constructor(props){
        super(props)

        this.saveWallet = this.saveWallet.bind(this)
    }

    saveWallet= () => {

        this.props.newWalletAddress( document.getElementById ( 'walletAddressField' ).value )
    }

    render(){

        const { walletType , disabled , walletDir } = this.props
        return(
            <div className = "WalletInfo">

                <label>
                    <h2> { walletType } Wallet Direction </h2>

                    <input  id="walletAddressField" 
                            type="text"    
                            disabled = { disabled } 
                            defaultValue = { walletDir }/>

                </label>

                <button disabled = { disabled } onClick = { this.saveWallet }> SAVE </button>
                
            </div>
        )
    }
}
export default WalletInfo