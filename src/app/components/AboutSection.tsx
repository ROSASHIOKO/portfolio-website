"use client";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-200 text-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title & Intro */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg max-w-3xl mx-auto">
            I am a passionate web developer with a strong interest in creating dynamic and user-friendly web applications.
            With experience in modern web technologies, I enjoy solving complex problems and continuously learning to improve my skills.
          </p>
        </div>

        {/* Skills */}
        <div className="bg-gray-300 p-6 rounded-xl shadow-md mb-6">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <p className="mb-4">
            I have a wide range of skills that enable me to develop and maintain modern web applications. Some of the key
            skills include:
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
        <div className="bg-gray-400 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <p className="mb-4">
            I hold a Bachelor's degree in Computer Science, where I gained foundational knowledge in programming, algorithms,
            and data structures. Here's a brief overview of my education:
          </p>
          <ul className="list-disc pl-6">
            <li>Bachelor's Degree in Computer Science</li>
            <li>XYZ University, Graduated in 2023</li>
            <li>Key subjects: Data Structures, Algorithms, Web Development, Database Management</li>
            <li>Projects: Developed a full-stack web application using React and Node.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
