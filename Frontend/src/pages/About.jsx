import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function About() {
  return (
    <div className="dark:text-white text-black max-w-2xl  pt-10 md:pt-0 mx-10">
      <h1 className="text-3xl font-bold my-3">Welcome to my blog!</h1>
      <p className="text-lg text-justify my-2">
         This is where I share my thoughts, experiences, and learnings as a developer. I created this blog to document my journey and hopefully provide some valuable insights to others in the developer community.
      </p>
      <h1 className="text-3xl font-bold my-5">What You'll Find Here</h1>
      <p className="text-lg text-justify my-2">On this blog, you'll find a mix of technical tutorials, project walkthroughs, and articles about web development, programming concepts, and the latest trends in technology. I also occasionally share my thoughts on productivity, self-improvement, and the developer lifestyle.</p>
      <h1 className="text-3xl font-bold my-5">About Me</h1>
      <p className="text-lg text-justify my-2">I'm Saurav, a final year computer engineering student with a passion for building innovative solutions. As I navigate through the exciting world of programming, I'm on the lookout for new opportunities to apply my skills and contribute to impactful projects. Let's connect and explore the endless possibilities at the intersection of technology and creativity!</p>
      <hr/>
      <div className='flex flex-row  text-2xl gap-10 justify-center items-center p-3'>
        <a href="https://github.com/sauravkhanal" target='_blank' className='hover:scale-110 transition'><FaGithub /> </a>
        <a href='https://linkedin.com/in/khanalsaurav' target="_blank" className='hover:scale-110 transition'><FaLinkedin /></a>
        <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sauravkhanal635@gmail.com' target="_blank" className='hover:scale-110 transition'><IoIosMail className='text-3xl' /></a>
      </div>
    </div>

  )
}

export default About