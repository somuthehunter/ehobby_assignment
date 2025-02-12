import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import {NabBarMenu} from './constant'
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full  z-30">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration:0.4 , delay : 0.2}}
        className="container mx-auto py-4 px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div>
          <h1 className="font-bold text-2xl">
            e<span className="text-primary">H</span>obby.
            <span className="text-primary">in</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {NabBarMenu.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="py-2 px-3 hover:text-secondary relative group"
            >
              <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 hidden group-hover:block"></div>
              {item.title}
            </a>
          ))}
          <button className="primary-btn">Book a Demo</button>
          <button className="secondary-btn">Log in</button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={() => setIsSidebarOpen(true)}>
            <IoMdMenu className="text-4xl" />
          </button>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/50 z-40 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={() => setIsSidebarOpen(false)}
        >
          <IoMdClose />
        </button>

        {/* Sidebar Menu */}
        <ul className="flex flex-col items-start p-6 gap-4 mt-10">
          {NabBarMenu.map((item) => (
            <li key={item.id}>
              <a href={item.path} className="block py-2 px-3 hover:text-secondary">
                {item.title}
              </a>
            </li>
          ))}
          <button className="primary-btn w-full">Book a Demo</button>
          <button className="secondary-btn w-full">Log in</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
