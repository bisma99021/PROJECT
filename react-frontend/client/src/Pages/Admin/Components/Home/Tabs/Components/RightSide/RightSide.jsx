// RightSide.jsx
import React from "react";
import "./RightSide.css";
import Updates from "../Updates/Updates";
import CustomerReview from "../CustomerReview/CustomerReview";

const RightSide = ({ updatesData }) => {
  return (
    <div className="RightSide">
      <div style={{ marginBottom: "2rem" }}>
        <h3>Updates</h3>
        <br />
        <Updates data={updatesData} />
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
