import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-10">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="container mx-auto flex flex-col md:flex-row justify-between items-center"
      >
        {/* About Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl font-semibold"
          >
            About Us
          </motion.h3>
          <p className="mt-2 text-sm md:text-base">
            We provide a wide range of online courses in different categories. Explore your passion with us!
                  </p>
                  <button className="secondary-btn mt-5">Try a session with us</button>
        </div>

        {/* Quick Links Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl font-semibold"
          >
            Quick Links
          </motion.h3>
          <ul className="mt-2">
            <li>
              <a href="#courses" className="hover:text-blue-500">Courses</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">Contact</a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-blue-500">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="text-center md:text-left">
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl font-semibold"
          >
            Contact Us
          </motion.h3>
          <p className="mt-2 text-sm md:text-base">
            Email: <a href="mailto:#" className="hover:text-blue-500">thanks@ehobby.com</a>
          </p>
          <p className="mt-2 text-sm md:text-base">
            Phone: <a href="tel:+1234567890" className="hover:text-blue-500">+91XXXXXXXX</a>
          </p>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-8 text-center text-sm md:text-base"
      >
        <p>&copy; {new Date().getFullYear()} pritamdutta_assignment. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
