import mongoose from 'mongoose';
const { Schema } = mongoose;

const PatientSchema = new Schema({
    patID: { type: Number, required:true,unique:true },
    patMobile: { type: Number, required:true,unique:true },
    patFirstName: { type: String, required:true},
    patLastName: { type: String, required:true },
    patLocation: { type: String, required:true },
    patGender: { type: String, required:true },
    patDOB: { type: Date, required:true },
    patFirstVisit: { type: Date, required:true },
    email: { type: String},
    
},
{timestamps:true}

);

export default mongoose.model("Patient", PatientSchema)
