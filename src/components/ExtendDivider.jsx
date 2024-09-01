import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
`;

const Line = styled.div`
  flex: 1;
  border-bottom: 1px solid #8b8e92;
`;

const Text = styled.span`
  padding: 10px;
  width: 130px;
  height: 24px;
  font-family: "Open Sans", sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: 13.62px;
  text-align: center;
  color: #ffffff;
  background-color: #171819;
  display: flex;
  align-items: center;
  justify-content: center;
  &.side-bar-light-mode {
    background-color: #ffffff;
    border: solid 1px #dedede;
    color: black;
  }
`;

const InboxSpan = styled.span`
  color: blue;
`;

const ExpandImg = styled.img`
  width: 17.6px;
  height: 16px;
  padding: 2px 4px 2px 4px;
`;

const ExtendDivider = () => {
  const toggleVal = useSelector((state) => state.toggle);

  return (
    <DividerContainer>
      <Line />
      <Text className={toggleVal? "": "side-bar-light-mode"}>
        <ExpandImg src="expand.png" alt="Expand" />
        View all &nbsp; <InboxSpan>4</InboxSpan> &nbsp; replies
      </Text>
      <Line />
    </DividerContainer>
  );
};

export default ExtendDivider;
