import express from "express";
import {createError} from "../utils/error.js"
import {createAppointment} from "../controller/appointment.js"
import {updateAppointment} from "../controller/appointment.js"
import {deleteAppointment} from "../controller/appointment.js"
import {getAppointmentByID} from "../controller/appointment.js"
import {getAppointments} from "../controller/appointment.js"
import {getAppointmentSlotsByDate} from "../controller/appointment.js"
import {getAvailableSlotsByDocByDate} from "../controller/appointment.js"

import {verifyToken} from "../utils/verifyToken.js"
const router=express.Router();


//Create
router.post("/",verifyToken, createAppointment);

//Update
router.put("/:id",updateAppointment);

//Delete
router.delete("/:id",deleteAppointment);

//Get
router.get("/:id/:patid",getAppointmentByID);

//Get
router.get("/docid/:id/:date",getAppointmentSlotsByDate);
//Get
router.get("/docid/:id/appoint/:date",getAvailableSlotsByDocByDate);

//Get All
router.get("/:id",getAppointments);


export default router