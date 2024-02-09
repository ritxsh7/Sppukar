import React from "react";
import { ToastContainer } from "react-toastify";

const Toaster = () => {
  return (
    <ToastContainer
      hideProgressBar={false}
      newestOnTop={true}
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      position="top-center"
      theme="dark"
    />
  );
};

export default Toaster;
