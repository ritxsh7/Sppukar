import React, { useState } from "react";

// components
import path1 from "../assets/path1.png";
import path2 from "../assets/path2.png";
import Select from "../widgets/Hero/Select";
import UploadButton from "../widgets/UploadButton/UploadButton";
import Dialog from "../widgets/Dialog/Dialog";
import check from "../assets/check.png";
//data
import { categories } from "../configs/filters";
import { uploadFileToFirebase } from "../functions/uplooadToFirebase";
import axios from "axios";
import ProgressDialog from "../widgets/ProgressDialog/ProgressDialog";
import Loader from "../widgets/Loader/Loader";

const Contribute = () => {
  //states and store
  const [b, setB] = useState(null);
  const [c, setC] = useState(null);
  const [s, setS] = useState(b === "First Year" ? "Sem 1" : "Sem 3");
  const [category, setCategory] = useState(categories[0]);
  const [currentFile, setCurrentFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isprogress, setIsprogress] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  // console.log(currentFile);

  const serverUrl = import.meta.env.VITE_BACKEND_URL;

  //=======================upload file function==========================

  const uploadFile = async () => {
    if (!c) {
      alert("No course available for following filters");
      return;
    }
    console.log({ b, s, c, category, currentFile });

    const formData = new FormData();
    formData.append("branch", b);
    formData.append("semester", s);
    formData.append("course", c);
    formData.append("category", category);
    formData.append("filename", currentFile.name);

    try {
      setLoading(true);
      setIsprogress(true);
      const fileUrl = await uploadFileToFirebase(currentFile, setProgress);
      setIsprogress(false);
      formData.append("fileUrl", fileUrl);

      try {
        const response = await axios.post(`${serverUrl}/upload-file`, formData);
        console.log(response.data);
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
  };

  return (
    <div className="contribute-page flex flex-col items-center text-white h-[89vh] z-0">
      <img src={path1} className="path1 -z-[1]"></img>
      <img src={path2} className="path2 -z-[1]"></img>
      <h1 className="text-5xl text-yellow-300 font-semibold md:mt-[2rem]">
        {`JOIN THE COMMUNITY`}
      </h1>
      <p className="text-xl mt-3 z-50">
        Contribute your own material to the world of Engineers and make the
        community even larger.
      </p>
      {isprogress && <ProgressDialog progress={progress} />}
      <Select b={b} s={s} c={c} setB={setB} setS={setS} setC={setC} />
      {currentFile && (
        <p className="mb-3 text-amber-200 text-sm">
          Please make sure that file name is convenient so that others can
          recognise it easily
        </p>
      )}
      <UploadButton currentFile={currentFile} setCurrentFile={setCurrentFile} />
      {currentFile && (
        <>
          <div className="my-3 w-[25%]">
            <label htmlFor="categories" className="text-sm">
              Select category :
            </label>
            <select
              id="categories"
              className="custom-select"
              style={{ width: "100%" }}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <button
            className="mt-4 w-[25%] py-3"
            onClick={() => {
              uploadFile();
            }}
            style={{ backgroundColor: "#7a3cec", borderRadius: "0.4rem" }}
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
      <Loader loading={loading} color={"#FDE047"} />
    </div>
  );
};

export default Contribute;
