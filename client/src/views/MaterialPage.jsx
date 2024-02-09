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
  const sem = paras.get("semester");
  const course = paras.get("course");
  const category = paras.get("category");

  //states
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);

  const serverUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const getHistory = async () => {
      let history = await JSON.parse(localStorage.getItem("history"));
      const newHistory = { branch, sem, course };
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
          `${serverUrl}/material/?branch=${branch}&sem=${sem}&course=${course}&category=${encodeURIComponent(
            category
          )}`
        );
        setFiles(response.data.FilteredFiles);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    getHistory();
    getMaterial();
  }, [branch, sem, course, category]);

  return (
    <div className="material-page text-gray-700 py-4 md:px-[10rem] min-h-[90vh] bg-violet-200">
      <h1 className="text-lg md:text-3xl text-center">{`${branch} > ${sem} > ${course} > ${category}s`}</h1>

      {files?.length === 0 ? (
        <NoData />
      ) : (
        <div className="file-list max-w-[50rem] mx-auto my-8">
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
