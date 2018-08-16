import React from 'react'
import {connect} from 'react-redux'
import DateTable from '../uiComponents/DateTable'


class MiningTables extends React.Component{

    constructor(props){
        super(props)

        this.getDataTable = this.getDataTable.bind(this)
    }

 getDataTable=(data)=>{

    let returnData=undefined

    const dataStore = {

        "mining":()=>([this.props.miningHistory.hashOverDay]),
        "history":()=>(this.props.miningHistory.hashOverTime),
        "workers":()=>(this.props.workersList[0].workersList),
        "payments":()=>(this.props.miningHistory.miningPayments)
    }

    if (dataStore[data]) {
        returnData=dataStore[data]()
        console.log(returnData)
    }

    console.log(returnData)
    return returnData

}
render(){
    return(

            <DateTable data={this.getDataTable(this.props.view)}/>

        )
    }
}

const mapStateToProps=(state)=>{

    return {
        walletDetails:state.walletDetails,
        miningHistory:state.miningHistoryReducer,
        workersList:state.workersReducer
    }
}

export default connect(mapStateToProps)(MiningTables)