import express from "express";
import { request } from "http";
import { nextTick } from "process";

import {createError} from "../utils/error.js"
import {createPatient} from "../controller/patient.js"
import {updatePatient} from "../controller/patient.js"
import {deletePatient} from "../controller/patient.js"
import {getPatientByID} from "../controller/patient.js"
import {getPatients} from "../controller/patient.js"
const router=express.Router();


//Create
router.post("/",createPatient);

//Update
router.put("/:id",updatePatient);

//Delete
router.delete("/:id",deletePatient);

//Get
router.get("/:id",getPatientByID);

//Get All
router.get("/",getPatients);

export default router