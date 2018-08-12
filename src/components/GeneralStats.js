import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import * as actions from '../actions/minerActions'
import AgrupedView from '../uiComponents/AgrupedView'
class GeneralStats extends React.Component{

    constructor(props){
        super(props)

        this.newView = this.newView.bind(this)

    }

    newView(index){
        this.props.updateCurrentView(index)
    }

    render(){
        return(
            <React.Fragment>
                {this.props.views.map((view,index)=>
                    <button key={view} onClick={()=>this.newView(index)}>{view}</button>
                )}
            <AgrupedView typeOfView={this.props.typeOfView} data={this.props.typeOfView}/>
            </React.Fragment>
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