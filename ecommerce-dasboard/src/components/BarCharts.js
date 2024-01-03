import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, Tooltip, Legend } from "recharts";

import { BARGRAPH_DATA } from "../utils/common";

export default function BarCharts() {
  const [barGraphWidth, setBarGraphWidth] = useState(3800);

  useEffect(() => {
    const handleResize = () => {
      let newbarGraphWidth = 380;
      let windowWidth = window.innerWidth;
      if (600 < windowWidth) {
        newbarGraphWidth = 800;
      }
      setBarGraphWidth(newbarGraphWidth);
    };

    handleResize(); // Initial setup

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <BarChart
        width={barGraphWidth}
        height={300}
        data={BARGRAPH_DATA}
        margin={{
          top: 20,
          right: 50,
          left: 50,
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="clothing" stackId="a" fill="#6366f1" />
        <Bar dataKey="cosmetics" stackId="a" fill="#14b8a6" />
        <Bar dataKey="appliances" stackId="a" fill="#f59e0b" />
      </BarChart>
    </div>
  );
}
