import React, { useState } from "react";
import Papa from "papaparse";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from "recharts";

function Charts() {
 const {
  rows,
  setRows,
  headers,
  setHeaders,
} = useContext(DataContext);
  const [chartType, setChartType] = useState("line");
  

  const handleUpload = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: (result) => {
        setRows(result.data);
        setHeaders(result.meta.fields);
      },
    });
  };

  const numericColumns =
    headers.filter((header) =>
      rows.some(
        (row) =>
          row[header] !== "" &&
          !isNaN(Number(row[header]))
      )
    );

  const textColumns =
    headers.find((header) =>
      !numericColumns.includes(header)
  )||headers[0];

  const chartData = rows.slice(0, 20).map((row,index) => {
  const item = {
    name: row[textColumns] || 'Row ${index+1}',
  };
  
  numericColumns.forEach((col) => {
    item[col] = Number(row[col]) || 0;
  });

  return item;
});
  const pieData = chartData.map((item) => ({
  name: item.name,
  value: item[numericColumns[0]] || 0,
}));

  const COLORS = [
    "#4f46e5",
    "#06b6d4",
    "#10b981",
    "#f59e0b",
    "#ef4444",
  ];

  return (
    <div
    className="bg-[#020617] text-white p-[40px] pt-24">
      
      <center>
        <h1 className="text-[50px] mb-[10px]">
          Interactive Charts
        </h1>

        <p className="text-[#94a3b8] text-[18px]">
          Explore your data through beautiful charts
        </p>

        {/* Buttons */}
        <div className="flex gap-[15px] justify-center mt-[30px]">
          <button
            onClick={() => setChartType("line")}
         className="bg-blue-600 text-white px-5 py-3 rounded-lg cursor-pointer">📈 Line
          </button>

          <button
            onClick={() => setChartType("bar")}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg cursor-pointer"
          >
            📊 Bar
          </button>

          <button
            onClick={() => setChartType("pie")}
           className="bg-blue-600 text-white px-5 py-3 rounded-lg cursor-pointer"
          >
            🥧 Pie
          </button>
       
        </div>
           </center>

      {/* Chart Box */}
      <div className="mt-[50px] bg-[#081225] p-[40px] rounded-[20px] border border-[1px solid #1e3a8a] min-h-[450px]">
        {chartData.length === 0 ? (
          <center className="mt-[120px]" >
            <h1 className="text-[70px]">📉</h1>

            <p className="text-[#64748b]">
              Upload CSV with numeric data
            </p>
          </center>
        ) : (
          

          <center>
          {chartType === "line" && (
  <LineChart
    width={900}
    height={400}
    data={chartData}
  >
    <CartesianGrid stroke="#334155" />

    <XAxis
      dataKey="name"
      stroke="white"
    />

    <YAxis stroke="white" />

    <Tooltip />

    <Legend />

    {numericColumns.map((col, index) => (
      <Line
        key={col}
        type="monotone"
        dataKey={col}
        stroke={
          COLORS[index % COLORS.length]
        }
        strokeWidth={3}
      />
    ))}
  </LineChart>
)}
{chartType === "bar" && (
  <BarChart
    width={900}
    height={400}
    data={chartData}
  >
    <CartesianGrid stroke="#334155" />

    <XAxis
      dataKey="name"
      stroke="white"
    />

    <YAxis stroke="white" />

    <Tooltip />

    <Legend />

    {numericColumns.map((col, index) => (
      <Bar
        key={col}
        dataKey={col}
        fill={
          COLORS[index % COLORS.length]
        }
      />
    ))}
  </BarChart>
)}
{chartType === "pie" && (
  <PieChart width={900} height={450}>
    <Pie
      data={pieData}
      cx="50%"
      cy="50%"
      outerRadius={140}
      dataKey="value"
      nameKey="name"
      label={({ name, percent }) =>
        `${name} ${(percent * 100).toFixed(0)}%`
      }
    >
      {pieData.map((entry, index) => (
        <Cell
          key={index}
          fill={COLORS[index % COLORS.length]}
        />
      ))}
    </Pie>

    <Tooltip />

    <Legend
      verticalAlign="bottom"
      height={36}
    />
  </PieChart>
)}
</center>
        )}
      </div>
    </div>
  );
}

const button = "bg-[#111827] text-white border border-[1px soild #334155] p-[12px 20px] rounded-[10px] cursor-pointer text-[16px]";

export default Charts;