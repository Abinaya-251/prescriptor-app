import express from "express";
import {createError} from "../utils/error.js"
import {createHealthstats} from "../controller/healthstats.js"
import {updateHealthstats} from "../controller/healthstats.js"
import {getHealthStats} from "../controller/healthstats.js"
import {getAllHealthStats} from "../controller/healthstats.js"
import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, createHealthstats);

//Update
router.put("/:id",updateHealthstats);

//Get
router.get("/:id",getHealthStats);

//Get All
router.get("/",getAllHealthStats);

export default router