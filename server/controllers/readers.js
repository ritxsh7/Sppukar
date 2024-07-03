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
    console.log(branch, sem, course, category);

    let FilteredFiles = await Course.findOne({
      branch,
      sem,
      name: course,
    })
      .populate("files")
      .exec();

    FilteredFiles = FilteredFiles.files.filter(
      (file) => file.category === category
    );

    console.log(FilteredFiles);

    res.status(200).json({
      FilteredFiles,
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};

export const cgpaToPercentage = async (req, res) => {
  try {
    const { cgpa } = req.params;

    let grade, cls, per;

    if (cgpa < 4) {
      grade = "F";
      per = "NA";
    } else if (cgpa < 4.75) {
      grade = "D";
      per = 6.6 * cgpa + 13.6;
    } else if (cgpa < 5.25) {
      grade = "C";
      per = 10 * cgpa - 2.5;
    } else if (cgpa < 5.75) {
      grade = "B";
      per = 10 * cgpa - 2.5;
    } else if (cgpa < 6.75) {
      grade = "B+";
      per = 5 * cgpa + 26.5;
    } else if (cgpa < 8.25) {
      grade = "A";
      per = 10 * cgpa - 7.5;
    } else if (cgpa < 9.5) {
      grade = "A+";
      per = 12 * cgpa - 25;
    } else {
      grade = "O";
      per = 20 * cgpa - 100;
    }

    // Calculating class
    if (cgpa < 4) cls = "Fail";
    else if (cgpa < 5.5) cls = "Pass";
    else if (cgpa < 6.25) cls = "Second Class";
    else if (cgpa < 6.75) cls = "Higher Second Class";
    else if (cgpa < 7.75) cls = "First Class";
    else cls = "First Class with Dist";

    http: return res.status(200).json({
      message: "Conversion successful !",
      data: {
        percentage: per,
        remark: cls,
        cgpa,
        grade,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Unable to convert to percentage !",
    });
  }
};
