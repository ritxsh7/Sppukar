import React from "react";
import { useDispatch } from "react-redux";

const SelectInput = ({ name, onchange, InputFilters, FilterValues }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col mt-2 text-center md:text-left w-[100%] md:w-[30%]">
      <label
        htmlFor={name}
        className="text-[0.9rem] text-violet-900 md:text-md"
      >
        Select a {name} :
      </label>
      <select
        id={name}
        value={FilterValues}
        className="custom-select w-[100%]"
        onChange={(e) => dispatch(onchange(e.target.value))}
      >
        <option value="">Select a {name}</option>
        {InputFilters.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
