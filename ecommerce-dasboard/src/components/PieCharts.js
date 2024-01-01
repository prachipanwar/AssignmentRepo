import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { PIE_CHART_DATA } from "../utils/common";

const COLORS = ["#14b8a6", "#6366f1", "#f59e0b", "#f43f5e"];

export default function PieCharts() {
  const [chartCenterX, setChartCenterX] = useState(150);

  useEffect(() => {
    const handleResize = () => {
      let newCenterX = 150;
      let windowWidth = window.innerWidth
      if (windowWidth < 600) {
        newCenterX = 200;
      } 
      else if( 600 < windowWidth && windowWidth < 1080){
        newCenterX = 450;
      }
      setChartCenterX(newCenterX);
    };

    handleResize(); // Initial setup

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: 500, margin: "auto" }}>
      <ResponsiveContainer>
        <PieChart>
          <text
            x="50%"
            y="10%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Sale Status
          </text>
          <Pie
            data={PIE_CHART_DATA}
            cx={chartCenterX}
            cy={250}
            innerRadius={100}
            outerRadius={130}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
          >
            {PIE_CHART_DATA.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend wrapperStyle={{ bottom: 40 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
