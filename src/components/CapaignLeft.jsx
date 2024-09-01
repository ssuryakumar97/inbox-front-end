import React from "react";
import styled from "styled-components";
import CampaignLeftBottom from "./CampaignLeftBottom";
import { useDispatch, useSelector } from "react-redux";
import { insertThreadData } from "../redux/threadReducer";

const LeftDiv = styled.div`
  width: 320px;
  height: 665px;
  top: 67px;
  left: 71px;
  gap: 8px;
  border: 1px;
  color: #ffffff;
  background-color: #000000;
  &.side-bar-light-mode{
    background-color: #ffffff;
  border: solid 1px #DEDEDE;
  color: black;
  }
`;

const LeftTopDiv = styled.div`
  width: 171px;
  height: 71px;
  padding: 7px;
  gap: 25px;
  display: flex;
`;

const LeftTopInnerOne = styled.div`
  width: 171px;
  height: 64px;
`;

const LeftTopInnerText = styled.div`
  width: 160px;
  height: 47px;
  top: 7px;
  left: 2px;
  padding: 10px;
  gap: 4px;
  display: flex;
`;
const LeftTopInInOne = styled.div`
  width: 112px;
  height: 27px;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 27.24px;
  text-align: left;
  color: #4285f4;
`;

const LeftTopInInTwo = styled.img`
  width: 24px;
  height: 24px;
`;

const LeftTopInnerTextTwo = styled.div`
  width: 171px;
  height: 23px;
  top: 48px;
  padding: 2px 10px 2px 10px;
  gap: 10px;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 19.07px;
  text-align: left;
`;

const LeftTopInnerTextTwoSpan = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 19.07px;
  text-align: left;
`;

const LeftTopInnerTwo = styled.div`
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftTopInnerTwoImg = styled.img`
  width: 14px;
  height: 14px;
  margin-top: 20px;
  cursor: pointer;
`;

const LeftMidDiv = styled.div`
  width: 275px;
  height: 110px;
  color: #000000;
  padding: 7px;
`;
const LeftMidDivInnerOne = styled.div`
  width: 275px;
  height: 44px;
  padding: 8px;
  margin-top: 10px;
`;
const LeftMidDivInnerOneSearchDiv = styled.div`
  width: 259px;
  height: 28px;
  padding: 4px 6px 4px 6px;
  gap: 4px;
  border-radius: 4px;
  background-color: #23272c;
  border: 1px solid #ffffff;
  display: flex;
  &.side-bar-light-mode{
    background-color: #ffffff;
  border: solid 1px #DEDEDE;
  color: black;
  }
`;
const LeftMidDivInInSearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;
const LeftMidDivInnerOneSearch = styled.input`
  background: none;
  border: none;
`;
const LeftMidDivInnerTwo = styled.div`
  width: 275px;
  height: 32px;
  padding: 3px 8px 3px 8px;
  gap: 16px;
`;
const LeftMidDivInnerInnerTwo = styled.div`
  width: 256px;
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const LeftMidDivInnerInnerLeft = styled.div`
  width: 129px;
  height: 26px;
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftMidDivInnerInnerLeftIn = styled.div`
  width: 34px;
  height: 26px;
  padding: 3px 8px 3px 8px;
  gap: 8px;
  border-radius: 17px;
  background-color: #222426;
  color: #5c7cfa;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  &.side-bar-light-mode{
    background-color: #ffffff;
  border: solid 1px #DEDEDE;
  color: black;
  }
  /* margin-top: 20px; */
`;

const LeftMidDivInnerInnerLeftTwo = styled.div`
  width: 91px;
  height: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: #e6e6e6;
  &.side-bar-light-mode{
    background-color: #ffffff;
  border: solid 1px #DEDEDE;
  color: #171819;
  }
`;
const LeftMidDivInnerInnerRight = styled.div`
  width: 79px;
  height: 20px;
  gap: 16px;
  display: flex;
  align-items: center;
`;
const LeftMidDivInnerInnerRightText = styled.div`
  width: 53px;
  height: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: #e6e6e6;
  &.side-bar-light-mode{
    background-color: #ffffff;
  border: solid 1px #DEDEDE;
  color: black;
  }
`;
const LeftMidDivInnerInnerRightArrow = styled.img`
  width: 10px;
  height: 6px;
`;

const LeftBottomDiv = styled.div`
  width: 278px;
  padding: 0px 9px 0px 9px;
  margin: 10px;
`;
const MainDiv = styled.div``;
const RightDiv = styled.div``;

const CapaignLeft = () => {
  const mailData = useSelector(state => state.mail)
  const toggleVal = useSelector(state => state.toggle)

  const dispatch = useDispatch()
  
  const handleClick = (val) => {
    dispatch(insertThreadData(val))
  }

  const handleRefresh = () => {
    location.reload()
  }

  return (
    <LeftDiv className={toggleVal? "": "side-bar-light-mode"}>
      <LeftTopDiv>
        <LeftTopInnerOne>
          <LeftTopInnerText>
            <LeftTopInInOne>All Inbox(s)</LeftTopInInOne>
            <LeftTopInInTwo src="campaignarrow.png" alt="arrow" />
          </LeftTopInnerText>
          <LeftTopInnerTextTwo>
            25/25{" "}
            <LeftTopInnerTextTwoSpan>Inboxes selected</LeftTopInnerTextTwoSpan>
          </LeftTopInnerTextTwo>
        </LeftTopInnerOne>
        <LeftTopInnerTwo>
          <LeftTopInnerTwoImg src="refresh.png" alt="refresh" onClick={handleRefresh}/>
        </LeftTopInnerTwo>
      </LeftTopDiv>
      <LeftMidDiv>
        <LeftMidDivInnerOne>
          <LeftMidDivInnerOneSearchDiv className={toggleVal? "": "side-bar-light-mode"}>
            <LeftMidDivInInSearchIcon src="searchIcon.png" alt="search" />
            <LeftMidDivInnerOneSearch type="text" placeholder="Search" />
          </LeftMidDivInnerOneSearchDiv>
        </LeftMidDivInnerOne>
        <LeftMidDivInnerTwo>
          <LeftMidDivInnerInnerTwo>
            <LeftMidDivInnerInnerLeft>
              <LeftMidDivInnerInnerLeftIn className={toggleVal? "": "side-bar-light-mode"}>26</LeftMidDivInnerInnerLeftIn>
              <LeftMidDivInnerInnerLeftTwo className={toggleVal? "": "side-bar-light-mode"}>
                New Replies
              </LeftMidDivInnerInnerLeftTwo>
            </LeftMidDivInnerInnerLeft>
            <LeftMidDivInnerInnerRight className={toggleVal? "": "side-bar-light-mode"}>
              <LeftMidDivInnerInnerRightText className={toggleVal? "": "side-bar-light-mode"}>
                Newest
              </LeftMidDivInnerInnerRightText>
              <LeftMidDivInnerInnerRightArrow
                src="dropdownWhite.png"
                alt="drop down"
              />
            </LeftMidDivInnerInnerRight>
          </LeftMidDivInnerInnerTwo>
        </LeftMidDivInnerTwo>
      </LeftMidDiv>
      <LeftBottomDiv>
        {mailData.map((val) => (
          <div style={{cursor: "pointer"}} onClick={() => handleClick(val)}>

          <CampaignLeftBottom mailData={val}/>
          </div>
        ))}
        {/* <CampaignLeftBottom /> */}
        {/* <CampaignLeftBottom /> */}
      </LeftBottomDiv>
    </LeftDiv>
  );
};

export default CapaignLeft;
