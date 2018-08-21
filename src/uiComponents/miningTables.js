import React from 'react'
import {connect} from 'react-redux'
import DateTable from '../uiComponents/dateTable'
import {listSlicer,pages} from '../utilities/dataManipulation'
import PaginationBar from '../uiComponents/paginationBar'
import * as pageNavigation from '../actions/paginationBarActions'


class MiningTables extends React.Component{

    constructor( props ){
        super( props )
    }

 getDataTable = (data) =>{

    let returnData = undefined

    const dataStore = {

        "mining" : () => ([this.props.miningHistory.hashOverDay]),
        "history" : () => (this.props.miningHistory.hashOverTime),
        "workers" : () => (this.props.workersList[0].workersList),
        "payments" : () => (this.props.miningHistory.miningPayments)
    }

    if (dataStore[data]) {

        returnData = dataStore [data] ()
    }

    return returnData

}
render(){

    const { view , pagination , nextPage , previousPage } = this.props
    const dataList = this.getDataTable ( view )
    const pageIndex = pagination.paginationBarIndex
    const ItemsOnList = 5
    const totalPages = pages(dataList,ItemsOnList)

    return(
            <React.Fragment>

                <DateTable data = { listSlicer ( dataList , ItemsOnList , pageIndex ) }/>

                <PaginationBar  nextPage = { nextPage } 
                                previousPage = { previousPage } 
                                pageIndex = { pageIndex+1 }
                                prevDisabled = { pageIndex == 0 ? true : false }
                                nextDisabled = { pageIndex+1 == totalPages ? true : false }/>

            </React.Fragment>

        )
    }
}

const mapStateToProps = ( state ) => {

    return {
        walletDetails : state.walletDetails,
        miningHistory : state.miningHistoryReducer,
        workersList : state.workersReducer,
        pagination : state.paginationReducer
    }
}

export default connect( mapStateToProps , pageNavigation ) ( MiningTables )