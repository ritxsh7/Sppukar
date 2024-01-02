import { Branch, Course, File } from "../models/index.js";

//template
// export const setCourse = async (req, res) => {
//   try {
//   } catch (err) {
//     res.json({
//       error: err.message,
//     });
//   }
// };

export const getBranches = async (req, res) => {
  try {
    let branches = await Branch.find();
    console.log(branches);
    branches = branches.map((branch) => branch.name).sort();
    return res.send(branches);
  } catch (err) {
    return res.json({
      error: err.message,
    });
  }
};

export const getCourses = async (req, res) => {
  try {
    const { name, Sem } = req.query;
    console.log(name, Sem);
    const { _id } = await Branch.findOne({ name });
    const checkCourses = await Course.find({ bid: _id, sid: Sem });
    res.send(checkCourses.map((c) => c.name).sort());
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};

export const getMaterial = async (req, res) => {
  try {
    const { branch, semester, course, category } = req.query;
    console.log(req.query);

    const checkBranch = await Branch.findOne({ name: branch });
    const checkCourse = await Course.findOne({
      name: course,
      sid: semester,
      bid: checkBranch._id,
    });

    const files = await File.find({
      bid: checkBranch._id,
      sid: semester,
      cid: checkCourse._id,
      category: category,
    });
    // console.log(files);

    res.status(200).json({
      files,
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};
