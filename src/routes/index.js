import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormFilling from "../pages/Form";
import List from "../pages/List";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormFilling />} />
        <Route path="/displaydata" element={<List />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
