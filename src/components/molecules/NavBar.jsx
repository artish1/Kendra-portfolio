import React from "react";
import styled from "styled-components";
import HighlightText from "../atoms/HighlightText";

const Root = styled.div`
  padding: 102px 102px 109px 102px;
  box-sizing: border-box;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameTitle = styled.h2`
  width: 140px;
  height: 19px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #252525;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-decoration: none;
    color: #252525;
    margin-left: 30px;
  }
`;

const NavBar = () => {
  return (
    <Root>
      <NameTitle>Kendra McKernan</NameTitle>

      <LinksContainer>
        <a href="#">Work</a>
        <a href="#">About</a>
      </LinksContainer>
    </Root>
  );
};

export default NavBar;
