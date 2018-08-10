import React from 'react'
import axios from 'axios'
import Navbar from '../uiComponents/navBar'
import WalletInfo from '../uiComponents/WalletInfo'
import MinerStats from '../uiComponents/MinerStats'

class Demo extends React.Component{

    constructor(props){
        super(props)
        this.state={
            balance:0,
            disabled:"disable",
            hashRate:0,
            walletDir:"0xb47450f4b0f82a9a2748561c6a3f8a781498e2da",
            walletType:"Ethereum",
        }
        this.updateBalance = this.updateBalance.bind(this);
        this.updateHashRate = this.updateHashRate.bind(this);
    }
    componentDidMount(){
        axios.get('https://api.nanopool.org/v1/eth/balance/'+this.state.walletDir).then((response)=>{
            console.log(response)
            this.updateBalance(response.data.data)
            axios.get('https://api.nanopool.org/v1/eth/avghashrate/'+this.state.walletDir).then(
                (response)=>{
                    console.log("success",response.data.data.h1)
                    this.updateHashRate(response.data.data.h1)
                }
            )
        }).catch((e)=>{
            console.log("failed",e)
        })
    }

    updateBalance(newBalance){
        console.log("balance", newBalance)
        this.setState({balance:newBalance})
    }

    updateHashRate(newHashRate){
        console.log("hashRate",newHashRate)
        this.setState({hashRate:newHashRate})
    }

    render(){
    return(
        <React.Fragment>
            <Navbar/>
            <WalletInfo walletType={this.state.walletType} 
                        disabled={this.state.disabled} 
                        walletDir={this.state.walletDir} 
            />
            <MinerStats balance={this.state.balance} hashRate={this.state.hashRate}/>

        </React.Fragment>
    )
    }
} 

export default Demo