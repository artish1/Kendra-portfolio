import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columns || "3"},
    ${(props) => props.itemWidth || "187.66"}px
  );
  gap: ${(props) => props.gap || "16.34"}px;

  margin-bottom: ${(props) => props.marginBottom || "0"}px;
`;

const Picture = styled.img`
  width: ${(props) => props.width || "187.66"}px;
`;

const PicturesDisplay = ({
  pictures,
  marginBottom,
  columns,
  itemWidth,
  gap,
}) => {
  return (
    <Root
      marginBottom={marginBottom}
      columns={columns}
      itemWidth={itemWidth}
      gap={gap}
    >
      {pictures &&
        pictures.map((pic, key) => (
          <Picture width={itemWidth} key={key} src={pic} />
        ))}
    </Root>
  );
};

export default PicturesDisplay;
