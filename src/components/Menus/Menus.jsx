// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "../../assets/fruits/apple.png";
import img2 from "../../assets/fruits/avocado.png";
import img3 from "../../assets/fruits/cherry.png";
import img4 from "../../assets/fruits/orange.png";
import { motion } from "framer-motion";
import { FadeRight, FadeLeft } from "../../utility/animation";

const Menu = [
  {
    id: 1,
    title: "Fresh Red Apples",
    img: img1,
    price: "$3.99",
    delay: ".5",
  },
  {
    id: 2,
    title: "Fresh avocado",
    img: img2,
    price: "$3.99",
    delay: ".8",
  },
  {
    id: 3,
    title: "Fresh cherry",
    img: img3,
    price: "$3.99",
    delay: "1.1",
  },
  {
    id: 4,
    title: "Fresh orange",
    img: img4,
    price: "$3.99",
    delay: "1.4",
  },
];
const Menus = () => {
  return (
    <div>
      <div className="container">
        <motion.div
          variants={FadeRight(0.6)}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold">Our Menu</h2>
        </motion.div>
        <div className="my-4 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
          {Menu.map((data) => (
            <motion.div
              key={data.id}
              variants={FadeLeft(data.delay)}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-around gap-3 shadow-[0px_0px_30px_-15px_#000] rounded-3xl mx-2 my-6 hover:!scale-110 duration-300"
            >
              <div className="">
                <img
                  src={data.img}
                  className="w-20 transform -translate-y-8 scale-125"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{data.title}</h3>
                <span className="text-xl font-semibold text-secondary">
                  {data.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menus;
