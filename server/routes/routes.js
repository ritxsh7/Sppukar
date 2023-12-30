import express from "express";
import { getBranches, getCourses } from "../controllers/readers.js";
import { setBranches, setCourse } from "../controllers/writers.js";

const router = express.Router();

router.get("/get-branches", getBranches);
router.get("/get-courses/", getCourses);

router.post("/set-course", setCourse);
router.post("/set-branches", setBranches);

export default router;
