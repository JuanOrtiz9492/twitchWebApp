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

export function fetchData(){

    return{
        type:"FETCH_DATA"
    }

}

export function updateHashOverTime(details){
    return {
        type:"UPDATE_HASH_OVER_TIME",
        payload:{hashOverTime:details}
    }

}