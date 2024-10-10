import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
const { port = 8000 } = process.env.PORT;

// define app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// add cors
app.use(cors());

// define routes

import appRoute from "./routes/index.js";

app.use("/app/v1", appRoute);

app.listen(port, () => {
  console.log("listening on port  " + port);
});
