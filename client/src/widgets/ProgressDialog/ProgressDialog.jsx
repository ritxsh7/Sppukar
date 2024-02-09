import React from "react";

//styles
import "./ProgressDialog.css";

const ProgressDialog = ({ progress }) => {
  const style = {
    background: `conic-gradient( #1D020F ${progress}%, white ${progress}%)`,
  };

  const circle = {
    borderRadius: "50%",
  };

  return (
    <div className="progress-dialog flex items-center justify-center">
      <div
        style={style}
        className="progress-inner flex flex-col items-center justify-center gap-2"
      >
        <div
          className="bg-white w-[85%] h-[85%] flex flex-col items-center justify-center"
          style={circle}
        >
          <h4>Uploading ...</h4>
          <p className="">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressDialog;
