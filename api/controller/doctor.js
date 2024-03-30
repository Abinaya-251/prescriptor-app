
import Doctor from "../models/Doctor.js";
import Sequence from "../models/Sequence.js";

import jwt from "jsonwebtoken"
//create
export const createDoctor = async (req, res, next) => {

    try {
        const sequence = await Sequence.findOne({ sequenceName: "Doctor" });
        const docseqID = sequence.sequenceCurrentNumber + sequence.sequenceIncrementNumber
        sequence.sequenceCurrentNumber=docseqID
        const updatedSequence = await Sequence.findByIdAndUpdate(sequence._id, { $set: sequence }, { new: true })
        const newDoctor = new Doctor(req.body)
        newDoctor.docID=docseqID
        const savedDoctor = await newDoctor.save()
        res.status(200).json(savedDoctor);

    } catch (err) {
        next(err);
    }
}

//update
export const updateDoctor = async (req, res, next) => {
    try {

        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedDoctor);

    } catch (err) {
        next(err);
    }

}
//delete
export const deleteDoctor = async (req, res, next) => {
    try {

        await Doctor.findByIdAndDelete(req.params.id)
        res.status(200).json("Doctor has been deleted");

    } catch (err) {
        next(err);
    }

}
//get
export const getDoctorByID = async (req, res, next) => {
    try {

        const doctor = await Doctor.findById(req.params.id)
        res.status(200).json(doctor);

    } catch (err) {
        next(err);

    }

}
//get all
export const getDoctors = async (req, res, next) => {
    try {

        const doctors = await Doctor.find()
        res.status(200).json(doctors);

    } catch (err) {
        //  res.status(500).json(err)
        next(err);
    }
}


