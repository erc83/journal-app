import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';


import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {

  //const state = useSelector( state => state );
  const { active: note } = useSelector( state => state.notes );   // aqui renombramos la nota activa
  // console.log( note , "nota activa")

  const [values, handleInputChange ] = useForm( note);  // recibe el argumento del formulario y se podrian mandar la note

  // console.log( values, "desde el formulario" )
  const { body , title } = values

  return (
    <div className='notes__main-content'>
  
        <NotesAppBar />

        {/* inicio formulario  */}
        <div className='notes__content'>

          <input 
            type="text" 
            placeholder='Some awesome title'
            className='notes__title-input'
            value={ title  }
            onChange={ handleInputChange}
          />

          <textarea 
              placeholder='What happened today?'
              className='notes__textarea'
              value={ body }
              onChange={ handleInputChange}
          >
          </textarea>

          {
            (note.url)
            &&(
              <div className='notes__image'>
                <img 
                  src="https://images.unsplash.com/photo-1672730764556-f508d0e8072d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80" 
                  alt="imagen notes__content" 
                />
              </div> 
            )
          }
          
        </div>
    </div>
  )
}

export default NoteScreen