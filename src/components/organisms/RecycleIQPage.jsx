import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import HighlightedTitle from "../molecules/HighlightedTitle";
import PicturesDisplay from "../molecules/PicturesDisplay";
import ProjectText from "../atoms/ProjectText";
import BoldBlackText from "../atoms/BoldBlackText";
import List from "../atoms/List";
import Button from "../atoms/Button";
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

import user4 from "../../images/recycle-iq/user4.png";
import user5 from "../../images/recycle-iq/user5.png";
import user6 from "../../images/recycle-iq/user6.png";

import design1 from "../../images/recycle-iq/design1.png";
import design2 from "../../images/recycle-iq/design2.png";
import design3 from "../../images/recycle-iq/design3.png";

import exploring1 from "../../images/recycle-iq/exploring1.jpg";
import exploring2 from "../../images/recycle-iq/exploring2.jpg";
import exploring3 from "../../images/recycle-iq/exploring3.jpg";

import navigating1 from "../../images/recycle-iq/navigating1.jpg";
import navigating2 from "../../images/recycle-iq/navigating2.jpg";
import navigating3 from "../../images/recycle-iq/navigating3.jpg";

import clicks1 from "../../images/recycle-iq/3clicks1.jpg";
import clicks2 from "../../images/recycle-iq/3clicks2.jpg";
import clicks3 from "../../images/recycle-iq/3clicks3.jpg";

import graph1 from "../../images/recycle-iq/graph1.jpg";
import graph2 from "../../images/recycle-iq/graph2.jpg";

import flow from "../../images/recycle-iq/flow.jpg";
import arrowIcon from "../../images/arrow-icon.png";

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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const UserCards = styled.div`
  margin: 40px 0px 40px 0px;
`;

const ArrowIcon = styled.img`
  margin-left: 8px;
`;

const GraphImage = styled.img`
  margin-bottom: 16px;
  width: 564px;
`;

const FlowImage = styled.img`
  margin-bottom: 40px;
  width: 566px;
`;

const RecycleIQPage = () => {
  const history = useHistory();
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

      <BoldBlackText marginBottom="16">Interview takeaways</BoldBlackText>
      <List>
        <BulbItem>
          People are motivated to recycle - but not motivated enough to put a
          lot of energy into helping themselves learn or create better habits
        </BulbItem>
        <BulbItem>
          Any amount of inaccuracy in the image recognition causes a significant
          amount of distrust
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
        How and what people recycle
      </HighlightedTitle>

      <ProjectText marginBottom="40">
        We put out a survey to get an idea of <Bold>how</Bold> and
        <Bold> what</Bold> people recycle. <br /> <br /> We were interested in
        what holds people back from recycling, if they wish to improve their
        recycling habits and what they find{" "}
        <Bold>most difficult about recycling.</Bold>
      </ProjectText>

      <GraphImage src={graph1} />
      <GraphImage src={graph2} />

      <BoldBlackText marginTop="40" marginBottom="16">
        Survey takeaways
      </BoldBlackText>

      <List>
        <BulbItem>People try to recycle things that aren’t eligible</BulbItem>
        <BulbItem>People would recycle more if it were easier</BulbItem>
        <BulbItem>
          The top reason for not recycling is not knowing what is recyclable or
          not
        </BulbItem>
      </List>

      <HighlightedTitle
        width="570"
        highlightWidth="418"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="18"
        marginTop="75"
      >
        Exploring search flows
      </HighlightedTitle>

      <ProjectText marginBottom="40">
        Our research revealed to us that the photo recognition needed to work
        very well in order to <Bold>maintain the users trust.</Bold>
        <br />
        <br />
        We needed to ensure the user had <Bold>alternative</Bold> ways to get
        the information they were looking for should the computer vision fail to
        return accurate results.
        <br />
        <br />
        We compared the ways other apps solve this problem and narrowed it down
        to <Bold>bar and category search options.</Bold>
      </ProjectText>

      <PicturesDisplay
        itemWidth="168"
        gap="30"
        pictures={[exploring1, exploring2, exploring3]}
      />

      <HighlightedTitle
        width="570"
        highlightWidth="395"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="27"
        marginTop="55"
      >
        Navigating navigation
      </HighlightedTitle>

      <ProjectText marginBottom="40">
        There were different versions of a navigation bar as the project
        progressed.
        <br />
        <br />
        We wanted to the user to be able to accesss the camera from every page
        so they could use that method whenever they wanted to.
        <br />
        <br />
        Ultimately through <Bold>user testing</Bold> we realized that once the
        user chose to go a search route over photo recognition,{" "}
        <Bold>
          it was unlikely that they would suddenly change their mind.{" "}
        </Bold>
      </ProjectText>

      <PicturesDisplay
        itemWidth="168"
        gap="30"
        marginBottom="40"
        pictures={[navigating1, navigating2, navigating3]}
      />

      <ProjectText>
        We made sure that our <Bold>3 clicks or less</Bold> rule would allow
        them get back to the home page quickly and seamlessly.
      </ProjectText>

      <HighlightedTitle
        width="570"
        highlightWidth="362"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="18"
        marginTop="75"
      >
        Three clicks or less
      </HighlightedTitle>

      <ProjectText marginBottom="40">
        We decided to <Bold>combine</Bold> the off-site recycling location
        results with the item results page.
        <br />
        <br />
        We made this decision so the user could reach the results they want in a
        shorter simpler way, rather than being directed to another page just to
        get off-site recycling location information.
      </ProjectText>

      <PicturesDisplay
        itemWidth="168"
        marginBottom="40"
        gap="30"
        pictures={[clicks1, clicks2, clicks3]}
      />

      <ProjectText>
        Research showed that our users did not want to spend a lot of time
        trying to get information so it was in our best interest to{" "}
        <Bold>shorten that flow for them.</Bold>
      </ProjectText>

      <HighlightedTitle
        width="570"
        highlightWidth="204"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="27"
        marginTop="90"
      >
        User flows
      </HighlightedTitle>

      <ProjectText marginBottom="40">
        Most of the people we spoke to in interviews admitted to throwing things
        in the trash when they aren’t sure if it’s recyclable.
        <br />
        <br />
        They also expressed that they would be willing to find out if something
        was recyclable if they could find out <Bold>quickly.</Bold>
        <br />
        <br />
        We knew this meant we’d need to make our flows very fast and efficient,
        otherwise <Bold>the user would lose patience.</Bold>
      </ProjectText>

      <FlowImage src={flow} />

      <ProjectText>
        We implemented a 3 clicks or less rule for the entire program. In each
        of the main flows, the user will tap a <Bold>maximum of 3 times</Bold>{" "}
        in order to get to the results they are looking for.
      </ProjectText>

      <HighlightedTitle
        width="570"
        highlightWidth="305"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="18"
        marginTop="75"
      >
        Usability testing
      </HighlightedTitle>

      <ProjectText marginBottom="40">
        An overwhelming amount of users commented that they found the flows easy
        to follow.{" "}
        <Bold>
          They were able to use the bar and category search functions smoothly
          and get to their results quickly.{" "}
        </Bold>
        <br />
        <br />
        Our testers appreciated <Bold>the use of photos</Bold> to help them
        quickly identify the specific item they were trying to recycle.
        <br />
        <br />
        They expressed concern over there{" "}
        <Bold>not being enough information in our descriptions</Bold> of items
        and why they are/aren’t responsible.
      </ProjectText>

      <RecycleIQUserCard
        image={user4}
        answer="“What if I don’t know what an alkaline battery is? I want more help identifying what the item is made of”"
      />
      <RecycleIQUserCard
        image={user5}
        answer="“It’s super easy to figure out what to do and how”"
      />
      <RecycleIQUserCard
        image={user6}
        answer="“I like that the pictures help me understand what the item is”"
      />

      <HighlightedTitle
        width="570"
        highlightWidth="130"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="27"
        marginTop="90"
      >
        Design
      </HighlightedTitle>

      <ProjectText marginBottom="43">
        Switching from photos on the home page to icons helped give the program
        a <Bold>cleaner look</Bold> while still helping the user easily identify
        the categories.
        <br />
        <br />
        We added the recycling status to the item lists so{" "}
        <Bold>the user can learn if the item is recyclable sooner.</Bold>
        <br />
        <br />
        After the user takes a pictue of their item there are options to click
        the back arrow to try again, go back to the home page or manually
        search.
        <br />
        <br />
        These were <Bold>backups</Bold> that we put in place in case the team
        couldn’t get the photo recognition working properly within the project
        time frame.
      </ProjectText>

      <PicturesDisplay
        itemWidth="166"
        gap="39"
        pictures={[design1, design2, design3]}
      />

      <HighlightedTitle
        width="570"
        highlightWidth="176"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="27"
        marginTop="57"
      >
        Thoughts
      </HighlightedTitle>

      <ProjectText>
        <Bold>
          During the 8 weeks of this project I learned how to collaborate with
          another designer:
        </Bold>
        <br />
        <br />
        I learned how to give feedback in a tacful, professional way. I also
        learned how to recieve critique without taking it personally.
        <br />
        <br />
        It may feel like things are moving slower when you work with a design
        partner but ultimately what you create together is better than what you
        could have created on your own.
        <br />
        <br />
        It’s a great opportunity to have someone challenge your ideas and force
        you think outside the box.
        <br />
        <br />
        <Bold>I also learned:</Bold>
        <br />
        <br />
        It’s important to have back up plans in case features aren’t built the
        way they were planned to be, or aren’t finished in time. Always be
        prepared to pivot and come up with new solutions.
      </ProjectText>

      <ButtonContainer>
        <Button
          onClick={() => {
            history.push("/work/wanderlust");
            window.scrollTo(0, 0);
          }}
          margin="48px 12px"
        >
          Wanderlust <ArrowIcon src={arrowIcon} />
        </Button>
      </ButtonContainer>
    </Root>
  );
};

export default RecycleIQPage;
