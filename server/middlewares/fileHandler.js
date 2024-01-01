import multer from "multer";

export const storage = multer.memoryStorage(); // Store files in memory (you can customize this)
export const upload = multer({ storage: storage });

export const handleFile = () => {};
