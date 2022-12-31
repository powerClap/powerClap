import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//installed react-router-dom package to use with react-router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>,
)
