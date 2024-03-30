import mongoose from 'mongoose';
const { Schema } = mongoose;

const PrescriptionSchema = new Schema({
    drugName: { type: String, required:true,unique:true },
    drugManufacturer: { type: String, required:true },
    drugType:{type:String},
    drugQuantity:{type:String},
    doseMorning:{type: String},
    doseAfternoon:{type: String},
    doseNight:{type: String}
  },
{timestamps:true}

);

export default mongoose.model("Prescription", PrescriptionSchema)