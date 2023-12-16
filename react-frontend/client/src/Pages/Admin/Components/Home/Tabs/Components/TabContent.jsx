import React from "react";
import "./Content.css";
import RightSide from "./RightSide/RightSide";
import Cards from "./Cards/Cards";
import BasicTable from "./Table/Table";
function createData(number, query) {
  return { number, query };
}
const query = [
  createData('+01 00045677 9', "Hi, can I ask you something?"),
  createData('+01 00045677 2', "What courses are you offering?"),
  createData('+01 00045677 4', "How do i apply?"),
  createData('+01 00045677 1', "Where is your office located?"),
];
const TabContent = ({ mainDashData, updatesData }) => {
  return (
    <div className="TabContent">
      <div className="main-dash-section">
        <h1>DASHBOARD</h1>
        <Cards data={mainDashData} />
        <BasicTable rows={query} />

        {/* <MainDash cardsData={mainDashData} /> */}
      </div>
      <div className="right-side-section">
        <RightSide updatesData={updatesData} />
      </div>
    </div>
  );
};

export default TabContent;
