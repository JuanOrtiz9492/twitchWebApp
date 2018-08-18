import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/minerActions'
import AgrupedView from '../uiComponents/AgrupedView'
import {Nav,NavLink} from 'reactstrap'
class GeneralStats extends React.Component{

    constructor(props){
        super(props)
        
        this.newView = this.newView.bind(this)

    }

    newView(index){
        
        Array.from(document.getElementsByClassName('viewSelector')).forEach((tab)=>{
            tab.classList.remove('selectedTab')
        })

        document.getElementsByClassName('viewSelector')[index].classList.add('selectedTab')
        this.props.updateCurrentView(index)
    }

componentDidMount(){
    document.getElementsByClassName('viewSelector')[0].classList.add('selectedTab')
}

    render(){
        return(
            <React.Fragment>
                <Nav tabs role="navigation">
                {this.props.views.map((view,index)=>
                    <NavLink className="viewSelector" key={view} onClick={()=>this.newView(index)}>{view}</NavLink>
                )}</Nav>
            <AgrupedView typeOfView={this.props.typeOfView}/>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state)=>{

    return{
        walletDetails:state.walletDetails,
        miningHistory:state.miningHistoryReducer
    }

}

export default connect(mapStateToProps,actions)(GeneralStats)