import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signin from './pages/Signin'
import Header from './componets/Header'
import Footer from './componets/Footer'

function App() {
  

  return (
    <>
    
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signin' element={<Signin/>}/>
    </Routes>
   
    <Footer/>
    </>
  )
}

export default App
