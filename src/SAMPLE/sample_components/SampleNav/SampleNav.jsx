import React from "react";
import { Link } from "react-router-dom";

import "./SampleNav.scss";

const SampleNav = () => {
  return (
    <div className="nav-container">
      {/* <span>hola mundo</span> */}
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/app/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/topics">
            Topics
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SampleNav;
