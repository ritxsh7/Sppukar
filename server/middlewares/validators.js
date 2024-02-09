import { query } from "express-validator";

export const CheckNull = (req, res, next) => {
  query("branch").notEmpty().withMessage("Please select a branch");
  next();
};
