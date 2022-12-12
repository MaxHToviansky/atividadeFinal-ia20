import { useState } from 'react'
import './App.css'
import ImageTable from './components/imageTable'
import ImageUpload from './components/imageUpload'
import NavBar from './components/navBar'

function App() {
  return (
    <div id='mainDiv'>
      <div>
        <NavBar/>
      </div>
      <ImageTable/>
    </div>
  )
}

export default App
