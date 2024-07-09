import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes, useNavigate } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar.jsx'
import Fox from './fox'
import Tech from './Tech.jsx'
import Projects from './Projects.jsx'
import Footer from './Footer.jsx'
import Experience from './Experience'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div id ="all">
      <NavBar />
      <Fox />
      <Tech />
      <Experience/>
      <Projects />
      <Footer />
    </div>
  )
}

export default App
