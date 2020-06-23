import React from "react";
import styled from "styled-components";

const Root = styled.div`
  margin-top: 80px;
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 161.36px);

  gap: 9px;
  margin-bottom: 16px;
`;

const Image = styled.img``;

const RealProjectContainer = styled.div``;
const ProjectTitleContainer = styled.div`
  position: relative;
  width: 297px;
  height: 30px;
`;
const TitleText = styled.h2`
  position: absolute;
  margin: 0px;
  padding: 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;

  bottom: -6px;
  left: 4px;

  color: #252525;
  z-index: 2;
`;
const ProjectTitleHighlight = styled.div`
  position: absolute;
  background-color: #fada59;
  bottom: 0px;
  height: 13px;
  width: ${(props) => props.width}px;

  z-index: 1;
`;

const ProjectDescription = styled.p`
  width: 294px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  color: #494949;

  margin-top: 10px;

  transform: translateX(4px);
`;

const ProjectVisitButton = styled.div`
  width: 103px;
  height: 26px;

  background: #252525;
  border-radius: 4px;
  color: #ffffff;

  font-family: Inter;
  font-style: normal;
  //   font-weight: bold;
  font-size: 12px;
  line-height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 44px;
  cursor: pointer;
`;

const ProjectSection = ({ title, description, url, images }) => {
  return (
    <Root>
      <ImagesContainer>
        {images &&
          images.map((imgUrl, key) => <Image src={imgUrl} key={key} />)}
      </ImagesContainer>
      <RealProjectContainer>
        {title &&
          title.map((title, key) => (
            <ProjectTitleContainer key={key}>
              <TitleText>{title.text}</TitleText>
              <ProjectTitleHighlight width={title.width} />
            </ProjectTitleContainer>
          ))}
      </RealProjectContainer>
      <ProjectDescription>{description}</ProjectDescription>

      <ProjectVisitButton>See more</ProjectVisitButton>
    </Root>
  );
};

export default ProjectSection;
