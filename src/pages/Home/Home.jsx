import React from "react";
import Brands from "../../components/Brands/Brands";
import Category from "../../components/Category/Category";
import DiscountProducts from "../../components/DiscountProducts/DiscountProducts";
import Furniture from "../../components/Furniture/Furniture";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <main>
      <Hero />
      <Category />
      <Products />
      <DiscountProducts />
      <Furniture />
      {/* <Brands /> */}
      <DiscountProducts />
    </main>
  );
};

export default Home;
