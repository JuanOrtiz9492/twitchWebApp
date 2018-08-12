import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux';
import Navbar from '../uiComponents/navBar'
import WalletInfo from '../uiComponents/WalletInfo'
import MinerStats from '../uiComponents/MinerStats'
import GeneralStats from './GeneralStats'
import * as actions from '../actions/minerActions'

class Demo extends React.Component{

    constructor(props){
        super(props)
        this.state={
            balance:0,
            disabled:"disable",
            hashRate:0,
            isReadyToShow:false,
            walletDir:"0xb47450f4b0f82a9a2748561c6a3f8a781498e2da",
            walletType:"Ethereum",
            views:["mining","history","workers","payments"],
            currentView:"mining"
        }
        this.updateCurrentView = this.updateCurrentView.bind(this)
        this.updateIsReadyToShow = this.updateIsReadyToShow.bind(this)
        this.getWalletInfo = this.getWalletInfo.bind(this)

    }
    getWalletInfo(){
        this.props.fetchData()
        let details={

            address:this.state.walletDir,
            balance:0,
            hashRate:0

        }
        axios.get('https://api.nanopool.org/v1/eth/balance/'+this.state.walletDir)
            .then((response)=>{

                details.balance=response.data.data
                axios.get('https://api.nanopool.org/v1/eth/avghashrate/'+this.state.walletDir)
                    .then((response)=>{

                    details.hashRate=response.data.data.h1
                    this.props.updateWalletInfo(details)
                    this.updateIsReadyToShow()
                }
            )
        }).catch((e)=>{
            console.log("failed",e)
        })
    }
    componentDidMount(){
        this.getWalletInfo()
    }

    updateCurrentView(index) {
        this.setState((prevState)=>{
            return{   
                currentView: prevState.views[index]
            }
        });
    }

    updateIsReadyToShow(){
        this.setState({
            isReadyToShow:!this.props.walletDetails[1].fetchingData
        })
    }

    render(){
        let walletDetails = this.props.walletDetails[0]
        console.log(this.state.isReadyToShow)
    return(
        <React.Fragment>
            <Navbar/>
            <WalletInfo walletType={this.state.walletType} 
                        disabled={this.state.disabled} 
                        walletDir={this.state.walletDir} 
            />
            <MinerStats balance={walletDetails.accountBalance} hashRate={walletDetails.averageHashRate}/>
            {this.state.isReadyToShow?
            <GeneralStats 
                updateCurrentView={this.updateCurrentView}
                typeOfView={this.state.currentView} 
                views={this.state.views}
            />:null}
        </React.Fragment>
    )
    }
} 

const mapStateToProps = (state)=>{
    return{
        walletDetails:state.walletDetails,
    }
}


export default connect(mapStateToProps,actions)(Demo)