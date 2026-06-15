import { useContext,useState } from "react";
import { DataContext } from "./DataContext";

function Data() {
  const { rows, headers } = useContext(DataContext);
const [search, setSearch] = useState("");
const filteredRows = rows.filter((row) =>
  Object.values(row).some((value) =>
    String(value).toLowerCase().includes(search.toLowerCase())
  )
);
  return (
    <div className="pt-24">
      <center>
<h3 className="text-[#89adfc] text-[20px] border border-[white] rounded-[17px] w-[200px] border-[2px] "> Data Explorer</h3>
<br/>
<h1 className="text-[25px] text-white font-bold"> Raw Dataset Viewer</h1>

<p className="text-white text-[15px]"> Browse, search and paginate through your uploaded data.</p>
   </center>
    <div className="p-8">
        <div className="mb-6">
  <input
    type="text"
    placeholder="🔍 Search data..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full p-3 bg-slate-800 text-white rounded-lg border border-slate-600"
  />
</div>
      <div className="overflow-x-auto rounded-xl border border-slate-700">
        <table className="w-full text-white">
          <thead className="bg-slate-800">
            <tr>
              <th className="p-4 text-left">S.No</th>

              {headers.map((header, index) => (
                <th key={index} className="p-4 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredRows.map((row, index) => (
              <tr
                key={index}
                className="border-t border-slate-700 hover:bg-slate-900"
              >
                <td className="p-4">{index + 1}</td>

                {headers.map((header, i) => (
                  <td key={i} className="p-4">
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-gray-400">
  {filteredRows.length} rows • {headers.length} columns
</div>
    </div>
     </div>
  );
}

export default Data;