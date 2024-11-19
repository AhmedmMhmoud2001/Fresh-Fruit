// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../../assets/fruit-plate.png";
import leaf from "../../assets/leaf.png";
import { FaShoppingBag } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeRight } from "../../utility/animation";

const Hero = () => {
  return (
    <div className="">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center md:py-6 ">
        {/* details */}
        <div className="flex flex-col lg:gap-10 md:gap-6 gap-4 py-4 relative">
          <motion.h1
            variants={FadeRight(0.6)}
            initial="hidden"
            animate="visible"
            className="font-bold lg:text-6xl md:text-5xl text-4xl font-serif "
          >
            <span className="block">Healthy</span> <span>Fresh</span>{" "}
            <span className="text-secondary">Fruits!</span>
          </motion.h1>
          <motion.p
            variants={FadeRight(0.9)}
            initial="hidden"
            animate="visible"
            className="text-xl"
          >
            Order Now For Fresh Healthy Life
          </motion.p>
          <motion.p
            variants={FadeRight(1.2)}
            initial="hidden"
            animate="visible"
            className="text-gray-600 max-w-[400px]"
          >
            Healthy and yummy food for fresh morning breakfast. Eat Daily for
            good health and mind Order now and get 20% off on your first order
          </motion.p>
          {/* you can use primary-btn*/}
          <motion.button
            variants={FadeRight(1.5)}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center  gap-2 bg-primary text-white shadow-[0px_10px_14px_-7px_#de0029] font-bold text-lg rounded-xl w-[160px] p-2 hover:!scale-110 duration-300 "
          >
            <FaShoppingBag />
            Order Now
          </motion.button>
          <div className="absolute lg:-top-16 top-0 md:left-72 -left-40 opacity-80 blur-sm  rotate-45 -z-10">
            <motion.img
              initial={{ opacity: 0, y: -100, rotate: 75 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="md:w-72 w-96  "
              src={leaf}
              alt=""
            />
          </div>
        </div>
        {/* img */}
        <div>
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            src={img}
            className="drop-shadow"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
