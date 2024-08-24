import logoImage from '../assets/icon/rocky.png';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Email',
      link: 'mailto:bennett.daniel@gmail.com'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/drbenn'
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/bennettdanielr/'
    },
    {
      title: 'LeetCode',
      link: 'https://leetcode.com/dbenn10/'
    },
  ];

  return (
    <main id="contact" className="w-full flex flex-row justify-center align-start mt-[100px]">
      <div className="w-8/12 lg:w-6/12 flex flex-col justify-center align-start">
        <div className="w-full flex flex-wrap flex-row justify-around align-center">
          { contactInfo.map((contact, index) => (
            <div key={index}>
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                {contact.title}
              </a>
            </div>
          ))}
        </div>

        <div className="w-full mt-[75px] mb-[0px]">
          <img src={logoImage} alt="danbennet.dev logo" 
          className="w-[3rem]  h-[3rem] mx-auto" />
        </div>

        <div className="text-center mb-[75px] text-xs font-light px-12 select-none">
          Created by Dan Bennett using the most loved/hated Javascript library React, with TailwindCSS and Mantine UI Components.
        </div>

      </div>
    </main>
  )
}

export default Contact;