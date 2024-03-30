import express from "express";
import {createError} from "../utils/error.js"
import {createHealthstat} from "../controller/healthstat.js"
import {updateHealthstat} from "../controller/healthstat.js"
import {getHealthstatByID} from "../controller/healthstat.js"
import {getAllHealthStat} from "../controller/healthstat.js"
import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, createHealthstat);

//Update
router.put("/:id",updateHealthstat);

//Get
router.get("/:id",getHealthstatByID);

//Get All
router.get("/",getAllHealthStat);

export default router