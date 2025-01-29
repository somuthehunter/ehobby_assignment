import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/benefits';
import Course from './components/Course';
import Footer from './components/Footer';
const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <Navbar />
      <Hero />
      <Benefits />
      <Course />
      <Footer/>
    </main>
  )
}

export default App

