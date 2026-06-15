import React, { useState } from "react";
import Papa from "papaparse";
import Charts from "./Charts";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import AIChat from "./AIChat";

function Dashboard() {
  
const { rows, headers, setRows, setHeaders } =
  useContext(DataContext);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: (result) => {
        console.log(result);

        setRows(result.data);
        setHeaders(result.meta.fields);
      },
    });
  };
  // Find numeric column
const numericColumn =
  headers.find((header) =>
    rows.some(
      (row) =>
        row[header] !== "" &&
        !isNaN(Number(row[header]))
    )
  ) || "";

// Find text column
const textColumn =
  headers.find((header) =>
    rows.some(
      (row) =>
        row[header] &&
        isNaN(Number(row[header]))
    )
  ) || "";


  return (
    <div className="p-[20px] pt-24 flex flex-col ">
      <center>
        <button className="bg-transparent rounded-[15px] w-[300px] h[35px] text-[20px] border border-white text-[#859ed4] font-bold">
          DASHBOARD OVERVIEW
        </button>

        <h1 className="text-white text-[40px]" >
          Your Data Command Center
        </h1>

        <p className="text-[20px] text-white">
          Real-time statistics and insights from your uploaded dataset.
        </p>
      </center>

    //upload
      <center>
        <label className="border border-[2px dashed #5876c4] rounded-[10px] bg-[#020f2c] p-[40px] w-[250px] text-white flex justify-center
        mt-[30px] cursor-pointer items-center ">
          📁 Upload CSV
          <input
            type="file"
            accept=".csv,.xlsx,.xls,.pdf,.docx,.txt"
            onChange={handleUpload}
           className="hidden"
          />
        </label>
      </center>

    //cards
      <div className="flex gap-[20px] justify-center mt-[30px] flex-wrap">
       <div className="bg-[ #0b1023] border border-[#1E2A5A] rounded-xl p-6 text-white shadow-md w-[200px] h-[170px] text-[25px]">
          <h3>Total Rows</h3>
          <h1>{rows.length}</h1>
        </div>

       <div className="bg-[ #0b1023] border border-[#1E2A5A] rounded-xl p-6 text-white shadow-md w-[200px] h-[170px] text-[25px]">
          <h3>Total Columns</h3>
          <h1>{headers.length}</h1>
        </div>

        <div className="bg-[ #0b1023] border border-[#1E2A5A] rounded-xl p-6 text-white shadow-md w-[200px] h-[170px] text-[25px]">
          <h3>Dataset Size</h3>

          <h1>
            {(JSON.stringify(rows || []).length / 1024).toFixed(2)} KB
          </h1>
        </div>

       <div className="bg-[ #0b1023] border border-[#1E2A5A] rounded-xl p-6 text-white shadow-md w-[200px] h-[170px] text-[25px]">
          <h3>AI Insights</h3>

          <h1>{rows.length > 0 ? "Ready" : "No Data"}</h1>
        </div>
      </div>

   // Columns
      <div className="mt-[30px]  justify-center flex gap-[20px]">
         {headers.map((item, index) => (
          <span
            key={index} 
            className="bg-[#0f2550] p-[10px] rounded-[5px] text-white" > 
           <h3 className="text-[20px]"> {item}</h3>
          </span>
        ))}
        <AIChat rows={rows}/>
      </div>

   
  </div>
)};


const card = "bg-[#a8aeb8] p-5 rounded-[10px] w-[200px] text-center";

export default Dashboard;