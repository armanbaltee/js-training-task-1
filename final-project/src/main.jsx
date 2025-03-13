import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/fonts/TuskerGrotesk-3600Semibold.woff2'
import './assets/fonts/nKKZ-Go6G5tXcraVGwA.woff2'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
