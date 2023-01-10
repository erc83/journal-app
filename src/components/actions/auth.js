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

// otra forma de usar mas simple
export const login = ( uid, displayName ) => ({
        type: types.login,
        payload: {
            uid, 
            displayName
        }
})