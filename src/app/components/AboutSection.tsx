"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState(""); // No default tab selected
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(tab === id ? "" : id); // Toggle tab on second click
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/tech1.png" width={500} height={500} alt="about image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full" >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate web developer with a strong interest in creating dynamic and user-friendly web applications. 
            With experience in modern web technologies, I enjoy solving complex problems and continuously learning to improve my skills.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton 
              SelectTab={() => handleTabChange("skills")} 
              active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton 
              SelectTab={() => handleTabChange("education")} 
              active={tab === "education"}>
              Education
            </TabButton>
            <TabButton 
              SelectTab={() => handleTabChange("certifications")} 
              active={tab === "certifications"}>
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {tab === "skills" && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <p>JavaScript, React, Next.js, TypeScript, CSS, HTML, Node.js</p>
              </div>
            )}
            {tab === "education" && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                <p>Bachelor's Degree in Computer Science from XYZ University</p>
              </div>
            )}
            {tab === "certifications" && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
                <p>Certified React Developer, AWS Certified Solutions Architect</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
