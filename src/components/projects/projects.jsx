import projectsStyles from "./projects.module.css";
import ProjectCard from "./project-card/project-card";
import { projectData } from "../../data/projectsData";
import OnScrollContainer from "../common/on-scroll-container/on-scroll-container";

export default function Projects() {
  return (
    <>
      <div className={projectsStyles.projects} id="projects">
        {projectData.map((project) => (
          <ProjectCard
            header={project.header}
            text={project.text}
            tags={project.tags}
            link={project.link}
            imgSrc={project.imgSrc}
            key={project.id}
          />
        ))}
      </div>
    </>
  );
}
