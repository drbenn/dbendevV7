const Contact = () => {
  return (
    <main id="contact" className="w-full flex flex-row justify-center align-center my-[100px]">
      <section className="w-3/5 text-center flex flex-row justify-around align-center">
        <div>
          <a href="mailto:bennett.daniel@gmail.com" target="_blank" rel="noopener noreferrer" 
            className="text-blue-500 hover:underline">
            Email
          </a>
        </div>
        <div>
          <a href="https://github.com/drbenn" target="_blank" rel="noopener noreferrer" 
            className="text-blue-500 hover:underline">
            GitHub
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/bennettdanielr/" target="_blank" rel="noopener noreferrer" 
            className="text-blue-500 hover:underline">
            LinkedIn
          </a>
        </div>
        <div>
          <a href="https://leetcode.com/dbenn10/" target="_blank" rel="noopener noreferrer" 
            className="text-blue-500 hover:underline">
            LeetCode
          </a>
        </div>
      </section>
    </main>
  )
}

export default Contact;