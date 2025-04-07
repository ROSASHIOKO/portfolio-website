import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "This is a description of project 1",
        imgUrl: "/images/projects/project1.png"
    },
    {
        id: 2,
        title: "Project 2",
        description: "This is a description of project 2",
        imgUrl: "/images/projects/project2.png"
    },
    {
        id: 3,
        title: "Project 3",
        description: "This is a description of project 3",
        imgUrl: "/images/projects/project3.png"
    },
];

const ProjectSection = () => {
    return (
       <section id="projects" className="py-16">
           <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
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
