"use client";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-700 text-black py-16 px-6 rounded-3xl mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full rounded-3xl">
        <div className="w-full h-full">
          {/* Image Section */}
          <div className="w-full h-full overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/images/projects/about.png" // Replace with your actual image path
              alt="About me"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="w-3/4 h-auto">
          {/* About Me Section */}
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg">
              I am a passionate web developer with a strong interest in creating dynamic and user-friendly web applications.
              With experience in modern web technologies, I enjoy solving complex problems and continuously learning to improve my skills.
              I am well versed in the frontend development and have a keen interest in backend development as well.
              I am currently working on several projects that involve both frontend and backend technologies, allowing me to gain a comprehensive understanding of the full web development stack.
            </p>
          </div>
        </div>
      </div>

      {/* Skills and Education Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 rounded-3xl">
        {/* Skills */}
        <div className="bg-gray-300 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <p className="mb-4">
            I have a wide range of skills that enable me to develop and maintain modern web applications. Some of the key skills include:
          </p>
          <ul className="list-disc pl-6">
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>CSS & HTML</li>
            <li>Node.js</li>
            <li>GraphQL</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* Education */}
        <div className="bg-gray-300 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <p>
            I am pursuing a Diploma in Information and Communication Technology, where I am gaining foundational knowledge in programming, algorithms, and data structures.
            I am also involved in various projects that enhance my skills and understanding of web development.
            I have also joined learning programmes with Cisco.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;