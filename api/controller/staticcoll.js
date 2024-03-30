import Staticcoll from "../models/Staticcoll.js";
import jwt from "jsonwebtoken"
//create
export const addNewAttribute=async(req,res,next)=>{ 
const newAttribute=new Staticcoll(req.body)
try{

const savedAttribute=await newAttribute.save()
res.status(200).json(savedAttribute);

}catch(err){
  next(err);
}
}

//update
export const updateAttribute=async(req,res,next)=>{ 
    try{

        const updatedAttribute=await Staticcoll.findByIdAndDelete(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedAttribute);
        
        }catch(err){
            next(err);
        }

}
//delete
export const deleteAttribute=async(req,res,next)=>{ 
    try{

        await Staticcoll.findByIdAndDelete(req.params.id)
        res.status(200).json("Attrbute has been deleted");
        
        }catch(err){
            next(err);
        }
    
}
//get
export const getAttributeByID=async(req,res,next)=>{ 
    try{

        const attribute=await Staticcoll.findById(req.params.id)
        res.status(200).json(attribute);
        
        }catch(err){
            next(err);
          
        }
    
}
//get all
export const getAttributes=async(req,res,next)=>{ 
    try{

        const attributes=await Staticcoll.find()
        res.status(200).json(attributes);
        
        }catch(err){
        //  res.status(500).json(err)
        next(err);
        }
}
