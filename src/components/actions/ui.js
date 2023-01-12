import { types } from "../types/types"


export const setError = (err) => ({      // con return implicito
    type: types.uiSetError,
    payload: err
})


export const removeError = () => ({      // con return implicito
    type: types.uiRemoveError
})


/*
export const setError1 = ( err )=> {
    return {
        type: types.uiSetError,
        payload: err
    }
}
export const removeError1 = () => {
    return {
        type: types.uiRemoveError
    }
}
*/

