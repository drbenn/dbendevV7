const About = () => {
  return (
    <div id="about" className="flex flex-col flex-nowrap justify-center align-center select-none">
      <div className="text-2xl font-semibold">
        Job Title
      </div>
      <div className="text-lg font-medium pt-5 pb-12 text-zinc-600">
        Daniel Bennett, Software Engineer
        <br />
        Neuma Consulting, VA/DC
        <br />
        March 2022 - Current
      </div>

      <div className="text-2xl font-semibold">
        Education
      </div>
      <div className="text-lg font-medium pt-5 pb-12 text-zinc-600">
        Unrelated to Computer Science, but I did it, and it has brought me to where I am today.
        Undergraduate In Economics from University of Maryland. MBA from University of Baltimore.
        <br /><br />
        Then two more years at University of Baltimore for an Accounting Certificate to work in Public Accounting and become a CPA.
        <br /><br />
        Which is my past. And it demonstrates my devotion to learning and capacity for self-study. In my new career I learn from doing, books, documentation and mentors.
      </div>

      <div className="text-2xl font-semibold">
        Biography
      </div>
      <p className="text-lg font-medium pt-5 text-zinc-600">
        I am Daniel Bennett. I work as a Software Engineer for Neuma Consulting where I primarily do front-end development on Enterprise Angular applications. A self-taught developer with a history and passion for learning and growing. In my free time I enjoy going to Judo, BJJ, Muay Thai, or cooking.
      </p>

    </div>
  )
}

export default About;