import React from "react";
import { Paper } from "@material-ui/core";
import { PieChart, Pie } from "recharts";

const data = [
  {
    name: "All",
    value: 5
  },
  {
    name: "Winter",
    value: 2
  },
  {
    name: "Summer",
    value: 3
  }
];

function PieChartComponent() {
  return (
    <Paper>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey={"name"}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
        />
      </PieChart>
    </Paper>
  );
}

export { PieChartComponent };
