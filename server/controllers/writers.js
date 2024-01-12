import { Course, Branch, File } from "../models/index.js";

export const setBranches = async (req, res) => {
  try {
    const { name } = req.body;
    const branch = new Branch({
      name,
    });
    const newbr = await branch.save();
    res.json({
      br: newbr,
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};

export const setCourse = async (req, res) => {
  try {
    const { name, sid, course } = req.body;
    const { _id } = await Branch.findOne({ name });

    const newCourse = new Course({
      bid: _id,
      sid,
      name: course,
    });
    const data = await newCourse.save();
    res.send(data);
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};

export const uploadFile = async (req, res) => {
  try {
    const { branch, semester, course, category, fileUrl, filename } = req.body;
    console.log({ branch, semester, course, category, fileUrl, filename });

    const checkBranch = await Branch.findOne({ name: branch });
    console.log(checkBranch);
    const checkCourse = await Course.findOne({
      name: course,
      sid: semester,
      bid: checkBranch._id,
    });

    const file = new File({
      bid: checkBranch._id,
      sid: semester,
      cid: checkCourse._id,
      category: category,
      url: fileUrl,
      filename: filename,
    });

    const newFile = await file.save();
    res.status(200).json({
      success: "true",
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
      success: false,
    });
  }
};
