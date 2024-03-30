import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoasterSchema = new Schema({
    roasterID:{ type: Number,unique:true },
    docID:{ type: Number },
    firstname: { type: String, required:true },
    lastName: { type: String, required:true },
    day:{type:Number},
    timeslot:[{starthour: Number, startmins:string,endhour: Number, endmins:string}],
    slottime:{type:Number}
},
{timestamps:true}

);

export default mongoose.model("Roaster", RoasterSchema)