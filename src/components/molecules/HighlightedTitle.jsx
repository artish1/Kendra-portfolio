import React from "react";
import styled from "styled-components";

const Root = styled.div`
  position: relative;
  width: ${(props) => props.width || "100"}px;
  height: ${(props) => props.height || "48"}px;

  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

const Text = styled.h2`
  position: absolute;
  bottom: 0px;
  font-family: ${(props) => props.fontFamily || "Work Sans"};
  font-size: ${(props) => props.fontSize || "48"}px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "bold"};
  z-index: 2;
  color: #252525;
  transform: translateX(4px);
`;

const Highlight = styled.div`
  height: ${(props) => props.highlightHeight || "25"}px;
  width: ${(props) => props.highlightWidth || "250"}px;

  background-color: #fada59;
  position: absolute;
  bottom: ${(props) => props.highlightOffset || "7"}px;

  z-index: 1;
`;

const HighlightedTitle = (props) => {
  const { children, highlightWidth, highlightHeight } = props;
  return (
    <Root {...props}>
      <Text {...props}>{children}</Text>
      <Highlight
        highlightHeight={highlightHeight}
        highlightWidth={highlightWidth}
        highlightOffset={props.highlightOffset}
      />
    </Root>
  );
};

export default HighlightedTitle;
