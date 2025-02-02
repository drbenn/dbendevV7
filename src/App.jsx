import './App.css'
import './components/styles/load-animation.css';
import NavBar from "./components/NavBar";
import HeroProfile from "./components/HeroProfile";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
// import LoadAnimation from './components/LoadAnimation';

import { useState, useEffect, Suspense } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 700) // originally 1900
  }, [])

  const responsiveWrapper = 'relative w-[90vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] app-max-width mx-auto flex flex-col justify-start align-center';
  const responsiveHeightSpacingHero = 'w-full py-8 md:py-16 lg:py-36';
  const responsiveHeightSpacingOther = 'w-full py-8 md:py-16 lg:py-32';

  return (
    <MantineProvider>
      <main className='text-zinc-900 '>
        { isLoading ? (
          //   <div id="load-animation" className="absolute z-50 h-screen w-screen overflow-hidden intro-bg">
          //   <div className='svg-div-transform absolute top-2/4 right-2/4'>
          //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
          //       <g transform="translate(200, 100)">
          //         <circle cx="0" cy="100" r="200"></circle>
          //       </g>
          //     </svg>
          //   </div>
          //   <div className='left-splash absolute'></div>
          //   <div className='right-splash absolute'></div>
          //   {/* Invisible to initiate image load */}
          //   <div className='invisible'>
          //     <HeroProfile />
          //   </div>
          // </div>
          <div id="load-animation" className="absolute z-50 h-screen w-screen overflow-hidden simple-intro-bg">
            {/* <div className='svg-div-transform absolute top-2/4 right-2/4'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                <g transform="translate(200, 100)">
                  <circle cx="0" cy="100" r="200"></circle>
                </g>
              </svg>
            </div> */}
            {/* <div className='left-splash absolute'></div>
            <div className='right-splash absolute'></div> */}
            {/* Invisible to initiate image load */}
            <div className='invisible'>
              <HeroProfile />
            </div>
          </div>
          ) : <div>
            <div id='top'></div>
            <NavBar />
            <div className={responsiveWrapper}>
              <div className={responsiveHeightSpacingHero}>
                <HeroProfile />
              </div>
              <div id='portfolio'></div>
              <Suspense fallback={<div>Loading...</div>}>
                <div className={responsiveHeightSpacingOther}>
                  <Projects />
                </div>
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <div className={responsiveHeightSpacingOther} id='about'>
                  <About />
                </div>
              </Suspense>
            </div>
            <div className='w-full border-t border-slate-400 mt-24'></div>
            <div className={responsiveWrapper}>
              <div id='contact'></div>
              <Contact />
            </div>
          </div> 
        }

      </main>

    </MantineProvider>
  )
}

export default App
