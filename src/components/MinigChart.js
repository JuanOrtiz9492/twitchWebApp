import React from 'react'
import HashDayTable from '../uiComponents/HashDayTable'
import {connect} from 'react-redux'
import * as actions from '../actions/minerActions'


class MiningChart extends React.Component {
    constructor(props){
        super(props)

        this.fetchData = this.fetchData.bind(this)
    }

    fetchData(){

            this.props.getAverageHashRate(this.props.walletDetails[0].walletAddress)

    }

    componentDidMount(){
        this.fetchData()
    }

    render(){
        let tableData = this.props.miningHistory.hashOverDay
        return(
            <React.Fragment>
                <HashDayTable data={tableData}/>
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

export default connect(mapStateToProps,actions)(MiningChart)