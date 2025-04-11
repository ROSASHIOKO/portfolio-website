"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["developer", "designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Client-side rendering is active.");
    }
  }, []);

  return (
    <section className="bg-gray-200">
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-12 sm:items-center">
        {/* Text Section */}
        <div className="sm:col-span-6 text-center sm:text-left px-4 sm:px-8">
        <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
          Hello, my name is Rosa welcome to my portfolio.
       </h1>


          <div className="text-black text-base sm:text-lg mb-6 lg:text-xl">
            I am a{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="font-bold"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div>
            <a
              href="/my_cv.pdf"
              download
              className="inline-block px-6 py-3 w-full sm:w-fit rounded-full bg-black hover:bg-gray-800 text-white border border-black mt-3 text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="sm:col-span-6 px-4 sm:px-8 mb-8 sm:mb-0 sm:ml-4">
          <div className="relative w-[300px] h-[300px] bg-gray-800 rounded-full shadow-xl mx-auto sm:ml-12 flex items-center justify-center">
            <Image
              src="/images/hero-image.png"
              alt="Rosa"
              width={300}
              height={300}
              className="object-cover w-[95%] h-[95%] rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;