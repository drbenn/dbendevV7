import { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

const Projects = () => {

  const [data, setData] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    fetch('https://utfs.io/f/5cc546a8-ad7d-4441-8e24-ef7f0a8ea45e-giljeu.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData.sort((a,b) => b.id - a.id)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="">
      <div className='text-2xl font-semibold mb-4 select-none'>Featured Projects</div>
      <div className="flex flex-col flex-nowrap justify-center gap-6 text-zinc-600">
        { data ? data.map((item, index) => (
          item.isFeatured ? (
          <div 
            key={index} 
            className="">
            <div className="text-xl font-bold mb-2 select-none">
              <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </div>
            <p className="select-none">{item.oneLine}</p>
            <div className="mt-1">
              <span className="font-semibold select-none">Tech: &nbsp;</span> 
              <span className=' select-none'>{item.tech.join(', ')}</span>
            </div>
            <div className="mt-1 mb-6">
            <a href={item.demoLink}>Demo</a>  &nbsp;|&nbsp;  <a href={item.gitLink}>Git Repo</a>
            </div>               
            {index !== data.length -1 ? <hr></hr> : ''}  
          </div>) : ''
          )) : <div>Loading.....</div>
        }
      </div>

      <Button className='mt-8 bg-amber-100 hover:bg-amber-200 text-zinc-700 hover:text-zinc-900 transition ease-in-out' onClick={open}>View Project Archive</Button>
      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        transitionProps={{ transition: 'fade', duration: 100 }}
        >
        <div  className='p-5 text-3xl select-none'>All Projects</div>
        {data ? data.map((item, index) => (
          <div key={index} className='w-full flex flex-col p-5 flex-gap-1 text-zinc-600'>
            <div className="text-xl font-bold mb-2">
              <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </div>
            <div className="mt-1">
              <span className="font-semibold select-none">Tech:&nbsp;</span>
              <span className=' select-none'>{item.tech.join(', ')}</span>
            </div>
            <div className="mt-1 select-none">
              {item.oneLine}
            </div>
            <div className='mt-1 hidden sm:flex select-none'>
              {item.details}
            </div>
            <div className="mt-3 mb-6 select-none">
              <a href={item.demoLink}>Demo</a>  &nbsp;|&nbsp;  <a href={item.gitLink}>Git Repo</a>
            </div>
            {index !== data.length -1 ? <hr></hr> : ''}
          </div>

        ))
        : ''
      }
      </Modal>

      
    </div>
  )
}

export default Projects;