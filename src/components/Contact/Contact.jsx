import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet";
import React, { useEffect } from "react";
import "./Contact.css";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();
  const controls = useAnimation();
  useEffect(() => {
    console.log(`animate is ${inView}`);
    if (inView) {
      console.log("animation started");
      animation.set({ opacity: 0, y: 60 });
      animation.start({
        opacity: 1,
        y: 0,
      });
      controls.set({ translateY: -60, opacity: 0 });
      controls.start({ translateY: 0, opacity: 1 });
    }
  }, [inView]);
  const position = [51.505, -0.09];
  return (
    <div className="ContactWrapper" id="contact" ref={ref}>
      <div className="Topcontactform">
        <motion.div
          className="Inputcontactform"
          animate={controls}
          transition={{
            duration: 0.7,
            type: "spring",
            bounce: 0.2,
            stiffness: 200,
            damping: 50,
          }}
        >
          <span>Contact us</span>
          <div className="Contactcredential">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="ContactInformation">
            <textarea placeholder="Subject" id="" cols="20" rows="5"></textarea>
            <textarea placeholder="Message" id="" cols="20" rows="5"></textarea>
            <div className="contactbtn">
              <button>Send</button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="Mapcontactform"
          animate={animation}
          transition={{
            duration: 0.5,
            type: "spring",
            bounce: 0.2,
            stiffness: 200,
            damping: 50,
          }}
        >
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          ,
        </motion.div>
      </div>
      <div className="Bottomform">
        <div className="addresswrapper">
          <GoLocation className="locationicon" />
          <div className="addressitem">
            <h2>Address:</h2>
            <span>198 West 21th Street , Suite 721 New Yourk NY 10036</span>
          </div>
        </div>
        <div className="addresswrapper">
          <BsTelephone className="locationicon" />
          <div className="addressitem">
            <h2>Phone:</h2>
            <div className="phonebreak">
              <span>+251 915 452 458</span>
              <span>+251 954 187 354</span>
            </div>
          </div>
        </div>
        <div className="addresswrapper">
          <AiOutlineMail className="locationicon" />
          <div className="addressitem">
            <h2>Email:</h2>
            <div className="phonebreak">
              <span>infoac@gmail.com</span>
              <span>betf2@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
