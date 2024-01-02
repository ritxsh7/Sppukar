import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FileCard from "../widgets/FileCard/FileCard";
import axios from "axios";

//components
import Loader from "../widgets/Loader/Loader";
import NoData from "../widgets/NoData/NoData";

const MaterialPage = () => {
  const [paras] = useSearchParams();
  const branch = paras.get("branch");
  const semester = paras.get("semester");
  const course = paras.get("course");
  const category = paras.get("category");

  //states
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);

  const serverUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const getHistory = async () => {
      let history = await JSON.parse(localStorage.getItem("history"));
      const newHistory = { branch, semester, course };
      if (!history) {
        history = [];
      }
      history = [...history, newHistory];
      localStorage.setItem("history", JSON.stringify(history));
    };

    const getMaterial = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${serverUrl}/material/?branch=${encodeURIComponent(
            branch
          )}&semester=${encodeURIComponent(
            semester
          )}&course=${encodeURIComponent(course)}&category=${encodeURIComponent(
            category
          )}`
        );
        console.log(response.data);
        setFiles(response.data.files);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getHistory();
    getMaterial();
  }, [branch, semester, course]);

  return (
    <div className="material-page text-gray-700 py-4 px-[10rem] min-h-[87vh] bg-violet-200">
      <h1 className="text-3xl text-center">{`${branch} > ${semester} > ${course} > ${category}s`}</h1>

      {files?.length === 0 ? (
        <NoData />
      ) : (
        <div className="file-list md:w-[50vw] mx-auto my-8">
          {files?.map((file) => (
            <>
              <FileCard {...file} key={file._id} />
            </>
          ))}
        </div>
      )}

      <Loader loading={loading} color={"#7A3CEC"} />
    </div>
  );
};

export default MaterialPage;
