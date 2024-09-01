import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const BottomDiv = styled.div`
  width: 255px;
  height: 100px;
  padding: 12px 8px 12px 8px;
  border-top: 1px solid #ffffff;
  &.side-bar-light-mode {
    background-color: #ffffff;
    border-top: solid 1px #dedede;
  }
`;
const BottomDivInner = styled.div`
  width: 243px;
`;
const BottomDivInnerOne = styled.div`
  display: flex;
  margin-bottom: 5px;
  position: relative;
`;
const BottomDivInnerOneLeft = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: blue;
  margin-right: 5px;
  top: 5px;
  left: -20px;
  position: absolute;
`;
const BottomDivInnerOneMid = styled.div`
  width: 200px;
  height: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #ffffff;
  &.side-bar-light-mode {
    color: black;
  }
`;
const BottomDivInnerOneRight = styled.div`
  width: 33px;
  height: 18px;
  font-family: "Open Sans", sans-serif;
  font-size: 10px;
  font-weight: 200;
  line-height: 18px;
  text-align: left;
  color: #fcfcfc;
  &.side-bar-light-mode {
    color: black;
  }
`;

const BottomDivInnerTwo = styled.div`
  width: 154px;
  height: 18px;
  font-family: "Open Sans", sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: #e1e0e0;
  overflow: hidden;
  &.side-bar-light-mode {
    color: black;
  }
`;
const BottomDivInnerThree = styled.div`
  height: 20px;
  gap: 8px;
  display: flex;
`;
const BottomDivInnerThreeLeft = styled.div`
  height: 20px;
  padding: 3px 8px 3px 8px;
  margin-top: 5px;
  gap: 8px;
  border-radius: 17px;
  display: flex;
  background-color: #222426;
  align-items: center;
  justify-content: center;
  &.side-bar-light-mode {
    background-color: #ffffff;
    border: solid 1px #dedede;
    color: black;
  }
`;
const BottomDivInnerThreeLeftLL = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #57e0a6;
`;
const BottomDivInnerThreeLeftLR = styled.div`
  height: 14px;
  font-family: "Open Sans";
  font-size: 10px;
  font-weight: 600;
  line-height: 13.62px;
  text-align: left;
  color: #57e0a6;
`;
const BottomDivInnerThreeRight = styled.div`
  height: 20px;
  padding: 3px 8px 3px 8px;
  margin-top: 5px;
  gap: 8px;
  border-radius: 17px;
  display: flex;
  background-color: #222426;
  align-items: center;
  justify-content: center;
  &.side-bar-light-mode {
    background-color: #ffffff;
    border: solid 1px #dedede;
    color: black;
  }
`;
const BottomDivInnerThreeRightRL = styled.img`
  width: 14px;
  height: 14px;
`;
const BottomDivInnerThreeRightRR = styled.div`
  height: 14px;
  font-family: "Open Sans";
  font-size: 10px;
  font-weight: 600;
  line-height: 13.62px;
  text-align: left;
  color: #ffffff;
  &.side-bar-light-mode {
    color: black;
  }
`;

const CampaignLeftBottom = ({ mailData }) => {
  
  const toggleVal = useSelector(state => state.toggle)
  const date = mailData.sentAt;
  const datetime = new Date(date);
  // console.log(datetime.getMonth());
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateMonth = months[datetime.getMonth()] + " " + datetime.getDate();
  return (
    <BottomDiv className={toggleVal? "": "side-bar-light-mode"}>
      <BottomDivInner>
        <BottomDivInnerOne>
          <BottomDivInnerOneLeft></BottomDivInnerOneLeft>
          <BottomDivInnerOneMid className={toggleVal? "": "side-bar-light-mode"}>{mailData?.fromEmail}</BottomDivInnerOneMid>
          <BottomDivInnerOneRight className={toggleVal? "": "side-bar-light-mode"}>{dateMonth}</BottomDivInnerOneRight>
        </BottomDivInnerOne>
        <BottomDivInnerTwo className={toggleVal? "": "side-bar-light-mode"}>{mailData.subject}</BottomDivInnerTwo>
        <BottomDivInnerThree>
          <BottomDivInnerThreeLeft className={toggleVal? "": "side-bar-light-mode"}>
            <BottomDivInnerThreeLeftLL />
            <BottomDivInnerThreeLeftLR>Interested</BottomDivInnerThreeLeftLR>
          </BottomDivInnerThreeLeft>
          <BottomDivInnerThreeRight className={toggleVal? "": "side-bar-light-mode"}>
            <BottomDivInnerThreeRightRL src="send.png" alt="send" />
            <BottomDivInnerThreeRightRR className={toggleVal? "": "side-bar-light-mode"}>
              Campaign Name
            </BottomDivInnerThreeRightRR>
          </BottomDivInnerThreeRight>
        </BottomDivInnerThree>
      </BottomDivInner>
    </BottomDiv>
  );
};

export default CampaignLeftBottom;
