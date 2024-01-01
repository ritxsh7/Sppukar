import React from "react";

//styles
import "./ProgressDialog.css";

const ProgressDialog = ({ progress }) => {
  const style = {
    background: `conic-gradient(orange ${progress}%, #1E1B4B ${progress}%)`,
  };

  return (
    <div
      className="progress-dialog flex items-center justify-center"
      style={style}
    >
      <div className="progress-inner text-white flex flex-col items-center justify-center gap-2">
        <h4>Uploading ...</h4>
        <p className="text-orange-300">{progress}%</p>
      </div>
    </div>
  );
};

export default ProgressDialog;
