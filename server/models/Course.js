import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  branch: {
    type: String,
    required: true,
  },
  sem: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  files: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "File",
    },
  ],
});

export default mongoose.model("Course", courseSchema);
