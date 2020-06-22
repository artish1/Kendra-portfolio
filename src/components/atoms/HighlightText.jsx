import React from "react";
import styled from "styled-components";

const Root = styled.div`
  position: relative;
`;

const HighlightBox = styled.div`
  position: absolute;
  background-color: #fada59;

  width: 100%;
  height: ${(props) => props.height || "9px"};
  bottom: 2px;
  font-family: ${(props) => props.fontFamily || "Inter"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-style: normal;
  vertical-align: text-bottom;
`;

const Text = styled.h2`
  position: absolute;
  margin: 0px;
  padding: 0px;
  font-family: ${(props) => props.fontFamily || "Inter"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "bold"};

  /* Mine Shaft */
  bottom: 0px;

  color: #252525;
`;

class HighlightText extends React.Component {
  constructor(props) {
    super(props);
    this.textNode = React.createRef();
    this.state = { highlightBoxHeight: 0 };
  }

  componentDidMount() {
    console.log(this.textNode.current.clientHeight);
    const textHeight = this.textNode.current.clientHeight;
    const highlightHeight = Math.floor(textHeight * 0.6);
    this.setState({ highlightBoxHeight: highlightHeight });
  }

  render() {
    console.log(this.state);
    return (
      <Root>
        <HighlightBox
          height={this.state.highlightBoxHeight + "px"}
        ></HighlightBox>
        <Text ref={this.textNode} {...this.props}>
          Hi I'm Kendra
        </Text>
      </Root>
    );
  }
}

export default HighlightText;
