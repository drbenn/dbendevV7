import './styles/hero-profile.css';
import heroImage from '../assets/img/p1-cartoon.webp';


const HeroProfile = () => {
  
  return (
    <main className='relative flex flex-col justify-start align-start select-none'>
      <div className="relative flex flex-row justify-center align-center">
        <section className="relative flex flex-col justify-center align-start">
          <div className="text-6xl xl:text-8xl font-semibold">
            <h1>Dan Bennett</h1>
          </div>
          <div style={{'fontSize': '1.4rem'}} className="mt-10 font-medium text-zinc-500 leading-7">Dan is a full-stack engineer specializing in Angular, focused on crafting pixel-perfect, performance-driven dynamic front-end experiences for the modern Web.
          </div>
        </section>
        <section className="hidden md:flex flex-row justify-center align-center ml-4">
          <picture className="relative z-0 min-w-[350px] w-[29vw] max-w-[400px] h-[280px]">
            <img src={heroImage} alt="Dan Bennett Image" width="401" height="321" />
          </picture>
          <div className="absolute z-0 min-w-[350px] w-[29vw] max-w-[400px] min-h-[290px] h-[23.5vw] max-h-[330px] img-overlay-gradient-t-b"></div>
          <div className="absolute z-0 min-w-[350px] w-[29vw] max-w-[400px] min-h-[290px] h-[23.5vw] max-h-[330px] img-overlay-gradient-l-r"></div>
        </section>
      </div>
    </main>
  )
}

export default HeroProfile;