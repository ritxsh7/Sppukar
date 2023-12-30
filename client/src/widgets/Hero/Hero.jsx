import React from "react";

// components
import path1 from "../../assets/path1.png";
import path2 from "../../assets/path2.png";
import Select from "./Select";

const Hero = () => {
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
        <Select />
        <button className="search w-[71%]">Search for material</button>
      </div>
    </>
  );
};

export default Hero;
