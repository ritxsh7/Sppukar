import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["PPT", "TEXTBOOK", "NOTES", "PYQS", "DECODE", "QUESTION BANK"],
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
