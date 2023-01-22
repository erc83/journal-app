import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'
import { loadNotes } from "../helpers/loadNotes";

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

        // aqui se borra la propiedad de la url que esta undefine aún antes de la extracción { ...note }
        if( !note.url ) {
            delete note.url;
        }

        // verificar que si quiero grabar algo que tiene null firebase no deja que se grabe
        // lo que hay que eliminar el objeto es el id que ya esta en firestore
        const noteToFirestore = { ...note }; // operador spread para separar toda la nota
        delete noteToFirestore.id           
        // console.log(noteToFirestore)    // para ver el objeto con las propiedades que tiene


        // await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore )    // se tiene que utilizar el id de la nota forma de guardar en la version 8
        await updateDoc(doc(db, `${ uid }/journal/notes`, note.id ), noteToFirestore )         // forma de guardar en la version 9 
        
        
    }   
}
