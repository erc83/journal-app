import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startGoogleLogin, startLoginEmailPassword } from '../actions/auth';

const LoginScreen = () => {

  const dispatch = useDispatch();
  // const state = useSelector( state => state ); 
  const { loading } = useSelector( state => state.ui ); 

  const [ values, handleInputChange ] = useForm({
    email: "eric@gmail.com",
    password: "123456"
  });

  // desestructurando el objeto del hook del formulario
  const { email, password } = values;
  
  const handleLogin = (e) => {
    e.preventDefault()
    // console.log(email, password)
    dispatch( startLoginEmailPassword( email, password ) )
  }

  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() );
  }

  return (
    <div className="app__router__main">

      <div className='auth__box-container'>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={ handleLogin } >

        <input
          className="auth__input" 
          type="text"
          placeholder="Email"
          name="email"
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
          />

        <input
          className="auth__input" 
          type="password"
          placeholder="Password"
          name="password"
          value={ password }
          onChange={ handleInputChange }
          />

        <button
          type="submit"
          className="btn btn-primary btn-block"
          /* disabled={ true } */
          disabled={ loading }
          >
          Login
        </button>

        <div className='auth__social_networks'>
          <p>Login with social networks</p>
          
          <hr />

          <div 
            className="google-btn"
            onClick={ handleGoogleLogin }
          >
              <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                  <b>Sign in with google</b>
              </p>
          </div>
        </div>
        
        <Link
          to="/auth/register"
          className='link'
          >
          Create new account
        </Link>

      </form>
            </div>
    </div>
  )
}

export default LoginScreen