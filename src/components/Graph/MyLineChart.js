import React from "react";
import "./CardGroup.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const CardGroup = (props) => {
  const { graphdata } = props;
  const { month, investment, sell, revenue } = graphdata;
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis />
    </LineChart>
  );
};

export default CardGroup;