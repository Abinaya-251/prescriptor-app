import express from "express";
import {createError} from "../utils/error.js"
import {createDoctor} from "../controller/doctor.js"
import {updateDoctor} from "../controller/doctor.js"
import {deleteDoctor} from "../controller/doctor.js"
import {getDoctorByID} from "../controller/doctor.js"
import {getDoctors} from "../controller/doctor.js"
import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, createDoctor);

//Update
router.put("/:id",updateDoctor);

//Delete
router.delete("/:id",deleteDoctor);

//Get
router.get("/:id",getDoctorByID);

//Get All
router.get("/",getDoctors);

export default router