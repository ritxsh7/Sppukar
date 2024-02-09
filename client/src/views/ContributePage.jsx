import React, { useEffect, useState } from "react";

// components
import path1 from "../assets/path1.png";
import path2 from "../assets/path2.png";
import Select from "../widgets/Hero/Select";
import UploadButton from "../widgets/UploadButton/UploadButton";
import Dialog from "../widgets/Dialog/Dialog";
import check from "../assets/check.png";
//data
import { categories } from "../configs/filters";
import { uploadFileToFirebase } from "../functions/uploadToFirebase";
import axios from "axios";
import ProgressDialog from "../widgets/ProgressDialog/ProgressDialog";
import Loader from "../widgets/Loader/Loader";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { styles } from "../configs/utils";

const Contribute = () => {
  //states and store

  const { branch, semester, course } = useSelector((store) => store.choices);

  const [currentFile, setCurrentFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isprogress, setIsprogress] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [progress, setProgress] = useState(0);

  const serverUrl = import.meta.env.VITE_BACKEND_URL;
  //=======================upload file function==========================

  const uploadFile = async () => {
    if (branch && semester && course && category) {
      const formData = new FormData();
      formData.append("branch", branch);
      formData.append("semester", semester);
      formData.append("course", course);
      formData.append("category", category);
      formData.append("filename", currentFile.name);

      try {
        setLoading(true);
        setIsprogress(true);
        const fileUrl = await uploadFileToFirebase(currentFile, setProgress);
        setIsprogress(false);
        formData.append("fileUrl", fileUrl);

        try {
          const response = await axios.post(
            `${serverUrl}/upload-file`,
            formData
          );
          setCurrentFile(null);
          setLoading(false);
          setDialogOpen(true);
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    } else {
      toast.error("Please select valid filters", styles.toast);
    }
  };

  return (
    <>
      <div className="contribute-page w-[100vw] px-[5vw] pb-8 md:w-[70vw] mx-auto text-center relative flex flex-col items-center text-white min-h-[89vh] z-10">
        <h1 className="text-3xl md:text-4xl text-violet-900 mt-4 md:mt-4 font-semibold">
          {`JOIN BY UPLOADING`}
        </h1>
        <p className="text-md md:text-2xl mt-2 md:mt-6 text-black font-light">
          Contribute your own material to the world of Engineers and make the
          community even larger.
        </p>
        {isprogress && <ProgressDialog progress={progress} />}
        <Select />
        {currentFile && (
          <p className="mb-3 text-violet-900 text-xs md:text-sm">
            Please make sure that file name is convenient so that others can
            recognise it easily
          </p>
        )}
        <UploadButton
          currentFile={currentFile}
          setCurrentFile={setCurrentFile}
        />
        {currentFile && (
          <>
            <div className="my-3 w-[100%] max-w-[650px]">
              <label htmlFor="categories" className="text-sm text-violet-900">
                Select category :
              </label>
              <select
                id="categories"
                className="custom-select md:text-md text-sm"
                style={{ width: "100%" }}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select a category</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="mt-4 w-[100%] max-w-[650px] py-3"
              onClick={() => {
                uploadFile();
              }}
              style={{ backgroundColor: "#2A0316", borderRadius: "0.4rem" }}
            >
              Upload file
            </button>
          </>
        )}
        <Dialog
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          img={check}
          msg="File uploaded successfully"
        />
        <Loader loading={loading} color={"#4c1d95"} />
      </div>
    </>
  );
};

export default Contribute;
