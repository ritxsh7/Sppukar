import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    bid: {
      type: mongoose.Schema.ObjectId,
      ref: "Branch",
    },
    sid: {
      type: mongoose.Schema.ObjectId,
      ref: "Semester",
    },
    cid: {
      type: mongoose.Schema.ObjectId,
      ref: "Course",
    },
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["PPT", "TEXTBOOKS", "NOTES", "PYQS", "DECODES"],
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("File", fileSchema);
