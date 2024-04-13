import Roaster from "../models/Roaster.js";
import Sequence from "../models/Sequence.js";
import jwt from "jsonwebtoken"
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
