import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  background: #f9f9f9;
  border-radius: 5px;

  margin-bottom: 16px;
  align-items: center;
`;

const UserImage = styled.img`
  width: 103px;
  height: 103px;

  margin: 20px 39px 19px 38px;
`;

const UserQuestion = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #252525;
  margin-top: 18px;
`;

const UserAnswer = styled(UserQuestion)`
  font-weight: normal;
  margin-top: ${(props) => props.marginTop || "8"}px;
  margin-right: 40px;
`;

const RecycleIQUserCard = (props) => {
  return (
    <Root>
      <UserImage src={props.image} />
      <div>
        {props.question && <UserQuestion>{props.question}</UserQuestion>}
        <UserAnswer marginTop={props.answerMargin}>{props.answer}</UserAnswer>
      </div>
    </Root>
  );
};

export default RecycleIQUserCard;
