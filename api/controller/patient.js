
import Patient from "../models/Patient.js";
import Sequence from "../models/Sequence.js";

import jwt from "jsonwebtoken"
//create
export const createPatient = async (req, res, next) => {

    try {
        const sequence = await Sequence.findOne({ sequenceName: "Patient" });
        const patseqID = sequence.sequenceCurrentNumber + sequence.sequenceIncrementNumber
        sequence.sequenceCurrentNumber=patseqID
        const updatedSequence = await Sequence.findByIdAndUpdate(sequence._id, { $set: sequence }, { new: true })
        const newPatient = new Patient(req.body)
        newPatient.patID=patseqID
        const savedPatient = await newPatient.save()
        res.status(200).json(savedPatient);

    } catch (err) {
        next(err);
    }
}

//update
export const updatePatient = async (req, res, next) => {
    try {

        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedPatient);

    } catch (err) {
        next(err);
    }

}
//delete
export const deletePatient = async (req, res, next) => {
    try {

        await Patient.findByIdAndDelete(req.params.id)
        res.status(200).json("Patient has been deleted");

    } catch (err) {
        next(err);
    }

}
//get
export const getPatientByID = async (req, res, next) => {
    try {

        const patient = await Patient.findById(req.params.id)
        res.status(200).json(patient);

    } catch (err) {
        next(err);

    }

}
//get all
export const getPatients = async (req, res, next) => {
    try {

        const patients = await Patient.find()
        res.status(200).json(patients);

    } catch (err) {
        //  res.status(500).json(err)
        next(err);
    }
}


