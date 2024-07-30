import './App.css'
import './components/styles/load-animation.css';
import NavBar from "./components/NavBar";
// import Hero from "./components/Hero";
// import HeroRays from "./components/HeroRays";
// import HeroImage from "./components/HeroImage";
import HeroDots from "./components/HeroDots";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
// import LoadAnimation from './components/LoadAnimation';

import { useState, useEffect } from 'react';

function App() {
  const [isLoadAnimationComplete, setIsLoadAnimationComplete] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoadAnimationComplete(false), 2500)
  }, [])

  return (
    <MantineProvider>
      <div>
        <div className='animate-fade-in'></div>
        { isLoadAnimationComplete ? (
          <div id="load-animation" className="absolute z-50 h-screen w-screen overflow-hidden intro-bg">
          <div className='svg-div-transform absolute top-2/4 right-2/4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
              <g transform="translate(200, 100)">
                <circle cx="0" cy="100" r="200"></circle>
              </g>
            </svg>
          </div>
          <div className='left-splash absolute'></div>
          <div className='right-splash absolute'></div>
        </div>
        ) : '' }
        <NavBar />
        {/* <Hero /> */}
        {/* <HeroRays /> */}
        {/* <HeroImage /> */}
        Test
        <HeroDots />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </MantineProvider>
  )
}

export default App
