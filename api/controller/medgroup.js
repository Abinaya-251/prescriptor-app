import Medgroup from "../models/Medgroup.js";
import jwt from "jsonwebtoken"
//create
export const createMedgroup=async(req,res,next)=>{ 
const newMedgroup=new Medgroup(req.body)
try{

const savedMedgroup=await newMedgroup.save()
res.status(200).json(savedMedgroup);

}catch(err){
  next(err);
}
}

//update
export const updateMedgroup=async(req,res,next)=>{ 
    try{

        const updatedMedgroup=await Medgroup.findOneAndUpdate({"medgroupID":req.params.id}, {$set: req.body},{new:true})
        res.status(200).json(updatedMedgroup);
        
        }catch(err){
            next(err);
        }

}
//delete
export const deleteMedgroup=async(req,res,next)=>{ 
    try{

        await Medgroup.findOneAndDelete({"medgroupID":req.params.id})
        res.status(200).json("Medgroup has been deleted");
        
        }catch(err){
            next(err);
        }
    
}
//get
export const getMedgroupByID=async(req,res,next)=>{ 
    try{

        const medgroup=await Medgroup.findOne({"medgroupID":req.params.id})
        res.status(200).json(medgroup);
        
        }catch(err){
            next(err);
          
        }
    
}
//get all
export const getMedgroup=async(req,res,next)=>{ 
    try{

        const medgroup=await Medgroup.find()
        res.status(200).json(medgroup);
        
        }catch(err){
        //  res.status(500).json(err)
        next(err);
        }
}
