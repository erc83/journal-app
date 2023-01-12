import React from 'react'
import { Provider } from "react-redux";
import { store } from './components/store/store';
import AppRouter from './routers/AppRouter'

const JournalApp = () => {
  return (
    <div>
        <Provider store={ store }>
          <AppRouter />
        </Provider>

    </div>
  )
}

export default JournalApp