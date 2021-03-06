import React from 'react'
import {connect} from 'react-redux';
import Navbar from '../uiComponents/navBar'
import Footer from '../uiComponents/Footer'
import WalletInfo from '../components/WalletInfo'
import MinerStats from '../uiComponents/MinerStats'
import GeneralStats from '../components/GeneralStats'
import * as actions from '../actions/minerActions'

class Demo extends React.Component{

    constructor(props){
        super(props)
        this.state={
            disabled:"disable",
            walletDir:"0xb47450f4b0f82a9a2748561c6a3f8a781498e2da",
            walletType:"Ethereum",
            views:["mining","history","workers","payments"],
            currentView:"mining"
        }
        this.updateCurrentView = this.updateCurrentView.bind(this)
        this.updateWalletAddress = this.updateWalletAddress.bind(this)
        this.updateDisplayInfo = this.updateDisplayInfo.bind(this)

    }

    updateDisplayInfo(){

        this.props.getWalletInfo(this.state.walletDir)

    }
    
    componentDidMount(){
        this.updateDisplayInfo()
       /* this.timerID = setInterval(
            () => this.getWalletInfo(),
            10000
          );*/
        
    }

    componentWillUnmount() {
        //clearInterval(this.timerID);
      }

    updateCurrentView(index) {

        this.setState((prevState)=>({ currentView: prevState.views[index] }))

    }

    updateWalletAddress(newAddress){

            this.setState({ walletDir:newAddress })
            this.props.getWalletInfo(newAddress)
    }

    render(){
        let walletDetails = this.props.walletDetails[0]
    return(
        <React.Fragment>

            <Navbar/>

            <section>
                <WalletInfo walletType={this.state.walletType} 
                            disabled={this.state.disabled} 
                            walletDir={this.state.walletDir} 
                            newWalletAddress={this.updateWalletAddress}
                />
                <MinerStats balance={walletDetails.accountBalance} hashRate={walletDetails.averageHashRate}/>
            </section>

            <GeneralStats 
                updateCurrentView={this.updateCurrentView}
                typeOfView={this.state.currentView} 
                views={this.state.views}
            />

            <Footer/>
            
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