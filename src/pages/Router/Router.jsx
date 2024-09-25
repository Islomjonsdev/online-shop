import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Cart from "../Cart/Cart";
import Compare from "../Compare/Compare";
import Home from "../Home/Home";
import Like from "../Like/Like";
import Login from "../Login/Login";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/like" element={<Like />} />
          <Route path="/compare" element={<Compare />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
