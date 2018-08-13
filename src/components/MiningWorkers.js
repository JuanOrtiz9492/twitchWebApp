import React from 'react'
import WorkersTable from '../uiComponents/WorkersTable'
import {connect} from 'react-redux'
import  axios from 'axios'
import * as actions from '../actions/minerActions'


class MiningWorkers extends React.Component {
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
        axios.get('https://api.nanopool.org/v1/eth/workers/'+address)
            .then((response)=>{
                this.updateDataOnStore(response.data.data)
                this.updateIsReadyToShow(true)
            })
    }
    
    updateDataOnStore(data){
        
        let dataLength=data.length
        this.props.workersUpdate(data.slice(dataLength-6))
        console.log(data.slice(dataLength-6))
        this.updateTableData(this.props.workersList[0].workersList)

    }

    updateTableData(tableData){

        if(this.mounted){

            this.setState({
                tableData:tableData
            })
        }
    }

    updateIsReadyToShow(isReady){

        if(this.mounted){
            this.setState({
                isReadyToShow:isReady
            })
        }
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
                {this.state.isReadyToShow?<WorkersTable data={this.state.tableData}/>:null}
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