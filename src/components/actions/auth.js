import { googleAuthProvider, auth } from "../../firebase/firebaseConfig";
import {
    createUserWithEmailAndPassword,
//    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
//    onAuthStateChanged,
//    GoogleAuthProvider,
//    sendPasswordResetEmail,
    updateProfile,
    signInWithPopup,
} from "firebase/auth";

import { types } from "../types/types"
import { finishLoading, startLoading } from "./ui";


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch( startLoading() );  

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch( login(user.uid, user.displayName));

                dispatch( finishLoading() );
                
            })
            .catch((err) => {
                alert(err.message)
                dispatch( finishLoading() );
            })

    }
}



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

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    
    return ( dispatch ) => {

         createUserWithEmailAndPassword(auth, email, password)
            .then( async ( {user} ) => {
                
                await updateProfile(auth.currentUser, {
                    displayName: name
                })
                // console.log(user)
                dispatch(
                    login( user.uid, user.displayName )
                )
            })
            .catch( (err) => {
                alert(err.message)
            })

    }
}


export const startLogout = () => {
    return async (dispatch) => {
        await signOut( auth );
        
        dispatch( logout() );
    }
}

export const logout = () => ({
    type: types.logout
})
