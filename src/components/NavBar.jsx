import {
  Group,
  Button,
  UnstyledButton,
  Text,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem
  // useMantineTheme,
} from '@mantine/core';
// import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
// import classes from './HeaderMegaMenu.module.css';
import './styles/navbar.css';
import { useState, useEffect } from 'react';
import logoImage from '../assets/icon/rocky.png';

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];


const NavBar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  // const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className='' key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));


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
        <div className='w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] app-max-width mx-auto'>
          <Group justify="space-between" h="4rem">

          <Group>
            <div className='flex flex-row flex-nowrap 
            justify-start align-center cursor-pointer'>
              <a href="#top">
                <div className="relative w-12 h-12 overflow-hidden">
                  <img src={logoImage} alt="Description" 
                  className="absolute top-1/2 left-1/2 min-w-full min-h-full 
                  transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </a>
              <div className='mt-3 ml-2 h-8 w-[6rem] flex flex-row flex-nowrap justify-start align-center font-light text-lg cursor-default'>
                <div className='first-name h-8'>
                  Dan
                </div>
                <div className='last-name'>
                  Bennett
                </div>
              </div>

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