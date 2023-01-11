import { types } from "../types/types"

/*
export const login = ( uid, displayName ) => {
    return {
        type: types.login,
        payload: {
            uid, 
            displayName
        }
    }
}
*/


export const startLoginEmailPassword = () => {
    return (dispatch) => {

        setTimeout(() => {
            dispatch( login(123, "Pedro") );
        }, 3500)

    }
}

// otra forma de usar mas simple
export const login = ( uid, displayName ) => ({
        type: types.login,
        payload: {
            uid, 
            displayName
        }
})