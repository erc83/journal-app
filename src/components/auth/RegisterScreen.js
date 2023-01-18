import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import validator from 'validator';

import { useForm } from '../../hooks/useForm'
import { removeError, setError } from '../actions/ui';
import { startRegisterWithEmailPasswordName } from '../actions/auth';

const RegisterScreen = () => {

  const dispatch = useDispatch(); // integrando dispatch

  // const state = useSelector( state => state.ui ); 
  // console.log( state )
  const { msgError } = useSelector( state => state.ui ); 
  console.log( msgError )

  const [ values, handleInputChange ] = useForm({
    name: 'Eric',
    email: "eric@gmail.com",
    password: "123456",
    password2: "123456"
  });

  const { name, email, password, password2 } = values;

  const handleRegister = (e) => {
    e.preventDefault()
    //console.log(name, email, password, password2)
    
    if(isFormValid() ) {
      //console.log('Formulario correcto')
      dispatch( startRegisterWithEmailPasswordName(email, password, name))
    }
  }
  
  const isFormValid = () => {

    if( name.trim().length ===0 ) {
      dispatch( setError('Name is required') )
      // console.log('Name is required')
      return false;
      
    }else if ( !validator.isEmail(email) ) { 
      dispatch( setError('Email is not valid') )
      // console.log('Email is not valid')
      return false

    }else if ( password !== password2 || password.length < 5 ) {
      dispatch( setError('Password should be at least 6 characters and match each other') )
      // console.log('Password should be at least 6 characters and match each other');
      return false 
    }

    dispatch( removeError() )

    return true
  }

  return (
    <div className="app__router__main">

    <div className='auth__box-container'>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={ handleRegister }>

      {
          msgError && 
            (
              <div className='auth__alert_error'>
                { msgError }
              </div>
            )
      }

        <input
          className="auth__input" 
          type="text"
          placeholder="Name"
          name="name"
          autoComplete='off'
          value={ name }
          onChange={ handleInputChange }
        />

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
        
        <input
          className="auth__input" 
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={ password2 }
          onChange={ handleInputChange }
        />

        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
          /* disabled={ true } */
        >
          Register
        </button>

       
        
        <Link
          to="/auth/login"
          className='link'
        >
          Already registered?
        </Link>

      </form>
    </div>
    </div>
  )
}

export default RegisterScreen