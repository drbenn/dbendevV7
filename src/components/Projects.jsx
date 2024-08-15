import { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

const Projects = () => {

  const [data, setData] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
  .fill(0)
  .map((_, index) => <p key={index}>Modal with scroll</p>);

  useEffect(() => {
    fetch('https://utfs.io/f/5cc546a8-ad7d-4441-8e24-ef7f0a8ea45e-giljeu.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData.sort((a,b) => b.id - a.id)))
      .then(console.log(data)
      )
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="">
      <div className='text-3xl font-semibold mb-4'>Featured Projects</div>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita aperiam quo aliquid error facere maiores suscipit reprehenderit voluptates quibusdam consequatur veritatis, ea quia animi iure aut dolore. Dolorum laboriosam cumque ut sequi blanditiis nobis cupiditate soluta adipisci corrupti consequuntur unde perspiciatis autem, reiciendis, tempore tenetur nostrum suscipit totam alias?
      </p> */}
      {/* <div>
        <h2>Fetched Data:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div> */}
      <div className="flex flex-col flex-nowrap justify-center gap-6">
        {data ? data.map((item, index) => (
          item.isFeatured ? (
          <div 
            key={index} 
            className="">
            <div className="text-xl font-bold mb-2">
              <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </div>
            <p className="">{item.oneLine}</p>
            <div className="mt-1">
              <span className="font-semibold">Tech:</span> {item.tech.join(', ')}
            </div>
            <div className="mt-1 mb-6">
            <a href={item.demoLink}>Demo</a>  &nbsp;|&nbsp;  <a href={item.gitLink}>Git Repo</a>
            </div>
            {index !== data.length -1 ? <hr></hr> : ''}

            
          </div>) : ''
        )) : <div>Loading.....</div>
        
        
        }
      </div>

      <Button className='mt-4' onClick={open}>View Project Archive</Button>
      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        transitionProps={{ transition: 'fade', duration: 100 }}
        >
        <div  className='p-5 text-3xl'>All Projects</div>
        {data ? data.map((item, index) => (
          <div key={index} className='w-full flex flex-col p-5 flex-gap-1'>
            <div className="text-xl font-bold mb-2">
              <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </div>
            <div className="mt-1">
              <span className="font-semibold">Tech:&nbsp;</span>{item && item.tech ? item.tech.join() : ''}
            </div>
            <div className="mt-1">
              {item.oneLine}
            </div>
            <div className='mt-1 hidden sm:flex'>
              {item.details}
            </div>
            <div className="mt-3 mb-6">
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