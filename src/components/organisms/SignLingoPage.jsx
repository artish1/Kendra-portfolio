import React from "react";
import styled from "styled-components";
import PicturesDisplay from "../molecules/PicturesDisplay";
import signLingoPic1 from "../../images/sign-lingo-1.jpg";
import signLingoPic2 from "../../images/sign-lingo-2.jpg";
import signLingoPic3 from "../../images/sign-lingo-3.jpg";
import HighlightedTitle from "../molecules/HighlightedTitle";
import ProjectText from "../atoms/ProjectText";
import BoldBlackText from "../atoms/BoldBlackText";
import List from "../atoms/List";
import ListItem from "../atoms/ListItem";

const Root = styled.div`
  margin: 0 auto;
  max-width: 596px;
  height: 100%;

  margin-bottom: 300px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const SignLingoPage = () => {
  return (
    <Root>
      <PicturesDisplay
        pictures={[signLingoPic1, signLingoPic2, signLingoPic3]}
        marginBottom="26"
      />
      <HighlightedTitle width="583" height="48" highlightWidth="589">
        American Sign Language
      </HighlightedTitle>
      <HighlightedTitle
        marginTop="4"
        marginBottom="28"
        width="587"
        highlightWidth="423"
      >
        learning platform
      </HighlightedTitle>

      <ProjectText>
        There are currently no fun and convenient ways for people to learn
        American Sign Language online. We wanted to create an experience similar
        to Duolingo for people to learn ASL.
      </ProjectText>

      <BoldBlackText marginTop="16" marginBottom="8">
        Problem:
      </BoldBlackText>

      <List spacing="8" marginBottom="80">
        <ListItem>
          ASL learners cannot easily assess or practice what they know.
        </ListItem>
        <ListItem>
          ASL learners do not know if they are signing correctly.
        </ListItem>
      </List>

      <HighlightedTitle
        width="583"
        highlightWidth="472"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="27"
      >
        How do people learn ASL?
      </HighlightedTitle>
      <ProjectText>
        I checked the Duolingo forums to see if any of their users were talking
        about wanting an ASL track to be added. I discovered a thread that has
        been active since 2014 with
        <Bold>
          hundreds of posts about people wanting a Duolingo ASL experience to
          exist.
        </Bold>
      </ProjectText>
    </Root>
  );
};

export default SignLingoPage;
