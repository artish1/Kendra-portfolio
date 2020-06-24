import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 130px;
`;

const FooterTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 400px;
  height: 33px;

  margin-bottom: 24px;
`;
const FooterTitle = styled.h2`
  position: absolute;

  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  color: #252525;

  transform: translateX(0px);
  z-index: 3;
`;
const FooterTitleHighlight = styled.div`
  position: absolute;

  background-color: #fada59;
  bottom: 0px;
  height: 22px;
  width: ${(props) => props.width}px;

  z-index: 2;
`;

const Artifacts = styled.div`
  display: flex;
  align-items: center;
`;

const DotDivider = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 25px;
  background: #fada59;
  margin: 0px 12px;
`;

const ContactArtifact = styled.a`
  text-decoration: none;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #494949;

  cursor: pointer;
`;

const Footer = () => {
  return (
    <Root>
      <FooterTitleContainer>
        <FooterTitle>We should</FooterTitle>
        <FooterTitleHighlight width={258} />
      </FooterTitleContainer>

      <FooterTitleContainer>
        <FooterTitle>work together!</FooterTitle>
        <FooterTitleHighlight width={368} />
      </FooterTitleContainer>

      <Artifacts>
        <ContactArtifact href="mailto:KendraMcKernan@gmail.com">
          Email
        </ContactArtifact>
        <DotDivider />
        <ContactArtifact href="https://www.linkedin.com/in/kendra-mckernan/">
          LinkedIn
        </ContactArtifact>
      </Artifacts>
    </Root>
  );
};

export default Footer;
