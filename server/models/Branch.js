import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Course",
    },
  ],
});

export default mongoose.model("Branch", branchSchema);
