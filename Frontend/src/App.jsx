import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import LeftBar from './components/leftBar.jsx'
import RightBar from './components/rightBar.jsx'

import './App.css'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <div className='flex '><LeftBar></LeftBar>
      <RightBar></RightBar></div>
    </>
  )
}

export default App
