import Appointment from "../models/Appointment.js";
import Sequence from "../models/Sequence.js";
import jwt from "jsonwebtoken"


//create
export const createAppointment=async(req,res,next)=>{ 
const newAppointment=new Appointment(req.body)
try{
    const sequence = await Sequence.findOne({ sequenceName: "appointment" });
    console.log(sequence)    
    const appointmentseqID = sequence.sequenceCurrentNumber + sequence.sequenceIncrementNumber
    sequence.sequenceCurrentNumber=appointmentseqID
    const updatedSequence = await Sequence.findByIdAndUpdate(sequence._id, { $set: sequence }, { new: true })
    
    newAppointment.appntID=appointmentseqID
    newAppointment.status="blocked"
const savedAppointment=await newAppointment.save()
res.status(200).json(savedAppointment);

}catch(err){
  next(err);
}
}

//update
export const updateAppointment=async(req,res,next)=>{ 
    try{

        const updatedAppointment=await Appointment.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedAppointment);
        
        }catch(err){
            next(err);
        }

}
//delete
export const deleteAppointment=async(req,res,next)=>{ 
    try{

        await Appointment.findByIdAndDelete(req.params.id)
        res.status(200).json("Appointment has been deleted");
        
        }catch(err){
            next(err);
        }
    
}
//get
export const getAppointmentSlotsByDate=async(req,res,next)=>{
    try{

        const appointment=await Appointment.find({$and:[{docID:req.params.id},{date:req.params.date}]})
        res.status(200).json(appointment);
        
        }catch(err){
            next(err);
          
        }
     
}
//get
export const getAppointmentByID=async(req,res,next)=>{ 
    try{

        const appointment=await Appointment.find({$and:[{docID:req.params.id},{patID:req.params.patid}]})
        res.status(200).json(appointment);
        
        }catch(err){
            next(err);
          
        }
    
}


//get all
export const getAppointments=async(req,res,next)=>{ 
    try{

        const appointments=await Appointment.find({docID:req.param.id})
        res.status(200).json(appointments);
        
        }catch(err){
        //  res.status(500).json(err)
        next(err);
        }
}
