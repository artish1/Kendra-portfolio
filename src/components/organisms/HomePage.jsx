import React from "react";
import styled from "styled-components";
import HomeTitle from "../molecules/HomeTitle";
import HomeSubTitle from "../molecules/HomeSubTitle";
import Projects from "../molecules/Projects";
import Divider from "../atoms/Divider";

const Root = styled.div`
  margin: 0 auto;
  max-width: 502px;
  height: 100%:
`;

const CenterDiv = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const HomePage = () => {
  return (
    <Root>
      <CenterDiv>
        <HomeTitle />
        <HomeSubTitle />
      </CenterDiv>
      <Projects />

      <Divider />
    </Root>
  );
};

export default HomePage;
