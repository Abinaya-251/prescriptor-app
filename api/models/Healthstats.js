import mongoose from 'mongoose';
const { Schema } = mongoose;

const HealthstatSchema = new Schema({
    patVisitDate: { type: Date, required:true },
    patID: { type: Number },
    weight: { type: String },
    height: { type: String},
    diabetis: { type: Boolean },
    bloodPressure:{type:String},
    pulse:{type:String}
  },
{timestamps:true}

);

export default mongoose.model("Healthstat", HealthstatSchema)