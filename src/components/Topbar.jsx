import React, { useState } from "react";
import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./topbar.css"
import { useDispatch, useSelector } from "react-redux";
import { toggling } from "../redux/toggleReducer";

const TopBarDiv = styled.div`
  width: 100%;
  height: 64px;
  padding: 24px;
  border: 1px;
  background-color: #1f1f1f;
  border: solid 1px #343a40;
  box-shadow: 0 -186px 120px 0px #252738;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  &.top-bar-light-mode{
    background-color: #ffffff;
  border: solid 1px #DEDEDE;
  color: #5B5F66;
  }
`;
const LeftDiv = styled.div`
  width: 127px;
  height: 22px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 21.79px;
  letter-spacing: -0.02em;
  text-align: left;
  
`;
const RightDiv = styled.div`
  width: 210px;
  height: 24px;
  gap: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleDiv = styled.div`
  width: 51px;
  height: 24px;
  padding: 3px 5px 3px 5px;
  gap: 7px;
  border-radius: 80px;
  border: 1px solid #343a40;
  background-color: #222426;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 500ms linear;
  position: relative;

  &.light-mode{
    
    width: 51px;
  height: 24px;
  padding: 3px 5px 3px 5px;
  gap: 7px;
  border-radius: 80px;
  background-color: #E9EAEC;
  border: 1px solid #DADEE1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 500ms linear;
  position: relative;

  }

`;

const EllipseDiv = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 9px;
    position: absolute;
    background-color: #888686;
    left: 3px;
    /* right: auto; */
    transition: all 500ms linear;
    &.light-mode{
        width: 18px;
        height: 18px;
        border-radius: 9px;
        position: absolute;
        background-color: #FFFFFF;
        /* right: 4px; */
        left: 29px;
        transition: all 500ms linear;
    }
`

const LightModeEllipse = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  left: 4px;
  /* color: aliceblue; */
`;
const LightModeLogo = styled.img`
  width: 18px;
  height: 18px;
  padding: 1px;
`;



const DropdownDiv = styled.div`
  

`;

const DropDownInner = styled.div`
  width: 137px;
  height: 22px;
`

const DropDownImg = styled.img`
  width: 16px;
  height: 10px;
`

const StyledFormControl = styled(FormControl)`
`

const StyledSelect = styled(Select)`
    width: 180px;
  height: 40px;
  padding: 2px;
  border: none;
  color: inherit;
  font-family: "Open Sans", sans-serif;
font-size: 14px;
font-weight: 600;
line-height: 21.7px;
text-align: left;
`

const Topbar = () => {
    const toggleVal = useSelector((state) => state.toggle)
    const dispatch = useDispatch()
  return (
    <TopBarDiv className={toggleVal? "": "top-bar-light-mode"}>
      <LeftDiv>Onebox</LeftDiv>
      <RightDiv>
        <ToggleDiv className={toggleVal? "": "light-mode"} onClick={() => dispatch(toggling())}>
                <EllipseDiv className={toggleVal? "": "light-mode"}></EllipseDiv>
                <LightModeLogo src="darkMode.png" alt="dark mode" />
                <LightModeLogo src="lightMode.png" alt="light mode" />
        </ToggleDiv>
        <DropdownDiv>
        <StyledFormControl >
        <StyledSelect
          value="myWorkspace"
          // onChange={handleChange}
          sx={{
            color: "inherit",
            fontFamily: "Open Sans", 
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "21.7px",
          textAlign: "left",
          border: "none"
          }
          }
          // inputProps={{ 'aria-label': 'Without label' }}
          
          IconComponent={toggleVal ? () => (<DropDownImg src="dropdownWhite.png" alt="dropDown" /> ):() => (<DropDownImg src="dropdownBlack.png" alt="dropDown" /> )}
        >
          <MenuItem 
          value="createWorkspace">+ Create Workspace</MenuItem>
          {/* <MenuItem  value="switchWorkspace"><em>None</em></MenuItem> */}
          <MenuItem  value="switchWorkspace">---Switch Workspace---</MenuItem>
          <MenuItem value="myWorkspace" selected>My workspace</MenuItem>
        </StyledSelect>
        </StyledFormControl>
        </DropdownDiv>
      </RightDiv>
    </TopBarDiv>
  );
};

export default Topbar;
