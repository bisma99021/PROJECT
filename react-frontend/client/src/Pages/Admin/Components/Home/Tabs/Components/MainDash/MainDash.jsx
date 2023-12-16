// MainDash.jsx
import React from "react";
import "./MainDash.css";
import Cards from "../Cards/Cards";
import BasicTable from "../Table/Table";

function createData(number, query) {
  return { number, query };
}
const query = [
  createData('+01 00045677 9', "Hi, can I ask you something?"),
  createData('+01 00045677 2', "What courses are you offering?"),
  createData('+01 00045677 4', "How do i apply?"),
  createData('+01 00045677 1', "Where is your office located?"),
];

const MainDash = ({ cardsData }) => {
  return (
    <div className="MainDash">
      <h1>DASHBOARD</h1>
      <Cards data={cardsData} />
      <h2>Recent Contacts</h2>
      <BasicTable rows={query}/>
    </div>
  );
};

export default MainDash;
