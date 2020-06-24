import React from "react";
import styled from "styled-components";
import PicturesDisplay from "../molecules/PicturesDisplay";
import HighlightedTitle from "../molecules/HighlightedTitle";

import wanderlust1 from "../../images/wanderlust/wanderlust1.jpg";
import wanderlust2 from "../../images/wanderlust/wanderlust2.jpg";
import wanderlust3 from "../../images/wanderlust/wanderlust3.jpg";

import info1 from "../../images/wanderlust/info1.jpg";
import info2 from "../../images/wanderlust/info2.jpg";
import info3 from "../../images/wanderlust/info3.jpg";

import ProjectText from "../atoms/ProjectText";

const Root = styled.div`
  margin: 0 auto;
  max-width: 909px;
  height: 100%;

  margin-bottom: 100px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WanderlustPage = () => {
  return (
    <Root>
      <CenterDiv>
        <PicturesDisplay
          itemWidth="294"
          itemHeight="811"
          gap="13"
          marginBottom="28"
          pictures={[wanderlust1, wanderlust2, wanderlust3]}
        />
      </CenterDiv>

      <HighlightedTitle
        marginBottom="27"
        width="800"
        height="48"
        highlightWidth="718"
      >
        Tour guide advertising service
      </HighlightedTitle>

      <ProjectText marginBottom="8">
        <Bold>Problem:</Bold>
      </ProjectText>

      <ProjectText>
        Travel sites are cluttered with restaurants, hotels and car rentals.
        Tour guides need a place to advertise their services without being
        overshadowed by other attractions.
      </ProjectText>

      <HighlightedTitle
        width="570"
        highlightWidth="267"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="25"
        marginTop="80"
      >
        Tour info page
      </HighlightedTitle>

      <ProjectText marginBottom="122">
        According to research,{" "}
        <Bold>
          people are more likely to book a tour if they can see pictures of it
          beforehand.
        </Bold>{" "}
        A carousel wasn’t effective enough at bringing attention to the images
        because they were too small. I moved the images to the top of the page
        and made them larger to make them the focal point of the tour
        informatiom page.
      </ProjectText>

      <PicturesDisplay
        itemWidth="281"
        gap="33"
        versioned
        pictures={[
          {
            image: info1,
            details: {
              accepted: false,
              text: "Images in carousel aren’t large enough.",
            },
          },
          {
            image: info2,
            details: {
              accepted: false,
              text: "Icons don’t have enough contrast.",
            },
          },
          {
            image: info3,
            details: {
              accepted: true,
              text:
                "Icons have good contrast, size and spacing. Images are now a focal point.",
            },
          },
        ]}
      />
    </Root>
  );
};

export default WanderlustPage;
