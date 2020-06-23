import React from "react";
import styled from "styled-components";

import kendraPic from "../../images/kendra_pic.jpg";

const Root = styled.div`
  margin: 0 auto;
  max-width: 756px;
  height: 100%;
`;

const AboutTitle = styled.h1`
  width: 756px;
  height: 168px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;

  color: #252525;

  margin-bottom: 40px;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const ProfileSection = styled.div`
  margin-right: 60px;
`;
const PictureContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;
const Picture = styled.img`
  position: absolute;
  width: 268.11px;
  height: 268.11px;
  border-radius: 6px;
  bottom: 21.89px;
  left: 21.89px;
  z-index: 2;
`;
const PictureBackShadow = styled.div`
  position: absolute;
  width: 268.11px;
  height: 268.11px;
  bottom: 0px;
  background: #fada59;
  border-radius: 6px;
  z-index: 1;
`;

const Artifacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

const DotDivider = styled.div`
  width: 8px;
  height: 8px;
  background: #fada59;
  border-radius: 25px;
  margin: 0px 12px;
`;

const ArtifactLink = styled.a`
  text-decoration: none;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #494949;
`;

const DetailSection = styled.div``;

const DetailIntro = styled.p`
  width: 410px;
  height: 66px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;

  margin-bottom: 26px;
  margin-top: 8px;
  color: #494949;
`;

const HobbyTitle = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;

  width: 400px;
  height: 29px;

  color: #494949;
  margin-bottom: 4px;
`;

const HobbyList = styled.ul`
  width: 447px;
  height: 200px;
  list-style-type: circle;
  list-style: none;

  transform: translateX(-1px);
`;

const Hobby = styled.li`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 145.5%;

  color: #494949;

  &:before {
    content: "•";
    width: 1px;
    transform: translateX(-20px);

    color: #494949;
    font-weight: bold;
    display: inline-block;

    margin-left: 8px;
  }
`;

const AboutPage = () => {
  return (
    <Root>
      <AboutTitle>
        My name is Kendra. I like to leave things prettier than how I found
        them.
      </AboutTitle>

      <FlexContainer>
        <ProfileSection>
          <PictureContainer>
            <Picture src={kendraPic} />
            <PictureBackShadow />
          </PictureContainer>

          <Artifacts>
            <ArtifactLink href="mailto:KendraMcKernan@gmail.com">
              Email
            </ArtifactLink>
            <DotDivider />
            <ArtifactLink href="https://www.linkedin.com/in/kendra-mckernan/">
              LinkedIn
            </ArtifactLink>
            <DotDivider />
            <ArtifactLink href="https://www.google.com">Resume</ArtifactLink>
          </Artifacts>
        </ProfileSection>

        <DetailSection>
          <DetailIntro>
            About me pages are cheesy. We all hate doing these, right?
          </DetailIntro>

          <HobbyTitle>Here’s some stuff that I like to do -</HobbyTitle>

          <HobbyList>
            <Hobby>Teach English as a second language</Hobby>
            <Hobby>Kayak</Hobby>
            <Hobby>Drink my weight in coffee </Hobby>
            <Hobby>Watch horror movies </Hobby>
            <Hobby>Sing Celine Dion songs really loud</Hobby>
          </HobbyList>
        </DetailSection>
      </FlexContainer>
    </Root>
  );
};

export default AboutPage;
