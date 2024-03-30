import Diagnosis from "../models/Diagnosis.js";
import jwt from "jsonwebtoken"
//create
export const createDiagnosis=async(req,res,next)=>{ 
const newDiagnosis=new Diagnosis(req.body)
try{
const savedDiagnosis=await newDiagnosis.save()
res.status(200).json(savedDiagnosis);
}catch(err){
  next(err);
}
}

//update
export const updateDiagnosis=async(req,res,next)=>{ 
    try{

        const updatedDiagnosis=await Diagnosis.findOneAndUpdate({$and: [
            {patID: req.patID},
            {patVisitDate: req.patVisitDate}
            ]}, {$set: req.body},{new:true})
        res.status(200).json(updatedDiagnosis);
        
        }catch(err){
            next(err);
        }

}
//delete - Keep only if should be allowed
export const deleteDiagnosis=async(req,res,next)=>{ 
    try{

        await Diagnosis.findByIdAndDelete(req.params.id)
        res.status(200).json("Diagnosis has been deleted");
        
        }catch(err){
            next(err);
        }
    
}
//get
export const getDiagnosisByID=async(req,res,next)=>{ 
    try{

        const diagnosis=await Diagnosis.findOne({$and: [
            {patID: req.patID},
            {patVisitDate: req.patVisitDate}
            ]})
        res.status(200).json(diagnosis);
        
        }catch(err){
            next(err);
          
        }
    
}
//get all
export const getDiagnosis=async(req,res,next)=>{ 
    try{

        const diagnosises=await Diagnosis.find({patID: req.patID})
        res.status(200).json(diagnosises);
        
        }catch(err){
        //  res.status(500).json(err)
        next(err);
        }
}
