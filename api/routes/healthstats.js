import express from "express";
import {createError} from "../utils/error.js"
import {createHealthstats} from "../controller/healthstats.js"
import {updateHealthstats} from "../controller/healthstats.js"
import {getHealthStatsByIDandDate} from "../controller/healthstats.js"
import {getAllHealthStats} from "../controller/healthstats.js"
import {getHealthStatsByID} from "../controller/healthstats.js"
import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, createHealthstats);

//Update
router.put("/:id",updateHealthstats);

//Get
router.get("/:id/:date",getHealthStatsByIDandDate);

//Get
router.get("/:id",getHealthStatsByID);

//Get All
router.get("/all/patient/:patid",getAllHealthStats);

export default router