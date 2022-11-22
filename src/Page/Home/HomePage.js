import React, { useState, useEffect } from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "./../../Components/Home/HomeCategory";
import CardProductsContainer from "./../../Components/Products/CardProductsContainer";
import DiscountSection from "./../../Components/Home/DiscountSection";
import BrandFeatured from "./../../Components/Brand/BrandFeatured";
import ViewHomeProductsHook from "../../hook/products/view-home-products-hook";

const HomePage = () => {
  const [items, loading] = ViewHomeProductsHook();

  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        title="الاكثر مبيعا"
        btntitle="المزيد"
        pathText="/products"
        products={items}
      />
      <DiscountSection />
      <CardProductsContainer
        title="احدث الازياء"
        btntitle="المزيد"
        pathText="/products"
        products={items}
      />
      <BrandFeatured
        title="اشهر الماركات"
        btntitle="المزيد"
        pathText="/products"
      />
    </div>
  );
};

export default HomePage;
