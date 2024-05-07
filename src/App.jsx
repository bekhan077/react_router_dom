import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import Overview from "./components/Overview";
import Tickets from "./components/Tickets";

const App = () => {
  return (
    <div className="container mx-auto flex">
      <Header />
      <div className=" w-full bg-[#F7F8FC]">
        <Routes>
          <Route path="/" element={<Overview/>} />
          <Route path="/ticket" element={<Tickets/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
