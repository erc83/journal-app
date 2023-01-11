import { googleAuthProvider, auth } from "../../firebase/firebaseConfig";
import {
//    createUserWithEmailAndPassword,
//    signInWithEmailAndPassword,
//    signOut,
//    onAuthStateChanged,
//    GoogleAuthProvider,
//    sendPasswordResetEmail,
    signInWithPopup,
} from "firebase/auth";

import { types } from "../types/types"


export const startLoginEmailPassword = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch( login(123, "Pedro") );
        }, 3500)
        
    }
}

// var provider = new firebase.auth.GoogleAuthProvider();    version 8
// const provider = new GoogleAuthProvider();


export const startGoogleLogin = () => {
    return ( dispatch ) => {      // este es el cb
        signInWithPopup( auth, googleAuthProvider ) // esto retorna una promesa
            // .then( userCred => {
            //     console.log(userCred)
            // })
            .then( ( { user } ) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
            })
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