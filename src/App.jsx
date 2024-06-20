import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes, useNavigate } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar.jsx'
import Fox from './fox'
import Tech from './Tech.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <Fox />
      <Tech />
    </div>
  )
}

export default App
