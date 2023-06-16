import express from "express";
import mongoose from "mongoose";
import dotenv from "./api/node_modules/dotenv/lib/main";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDb disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDb connected");
});

app.get("/", (req, res) => {
  res.send("hello first request");
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});
