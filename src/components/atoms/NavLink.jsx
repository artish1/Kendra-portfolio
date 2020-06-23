import React from "react";
import styled from "styled-components";

const Root = styled.a`
  margin-left: 30px;
  position: relative;

  width: 20px;
  height: 19px;
`;

const Highlight = styled.div`
  position: absolute;
  bottom: 0px;
  width: ${(props) => props.highlightWidth};
  height: 9px;
  background: #fada59;
  z-index: 1;

  transform: translate(-1px, -4px);
`;

const NavText = styled.p`
  position: absolute;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  color: #252525;

  z-index: 2;
`;

const NavLink = (props) => {
  return (
    <Root href={props.href}>
      <NavText>{props.children}</NavText>
      {props.selected && <Highlight highlightWidth={props.highlightWidth} />}
    </Root>
  );
};

export default NavLink;
