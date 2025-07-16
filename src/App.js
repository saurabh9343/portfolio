import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contect from "./components/Contect";
import Footer from "./components/Footer";

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Project/>
     <Contect/>
     <Footer/>
    </>
  );
}

export default App;
