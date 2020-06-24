import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PicturesDisplay from "../molecules/PicturesDisplay";
import HighlightedTitle from "../molecules/HighlightedTitle";
import ProjectText from "../atoms/ProjectText";
import BoldBlackText from "../atoms/BoldBlackText";
import List from "../atoms/List";
import ListItem from "../atoms/ListItem";

// Images
import signLingoPic1 from "../../images/sign-lingo-1.jpg";
import signLingoPic2 from "../../images/sign-lingo-2.jpg";
import signLingoPic3 from "../../images/sign-lingo-3.jpg";

import arrowIcon from "../../images/arrow-icon.png";

import postPic1 from "../../images/posts/sign-lingo-post-1.jpg";
import postPic2 from "../../images/posts/sign-lingo-post-2.jpg";
import postPic3 from "../../images/posts/sign-lingo-post-3.jpg";
import postPic4 from "../../images/posts/sign-lingo-post-4.jpg";

import asl1 from "../../images/posts/asl1.png";
import asl2 from "../../images/posts/asl2.png";
import asl3 from "../../images/posts/asl3.png";
import asl4 from "../../images/posts/asl4.png";

import early1 from "../../images/posts/early1.jpg";
import early2 from "../../images/posts/early2.jpg";
import early3 from "../../images/posts/early3.jpg";

import brainstorm1 from "../../images/posts/brainstorm1.jpg";
import brainstorm2 from "../../images/posts/brainstorm2.jpg";
import brainstorm3 from "../../images/posts/brainstorm3.jpg";

import tracking1 from "../../images/posts/tracking1.jpg";
import tracking2 from "../../images/posts/tracking2.jpg";
import tracking3 from "../../images/posts/tracking3.jpg";
import tracking4 from "../../images/posts/tracking4.jpg";

import quiz1 from "../../images/posts/quiz1.jpg";
import quiz2 from "../../images/posts/quiz2.jpg";
import quiz3 from "../../images/posts/quiz3.jpg";

import testing1 from "../../images/posts/testing1.jpg";
import testing2 from "../../images/posts/testing2.jpg";
import testing3 from "../../images/posts/testing3.jpg";
import testing4 from "../../images/posts/testing4.jpg";
import testing5 from "../../images/posts/testing5.jpg";
import testing6 from "../../images/posts/testing6.jpg";
import testing7 from "../../images/posts/testing7.jpg";
import testing8 from "../../images/posts/testing8.jpg";
import testing9 from "../../images/posts/testing9.jpg";

import UserCard from "../atoms/UserCard";
import Button from "../atoms/Button";

const Root = styled.div`
  margin: 0 auto;
  max-width: 596px;
  height: 100%;

  margin-bottom: 100px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const PostsContainer = styled.div`
  margin: 27px 0px;
`;

const PostImg = styled.img`
  margin: ${(props) => props.margin};
  transform: translateX(${(props) => props.xOffset});
`;

const UserCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 287px);
  gap: 24px;

  margin-bottom: 27px;
`;

const ArrowIcon = styled.img`
  margin-left: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SignLingoPage = () => {
  const history = useHistory();
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
        been active since 2014 with{" "}
        <Bold>
          hundreds of posts about people wanting a Duolingo ASL experience to
          exist.
        </Bold>
      </ProjectText>

      <PostsContainer>
        <PostImg xOffset="-14px" src={postPic1} />

        <PostImg xOffset="-14px" src={postPic2} />

        <PostImg src={postPic3} />

        <PostImg xOffset="-14px" src={postPic4} />
      </PostsContainer>

      <ProjectText>
        <Bold>
          In order to understand the strengths and pitfalls of sign language
          learning technology currently available
        </Bold>
        , we surveyed and interviewed over 50 people who identify as part of the
        D/deaf and non-verbal communitities.
      </ProjectText>

      <BoldBlackText marginTop="27" marginBottom="29">
        “What is the hardest part about learning ASL?”
      </BoldBlackText>

      <UserCardsContainer>
        <UserCard
          img={asl1}
          blurb="“Knowing if I am doing the signs correctly with the right expression and movements.”"
        />
        <UserCard
          img={asl2}
          blurb="“Finding the time and memorizing the signs while caring for my non-verbal child.”"
        />
        <UserCard
          img={asl3}
          blurb="“I've never been good with learning languages, and I don't have a lot of time to study.”"
        />
        <UserCard
          img={asl4}
          blurb="“Remembering finger positions and correlating signs with words.”"
        />
      </UserCardsContainer>

      <ProjectText marginBottom="16">
        These are{" "}
        <Bold>
          the biggest frustrations the people we interviewed expressed having{" "}
        </Bold>
        with other ASL learning apps:
      </ProjectText>

      <List spacing="24">
        <ListItem>
          Features are often disjointed and not focused on a comprehensive
          language-learning experience.
        </ListItem>
        <ListItem>
          Current ASL digital learning platforms fail to leverage gamification
          to the extent of Duolingo.
        </ListItem>
        <ListItem>
          Competitive products are often poorly designed with an outdated look
          and feel.
        </ListItem>
      </List>

      <HighlightedTitle
        width="583"
        highlightWidth="472"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="27"
        marginTop="80"
      >
        Applying what we learned
      </HighlightedTitle>

      <ProjectText marginBottom="16">
        <Bold>
          We wanted to closely model our app after Duolingo because so many
          people expressed wanting an app like this:
        </Bold>
      </ProjectText>

      <List spacing="16">
        <ListItem>
          We include several types of questions to challenge the learner’s
          knowledge of the signs, similar to how Duolingo does in their app.
          <Bold> This is a proven way of helping people learn a language.</Bold>
        </ListItem>
        <ListItem>
          To address users concerns over knowing whether they are signing
          correctly or not - we implemented video recognition software.{" "}
          <Bold>
            The user can hold their hand up to the front facing camera on their
            phone and they will be told if they chose the correct sign and if
            they signed it with proper form.
          </Bold>
        </ListItem>
      </List>

      <ProjectText marginTop="50" marginBottom="16">
        <Bold>
          There were some ways that we needed to divert from their model:
        </Bold>
      </ProjectText>

      <List spacing="16">
        <ListItem>
          We added flashcards, which Duolingo doesn't do. We did this because
          users of other ASL learning apps love the flashcard features of those
          apps.{" "}
          <Bold>
            Flashcards are an effective way to present the new information from
            a language teaching standpoint.{" "}
          </Bold>
        </ListItem>
        <ListItem>
          In our app the lessons are split into three sections. We did this
          because{" "}
          <Bold>
            the PPP (presentation, practice, produce) method of leanguage
            learning has been proven to be successful.
          </Bold>
        </ListItem>
      </List>

      <HighlightedTitle
        width="583"
        highlightWidth="254"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="27"
        marginTop="80"
      >
        Early ideation
      </HighlightedTitle>

      <ProjectText marginBottom="16">
        <Bold>
          To give users the Duolingo-type experience that they expressed wanting
        </Bold>
        , we modeled the dashboard afer their gamified design using circles and
        progress bars.
      </ProjectText>
      <PicturesDisplay pictures={[early1, early2, early3]} />

      <ProjectText marginTop="74.5" marginBottom="16">
        We brainstormed different ways to provide the user with a flashcard
        learning experience because our{" "}
        <Bold>
          research showed that it was a favorite feature amongst competitive
          programs.
        </Bold>
      </ProjectText>
      <PicturesDisplay pictures={[brainstorm1, brainstorm2, brainstorm3]} />

      <HighlightedTitle
        width="583"
        highlightWidth="483"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="27"
        marginTop="80"
      >
        Tracking learning progress
      </HighlightedTitle>

      <List spacing="16">
        <ListItem>
          Many of the current digital ASL learning platforms{" "}
          <Bold>struggle to provide the learner with a way to be quizzed</Bold>{" "}
          on what they are learning, this frustrates the user.
        </ListItem>
        <ListItem>
          <Bold>We provide two types of multiple choice</Bold> questions to
          challenge the learner’s knowledge of signs they’ve learned.
        </ListItem>
      </List>

      <PicturesDisplay
        marginBottom="60"
        columns="4"
        itemWidth="144.01"
        gap="4.99"
        pictures={[tracking1, tracking2, tracking3, tracking4]}
      />

      <List spacing="16">
        <ListItem>
          In our research, people expressed that one drawback of learning ASL
          online is <Bold>not having anyone there to correct you</Bold> if you
          are signing wrong.
        </ListItem>
        <ListItem>
          We needed to a way to{" "}
          <Bold>
            allow the user to produce the language by themselves and be assessed
            on their accuracy.
          </Bold>
        </ListItem>
        <ListItem>
          In our design, the users hand is detected by the camera and{" "}
          <Bold>
            video recognition software determines if they have signed correctly.
          </Bold>
        </ListItem>
      </List>

      <PicturesDisplay pictures={[quiz1, quiz2, quiz3]} />

      <HighlightedTitle
        width="583"
        highlightWidth="140"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="27"
        marginTop="80"
      >
        Testing
      </HighlightedTitle>

      <ProjectText marginBottom="27">
        <Bold>
          We wanted to remove any confusion over what the user has completed and
          what still needs to be done.
        </Bold>
      </ProjectText>

      <ProjectText marginBottom="16">
        <Bold>V1: </Bold>
        Testers couldn’t see the green ring.
      </ProjectText>
      <ProjectText marginBottom="16">
        <Bold>V2: </Bold>
        The green circle made testers feel like they couldn’t return to it later
        if they needed to.
      </ProjectText>

      <ProjectText marginBottom="27">
        <Bold>Final: </Bold>
        The check mark in the final design is a subtle but clear indicator.
      </ProjectText>

      <PicturesDisplay
        marginBottom="80"
        pictures={[testing1, testing2, testing3]}
      />

      <ProjectText marginBottom="27">
        <Bold>
          It took extensive testing to find a clear way to show the learner that
          they answered correctly.
        </Bold>
      </ProjectText>

      <ProjectText marginBottom="16">
        <Bold>V1: </Bold>
        The “correct” text was easily missed.
      </ProjectText>
      <ProjectText marginBottom="16">
        <Bold>V2: </Bold>
        Testers felt the large “correct” text was too big and distracting.
      </ProjectText>
      <ProjectText marginBottom="27">
        <Bold>Final: </Bold>
        The combination of a green background and a large checkmark was favored
        by most testers.
      </ProjectText>

      <PicturesDisplay
        marginBottom="80"
        pictures={[testing4, testing5, testing6]}
      />

      <ProjectText marginBottom="27">
        <Bold>
          Flashcards are common and beloved amongst competitive ASL learning
          programs. We wanted to make sure we got it right.
        </Bold>
      </ProjectText>

      <ProjectText marginBottom="16">
        <Bold>V1: </Bold>
        Having the letter on the front of the card defeated the purpose of it
        being a flashcard.
      </ProjectText>
      <ProjectText marginBottom="16">
        <Bold>V2: </Bold>
        Testers didn’t understand that they could flip the cards over.
      </ProjectText>
      <ProjectText marginBottom="27">
        <Bold>Final: </Bold>
        Adding the icon to the top right corner of the flashcard helped testers
        understand that it could be tapped to flip it over.
      </ProjectText>

      <PicturesDisplay
        marginBottom="80"
        pictures={[testing7, testing8, testing9]}
      />

      <HighlightedTitle
        width="583"
        highlightWidth="272"
        highlightHeight="18"
        fontSize="36"
        highlightOffset="6"
        marginBottom="27"
        marginTop="80"
      >
        What I learned
      </HighlightedTitle>

      <ProjectText marginBottom="27">
        <Bold>
          I learned about how beneficial it is to work with other designers.
        </Bold>
      </ProjectText>

      <ProjectText marginBottom="27">
        This project was my first large project as a solo designer. I was
        excited by the idea of not being held back by having to explain my ideas
        to someone else along the way.
      </ProjectText>

      <ProjectText marginBottom="27">
        What I didn’t realize was{" "}
        <Bold>
          how beneficial it is to have someone there to challenge your ideas.
        </Bold>{" "}
        If I couldn’t explain it or defend it, then I had no business including
        it in the project.
      </ProjectText>

      <ProjectText marginBottom="27">
        It may have seemed at times like I was just deciding on features and
        designs because I was the creator and I just liked them. It was crucial
        for me to refrain from doing that just because I could, it wouldn’t have
        led to a useful design.
      </ProjectText>

      <ProjectText marginBottom="27">
        Each time I handed a design off to the team I made sure to{" "}
        <Bold>explain the reasons why I made each choice.</Bold>
      </ProjectText>
      <ProjectText marginBottom="27">
        I wanted them to know that a lot of thought and research went into the
        design. Also, if I couldn’t think of what to tell the team that was a
        red flag to me and it made me go back and think harder about why I made
        those choices.
      </ProjectText>
      <ProjectText>
        It was an excellent practice in checking in with myself throughout the
        project to make sure we were headed in the right direction.
      </ProjectText>
      <ButtonContainer>
        <Button
          onClick={() => {
            history.push("/work/recycle-iq");
            window.scrollTo(0, 0);
          }}
          margin="48px 12px"
        >
          Recycle IQ <ArrowIcon src={arrowIcon} />
        </Button>
      </ButtonContainer>
    </Root>
  );
};

export default SignLingoPage;
