import React from "react";
import "./Hero.css";
import { BsChevronCompactRight } from "react-icons/bs";
import party from "../../assets/videos/party.mp4";
import { motion } from "framer-motion";

const Hero = () => {
  const headerVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const buttonVariants = {
    hidden: {
      scale: 0.2,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };
  return (
    <div className="HeroWrapper">
      <motion.div className="bgvideo">
        <video autoPlay muted src={party} type="video/mp4" />
      </motion.div>

      <div className="Herodescription">
        <motion.h1
          variants={headerVariants}
          animate="visible"
          initial="hidden"
          transition={{
            delay: 0.6,
          }}
        >
          Virtual Banking Made Easy
        </motion.h1>
        <motion.span
          variants={headerVariants}
          animate="visible"
          initial="hidden"
          transition={{
            delay: 0.8,
          }}
        >
          Sign up for a new account today and recive $250 in credit towards your
          next payment
        </motion.span>
        <div className="homebtnwrapper">
          <motion.button
            variants={buttonVariants}
            animate="visible"
            initial="hidden"
            transition={{
              delay: 0.8,
            }}
          >
            Get Started <BsChevronCompactRight />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
