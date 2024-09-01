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
  width: 60px;
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

const Divider = ({ content }) => {
  const toggleVal = useSelector((state) => state.toggle);

  return (
    <DividerContainer >
      <Line />
      <Text className={toggleVal? "": "side-bar-light-mode"}>{content}</Text>
      <Line />
    </DividerContainer>
  );
};

export default Divider;
