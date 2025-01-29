import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { courses, courseCategories } from "./constant";

const Course = () => {
  const [activeCategory, setActiveCategory] = useState("MUSIC");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => {
        const currentIndex = courseCategories.indexOf(prev);
        const nextIndex = (currentIndex + 1) % courseCategories.length;
        return courseCategories[nextIndex];
      });
    }, 5000); // Auto switch category every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="courses" className="w-full text-center my-10 px-4 md:px-10">
      {/* Animated Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-3xl font-bold"
      >
        Courses <span className="text-primary">We</span> Provide
      </motion.h2>

      {/* Tabs */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex justify-center space-x-4 md:space-x-6 mt-6"
      >
        {courseCategories.map((category) => (
          <button
            key={category}
            className={`text-sm md:text-lg font-semibold ${
              activeCategory === category
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Swiper Slider */}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-6"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2.5, spaceBetween: 30 },
          }}
        >
          {courses[activeCategory]?.map((course) => (
            <SwiperSlide key={course.id} className="bg-white shadow-lg rounded-lg p-4 md:p-6">
              <motion.img
                src={course.image}
                alt={course.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-32 md:h-40 object-contain rounded-lg"
              />
              <h3 className="text-lg md:text-xl font-semibold mt-4">{course.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base mt-2 mb-2">{course.description}</p>
                  
                  <button className="primary-btn mt-5">Book a Demo</button>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Course;
