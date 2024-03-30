import mongoose from 'mongoose';
const { Schema } = mongoose;

const DoctorSchema = new Schema({
    docID: { type: Number,unique:true },
    firstname: { type: String, required:true },
    lastName: { type: String, required:true },
    specialization:{type: Array,required:true},
    mobile:{type: String,required:true,unique:true},
    email: { type: String, required:true,unique:true },
    password: { type: String, required:true },
    isAdmin:{type:Boolean,default:false},
    roasterID:{ type: Number,unique:true },
    address:{type:String}
},
{timestamps:true}

);

export default mongoose.model("Doctor", DoctorSchema)