import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";
import NavLink from "../atoms/NavLink";

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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const splitPath = location.pathname.split("/");
    if (splitPath.length > 0) {
      const firstPath = splitPath[1];
      if (firstPath === "" || firstPath === "work") {
        setSelectedIndex(0);
      } else if (firstPath === "about") {
        setSelectedIndex(1);
      }
    }
  }, [location]);

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <Root>
      <NameTitle>Kendra McKernan</NameTitle>

      <LinksContainer>
        <NavLink
          selected={selectedIndex === 0}
          highlightWidth="43px"
          onClick={() => handleClick("/")}
        >
          Work
        </NavLink>
        <NavLink
          selected={selectedIndex === 1}
          highlightWidth="50px"
          onClick={() => handleClick("/about")}
        >
          About
        </NavLink>
      </LinksContainer>
    </Root>
  );
};

export default NavBar;
