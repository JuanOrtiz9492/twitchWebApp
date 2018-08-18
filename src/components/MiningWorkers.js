import React from 'react'
import DateTable from '../uiComponents/DateTable'
import {connect} from 'react-redux'
import * as actions from '../actions/minerActions'


class MiningWorkers extends React.Component {
    constructor(props){
        super(props)

        this.fetchData = this.fetchData.bind(this)

    }

    fetchData(){
   
            this.props.getWorkers(this.props.walletDetails[0].walletAddress)
    }


    componentDidMount(){

        this.fetchData()
    }

    render(){
        let workersList=this.props.workersList[0].workersList
        let listLength = workersList.length
        return(
            <React.Fragment>
                <DateTable data={workersList.slice(listLength-6)}/>
            </React.Fragment>
        );
    }
    
}

const mapStateToProps=(state)=>{

    return {
        walletDetails:state.walletDetails,
        miningHistory:state.miningHistoryReducer,
        workersList:state.workersReducer
    }
}

export default connect(mapStateToProps,actions)(MiningWorkers)