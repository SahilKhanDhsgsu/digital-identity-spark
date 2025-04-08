
const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Redux", "Responsive Design"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Python", "MongoDB", "REST API", "GraphQL", "Authentication"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Docker", "AWS", "Firebase"]
    },
    {
      category: "Soft Skills",
      skills: ["Communication", "Problem Solving", "Teamwork", "Time Management", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-highlight mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I've acquired a diverse range of skills throughout my journey as a developer.
            Here's a comprehensive overview of my technical toolkit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-4 text-navy">{category.category}</h3>
              <div className="flex flex-wrap -m-1">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
