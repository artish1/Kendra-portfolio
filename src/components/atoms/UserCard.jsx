import React from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 287px;
  height: 268px;
  background: #f9f9f9;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserImage = styled.img`
  width: 108.08px;
  border-radius: 50px;
  margin-top: 31px;
`;

const UserBlurb = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 144%;

  text-align: center;
  color: #252525;
  margin-top: 18.92px;

  margin-left: 20px;
  margin-right: 20px;
`;

const UserCard = ({ img, blurb }) => {
  return (
    <Root>
      <UserImage src={img} />
      <UserBlurb>{blurb}</UserBlurb>
    </Root>
  );
};

export default UserCard;
