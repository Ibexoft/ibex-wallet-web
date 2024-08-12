import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import './assets/css/style.css'
// import './assets/js/main.js'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'

function App() {


  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
