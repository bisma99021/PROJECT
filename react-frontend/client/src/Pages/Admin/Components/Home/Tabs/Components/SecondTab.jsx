import React from "react";
import TabContent from "./TabContent";
import "./Content.css";
import { SecondCardsData, SecondUpdatesData } from "../../../Data/Data";

const SecondTab = () => {
  return <TabContent mainDashData={SecondCardsData} updatesData={SecondUpdatesData} />;
};

export default SecondTab;
