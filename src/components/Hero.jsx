import React from "react";
import Blob from "../assets/blob.svg";
import HeroPng from "../assets/hero.png";
import { easeInOut, motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0, 
      y : 50,
    },
    animate: {
      opacity: 1, 
      y: 0, 
      transition: {
        type: "spring",
        stiffness : 100,
        duration: 0.5, 
        delay: delay,
        ease : "easeInOut",
      }
    }
  }
}




const Hero = () => {
  return (
    <section className="bg-white overflow-hidden relative mt-5">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* Branding */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate = "animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug">
              Online Live Classes From{" "}
              <span className="text-secondary">Experts</span> in India
            </motion.h1>
            <motion.div
               variants={FadeUp(1)}
              initial="initial"
              animate = "animate"
              className="flex justify-center md:justify-start mt-3">
              <button className="primary-btn mr-4">Book a Trial Class</button>
              <button className="secondary-btn">Contact Us</button>
            </motion.div>
          </div>
        </div>

        {/* Brand Image */}
        <div className="flex justify-center items-center relative z-10">
          <motion.img
            initial={{ x: 50, opacity: 0 }}   
            animate={{ x: 0, opacity: 1 }}
            transition={{duration:0.6 , delay : 0.4 , ease : "easeInOut"}}
    
            src={HeroPng}
            className="w-[400px] xl:w-[600px] drop-shadow relative z-20"
            alt="Hero Background"
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}   
            animate={{ x: 0, opacity: 1 }}
            transition={{duration:0.6 , delay : 0.2 , ease : "easeInOut"}}

            src={Blob}
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-0 hidden md:block"
            alt="Blob Background"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
