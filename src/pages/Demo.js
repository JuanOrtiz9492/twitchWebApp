import React from 'react'
import {connect} from 'react-redux';
import Navbar from '../uiComponents/navBar'
import Footer from '../uiComponents/footer'
import WalletInfo from '../uiComponents/walletInfo'
import MinerStats from '../uiComponents/minerStats'
import GeneralStats from '../components/generalStats'
import * as actions from '../actions/minerActions'


class Demo extends React.Component{

    constructor(props){

        super(props)

        this.state = {

            disabled : "disable",
            walletDir : "0xb47450f4b0f82a9a2748561c6a3f8a781498e2da",
            walletType : "Ethereum",
            queriesList : [ "avghashrate" , "history" , "workers" , "payments" ],
            views : [ "mining" , "history" , "workers" , "payments" ],
            viewIndex : 0,
            currentView:  "mining"
        }

    }

    updateDisplayInfo = () => {

        this.props.getWalletInfo ( this.state.walletDir )

    }
    
    updateCurrentView = ( index ) => {

        this.setState ( (prevState ) => ( {  currentView: prevState.views[ index ],
                                            viewIndex : index } 
                                        ))
    }

    updateWalletAddress = ( newAddress ) => {

            this.setState ( { walletDir:newAddress } )

            this.props.getWalletInfo ( newAddress )
    }


    componentDidMount(){

        this.updateDisplayInfo()

        this.timerID = setInterval ( () => this.updateDisplayInfo(), 10000 )
        
    }

    componentWillUnmount() {

        clearInterval ( this.timerID ) 

      }

    render(){

        let walletDetails = this.props.walletDetails[0]
        const { 
                currentView,
                disabled,
                queriesList,
                views,
                viewIndex,
                walletDir,
                walletType } = this.state

        return(

            <React.Fragment>
                <div>
                    <Navbar/>
                    <section>
                        <WalletInfo walletType={walletType} 
                                    disabled={disabled} 
                                    walletDir={walletDir} 
                                    newWalletAddress={this.updateWalletAddress}
                        />
                    <MinerStats balance={walletDetails.accountBalance} hashRate={walletDetails.averageHashRate}/>
                    </section>

                    <GeneralStats 
                        updateCurrentView ={ this.updateCurrentView }
                        typeOfView = { currentView } 
                        views = { views }
                        query = { queriesList[ viewIndex ] }
                        walletAddress = { walletDir }
                    />
                </div>
                <Footer/>
            </React.Fragment>)
    }
} 

const mapStateToProps = ( state ) => {

    return {
         
            walletDetails : state.walletDetails,
    }
}


export default connect( mapStateToProps , actions ) ( Demo )