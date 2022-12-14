import './tailwind.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const el = document.querySelector('#root')

if(el) {
    const root = createRoot(el)
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    )
}