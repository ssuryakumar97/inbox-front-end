import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const MainContainer = styled.div`
  width: 799px;
  height: 534px;
  background-color: #1a1b1d;
  border-radius: 8px;
  position: absolute;
  bottom: 10px;
  
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 38px;
  padding: 20px 32px 20px 32px;
  gap: 10px;
  border-radius: 8px 8px 0px 0px;
  border: 1px solid #41464b;
  background-color: #23272c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContainerLeft = styled.div`
  color: #bab9bd;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 16.34px;
  letter-spacing: -0.02em;
  text-align: left;
`;
const HeaderContainerRight = styled.img`
  width: 20px;
  height: 20px;
  padding: 4px;
  cursor: pointer;
`;
const BodyContainerOne = styled.div`
margin-top: 5px;
    width: 100%;
height: 24px;
top: 46px;
padding: 0px 32px 8px 32px;
gap: 8px;
border-bottom: 1px solid #34383D;    
display: flex;
`;
const BodyContainerOneLeft = styled.label`
    width: 21px;
height: 16px;
font-family: "Open Sans", sans-serif;
font-size: 12px;
font-weight: 400;
line-height: 16.34px;
text-align: left;
color: #BAB9BD;

`;
const BodyContainerOneRight = styled.input`
    width: 114px;
height: 16px;
font-family: "Open Sans", sans-serif;
font-size: 12px;
font-weight: 600;
line-height: 16.34px;
text-align: left;
color: #E7E7E7;
border: none;
background-color: inherit;

`;
const BodyContainerTwo = styled.div`
    margin-top: 5px;
    width: 100%;
height: 24px;
top: 46px;
padding: 0px 32px 8px 32px;
gap: 8px;
border-bottom: 1px solid #34383D;    
display: flex;
`;

const BodyContainerTwoLeft = styled.label`
    width: 36px;
height: 16px;
font-family: "Open Sans", sans-serif;
font-size: 12px;
font-weight: 400;
line-height: 16.34px;
text-align: left;
color: #BAB9BD;    
`
const BodyContainerTwoRight = styled.input`
     width: 140px;
height: 16px;
font-family: "Open Sans", sans-serif;
font-size: 12px;
font-weight: 700;
line-height: 16.34px;
text-align: left;
color: #E7E7E7;
border: none;
background-color: inherit;
`
const BodyContainerThree = styled.div`
    margin-top: 5px;
    width: 100%;
height: 24px;
top: 46px;
padding: 0px 32px 8px 32px;
gap: 8px;
border-bottom: 1px solid #34383D;    
display: flex;
`;
const BodyContainerThreeLeft = styled.label`
    width: 46px;
height: 16px;
font-family: "Open Sans", sans-serif;
font-size: 12px;
font-weight: 400;
line-height: 16.34px;
text-align: left;
color: #BAB9BD;
`;
const BodyContainerThreeRight = styled.input`
width: 140px;
height: 16px;
font-family: "Open Sans", sans-serif;
font-size: 12px;
font-weight: 700;
line-height: 16.34px;
text-align: left;
color: #E7E7E7;
border: none;
background-color: inherit;
`;
const BodyContainerFour = styled.div`
    width: 100%;
    height: 355px;
    padding: 20px;
`;
const BodyContainerFourOne = styled.textarea`
    margin: 10px;
    width: 80%;
    height: 80%;
    font-family: "Open Sans", sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 19.07px;
letter-spacing: -0.02em;
text-align: left;
    border:none;
    background-color: inherit;
    color: #636970;
    display: flex;
    align-items: start;
    justify-content: start;
    &:focus{
        outline: none;
    }
`;

const StyledQuill = styled(ReactQuill)`
    /* margin: 10px; */
    width: 100%;
    height: 80%;
    outline: none;
    border: none;
    &:focus{
        outline: none;
    }
`;

const FooterContainer = styled.div`
    width: 100%;
height: 54px;
padding: 0px 12px 0px 12px;
gap: 20px;
border-top: 1px #2E3236 solid;
display: flex;
align-items: center;
border-radius: 0px 0px 8px 8px;
`;
const FooterContainerButton = styled.button`
    width: 114px;
  height: 40px;
  padding: 8px 40px 8px 24px;
  border-radius: 4px;
  background-image: linear-gradient(to right, #4b63dd, #0524bf);
  border: none;
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
const FooterContainerColTwo = styled.div`
    width: 95px;
    height: 40px;
    gap: 16px;
    display: flex;
    align-items: center;
    
`;
const FooterContainerColTwoLeft = styled.img`
    width: 24px;
    height: 24px;
    padding: 0px 2px;
`;
const FooterContainerColTwoRight = styled.div`
    color: #ADADAD;
    width: 63px;
height: 22px;
font-family: "Open Sans";
font-size: 14px;
font-weight: 600;
line-height: 21.7px;
text-align: left;

`;
const FooterContainerColThree = styled.div`
    width: 140px;
    height: 40px;
    gap: 16px;
    display: flex;
    align-items: center;
`;
const FooterContainerColThreeLeft = styled.img`
    width: 24px;
    height: 24px;
`;
const FooterContainerColThreeRight = styled.div`
    color: #ADADAD;
    width: 95px;
height: 22px;
font-family: "Open Sans";
font-size: 14px;
font-weight: 600;
line-height: 21.7px;
text-align: left;
`;
const FooterContainerColFour = styled.div`
    width:210px;
height: 24px;
gap: 18px;
display: flex;
align-items: center;

`;

const FooterContainerColFourInner = styled.img`
    width: 24px;
    height: 24;
`

const EmailModal = ({toggling, threadData}) => {
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const location = useLocation()
  const token= location.search.split("=")[1]
  const bearer = "Bearer "+token
    const randomId = Math.floor(Math.random() * 100) + 1
//   console.log(token)
// console.log(body)
    const handleSend = async() => {
        const postData = {to, from, subject, body, inReplyTo: threadData.inReplyTo, references: threadData.references}
        try {
            const res = await axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${randomId}`, postData,{
                headers : {
                    "Authorization": bearer
                  }
            } )
            // console.log(res.data)
        } catch (error) {
            // console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
        
    }
  return (
    <MainContainer>
      <HeaderContainer>
        <HeaderContainerLeft>Reply</HeaderContainerLeft>
        <HeaderContainerRight src="close.png" alt="close" onClick={toggling}/>
      </HeaderContainer>
      <BodyContainerOne>
      <BodyContainerOneLeft>To:</BodyContainerOneLeft>
      <BodyContainerOneRight type="text" placeholder="suresh@gmail.com" value={to} onChange={(e) => setTo(e.target.value)}/>
      </BodyContainerOne>
      <BodyContainerTwo>
        <BodyContainerTwoLeft>From:</BodyContainerTwoLeft>
        <BodyContainerTwoRight type="text" placeholder="surya@gmail.com" value={from} onChange={(e) => setFrom(e.target.value)}/>
      </BodyContainerTwo>
      <BodyContainerThree>
        <BodyContainerThreeLeft>Subject:</BodyContainerThreeLeft>
        <BodyContainerThreeRight type="text" placeholder="Regards" value={subject} onChange={(e) => setSubject(e.target.value)}/>
      </BodyContainerThree>
      <BodyContainerFour>
        {/* <BodyContainerFourOne type="text" placeholder="Hello"/> */}
      <StyledQuill theme="snow" value={body} onChange={setBody} />
      </BodyContainerFour>
      <FooterContainer>
        <FooterContainerButton onClick={handleSend}>Send</FooterContainerButton>
        <FooterContainerColTwo>
        <FooterContainerColTwoLeft src="variables.png" alt="variables"/>
        <FooterContainerColTwoRight>Variables</FooterContainerColTwoRight>
      </FooterContainerColTwo>
      <FooterContainerColThree>
        <FooterContainerColThreeLeft src="preview.png" alt="Preview"/>
        <FooterContainerColThreeRight>Preview Email</FooterContainerColThreeRight>
      </FooterContainerColThree>
      <FooterContainerColFour>
        <FooterContainerColFourInner src="spellcheck.png" alt="spellcheck"/>
        <FooterContainerColFourInner src="link.png" alt="link"/>
        <FooterContainerColFourInner src="picture.png" alt="picture"/>
        <FooterContainerColFourInner src="centiment.png" alt="centiment"/>
        <FooterContainerColFourInner src="personRemove.png" alt="person remove"/>
        <FooterContainerColFourInner src="unfold.png" alt="unfold more"/>
      </FooterContainerColFour>
      </FooterContainer>
      
    </MainContainer>
  );
};

export default EmailModal;
