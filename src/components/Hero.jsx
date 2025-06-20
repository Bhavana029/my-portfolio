import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
             Mekala Bhavana
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer  & AI and ML
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I create beautiful, responsive web applications with modern technologies.
            Passionate about clean code, user experience, and innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
  className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
>
  View My Work
</button>

           <a
  href="https://drive.google.com/file/d/1DxLirOV_SpuGZutZOb-6gkL5UYA2gRcL/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
>
  <Download size={20} />
  Download CV
</a>

          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Bhavana029" className="text-white hover:text-red-500 transition-colors duration-200 p-2">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bhavana-mekala-8b396b306" className="text-white hover:text-red-500 transition-colors duration-200 p-2">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mekalabhavana029@gmail.com" className="text-white hover:text-red-500 transition-colors duration-200 p-2">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;