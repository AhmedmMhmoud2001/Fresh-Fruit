// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaLeaf } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
const links = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Products",
    link: "#",
  },
  {
    id: 3,
    title: "About",
    link: "#",
  },
  {
    id: 4,
    title: "Shop",
    link: "#",
  },
  {
    id: 5,
    title: "Contacts",
    link: "#",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className=" container flex justify-between items-center  py-8 ">
        <div className="flex gap-2 justify-center items-center">
          <span className="text-2xl text-primary font-bold">FRUIT</span>
          <span className="text-2xl text-secondary font-bold">STORE</span>
          <span>
            <FaLeaf className="text-green-500 text-2xl" />
          </span>
        </div>
        <div className="gap-4 hidden md:flex">
          {/* hover:border-b-primary hover:border-b-2 */}
          <ul className="flex flex-row justify-center  items-center gap-12   ">
            {links.map((data) => (
              <li
                key={data.id}
                className="font-semibold text-md text-gray-500 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444]  duration-100"
              >
                <a href={data.link}>{data.title}</a>
              </li>
            ))}
            <li>
              <IoCartOutline className="text-2xl hover:bg-primary hover:text-white duration-100 rounded-full w-9 h-9 p-1" />
            </li>
          </ul>
        </div>
        <div className="group md:hidden">
          <FaBars className="text-3xl " onClick={toggleMenu} />
        </div>
      </nav>
      <div className="">
        <ResponsiveMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
