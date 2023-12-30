import { Course, Branch } from "../models/index.js";

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
