

/*

    {
        notes: [],
        active: null,
        active: {
            id: 'LKJASKLJFALKSJFKj10809q8we',
            title: '',
            body: '',
            imageUrl: '',
            date: 1234548651354
        }
    }


*/

import { types } from '../types/types'


const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state= initialState , action) => {

    switch (action.type) {
        case types.notesActive:
            return {
                ...state, 
                active: { ...action.payload }
            }
        
    
        default:
            return state;;
    }


}


