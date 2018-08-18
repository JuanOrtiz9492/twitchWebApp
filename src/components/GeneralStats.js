import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {Nav,NavLink} from 'reactstrap'
import MiningTables from './MiningTables'
import NoWalletAddress from '../uiComponents/noWalletAddress'
import '../styles/generalStats.css'
class GeneralStats extends React.Component{

    constructor(props){
        super(props)
        this.state={
            newPropAvailable:false,
            walletDir:undefined,
            queryCall:undefined,
        }

        this.newView = this.newView.bind(this)
        this.fetchData=this.fetchData.bind(this)
    }

    static getDerivedStateFromProps(nextProps, PrevState){

        let returnState={newPropAvailable:false}

        if (nextProps.walletAddress !== PrevState.walletDir) {

            returnState={
                walletDir:nextProps.walletAddress,
                newPropAvailable:true
            }

        }
        else if (nextProps.query !== PrevState.queryCall) {

            returnState ={
                queryCall: nextProps.query,
                newPropAvailable: true
            }

        }

      return returnState

    }

    fetchData(query){

        const queryCalls={

            "avghashrate":  ()=>(this.props.getAverageHashRate(this.props.walletAddress)),
            "history":      ()=>(this.props.getMiningHistory(this.props.walletAddress)),
            "workers":      ()=>(this.props.getWorkers(this.props.walletAddress)),
            "payments":     ()=>(this.props.getMiningPayments(this.props.walletAddress)),

        }

        if(queryCalls[query]){

            return queryCalls[query]()

        }

        
}

    newView(index){
        
        Array.from(document.getElementsByClassName('viewSelector')).forEach((tab)=>{
            tab.classList.remove('selectedTab')
        })

        document.getElementsByClassName('viewSelector')[index].classList.add('selectedTab')
        this.props.mainPage()
        this.props.updateCurrentView(index)
    }

componentDidUpdate(){

    if(this.state.newPropAvailable){

        this.fetchData(this.props.query)

    }

}


componentDidMount(){
    
    this.fetchData(this.props.query)
    document.getElementsByClassName('viewSelector')[0].classList.add('selectedTab')

}

    render(){
        console.log(this.props.walletDetails[1])
        return(
            <div className="infoContainer">
                <Nav tabs role="navigation">
                {this.props.views.map((view,index)=>
                    <NavLink className="viewSelector" key={view} onClick={()=>this.newView(index)}>{view}</NavLink> )}
                </Nav>
                {this.props.walletDetails[1].status?<MiningTables view={this.props.typeOfView}/>:<NoWalletAddress warning={this.props.walletDetails[1].error}/>}
            </div>
        )
    }

}

const mapStateToProps = (state)=>{

    return{
        walletDetails:state.walletDetails,
        miningHistory:state.miningHistoryReducer
    }

}

export default connect(mapStateToProps,actions)(GeneralStats)