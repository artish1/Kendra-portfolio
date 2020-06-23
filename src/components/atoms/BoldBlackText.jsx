import React from "react";
import styled from "styled-components";

const Root = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 144%;

  color: #252525;

  margin-top: ${(props) => props.marginTop || "0"}px;
  margin-bottom: ${(props) => props.marginBottom || "0"}px;
`;

const BoldBlackText = (props) => {
  return <Root {...props}>{props.children}</Root>;
};

export default BoldBlackText;
