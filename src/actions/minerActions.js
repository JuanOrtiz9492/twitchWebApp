export function updateWalletInfo(details){
    
    return{
        type:"UPDATE_ADDRESS",
        payload:{
            addres:details.address,
            balance:details.balance,
            hashRate:details.hashRate
        }
    }

}