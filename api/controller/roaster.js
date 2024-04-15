import Roaster from "../models/Roaster.js";
import Sequence from "../models/Sequence.js";
import jwt from "jsonwebtoken"
import timeSlotter from "time-slotter"
//create
export const createRoaster=async(req,res,next)=>{ 
//const newRoaster=new Roaster(req.body)
try{
    const sequence = await Sequence.findOne({sequenceName: "roaster" });
    console.log(sequence)    
    const roasterseqID = sequence.sequenceCurrentNumber + sequence.sequenceIncrementNumber
    sequence.sequenceCurrentNumber=roasterseqID
    const updatedSequence = await Sequence.findByIdAndUpdate(sequence._id, { $set: sequence }, { new: true })
    const newRoaster = new Roaster(req.body)
    newRoaster.roasterID=roasterseqID

    const savedRoaster=await newRoaster.save()
    res.status(200).json(savedRoaster);
}catch(err){
  next(err);
}
}


//Generate appointment Slots for a Doctor
const getAppointmentSlots=(starthour,startmins,endhour,endmins,slottime)=>{
    var startTime=""
    var endTime=""
    console.log(slottime)
    if(starthour<10){
        starthour= "0".concat((starthour).toString())
    }
    startTime=starthour.toString().concat(":").concat(startmins)
    endTime=endhour.toString().concat(":").concat(endmins)
    console.log(startTime,endTime)
    return timeSlotter(startTime, endTime, slottime,true)
        
}
//Check available Slots
//get all slots available for a doctor on a day
export const getAppointmentSlotsByDay=async(req,res,next)=>{ 
    try{

        const roaster=await Roaster.findOne({$and:[{docID:req.params.id},{day:req.params.day}]})
        var slots=[]
        console.log(roaster)
        var data =roaster
        for (var i=0; i<data.timeslot.length; i++){
            slots.push(getAppointmentSlots(data["timeslot"][i].starthour,data["timeslot"][i].startmins,data["timeslot"][i].endhour,data["timeslot"][i].endmins,roaster.slottime))
        }

        
        res.status(200).json(slots);
        
        }catch(err){
        //  res.status(500).json(err)
        next(err);
        }
}


//update
export const updateRoasterByIDandDay=async(req,res,next)=>{ 
    try{

        const updatedRoaster=await Roaster.findOneAndUpdate({$and:[{docID:req.params.id},{day:req.params.day}]},{ $set: req.body }, { new: true })
        res.status(200).json(updatedRoaster);
        
        }catch(err){
            next(err);
        }

}
//delete
export const deleteRoasterByDay=async(req,res,next)=>{ 
    try{

        await Roaster.findOneAndDelete({$and:[{docID:req.params.id},{day:req.params.day}]})       
        res.status(200).json("Roaster has been deleted");
        
        }catch(err){
            next(err);
        }
    
}
//get
export const getRoasterByID=async(req,res,next)=>{ 
    try{

        const roaster=await Roaster.find({docID:req.params.id})
        res.status(200).json(roaster);
        
        }catch(err){
            next(err);
          
        }
    
}
//get
export const getRoasterByIDandDay=async(req,res,next)=>{ 
    try{

        const roaster=await Roaster.findOne({$and:[{docID:req.params.id},{day:req.params.day}]})
        res.status(200).json(roaster);
        
        }catch(err){
            next(err);
          
        }
    
}
//get all
export const getRoasters=async(req,res,next)=>{ 
    try{

        const roasters=await Roaster.find()
        res.status(200).json(roasters);
        
        }catch(err){
        //  res.status(500).json(err)
        next(err);
        }
}
