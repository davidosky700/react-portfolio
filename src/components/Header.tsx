import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO */}
        <motion.div whileHover={{ scale: 1.1 }} className="text-2xl font-bold text-gray-800">
          Portfolio
        </motion.div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
            Services
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/davidosky700/html-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/david-nzelue-46129725b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:davidchuka57@gmail.com?subject=Job Inquiry&body=Hello, I am interested in your services."
            className="text-gray-600 hover:text-gray-900"
          >
            <Mail size={20} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-gray-800">
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-800">
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col items-start gap-4 p-6">
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">
            Contact
          </a>

          <div className="flex gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/davidosky700/html-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/david-nzelue-46129725b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:davdchuka57@gmail.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </nav>
      </motion.div>

      {/* Click Outside to Close */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setIsOpen(false)}></div>
      )}
    </motion.header>
  );
};

export default Header;
