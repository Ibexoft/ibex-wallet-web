import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/style.css'
// import './assets/js/main.js'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'

function App() {


  return (
    <>
      <Header />
      <Sidebar />
      <Home />
    </>
  )
}

export default App
