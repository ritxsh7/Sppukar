import React, { useState } from "react";
import "./ConverterForm.css";
import axios from "axios";
import Toaster from "../Toaster/Toaster";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import { styles } from "../../configs/utils";

const ConverterForm = () => {
  const SERVER_URL = import.meta.env.VITE_BACKEND_URL;
  const [cgpa, setCgpa] = useState(0);
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  const validateCGPA = (cgpaPara) => {
    if (cgpaPara <= 0 || cgpaPara > 10) return false;
    if (cgpaPara.toString().split(".")[1].length > 2) return false;
    return true;
  };

  const converterFunction = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!validateCGPA(cgpa)) {
        toast.error("Invalid CGPA", styles.toast);
        setLoading(false);
        return;
      }
      const results = await axios.get(
        `${SERVER_URL}/cgpa-to-percentage/${cgpa}`
      );
      console.log(results);
      toast.success("Converted to percentage successfully", styles.toast);
      setResult(results?.data?.data);
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data.message, styles.toast);
      setLoading(false);
    }
  };

  return (
    <div className="cgpa-converter">
      <div className="converter-heading w-[100%] px-8 py-3">
        <h2 className="text-2xl md:text-4xl">CGPA to Percentage converter</h2>
        <p className="my-2">(Based on SPPU 2019 Rulebook)</p>
      </div>
      <form onSubmit={converterFunction}>
        <div>
          <label htmlFor="cgpa">Enter your CGPA:</label>
          <input
            type="number"
            id="cgpa"
            step="0.01"
            placeholder="Enter CGPA e.g 8.75"
            onChange={(e) => setCgpa(e.target.value)}
            required
          />
        </div>
        <button type="submit">Get your percentage</button>
      </form>
      {result && (
        <div className="result">
          <div className="result-criteria">
            <p>CGPA : </p>
            <p> {result?.cgpa}</p>
          </div>
          <div className="result-criteria">
            <p>Percentage :</p>
            <p>{result?.percentage}%</p>
          </div>
          <div className="result-criteria">
            <p>Grade : </p>
            <p> {result?.grade}</p>
          </div>
          <div className="result-criteria">
            <p>Remark : </p>
            <p>{result?.remark}</p>
          </div>
        </div>
      )}
      <Loader loading={loading} color={"#7A3CEC"} />
    </div>
  );
};

export default ConverterForm;
