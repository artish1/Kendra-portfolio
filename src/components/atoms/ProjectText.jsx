import React from "react";
import styled from "styled-components";

const Root = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 144%;

  color: #494949;
`;

const ProjectText = ({ children }) => {
  return <Root>{children}</Root>;
};

export default ProjectText;
