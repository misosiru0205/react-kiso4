import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.scss";
import Home from "./Home";

const App: React.FC = () => {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/react-kiso4/" element={<Home />} />
        </Routes>
      </BrowserRouter>

  );
};

export default App;
