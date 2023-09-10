import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home/home";
import InternalTools from "pages/internal/internalTools";
import Photoshop from "pages/photoshop/photoshop";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Home />} />
        <Route path="internal-tools" element={<InternalTools />} />
        <Route path="photoshop" element={<Photoshop />} />
      </Route>
    </Routes>
  );
}

export default App;
