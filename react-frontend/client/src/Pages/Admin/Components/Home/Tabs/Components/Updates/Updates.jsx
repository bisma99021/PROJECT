import React from "react";
import "./Updates.css";

const Updates = ({ data }) => {
  return (
    <div className="Updates">
      {data.map((update, id) => {
        return (
          <div className="update" key={id}>
            <img src={update.img} alt="" />
            <div className="noti">
              <div style={{ marginBottom: "0rem", textAlign: "left" }}>
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                  {" "}
                  {update.name}
                </span>
                <span style={{ fontSize: "13px" }}> {update.noti}</span>
              </div>
              <span className="date-time">{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
