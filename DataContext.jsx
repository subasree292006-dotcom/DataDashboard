import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);

  return (
    <DataContext.Provider
      value={{
        rows,
        setRows,
        headers,
        setHeaders,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}