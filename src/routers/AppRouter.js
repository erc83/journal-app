import React from 'react'
import {
    BrowserRouter,    // BrowserRouter as Router
    Routes,            // es como es Switch
    Route,
    Navigate
} from 'react-router-dom';


import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import Error from '../components/error/Error'


const AppRouter = () => {
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