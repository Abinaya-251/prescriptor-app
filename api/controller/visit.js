import Visit from "../models/Visit.js";
import jwt from "jsonwebtoken"
//create
export const createVisit=async(req,res,next)=>{ 
const newVisit=new Visit(req.body)
try{

const savedVisit=await newVisit.save()
res.status(200).json(savedVisit);

}catch(err){
  next(err);
}
}

//update
export const updateVisit=async(req,res,next)=>{ 
    try{

        const updatedVisit=await Visit.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedVisit);
        
        }catch(err){
            next(err);
        }

}
//delete
export const deleteVisit=async(req,res,next)=>{ 
    try{

        await Visit.findByIdAndDelete(req.params.id)
        res.status(200).json("Visit has been deleted");
        
        }catch(err){
            next(err);
        }
    
}
//get
export const getVisitByID=async(req,res,next)=>{ 
    try{

        const visit=await Visit.findById(req.params.id)
        res.status(200).json(visit);
        
        }catch(err){
            next(err);
          
        }
    
}

//get By Patient
export const getVisitByPat=async(req,res,next)=>{ 
    try{

        const visits=await Visit.find({patID:req.params.id})
        res.status(200).json(visits);
        
        }catch(err){
            next(err);
          
        }
    
}

//get all
export const getVisits=async(req,res,next)=>{ 
    try{

        const visits=await Visit.find()
        res.status(200).json(visits);
        
        }catch(err){
        //  res.status(500).json(err)
        next(err);
        }
}
