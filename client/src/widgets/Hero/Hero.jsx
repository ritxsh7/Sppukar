import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// components
import path1 from "../../assets/path1.png";
import path2 from "../../assets/path2.png";
import Select from "./Select";

const Hero = () => {
  // states for filters
  const [b, setB] = useState(null);
  const [s, setS] = useState(b === "First Year" ? "Sem 1" : "Sem 3");
  const [c, setC] = useState(null);

  return (
    <>
      <img src={path1} className="path1"></img>
      <img src={path2} className="path2"></img>
      <div className="homepage--hero md:w-[60vw] md:mt-[6rem] flex flex-col items-center text-center text-white m-auto">
        <h1 className="text-5xl text-yellow-300 font-semibold">
          {`NOTES.     BOOKS.     PTS.`}
        </h1>
        <p className="text-2xl my-6">
          One stop solution for all study material for all the fields in SPPU :)
        </p>
        <Select b={b} s={s} c={c} setB={setB} setS={setS} setC={setC} />
        <NavLink
          to={`/categories/?branch=${b}&semester=${s}&course=${c}`}
          style={{ width: "71%" }}
        >
          <button className="search mb-3 w-[100%]">Search for material</button>
        </NavLink>
        <p>OR</p>

        <NavLink to="/upload-files" style={{ width: "71%" }}>
          <div className="upload mt-3 w-[100%]">Contribute material</div>
        </NavLink>
      </div>
    </>
  );
};

export default Hero;
