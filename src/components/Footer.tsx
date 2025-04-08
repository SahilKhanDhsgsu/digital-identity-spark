
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold">Sahil Khan</Link>
            <p className="mt-2 text-gray-300 max-w-md">
              Full Stack Developer specializing in MERN stack and Python. Building elegant solutions to complex problems.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/sahilkhan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-highlight transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sahilkhan3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-highlight transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:sahilkhan@example.com"
                className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-highlight transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sahil Khan. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gray-700 hover:bg-highlight text-white p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
