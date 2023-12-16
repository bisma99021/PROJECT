import React, { useState } from "react";
import './Tabs.css';

const Tabs = ({ tab1Content, tab2Content }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          ChatBot 1
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          ChatBot 2
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? tab1Content : tab2Content}
      </div>
    </div>
  );
};

export default Tabs;
