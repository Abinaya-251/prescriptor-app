import mongoose from 'mongoose';
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    appntID:{type:Number, unique:true},
    docID:{ type: Number },
    patID:{ type: Number },
    date:{type:Date,required:true},
    status:{type:String},
    notes:{type:String},
    timeslot:{starthour: Number, startmins:String,endhour: Number, endmins:String},
    
},
{timestamps:true}

);

export default mongoose.model("Appointment", AppointmentSchema)