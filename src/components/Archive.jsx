const Archive = ({data}) => {
  return (
    <>
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
          <div className="mt-3 select-none">
            {item.oneLine}
          </div>
          <div className='hidden sm:flex flex-col select-none mt-5 mb-1 pl-5'>
            {item.details ? item.details.map((detail, index) => (
                <div key={index} className="pb-4">
                    {detail}
                </div>
            )) : <span></span>
            }
          </div>
          <div className=" mb-6 select-none">
            <a href={item.demoLink}>Demo</a>  &nbsp;|&nbsp;  
            {item.gitLink[0] === "N/A" ? <span className="text-amber-600">Git Repo Private</span> : <a href={item.gitLink}>Git Repo</a> }
            
          </div>
          {index !== data.length -1 ? <hr></hr> : ''}
        </div>

      ))
      : ''
    }
    </>
  )
}

export default Archive;