import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project 1',
    description: 'An elegant apartment website showcasing modern living spaces',
    image: 'https://images.unsplash.com/photo-1582883545851-725a3b9502ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww',
    tech: ['HTML', 'Javascript', 'Bootstrap'],
    github: 'https://github.com/davidosky700/html-apartment',
    live: 'https://davidosky700.github.io/html-apartment/'
  },
  {
    title: 'Project 2',
    description: 'A dynamic football website showcasing live scores, team stats, and match updates using API',
    image: 'https://plus.unsplash.com/premium_photo-1678232179463-9e1cb6a72a3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vdGJhbGwlMjBhcGl8ZW58MHx8MHx8fDA%3D',
    tech: ['EJS', 'Express.js', 'API'],
    github: 'https://github.com/davidosky700/my-football-api',
    live: 'https://my-football-api.onrender.com'
    
  },
  {
    title: 'Project 3',
    description: 'A sleek e-commerce website featuring the latest gadgets, including phones, laptops, and accessories',
    image: 'https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D',
    tech: ['React', 'Typescript', 'Tailwind CSS'],
    github: 'https://github.com/davidosky700/ecommerce',
    live: 'https://ecommerce-kzzc.onrender.com'
  },

  {
    title: 'Project 4',
    description: 'A secure authentication website ensuring seamless user login and data protection',
    image: 'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXV0aGVudGljYXRpb258ZW58MHx8MHx8fDA%3D',
    tech: ['EJS', 'Express.js', 'PostgreSQL'],
    github: 'https://github.com/davidosky700/pg-authentication',
    live: 'https://pg-authentication.onrender.com'
  },

  {
    title: 'Project 5',
    description: 'A dynamic e-commerce website designed to help businesses showcase and advertise their products to a wider audience',
    image: 'https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D',
    tech: ['HTML', 'Javascript', 'Bootstrap'],
    github: 'https://github.com/davidosky700/html-products',
    live: 'https://davidosky700.github.io/html-products/'
  },

  {
    title: 'Project 6',
    description: 'A modern to-do list app built with React and TypeScript',
    image: 'https://plus.unsplash.com/premium_photo-1683749808835-6f8f186a903e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRvJTIwZG8lMjBsaXN0fGVufDB8fDB8fHww',
    tech: ['React', 'Typescript', 'Tailwind CSS'],
    github: 'https://github.com/davidosky700/react-todo-list',
    live: 'https://react-todo-list-vw79.onrender.com'
  }
];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>


          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;