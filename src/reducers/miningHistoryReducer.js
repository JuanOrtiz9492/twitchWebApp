const initialState =[{
    hashOverTime:[],
}]

const miningHistoryReducer =(state=initialState,action)=>{
switch(action.type)
{
    case "UPDATE_HASH_OVER_TIME":
    
    return [{hashOverTime:[action.payload.hashOverTime]}]

    default:
    return state
}
}

export default miningHistoryReducer