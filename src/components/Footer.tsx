import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold">Nzelue David</h2>
        <p className="text-gray-400 mt-1">Frontend Web Developer</p>

        {/* Navigation Links */}
        <nav className="mt-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400 transition">Services</a>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://github.com/davidosky700/html-portfolio" target="_blank" rel="noopener noreferrer">
            <Github className="text-white hover:text-blue-400 transition" size={24} />
          </a>
          <a href="https://www.linkedin.com/in/david-nzelue-46129725b" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-white hover:text-blue-400 transition" size={24} />
          </a>
          <a href="https://x.com/David42684140" target="_blank" rel="noopener noreferrer">
            <Twitter className="text-white hover:text-blue-400 transition" size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-6">
          &copy; {new Date().getFullYear()} Nzelue David. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
