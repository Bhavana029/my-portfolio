import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
  title: 'AI Foundations Intern',
  company: 'Edunet Foundation',
  location: 'Remote',
  period: 'April – May 2025 (4 weeks)',
  description: [
    'Completed a 4-week internship on AI fundamentals, tools, and applications',
    'Explored machine learning, data analysis, and Python programming for AI',
    'Practiced real-world problem-solving using AI models and techniques',
    'Studied responsible AI practices and ethical implications in industry use'
  ],
  certificateLink: 'https://drive.google.com/file/d/103ih3B0ppgpWECrDvkMcDK3PEmi2OZI8/view?usp=sharing' // Replace with actual link
}
,
   {
  title: 'AI Intern',
  company: 'Edunet Foundation',
  location: 'Remote',
  period: 'Feb 2025 – Mar 2025 (2 months)',
  description: [
    'Completed AI internship under the TechSaksham program by Microsoft and SAP, implemented by Edunet Foundation and supported by AICTE',
    'Gained hands-on experience with AI tools to solve real-world problems',
    'Developed AI projects targeting social and business challenges',
    'Participated in expert-led workshops, mentorships, and industry sessions'
  ],
  certificateLink: 'https://drive.google.com/file/d/1h0coWLxHq0O8-tJkjY2ytexXkg8ACUdN/view?usp=sharing' 
}
,
    {
  title: 'AI & Data Analytics Intern',
  company: 'Green Skills Program',
  location: 'Remote',
  period: '2024(DEC)-2025(JAN)4 weeks',
  description: [
    'Completed a 4-week internship focused on Artificial Intelligence and Data Analytics for Green Skills',
    'Developed a chatbot to guide users on sustainable practices like tree planting and environmental awareness',
    'Implemented NLP techniques to understand and handle user queries effectively',
    'Built a responsive web interface using HTML, CSS, and JavaScript frameworks',
    'Integrated AI models with Python and Flask for accurate, real-time responses',
    'Enhanced knowledge in AI, chatbot design, and sustainable development practices',
    'Collaborated on project design and deployment for real-world impact'
  ],
  certificateLink: 'https://drive.google.com/file/d/1ke7nAENNQa7E6pR09vDNS27lV0I6Exkf/view?usp=sharing' 
}
,
    {
    title: 'AI&ML Analyst Intern',
    company: 'EDUNET FOUNDATION',
    location: 'Remote',
    period: 'June 3 – July 15, 2024 (6 weeks)',
    description: [
      'Completed a 6-week AI/ML internship via IBM SkillsBuild in collaboration with APSSDC and Edunet Foundation',
      'Built a machine learning model to detect occupational burnout based on user input data',
      'Applied classification algorithms and conducted exploratory data analysis',
      'Performed data preprocessing, feature engineering, and model evaluation',
      'Explored psychological health patterns using real-world datasets',
      'Used tools like Python, Scikit-learn, Pandas, and Matplotlib for implementation',
      'Improved understanding of AI-driven decision-making in healthcare analytics'
    ],
    certificateLink: 'https://drive.google.com/file/d/1GxBqPvWa97whUr-5pKqqAAgU6D7hpwwX/view?usp=sharing' 
  }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Work <span className="text-red-500">Experience</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            My professional journey and the roles that have shaped my expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-black">{exp.title}</h3>
                      <div className="flex items-center text-red-500 text-sm mt-1 sm:mt-0">
                     
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 text-sm flex items-start">
                          <span className="text-red-500 mr-2 mt-1.5 w-1 h-1 rounded-full bg-red-500 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

{exp.certificateLink && (
  <div className="mt-4">
    <a
      href={exp.certificateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-red-600 text-white  hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 shadow-md"
    >
      View Certification
    </a>
  </div>
)}





                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;