import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Send, Github, Linkedin
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending...');
    
    const form = new FormData();
    form.append('access_key', '6a209cb8-8f52-449d-b823-eef76fd6c95c'); // Replace with your Web3Forms key
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('subject', formData.subject);
    form.append('message', formData.message);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form
      });

      const data = await res.json();

      if (data.success) {
        alert('✅ Message sent successfully!');
        setResult('');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.log('Error:', data);
        alert('❌ Message failed to send. Please try again.');
        setResult('Failed to send');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('❌ An unexpected error occurred.');
      setResult('Error');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-red-500" size={24} />,
      title: 'Email',
      details: 'mekalabhavana029@gmail.com',
      link: 'mailto:mekalabhavana029@gmail.com'
    },
    {
      icon: <Phone className="text-red-500" size={24} />,
      title: 'Phone',
      details: '+91 XXXXX XXXXX',
      link: 'tel:+918919698039'
    },
    {
      icon: <MapPin className="text-red-500" size={24} />,
      title: 'Location',
      details: 'Simhadripuram, Kadapa, Andhra Pradesh',
      link: 'https://www.google.com/maps/place/Simhadripuram,+Andhra+Pradesh'
    }
  ];

  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/Bhavana029', label: 'GitHub' },
    { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/bhavana-mekala-8b396b306/', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0">{info.icon}</div>
                  <div>
                    <h4 className="font-medium text-white group-hover:text-red-500 transition-colors duration-200">
                      {info.title}
                    </h4>
                    <p className="text-gray-400">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-2 bg-gray-900 rounded-lg hover:bg-gray-800"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-200"
                    placeholder="ENTER NAME"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-200"
                    placeholder="abcde@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-200"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>

              {result && (
                <p className="text-center mt-4 text-sm text-gray-300">{result}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
