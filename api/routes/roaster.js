import express from "express";
import {createError} from "../utils/error.js"
import {createRoaster} from "../controller/roaster.js"
import {updateRoasterByIDandDay} from "../controller/roaster.js"
import {deleteRoasterByDay} from "../controller/roaster.js"
import {getRoasterByID} from "../controller/roaster.js"
import {getRoasters} from "../controller/roaster.js"
import {getRoasterByIDandDay} from "../controller/roaster.js"
import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, createRoaster);

//Update
router.put("/:id/:day",updateRoasterByIDandDay);

//Delete
router.delete("/:id/:day",deleteRoasterByDay);

//Get
router.get("/:id",getRoasterByID);

//Get
router.get("/:id/:day",getRoasterByIDandDay);

//Get All
router.get("/",getRoasters);

export default router