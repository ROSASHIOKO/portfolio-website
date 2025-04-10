import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "This is a project whereby I created a website using Next.js and Tailwind CSS.",
        imgUrl: "/images/projects/project1.png",
    },
    {
        id: 2,
        title: "Project 2",
        description: "This is a project whereby a template was used to recreate a website.",
        imgUrl: "/images/projects/project2.png",
    },
    {
        id: 3,
        title: "Project 3",
        description: "Used Strapi to create a backend for a website and also used Next.js to create a frontend for the website.",
        imgUrl: "/images/projects/project3.png",
    },
];

const ProjectSection = () => {
    return (
        <section id="projects" className="py-16">
            {/* Title */}
            <h2 className="text-3xl font-bold mb-4 text-center">My Projects</h2>

            {/* Paragraph */}
            <p className="text-lg text-center mb-8">
                Here are some of the projects I have worked on, you can visit my github to check out some more.
            </p>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;