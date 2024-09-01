import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";
import Divider from "./Divider";
import CampaignMiddleBottom from "./CampaignMiddleBottom";
import ExtendDivider from "./ExtendDivider";
import EmailModal from "./EmailModal";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./campaignMiddle.css"

const MainContainer = styled.div`
  width: 799px;
  height: 665px;
  background-color: #101113;
  color: #ffffff;
  position: relative;
  &.side-bar-light-mode {
    background-color: #ffffff;
    border: solid 1px #dedede;
    color: black;
  }
`;

const TopDiv = styled.div`
  width: 799px;
  height: 70px;
  top: 69px;
  left: 363px;
  padding: 0px 8px 0px 17px;
  gap: 8px;
  border-radius: 7px 7px 0px 0px;
  border-bottom: 1px solid #464b55;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;
const TopDivLeft = styled.div`
  width: 422px;
  height: 46px;
  padding: 4px;
  gap: 8px;
  border-radius: 8px;
`;
const TopDivLeftRowOne = styled.div`
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
const TopDivLeftRowTwo = styled.div`
  width: 156px;
  height: 18px;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: #ffffff;
  &.side-bar-light-mode {
    color: black;
  }
`;
const TopDivRight = styled.div`
  width: 328px;
  height: 33px;
  gap: 14px;
  display: flex;
`;

const StyledFormControl = styled(FormControl)``;
const TopDivRightOne = styled(Select)`
  width: 180px;
  height: 33px;
  padding: 6px 8px;
  
  gap: 6px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 21.7px;
  text-align: left;
`;

const DropDownImg = styled.img`
  width: 16px;
  height: 10px;
`;

const DropDownDiv = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: orange;
  display: inline-block;
`;

const TopDivRightTwo = styled(Select)`
  width: 86px;
  height: 33px;
  padding: 6px 8px;
  border: 1px solid #343a40;
  color: inherit;
  gap: 6px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 21.7px;
  text-align: left;
`;

const TopDivRightThree = styled.div`
  width: 32px;
  height: 32px;
  padding: 8px 8px 16px 8px;
  border-radius: 4px;
  border: 1px solid #343a40;
  background-color: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: center;
  &.side-bar-light-mode {
    background-color: #ffffff;
    border: solid 1px #dedede;
    color: black;
  }
`;

const StyledButton = styled.button`
  width: 136px;
  height: 40px;
  padding: 8px 40px 8px 24px;
  border-radius: 4px;
  background-image: linear-gradient(to right, #4b63dd, #0524bf);
  border: none;
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 21.7px;
  text-align: left;
  color: #ffffff;
  cursor: pointer;
`;

const ReplyImg = styled.img`
  width: 24px;
  height: 24px;
`;

const CampaignMiddle = () => {
  
  
  const toggleVal = useSelector((state) => state.toggle);
  const threadData = useSelector((state) => state.thread, shallowEqual)
  const [replyToggle, setReplyToggle] = useState(false)
  const tdata = threadData
  const location = useLocation()
  const token= location.search.split("=")[1]
  const bearer = "Bearer "+token


  useEffect(()=>{
    window.addEventListener("keypress",handleKeyPress)
    return () => {
      window.addEventListener("keypress",  handleKeyPress)
    }
  },[threadData])

  const handleKeyPress = (event) => {
    if (event.key === 'r' || event.key === "R") {
      setReplyToggle(true)
    } 
    if(event.key === 'd' || event.key === "D") {
      const handleDelete = async() => {
        try {
            const res = await axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadData.threadId}`,{
                headers : {
                    "Authorization": bearer
                  }
            } )
            window.location.reload()
        } catch (error) {
            toast.error(error)
        }
    }
    handleDelete()
    }
  }

  
  const date = threadData.sentAt
  const datetime = new Date(date)
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
  const dateMonth = months[datetime.getMonth()]+ " " + datetime.getDate()
  const handleReply = () => {
    setReplyToggle(prev => !prev)
  }




  return (
    <MainContainer className={toggleVal? "": "side-bar-light-mode"}>
      <TopDiv>
        <TopDivLeft>
          <TopDivLeftRowOne className={toggleVal? "": "side-bar-light-mode"}>Surya</TopDivLeftRowOne>
          <TopDivLeftRowTwo className={toggleVal? "": "side-bar-light-mode"}>surya@gmail.com</TopDivLeftRowTwo>
        </TopDivLeft>
        <TopDivRight>
          <StyledFormControl>
            <TopDivRightOne
              value="myWorkspace"
              // onChange={handleChange}
              className={toggleVal? "normal": "side-bar-light-mode"}
              sx={{
                color: "inherit",
                fontFamily: "Open Sans",
                fontSize: "10px",
                fontWeight: "400",
                lineHeight: "21.7px",
                textAlign: "left",
                border: "none",
              }}
              IconComponent={
                toggleVal
                  ? () => <DropDownImg src="dropdownWhite.png" alt="dropDown" />
                  : () => <DropDownImg src="dropdownBlack.png" alt="dropDown" />
              }
            >
              <MenuItem value="createWorkspace">+ Create Workspace</MenuItem>
              <MenuItem value="switchWorkspace">
                ---Switch Workspace---
              </MenuItem>
              <MenuItem value="myWorkspace" selected>
                {" "}
                &nbsp; <DropDownDiv /> &nbsp; Meeting Completed
              </MenuItem>
            </TopDivRightOne>
          </StyledFormControl>
          <StyledFormControl>
            <TopDivRightTwo
              value="myWorkspace"
              className={toggleVal? "normal": "side-bar-light-mode"}
              // onChange={handleChange}
              sx={{
                color: "inherit",
                fontFamily: "Open Sans",
                fontSize: "10px",
                fontWeight: "400",
                lineHeight: "21.7px",
                textAlign: "left",
                border: "none",
              }}
              IconComponent={
                toggleVal
                  ? () => <DropDownImg src="dropdownWhite.png" alt="dropDown" />
                  : () => <DropDownImg src="dropdownBlack.png" alt="dropDown" />
              }
            >
              <MenuItem value="createWorkspace">+ Create Workspace</MenuItem>
              <MenuItem value="switchWorkspace">
                ---Switch Workspace---
              </MenuItem>
              <MenuItem value="myWorkspace" selected>
                Move
              </MenuItem>
            </TopDivRightTwo>
          </StyledFormControl>
          <TopDivRightThree className={toggleVal? "": "side-bar-light-mode"}>...</TopDivRightThree>
        </TopDivRight>
      </TopDiv>
      <Divider content={dateMonth} />
      <CampaignMiddleBottom threadData={threadData}/>
      <ExtendDivider />
      {replyToggle ? <EmailModal toggling={handleReply} threadData={threadData}/> : <StyledButton onClick={handleReply}>
        <ReplyImg src="reply.png" alt="reply" />
        Reply
      </StyledButton> }
      
    </MainContainer>
  );
};

export default CampaignMiddle;
