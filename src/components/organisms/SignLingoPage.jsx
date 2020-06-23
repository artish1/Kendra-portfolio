import React from "react";
import styled from "styled-components";
import PicturesDisplay from "../molecules/PicturesDisplay";
import signLingoPic1 from "../../images/sign-lingo-1.jpg";
import signLingoPic2 from "../../images/sign-lingo-2.jpg";
import signLingoPic3 from "../../images/sign-lingo-3.jpg";
import HighlightedTitle from "../molecules/HighlightedTitle";

const Root = styled.div`
    margin: 0 auto;
  max-width: 596px;
  height: 100%:
  `;

const SignLingoPage = () => {
  return (
    <Root>
      <PicturesDisplay
        pictures={[signLingoPic1, signLingoPic2, signLingoPic3]}
        marginBottom="26"
      />

      <HighlightedTitle width="583" height="48" highlightWidth="587">
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
    </Root>
  );
};

export default SignLingoPage;
