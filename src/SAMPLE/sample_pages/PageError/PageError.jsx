import React from "react";
import { Link } from "@material-ui/core";

const PageError = () => {
  return (
    <div className="page">
      <Link to="/home">Back to HomePage</Link>
      <p>Página no encontrada</p>
    </div>
  );
};
export { PageError };
