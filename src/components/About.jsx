const About = () => {
  return (
    <div id="about" className="min-h-[80vh] flex flex-col flex-nowrap justify-center align-center">
      <div className="text-2xl font-bold">
        Job Title
      </div>
      <div className="text-lg font-medium pt-5 pb-16">
        Daniel Bennett, Software Engineer
        <br />
        Neuma Consulting, VA/DC
      </div>

      <div className="text-2xl font-bold">
        Education
      </div>
      <div className="text-lg font-medium pt-5 pb-16">
        Not related to Computer Science, but I did it.
        <br></br>
        Undergraduate In Economics from University of Maryland. MBA from University of Baltimore.
        <br></br>
        Then I decided to go back to University of Baltimore for an Accounting Certificate to work in Public Accounting and become a CPA. 
        Which I did, and now I do not.
      </div>

      <div className="text-2xl font-bold">
        Biography
      </div>
      <p className="text-lg font-medium pt-5 pb-16">
        I am Daniel Bennett. I work as a Software Engineer for Neuma Consulting where I primarily do front-end development on Angular applications. A self-taught developer with a history and passion for learning and growing. In my free time I enjoy going to Judo, BJJ, Muay Thai, or eating pho.
      </p>

    </div>
  )
}

export default About;