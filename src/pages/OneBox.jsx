import React, { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import HomeComponent from "../components/HomeComponent";
import CapaignLeft from "../components/CapaignLeft";
import CampaignMiddle from "../components/CampaignMiddle";
import CampaignRight from "../components/CampaignRight";
import EmailModal from "../components/EmailModal";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { insertData } from "../redux/mailReducer";
import { insertThreadData } from "../redux/threadReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OneboxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const MainComponent = styled.div`
  width: calc(100% - 56px);
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const BodyContainer = styled.div`
  height: calc(100% - 64px);
  display: flex;
`;
const OneBox = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const token = location.search.split("=")[1];
  const bearer = "Bearer " + token;
  // console.log(token);
  const dispatch = useDispatch();

  useEffect(() => {
    const getList = async () => {
      const res = await axios.get(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: {
            Authorization: bearer,
          },
        }
      );
      dispatch(insertData(res.data.data));
      dispatch(insertThreadData(res.data.data[0]));
    };
    getList();
  }, []);
  return (
    <OneboxContainer>
      <ToastContainer autoClose={1000} />
      <Sidebar />
      <MainComponent>
        <Topbar />
        <BodyContainer>
          <CapaignLeft />
          <CampaignMiddle />
          <CampaignRight />
        </BodyContainer>
      </MainComponent>
    </OneboxContainer>
  );
};

export default OneBox;
