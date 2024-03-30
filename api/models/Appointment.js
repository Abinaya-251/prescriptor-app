import mongoose from 'mongoose';
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    appntID:{type:Number, unique:True},
    docID:{ type: Number },
    patID:{ type: Number },
    date:{type:Date,required:true},
    timeslot:{starthour: Number, startmins:String,endhour: Number, endmins:String, status:String,notes:String,patID:Number},
    
},
{timestamps:true}

);

export default mongoose.model("Appointment", AppointmentSchema)