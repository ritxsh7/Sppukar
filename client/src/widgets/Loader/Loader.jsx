import RotateLoader from "react-spinners/RotateLoader";

import React from "react";

const Loader = ({ loading, color }) => {
  return (
    <div>
      <RotateLoader
        color={color}
        loading={loading}
        size={20}
        cssOverride={{
          position: "fixed",
          bottom: "33%",
          right: "50%",
          translate: "50% 0",
        }}
      />
    </div>
  );
};

export default Loader;
