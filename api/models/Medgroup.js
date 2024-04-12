import mongoose from 'mongoose';
const { Schema } = mongoose;

const MedgroupSchema = new Schema({
    medgroupID:{type:String, required:true,unique:true },
    prescriptionList: [{
        type: mongoose.Schema.Types.Array,
        ref: 'Prescription'
    }]
    
  },
{timestamps:true}

);

export default mongoose.model("Medgroup", MedgroupSchema)