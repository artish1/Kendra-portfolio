import React from "react";
import styled from "styled-components";

const Root = styled.ul`
  margin-bottom: ${(props) => props.marginBottom || "0"}px;
  margin-top: ${(props) => props.marginTop || "0"}px;

  li {
    margin-bottom: ${(props) => props.spacing || "16"}px;
  }
`;

const List = (props) => {
  return <Root {...props}>{props.children}</Root>;
};

export default List;
