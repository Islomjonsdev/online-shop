import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Cart from "../Cart/Cart";
import Compare from "../Compare/Compare";
import Home from "../Home/Home";
import Like from "../Like/Like";
import Login from "../Login/Login";

const Router = () => {
  const user = true;
  if (!user) {
    return <Login />;
  }
  return (
    <div>
      <Routes>
        {user ? (
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/like" element={<Like />} />
            <Route path="/compare" element={<Compare />} />
          </Route>
        ) : null}
      </Routes>
    </div>
  );
};

export default Router;
