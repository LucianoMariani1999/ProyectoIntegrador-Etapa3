import React from "react";
import { Link } from "react-router-dom";


const Pagenotfound = () => {
  return (
    
     <div className="pnf">
        <h1 className="pnf-title">Error 404</h1>
        <h2 className="pnf-heading">Página no encontrada</h2>
        <Link to="/" className="pnf-btn">
          Back
        </Link>
      </div>
  );
};

export default Pagenotfound;
