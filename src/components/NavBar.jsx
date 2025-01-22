import {
  Group,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import './styles/navbar.css';
import { useState, useEffect } from 'react';
import logoImage from '../assets/icon/rocky.png';



const NavBar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [scrollY, setScrollY] = useState(0);
  const bgClassName = scrollY <= 15 ? 'bg-top' : 'bg-body';

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={bgClassName}></div>
      <Box pb={100}>
      <div className='fixed z-40 top-0 w-full border-b-1 border-zinc-500 expand-text-wrapper'>
        <div className='w-[90vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] app-max-width mx-auto'>
          <Group justify="space-between" h="4rem">

          <Group>
            <div className='flex flex-row flex-nowrap 
            justify-start align-center cursor-pointer'>
              <a href="#top">
                <div className="relative w-12 h-12 overflow-hidden">
                  <img src={logoImage} alt="danbennet.dev logo" 
                  className="absolute top-1/2 left-1/2 min-w-full min-h-full 
                  transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </a>
              {/* <div className='mt-3 ml-2 h-8 w-[6rem] flex flex-row flex-nowrap justify-start align-center font-light text-lg cursor-default'>
                <div className='first-name h-8'>
                  Dan
                </div>
                <div className='last-name'>
                  Bennett
                </div>
              </div> */}

            </div>
          </Group>

            <Group h="100%" gap={25} visibleFrom="sm">
              <a href="#portfolio" className=''>
                Projects
              </a>
              <a href="#about" className=''>
                About
              </a>
              <a href="#contact" className=''>
                Contact
              </a>
            </Group>

            <Group hiddenFrom="sm">
              <Burger opened={drawerOpened} onClick={toggleDrawer} />
            </Group>

          </Group>

        </div>
      </div>


      <Drawer
        opened={drawerOpened}
        position='right'
        onClose={closeDrawer}
        size="40%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <div className='pl-8 pt-4'>
            <a href="#top" className=''>
              Home
            </a>
            <br /><br />
            <a href="#portfolio" className=''>
              Projects
            </a>
            <br /><br />
            <a href="#about" className=''>
              About
            </a>
            <br /><br />
            <a href="#contact" className=''>
              Contact
            </a>
          </div>
        </ScrollArea>
      </Drawer>
    </Box>
    
    </>
  )
}

export default NavBar;