import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter,    // BrowserRouter as Router
    Routes,            // es como es Switch
    Route,
    Navigate
} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';


import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import Error from '../components/error/Error'
import { login } from '../components/actions/auth';


const AppRouter = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {   // si no estoy autenticado regresara un null
        // console.log(user)
      if( user?.uid ) {   // ? si el objeto user tiene algo pregunta por la propiedad uid
        dispatch( login( user.uid, user.displayName ) );     // si necesito el email se puede extraer desde aquí
      }

    })

  }, [ dispatch ])
  


  return (
    <BrowserRouter>
        <div>
            <Routes> 


                <Route index element={ <JournalScreen />  } />

                <Route 
                    path="/auth"
                    element={ <AuthRouter /> }
                />
                

                <Route exact path="/auth/login" element={ <LoginScreen /> } />
                <Route exact path="/auth/register" element={ <RegisterScreen /> } />

              {/*   <Route exact path="/" element={ <JournalScreen /> } /> */}
                
                <Route exact path="/error" element={ <Error /> } />

                <Route exact path="*" element={ <Navigate replace to="/error" /> } />

            </Routes>
          </div>
    </BrowserRouter>
  )
}

export default AppRouter