

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

        case types.notesAddNew:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        
        case types.notesLoad:
            // console.log(action.payload)  // estamos recibiendo una promesa
            return {
                ...state, notes: [ ...action.payload ]
            }    

        
        case types.notesUpdate:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }

        case types.notesDelete:
            return {
                ...state,     // pasamos el state para no perder el state anterior
                active:null,
                notes: state.notes.filter( note => note.id !== action.payload )
            }

        case types.notesLogoutCleaning:
            return {
                ...state,
                active:null,
                notes: []    
            }
        

        default:
            return state;;
    }


}


