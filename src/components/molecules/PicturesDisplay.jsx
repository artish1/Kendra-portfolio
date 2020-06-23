import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 187.66px);
  gap: 16.34px;

  margin-bottom: ${(props) => props.marginBottom || "0"}px;
`;

const Picture = styled.img`
  width: 187.66px;
`;

const PicturesDisplay = ({ pictures, marginBottom }) => {
  return (
    <Root marginBottom={marginBottom}>
      {pictures && pictures.map((pic, key) => <Picture key={key} src={pic} />)}
    </Root>
  );
};

export default PicturesDisplay;
