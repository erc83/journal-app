import { types } from "../types/types";

/*
    {
        uid: 'asdfeflkj12312131231',
        name: 'Eric 
    }
*/

const initialState = {}

export const authReducer = ( state = initialState , action ) => {   // state inicializado como obj vacio
    switch ( action.type ) {
        case types.login:
                return {
                    uid: action.payload.uid,
                    name: action.payload.displayName,                
                }
            
        case types.logout:
                return { }
  
        default:
            return state;
    }
}