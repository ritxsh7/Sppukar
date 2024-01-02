import React from "react";
import "./NoData.css"; // Add appropriate styling
import noContent from "../../assets/no-content.png";
import { NavLink } from "react-router-dom";

const NoData = () => {
  return (
    <div className="no-material-exists">
      <img src={noContent} alt="No Material" />
      <p>No material currently exists for this course:(</p>
      <button
        className="px-4 py-2 mt-4 bg-purple-800 text-white"
        style={{ borderRadius: "0.3rem" }}
      >
        <NavLink to="/upload-files">Upload material</NavLink>
      </button>
    </div>
  );
};

export default NoData;
