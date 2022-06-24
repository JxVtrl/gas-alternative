import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App'
import { AppProvider } from './src/context'
import './src/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
