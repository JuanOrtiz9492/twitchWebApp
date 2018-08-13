import React from 'react'
import DateTable from '../uiComponents/DateTable'
import {connect} from 'react-redux'
import  axios from 'axios'
import * as actions from '../actions/minerActions'


class MiningPayments extends React.Component {
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
        axios.get('https://api.nanopool.org/v1/eth/payments/'+address)
            .then((response)=>{
                this.updateDataOnStore(response.data.data)
                this.updateIsReadyToShow(true)
            })
    }
    
    updateDataOnStore(data){
        
        let dataLength=data.length
        this.props.updateMiningPayments(data.slice(dataLength-6))
        this.updateTableData(this.props.miningHistory.miningPayments)

    }

    updateTableData(tableData){
        let newTableData= tableData.map((object)=>{
            return({...object,confirmed:object.confirmed?'YES':'NO'})
        })
        console.log(newTableData)
        if(this.mounted){

            this.setState({
                tableData:newTableData
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
        console.log(this.state.tableData)
        return(
            <React.Fragment>
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

export default connect(mapStateToProps,actions)(MiningPayments)