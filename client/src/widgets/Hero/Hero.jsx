import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// components
import Loader from "../Loader/Loader";
import path1 from "../../assets/path1.png";
import path2 from "../../assets/path2.png";
import Select from "./Select";
import { styles } from "../../configs/utils";

const Hero = () => {
  const { branch, semester, course } = useSelector((store) => store.choices);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const GetAllCourses = () => {
    setLoading(true);
    if (branch && semester && course) {
      const EncodedBranch = encodeURIComponent(branch);
      const EncodedSem = encodeURIComponent(semester);
      const EncodedCourse = encodeURIComponent(course);
      setTimeout(() => {
        navigate(
          `/categories?branch=${EncodedBranch}&sem=${EncodedSem}&course=${EncodedCourse}`
        );
        setLoading(false);
      }, 2000);
    } else {
      toast.error(
        "Invalid filters! Please make sure that you have selected all the fields",
        styles.toast
      );
      setLoading(false);
    }
  };

  return (
    <>
      <div className="homepage-hero w-[90vw] md:w-[70vw] md:mt-[4rem] flex flex-col items-center text-center text-white mx-auto z-10">
        <h1 className="text-3xl text-violet-900 mt-4 md:mt-0 md:text-4xl font-semibold">
          {`NOTES.     BOOKS.     PTS.`}
        </h1>
        <p className=" text-md md:text-2xl mt-2 md:mt-6 text-black">
          One stop solution for all study material for all the fields in SPPU :)
        </p>
        <Select />
        <button
          className="search mb-3 w-[100%] max-w-[40rem]"
          onClick={GetAllCourses}
        >
          Search for material
        </button>
        <p className="text-black">OR</p>
        <NavLink to="/upload-files" style={{ width: "100%" }}>
          <div className="upload mt-3 w-[100%] max-w-[40rem] mx-auto">
            Contribute material
          </div>
        </NavLink>
        <Loader loading={loading} color="#4C1D95" />
      </div>
    </>
  );
};

export default Hero;
