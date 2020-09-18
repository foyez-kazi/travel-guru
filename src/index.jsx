import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'

import { UserProvider } from './context/UserProvider'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <CssBaseline />
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
