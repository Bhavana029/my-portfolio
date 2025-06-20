import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
   {
  title: 'Spam Detector',
  description: 'An intelligent spam detection system using Natural Language Processing and Machine Learning. Built with Python and trained on labeled datasets, it classifies SMS or email messages as spam or not spam. Implemented using Scikit-learn, TF-IDF, and Naive Bayes, with an interactive UI for input and results.',
  image: 'https://so-development.org/wp-content/uploads/2023/02/AdobeStock_328682040-scaled-1.jpeg',
  tags: ['Python', 'NLP', 'Scikit-learn', 'TF-IDF', 'Naive Bayes'],
  liveUrl: 'https://spam-detector-ge1e.onrender.com',
  githubUrl: 'https://github.com/Bhavana029/spam-detector'
}
,
   {
  title: 'Resume Matcher',
  description: 'An AI-powered resume screening and ranking system that matches candidate resumes with job descriptions using Natural Language Processing. Utilizes TF-IDF and cosine similarity to rank resumes based on relevance. Designed to streamline recruitment by identifying top candidates quickly and efficiently.',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcIoR1uPrxr6pAMkPYAdsg2GMxKd8-zmmvIt6YsF7j2UhLVHBvRwewN3C1RXbFStagng&usqp=CAU=600',
  tags: ['Python', 'NLP', 'TF-IDF', 'Cosine Similarity', 'Resume Parsing'],
  liveUrl: 'https://resume-matcher-13ze.onrender.com',
  githubUrl: 'https://github.com/Bhavana029/resume-matcher'
}
,{
  title: 'Photo Gallery',
  description: 'A full-stack photo gallery web application built with the MERN stack. Features include user authentication, photo uploads with tags and descriptions, album creation, profile management, and advanced search and filtering. Only signed-in users can view and manage their personalized galleries.',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9P7O_9xIxa-vGsR9eMeUctzHQ15Cs9koOYA&s=600',
  tags: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN', 'Authentication'],
   liveUrl: 'https://gallery-fullstack-project.vercel.app/',
      githubUrl: 'https://github.com/Bhavana029/gallery-fullstack-project'
},

    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with modern design, smooth animations, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next.js', 'Tailwind', 'Framer Motion'],
      liveUrl: 'https://gallery-fullstack-project.vercel.app/',
      githubUrl: 'https://github.com/Bhavana029/gallery-fullstack-project'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            My <span className="text-red-500">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
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