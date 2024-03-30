import express from "express";
import {createError} from "../utils/error.js"
import {createStaticcoll} from "../controller/staticcoll.js"
import {updateStaticcoll} from "../controller/staticcoll.js"
import {deleteStaticcoll} from "../controller/staticcoll.js"
import {getStaticcollByID} from "../controller/staticcoll.js"
import {getStaticcoll} from "../controller/staticcoll.js"
import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, createStaticcoll);

//Update
router.put("/:id",updateStaticcoll);

//Delete
router.delete("/:id",deleteStaticcoll);

//Get
router.get("/:id",getStaticcollByID);

//Get All
router.get("/",getStaticcoll);

export default router