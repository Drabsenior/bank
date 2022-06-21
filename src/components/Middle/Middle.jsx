import React, { useEffect } from "react";
import "./Middle.css";
import middleicon from "./../../assets/images/middle.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Middle = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const animation = useAnimation();
  useEffect(() => {
    console.log(`animate is ${inView}`);
    if (inView) {
      console.log("animation started");
      animation.set({ y: 40 });
      animation.start({
        y: 0,
      });
    }
  }, [inView]);
  return (
    <div className="middlewrapper">
      <div className="middlecontainer" ref={ref}>
        <motion.div
          className="leftmiddle"
          animate={animation}
          transition={{
            duration: 0.5,
          }}
        >
          <span className="smallheadermiddle">Premium Event</span>
          <h1>Unlimited Transactions with zero fees</h1>
          <span className="middledesc">
            Get access to our exclusive app that allows you to send unlimited
            transactions without getting charged any fees
          </span>
          <button>See More</button>
        </motion.div>
        <motion.div
          className="rightmiddle"
          animate={animation}
          transition={{
            duration: 0.5,
          }}
        >
          <img src={middleicon} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Middle;
