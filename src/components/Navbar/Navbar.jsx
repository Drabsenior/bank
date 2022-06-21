import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";
import { VscChromeClose } from "react-icons/vsc";
import "./Navbar.css";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgcolor, setBgColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const navVariants = {
    hidden: {
      y: -3000,
      opacity: 0,
    },

    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -1000,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div className="allnav">
      <div className={bgcolor ? "NavbarWrapper navbg" : "NavbarWrapper"}>
        <motion.div
          className="LogoNavbar"
          variants={titleVariants}
          animate="visible"
          initial="hidden"
        >
          <span>Virtual banking</span>
        </motion.div>
        <div className="Mobilescreen">
          <div className="MenuIcon" onClick={handleOpen}>
            <HiMenu />
          </div>
          <div className={`${isOpen ? "MobileMenu" : "CloseMenu"}`}>
            <div
              className={`${isOpen ? "OpenIcon" : "CloseIcon"}`}
              onClick={handleOpen}
            >
              <VscChromeClose />
            </div>
            <ul>
              <li>
                {" "}
                <Link
                  to="/"
                  smooth={true}
                  duration={1000}
                  offset={-50}
                  onClick={handleOpen}
                >
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  offset={-20}
                  onClick={handleOpen}
                >
                  About us
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="services"
                  smooth={true}
                  duration={1000}
                  offset={-10}
                  onClick={handleOpen}
                >
                  Services
                </Link>
              </li>
              <li onClick={handleOpen}>
                {" "}
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={1000}
                  offset={-20}
                  onClick={handleOpen}
                >
                  Testimonials
                </Link>
              </li>
              <li onClick={handleOpen}>
                {" "}
                <Link
                  to="contact"
                  smooth={true}
                  duration={1000}
                  offset={-10}
                  onClick={handleOpen}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="LinkNavbar">
          <ul>
            <motion.li
              variants={navVariants}
              animate="visible"
              whileHover={{
                scale: 1.1,
                color: "gold",
              }}
              initial="hidden"
            >
              <Link to="/" smooth={true} duration={1000} offset={-50}>
                Home
              </Link>
            </motion.li>
            <motion.li
              variants={navVariants}
              animate="visible"
              whileHover={{
                scale: 1.1,
                color: "gold",
              }}
              initial="hidden"
            >
              {" "}
              <Link to="about" smooth={true} duration={1000} offset={-20}>
                About us
              </Link>
            </motion.li>
            <motion.li
              variants={navVariants}
              animate="visible"
              whileHover={{
                scale: 1.1,
                color: "gold",
              }}
              initial="hidden"
            >
              {" "}
              <Link to="services" smooth={true} duration={1000} offset={-10}>
                Services
              </Link>
            </motion.li>
            <motion.li
              variants={navVariants}
              animate="visible"
              whileHover={{
                scale: 1.1,
                color: "gold",
              }}
              initial="hidden"
            >
              {" "}
              <Link
                to="testimonials"
                smooth={true}
                duration={1000}
                offset={-20}
              >
                Testimonials
              </Link>
            </motion.li>
            <motion.li
              variants={navVariants}
              animate="visible"
              whileHover={{
                scale: 1.1,
                color: "gold",
              }}
              initial="hidden"
            >
              {" "}
              <Link to="contact" smooth={true} duration={1000} offset={-10}>
                Contact
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
