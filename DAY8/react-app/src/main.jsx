import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from './Marks.jsx'
import DisplayMarks from './DisplayMarks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Marks m1={81} m2={65} m3={67} m4={98}/>
    <Marks m1={81} m2={65} m3={67} m4={67} />
    <DisplayMarks/>
  </StrictMode>,
)
