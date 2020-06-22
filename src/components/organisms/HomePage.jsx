import React from "react";
import styled from "styled-components";
import NavBar from "../molecules/NavBar";
import HighlightText from "../atoms/HighlightText";

const Root = styled.div``;

const FillDiv = styled.div`
  width: 110px;
`;

const HomePage = () => {
  return (
    <Root>
      <NavBar />
    </Root>
  );
};

export default HomePage;
