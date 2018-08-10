import React from 'react'
import Navbar from '../uiComponents/navBar'
import axios from 'axios'
const MiningMonitor =()=>{
    axios.get('https://api.nanopool.org/v1/eth/balance/0xb47450f4b0f82a9a2748561c6a3f8a781498e2da').then((response)=>{
        console.log("success",response)
    }).catch((e)=>{
        console.log("failed",e)
    })
    return(
        <React.Fragment>
            <Navbar/>
            <h2>here i will show some stats</h2>
        </React.Fragment>
    );
}
export default MiningMonitor