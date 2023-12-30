import { Branch, Course } from "../models/index.js";

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
    let branches = await Branch.find({});
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
