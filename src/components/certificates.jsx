import React from 'react';

const certificatesData = [
  {
    name: "JAVA",
    description: "Completed  training in Java Programming applications.",
    url: "https://drive.google.com/file/d/1fiOln7VbYaiMzglve9vaAhCa_plKpGYi/view?usp=sharing"
  },
  {
    name: "Full Stack Web Development",
    description: "Gained skills in frontend and backend development using MERN stack.",
    url: "https://drive.google.com/drive/folders/1DRy-l9DrWLzRbWxuYQwjO2I9qOHSowv5?usp=sharing"
  },
  {
    name: "AI&ML || DATAScience",
    description: "Covered supervised and unsupervised learning techniques with Python.",
    url: "https://drive.google.com/drive/folders/1lIw1gOkDJpwqmWL4ba7K9l4NP9KHfNwk?usp=sharing"
  }
];

function Certificates() {
  return (
    <div className="bg-black min-h-screen py-10 px-5" id='certification'>
      <h1 className="text-3xl text-white text-center font-bold mb-10">My Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-red-500 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105"
          >
            <h2 className="text-white text-xl font-semibold mb-2">{cert.name}</h2>
            <p className="text-gray-300 mb-4">{cert.description}</p>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-red-500 hover:text-white border border-red-500 hover:bg-red-500 transition-all px-4 py-2 rounded-full"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
