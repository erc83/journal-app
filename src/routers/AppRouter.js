import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter,    // BrowserRouter as Router
    Routes,            // es como es Switch
    Route,
    Navigate
} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../firebase/firebaseConfig';
import { login } from '../components/actions/auth';
import { startLoadingNotes } from '../components/actions/notes';

import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import DashBoardRouter from './DashboardRouter';
import Error from '../components/error/Error'


const AppRouter = () => {

  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {   
        // console.log(user)
      if( user?.uid ) {   // ? si el objeto user tiene algo pregunta por la propiedad uid
        dispatch( login( user.uid, user.displayName ) );     // si necesito el email se puede extraer desde aquí
        setIsLoggedIn(true);

        // const notes = await loadNotes( user.uid );
        dispatch( startLoadingNotes( user.uid ) ); 

      }else{
        setIsLoggedIn(false);
      }

      setChecking(false);

    })

  }, [ dispatch, setChecking, setIsLoggedIn ])
  
  if(checking) {
    return(<h1>Espere....</h1>)
  }

  return (
    <BrowserRouter>
        <div>
            <Routes> 

                <Route path="/" element={ <AuthRouter  isAllowed={ isLoggedIn } redirectTo="/auth/login" />  }>
                  <Route path="/" element={ <JournalScreen />  } />
                </Route>
                   
                 <Route path="/auth" element={ <DashBoardRouter  isAllowed={ isLoggedIn } redirectTo="/" />  }>
                  <Route exact path="/auth/login" element={ <LoginScreen  /> } />
                  <Route exact path="/auth/register" element={ <RegisterScreen /> } />
                </Route>

              {/*   <Route exact path="/" element={ <JournalScreen /> } /> */}
                
                <Route exact path="/error" element={ <Error /> } />

                <Route exact path="*" element={ <Navigate replace to="/error" /> } />

            </Routes>
          </div>
    </BrowserRouter>
  )
}

export default AppRouter