const initialState =[{

        accountBalance: 0,
        averageHashRate: 0,
        walletAddress: null,

    },
    {
        
        fetchingData:false,
        fetchedData:false,
        error:null,

    }
]
const walletDetails =(state=initialState,action)=>{
    switch(action.type)
    {
        case "UPDATE_ADDRESS":

        return [{

            accountBalance: action.payload.balance,
            averageHashRate:action.payload.hashRate,
            walletAddress: action.payload.address
        }].concat(initialState.slice(1))

        case "FETCH_DATA":
        
        return state.slice(0,1).concat([{

                fetchingData:true,
                fetchedData:false,
                error:null,

        }])

        case "RECIVED_DATA":

        return state.slice(0,1).concat([{

            fetchingData:false,
            fetchedData:true,
            error:null,

    }])

        default:
        return state
    }
}

export default walletDetails