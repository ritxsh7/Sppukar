import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import axios from "axios";
import { categories } from "../configs/filters";

//components
import Category from "../widgets/Category/Category";

const CoursePage = () => {
  const [paras] = useSearchParams();
  const branch = paras.get("branch");
  const semester = paras.get("semester");
  const course = paras.get("course");

  return (
    <div className="course-page text-gray-700 py-4 md:px-[5rem] min-h-[87vh] bg-violet-200">
      <h1 className="text-lg md:text-3xl text-center border-b-black">{`${branch} > ${semester} > ${course}`}</h1>
      <div className="category-container w-[95vw] max-w-[58rem] mt-8 mx-auto">
        {categories.map((c, i) => (
          <NavLink
            key={c}
            to={`/material/?branch=${branch}&semester=${semester}&course=${course}&category=${c}`}
          >
            <Category name={c} index={i} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
