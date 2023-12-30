//dependencies
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connection from "./configs/database.js";
import Router from "./routes/routes.js";

//setup the app
const app = express();

//configs
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//api routing
app.use("/api/v1", Router);

//database
connection(process.env.MONGODB_URL);

//listening
app.listen(process.env.PORT, () => {
  console.log(`Server listening on the port ${process.env.PORT}`);
});
