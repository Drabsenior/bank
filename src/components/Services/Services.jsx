import React, { useEffect } from "react";
import "./Services.css";
import icon1 from "./../../assets/images/icon1.svg";
import icon2 from "./../../assets/images/icon2.svg";
import icon3 from "./../../assets/images/icon3.svg";
import icon4 from "./../../assets/images/icon4.svg";
import icon5 from "./../../assets/images/icon5.svg";
import icon6 from "./../../assets/images/icon6.svg";
import icon7 from "./../../assets/images/icon7.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();
  const controls = useAnimation();
  useEffect(() => {
    console.log(`animate is ${inView}`);
    if (inView) {
      console.log("animation started");
      animation.set({ y: -20, opacity: 0 });
      animation.start({
        opacity: 1,
        y: 0,
      });
      controls.set({ translateY: -50, translateX: -30, opacity: 0 });
      controls.start({ translateY: 0, translateX: 0, opacity: 1 });
    }
  }, [inView]);
  const items = [
    {
      coloring: "bisque",
      Head1: "Enterprise Services",
      icon: icon1,
      s1: "mobility",
      s2: "iot",
      s3: "Web deblopment",
    },
    {
      coloring: "rgb(219, 219, 219)",
      Head1: "Enterprise Services",
      icon: icon2,
      s1: "mobility",
      s2: "iot",
      s3: "Web deblopment",
    },
    {
      coloring: "bisque",
      Head1: "Birthdays",
      icon: icon3,
      s1: "mobility",
      s2: "iot",
      s3: "Web deblopment",
    },
    {
      coloring: "rgb(219, 219, 219)",
      Head1: "Ballons",
      icon: icon4,
      s1: "mobility",
      s2: "iot",
      s3: "Web deblopment",
    },
    {
      coloring: "bisque",
      Head1: "Cake",
      icon: icon5,
      s1: "mobility",
      s2: "iot",
      s3: "Web deblopment",
    },
    {
      coloring: "rgb(219, 219, 219)",
      Head1: "Moments",
      icon: icon6,
      s1: "mobility",
      s2: "iot",
      s3: "Web deblopment",
    },
  ];
  return (
    <div className="serviceswrapper" id="services">
      <div className="serviceswhole" ref={ref}>
        <div className="leftservices">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/21/12/30/dark-1845065__480.jpg"
            alt=""
          />
          <motion.div
            className="ourservicescontent"
            animate={animation}
            transition={{
              duration: 1,
            }}
          >
            <h2>Our Services</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <button>Explore All Our Services</button>
          </motion.div>
        </div>
        <div className="rightservices">
          <div className="servicescontainer">
            {items.map((item, i) => {
              return (
                <motion.div
                  className="servicesitem"
                  animate={controls}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  style={{ backgroundColor: `${item.coloring}` }}
                >
                  <img src={item.icon} alt="" />
                  <h3>{item.Head1}</h3>
                  <div className="serviceslink">
                    <span>{item.s1}</span>
                    <span>{item.s2}</span>
                    <span>{item.s3}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
