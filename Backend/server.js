import express from "express";
import { notes } from "./data/notes.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const portNumber = process.env.PORT;

app.get("/", (req, res) => {
  res.json(notes);
});
app.get("/request/:id", (req, res) => {
  const note = notes.filter((note) => note._id === req.params.id);
  res.json(note);
});

app.listen(portNumber, () => {
  console.log(`server has started at local host ${portNumber}`);
});
