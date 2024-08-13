import './App.css'
import './components/styles/load-animation.css';
import NavBar from "./components/NavBar";
// import Hero from "./components/Hero";
// import HeroRays from "./components/HeroRays";
// import HeroImage from "./components/HeroImage";
// import HeroDots from "./components/HeroDots";
import HeroProfile from "./components/HeroProfile";
// import Experience from "./components/Experience";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
// import LoadAnimation from './components/LoadAnimation';

import { useState, useEffect, Suspense } from 'react';

function App() {
  const [isLoadAnimationComplete, setIsLoadAnimationComplete] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoadAnimationComplete(false), 2500)
  }, [])

  const responsiveHeightSpacing = 'w-full py-8 md:py-16 lg:py-28 bg-pink-100';
  const responsiveHeightSpacing2 = 'w-full py-8 md:py-16 lg:py-28 bg-green-100';

  return (
    <MantineProvider>
      <main className='text-zinc-700'>
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
        <div id='top'></div>
        <NavBar />
        <div className='relative w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] app-max-width mx-auto flex flex-col justify-start align-center'>
        {/* <div className='animate-fade-in'></div> */}
        {/* <Hero /> */}
        {/* <HeroRays /> */}
        {/* <HeroImage /> */}
        <HeroProfile />
        {/* <HeroDots /> */}
        {/* <Experience /> */}
        <div id='portfolio'></div>
        <Suspense fallback={<div>Loading...</div>}>
        <div className={responsiveHeightSpacing2}>
          <Portfolio />
        </div>
        </Suspense>
        <div id='about'></div>
        <Suspense fallback={<div>Loading...</div>}>
          <div className={responsiveHeightSpacing}>
            <About />
          </div>
        </Suspense>
        <div id='contact'></div>
        <Contact />
      </div>

      </main>

    </MantineProvider>
  )
}

export default App
