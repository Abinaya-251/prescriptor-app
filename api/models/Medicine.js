import mongoose from 'mongoose';
const { Schema } = mongoose;

const MedicineSchema = new Schema({
    drugName: { type: String, required:true,unique:true },
    drugDescription: { type: String, required:true },
    drugManufacturer: { type: String, required:true },
  },
{timestamps:true}

);

export default mongoose.model("Medicine", MedicineSchema)