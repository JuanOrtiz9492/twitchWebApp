
export function updateHashOverDay(details){

    return{
        type:"UPDATE_HASH_OVER_DAY",
        payload:{hashOverDay:details}
    }

}

export function updateHashOverTime(details){
    return {
        type:"UPDATE_HASH_OVER_TIME",
        payload:{hashOverTime:details}
    }

}

export function updateMiningPayments(details){

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

export function workersUpdate(details){

    return{
        
        type:"UPDATE_WORKERS",
        payload:{workers:details}
    }
    
}