import './styles/hero-dots.css';

const HeroDots = () => {
  const movingParts = [];

  for (let i = 0; i < 100; i++) {
    const size = String(0.1 + (Math.round(Math.random() -0.2) * 0.35))
    const top = String(Math.round(Math.random() * 100))
    const left = String(Math.round(Math.random() * 100))
    // const scale = String(0.5 + (Math.round(Math.random()) * 0.5))
    const background =  'radial-gradient(circle, #ffffff7b 0%, #ffffff7d 10%, #ff179a63 55%, #1774ff70 80%, #fb00ff7b 100%)'
    let selectedAnimation;

    if (i % 1 === 0) {
      selectedAnimation = 'part-anim-1'
    }
    if (i % 2 === 0) {
      selectedAnimation = 'part-anim-2'
    }
    if (i % 3 === 0) {
      selectedAnimation = 'part-anim-3'
    }
    if (i % 4 === 0) {
      selectedAnimation = 'part-anim-4'
    }

    // movingParts.push(`width: ${size}rem; height: ${size}rem; background: ${background}; border: 0px solid #FFD1F37C; border-radius: 10rem; box-shadow: 2px 2px 5px #FFFFFF; font-size: 1.5rem; color: grey; position: absolute; z-index: -5; top:${top}%; left: ${left}%; animation: ${selectedAnimation} 35s linear infinite`)
    movingParts.push({
      width: `${size}rem`,
      height: `${size}rem`,
      // background: `${background}`,
      border: `0px solid #FFD1F37C`,
      borderRadius: `10rem`, 
      boxShadow: `2px 2px 5px #FFFFFF`,
      fontSize: `1.5rem`,
      color: `grey`,
      position: `absolute`,
      zIndex: `110`,
      top: `${top}%`,
      left: `${left}%`,
      animation: `${selectedAnimation} 35s linear infinite`
    })
  }
  return (
    <div id="hero-dots" className="w-full h-[45rem] flex flex-col justify-start items-center">
      
      {/* <section className="max-width h-[45rem] bg-blue-300 flex flex-col justify-center items-start">
        <div className="text-7xl font-bold">
          Hello, I'm <span className="accent-text">Dan Bennett</span>.
        </div>
        <div className="text-3xl font-bold accent-1">
          I'm a full-stack web developer.
        </div>
      </section> */}

      <section className="relative z-0 h-screen w-full">
        {movingParts.map((part, index) => (
          <div key={index} style={part} className='bg-red-200 hover:bg-blue-300'></div>
        ))}
      </section>
    </div>
  )
}

export default HeroDots;