import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import patientRoute from "./routes/patient.js"
import medicineRoute from "./routes/medicine.js"
import sequenceRoute from "./routes/sequence.js"

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
    console.log("mongoDB Connected!");
  });

//Middleware
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/v1/user",userRoute);
app.use("/api/v1/medicine",medicineRoute);
app.use("/api/v1/patient",patientRoute);
app.use("/api/v1/sequence",sequenceRoute);




app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
  });

