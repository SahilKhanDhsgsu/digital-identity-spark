
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy/5 to-teal/5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div 
            className="order-2 lg:order-1 animate-fade-in" 
            style={{ animationDelay: '0.2s' }}
          >
            <div className="space-y-4">
              <p className="text-lg text-highlight font-medium">Hello, I'm</p>
              <h1 className="font-bold">
                Sahil Khan
                <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl gradient-text">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg mt-4">
                MERN & Python specialist with a passion for creating elegant solutions.
                B.Tech in CSE from DHSGSU Central University and Reliance Foundation Scholar.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a href="/#contact" className="btn-primary">
                  Get in Touch
                </a>
                <a 
                  href="/#projects" 
                  className="inline-flex items-center justify-center h-10 px-4 py-2 border border-highlight text-highlight rounded-md hover:bg-highlight/10 transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
          
          <div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-highlight to-teal blur-md opacity-75 -z-10"></div>
              <img 
                src="/lovable-uploads/eddbec72-0981-4ce4-aeb3-7a6f2b1ad5e2.png" 
                alt="Sahil Khan" 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-sm text-gray-500 hover:text-highlight">
            <span>Scroll Down</span>
            <ArrowDown className="h-5 w-5 mt-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
