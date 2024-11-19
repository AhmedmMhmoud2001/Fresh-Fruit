// eslint-disable-next-line no-unused-vars
import React from "react";
import img from '../../assets/fruits-splash.png'
import {motion} from 'framer-motion'
import {FadeLeft,FadeRight} from '../../utility/animation'

const Banner = () => {
  return (
  <div className="bg-orange-200 my-10 py-10">
    <div className="container grid md:grid-cols-2 grid-cols-1 items-center">
    <div className=" flex justify-center items-center">
      <motion.img 
      variants={FadeRight(.5)}
      initial="hidden"
      animate="visible"
      src={img} className="w-80"  alt="" />
    </div>
    <div className="">
    <motion.h2
    variants={FadeLeft(.5)}
    initial="hidden"
    animate="visible"
     className="text-6xl font-bold my-6" >Brand Info</motion.h2>
    <motion.p
    variants={FadeLeft(.8)}
    initial="hidden"
    animate="visible"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</motion.p>
    <br />
    <motion.p
    variants={FadeLeft(.8)}
    initial="hidden"
    animate="visible"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</motion.p>
    <motion.button
    variants={FadeLeft(1.1)}
    initial="hidden"
    animate="visible"
     className="primary-btn my-6">Learn More</motion.button>
    </div>
    </div>
  </div>
);
};

export default Banner;
