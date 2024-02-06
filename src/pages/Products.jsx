import React from "react";
import { Filters, Pagination, ProductContainer } from "../component";
import { customFetch } from "../utils";

const url = "/products";

export const loader = async ({ request }) => {
  // const params = new URL(request.url).searchParams;
  // const search = params.get("search");

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch(url, { params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};
const Products = () => {
  return (
    <>
      <Filters />
      <ProductContainer />
      <Pagination />
    </>
  );
};

export default Products;
