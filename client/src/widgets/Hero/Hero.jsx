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
      <img className="path1" src={path1}></img>
      <img className="path2" src={path2}></img>
      <div className="homepage-hero w-[90vw] md:w-[60vw] flex flex-col items-center text-center text-white mx-auto">
        <h1 className="text-4xl text-yellow-300 mt-4 md:mt-0 font-semibold">
          {`NOTES.     BOOKS.     PTS.`}
        </h1>
        <p className=" text-xl md:text-2xl mt-6 text-white">
          One stop solution for all study material for all the fields in SPPU :)
        </p>
        <Select b={b} s={s} c={c} setB={setB} setS={setS} setC={setC} />
        <NavLink
          to={`/categories/?branch=${b}&semester=${s}&course=${c}`}
          style={{ width: "95vw" }}
        >
          <button className="search mb-3 w-[85%] max-w-[36rem]">
            Search for material
          </button>
        </NavLink>
        <p>OR</p>

        <NavLink to="/upload-files" style={{ width: "95vw" }}>
          <div className="upload mt-3 w-[85%] max-w-[36rem] mx-auto">
            Contribute material
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Hero;
