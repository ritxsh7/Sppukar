import express from "express";
import {
  getBranches,
  getMaterial,
  getCourses,
  getSemesters,
} from "../controllers/readers.js";

import { setBranches, setCourse, uploadFile } from "../controllers/writers.js";

import multer from "multer";
import { CheckNull } from "../middlewares/validators.js";

export const storage = multer.memoryStorage(); // Store files in memory (you can customize this)
export const upload = multer({ storage: storage });

const router = express.Router();

router.get("/get-branches", getBranches);
router.get("/get-semesters/", CheckNull, getSemesters);
router.get("/get-courses/", getCourses);
router.get("/material/", getMaterial);

router.post("/set-course", setCourse);
router.post("/set-branches", setBranches);
router.post("/upload-file", upload.single("file"), uploadFile);

export default router;
