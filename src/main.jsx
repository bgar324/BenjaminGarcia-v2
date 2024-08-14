import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/1Home/App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>,
)
