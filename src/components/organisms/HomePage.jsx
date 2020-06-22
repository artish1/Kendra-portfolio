import React from "react";
import styled from "styled-components";
import HomeTitle from "../molecules/HomeTitle";

const Root = styled.div`
  margin: 0 auto;
  max-width: 400px;
  width: 100px;
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
      </CenterDiv>
    </Root>
  );
};

export default HomePage;
