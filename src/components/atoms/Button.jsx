import React from "react";
import styled from "styled-components";

const Root = styled.div`
  background: #252525;
  border-radius: 4px;

  width: ${(props) => props.width || "136"}px;
  height: ${(props) => props.height || "26"}px;

  color: #ffffff;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${(props) => props.margin};

  cursor: pointer;
`;

const Button = (props) => {
  return <Root {...props}></Root>;
};

export default Button;
