import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/homePage'
import Cadastro from './components/loginComponents/Cadastro'
import Login from './components/loginComponents/Login'
import Teste from './components/loginComponents/Teste'
import Update from './components/loginComponents/Update'
import ImageUpload from './components/imageUpload'

function App() {
  return <>
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Cadastro' element={<Cadastro/>}/>
        <Route path='/Teste' element={<Teste/>}/>
        <Route path='/Update' element={<Update/>}/>
        <Route path='/Upload' element={<ImageUpload/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
