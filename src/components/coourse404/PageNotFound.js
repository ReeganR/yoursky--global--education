import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page__not-found">
      <h3>Sorry</h3>
      <p>The page cannot found...</p>
      <Link to="/">Back to the home page...</Link>
    </div>
  );
};

export default PageNotFound;
