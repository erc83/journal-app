import Swal from 'sweetalert2';

import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'
import { loadNotes } from "../helpers/loadNotes";

import { types } from '../types/types'

// para grabar necesito el uid del usuario
export const startNewNote = () => {
    return async (dispatch, getState) => {    // segundo argumento para obtener el state
        
        const { uid } = getState().auth;    
    
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await addDoc(collection(db, `${ uid }/journal/notes`), newNote )     
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


// aqui ocupamos thunk
export const startLoadingNotes = (uid) => {
    return async ( dispatch ) => {

        const notes = await loadNotes( uid )
        dispatch( setNotes( notes ));

    }
}


export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload:notes
})


export const startSaveNote = ( note ) => {
    return async (dispatch, getState ) => {

        const { uid } = getState().auth;

        if( !note.url ) {
            delete note.url;
        }

        const noteToFirestore = { ...note }; // operador spread para separar toda la nota
        delete noteToFirestore.id           

        await updateDoc(doc(db, `${ uid }/journal/notes`, note.id ), noteToFirestore )       
        
        dispatch( refreshNote( note.id, noteToFirestore ) );   // para cambiar solo la nota que cambia
        
        Swal.fire('Saved', note.title, 'success');
    }   
}

export const refreshNote = ( id, note ) => ({
    type: types.notesUpdate,
    payload: {
        id,
        note: {
            id, ...note     
        }
    }
})