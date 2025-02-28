import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and user-friendly interfaces using React, TypeScript, and Tailwind CSS.',
    icon: <Code size={40} className="text-blue-500" />
  },
  {
    title: 'Backend Development',
    description: 'Creating robust server-side applications with Node.js, Express, and PostgreSQL.',
    icon: <Server size={40} className="text-green-500" />
  },
  {
    title: 'Mobile-Responsive Design',
    description: 'Creating fully responsive designs for seamless cross-device compatibility.',
    icon: <Smartphone size={40} />,
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
