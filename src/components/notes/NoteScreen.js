import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { activeNote } from '../actions/notes';


import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {

  const dispatch = useDispatch();

  const { active: note } = useSelector( state => state.notes ); 
  const [values, handleInputChange, reset ] = useForm( note);
  const { body , title } = values

  const activeId = useRef( note.id ); 

  useEffect(() => {
    if(note.id !== activeId.current){
      reset( note )
      activeId.current = note.id
    }
    
  }, [ note, reset ])

  // aqui se puede usar el body y title pero usamos una unica dependencia
  useEffect(() => {
    // que accion es la que se tien que llamar activeNote src/components/actions/notes.js
    // activeNote necesita el id y la nota como tal y lo desestructuramos
    dispatch( activeNote( values.id, {...values } ) ) 

  }, [ values, dispatch  ])
  

  
  return (
    <div className='notes__main-content'>
  
        <NotesAppBar />

        {/* inicio formulario  */}
        <div className='notes__content'>

          <input 
            type="text" 
            placeholder='Some awesome title'
            className='notes__title-input'
            name='title'
            value={ title  }
            onChange={ handleInputChange}
          />

          <textarea 
              placeholder='What happened today?'
              className='notes__textarea'
              name='body'
              value={ body }
              onChange={ handleInputChange}
          >
          </textarea>

          {
            (note.url)
            &&(
              <div className='notes__image'>
                <img 
                  src={ note.url } 
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