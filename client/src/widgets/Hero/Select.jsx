import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SelectInputs } from "../../configs/utils";

import {
  clearCourses,
  clearSemesters,
  setBranches,
  setCourses,
  setSemesters,
} from "../../functions/filters";

import Loader from "../Loader/Loader";
import axios from "axios";
import SelectInput from "./SelectInput";
import { toast } from "react-toastify";
import { styles } from "../../configs/utils";

const Select = () => {
  const { branch, semester, course } = useSelector((store) => store.choices);
  const { branches, semesters, courses } = useSelector(
    (store) => store.filters
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const InputFilters = [branches, semesters, courses];
  const FilterValues = [branch, semester, course];

  //backend
  const serverUrl = import.meta.env.VITE_BACKEND_URL;

  // ===========================GET ALL THE BRANCHES===================================
  useEffect(() => {
    setLoading(true);
    const getBranches = async () => {
      try {
        const res = await axios.get(`${serverUrl}/get-branches/`);
        dispatch(setBranches(res.data));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getBranches();
  }, [serverUrl]);

  //========================== GET ALL THE SEMESTERS==========================
  useEffect(() => {
    setLoading(true);
    const getSemesters = async () => {
      try {
        const res = await axios.get(
          `${serverUrl}/get-semesters/?branch=${branch}`
        );

        dispatch(setSemesters(res.data));
        setLoading(false);
      } catch (error) {
        dispatch(clearSemesters());
        console.log(error);
        setLoading(false);
      }
    };
    if (branch) getSemesters();
    else {
      setLoading(false);
      dispatch(clearSemesters());
    }
  }, [branch]);

  // =========================GET ALL THE COURSES============================
  useEffect(() => {
    setLoading(true);
    const getCourses = async () => {
      try {
        const res = await axios.get(
          `${serverUrl}/get-courses/?branch=${branch}&sem=${semester}`
        );
        if (res.data.length === 0) {
          toast.warn(
            "No courses currently available for these fields",
            styles.toast
          );
        }
        dispatch(setCourses(res.data));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    if (branch && semester) getCourses();
    else {
      setLoading(false);
      dispatch(clearCourses());
    }
  }, [branch, semester]);

  return (
    <>
      <div className="select-container text-sm flex flex-col items-center max-w-[650px] justify-between w-[100%] md:my-12 my-[2rem] md:flex-row">
        {SelectInputs.map((i, index) => (
          <SelectInput
            {...i}
            InputFilters={InputFilters[index]}
            FilterValues={FilterValues[index]}
            key={i.name}
          />
        ))}
      </div>
      <Loader loading={loading} color={"#4C1D95"} />
    </>
  );
};

export default Select;
