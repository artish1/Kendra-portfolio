import React from "react";
import styled from "styled-components";

const Root = styled.div`
  position: relative;
  width: 340px;
  height: 40px;
`;

const HighlightBox = styled.div`
  position: absolute;
  background-color: #fada59;
  bottom: 0px;
  height: 25px;
  width: 100%;
`;

const Text = styled.h2`
  position: absolute;
  margin: 0px;
  padding: 0px;
  font-family: Work Sans;
  font-size: 48px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "bold"};

  bottom: -8px;
  left: 4px;

  color: #252525;
`;

class HomeTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Root>
        <HighlightBox>
          <Text {...this.props}>Hi, I'm Kendra</Text>
        </HighlightBox>
      </Root>
    );
  }
}

export default HomeTitle;
