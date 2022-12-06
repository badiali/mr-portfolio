import React, { useState } from "react";
import { Link } from "react-scroll";
import { sections } from "../data/sections";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#fafaf9]">
      <div className="flex justify-between items-center h-18 w-full mx-auto px-20 fixed  text-[#0f766e] bg-[#fafaf9]">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">MR.</h1>

        {/* menu */}
        <ul className="hidden md:flex uppercase">
          {sections.map(({ id, link }) => (
            <li
              key={id}
              className="p-4 hover:text-white hover:bg-[#00df9a] rounded-md  hover:border-[#00df9a]  cursor-pointer"
            >
              <Link to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <div
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#fafaf9] flex flex-col justify-center items-center"
          }
        >
          {/* Side Drawer Menu */}
          <div>
            <div className="flex w-full items-center justify-between">
              <h1 className="w-full text-3xl font-bold  text-[#00df9a]">MR.</h1>
            </div>

            <div className="border-b border-[#0f766e] my-4">
              <p className="w-[100%] md:w-[90%] py-4">
                Let&#39;s build something together
              </p>
            </div>

            <div className="py-4 flex flex-col items-center">
              <ul className="uppercase">
                {sections.map(({ id, link }) => (
                  <Link key={id} href={`/#${link}`}>
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 text-sm  tracking-wider cursor-pointer"
                    >
                      {link}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 pt-5 mx-auto w-4/5 gap-10">
              <div className="flex cursor-pointer  hover:bg-[#cbf3f0] rounded-full hover:border-[#cbf3f0]">
                <Link href="https://www.linkedin.com/in/mercedes-ramella">
                  <FaLinkedin size={35} />
                </Link>
              </div>

              <div className="flex cursor-pointer hover:bg-[#cbf3f0] rounded-full  hover:border-[#cbf3f0]">
                <Link href="https://github.com/MechiRamella">
                  <FaGithub size={35} />
                </Link>
              </div>
              <div className="flex cursor-pointer hover:bg-[#cbf3f0] rounded-full  hover:border-[#cbf3f0]">
                <Link href="mailto:ramellamercedes@gmail.com">
                  <HiOutlineMail size={35} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
