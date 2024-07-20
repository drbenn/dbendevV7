import './styles/hero-image.css';
import backgroundImage from '../assets/hero/premium_photo-1721248649681-4776100a837c.avif';


const HeroImage = () => {
  return (
    // <div id="hero-rays" className="relative section h-[45rem] flex flex-col justify-center align-center">
    //   <div className="text-7xl text-dark font-bold">
    //     Dan Bennett
    //   </div>
    //   <div className="text-3xl text-dark font-bold">
    //     Full Stack Developer
    //   </div>
    // </div>
    <div id="hero-image" className='mt-10 bg-filtering w-full h-[45rem] bg-cover bg-center flex flex-col justify-center align-center cursor-default select-none' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="text-7xl text-light font-bold">
        Dan Bennett
      </div>
      <div className="text-3xl text-light font-bold">
        Full Stack Developer
      </div>
  </div>
  )
}

export default HeroImage;