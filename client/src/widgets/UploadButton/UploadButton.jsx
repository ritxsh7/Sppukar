import React from "react";

//styles
import "./UploadButton.css";

const UploadButton = ({ currentFile, setCurrentFile }) => {
  return (
    <div className="file-upload">
      <label className="upload-here text-black text-sm my-auto z-10">
        <p className=" my-4 mx-2 w-[100%]">
          {currentFile ? currentFile.name : "No file selected"}
        </p>
      </label>
      <input
        type="file"
        className="file-input"
        onChange={(e) => {
          setCurrentFile(e.target.files[0]);
          console.log(currentFile);
        }}
      />
    </div>
  );
};

export default UploadButton;
