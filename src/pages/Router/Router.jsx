import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Home from "../Home/Home";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
