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
      <div className="homepage-hero w-[90vw] md:w-[70vw] md:mt-[4rem] flex flex-col items-center text-center text-white mx-auto z-10">
        <img className="path1 md:block" src={path1}></img>
        <img className="path2 md:block" src={path2}></img>
        <h1 className="text-4xl text-yellow-300 mt-4 md:mt-0 font-normal md:font-semibold">
          {`NOTES.     BOOKS.     PTS.`}
        </h1>
        <p className=" text-md md:text-2xl mt-2 md:mt-6 text-grey-200">
          One stop solution for all study material for all the fields in SPPU :)
        </p>
        <h3 className="mt-8">
          We're currently shifting the database. To test the application use
          following filters :
          <br />
          <span className="text-yellow-300">
            "Computer - Sem 5 - Computer Network"
          </span>
        </h3>
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
