import React from "react";
import { StyledParagraph, StyledLink } from "../styles/Typography.styled";
import { ProjectsContainer, StyledProjects } from "../styles/Projects.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { projectData } from "./projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <SectionHeading>
        <SectionTitle number="01">Projects</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textAlign="center">
        Selected projects I've worked on recently.{" "}
        <StyledLink
          href="https://github.com/mdmonauwarulislam"
          target="_blank"
          rel="noopener noreferrer"
        >
          Want to see more?
        </StyledLink>
      </StyledParagraph>
      <ProjectsContainer>
        {projectData.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </ProjectsContainer>
    </StyledProjects>
  );
};

export default Projects;
