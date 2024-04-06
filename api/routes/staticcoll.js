import express from "express";
import {createError} from "../utils/error.js"
import {addNewAttribute} from "../controller/staticcoll.js"
import {updateAttribute} from "../controller/staticcoll.js"
import {deleteAttribute} from "../controller/staticcoll.js"
import {getAttributeByID} from "../controller/staticcoll.js"
import {getAttributes} from "../controller/staticcoll.js"
import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, addNewAttribute);

//Update
router.put("/:id",updateAttribute);

//Delete
router.delete("/:id",deleteAttribute);

//Get
router.get("/:id",getAttributeByID);

//Get All
router.get("/",getAttributes);

export default router