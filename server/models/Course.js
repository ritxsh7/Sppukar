import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  bid: {
    type: mongoose.Schema.ObjectId,
    ref: "Branch",
  },
  sid: {
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
