const initialState={
    paginationBarIndex:0
}

const paginationReducer=(state=initialState,action)=>{

    switch (action.type){

        case "INCREASE_INDEX":

        return {...state, paginationBarIndex: ++state.paginationBarIndex}

        case "DECREASE_INDEX":

        return {...state, paginationBarIndex: --state.paginationBarIndex}

        case "RESET_INDEX":

        return {...state, paginationBarIndex : initialState.paginationBarIndex }

        default:

        return state

    }

}

export default paginationReducer