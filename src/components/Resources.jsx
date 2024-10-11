// src/components/Resources.jsx
import React from 'react';
import { FaPhone, FaBookOpen, FaUsers } from 'react-icons/fa';

const resources = [
  {
    name: 'National Suicide Prevention Lifeline',
    link: 'https://suicidepreventionlifeline.org/',
    description: '24/7 support for those in distress.',
    icon: <FaPhone className="text-3xl text-blue-500" />,
  },
  {
    name: 'Mindfulness Articles',
    link: 'https://www.mindful.org/',
    description: 'Articles on mindfulness and mental health.',
    icon: <FaBookOpen className="text-3xl text-green-500" />,
  },
  {
    name: 'Support Groups',
    link: 'https://www.supportgroups.com/',
    description: 'Connect with others who understand.',
    icon: <FaUsers className="text-3xl text-purple-500" />,
  },
  // Add more resources as needed
];

const Resources = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">Helpful Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-center mb-4">
              {resource.icon}
              <h3 className="ml-4 text-xl font-bold text-gray-800">{resource.name}</h3>
            </div>
            <p className="text-gray-600">{resource.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Resources;
