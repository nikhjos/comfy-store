import React from "react";
import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  return <div className="font-bold text-4xl ">There was an Error ...</div>;
};

export default SinglePageError;
