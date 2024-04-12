import mongoose from 'mongoose';
const { Schema } = mongoose;

const PrescriptionSchema = new Schema({
    drugName: { type: String, required:true,unique:true },
    drugManufacturer: { type: String, required:true },
    drugType:{type:String},
    drugQuantity:{type:Number},
    doseMorning:{type: Number},
    doseAfternoon:{type: Number},
    doseNight:{type: Number}
  },
{timestamps:true}

);

export default mongoose.model("Prescription", PrescriptionSchema)