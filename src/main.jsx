import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './router/Router.jsx'
import { GlobalStyle } from './styles/styles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>
)
