import React from "react";
import styled from "styled-components";

import VersionBox from "../atoms/VersionBox";

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
  height: ${(props) => props.height}px;
`;

const Version = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  color: #494949;
  margin-bottom: 7px;
  text-align: center;
`;

const PicturesDisplay = ({
  pictures,
  marginBottom,
  columns,
  itemWidth,
  itemHeight,
  versioned,
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
          <div>
            {versioned && (
              <Version>{key === 2 ? "Final" : "V" + (key + 1)}</Version>
            )}
            <Picture
              height={itemHeight}
              width={itemWidth}
              key={key}
              src={versioned ? pic.image : pic}
            />
            {versioned && (
              <VersionBox
                accepted={pic.details.accepted}
                text={pic.details.text}
              />
            )}
          </div>
        ))}
    </Root>
  );
};

export default PicturesDisplay;
