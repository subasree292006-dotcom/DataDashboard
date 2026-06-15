import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Features from "./component/Features";
import Featurecard from "./component/Featurecard";
import Dashboard from "./component/Dashboard";
import Charts from "./component/Charts";
import Data from "./component/Data";
import AIChat from "./component/AIChat";
import DataAIAssistant from "./component/DataAIAssistant";
import Contactdata from "./component/Contactdata";
import Footer from "./component/Footer";
import { useState } from "react";
//import AIChatPage from "./component/AIChatPage";
import { Contact } from "lucide-react";

 
function HomePage() {
  return (
    <>
      {/* Home Section */}
      <section id="home">
        <Home />
      </section>

      {/* Features Section */}
      <section id="features">
        <Features />
        <Featurecard />
      </section>

      {/* Dashboard Section */}
      <section id="dashboard">
        <Dashboard />
      </section>
      <section id="charts"><Charts/></section>
      <section id="DataAIAssistant"><DataAIAssistant/></section>
      <section id="data"><Data/></section>
      <section id="footer"><Footer/></section>
      
    </>
  );
} 
 function Featurespage() {
  return (
    <div>
      <Features />
      <Featurecard />
      <section id="footer"><Footer/></section>
      {/* <section id="dashboard">
        <Dashboard />
      </section>
      <section id="charts"><Charts/></section>
      <section id="data"><Data/></section> */}
      
      </div>
  );
} 
function Dashboardpage(){
  return(
    <div>
      <Dashboard/>
      <section id="footer"><Footer/></section>
      {/* <section id="charts"><Charts/></section>
      <section id="data"><Data/></section> */}
    </div>
  )
}
function Chartspage(){
  return(
    <div>
      <Charts/>
      <section id="footer"><Footer/></section>
    </div>
  )
}

function AIChatPage() {
  const { rows } = useContext(DataContext);

  return (
    <>
      <div className="pt-24">
        <h1 className="text-3xl font-bold text-center mb-6">
          AI CSV Assistant
        </h1>

        <AIChat rows={rows} />
      </div>

      <Footer />
    </>
  );
}
function Datapage(){
  return(
    <div>
      <Data/>
      <section id="footer"><Footer/></section>
    </div>
  )
}
 
   function App() {
  return (
    
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#020e27",
          scrollBehavior: "smooth",
        }}
      >
        <div>
     
    </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<Featurespage/>}/>
          <Route path="/dashboard" element ={<Dashboardpage/>}/>
          <Route path="/charts" element={<Chartspage/>}/>
          <Route path="/aichat" element={<AIChatPage/>}/>
           <Route path="/ai-chat" element={<DataAIAssistant />} />
          <Route path="/data" element={<Datapage/>}/>
          <Route path="/getstart" element={<Dashboardpage/>}/>
          </Routes>
          </div>
    </BrowserRouter>
    
  );
}
export default App;