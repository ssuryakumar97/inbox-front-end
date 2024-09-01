import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 365px;
  height: 665px;
  padding: 16px;
  gap: 16px;
  border-left: 1px solid #353533;
  background-color: #000000;
  &.side-bar-light-mode {
    background-color: #ffffff;
    border: solid 1px #dedede;
    color: black;
  }
`;

const RowOne = styled.div`
  width: 338px;
  height: 36px;
  padding: 8px 12px 8px 12px;
  gap: 16px;
  border-radius: 8px;
  background-color: #23272c;
  &.side-bar-light-mode {
    background-color: #ffffff;
    border: solid 1px #dedede;
    color: black;
  }
`;

const RowOneText = styled.div`
  width: 235px;
  height: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: #ffffff;
  &.side-bar-light-mode {
    color: black;
  }
`;
const RowTwo = styled.div`
  width: 338px;
  height: 217px;
  padding: 8px 12px 16px 12px;
  gap: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  &.side-bar-light-mode {
    color: black;
  }
`;
const RowTwoInnerOne = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const RowTwoInnerOneLeft = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.52px;
  text-align: left;
`;
const RowTwoInnerOneRight = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.52px;
  text-align: left;
  color: #b9b9b9;
  &.side-bar-light-mode {
    color: #282727;
  }
`;

const RowThree = styled.div`
  width: 338px;
  height: 326px;
  gap: 32px;
  padding: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;
const RowThreeInnerOne = styled.div`
  width: 120px;
  height: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 20.43px;
  text-align: left;
  color: #ffffff;
  &.side-bar-light-mode {
    color: black;
  }
`;
const RowThreeInnerTwo = styled.div`
    width: 200px;
height: 16px;
gap: 0px;
opacity: 0px;
font-family: Open Sans;
font-size: 12px;
font-weight: 600;
line-height: 16.34px;
text-align: left;
color: #ffffff;
&.side-bar-light-mode {
    color: black;
  }
`;

const RowThreeInnerTwoSpan = styled.span`
    font-family: Open Sans;
font-size: 12px;
font-weight: 400;
line-height: 16.34px;
text-align: left;
color: #ffffff;
&.side-bar-light-mode {
    color: black;
  }
`
const RowThreeInnerThree = styled.div`
  width: 300px;
gap: 32px;

`;
const RowThreeInnerThreeRowOne = styled.div`
  width: 280.37px;
height:44.63px;
gap: 16px;
display: flex;
align-items: center;

`;
const RowThreeInnerThreeRowOneLeft = styled.img`
  width: 32px;
height: 32px;
padding: 3px ;
border-radius: 47px;
border: 1px solid #41464B;
opacity: 0px;
background: #23272C;

`;
const RowThreeInnerThreeRowOneRight = styled.div`
  width:255px;
height: 44.63px;
gap: 4px;

`;
const RowThreeInnerThreeRowOneRightOne = styled.div`
  width: 81px;
height: 18px;
font-family: "Open Sans", sans-serif;
font-size: 13px;
font-weight: 600;
line-height: 17.7px;
text-align: left;
color: #ffffff;
&.side-bar-light-mode {
    color: black;
  }
`;
const RowThreeInnerThreeRowOneRightTwo = styled.div`
  width: 100px;
height: 22.63px;
margin-top: 5px;
gap: 2px;
display: flex;
align-items: center;

`;
const RowThreeInnerThreeRowOneRightTwoLeft = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 10px;
`;
const RowThreeInnerThreeRowOneRightTwoRight = styled.div`
  font-family: "Open Sans", sans-serif;
font-size: 10px;
font-weight: 400;
line-height: 18px;
text-align: left;
color: #B9B9B9;
&.side-bar-light-mode {
    color: black;
  }

`;

const CampaignRight = () => {
  const toggleVal = useSelector((state) => state.toggle);

  return (
    <MainContainer className={toggleVal? "": "side-bar-light-mode"}>
      <RowOne className={toggleVal? "": "side-bar-light-mode"}>
        <RowOneText className={toggleVal? "": "side-bar-light-mode"}>Lead Details</RowOneText>
      </RowOne>
      <RowTwo className={toggleVal? "": "side-bar-light-mode"}>
        <RowTwoInnerOne>
          <RowTwoInnerOneLeft>Name</RowTwoInnerOneLeft>
          <RowTwoInnerOneRight className={toggleVal? "": "side-bar-light-mode"}>Surya</RowTwoInnerOneRight>
        </RowTwoInnerOne>
        <RowTwoInnerOne>
          <RowTwoInnerOneLeft>Contact No</RowTwoInnerOneLeft>
          <RowTwoInnerOneRight className={toggleVal? "": "side-bar-light-mode"}>+8524691272</RowTwoInnerOneRight>
        </RowTwoInnerOne>
        <RowTwoInnerOne>
          <RowTwoInnerOneLeft>Email ID</RowTwoInnerOneLeft>
          <RowTwoInnerOneRight className={toggleVal? "": "side-bar-light-mode"}>surya@gmail.com</RowTwoInnerOneRight>
        </RowTwoInnerOne>
        <RowTwoInnerOne>
          <RowTwoInnerOneLeft>Linkedin</RowTwoInnerOneLeft>
          <RowTwoInnerOneRight className={toggleVal? "": "side-bar-light-mode"}>surya@linkedin</RowTwoInnerOneRight>
        </RowTwoInnerOne>
        <RowTwoInnerOne>
          <RowTwoInnerOneLeft>Company Name</RowTwoInnerOneLeft>
          <RowTwoInnerOneRight className={toggleVal? "": "side-bar-light-mode"}>ReachInbox</RowTwoInnerOneRight>
        </RowTwoInnerOne>
      </RowTwo>
      <RowOne className={toggleVal? "": "side-bar-light-mode"}>
        <RowOneText className={toggleVal? "": "side-bar-light-mode"}>Activities</RowOneText>
      </RowOne>
      <RowThree>
        <RowThreeInnerOne className={toggleVal? "": "side-bar-light-mode"}>Campaign Name</RowThreeInnerOne>
        <RowThreeInnerTwo className={toggleVal? "": "side-bar-light-mode"}>3 |&nbsp;<RowThreeInnerTwoSpan className={toggleVal? "": "side-bar-light-mode"}>Steps</RowThreeInnerTwoSpan>&nbsp; 5 |&nbsp; <RowThreeInnerTwoSpan className={toggleVal? "": "side-bar-light-mode"}>Days in Sequence</RowThreeInnerTwoSpan></RowThreeInnerTwo>
        <RowThreeInnerThree>
          <RowThreeInnerThreeRowOne>
            <RowThreeInnerThreeRowOneLeft src="email.png" alt="email"/>
            <RowThreeInnerThreeRowOneRight>
              <RowThreeInnerThreeRowOneRightOne className={toggleVal? "": "side-bar-light-mode"}>
                Step 1: Email
              </RowThreeInnerThreeRowOneRightOne>
              <RowThreeInnerThreeRowOneRightTwo>
                <RowThreeInnerThreeRowOneRightTwoLeft src="sendmail.png" alt="send mail" />
                  <RowThreeInnerThreeRowOneRightTwoRight className={toggleVal? "": "side-bar-light-mode"}>
                    Sent 3rd, Feb
                  </RowThreeInnerThreeRowOneRightTwoRight>
              </RowThreeInnerThreeRowOneRightTwo>
            </RowThreeInnerThreeRowOneRight>
          </RowThreeInnerThreeRowOne>
        </RowThreeInnerThree>
        <RowThreeInnerThree>
          <RowThreeInnerThreeRowOne>
            <RowThreeInnerThreeRowOneLeft src="email.png" alt="email"/>
            <RowThreeInnerThreeRowOneRight>
              <RowThreeInnerThreeRowOneRightOne className={toggleVal? "": "side-bar-light-mode"}>
                Step 2: Email
              </RowThreeInnerThreeRowOneRightOne>
              <RowThreeInnerThreeRowOneRightTwo>
                <RowThreeInnerThreeRowOneRightTwoLeft src="emailOpen.png" alt="email open" />
                  <RowThreeInnerThreeRowOneRightTwoRight className={toggleVal? "": "side-bar-light-mode"}>
                    Opened 5th, Feb
                  </RowThreeInnerThreeRowOneRightTwoRight>
              </RowThreeInnerThreeRowOneRightTwo>
            </RowThreeInnerThreeRowOneRight>
          </RowThreeInnerThreeRowOne>
        </RowThreeInnerThree>
      </RowThree>
    </MainContainer>
  );
};

export default CampaignRight;
