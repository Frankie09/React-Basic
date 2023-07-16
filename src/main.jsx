import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Axios  from './components/Axios.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div>
    <Axios />
    </div>
    
  </React.StrictMode>,
)
