const initialState ={
    hashOverTime:[],
    hashOverDay:{},
    miningPayments:[]
}

const miningHistoryReducer =(state=initialState,action)=>{
switch(action.type)
{
    case "UPDATE_HASH_OVER_TIME":
    
    return {...state,hashOverTime:action.payload.hashOverTime}
   

    case "UPDATE_HASH_OVER_DAY":

    return {...state,hashOverDay:action.payload.hashOverDay}


    case "UPDATE_MINING_PAYMENTS":

    return {...state,miningPayments:action.payload.miningPayments}

    default:
    return state
}
}

export default miningHistoryReducer