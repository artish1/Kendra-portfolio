import React from "react";
import styled from "styled-components";
import HighlightedTitle from "../molecules/HighlightedTitle";
import PicturesDisplay from "../molecules/PicturesDisplay";
import ProjectText from "../atoms/ProjectText";
import BoldBlackText from "../atoms/BoldBlackText";
import List from "../atoms/List";
import ListItem from "../atoms/ListItem";

// Images
import showcase1 from "../../images/recycle-iq/showcase1.png";
import showcase2 from "../../images/recycle-iq/showcase2.png";
import showcase3 from "../../images/recycle-iq/showcase3.png";

import competition1 from "../../images/recycle-iq/competition1.jpg";
import competition2 from "../../images/recycle-iq/competition2.jpg";
import competition3 from "../../images/recycle-iq/competition3.jpg";

import user1 from "../../images/recycle-iq/user1.png";
import user2 from "../../images/recycle-iq/user2.png";
import user3 from "../../images/recycle-iq/user3.png";

import bulbBullet from "../../images/bulb-bullet.png";
import RecycleIQUserCard from "../atoms/RecycleIQUserCard";

const Root = styled.div`
  margin: 0 auto;
  max-width: 568px;
  height: 100%;

  margin-bottom: 100px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexItem = styled.div`
  width: ${(props) => props.width || "175"}px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const BulbItem = styled(ListItem)`
  list-style-image: url(${bulbBullet});

  &:before {
    content: "";
  }
`;

const UserCards = styled.div`
  margin: 40px 0px 24px 0px;
`;

const RecycleIQPage = () => {
  return (
    <Root>
      <PicturesDisplay
        itemWidth="166"
        gap="35"
        pictures={[showcase1, showcase2, showcase3]}
      />
      <HighlightedTitle
        marginTop="48"
        width="583"
        height="48"
        highlightWidth="240"
      >
        Recycling
      </HighlightedTitle>
      <HighlightedTitle
        marginTop="8"
        marginBottom="43"
        width="587"
        highlightWidth="455"
      >
        efficiency program
      </HighlightedTitle>

      <FlexContainer>
        <FlexItem>
          <BoldBlackText>The project</BoldBlackText>
          <ProjectText marginTop="8">
            A computer vision app for identifying recyclables.{" "}
          </ProjectText>
        </FlexItem>
        <FlexItem width="106">
          <BoldBlackText>My role</BoldBlackText>
          <ProjectText marginTop="8">UX Designer</ProjectText>
        </FlexItem>
        <FlexItem width="80">
          <BoldBlackText>Timeline</BoldBlackText>
          <ProjectText marginTop="8">2 months</ProjectText>
        </FlexItem>
      </FlexContainer>

      <HighlightedTitle
        width="500"
        highlightWidth="330"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="18"
        marginTop="86"
      >
        The competition
      </HighlightedTitle>

      <ProjectText marginBottom="40">
        We <Bold>compared</Bold> the features of many of the{" "}
        <Bold>recycling apps</Bold> and websites currently available to the
        public. <br />
        <br /> We made note of what features the products have, how they worked
        and which features the users appreciated most or least.
      </ProjectText>

      <PicturesDisplay
        itemWidth="169"
        gap="30"
        marginBottom="40"
        pictures={[competition1, competition2, competition3]}
      />

      <BoldBlackText marginBottom="18">
        Competitive analysis takeaways
      </BoldBlackText>

      <List>
        <BulbItem>
          Competitors focus on category search using mostly icons
        </BulbItem>
        <BulbItem>
          Competitors have outdated UI / UX, it’s confusing and complex, we must
          simplify the user experience.
        </BulbItem>

        <BulbItem>
          Image recognition is difficult to get right, we must give users
          back-up options in case their item isn’t recognized.
        </BulbItem>
      </List>

      <HighlightedTitle
        width="570"
        highlightWidth="536"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="18"
        marginTop="75"
      >
        Asking about recycling habits
      </HighlightedTitle>

      <ProjectText marginBottom="16">
        We interviewed people who already recycle and people who are interested
        in recycling.
      </ProjectText>

      <BoldBlackText marginBottom="8">We asked about:</BoldBlackText>

      <List spacing="8">
        <ListItem>Their current recycling habits.</ListItem>
        <ListItem>
          If they wanted to <Bold>improve</Bold> their recycling habits
        </ListItem>
        <ListItem>
          <Bold>What holds them back</Bold> from improving their recycling
          habits
        </ListItem>
        <ListItem>If they use any technology to help them recycle</ListItem>
        <ListItem>
          If they’d be interested in using technology to help them identify
          recyclables.
        </ListItem>
      </List>

      <UserCards>
        <RecycleIQUserCard
          image={user1}
          question="Would you change your recycling habits
if you could take the guess work out?
"
          answer="“I am just impatient and wouldn't want 
to go through all the steps if I can ask
my Alexa or Google. “"
        />
        <RecycleIQUserCard
          image={user2}
          answerMargin="20"
          question="What do you think would be a flaw of using this method?"
          answer="“With 2 kids anything time 
            consuming is a flaw.”"
        />

        <RecycleIQUserCard
          image={user3}
          answerMargin="20"
          question="How would you feel if that service was only 80% reliable? 50%? 20%?"
          answer="“The more reliable the better or I'll get annoyed and stop using it.”"
        />
      </UserCards>
    </Root>
  );
};

export default RecycleIQPage;
