import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux';
import Navbar from '../uiComponents/navBar'
import WalletInfo from '../components/WalletInfo'
import MinerStats from '../uiComponents/MinerStats'
import GeneralStats from './GeneralStats'
import * as actions from '../actions/minerActions'

class MiningMonitor extends React.Component{

    constructor(props){
        super(props)
        this.state={
            balance:0,
            disabled:"",
            hashRate:0,
            isReadyToShow:false,
            walletDir:"0xb47450f4b0f82a9a2748561c6a3f8a781498e2da",
            walletType:"Ethereum",
            views:["mining","history","workers","payments"],
            currentView:"mining"
        }
        this.updateCurrentView = this.updateCurrentView.bind(this)
        this.updateIsReadyToShow = this.updateIsReadyToShow.bind(this)
        this.updateWalletAddress = this.updateWalletAddress.bind(this)
        this.getWalletInfo = this.getWalletInfo.bind(this)

    }
    getWalletInfo(){
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
                    
                    if(!this.state.isReadyToShow && !isNaN(details.balance)){
                        
                        this.props.updateWalletInfo(details)
                        this.updateIsReadyToShow(true)
                    }
                }
            )
        }).catch((e)=>{
            console.log("failed",e)
        })
    }
    componentDidMount(){
        this.mounted=true;
        this.getWalletInfo()
       /* this.timerID = setInterval(
            () => this.getWalletInfo(),
            10000
          );*/
        
    }

    componentDidUpdate(){
        
        this.getWalletInfo()
    }

    componentWillUnmount() {
        this.mounted=false;
        //clearInterval(this.timerID);
      }

    updateCurrentView(index) {
        if(this.mounted) {

            this.setState((prevState)=>{

                return  {   
                    currentView: prevState.views[index]
                }
            })

        }
    }

    updateIsReadyToShow(isReady){

        if(this.mounted) {

            this.setState({
                isReadyToShow:isReady
            })
        }
    }

    updateWalletAddress(newAddress){
        console.log("this is the new address----->",newAddress)
        if(this.mounted) {

            this.setState({
                walletDir:newAddress,
                isReadyToShow:false
            })
        }
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
                        newWalletAddress={this.updateWalletAddress}
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


export default connect(mapStateToProps,actions)(MiningMonitor)