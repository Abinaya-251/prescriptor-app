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
            {patID: req.params.patID},
            {patVisitDate: req.params.patVisitDate}
            ]}, {$set: req.body},{new:true})
        res.status(200).json(updatedHealthstat);
        
        }catch(err){
            next(err);
        }

}
//get
export const getHealthStatsByIDandDate=async(req,res,next)=>{ 
    try{
           const savedHealthstat=await Healthstats.findOne({$and: [
            {patID: req.params.id},
            {patVisitDate: req.params.date}
            ]})
        res.status(200).json(savedHealthstat);
        
        }catch(err){
            next(err);
          
        }
    
}

//get health stat by ID
export const getHealthStatsByID=async(req,res,next)=>{ 
    try{
        const savedHealthstat=await Healthstats.findById({_id: req.params.id})
        res.status(200).json(savedHealthstat);
        
        }catch(err){
            next(err);
          
        }
    
}
//get all
export const getAllHealthStats=async(req,res,next)=>{ 
    try{

        const savedHealthstathlist=await Healthstats.find({patID: req.params.patid})
        res.status(200).json(savedHealthstathlist);
        
        }catch(err){
        //  res.status(500).json(err)
        next(err);
        }
}
