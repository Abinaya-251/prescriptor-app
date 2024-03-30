import express from "express";
import {createError} from "../utils/error.js"
import {createPrescription} from "../controller/prescription.js"
import {updatePrescription} from "../controller/prescription.js"
import {deletePrescription} from "../controller/prescription.js"
import {getPrescriptionByID} from "../controller/prescription.js"
import {getPrescription} from "../controller/prescription.js"
import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, createPrescription);

//Update
router.put("/:id",updatePrescription);

//Delete
router.delete("/:id",deletePrescription);

//Get
router.get("/:id",getPrescriptionByID);

//Get All
router.get("/",getPrescription);

export default router