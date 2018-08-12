const initialState =[{
    workersList:[]
}]

const workersReducer =(state=initialState,action)=>{
    switch(action.type){
        case "UPDATE_WORKERS":
    
            return [{workersList:action.payload.workers}]

        default:
        
            return state
    }
}

export default workersReducer