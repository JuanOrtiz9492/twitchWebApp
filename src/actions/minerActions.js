import axios from 'axios'
import {sortListbyKey} from '../utilities/dataManipulation'


export function getAverageHashRate(wallet){

    return (dispatch)=>{
        return axios.get('https://api.nanopool.org/v1/eth/avghashrate/'+wallet)
        .then((response)=>{

            dispatch(updateHashOverDay(response.data.data))
             
        })
    }

}

export function getMiningHistory(wallet){

    return (dispatch)=>{
        return axios.get('https://api.nanopool.org/v1/eth/history/'+wallet)
        .then((response)=>{

            dispatch(updateHashOverTime(response.data.data))
             
        })
    }

}


export function getMiningPayments(wallet){

    return (dispatch)=>{
        return axios.get('https://api.nanopool.org/v1/eth/payments/'+wallet)
        .then((response)=>{

            dispatch(updateMiningPayments(response.data.data))
             
        })
    }

}

export function getWalletInfo(wallet){

        let details={

            address:wallet,
            balance:0,
            hashRate:0
            }
        let errorDetails={

            status:true,
            error:"",

        }

        return(dispatch)=>{

            axios.get('https://api.nanopool.org/v1/eth/balance/'+wallet)
                    .then((response)=>{

                        details.balance=response.data.data
                        errorDetails.status=response.data.status
                        errorDetails.error=response.data.status?"":wallet==""?response.data.data:response.data.error

                        axios.get('https://api.nanopool.org/v1/eth/avghashrate/'+wallet)
                            .then((response)=>{
                                details.hashRate=response.data.data.h1
                                dispatch(updateWalletInfo(details))
                                dispatch(updateErrorInfo(errorDetails))
                            })
                        })
        }

}

export function getWorkers(wallet){

    return (dispatch)=>{
        return axios.get('https://api.nanopool.org/v1/eth/workers/'+wallet)
        .then((response)=>{

            dispatch(updateworkers(response.data.data))
             
        })
    }

}


export function updateErrorInfo(details){

    return{

    type:"DATA_ERROR",
    payload:{
        status:details.status,
        error:details.error
    },

    }

}



export function updateHashOverDay(details){

    return{
        type:"UPDATE_HASH_OVER_DAY",
        payload:{hashOverDay:details}
    }

}

export function updateHashOverTime(details){

    sortListbyKey(details,"date")

    return {

        type:"UPDATE_HASH_OVER_TIME",
        payload:{hashOverTime:details}

    }

}

export function updateMiningPayments(details){
   
    sortListbyKey(details,"date")

    return{
        type:"UPDATE_MINING_PAYMENTS",
        payload:{miningPayments:details}
    }

}

export function updateWalletInfo(details){

    return{

        type:"UPDATE_ADDRESS",
        payload:{
            address:details.address,
            balance:details.balance,
            hashRate:details.hashRate
        }
    }

}

export function updateworkers(details){

    sortListbyKey(details,"lastShare")

    return{
        
        type:"UPDATE_WORKERS",
        payload:{workers:details}

    }
    
}