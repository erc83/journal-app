import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../actions/notes';

const NotesAppBar = () => {

  const dispatch = useDispatch();

  const { active } = useSelector( state => state.notes ); // extraemos la nota activa y es lo que se envia en el startSaveNote

  // se tiene que hacer el dispatch de esta accion
  const handleSave = () => {
    // console.log( active )
    dispatch( startSaveNote( active ))
  }



  return (
    <div className='notes_appbar'>
        <span>28 de agosto 2020</span>
        <div>
            <button className='btn'>
                Picture
            </button>
            <button 
              className='btn'
              onClick={ handleSave }
            >
                Save
            </button>

        </div>

    </div>
  )
}

export default NotesAppBar