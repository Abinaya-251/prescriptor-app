import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import patientRoute from "./routes/patient.js"
import medicineRoute from "./routes/medicine.js"
import sequenceRoute from "./routes/sequence.js"
import medgroupRoute  from "./routes/medgroup.js"
import doctorRoute from "./routes/doctor.js"
import visitRoute from "./routes/visit.js"
import roasterRoute from "./routes/roaster.js"
import staticcollRoute from "./routes/staticcoll.js"
import healthstatsRoute from "./routes/healthstats.js"
import diagnosisRoute from "./routes/diagnosis.js"



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
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/user",userRoute);
app.use("/api/v1/medicine",medicineRoute);
app.use("/api/v1/medgroup",medgroupRoute);
app.use("/api/v1/patient",patientRoute);
app.use("/api/v1/sequence",sequenceRoute);
app.use("/api/v1/doctor",doctorRoute)
app.use("/api/v1/visit", visitRoute)
app.use("/api/v1/roaster",roasterRoute)
app.use("/api/v1/healthstats",healthstatsRoute)
app.use("/api/v1/diagnosis",diagnosisRoute)
app.use("/api/v1/staticcoll",staticcollRoute)


app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
  });

