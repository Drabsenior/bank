import React, { useEffect } from "react";
import "./Testimonials.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Testimonials = () => {
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
      controls.set({
        translateY: -50,
        translateX: -30,
        opacity: 0,
      });
      controls.start({
        translateY: 0,
        translateX: 0,
        opacity: 1,
      });
    }
  }, [inView]);
  const items = [
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
      name: "Helen Troy",
      occupation: "Designer",
      desc: "   Exploring the secrets and drama behind the genius of Leonardo da Vinci -- his life, his work and his personal struggles set against the backdrop of Renaissance",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
      name: "Helen Troy",
      occupation: "Designer",
      desc: "   Exploring the secrets and drama behind the genius of Leonardo da Vinci -- his life, his work and his personal struggles set against the backdrop of Renaissance",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
      name: "Helen Troy",
      occupation: "Designer",
      desc: "   Exploring the secrets and drama behind the genius of Leonardo da Vinci -- his life, his work and his personal struggles set against the backdrop of Renaissance",
    },
  ];

  return (
    <div className="TestimonialWrapper" id="testimonials" ref={ref}>
      <div className="testimonialHeading">
        <span>Testimonials</span>
      </div>
      <div className="testimonialheading2">
        <span>WHAT THEY SAY ABOUT US</span>
      </div>
      <div className="Testimonialscontents">
        {items.map((item, i) => {
          return (
            <motion.div
              className="Tetsimonialcontainer"
              animate={controls}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className="Testimonialsitem">
                <div className="testimonialtext">
                  <span>{item.desc}</span>
                </div>
              </div>

              <div className="lowertestimonial">
                <img src={item.image} alt="" />
                <span className="Testimonialname">{item.name}</span>
                <span className="Testimonialoccupation">{item.occupation}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
