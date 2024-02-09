import { Course, Branch, File } from "../models/index.js";

export const setBranches = async (req, res) => {
  try {
    const { name, semesters } = req.body;

    const branch = new Branch({
      name,
      semesters,
    });

    const NewBranch = await branch.save();

    res.status(200).json({
      NewBranch,
    });
  } catch (err) {
    res.send("Can't make a branch");
    console.log(err.message);
  }
};

export const setCourse = async (req, res) => {
  try {
    const { branch, name, sem } = req.body;

    let NewCourse = new Course({
      branch,
      sem,
      name,
    });

    NewCourse = await NewCourse.save();

    const NewCourseAdded = await Branch.findOneAndUpdate(
      { name: branch },
      {
        $push: { courses: NewCourse._id },
      },
      { new: true }
    )
      .populate("courses")
      .exec();

    res.status(200).json({
      NewCourseAdded,
    });
  } catch (err) {
    res.send("Can't add a new course");
    console.log(err.message);
  }
};

export const uploadFile = async (req, res) => {
  try {
    const { branch, semester, course, category, fileUrl, filename } = req.body;

    const file = new File({
      category: category,
      url: fileUrl,
      filename: filename,
    });

    const NewFile = await file.save();

    const CheckCourse = await Course.findOneAndUpdate(
      {
        branch,
        sem: semester,
      },
      {
        $push: { files: NewFile._id },
      },
      { new: true }
    )
      .populate("files")
      .exec();
    console.log(CheckCourse);

    res.status(200).json({
      CheckCourse,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
      success: false,
    });
  }
};
