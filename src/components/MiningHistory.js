import React from 'react'
import DateTable from '../uiComponents/DateTable'
import {connect} from 'react-redux'
import * as actions from '../actions/minerActions'



class MiningHistory extends React.Component {
    constructor(props){
        super(props)

        this.fetchData = this.fetchData.bind(this)

    }

    fetchData(){

            this.props.getMiningHistory(this.props.walletDetails[0].walletAddress)
    }


    componentDidMount(){

        this.fetchData()
    }


    render(){

        let historyList=this.props.miningHistory.hashOverTime
        let listLength = historyList.length
        return(
            <React.Fragment>
                <DateTable data={historyList.slice(listLength-6)}/>
            </React.Fragment>
        );
    }
    
}

const mapStateToProps=(state)=>{

    return {
        walletDetails:state.walletDetails,
        miningHistory:state.miningHistoryReducer
    }
}

export default connect(mapStateToProps,actions)(MiningHistory)