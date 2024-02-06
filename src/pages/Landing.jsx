import React from "react";
import { FeatureProduct, Hero } from "../component";
import { customFetch } from "../utils";

const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeatureProduct />
    </>
  );
};

export default Landing;
