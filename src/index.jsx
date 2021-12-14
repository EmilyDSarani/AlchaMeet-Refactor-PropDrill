import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { UserProvider } from './context/UserContext'

ReactDOM.render(
  <React.StrictMode>
    {/* we wrap <App /> in the UserProvider tag that was imported in so that everything that is in App will get access to that specific state */}
    <UserProvider>
    <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
