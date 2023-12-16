import React from "react";
import './Queries.css'; // You can have a separate CSS file for Queries component if needed
import Tabs from '../Home/Tabs/Tabs'; // Import the Tabs component
import QueryTable from "./QueryTable";

function createData(number, query) {
  return { number, query };
}

const secondTabQuery = [
  createData('+01 00045677 9', "What are the exact prerequisites for enrolling in the advanced robotics course?"),
  createData('+01 00045677 2', "Can I transfer my credits from a different institution to your university?"),
  createData('+01 00045677 4', "Is it possible to customize the curriculum of a particular degree programs?"),
  createData('+01 00045677 1', "Is your institution accredited by the relevant educational authorities?"),
];
const firstTabQuery = [
  createData('+01 00045677 9', "Are your degrees recognized internationally?"),
  createData('+01 00045677 2', "What research opportunities are available for undergraduate students?"),
  createData('+01 00045677 4', "How can I get involved in ongoing research projects?"),
  createData('+01 00045677 1', "How does your institution support students in terms of internships? "),
];
const FirstTabContent = () => {
  return (
    <div className="FirstTabQuery">
      <h2 style={{textAlign:'center',marginTop:'60px'}}>Unattainable Queries- ChatBot 1</h2>
      <QueryTable rows={firstTabQuery} />
    </div>
  )
};

const SecondTabContent = () => {
  return (
    <div className="SecondTabQuery">
      <h2 style={{textAlign:'center',marginTop:'60px'}}>Unattainable Queries- ChatBot 2</h2>
      <QueryTable rows={secondTabQuery} />
    </div>
  )
};

const Queries = () => {
  return (
    <div className="Queries">
      
      {/* Use the Tabs component and provide different tab content */}
      <Tabs
        tab1Content={<FirstTabContent />}
        tab2Content={<SecondTabContent />}
      />
    </div>
  );
};

export default Queries;
