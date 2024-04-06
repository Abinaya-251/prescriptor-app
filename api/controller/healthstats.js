import Healthstats from "../models/Healthstats.js";
import jwt from "jsonwebtoken"
//create
export const createHealthstats=async(req,res,next)=>{ 
const newHealthstat=new Healthstats(req.body)
try{

const savedHealthstat=await newHealthstat.save()
res.status(200).json(savedHealthstat);

}catch(err){
  next(err);
}
}

//update
export const updateHealthstats=async(req,res,next)=>{ 
    try{

        //const updatedHealthstat=await Healtchstats.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        const updatedHealthstat=await Healthstats.findOneAndUpdate({$and: [
            {patID: req.patID},
            {patVisitDate: req.patVisitDate}
            ]}, {$set: req.body},{new:true})
        res.status(200).json(updatedHealthstat);
        
        }catch(err){
            next(err);
        }

}
//get
export const getHealthStats=async(req,res,next)=>{ 
    try{

        const savedHealthstat=await Healthstats.findOne({$and: [
            {patID: req.patID},
            {patVisitDate: req.patVisitDate}
            ]})
        res.status(200).json(savedHealthstat);
        
        }catch(err){
            next(err);
          
        }
    
}
//get all
export const getAllHealthStats=async(req,res,next)=>{ 
    try{

        const savedHealthstathlist=await Healthstats.find({patID: req.patID})
        res.status(200).json(savedHealthstathlist);
        
        }catch(err){
        //  res.status(500).json(err)
        next(err);
        }
}
