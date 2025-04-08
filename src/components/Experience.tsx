import { Clock, Award, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "CyberDairy Solutions",
      period: "Feb 2025 - Present",
      duration: "3 months",
      type: "Internship",
      location: "Sagar, Madhya Pradesh, India",
      description: "Working on full-stack development using MERN stack, developing responsive user interfaces and RESTful APIs.",
      skills: ["React.js", "MERN Stack", "RESTful API", "MongoDB", "Node.js", "Express.js"]
    },
    {
      title: "Web Developer Trainee",
      company: "CyberDairy Solutions",
      period: "Apr 2024 - Feb 2025",
      duration: "11 months",
      type: "Trainee",
      location: "Sagar, Madhya Pradesh, India",
      description: "Trained in full-stack web development with focus on MERN stack technologies and responsive design principles.",
      skills: ["Full-Stack Development", "MERN Stack", "JavaScript", "HTML/CSS", "Responsive Design"]
    }
  ];

  const education = [
    {
      degree: "B.Tech - Bachelor's of Technology, Computer science",
      institution: "Dr. Harisingh Gour University (Sagar University)",
      period: "Dec 2022 - Dec 2026",
      location: "Sagar, MP",
      achievements: ["Reliance Foundation Scholar'23"],
      skills: ["Microsoft PowerPoint", "Python", "Problem Solving"]
    },
    {
      degree: "PCM (Physics, Chemistry, Mathematics)",
      institution: "Govt. Excellence HS School Damoh MP",
      period: "Completed",
      results: ["XII: 89.6%", "X: 89.25%"],
      skills: ["Communication", "Problem Solving"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-lightBg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Experience & Education</h2>
          <div className="mt-2 h-1 w-20 bg-highlight mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My professional journey and academic background that have shaped my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-highlight mr-2" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((job, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-highlight/30 last:border-0">
                  <div className="absolute top-0 left-0 w-4 h-4 -translate-x-1/2 rounded-full bg-highlight"></div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-navy">{job.title}</h4>
                    <p className="text-highlight font-medium">{job.company}</p>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{job.period} · {job.duration}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      <span>{job.location}</span> · <span>{job.type}</span>
                    </div>
                    <p className="mt-3 text-gray-600">{job.description}</p>
                    <div className="mt-3 flex flex-wrap -m-1">
                      {job.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-highlight mr-2" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-highlight/30 last:border-0">
                  <div className="absolute top-0 left-0 w-4 h-4 -translate-x-1/2 rounded-full bg-highlight"></div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-navy">{edu.degree}</h4>
                    <p className="text-highlight font-medium">{edu.institution}</p>
                    {edu.period && (
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{edu.period}</span>
                      </div>
                    )}
                    {edu.location && (
                      <div className="text-sm text-gray-500 mt-1">
                        <span>{edu.location}</span>
                      </div>
                    )}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="mt-2">
                        <h5 className="text-sm font-semibold">Achievements:</h5>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {edu.results && edu.results.length > 0 && (
                      <div className="mt-2">
                        <h5 className="text-sm font-semibold">Results:</h5>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          {edu.results.map((result, i) => (
                            <li key={i}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="mt-3 flex flex-wrap -m-1">
                      {edu.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
