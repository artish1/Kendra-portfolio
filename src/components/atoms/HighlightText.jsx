import React from "react";
import styled from "styled-components";

const Root = styled.div`
  position: relative;
//   width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "9px"};
  margin: 0 auto;
`;

const HighlightBox = styled.div`
  position: absolute;
  background-color: #fada59;

  width: ${(props) => props.width || "100%"};
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
    this.state = { highlightBoxHeight: 0, highlightBoxWidth: 0 };
  }

  componentDidMount() {
    console.log(this.textNode.current.clientHeight);
    const textHeight = this.textNode.current.clientHeight;
    const highlightHeight = Math.floor(textHeight * 0.6);
    const textWidth = this.textNode.current.clientWidth;
    this.setState({
      highlightBoxHeight: highlightHeight,
      highlightBoxWidth: textWidth,
    });
  }

  render() {
    console.log(this.state);
    return (
      <Root
        width={this.state.highlightBoxWidth + "px"}
        height={this.state.highlightBoxHeight + "px"}
      >
        <HighlightBox
          width={this.state.highlightBoxWidth + "px"}
          height={this.state.highlightBoxHeight + "px"}
        ></HighlightBox>
        <Text ref={this.textNode} {...this.props}>
          {this.props.children}
        </Text>
      </Root>
    );
  }
}

export default HighlightText;
