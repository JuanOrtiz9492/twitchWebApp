import React from 'react'
import {connect} from 'react-redux'
import DateTable from '../uiComponents/DateTable'
import {listSlicer,pages} from '../utilities/DataManipulation'
import PaginationBar from '../uiComponents/PaginationBar'
import * as pageNavigation from '../actions/paginationBarActions'


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

    }

    return returnData

}
render(){

    let dataList=this.getDataTable(this.props.view)
    let pageIndex=this.props.pagination.paginationBarIndex
    let ItemsOnList = 5
    let totalPages = pages(dataList,ItemsOnList)

    return(
            <React.Fragment>

                <DateTable data={listSlicer(dataList,ItemsOnList,pageIndex)}/>

                <PaginationBar  nextPage={this.props.nextPage} 
                                previousPage={this.props.previousPage} 
                                pageIndex={pageIndex+1}
                                prevDisabled={pageIndex==0?true:false}
                                nextDisabled={pageIndex+1==totalPages?true:false} />

            </React.Fragment>

        )
    }
}

const mapStateToProps=(state)=>{

    return {
        walletDetails:state.walletDetails,
        miningHistory:state.miningHistoryReducer,
        workersList:state.workersReducer,
        pagination:state.paginationReducer
    }
}

export default connect(mapStateToProps,pageNavigation)(MiningTables)