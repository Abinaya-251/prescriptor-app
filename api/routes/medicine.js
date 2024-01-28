import express from "express";
import {createError} from "../utils/error.js"
import {createMedicine} from "../controller/medicine.js"
import {updateMedicine} from "../controller/medicine.js"
import {deleteMedicine} from "../controller/medicine.js"
import {getMedicineByID} from "../controller/medicine.js"
import {getMedicines} from "../controller/medicine.js"
import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, createMedicine);

//Update
router.put("/:id",updateMedicine);

//Delete
router.delete("/:id",deleteMedicine);

//Get
router.get("/:id",getMedicineByID);

//Get All
router.get("/",getMedicines);

export default router