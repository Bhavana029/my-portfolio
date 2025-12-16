import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 80 },
        { name: 'React', level: 50},
        { name: 'JavaScript', level: 60 },
        { name: 'Tailwind CSS', level: 40 },
        { name: 'BootStrap', level: 50 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 40 },
        { name: 'SQL', level: 50 },
        { name: 'MongoDB', level: 25 }
        
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', level: 75 },
        { name: 'Postman', level: 80 },
        { name: 'VS Code', level: 85 },
        { name: 'PyCharm', level: 85 },
        { name: 'Jupyter Notebook', level: 80 },
        { name: 'Google Colab ', level: 80 }
      ]
    },
    {
      title: 'Programming languages',
      skills: [
        { name: 'java', level: 55 },
        { name: 'Python', level: 60 },
        { name: 'C', level: 50 },
        { name: 'C++', level: 50 },
       
      ]
    },
    {
      title: 'Operating System ',
      skills: [
        { name: 'Windows', level: 95 },
        { name: 'Linux', level: 40 }
        
      ]
    },
    {
      title: 'OTHERS',
      skills: [
        { name: 'AI & ML', level: 35 }
       
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-red-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-6 text-center text-red-500">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-red-500 to-red-700 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
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