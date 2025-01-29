import { motion } from "framer-motion";
import { benefits } from "./constant";

const Benefits = () => {
  return (
    <div id="benefits" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="border border-secondary text-primary rounded-lg h-6 text-4xl font-medium px-2 py-1 uppercase"
        >
          Why Choose Us
        </motion.span>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide"
        >
          Your Child's Learning Journey{" "}
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Made Easy
          </span>
        </motion.h2>
      </div>

      <div className="flex flex-wrap mt-10 mb-5 lg:mt-20">
        {benefits.map((step, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full sm:w-1/2 lg:w-1/4 px-4"
            key={index}
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-14 w-14 bg-primary text-secondary text-2xl font-bold rounded-full mb-4">
                {step.id}
              </div>
              <motion.h5
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="mt-1 mb-4 text-xl font-semibold"
              >
                {step.title}
              </motion.h5>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="text-md px-4 mb-12 text-neutral-500"
              >
                {step.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Center the button */}
      <div className="flex justify-center mt-5 mb-3">
        <button className="primary-btn px-6 py-3 text-lg font-semibold text-white bg-primary rounded-lg">
          Book a Free Demo
        </button>
      </div>
    </div>
  );
};

export default Benefits;
