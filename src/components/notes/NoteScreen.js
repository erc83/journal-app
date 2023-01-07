import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
  
        <NotesAppBar />

        {/* inicio formulario  */}
        <div className='notes__content'>

          <input 
            type="text" 
            placeholder='Some awesome title'
            className='notes__title-input'
          />

          <textarea 
              placeholder='What happened today?'
              className='notes__textarea'
          >
          </textarea>

          <div className='notes__image'>
            <img 
              src="https://images.unsplash.com/photo-1672730764556-f508d0e8072d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80" 
              alt="imagen notes__content" 
            />
          </div> 


        </div>


    </div>
  )
}

export default NoteScreen