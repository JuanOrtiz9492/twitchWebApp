const initialState =[{
    hashOverTime:{},
    hashOverDay:{}
}]

const miningHistoryReducer =(state=initialState,action)=>{
switch(action.type)
{
    case "UPDATE_HASH_OVER_TIME":
    
    return [{hashOverTime:[action.payload.hashOverTime]},...state.slice(1)]

    case "UPDATE_HASH_OVER_DAY":

    return [
        ...state.slice(0,1),
        {hashOverDay:[action.payload.hashOverDay]}
    ]

    default:
    return state
}
}

export default miningHistoryReducer