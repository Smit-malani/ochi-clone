import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/about'
import Eyes from './components/Eyes'

function App() {
  return (
    <div className='bg-[#f1f1f1] min-h-screen w-full'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
    </div>
  )
}

export default App
