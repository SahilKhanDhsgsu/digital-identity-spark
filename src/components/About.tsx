
import { Briefcase, Code, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-lightBg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-highlight mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I'm a passionate full-stack developer with expertise in MERN stack and Python.
            Let me tell you a bit about myself and what I do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-highlight/10 flex items-center justify-center mr-3">
                <User className="h-5 w-5 text-highlight" />
              </div>
              <h3 className="text-xl font-semibold">Who I Am</h3>
            </div>
            <p className="text-gray-600">
              I'm Sahil Khan, a B.Tech CSE student at DHSGSU Central University and a Reliance Foundation Scholar. 
              Based in Damoh, Madhya Pradesh, I'm passionate about creating efficient and elegant web solutions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-highlight/10 flex items-center justify-center mr-3">
                <Code className="h-5 w-5 text-highlight" />
              </div>
              <h3 className="text-xl font-semibold">What I Do</h3>
            </div>
            <p className="text-gray-600">
              I specialize in full-stack web development using the MERN (MongoDB, Express, React, Node.js) stack
              and Python. I create responsive, user-friendly applications that deliver exceptional experiences.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-highlight/10 flex items-center justify-center mr-3">
                <Briefcase className="h-5 w-5 text-highlight" />
              </div>
              <h3 className="text-xl font-semibold">My Experience</h3>
            </div>
            <p className="text-gray-600">
              I'm currently working as a Full Stack Web Developer at CyberDairy Solutions
              with more than a year of experience building web applications and solving complex problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
