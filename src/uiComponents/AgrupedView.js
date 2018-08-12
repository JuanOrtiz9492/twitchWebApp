import React from 'react'
import MiningChart from '../components/MinigChart'
import MiningHistory from '../components/MiningHistory'
import MiningWorkers from '../components/MiningWorkers'

const AgrupedView =(props)=>{
    let viewReturned
    const view={

        'mining':  ()=><MiningChart/>,
        'history': ()=><MiningHistory/>,
        'workers': ()=><MiningWorkers/>

        }
    if(view[props.typeOfView]){
        viewReturned = view[props.typeOfView]()
    }else{
        viewReturned = null
    }
    return viewReturned
}
export default AgrupedView