const imageUrl = 'https://utfs.io/f/eb8d74c7-efce-46e3-9cc3-39b5d214f892-25qfy2.webp';
import './styles/hero-profile.css';

const HeroProfile = () => {
  return (
  <div id="hero-profile" className="relative flex flex-row justify-center align-center pr-2">
    <section className="relative flex flex-col justify-start align-start">
      <div className="mt-16 text-6xl sm:text-7xl font-semibold">
        Dan Bennett
      </div>
      <div className="mt-6 text-2xl font-medium">
        Full Stack Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam saepe provident nesciunt modi quod.
      </div>
    </section>
    <section className="hidden lg:flex flex-row justify-center align-center">
      <picture className="relative z-0 w-[290px] h-[290px]">
        <img src={imageUrl} alt="Description of the image" width="290" height="290" />
      </picture>
      <div className="absolute z-0 w-[290px] h-[290px] img-overlay-gradient-t-b"></div>
      <div className="absolute z-0 w-[290px] h-[290px] img-overlay-gradient-l-r"></div>
    </section>
  </div>
  )
}

export default HeroProfile;