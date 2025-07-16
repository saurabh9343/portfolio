import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contect';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App ;