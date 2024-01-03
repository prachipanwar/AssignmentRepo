import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { LINE_GRAPH_DATA } from "../utils/common";
export default function LineCharts() {
  const [chartWidth, setChartWidth] = useState({});

  useEffect(() => {
    const handleResize = () => {
      let newWidth;
      let windowWidth = window.innerWidth
      if ( windowWidth <= 600) {
        newWidth = 350;
      } else {
        newWidth = 750;
      }

      setChartWidth(newWidth);
    };

    handleResize(); // Initial setup

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      <LineChart width={chartWidth} height={350} margin={{top:30}} data={LINE_GRAPH_DATA}>
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Orders"
          stroke="#6366f1"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Sales" stroke="#f59e0b" />
      </LineChart>
    </div>
  );
}
