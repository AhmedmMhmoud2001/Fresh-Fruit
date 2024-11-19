// eslint-disable-next-line no-unused-vars
import React from "react";
import img from '../../assets/banner-bg.jpg'
import {motion} from 'framer-motion'
import {FadeLeft} from '../../utility/animation'
import { FaShoppingBag } from "react-icons/fa";

const bgimg = {
  backgroundImage:`URL(${img})`,
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat"
}

const Banner3 = () => {
  return (
    <div className=" my-10 py-30">
    <div className="container grid md:grid-cols-2 grid-cols-1 items-center rounded-3xl" style={bgimg}>
    <div></div>
    <div className="">
    <motion.h2
    variants={FadeLeft(.5)}
    initial="hidden"
    animate="visible"
     className="text-6xl font-bold my-6" >Get Fresh <br/> Fruits Today</motion.h2>
    <motion.p
    variants={FadeLeft(.8)}
    initial="hidden"
    animate="visible"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</motion.p>
    
    <motion.button
    variants={FadeLeft(1.1)}
    initial="hidden"
    animate="visible"
     className="primary-btn my-6 flex items-center gap-3"> <FaShoppingBag className="text-xl"/>Order Now</motion.button>
    </div>
    </div>
  </div>
  );
};

export default Banner3;
