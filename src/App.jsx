import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/about'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import ClientReviews from './components/ClientReviews'
import Cards from './components/Cards'
import TheProject from './components/TheProject'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-[#f1f1f1] min-h-screen w-full'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <ClientReviews/>
      <Cards/>
      <TheProject/>
      <Footer/>
    </div>
  )
}

export default App
