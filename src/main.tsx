import { createRoot } from 'react-dom/client'
import './index.css'
import './i18next/i18n.ts'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

