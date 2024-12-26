import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Route path="/" element={<App/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)