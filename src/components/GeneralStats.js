import React from 'react'
import AgrupedView from '../uiComponents/AgrupedView'
class GeneralStats extends React.Component{

    constructor(props){
        super(props)
        this.newView = this.newView.bind(this)
    }

    newView(index){
        this.props.updateCurrentView(index)
    }

    render(){
        return(
            <React.Fragment>
            <button onClick={()=>this.newView(0)}>mining</button> 
            <button onClick={()=>this.newView(1)}>history</button>
            <button onClick={()=>this.newView(2)}>workers</button>
            <AgrupedView typeOfView={this.props.typeOfView} text={this.props.typeOfView}/>
            </React.Fragment>
            /*getView(this.state.currentView,'mining')*/
        )
    }

}
export default GeneralStats