const initialState = [

    {
        accountBalance: 0,
        averageHashRate: 0,
        walletAddress: null,

    },
    {
        
        status:true,
        error:"",

    }
]

const walletDetails = ( state = initialState , action ) => {


    switch(action.type) {


        case "UPDATE_ADDRESS":

        return [{

            accountBalance : action.payload.balance,
            averageHashRate :action.payload.hashRate,
            walletAddress : action.payload.address

        }].concat( state.slice(1) )

        case "DATA_ERROR":
        
        return state.slice(0,1).concat(
            [{

            status :action.payload.status,
            error :action.payload.error,

            }])

        default :
        return state
        
    }
}

export default walletDetails