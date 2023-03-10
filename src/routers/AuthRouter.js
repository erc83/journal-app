import React from 'react'
import { Navigate, Outlet } from "react-router-dom";


const AuthRouter = ( {isAllowed, children, redirectTo="/auth/login" } ) => {
  
  // const lastPath = redirectTo
  
  if( !isAllowed ) {
    return <Navigate to={ redirectTo } />
  }

  return <Outlet />
}

export default AuthRouter