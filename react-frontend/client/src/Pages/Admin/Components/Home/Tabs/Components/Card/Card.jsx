import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <>
          <div className="Backdrop" onClick={() => setExpanded(false)}></div>
          <ExpandedCard cardData={props} setExpanded={() => setExpanded(false)} />
        </>
      ) : (
        <CompactCard cardData={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ cardData, setExpanded }) {
  const Png = cardData.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: cardData.color.backGround,
        boxShadow: cardData.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={cardData.barValue}
          text={`${cardData.barValue}%`}
        />
        <span>{cardData.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${cardData.barValue}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ cardData, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: cardData.color.backGround,
        boxShadow: cardData.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{cardData.title}</span>
      <div className="chartContainer">
        <Chart options={data.options} series={cardData.series} type="area" />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;