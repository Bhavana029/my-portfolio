import React from 'react';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';
import myPhoto from '../asserts/pic-me.jpg';

const About = () => {
  const features = [
    {
      icon: <Code className="text-red-500" size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: <Palette className="text-red-500" size={32} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with great user experience.'
    },
    {
      icon: <Smartphone className="text-red-500" size={32} />,
      title: 'Responsive Design',
      description: 'Building applications that work perfectly on all devices and screen sizes.'
    },
    {
      icon: <Globe className="text-red-500" size={32} />,
      title: 'Web Performance',
      description: 'Optimizing applications for speed, SEO, and exceptional user experience.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          
           <h3 className="text-2xl font-semibold text-red-500 mb-4 p-10">Education</h3>
     <ul className="relative bg-zinc-900 rounded-xl p-6 space-y-5 border-l-4 border-red-500">
  {/* School */}
  <li className="relative pl-6">
    <div className="absolute w-3 h-3 bg-red-500 rounded-full left-0 top-2.5"></div>
    <h4 className="text-lg font-bold text-white">ZP High School</h4>
    <p className="text-gray-300 text-sm">2016 - 2020</p>
  </li>

  {/* Intermediate */}
  <li className="relative pl-6">
    <div className="absolute w-3 h-3 bg-red-500 rounded-full left-0 top-2.5"></div>
    <h4 className="text-lg font-bold text-white">GOVT.Polytechinc ,Proddutoor</h4>
    <p className="text-gray-300 text-sm">2020 - 2023</p>
    <p className="text-gray-400 text-sm">Specialization: Computer Science and Engineering</p>
  </li>

  {/* B.Tech */}
  <li className="relative pl-6 pb-4">
    <div className="absolute w-3 h-3 bg-red-500 rounded-full left-0 top-2.5"></div>
    <h4 className="text-lg font-bold text-white">JNTUA College of Pulivendula</h4>
    <p className="text-gray-300 text-sm">2023 - 2026</p>
    <p className="text-gray-400 text-sm">Specialization: Computer Science and Engineering</p>
  </li>
</ul>

 <h3 className="text-2xl font-semibold text-red-500 mb-4 p-10">Summary</h3>


          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            I'm a dedicated developer with a strong drive to build meaningful digital solutions. With hands-on experience in both web development, I enjoy turning ideas into user-friendly, impactful applications. I love bringing projects to life with clean code and thoughtful design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-80 h-80 overflow-hidden mx-auto mb-4">
            {/* <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center"> */}
              {/* <div className="text-center"> */}
                {/* <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4"> */}
  <img
    src={myPhoto}
    alt="Bhavana Profile"
    className="w-full h-full object-cover"
  />
</div>

                {/* <p className="text-gray-600">Professional Photo</p>
              </div> */}
            {/* </div> */}
          {/* </div> */}

          <div>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              With a background in computer science and a passion for design, I bridge the gap
              between technical excellence and creative vision. I specialize in modern web
              technologies and enjoy working on projects that challenge me to grow.
            </p>
            
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
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

export default About;