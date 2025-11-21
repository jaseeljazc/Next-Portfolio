'use client'

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  // Toggle menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // State to track if the contact form is open
  const [contactFormOpen, setContactFormOpen] = useState(false);

  // const openContactForm = () => setContactFormOpen(true);
  // const closeContactForm = () => setContactFormOpen(false);

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="flex container mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between h-16 md:h-20">
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <Link href="/" className="flex "> 
          <div className="flex  h-10 w-10 rounded-xl bg-linear-to-r from-gray-500 to-gray-100 items-center justify-center text-purple-600 font-bold text-xl mr-3">
            J
          </div>
          <span className="flex items-center text-xl font-bold bg-linear-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Jaseel
          </span>
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <nav className="sm:flex hidden space-x-8">
          {[ "About", "Skills", "Project", "Contact"].map(
            (item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                href={`#${item.toLowerCase()}`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            )
          )}
        </nav>

        {/* Social icons */}
        <div className="md:flex sm:block hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            href="https://github.com/jaseeljazc"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
       
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            href="https://www.linkedin.com/in/muhammed-jaseel-923610376"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>

          {/* Hire me button */}
          <a href="#contact">
            <motion.button
              // onClick={openContactForm}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.6,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="ml-4 px-4 py-2 rounded-xl bg-linear-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-600 hover:to-purple-700 hover:text-white transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-gray-300"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile nav */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-5">
          {["Home", "About", "Skills", "Project", "Contact"].map((item) => (
            <a
              onClick={() => {
                setTimeout(() => toggleMenu(), 1000); // give scroll time
              }}
              className="text-gray-300 font-medium py-2 cursor-pointer hover:text-violet-400 transition-colors duration-300"
              key={item}
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a
              href="https://github.com/jaseeljazc"
              className="hover:text-violet-400 transition-colors duration-300"
            >
              <FiGithub className="h-5 w-5 text-gray-300" />
            </a>
           
            <a
            href="https://www.linkedin.com/in/muhammed-jaseel-923610376"
              className="hover:text-violet-400 transition-colors duration-300"
            >
              <FiLinkedin className="h-5 w-5 text-gray-300" />
            </a>
          </div>

         
        </div>
      </motion.div>

    </header>
  );
};

export default Navbar;
