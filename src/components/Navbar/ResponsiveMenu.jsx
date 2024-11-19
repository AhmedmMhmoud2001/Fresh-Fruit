// eslint-disable-next-line no-unused-vars
import React from "react";
import {motion} from 'framer-motion'
import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const ResponsiveMenu = ({isOpen,toggleMenu}) => {
  const menuVariants = {
    closed: { x: 0 }, // Menu slides out of view
    open: { x: 0 }, // Menu slides into view
  };
  return (
    <motion.div
      className="absolute right:0 top-20 h-[250px] w-full   z-50"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={menuVariants}
      transition={{ duration: 0.5 }}
    >
      {
        isOpen && (
          <div className="container bg-primary/90 text-white py-4 rounded-3xl"> 
          {/* Close Button */}
        <button onClick={toggleMenu} className="text-white text-right flex justify-end items-center  ">
              <IoMdClose/>
        </button>
  
        {/* Menu Items */}
        <ul className="space-y-4 text-center">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        </div>
        )
      }
      
      
    </motion.div>


  )
};

export default ResponsiveMenu;
