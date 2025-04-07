import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gray-200">
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-12">
        {/* Text Section */}
        <div className="sm:col-span-7 place-self-center text-center sm:text-left px-4 sm:px-0">
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello, my name is Rosa
          </h1>
          <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
            I am a software developer based in Kenya. I specialize in building web applications using React and Next.js.
          </p>
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
        <div className="sm:col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-gray-300 w-[300px] h-[450px] relative mx-auto sm:mx-0">
            <Image
              src="/images/anime.jpeg"
              alt="Rosa"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
