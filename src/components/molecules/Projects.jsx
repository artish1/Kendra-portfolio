import React from "react";
import styled from "styled-components";
import ProjectSection from "./ProjectSection";

import sign1Img from "../../images/sign-lingo-1.jpg";
import sign2Img from "../../images/sign-lingo-2.jpg";
import sign3Img from "../../images/sign-lingo-3.jpg";

const Root = styled.div``;

const Projects = () => {
  return (
    <Root>
      <ProjectSection
        images={[sign1Img, sign2Img, sign3Img]}
        title={[
          { text: "American Sign Language", width: 300 },
          { text: "learning platform", width: 210 },
        ]}
        url={"https://www.google.com"}
        description="SignLingo provides a game-like experience learning American Sign Language"
      ></ProjectSection>
    </Root>
  );
};

export default Projects;
