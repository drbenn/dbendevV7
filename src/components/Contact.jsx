const Contact = () => {
  return (
    <main id="contact" className="w-full flex flex-row justify-center align-start mt-[100px]">
      <div className="w-8/12 lg:w-6/12 flex flex-col justify-center align-start">
        <div className="w-full flex flex-wrap flex-row justify-around align-center">
          <div>
            <a href="mailto:bennett.daniel@gmail.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </div>
          <div>
            <a href="https://github.com/drbenn" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/bennettdanielr/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <div>
            <a href="https://leetcode.com/dbenn10/" target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
          </div>
        </div>

        <div className="text-center my-[75px] text-xs px-12">
          Created by Dan Bennett using the most loved/hated Javascript library React
        </div>

      </div>
    </main>
  )
}

export default Contact;