import React from 'react'
import DateTable from '../uiComponents/DateTable'
import {connect} from 'react-redux'
import  axios from 'axios'
import * as actions from '../actions/minerActions'




class MiningHistory extends React.Component {
    constructor(props){
        super(props)

        this.state={
            isReadyToShow:false,
            tableData:[]
        }

        this.fetchData = this.fetchData.bind(this)
        this.updateDataOnStore = this.updateDataOnStore.bind(this)
        this.updateTableData = this.updateTableData.bind(this)
        this.updateIsReadyToShow = this.updateIsReadyToShow.bind(this)
    }

    fetchData(){
        let address=this.props.walletDetails[0].walletAddress
        axios.get('https://api.nanopool.org/v1/eth/history/'+address)
            .then((response)=>{
                this.updateDataOnStore(response.data.data)
                this.updateIsReadyToShow(true)
            })
    }
    
    updateDataOnStore(data){

        let dataLength=data.length
        this.props.updateHashOverTime(data.slice(dataLength-6))
        if(this.mounted){this.updateTableData(this.props.miningHistory[0].hashOverTime[0])}

    }

    updateTableData(tableData){

        this.setState({
            tableData:tableData
        })
    }

    updateIsReadyToShow(isReady){
        this.setState({
            isReadyToShow:isReady
        })
    }

    componentDidMount(){
        this.mounted=true;
        this.fetchData()
    }
    componentWillUnmount(){
        this.mounted=false;
    }

    render(){
        console.log(this.state.isReadyToShow)
        return(
            <React.Fragment>
                <p>will be added a chart related with mining in here</p>
                {this.state.isReadyToShow?<DateTable data={this.state.tableData}/>:null}
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