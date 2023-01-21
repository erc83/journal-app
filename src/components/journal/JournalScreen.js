import React from 'react'
import { useSelector } from 'react-redux'
import NoteScreen from '../notes/NoteScreen'
import NothingSelected from './NothingSelected'
import Sidebar from './Sidebar'

const JournalScreen = () => {

  // const state = useSelector( state => state );  // aqui llama el objeto con los 3 redux
  const { active } = useSelector( state => state.notes );


  return (

    <div className='journal__main-content'>
      

      <Sidebar />


      <main>

        {
          ( active )  // si tiene algo muestra NoteScreen
            ? ( <NoteScreen /> )
            : ( <NothingSelected /> )
        }

      </main>

    </div>

  )
}

export default JournalScreen