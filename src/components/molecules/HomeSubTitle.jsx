import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-top: 16px;
`;

const DotDivider = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 25px;
  background: #fada59;
  margin: 0px 11px;
`;

const SubText = styled.h4`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #494949;
`;

const HomeSubTitle = () => {
  return (
    <Root>
      <SubText>UX designer</SubText>
      <DotDivider />
      <SubText>Sushi lover</SubText>
      <DotDivider />
      <SubText>Bird watcher</SubText>
    </Root>
  );
};

export default HomeSubTitle;
