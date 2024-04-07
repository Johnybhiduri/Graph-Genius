import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </>
  )
}

export default App
