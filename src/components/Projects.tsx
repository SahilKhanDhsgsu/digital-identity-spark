
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment processing using Stripe.",
      image: "/lovable-uploads/8a510b86-0edf-4362-b47a-8c5ebdc8d5e2.png",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      github: "https://github.com/sahilkhan/ecommerce",
      demo: "https://ecommerce-demo.sahilkhan.com"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management tool with real-time updates, task assignments, and project tracking features.",
      image: "/lovable-uploads/2b535c8d-79cf-408d-b67e-2e5f2c6ec5e3.png",
      tags: ["MERN Stack", "Socket.io", "Redux", "JWT"],
      github: "https://github.com/sahilkhan/taskmaster",
      demo: "https://taskmaster.sahilkhan.com"
    },
    {
      title: "Blog Platform",
      description: "A content management system for creating and managing blog posts with rich text editing and image upload capabilities.",
      image: "/lovable-uploads/b0b84fcb-f17f-4051-bdfd-452104c1f3c6.png",
      tags: ["React", "Node.js", "MongoDB", "AWS S3"],
      github: "https://github.com/sahilkhan/blogplatform",
      demo: "https://blog.sahilkhan.com"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application providing real-time forecasts, historical data, and location-based weather information.",
      image: "/lovable-uploads/4215dd4a-71b5-4a27-96db-5dde3bed5aad.png",
      tags: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      github: "https://github.com/sahilkhan/weatherapp",
      demo: "https://weather.sahilkhan.com"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website (this one) showcasing my projects, skills, and experience as a full-stack developer.",
      image: "/lovable-uploads/034321ff-d989-4fdc-9c1c-5b37916d1137.png",
      tags: ["React", "Tailwind CSS", "Vite", "Responsive Design"],
      github: "https://github.com/sahilkhan/portfolio",
      demo: "https://sahilkhan.com"
    },
    {
      title: "Chat Application",
      description: "A real-time chat application with private messaging, group chats, and file sharing capabilities.",
      image: "/lovable-uploads/d42bbe8f-dd77-4557-ab97-ae4a412d3b88.png",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/sahilkhan/chatapp",
      demo: "https://chat.sahilkhan.com"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-highlight mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in full-stack development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card group overflow-hidden"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white bg-highlight/80 hover:bg-highlight p-2 rounded-full transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-navy">{project.title}</h3>
                <p className="mt-2 text-gray-600 line-clamp-3">{project.description}</p>
                <div className="mt-4 flex flex-wrap -m-1">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-gray-100 text-gray-800 rounded-full px-2 py-1 m-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
