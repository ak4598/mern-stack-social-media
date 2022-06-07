import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/users", userRoutes);

// https://www.mongodb.com/cloud/atlas
// const CONNECTION_URL = 'mongodb+srv://mernstack:ZNb18hQ4t8E2dj41@cluster0.6diu5j7.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 12345;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error));
