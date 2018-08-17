import axios from 'axios'
import {sortByDate,sortByLastShare} from '../utilities/DataManipulation'


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

        return(dispatch)=>{

            axios.get('https://api.nanopool.org/v1/eth/balance/'+wallet)
                    .then((response)=>{
                        details.balance=response.data.data
                        axios.get('https://api.nanopool.org/v1/eth/avghashrate/'+wallet)
                            .then((response)=>{
                                details.hashRate=response.data.data.h1
                                dispatch(updateWalletInfo(details))
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


export function updateHashOverDay(details){

    return{
        type:"UPDATE_HASH_OVER_DAY",
        payload:{hashOverDay:details}
    }

}

export function updateHashOverTime(details){

    sortByDate(details)

    return {

        type:"UPDATE_HASH_OVER_TIME",
        payload:{hashOverTime:details}

    }

}

export function updateMiningPayments(details){

    sortByDate(details)

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
    sortByLastShare(details)
    return{
        
        type:"UPDATE_WORKERS",
        payload:{workers:details}
    }
    
}