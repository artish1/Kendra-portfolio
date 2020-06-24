import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PicturesDisplay from "../molecules/PicturesDisplay";
import HighlightedTitle from "../molecules/HighlightedTitle";
import Button from "../atoms/Button";

import wanderlust1 from "../../images/wanderlust/wanderlust1.jpg";
import wanderlust2 from "../../images/wanderlust/wanderlust2.jpg";
import wanderlust3 from "../../images/wanderlust/wanderlust3.jpg";

import info1 from "../../images/wanderlust/info1.jpg";
import info2 from "../../images/wanderlust/info2.jpg";
import info3 from "../../images/wanderlust/info3.jpg";

import saved1 from "../../images/wanderlust/saved1.jpg";
import saved2 from "../../images/wanderlust/saved2.jpg";
import saved3 from "../../images/wanderlust/saved3.jpg";

import create1 from "../../images/wanderlust/create1.jpg";
import create2 from "../../images/wanderlust/create2.jpg";
import create3 from "../../images/wanderlust/create3.jpg";

import color1 from "../../images/wanderlust/color1.jpg";
import color2 from "../../images/wanderlust/color2.jpg";
import color3 from "../../images/wanderlust/color3.jpg";

import houseIcon from "../../images/house-icon.png";

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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HomeIcon = styled.img`
  margin-left: 8px;
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WanderlustPage = () => {
  const history = useHistory();
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

      <HighlightedTitle
        width="570"
        highlightWidth="225"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="38"
        marginTop="97"
      >
        Saved tours
      </HighlightedTitle>

      <ProjectText marginBottom="80">
        There needed to be a way for users to keep track of the tours they were
        interested in booking. The saved tours page became cluttered quickly and
        it was frustrating trying to find a specific tour that was saved.{" "}
        <Bold>
          I added the ability to sort tours in a way the user was already
          familiar with and a way to sort tours by trip.
        </Bold>
      </ProjectText>

      <PicturesDisplay
        versioned
        itemHeight="661"
        itemWidth="291"
        gap="12"
        pictures={[
          {
            image: saved1,
            details: {
              accepted: false,
              text: "Tours were difficult to find on this page.",
            },
          },
          {
            image: saved2,
            details: {
              accepted: false,
              text: "Tours couldn’t be saved by location.",
            },
          },
          {
            image: saved3,
            details: {
              accepted: true,
              text: "Tours can be sorted and trips can be organized",
            },
          },
        ]}
      />

      <HighlightedTitle
        width="570"
        highlightWidth="221"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="27"
        marginTop="80"
      >
        Create tour
      </HighlightedTitle>

      <ProjectText marginBottom="80">
        <Bold>
          I added a way for guides to add photos of their tours to increase
          bookings.
        </Bold>{" "}
        They needed a way to preview the images they chose and delete ones that
        they decided not to use.
      </ProjectText>

      <PicturesDisplay
        versioned
        itemHeight="579"
        itemWidth="291"
        gap="12"
        pictures={[
          {
            image: create1,
            details: {
              accepted: false,
              text: "There is no way to upload photos of a tour.",
            },
          },
          {
            image: create2,
            details: {
              accepted: false,
              text: "Photos can not be previewed or deleted once chosen.",
            },
          },
          {
            image: create3,
            details: {
              accepted: true,
              text: "There is a way to upload and remove tour photos.",
            },
          },
        ]}
      />

      <HighlightedTitle
        width="570"
        highlightWidth="281"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="27"
        marginTop="80"
      >
        Color selection
      </HighlightedTitle>

      <ProjectText marginBottom="80">
        I experimented with colors that would convey a sense of excitement and
        adventure, but also assure the user that they will be hiring
        professionals. <Bold>Accessibility is very important.</Bold> I made sure
        the final color scheme was readable and easy to interact with.
      </ProjectText>

      <PicturesDisplay
        versioned
        itemHeight="611"
        itemWidth="291"
        gap="18"
        pictures={[
          {
            image: color1,
            details: {
              accepted: false,
              text: "Not accessible enough.",
            },
          },
          {
            image: color2,
            details: {
              accepted: false,
              text: "Not accessible enough.",
            },
          },
          {
            image: color3,
            details: {
              accepted: true,
              text:
                "Accessible and similar to competitive apps/easily recognizable.",
            },
          },
        ]}
      />

      <ButtonContainer>
        <Button
          onClick={() => {
            history.push("/");
            window.scrollTo(0, 0);
          }}
          width="91"
          margin="48px 12px"
        >
          Home <HomeIcon src={houseIcon} />
        </Button>
      </ButtonContainer>
    </Root>
  );
};

export default WanderlustPage;
