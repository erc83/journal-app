import React from 'react'
import {
    BrowserRouter,    // BrowserRouter as Router
    Routes,            // es como es Switch
    Route,
    Navigate
} from 'react-router-dom';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';



const AppRouter = () => {
  return (
    <BrowserRouter>
        <div>
            <Routes> 
                <Route 
                    path="/auth"
                    element={ <AuthRouter /> }
                />
                <Route 
                    exact
                    path="/"
                    element={ <JournalScreen /> }
                />
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter