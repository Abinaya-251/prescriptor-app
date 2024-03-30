import express from "express";
import {createError} from "../utils/error.js"
import {createSequence} from "../controller/sequence.js"
import {updateSequence} from "../controller/sequence.js"
import {getSequenceByID} from "../controller/sequence.js"
import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, createSequence);

//Update
router.put("/:id",updateSequence);

//Get
router.get("/:id",getSequenceByID);

export default router