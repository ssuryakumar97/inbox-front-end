import React from "react";
import styled from "styled-components";
import date from 'date-and-time';
import parse from 'html-react-parser';
import { Parser } from "html-to-react";
import { useSelector } from "react-redux";

const MiddleContainer = styled.div`
  width: 753px;
  /* height: 236px; */
  background-color: #141517;
  margin: 20px;
  &.side-bar-light-mode {
    background-color: #ffffff;
  }
`;
const MiddleTopContainer = styled.div`
  width: 753px;
  height: 99px;
  padding: 12px 16px 12px 16px;
  gap: 10px;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  flex-direction: column;
`;
const MiddleTopContainerRowOne = styled.div`
  width: 721px;
  height: 19px;
  display: flex;
  justify-content: space-between;
`;
const MiddleTopContainerRowOneLeft = styled.div`
  height: 19px;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 600;
  line-height: 19.07px;
  text-align: left;
  color: #f8fafc;
  &.side-bar-light-mode {
    color: black;
  }
`;
const MiddleTopContainerRowOneRight = styled.div`
  width: 151px;
  height: 17px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
  text-align: left;
  color: #7f7f7f;
  &.side-bar-light-mode {
    color: #2f2a2a;
  }
`;
const MiddleTopContainerRowTwo = styled.div`
  height: 17px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
  text-align: left;
  color: #aeaeae;
  &.side-bar-light-mode {
    color: #2f2a2a;
  }
`;
const MiddleTopContainerRowThree = styled.div`
  width: 202.84px;
  height: 17px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
  text-align: left;
  color: #aeaeae;
  &.side-bar-light-mode {
    color: #2f2a2a;
  }
`;
const MiddleBottomContainer = styled.div`
  /* width: 500px; */
  /* height: 114px; */
  padding: 12px 16px 12px 16px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #e1e0e0;
  &.side-bar-light-mode {
    color: #2f2a2a;
  }
`;

const CampaignMiddleBottom = ({threadData}) => {
  const toggleVal = useSelector((state) => state.toggle);
  const time = threadData.sentAt
  const till = new Date(time)
  const formatedDate = date.format(till, 'DD MMM YY: hh:mmA');
  const htmlParser = new Parser();
  
  // const datetime = till.getHours()
  // console.log(xxx)
  return (
    <MiddleContainer className={toggleVal? "": "side-bar-light-mode"}>
      <MiddleTopContainer>
        <MiddleTopContainerRowOne>
          <MiddleTopContainerRowOneLeft className={toggleVal? "": "side-bar-light-mode"}>
            {threadData.subject}
          </MiddleTopContainerRowOneLeft>
          <MiddleTopContainerRowOneRight className={toggleVal? "": "side-bar-light-mode"}>
            {formatedDate}
          </MiddleTopContainerRowOneRight>
        </MiddleTopContainerRowOne>
        <MiddleTopContainerRowTwo className={toggleVal? "": "side-bar-light-mode"}>
          from : {threadData.fromEmail} cc : {threadData.references}
        </MiddleTopContainerRowTwo>
        <MiddleTopContainerRowThree className={toggleVal? "": "side-bar-light-mode"}>
          to : {threadData?.toEmail}
        </MiddleTopContainerRowThree>
      </MiddleTopContainer>
      <MiddleBottomContainer className={toggleVal? "": "side-bar-light-mode"}>
        Hi {threadData?.toName}, <br />
        <br />{htmlParser.parse(threadData?.body)}
      </MiddleBottomContainer>
    </MiddleContainer>
  );
};

export default CampaignMiddleBottom;
