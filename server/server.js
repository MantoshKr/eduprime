import "core-js/stable/index.js";
import "regenerator-runtime/runtime.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import { readdirSync } from "fs";
import dotenv from "dotenv";
dotenv.config();

// create express app
const app = express();

// db connection
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.error("DB CONNECTION ERROR:", err));

// apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route setup
const routeFiles = readdirSync("./routes");
routeFiles.forEach((routeFile) => {
  if (routeFile.endsWith(".js")) {
    import(`./routes/${routeFile}`)
      .then((module) => {
        const route = module.default;
        app.use("/api", route);
      })
      .catch((err) => {
        console.error("Error importing route:", err);
      });
  }
});

// port
const port = process.env.PORT || 8000;

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
