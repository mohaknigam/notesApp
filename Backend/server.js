import express from "express";
import { notes } from "./data/notes.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";
import { errorHandler, notFound } from "./middlewares/errorMiddleWare.js";

dotenv.config();
const app = express();
app.use(cors());

const startServer = async () => {
  const dbConnection = await connectDB();
};

startServer();
app.use(express.json());

const portNumber = process.env.PORT || 5000;

// mongoose.connect("mongodb://127.0.0.1:27017/myDB", {
//   useNewUrlParser: true,
//   // Other optional parameters can be specified here
// });

app.get("/", (req, res) => {
  res.json("Api is running");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", router);
app.use(notFound);
app.use(errorHandler);

app.listen(portNumber, () => {
  console.log(`server has started at local host ${portNumber}`);
});
