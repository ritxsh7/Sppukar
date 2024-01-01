import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBranch, setCourse } from "../../functions/filters";
import Loader from "../Loader/Loader";
import axios from "axios";

const Select = ({ b, s, c, setB, setS, setC }) => {
  //state and stores
  const filter = useSelector((store) => store.filters);
  const dispatch = useDispatch();
  const { branch, FE, SE, course } = filter;
  // console.log(filter);
  // console.log(b, s, c);

  const semester = b === "First Year" ? FE : SE;

  const [loading, setLoading] = useState(false);

  //backend
  const serverUrl = import.meta.env.VITE_BACKEND_URL;

  // get all the branches
  useEffect(() => {
    setS(b === "First Year" ? "Sem 1" : "Sem 3");
    setLoading(true);
    const getBranches = async () => {
      const res = await axios.get(`${serverUrl}/get-branches`);
      dispatch(setBranch(res.data));
      setB(res?.data[0]);
      console.log(res.data);
      setLoading(false);
    };
    getBranches();
  }, []);

  useEffect(() => {
    setLoading(true);
    const getCourses = async () => {
      const br = encodeURIComponent(b);
      const sem = encodeURIComponent(s);
      const res = await axios.get(
        `${serverUrl}/get-courses/?name=${br}&Sem=${sem}`
      );
      console.log(res?.data);
      setC(res?.data[0]);
      dispatch(setCourse(res?.data));
      setLoading(false);
    };
    if (b) getCourses();
  }, [b, s]);

  return (
    <div className="select-container w-max md:flex">
      {/* ===================================SELECT BRANCH===================================== */}
      <div className="flex flex-col text-left mx-3 ">
        <label htmlFor={filter.name}>{`Select a branch : `}</label>
        <select
          id={filter.name}
          className="custom-select"
          onChange={(e) => {
            setB(e.target.value);
          }}
        >
          {branch?.length === 0 ? (
            <option>Please select a branch </option>
          ) : (
            branch?.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))
          )}
        </select>
      </div>

      {/* ===================================SELECT SEMESTER===================================== */}

      <div className="flex flex-col text-left mx-3 ">
        <label htmlFor={filter.name}>{`Select a semester :`}</label>
        <select
          id={filter.name}
          className="custom-select"
          onChange={(e) => {
            setS(e.target.value);
          }}
        >
          {semester?.length === 0 ? (
            <option>No branch selected </option>
          ) : (
            semester?.map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))
          )}
        </select>
      </div>

      {/* ===================================SELECT COURSE===================================== */}

      <div className="flex flex-col text-left mx-3 ">
        <label htmlFor={filter.name}>{`Select course :`}</label>
        <select
          id={filter.name}
          className="custom-select"
          onChange={(e) => {
            setC(e.target.value);
          }}
        >
          {course === "Select a course" || course?.length === 0 ? (
            <option>No data available</option>
          ) : (
            course?.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))
          )}
        </select>
      </div>
      <Loader loading={loading} />
    </div>
  );
};

export default Select;
