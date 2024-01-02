import React from "react";
import "./FileCard.css"; // Add appropriate styling

//data
import { images } from "../../configs/filters";

const FileCard = ({ url, filename, createdAt }) => {
  const filetype = filename.split(".")[1];

  let date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <a href={url} target="blank" className="file-card">
      <div className="file-details flex flex-col items-left">
        <h3 className="file-name my-auto text-left">{filename}</h3>
        <p>Updated on :{formattedDate}</p>
      </div>
      <div className="file-icon">
        <img src={images[filetype]} alt="File Icon" />
      </div>
    </a>
  );
};

export default FileCard;
