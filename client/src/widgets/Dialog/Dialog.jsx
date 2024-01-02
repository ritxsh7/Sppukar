import React from "react";
import "./Dialog.css";

const Dialog = ({ dialogOpen, setDialogOpen, img, msg }) => {
  return (
    dialogOpen && (
      <div className="upload-success-dialog text-black">
        <div className="dialog-content flex flex-col items-center md:w-[25vw]">
          {img && <img src={img} className="w-[4rem]"></img>}
          <p>{msg}</p>
          <button className="close-dialog" onClick={() => setDialogOpen(false)}>
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default Dialog;
