import React from "react";
import styled from "styled-components";

const Root = styled.li`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.fontSize || "18"}px;
  line-height: 145.5%;

  margin-bottom: ${(props) => props.marginBottom || "0"}px;

  color: #494949;

  &:before {
    content: "•";
    width: 1px;
    transform: translateX(-20px);

    color: #494949;
    font-weight: bold;
    display: inline-block;

    margin-left: 8px;
  }
`;

const ListItem = (props) => {
  return <Root {...props}>{props.children}</Root>;
};

export default ListItem;
