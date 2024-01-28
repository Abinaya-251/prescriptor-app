import Medicine from "../models/Medicine.js";
import jwt from "jsonwebtoken"
//create
export const createMedicine=async(req,res,next)=>{ 
const newMedicine=new Medicine(req.body)
try{

const savedMedicine=await newMedicine.save()
res.status(200).json(savedMedicine);

}catch(err){
  next(err);
}
}

//update
export const updateMedicine=async(req,res,next)=>{ 
    try{

        const updatedMedicine=await Medicine.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedMedicine);
        
        }catch(err){
            next(err);
        }

}
//delete
export const deleteMedicine=async(req,res,next)=>{ 
    try{

        await Medicine.findByIdAndDelete(req.params.id)
        res.status(200).json("Medicine has been deleted");
        
        }catch(err){
            next(err);
        }
    
}
//get
export const getMedicineByID=async(req,res,next)=>{ 
    try{

        const medicine=await Medicine.findById(req.params.id)
        res.status(200).json(medicine);
        
        }catch(err){
            next(err);
          
        }
    
}
//get all
export const getMedicines=async(req,res,next)=>{ 
    try{

        const medicines=await Medicine.find()
        res.status(200).json(medicines);
        
        }catch(err){
        //  res.status(500).json(err)
        next(err);
        }
}
