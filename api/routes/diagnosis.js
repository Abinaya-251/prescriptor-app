import express from "express";
import {createError} from "../utils/error.js"
import {createDiagnosis} from "../controller/diagnosis.js"
import {updateDiagnosis} from "../controller/diagnosis.js"
import {deleteDiagnosis} from "../controller/diagnosis.js"
import {getDiagnosisByID} from "../controller/diagnosis.js"
import {getDiagnosis} from "../controller/diagnosis.js"
import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, createDiagnosis);

//Update
router.put("/:id",updateDiagnosis);

//Delete
router.delete("/:id",deleteDiagnosis);

//Get
router.get("/:id",getDiagnosisByID);

//Get All
router.get("/",getDiagnosis);

export default router