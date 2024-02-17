import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { dbConnect } from "./dbConnect/dbConnect.js";
import routes from "./routes/routes.js";

const app = express();
dotenv.config();

app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(5000, () => {
  console.log("Server is Running");
  dbConnect();
});
