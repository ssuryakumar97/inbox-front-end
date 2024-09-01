import axios from "axios";
import React from "react";
import {  useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const SidebarDiv = styled.div`
  width: 56px;
  height: 100%;
  padding: 0px 4px 0px 4px;
  border: 1px solid #343a40;
  background-color: #101113;
  &.side-bar-light-mode{
    border: 1px solid #DEDEDE;
    background-color: #ffffff;
  }
`;

const LogoHolder = styled.div`
  width: 48px;
  height: 70px;
  padding: 8px 12px 12px 12px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoHolderDiv = styled.div`
  width: 32px;
  height: 32px;
  padding: 4px 3px 4px 3px;
`;
const LogoImg = styled.img`
  width: 26px;
  height: 24px;
  border-radius: 2px;
  background-color: black;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  width: 48px;
  height: 602px;
`;

const LeftPanelTop = styled.div`
  width: 48px;
  height: 600px;
  padding: 16px 8px 16px 8px;
`;

const MenuContainerInnerDiv = styled.div`
  width: 28px;
  height: 546px;
  margin-top: 50px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MenuContainerImg = styled.img`
  width: 28px;
  height: 28px;
  &.inbox {
    width: 18px;
    height: 18px;
  }
`;

const LoginIdContainer = styled.div`
  width: 48px;
  height: 56px;
  padding: 12px 8px 12px 8px;
  border-radius: 2px;
`;

const Sidebar = () => {
  const toggleVal = useSelector((state) => state.toggle)

  const location = useLocation()
  const token= location.search.split("=")[1]
  const bearer = "Bearer "+token

  const handleClick = () => {
    const handleReset = async() => {
      try {
          const res = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/reset',{
              headers : {
                  "Authorization": bearer
                }
          } )
          // console.log(res)
          window.location.reload()
      } catch (error) {
          console.log(error)
      }
  }
  handleReset()
  }
  return (
    <SidebarDiv className={toggleVal? "": "side-bar-light-mode"}>
      <LogoHolder>
        <LogoHolderDiv>
          {toggleVal ? <LogoImg src="oneboxlogo.png" alt="Logo" onClick={handleClick}/>: <LogoImg src="oneboxlogolight.png" alt="Logo" onClick={handleClick} />}
        </LogoHolderDiv>
      </LogoHolder>
      <MenuContainer>
        <LeftPanelTop>
          <MenuContainerInnerDiv>
            <MenuContainerImg src="home.png" alt="home" />
            <MenuContainerImg src="emailProfile.png" alt="email profile" />
            <MenuContainerImg src="email.png" alt="email" />
            <MenuContainerImg src="send.png" alt="send" />
            <MenuContainerImg src="viewList.png" alt="view list" />
            <MenuContainerImg src="inbox.png" alt="inbox" className="inbox" />
            <MenuContainerImg src="barchart.png" alt="barchart" />
          </MenuContainerInnerDiv>
        </LeftPanelTop>
      </MenuContainer>
      <LoginIdContainer>
        <MenuContainerImg src="userIcon.png" alt="user icon" />
      </LoginIdContainer>
    </SidebarDiv>
  );
};

export default Sidebar;
