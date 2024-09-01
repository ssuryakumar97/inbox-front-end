import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/userReducer";
// import app from "../assets/"

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
`;

const LogoDiv = styled.div`
  width: 100%;
  height: 64px;
  padding: 10px 100px 10px 100px;
  text-align: center;
  border-bottom: 1px solid #25262b;
  display: flex;
`;

const LoginDiv = styled.div`
  width: 100%;
  height: 728px;
  border-radius: 4px;
  padding: 59px 29px 59px 29px;
  display: flex;
`;

const BodyDiv = styled.div`
  width: 460px;
  height: 312px;
  border: 1px solid #343a40;
  border-radius: 17px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 40px 40px 40px;
  gap: 48px;
  background-image: linear-gradient(#111214, #121212);
`;

const Img = styled.img`
  width: 156.77px;
  height: 24px;
  margin: auto;
`;

const BodyTopDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 103px;
  gap: 24px;
`;
const BodyBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 97px;
  gap: 24px;
`;

const TextDiv = styled.div`
  width: 380px;
  height: 31px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 31px;
  text-align: center;
  color: #ffffff;
`;

const GoogleDiv = styled.div`
  width: 380px;
  height: 48px;
  gap: 16px;
`;

const FrameDiv = styled.div`
  width: 380px;
  height: 48px;
  padding: 8px 16px 8px 16px;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid #707172;
  display: flex;
  margin: auto;
  justify-content: center;
`;

const InnerDiv = styled.button`
  width: 200px;
  height: 32px;
  gap: 2px;
  background-color: inherit;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const InnerText = styled.div`
  width: 145px;
  height: 27px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26.1px;
  letter-spacing: -0.30000001192092896px;
  text-align: center;
  color: #cccccc;
  margin-left: 10px;
`;

const InnerGoogleLogo = styled.img`
  width: 25px;
  height: 30px;
  top: 5px;
  left: 7.75px;
`;

const AccountButton = styled.div`
  width: 195px;
  height: 48px;
  padding: 13px 35px 13px 35px;
  gap: 10px;
  border-radius: 4px;
  background-image: linear-gradient(to right, #4b63dd, #0524bf);
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 21.7px;
  text-align: left;
  color: #ffffff;
  cursor: pointer;
`;

const BottomInnerDiv = styled.div`
  width: 380px;
  height: 25px;
  gap: 13px;
`;

const BottomInnerText = styled.div`
  width: 380px;
  height: 25px;
  gap: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextOne = styled.div`
  width: 190px;
  height: 25px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24.8px;
  text-align: center;
  color: #909296;
`;

const TextTwo = styled.div`
  width: 50px;
  height: 25px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24.8px;
  text-align: center;
  color: #c1c2c5;
`;

const BottomDiv = styled.div`
    width: 1,240px;
height: 19px;
background-color: #121212;
display: flex;
align-items: center;
justify-content: center;
;
`
const BottomDivInner = styled.div`
    width: 220px;
height: 19px;
font-family: "Open Sans", sans-serif;
font-size: 12px;
font-weight: 400;
line-height: 18.6px;
text-align: center;
color: #5C5F66;



`

const Login = () => {
  
  return (
    <MainDiv>
      <LogoDiv>
        <Img src="logo.png" alt="ReachInbox" />
      </LogoDiv>
      <LoginDiv>
        <BodyDiv>
          <BodyTopDiv>
            <TextDiv>Create a new account</TextDiv>
            <GoogleDiv>
              <FrameDiv>
                  {/* <Link to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/home"> */}
                  <Link to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://inboxfrontend.netlify.app/home">
                <InnerDiv >
                  <InnerGoogleLogo src="googleLogo.png" alt="Google" />
                  <InnerText>Sign Up with Google</InnerText>
                </InnerDiv>
                  </Link>
              </FrameDiv>
            </GoogleDiv>
          </BodyTopDiv>
          <BodyBottomDiv>
            <AccountButton>Create an Account</AccountButton>
            <BottomInnerDiv>
              <BottomInnerText>
                <TextOne>Already have an account?</TextOne>
                <TextTwo>Sign In</TextTwo>
              </BottomInnerText>
            </BottomInnerDiv>
          </BodyBottomDiv>
        </BodyDiv>
      </LoginDiv>
      <BottomDiv>
        <BottomDivInner>
        © 2023 Reachinbox. All rights reserved.
        </BottomDivInner>
      </BottomDiv>
    </MainDiv>
  );
};

export default Login;
