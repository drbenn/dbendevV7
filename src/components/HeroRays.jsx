import './styles/hero-ray.css';

const HeroRays = () => {
  return (
    <div id="hero-rays" className="relative section h-[45rem] flex flex-col justify-center align-center">
      <div className="text-7xl font-bold">
        Dan Bennett
      </div>
      <div className="text-3xl font-bold">
        Full Stack Developer
      </div>
      <div className='floating-object relative '>
        <div className="floating-ray"></div>
        <div className="floating-point"></div>
      </div>

    </div>
  )
}

export default HeroRays;