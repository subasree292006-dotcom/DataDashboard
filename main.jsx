import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./component/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
 
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);