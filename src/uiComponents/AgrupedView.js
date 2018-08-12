import React from 'react'
import MiningChart from '../uiComponents/MinigChart'
import MiningHistory from '../uiComponents/MiningHistory'
import MiningWorkers from '../uiComponents/MiningWorkers'

const AgrupedView =(props)=>{
    let viewReturned
    const view={

        'mining':  ()=><MiningChart data={props.data}/>,
        'history': ()=><MiningHistory data={props.data}/>,
        'workers': ()=><MiningWorkers data={props.data}/>

        }
    if(view[props.typeOfView]){
        viewReturned = view[props.typeOfView]()
    }else{
        viewReturned = null
    }
    return viewReturned
}
export default AgrupedView