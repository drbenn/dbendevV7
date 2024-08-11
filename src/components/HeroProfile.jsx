const imageUrl = 'https://utfs.io/f/eb8d74c7-efce-46e3-9cc3-39b5d214f892-25qfy2.webp';
import './styles/hero-profile.css';

const HeroProfile = () => {
  return (
  <div id="hero-profile" className="relative flex flex-row justify-center align-center pr-2">
    <section className="relative flex flex-col justify-start align-start">
      <div className="mt-16 text-7xl text-dark font-semibold">
        Dan Bennett
      </div>
      <div className="mt-6 text-2xl text-dark font-medium">
        Full Stack Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam saepe provident nesciunt modi quod.
      </div>
    </section>
      <section className="flex flex-row justify-center align-center">
        {/* <img src={imageUrl} alt="My Image" /> */}
        <picture className="relative z-0 w-[290px] h-[290px]">
          <img src={imageUrl} alt="Description of the image" width="290" height="290" />
        </picture>
        <div className="absolute z-10 w-[290px] h-[290px] img-overlay-gradient-t-b"></div>
        <div className="absolute z-20 w-[290px] h-[290px] img-overlay-gradient-l-r"></div>
      </section>
  </div>
  )
}

export default HeroProfile;