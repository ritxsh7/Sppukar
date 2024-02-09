import { validationResult } from "express-validator";
import { Branch, Course, File } from "../models/index.js";

export const getBranches = async (req, res) => {
  try {
    let branches = await Branch.find();
    branches = branches.map((branch) => branch.name).sort();
    res.status(200).json(branches);
  } catch (err) {
    res.send("Can't get branches");
    console.log(err.message);
  }
};

export const getSemesters = async (req, res) => {
  let { branch } = req.query;
  if (!branch) {
    return res.status(400).send("Please select a branch");
  } else {
    if (branch === "FE") return res.status(200).json(["Sem 1", "Sem 2"]);
    else
      return res
        .status(200)
        .json(["Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"]);
  }
};

export const getCourses = async (req, res) => {
  try {
    const { branch, sem } = req.query;
    let SelectedCourses = await Course.find({ branch, sem }).select(
      "-_id name"
    );
    SelectedCourses = SelectedCourses.map((course) => course.name);
    res.status(200).json(SelectedCourses);
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};

export const getMaterial = async (req, res) => {
  try {
    const { branch, sem, course, category } = req.query;
    console.log(branch, sem, course);

    let FilteredFiles = await Course.findOne({
      branch,
      sem,
      name: course,
    })
      .populate("files")
      .exec();

    console.log(FilteredFiles);

    FilteredFiles = FilteredFiles.files.filter(
      (file) => file.category === category
    );

    res.status(200).json({
      FilteredFiles,
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};
