import express from "express";
import {createError} from "../utils/error.js"
import {createVisit} from "../controller/visit.js"
import {updateVisit} from "../controller/visit.js"
import {deleteVisit} from "../controller/visit.js"
import {getVisitByID} from "../controller/visit.js"
import {getVisitByPat} from "../controller/visit.js"
import {getVisits} from "../controller/visit.js"
import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, createVisit);

//Update
router.put("/:id",updateVisit);

//Delete
router.delete("/:id",deleteVisit);

//Get
router.get("/:id",getVisitByID);

//Get
router.get("/:id",getVisitByPat);

//Get All
router.get("/",getVisits);

export default router