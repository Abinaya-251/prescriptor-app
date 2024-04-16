import Appointment from "../models/Appointment.js";
import Sequence from "../models/Sequence.js";
import jwt from "jsonwebtoken"
import Roaster from "../models/Roaster.js";
import {getAppointmentSlots} from "../utils/getAppointmentSlots.js"


//create
export const createAppointment = async (req, res, next) => {
    const newAppointment = new Appointment(req.body)
    try {
        const sequence = await Sequence.findOne({ sequenceName: "appointment" });
        console.log(sequence)
        const appointmentseqID = sequence.sequenceCurrentNumber + sequence.sequenceIncrementNumber
        sequence.sequenceCurrentNumber = appointmentseqID
        const updatedSequence = await Sequence.findByIdAndUpdate(sequence._id, { $set: sequence }, { new: true })

        newAppointment.appntID = appointmentseqID
        newAppointment.status = "blocked"
        const savedAppointment = await newAppointment.save()
        res.status(200).json(savedAppointment);

    } catch (err) {
        next(err);
    }
}

//update
export const updateAppointment = async (req, res, next) => {
    try {

        const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedAppointment);

    } catch (err) {
        next(err);
    }

}
//delete
export const deleteAppointment = async (req, res, next) => {
    try {

        await Appointment.findByIdAndDelete(req.params.id)
        res.status(200).json("Appointment has been deleted");

    } catch (err) {
        next(err);
    }

}
//get
export const getAppointmentSlotsByDate = async (req, res, next) => {
    try {

        const appointment = await Appointment.find({ $and: [{ docID: req.params.id }, { date: req.params.date }] })
        res.status(200).json(appointment);

    } catch (err) {
        next(err);

    }

}
//get
export const getAppointmentByID = async (req, res, next) => {
    try {

        const appointment = await Appointment.find({ $and: [{ docID: req.params.id }, { patID: req.params.patid }] })
        res.status(200).json(appointment);

    } catch (err) {
        next(err);

    }

}

//get available slots
export const getAvailableSlotsByDocByDate = async (req, res, next) => {
    try {
        const appointment = await Appointment.find({ $and: [{ docID: req.params.id }, { date: req.params.date }] })
        if (appointment != null) {
            const roaster = await Roaster.findOne({ $and: [{ docID: req.params.id }, { day: (new Date(req.params.date)).getDay() }] })
            var slots = []
            console.log(roaster)
            var data = roaster
            for (var i = 0; i < data.timeslot.length; i++) {
                slots.push(getAppointmentSlots(data["timeslot"][i].starthour, data["timeslot"][i].startmins, data["timeslot"][i].endhour, data["timeslot"][i].endmins, roaster.slottime))
            }
            //get booked Timeslots
            var bookedslots = []
            var starthour=""
            var endhour=""
            var startmins=""
            var endmins=""
            var bookedStartTime=""
            var bookedEndTime=""
            console.log("appointment",appointment)
            for (var j = 0; j < appointment.length; j++) {
                if (appointment[j].timeslot.starthour < 10) {
                    starthour = "0".concat((appointment[j].timeslot.starthour).toString())
                } else {
                    starthour = appointment[j].timeslot.starthour.toString()
                }
                startmins = appointment[j].timeslot.startmins
                if (appointment[j].timeslot.endhour < 10) {
                    endhour = "0".concat((appointment[j].timeslot.endhour).toString())
                } else {
                    endhour = appointment[j].timeslot.endhour.toString()
                }
                endmins = appointment[j].timeslot.endmins
                bookedStartTime = starthour.toString().concat(":").concat(startmins)
                bookedEndTime = endhour.toString().concat(":").concat(endmins)
                bookedslots.push({ "starttime": bookedStartTime, "endtime": bookedEndTime, "status": "booked" })
            }

            var allslots = []
            for (var i = 0; i < slots.length; i++) {
                for (var j = 0; j < slots[i].length; j++) {

                    bookedslots.forEach(function(entry){
                        if(entry.starttime==slots[i][j][0] && entry.endtime==slots[i][j][1]){
                            allslots.push({ "starttime": slots[i][j][0], "endtime": slots[i][j][1], "status": "blocked" })
                        }
                        else{
                            allslots.push({ "starttime": slots[i][j][0], "endtime": slots[i][j][1], "status": "available" })
                        }
                    });
                    
                    
                }
            }

            //Update Slots with status

            res.status(200).json(allslots)
        }
        else {
            res.status(200).json({ "Error": "No Records Found" });
        }
    } catch (err) {
        next(err);

    }
}
//get all
export const getAppointments = async (req, res, next) => {
    try {

        const appointments = await Appointment.find({ docID: req.param.id })
        res.status(200).json(appointments);

    } catch (err) {
        //  res.status(500).json(err)
        next(err);
    }
}
