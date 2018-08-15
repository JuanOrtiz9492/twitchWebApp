import React from 'react'
import DateTable from '../uiComponents/DateTable'
import {connect} from 'react-redux'
import * as actions from '../actions/minerActions'


class MiningPayments extends React.Component {
    constructor(props){
        super(props)

        this.fetchData = this.fetchData.bind(this)
    }

    fetchData(){

            this.props.getMiningPayments(this.props.walletDetails[0].walletAddress)

    }

    componentDidMount(){
        this.fetchData()
    }

    render(){

        let miningPayments =this.props.miningHistory.miningPayments
        let listLength = miningPayments.length

        return(
            <React.Fragment>
                <DateTable data={miningPayments.slice(listLength-6)}/>
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

export default connect(mapStateToProps,actions)(MiningPayments)