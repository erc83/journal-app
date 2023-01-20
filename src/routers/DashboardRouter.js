import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

//public router
const AuthRouter = ( {isAllowed, children, redirectTo="/" } ) => {
  
  // const lastPath = redirectTo
  
  if( isAllowed ) {
    return <Navigate to={ redirectTo } />
  }

  return <Outlet />
}

export default AuthRouter