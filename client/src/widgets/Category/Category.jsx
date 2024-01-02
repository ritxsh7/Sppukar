import React from "react";
import "./Category.css";

//data
import { icons } from "../../configs/filters";

const Category = ({ name, index }) => {
  const url = icons[index];
  return (
    <div className="study-card flex flex-col items-center">
      <img
        src={url}
        alt="card-icon"
        style={{ width: "7rem", marginTop: "3rem" }}
      ></img>
      <h2 className="subject">{name}</h2>
    </div>
  );
};
export default Category;
