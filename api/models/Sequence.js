import mongoose from 'mongoose';
const { Schema } = mongoose;

const SequenceSchema = new Schema({
    sequenceName: { type: String, required:true,unique:true },
    sequenceStartNumber: { type: Number},
    sequenceCurrentNumber: { type: Number},
    sequenceIncrementNumber: { type: Number}
  },
{timestamps:true}

);

export default mongoose.model("Sequence", SequenceSchema)