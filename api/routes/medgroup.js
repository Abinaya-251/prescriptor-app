import express from "express";
import {createError} from "../utils/error.js"
import {createMedgroup} from "../controller/medgroup.js"
import {updateMedgroup} from "../controller/medgroup.js"
import {deleteMedgroup} from "../controller/medgroup.js"
import {getMedgroupByID} from "../controller/medgroup.js"
import {getMedgroup} from "../controller/medgroup.js"
import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, createMedgroup);

//Update
router.put("/:id",updateMedgroup);

//Delete
router.delete("/:id",deleteMedgroup);

//Get
router.get("/:id",getMedgroupByID);

//Get All
router.get("/",getMedgroup);

export default router