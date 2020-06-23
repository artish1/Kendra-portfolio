import React from "react";
import styled from "styled-components";

const Root = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 144%;

  color: #494949;

  margin-bottom: ${(props) => props.marginBottom || "0"}px;
  margin-top: ${(props) => props.marginTop || "0"}px;
`;

const ProjectText = (props) => {
  return <Root {...props}>{props.children}</Root>;
};

export default ProjectText;
