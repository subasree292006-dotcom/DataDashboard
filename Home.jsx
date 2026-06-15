import Back from "../assets/side.mp4";
import { useState, useContext } from "react";
import Papa from "papaparse";
import { DataContext } from "./DataContext";
import { useNavigate } from "react-router-dom";

function Home({ darkMode }) {
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();

  const { setRows, setHeaders } =
    useContext(DataContext);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setRows(result.data);
        setHeaders(result.meta.fields);
        navigate("/dashboard");
      },
    });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-12 lg:px-16 pt-20 min-h-screen pt-24">
      <div className="w-full lg:w-1/2 text-center lg:text-left">

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Transform CSV
        </h1>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2">
          Into AI-Powered
          <br />
          Insights
        </h1>
         <p className="text-white text-base sm:text-lg lg:text-xl mt-8 leading-relaxed">
          Upload datasets, ask questions naturally,
          and generate smart visual analytics
          instantly. No coding. No SQL.
          Just intelligence.
        </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
          
          <label
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="
              bg-[#2f64d6]
              hover:bg-[#081b42]
              text-white
              px-6
              py-4
              border
              border-[#89adfc]
              transition-all
              duration-300
              cursor-pointer
              text-sm
              sm:text-lg
              rounded-lg
              hover:shadow-[0_0_15px_#d6d5e0]
              hover:scale-105
              text-center">
            📁 Upload CSV
            <input
              type="file"
              accept=".csv"
              onChange={handleUpload}
              className="hidden"
            />
          </label>
      
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() =>
              navigate("/dashboard")
            }
            className="
              bg-[#2f64d6]
              hover:bg-[#081b42]
              text-white
              px-6
              py-4
              border
              border-[#89adfc]
              transition-all
              duration-300
              cursor-pointer
              text-sm
              sm:text-lg
              rounded-lg
              hover:shadow-[0_0_15px_#d6d5e0]
              hover:scale-105">
            Explore Dashboard
          </button>
        </div>
      </div>
     
      <div className="w-full lg:w-1/2 flex justify-center">
      <video
          autoPlay
          loop
          muted
          playsInline
          className="
            w-[700px]
            max-w-[800px]
            h-[700px]
            rounded-xl
            shadow-lg">
          <source
            src={Back}
            type="video/mp4"/>
        </video>
        </div>
    </div>
  );
}
export default Home;