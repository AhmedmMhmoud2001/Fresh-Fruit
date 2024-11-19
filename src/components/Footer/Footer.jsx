// eslint-disable-next-line no-unused-vars
import React from "react";
import {FaLeaf, } from 'react-icons/fa'
import { FaFacebook ,FaYoutube ,FaInstagram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
  <div className="bg-orange-200 py-10">
    <div className="container flex flex-wrap justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
          <span className="text-2xl text-primary font-bold">FRUIT</span>
          <span className="text-2xl text-secondary font-bold">STORE</span>
          <span>
            <FaLeaf className="text-green-500 text-2xl" />
          </span>
        </div>
        <div className="flex gap-4 pt-4">
         <FaFacebook className="text-xl"/>
         <FaInstagram className="text-xl"/>
         <FaXTwitter className="text-xl"/>
         <FaYoutube className="text-xl"/>
        </div>
    </div>
    
  </div>
  );
};

export default Footer;
