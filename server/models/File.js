import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    bid: {
      type: mongoose.Schema.ObjectId,
      ref: "Branch",
    },
    sid: {
      type: String,
      required: true,
    },
    cid: {
      type: mongoose.Schema.ObjectId,
      ref: "Course",
    },

    category: {
      type: String,
      enum: ["PPT", "TEXTBOOK", "NOTES", "PYQS", "DECODE"],
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
