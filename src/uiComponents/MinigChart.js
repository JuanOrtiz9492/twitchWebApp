import React from 'react'
import {connect} from 'react-redux'
import  axios from 'axios'
import * as actions from '../actions/minerActions'




class MiningChart extends React.Component {
    constructor(props){
        super(props)

        this.state={
            tableData:[]
        }

        this.fetchData = this.fetchData.bind(this)
        this.updateDataOnStore = this.updateDataOnStore.bind(this)
        this.updateTableData = this.updateTableData.bind(this)
    }

    fetchData(){
        let address=this.props.walletDetails[0].walletAddress
        axios.get('https://api.nanopool.org/v1/eth/history/'+address)
            .then((response)=>{
                this.updateDataOnStore(response.data.data)
            })
    }
    updateDataOnStore(data){
        let dataLength=data.length
        this.props.updateHashOverTime(data.slice(dataLength-6))
        this.updateTableData(this.props.miningHistory[0].hashOverTime)
    }
    updateTableData(tableData){
        this.setState({
            tableData:tableData
        })
    }

    componentDidMount(){
        this.fetchData()
    }

    render(){
        this.state.tableData.map((item,index)=>{
            return console.log(Object.keys(item[index]),item[index].date)
        })
        return(
            <p>will be added a chart related with mining in here</p>
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