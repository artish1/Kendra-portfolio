import React from "react";
import styled from "styled-components";

import rejectedIcon from "../../images/rejected.png";
import acceptedIcon from "../../images/accepted.png";

const Root = styled.div`
  display: flex;
  margin-top: 18px;
`;

const Icon = styled.img`
  margin-right: 12px;
  width: 18px;
  height: 18px;

  margin-top: 3px;
`;

const Text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  color: #494949;
`;

const VersionBox = ({ accepted, text }) => {
  return (
    <Root>
      <Icon src={accepted ? acceptedIcon : rejectedIcon} />
      <Text>{text}</Text>
    </Root>
  );
};

export default VersionBox;
