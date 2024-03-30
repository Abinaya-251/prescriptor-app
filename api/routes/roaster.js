import express from "express";
import {createError} from "../utils/error.js"
import {createRoaster} from "../controller/roaster.js"
import {updateRoaster} from "../controller/roaster.js"
import {deleteRoaster} from "../controller/roaster.js"
import {getRoasterByID} from "../controller/roaster.js"
import {getRoaster} from "../controller/roaster.js"
import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, createRoaster);

//Update
router.put("/:id",updateRoaster);

//Delete
router.delete("/:id",deleteRoaster);

//Get
router.get("/:id",getRoasterByID);

//Get All
router.get("/",getRoaster);

export default router