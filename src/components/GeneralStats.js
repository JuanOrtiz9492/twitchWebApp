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
                {this.props.views.map((view,index)=>
                    <button key={view} onClick={()=>this.newView(index)}>{view}</button>
                )}
            <AgrupedView typeOfView={this.props.typeOfView} text={this.props.typeOfView}/>
            </React.Fragment>
        )
    }

}
export default GeneralStats