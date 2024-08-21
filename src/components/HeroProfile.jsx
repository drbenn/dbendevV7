// const imageUrl = 'https://utfs.io/f/eb8d74c7-efce-46e3-9cc3-39b5d214f892-25qfy2.webp';
import localImg from '../assets/img/p1.webp'
import './styles/hero-profile.css';

const HeroProfile = () => {
  return (
    <main className='relative flex flex-col justify-start align-start select-none'>
      <div className="relative flex flex-row justify-center align-center">
        <section className="relative flex flex-col justify-start align-start">
          <div className="text-6xl xl:text-7xl font-semibold">
            Dan Bennett
          </div>
          <div className="mt-6 text-2xl font-medium">Dan is a full-stack engineer specializing in Angular, focused on crafting pixel-perfect, performance-driven dynamic front-end experiences for the modern Web.
          </div>
        </section>
        <section className="hidden lg:flex flex-row justify-center align-center ml-4">
          <picture className="relative z-0 w-[300px] h-[240px]">
            <img src={localImg} alt="Dan Bennett Image" width="401" height="321" />
          </picture>
          <div className="absolute z-0 w-[300px] h-[245px] img-overlay-gradient-t-b"></div>
          <div className="absolute z-0 w-[300px] h-[245px] img-overlay-gradient-l-r"></div>
        </section>
      </div>
    </main>
  )
}

export default HeroProfile;