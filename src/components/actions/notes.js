import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore'

import { types } from '../types/types'

// para grabar necesito el uid del usuario
export const startNewNote = () => {
    return async (dispatch, getState) => {    // segundo argumento para obtener el state
        
        // const state = getState();
        const { uid } = getState().auth;    
        //console.log( uid );
    
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await addDoc(collection(db, `${ uid }/journal/notes`), newNote )     
        // console.log(doc)
        dispatch( activeNote( doc.id, newNote ))  // hacemos el dispatch al reducer
    }
}

export const activeNote = ( id, note ) => ({      // return {}
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})


export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload:notes
})
