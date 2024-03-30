import Roaster from "../models/Roaster.js";
import jwt from "jsonwebtoken"
//create
export const createRoaster=async(req,res,next)=>{ 
const newRoaster=new Roaster(req.body)
try{

const savedRoaster=await newRoaster.save()
res.status(200).json(savedRoaster);

}catch(err){
  next(err);
}
}

//update
export const updateRoaster=async(req,res,next)=>{ 
    try{

        const updatedRoaster=await Medicine.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedRoaster);
        
        }catch(err){
            next(err);
        }

}
//delete
export const deleteRoaster=async(req,res,next)=>{ 
    try{

        await Roaster.findByIdAndDelete(req.params.id)
        res.status(200).json("Roaster has been deleted");
        
        }catch(err){
            next(err);
        }
    
}
//get
export const getRoasterByID=async(req,res,next)=>{ 
    try{

        const roaster=await Roaster.findById(req.params.id)
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
