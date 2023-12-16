import React from "react";
import TabContent from "./TabContent";
import "./Content.css";
import { cardsData, UpdatesData } from "../../../Data/Data";

const FirstTab = () => {
  return <TabContent mainDashData={cardsData} updatesData={UpdatesData} />;
};

export default FirstTab;
