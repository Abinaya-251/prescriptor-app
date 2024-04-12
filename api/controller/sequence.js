import Sequence from "../models/Sequence.js";

export const createSequence=async(req,res,next)=>{ 
    const newSequence=new Sequence(req.body)
    try{
    
    const savedSequence=await newSequence.save()
    res.status(200).json(savedSequence);
    
    }catch(err){
      next(err);
    }
    }

    export const updateSequence=async(req,res,next)=>{ 
        try{
    
            const updatedSequence=await Sequence.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
            res.status(200).json(updatedSequence);
            
            }catch(err){
                next(err);
            }
    
    }


    export const getSequenceByID=async(req,res,next)=>{ 
        try{
    
            const sequence=await Sequence.findById(req.params.id)
            res.status(200).json(sequence);
            
            }catch(err){
                next(err);
              
            }
        
    }

    export const getSequenceByName=async(req,res,next)=>{ 
        try{
    
            const sequence=await Sequence.findOne({"sequenceName":(req.params.id.toLowerCase())})
            res.status(200).json(sequence);
            
            }catch(err){
                next(err);
              
            }
        
    }