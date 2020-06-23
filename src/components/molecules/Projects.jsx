import React from "react";
import styled from "styled-components";
import ProjectSection from "./ProjectSection";

import projects from "../../projects";

const Root = styled.div``;

const Projects = () => {
  return (
    <Root>
      {projects.map((project, key) => (
        <ProjectSection
          images={project.images}
          title={project.title}
          url={project.url}
          description={project.description}
          key={key}
        />
      ))}
    </Root>
  );
};

export default Projects;
