import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MainHomeDiv = styled.div`
  height: 100%;
  width: 100%;
  top: 67px;
  left: 56px;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  &.home-light-mode {
    background-color: #ffffff;
    border: solid 1px #dedede;
    color: #5b5f66;
  }
`;

const InnerDiv = styled.div`
  width: 832.3px;
  height: 392.4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

const MessageImg = styled.img`
  width: 280.02px;
  height: 229.4px;
`;

const MessageDiv = styled.div`
  width: 533px;
  height: 115px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const MessageInnerDivOne = styled.div`
  width: 533px;
  height: 37px;
  font-family: "DM Sans", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 36.53px;
  text-align: center;
`;
const MessageInnerDivTwo = styled.div`
  width: 289px;
  height: 54px;
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 27.4px;
  text-align: center;
  color: #9e9e9e;
`;

const HomeComponent = () => {
  const toggleVal = useSelector((state) => state.toggle);
  return (
    <MainHomeDiv className={toggleVal ? "" : "home-light-mode"}>
      <InnerDiv>
        <MessageImg src="nomessage.png" alt="no message" />
        <MessageDiv>
          <MessageInnerDivOne>
            It’s the beginning of a legendary sales pipeline
          </MessageInnerDivOne>
          <MessageInnerDivTwo>
            When you have inbound E-mails you’ll see them here
          </MessageInnerDivTwo>
        </MessageDiv>
      </InnerDiv>
    </MainHomeDiv>
  );
};

export default HomeComponent;
