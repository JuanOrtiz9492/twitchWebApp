export function nextPage(){

    return {

        type: "INCREASE_INDEX"

    }

}

export function previousPage(){

    return{

        type: "DECREASE_INDEX"

    }
}

export function mainPage(){

    return{

        type:"RESET_INDEX"

    }

}