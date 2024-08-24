import { useEffect, useState, Suspense } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import Archive from './Archive';

const Projects = () => {

  const [data, setData] = useState(null);
  const [featured, setFeatured] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    fetch('https://utfs.io/f/38a53d27-9b56-4ccd-9192-967c1d76f8f0-giljeu.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData.sort((a,b) => b.id - a.id)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (data) {
      const featured = data.filter(project => project.isFeatured);
      setFeatured(featured);
    }
  }, [data]);

  return (
    <div className="">
      <div className='text-2xl font-semibold mb-4 select-none'>Featured Projects</div>
      <div className="flex flex-col flex-nowrap justify-center gap-6 text-zinc-600">
        { featured ? featured.map((item, index) => (
          <div 
            key={index} 
            className="">
            <div className="text-xl font-bold mb-2 select-none">
              <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </div>
            <p className="select-none text-lg">{item.oneLine}</p>
            <div className="mt-1 text-lg">
              <span className="font-semibold select-none">Tech: &nbsp;</span> 
              <span className='select-none'>{item.tech.join(', ')}</span>
            </div>
            <div className="mt-1 mb-6">
            <a href={item.demoLink}>Demo</a>  &nbsp;|&nbsp;  <a href={item.gitLink}>Git Repo</a>
            </div>               
            {index !== featured.length -1 ? <hr></hr> : ''}  
          </div>
          )) : <div>Loading.....</div>
        }
      </div>

      <Button className='mt-8 bg-amber-100 hover:bg-amber-200 text-zinc-700 hover:text-zinc-900 transition ease-in-out' 
        onClick={open}>
          View Project Archive
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        transitionProps={{ transition: 'fade', duration: 100 }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Archive data={data}/>
          </Suspense>
      </Modal>
    </div>
  )
}

export default Projects;