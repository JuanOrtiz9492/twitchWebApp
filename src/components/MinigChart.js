import React from 'react'
import HashDayTable from '../uiComponents/HashDayTable'
import {connect} from 'react-redux'
import  axios from 'axios'
import * as actions from '../actions/minerActions'


class MiningChart extends React.Component {
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
        axios.get('https://api.nanopool.org/v1/eth/avghashrate/'+address)
            .then((response)=>{
                this.updateDataOnStore(response.data.data)
                this.updateIsReadyToShow(true)
            })
    }
    updateDataOnStore(data){
        console.log(data)
        this.props.updateHashOverDay(data)
        if(this.mounted){this.updateTableData(this.props.miningHistory[1].hashOverDay[0])}
        

    }
    updateTableData(tableData){
        console.log(tableData)
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
        console.log(this.state.tableData)
        return(
            <React.Fragment>
                <p>will be added a chart related with mining in here</p>
                {this.state.isReadyToShow?<HashDayTable data={this.state.tableData}/>:null}
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