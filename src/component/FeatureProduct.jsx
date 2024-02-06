import React from "react";
import ProductsGrid from "./ProductsGrid";
import SectionTitleText from "./SectionTitleText";

const FeatureProduct = () => {
  return (
    <div className=" pt-24 ">
      <SectionTitleText text="Feature Product" />
      <ProductsGrid />
    </div>
  );
};

export default FeatureProduct;
